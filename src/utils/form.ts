// Form utilities and validation

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  companySize: string;
  message: string;
  honeypot?: string; // Anti-spam honeypot field
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateForm = (data: ContactFormData): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!validateRequired(data.name)) {
    errors.name = "El nombre es requerido";
  }

  if (!validateRequired(data.email)) {
    errors.email = "El email es requerido";
  } else if (!validateEmail(data.email)) {
    errors.email = "El email no es válido";
  }

  if (!validateRequired(data.company)) {
    errors.company = "La empresa es requerida";
  }

  if (!validateRequired(data.industry)) {
    errors.industry = "La industria es requerida";
  }

  if (!validateRequired(data.companySize)) {
    errors.companySize = "El tamaño de empresa es requerido";
  }

  if (!validateRequired(data.message)) {
    errors.message = "El mensaje es requerido";
  }

  // Check honeypot for spam
  if (data.honeypot && data.honeypot.length > 0) {
    errors.honeypot = "Spam detected";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Netlify Forms submission
export const submitToNetlify = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'honeypot') { // Don't submit honeypot field
        formData.append(key, value);
      }
    });

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (response.ok) {
      return { success: true, message: "Formulario enviado exitosamente" };
    } else {
      return { success: false, message: "Error al enviar el formulario" };
    }
  } catch (error) {
    console.error("Netlify form submission error:", error);
    return { success: false, message: "Error de conexión" };
  }
};

// Supabase submission
export const submitToSupabase = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Note: This requires Supabase client to be configured
    // Remove honeypot from data before submission
    const { honeypot, ...cleanData } = data;
    
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...cleanData,
        created_at: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      return { success: true, message: "Datos guardados exitosamente" };
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.message || "Error al guardar datos" };
    }
  } catch (error) {
    console.error("Supabase submission error:", error);
    return { success: false, message: "Error de conexión con la base de datos" };
  }
};

// Main form submission function
export const submitContactForm = async (
  data: ContactFormData,
  provider: "netlify" | "supabase" = "netlify"
): Promise<{ success: boolean; message: string }> => {
  // Validate form first
  const validation = validateForm(data);
  if (!validation.isValid) {
    return {
      success: false,
      message: Object.values(validation.errors)[0],
    };
  }

  // Submit based on provider
  if (provider === "netlify") {
    return submitToNetlify(data);
  } else {
    return submitToSupabase(data);
  }
};

// Format form data for display
export const formatFormData = (data: ContactFormData): string => {
  return `
Nombre: ${data.name}
Email: ${data.email}
Empresa: ${data.company}
Industria: ${data.industry}
Tamaño: ${data.companySize}
Mensaje: ${data.message}
  `.trim();
};

// Industry options
export const industryOptions = [
  { value: "education", label: "Educación" },
  { value: "retail", label: "Retail" },
  { value: "healthcare", label: "Salud" },
  { value: "finance", label: "Finanzas" },
  { value: "manufacturing", label: "Manufactura" },
  { value: "logistics", label: "Logística" },
  { value: "legal", label: "Legal" },
  { value: "services", label: "Servicios" },
  { value: "other", label: "Otro" },
];

// Company size options
export const companySizeOptions = [
  { value: "startup", label: "Startup (1-10)" },
  { value: "small", label: "Pequeña (11-50)" },
  { value: "medium", label: "Mediana (51-200)" },
  { value: "large", label: "Grande (201-1000)" },
  { value: "enterprise", label: "Empresa (1000+)" },
];
