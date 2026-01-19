export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
          Términos de Servicio
        </h1>
        <p className="mt-3 text-sm text-ink/60">
          Última actualización: 19 de enero de 2026
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <p>
            Al acceder y usar este sitio, aceptas estos Términos de Servicio.
            Si no estás de acuerdo, por favor no utilices el sitio.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Alcance del servicio</h2>
          <p>
            Amoxtli School ofrece mentoría tecnológica y estratégica para apoyar
            decisiones de negocio relacionadas con tecnología e inteligencia
            artificial. No ofrecemos cursos técnicos ni capacitación en
            programación.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Uso permitido</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Utilizar el sitio con fines informativos y de contacto.</li>
            <li>No intentar acceder a áreas no autorizadas.</li>
            <li>No interferir con el funcionamiento del sitio.</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">
            Propiedad intelectual
          </h2>
          <p>
            El contenido, textos, marcas y materiales del sitio son propiedad
            de Amoxtli School o se usan con autorización. Queda prohibida su
            reproducción sin permiso previo.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Limitación de responsabilidad</h2>
          <p>
            El contenido se ofrece “tal cual”. Amoxtli School no garantiza que
            el sitio esté libre de errores o interrupciones. No nos hacemos
            responsables por daños derivados del uso del sitio.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Enlaces externos</h2>
          <p>
            Este sitio puede contener enlaces a terceros. No controlamos ni
            somos responsables de su contenido o políticas.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Modificaciones</h2>
          <p>
            Podemos actualizar estos términos en cualquier momento. Los cambios
            se publicarán en esta página con la fecha de actualización.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink/80">
          <h2 className="text-xl font-semibold text-ink">Contacto</h2>
          <p>
            Para dudas sobre estos términos, escribe a{" "}
            <span className="font-semibold">legal@amoxtli.tech</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
