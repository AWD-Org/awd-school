import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  companySize: string;
  message: string;
  honeypot?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Anti-spam check
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam detected" },
        { status: 400 }
      );
    }

    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'industry', 'companySize', 'message'];
    const missingFields = requiredFields.filter(field => !data[field as keyof ContactFormData]?.trim());
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: `Campos requeridos faltantes: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: "Formato de email inválido" },
        { status: 400 }
      );
    }

    // Business email template - matching website design
    const emailHTML = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva consulta - Amoxtli School</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      </head>
      <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #FBFBFB 0%, #F5F5F5 100%); font-family: 'Quicksand', Arial, Helvetica, sans-serif;">
        
        <table width="100%" cellpadding="0" cellspacing="0" style="padding: 30px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 24px; box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1); overflow: hidden; max-width: 600px;">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #FA206F 0%, #E01D63 100%); padding: 40px 30px; text-align: center; position: relative;">
                    <h1 style="color: #FBFBFB; margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2;">
                      Nueva Consulta
                    </h1>
                    <p style="color: #FBFBFB; margin: 15px 0 0 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 500; opacity: 0.95;">
                      Amoxtli School
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px; background-color: #FBFBFB;">
                    
                    <!-- Contact Info Card -->
                    <div style="background-color: #FFFFFF; border-radius: 24px; padding: 30px; margin-bottom: 20px; box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1); transition: all 0.3s ease-in-out;">
                      <h3 style="color: #FA206F; margin: 0 0 25px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600;">
                        Información de Contacto
                      </h3>
                      <table width="100%" cellpadding="12" cellspacing="0">
                        <tr>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; width: 140px; font-size: 16px;">Nombre:</td>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; color: #333333; font-size: 16px;">${data.name}</td>
                        </tr>
                        <tr>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 16px;">Email:</td>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; color: #333333; font-size: 16px;">
                            <a href="mailto:${data.email}" style="color: #FA206F; text-decoration: none; font-weight: 500;">${data.email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 16px;">Empresa:</td>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; color: #333333; font-size: 16px;">${data.company}</td>
                        </tr>
                        <tr>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 16px;">Industria:</td>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; color: #333333; font-size: 16px;">${data.industry}</td>
                        </tr>
                        <tr>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 16px;">Tamaño:</td>
                          <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; color: #333333; font-size: 16px;">${data.companySize}</td>
                        </tr>
                      </table>
                    </div>
                    
                    <!-- Message Card -->
                    <div style="background-color: #FFFFFF; border-radius: 24px; padding: 30px; margin-bottom: 30px; box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1);">
                      <h3 style="color: #FA206F; margin: 0 0 20px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600;">
                        Mensaje
                      </h3>
                      <div style="background: linear-gradient(135deg, #FBFBFB 0%, #F5F5F5 100%); padding: 25px; border-radius: 12px; font-family: 'Quicksand', Arial, Helvetica, sans-serif; line-height: 1.6; color: #333333; font-size: 16px;">
                        ${data.message.replace(/\n/g, '<br>')}
                      </div>
                    </div>
                    
                    <!-- Action Button -->
                    <div style="text-align: center; margin: 30px 0;">
                      <a href="mailto:${data.email}?subject=Re: Tu consulta en Amoxtli School" 
                         style="background: linear-gradient(135deg, #FA206F 0%, #E01D63 100%); color: #FBFBFB; padding: 15px 30px; border-radius: 24px; text-decoration: none; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0px 8px 32px rgba(250, 32, 111, 0.3); transition: all 0.3s ease-in-out;">
                        Responder Consulta
                      </a>
                    </div>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background: linear-gradient(135deg, #FBFBFB 0%, #F5F5F5 100%); padding: 30px; text-align: center; border-top: 1px solid rgba(250, 32, 111, 0.1);">
                    <p style="margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 14px; color: #666666;">
                      Esta consulta fue enviada desde 
                      <a href="https://school.amoxtli.tech" style="color: #FA206F; text-decoration: none; font-weight: 600;">school.amoxtli.tech</a>
                    </p>
                    <p style="margin: 10px 0 0 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 12px; color: #666666; opacity: 0.8;">
                      ${new Date().toLocaleString('es-ES', { timeZone: 'America/Mexico_City' })}
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const emailText = `
Nueva consulta desde Amoxtli School

Información de contacto:
- Nombre: ${data.name}
- Email: ${data.email}
- Empresa: ${data.company}
- Industria: ${data.industry}
- Tamaño de empresa: ${data.companySize}

Mensaje:
${data.message}

---
Esta consulta fue enviada desde el formulario de contacto en school.amoxtli.tech
    `;

    // Send email to your business email
    const msg = {
      to: process.env.CONTACT_EMAIL || 'school@amoxtli.tech', // Your business email
      from: {
        email: process.env.FROM_EMAIL || 'noreply@amoxtli.tech',
        name: 'Amoxtli School'
      },
      replyTo: data.email,
      subject: `Nueva consulta de ${data.name} - ${data.company}`,
      text: emailText,
      html: emailHTML,
    };

    // Send confirmation email to the user
    const confirmationMsg = {
      to: data.email,
      from: {
        email: process.env.FROM_EMAIL || 'noreply@amoxtli.tech',
        name: 'Amoxtli School'
      },
      subject: 'Confirmación: Hemos recibido tu consulta - Amoxtli School',
      text: `
Hola ${data.name},

¡Gracias por contactarnos! Hemos recibido tu consulta y nos pondremos en contacto contigo pronto.

Resumen de tu consulta:
- Empresa: ${data.company}
- Industria: ${data.industry}
- Mensaje: ${data.message}

Nuestro equipo revisará tu consulta y te responderá dentro de las próximas 24 horas.

Saludos,
El equipo de Amoxtli School
      `,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación - Amoxtli School</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #FBFBFB 0%, #F5F5F5 100%); font-family: 'Quicksand', Arial, Helvetica, sans-serif;">
          
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 30px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 24px; box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1); overflow: hidden; max-width: 600px;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #FA206F 0%, #E01D63 100%); padding: 50px 30px; text-align: center; position: relative;">
                      <h1 style="color: #FBFBFB; margin: 0 0 15px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 700; line-height: 1.2;">
                        ¡Gracias por contactarnos!
                      </h1>
                      <p style="color: #FBFBFB; margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 500; opacity: 0.95;">
                        Tu consulta ha sido recibida exitosamente
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px; background-color: #FBFBFB;">
                      
                      <!-- Greeting -->
                      <div style="text-align: center; margin-bottom: 40px;">
                        <h2 style="color: #333333; margin: 0 0 20px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 28px; font-weight: 600; line-height: 1.2;">
                          Hola, <span style="color: #FA206F; font-weight: 700;">${data.name}</span>
                        </h2>
                        <p style="color: #666666; margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; font-weight: 400;">
                          Hemos recibido tu consulta y nuestro equipo la revisará cuidadosamente para brindarte la mejor propuesta de capacitación.
                        </p>
                      </div>
                      
                      <!-- Summary Card -->
                      <div style="background-color: #FFFFFF; border-radius: 24px; padding: 35px; margin: 25px 0; box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1);">
                        <h3 style="color: #FA206F; margin: 0 0 25px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600;">
                          Resumen de tu consulta
                        </h3>
                        <table width="100%" cellpadding="12" cellspacing="0">
                          <tr>
                            <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; width: 120px; font-size: 16px;">Empresa:</td>
                            <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; color: #333333; font-size: 16px;">${data.company}</td>
                          </tr>
                          <tr>
                            <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 16px;">Industria:</td>
                            <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; color: #333333; font-size: 16px;">${data.industry}</td>
                          </tr>
                          <tr>
                            <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 16px;">Tamaño:</td>
                            <td style="font-family: 'Quicksand', Arial, Helvetica, sans-serif; color: #333333; font-size: 16px;">${data.companySize}</td>
                          </tr>
                        </table>
                        
                        <div style="margin-top: 25px; padding-top: 25px; border-top: 1px solid rgba(250, 32, 111, 0.2);">
                          <p style="margin: 0 0 15px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-weight: 600; color: #333333; font-size: 16px;">Tu mensaje:</p>
                          <div style="background: linear-gradient(135deg, #FBFBFB 0%, #F5F5F5 100%); padding: 20px; border-radius: 12px; font-family: 'Quicksand', Arial, Helvetica, sans-serif; line-height: 1.6; color: #333333; font-size: 16px; font-style: italic;">
                            ${data.message.replace(/\n/g, '<br>')}
                          </div>
                        </div>
                      </div>
                      
                      <!-- Response Time -->
                      <div style="background-color: #FFFFFF; border-radius: 24px; padding: 35px; text-align: center; margin: 25px 0; box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1); border: 2px solid rgba(250, 32, 111, 0.1);">
                        <h3 style="color: #FA206F; margin: 0 0 20px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600;">
                          Tiempo de Respuesta
                        </h3>
                        <p style="color: #333333; margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 18px; line-height: 1.6; font-weight: 400;">
                          Nuestro equipo de expertos revisará tu consulta y te responderá dentro de las próximas <strong style="color: #FA206F; font-weight: 700;">24 horas</strong> con una propuesta personalizada.
                        </p>
                      </div>
                      
                      <!-- What's Next -->
                      <div style="background-color: #FFFFFF; border-radius: 24px; padding: 35px; margin: 25px 0; box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1);">
                        <h3 style="color: #333333; margin: 0 0 30px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; text-align: center;">
                          ¿Qué sigue?
                        </h3>
                        <table width="100%" cellpadding="15" cellspacing="0">
                          <tr>
                            <td style="text-align: center; width: 33.33%;">
                              <div style="background: linear-gradient(135deg, #FA206F 0%, #E01D63 100%); color: #FBFBFB; border-radius: 50%; width: 50px; height: 50px; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px; font-family: 'Quicksand', Arial, Helvetica, sans-serif;">1</div>
                              <p style="margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 16px; color: #666666; font-weight: 500;">Análisis de<br>necesidades</p>
                            </td>
                            <td style="text-align: center; width: 33.33%;">
                              <div style="background: linear-gradient(135deg, #FA206F 0%, #E01D63 100%); color: #FBFBFB; border-radius: 50%; width: 50px; height: 50px; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px; font-family: 'Quicksand', Arial, Helvetica, sans-serif;">2</div>
                              <p style="margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 16px; color: #666666; font-weight: 500;">Propuesta<br>personalizada</p>
                            </td>
                            <td style="text-align: center; width: 33.33%;">
                              <div style="background: linear-gradient(135deg, #FA206F 0%, #E01D63 100%); color: #FBFBFB; border-radius: 50%; width: 50px; height: 50px; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 15px; font-weight: 700; font-size: 20px; font-family: 'Quicksand', Arial, Helvetica, sans-serif;">3</div>
                              <p style="margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 16px; color: #666666; font-weight: 500;">Inicio de<br>capacitación</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #FBFBFB 0%, #F5F5F5 100%); padding: 40px 30px; text-align: center; border-top: 1px solid rgba(250, 32, 111, 0.1);">
                      <div style="margin-bottom: 25px;">
                        <h4 style="color: #FA206F; margin: 0 0 10px 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 600;">
                          El equipo de Amoxtli School
                        </h4>
                        <p style="color: #666666; margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 400;">
                          Especialistas en capacitación tecnológica e IA
                        </p>
                      </div>
                      
                      <div style="margin: 25px 0;">
                        <a href="https://school.amoxtli.tech" style="color: #FA206F; text-decoration: none; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600;">
                          school.amoxtli.tech
                        </a>
                      </div>
                      
                      <p style="margin: 0; font-family: 'Quicksand', Arial, Helvetica, sans-serif; font-size: 14px; color: #999999; line-height: 1.4; font-weight: 300;">
                        Si no solicitaste esta información, puedes ignorar este email.<br>
                        Este mensaje fue enviado automáticamente, por favor no respondas a este correo.
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(msg),
      sgMail.send(confirmationMsg)
    ]);

    return NextResponse.json({
      success: true,
      message: "Consulta enviada exitosamente. Recibirás una confirmación por email."
    });

  } catch (error: any) {
    console.error("SendGrid error:", error);
    
    // More specific error handling
    if (error.code === 401) {
      return NextResponse.json(
        { success: false, message: "Error de configuración del servicio de email" },
        { status: 500 }
      );
    }
    
    if (error.code === 400) {
      return NextResponse.json(
        { success: false, message: "Error en los datos del email" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint is working" },
    { status: 200 }
  );
}