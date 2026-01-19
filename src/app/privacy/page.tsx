export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
          Aviso de Privacidad
        </h1>
        <p className="mt-3 text-sm text-ink/60">
          Última actualización: 19 de enero de 2026
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <p>
            Amoxtli School (en adelante, “Amoxtli School”) es responsable del
            tratamiento de los datos personales que recaba a través de este
            sitio. Para cualquier asunto relacionado con privacidad, puedes
            escribir a <span className="font-semibold">legal@amoxtli.tech</span>.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Datos que recabamos</h2>
          <p>
            Podemos recopilar datos personales cuando nos escribes o completas
            formularios, así como información técnica y de uso mediante cookies
            y herramientas de analítica. Estos datos pueden incluir: nombre,
            correo electrónico, empresa, cargo, mensajes, y datos de navegación
            (por ejemplo, páginas visitadas, tipo de dispositivo, y ubicación
            aproximada).
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Finalidades</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Responder solicitudes de información y contacto.</li>
            <li>Entender necesidades para brindar acompañamiento adecuado.</li>
            <li>Mejorar el sitio, su funcionamiento y experiencia.</li>
            <li>Generar estadísticas internas de uso y desempeño.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Cookies</h2>
          <p>
            Utilizamos cookies necesarias para el funcionamiento del sitio y
            cookies de analítica y marketing (opcional). Puedes ajustar tus
            preferencias en el banner de cookies o eliminarlas desde tu
            navegador.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Transferencias</h2>
          <p>
            No compartimos ni vendemos datos personales a terceros, salvo que
            sea necesario para cumplir con obligaciones legales o para operar
            servicios esenciales (por ejemplo, proveedores de analítica o
            hosting), bajo acuerdos de confidencialidad y protección adecuada.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Derechos ARCO</h2>
          <p>
            Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u
            Oposición (ARCO) enviando una solicitud a{" "}
            <span className="font-semibold">legal@amoxtli.tech</span>. Indica tu
            nombre completo, los datos sobre los que deseas ejercer tu derecho
            y una descripción clara de tu solicitud.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Seguridad</h2>
          <p>
            Implementamos medidas razonables para proteger tus datos. Sin
            embargo, ningún sistema es completamente seguro y no podemos
            garantizar seguridad absoluta.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Cambios al aviso</h2>
          <p>
            Podemos actualizar este aviso de privacidad. Cualquier cambio se
            publicará en esta página con la fecha de actualización.
          </p>
        </section>
      </div>
    </main>
  );
}
