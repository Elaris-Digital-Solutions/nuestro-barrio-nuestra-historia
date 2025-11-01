import purposeImage from "@/assets/community-purpose.jpg";

const Purpose = () => {
  return (
    <section id="proyecto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={purposeImage}
              alt="Comunidad compartiendo historias"
              className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Nuestro <span className="text-primary">Propósito</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro Barrio, Nuestras Historias es un proyecto comunitario dedicado a rescatar, preservar y compartir las historias que hacen única a nuestra comunidad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creemos que cada vecino tiene una historia valiosa que contar, y que al compartirlas, fortalecemos los lazos que nos unen y construimos un sentido más profundo de pertenencia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A través de testimonios, fotografías, documentos y recuerdos, estamos tejiendo la memoria colectiva de nuestro barrio para las generaciones presentes y futuras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
