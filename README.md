# Amoxtli School - Next.js Project

Este es el proyecto completo de Amoxtli School, una unidad de capacitación y consultoría en tecnología e inteligencia artificial.

## 🚀 Tecnologías Utilizadas

- **Next.js 15.1.2** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4.1**
- **Material-UI 6.2.1**
- **Framer Motion** (animaciones)
- **react-i18next** (internacionalización ES/EN)
- **react-hook-form** (formularios)
- **Tabler Icons React**

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal (SPA)
│   └── sitemap.ts         # Sitemap SEO
├── components/            # Componentes reutilizables
│   ├── AWSchoolNavbar.tsx
│   ├── AWSchoolButton.tsx
│   ├── AWSchoolCard.tsx
│   ├── AWSchoolTitle.tsx
│   ├── AWSchoolIconBadge.tsx
│   ├── AWSchoolFooter.tsx
│   └── AWSchoolContactForm.tsx
├── sections/              # Secciones de la página
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Industries.tsx
│   ├── Workflow.tsx
│   ├── UseCases.tsx       # TODO: Implementar
│   ├── Benefits.tsx       # TODO: Implementar
│   ├── CaseStudies.tsx    # TODO: Implementar
│   ├── FAQs.tsx          # TODO: Implementar
│   └── FinalCTA.tsx
├── locales/               # Traducciones
│   ├── es/common.json
│   └── en/common.json
├── utils/                 # Utilidades
│   ├── analytics.ts       # Plausible/GA4
│   ├── seo.ts            # SEO y Schema.org
│   └── form.ts           # Validación formularios
├── styles/
│   └── globals.css
├── theme.ts              # Tema Material-UI
└── i18n.ts              # Configuración i18next
```

## 🛠️ Instalación y Configuración

### 1. Instalar dependencias
```bash
cd Documents/Projects/awd-school
npm install
```

### 2. Configuración del formulario de contacto

El proyecto incluye dos opciones para el formulario:

#### Opción A: Netlify Forms (Recomendado)
```javascript
// En src/components/AWSchoolContactForm.tsx
const FORM_PROVIDER: "netlify" | "supabase" = "netlify";
```

#### Opción B: Supabase
```javascript
// En src/components/AWSchoolContactForm.tsx
const FORM_PROVIDER: "netlify" | "supabase" = "supabase";

// Crear archivo src/utils/supabaseClient.ts:
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Crear tabla en Supabase:
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  industry VARCHAR(100) NOT NULL,
  company_size VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Configuración de Analytics

#### Plausible (Por defecto)
```javascript
// En src/app/layout.tsx - Actualizar domain
<script
  defer
  data-domain="school.amoxtli.tech"  // ← Cambiar por tu dominio
  src="https://plausible.io/js/script.js"
/>
```

#### Google Analytics 4 (Opcional)
Descomentar en `src/app/layout.tsx` y añadir tu GA4 ID.

### 4. Configuración SEO

Actualizar en `src/utils/seo.ts`:
```javascript
export const defaultSEO: SEOProps = {
  title: "Amoxtli School | Capacitación y Consultoría en Tecnología e IA",
  description: "Tu descripción aquí...",
  url: "https://school.amoxtli.tech",  // ← Tu dominio
  // ... otros campos
};
```

### 5. Assets y logos

Añadir los siguientes archivos en `/public`:
- `favicon.ico`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`
- `og-image.png` (1200x630px)

**TODO**: Reemplazar el logo de texto en `AWSchoolNavbar.tsx` con el logo real.

## 🚀 Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## 📦 Build y Deploy

### Para Netlify (Recomendado)

1. **Build del proyecto:**
```bash
npm run build
```

2. **Deploy en Netlify:**
   - Conectar repositorio GitHub
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18+

3. **Configurar DNS:**
   - En Hostinger, crear CNAME record:
     - Name: `school`
     - Target: `tu-sitio.netlify.app`
   - En Netlify, añadir dominio personalizado: `school.amoxtli.tech`

4. **Habilitar formularios Netlify:**
   - En Netlify dashboard > Forms
   - Activar form detection
   - Configurar notificaciones por email

### Variables de entorno (si usas Supabase)

Crear `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## ✅ Lista de TODOs

### Implementaciones pendientes:

1. **Secciones por completar:**
   - [ ] `UseCases.tsx` - Comparaciones antes/después por industria
   - [ ] `Benefits.tsx` - Lista de beneficios con iconos
   - [ ] `CaseStudies.tsx` - Carrusel Swiper con casos de éxito
   - [ ] `FAQs.tsx` - Acordeón con preguntas frecuentes

2. **Assets y branding:**
   - [ ] Logo real en lugar del texto "Amoxtli School"
   - [ ] Imágenes de hero y secciones
   - [ ] Ilustraciones o Lottie animations
   - [ ] Favicon personalizado

3. **Contenido:**
   - [ ] Revisar y ajustar textos en ambos idiomas
   - [ ] Añadir casos de estudio reales
   - [ ] Completar preguntas frecuentes
   - [ ] Métricas y estadísticas reales

4. **Funcionalidades avanzadas:**
   - [ ] API route para Supabase (`src/app/api/leads/route.ts`)
   - [ ] Integración con calendarios (Calendly/Microsoft Bookings)
   - [ ] PDF brochure descargable
   - [ ] Chatbot o widget de contacto

## 🎨 Sistema de Diseño

### Colores
- **Brand Pink:** `#FA206F`
- **Background:** `#FBFBFB`
- **Text Primary:** `#101010`
- **White:** `#FBFBFB`

### Tipografía
- **Font:** Quicksand (300, 400, 500, 600, 700)
- **Responsive:** Mobile-first con escalado MUI

### Componentes
- **Botones:** Bordes redondeados 24px, hover suave
- **Tarjetas:** Border radius 24-30px, efectos hover
- **Animaciones:** Framer Motion con delays escalonados

## 🔧 Troubleshooting

### Error de compilación TypeScript
```bash
npm run lint
```

### Problemas con i18next
Verificar que todos los keys estén en ambos archivos de traducción.

### Formulario no funciona
1. Verificar `FORM_PROVIDER` en `AWSchoolContactForm.tsx`
2. Para Netlify: verificar atributos `data-netlify`
3. Para Supabase: verificar configuración de cliente

## 📞 Soporte

Para soporte técnico:
- Email: contact@amoxtli.tech
- Website: [amoxtli.tech](https://amoxtli.tech)

---

**© 2024 Amoxtli School. Todos los derechos reservados.**
# awd-school
