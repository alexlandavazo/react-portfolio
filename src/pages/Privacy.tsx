import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const Privacy = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Política de Privacidad de Jando.dev
      </h1>
      <article className="max-w-lg p-5 my-0 mx-auto">
        <h2>Última actualización: 5 de Septiembre de 2023</h2>
        <p>
          Esta Política de Privacidad describe cómo Watch Face Digital
          ("nosotros", "nuestro", o "la aplicación") recopila, utiliza y
          comparte información personal cuando utilizas nuestra aplicación Watch
          Face Digital ("la aplicación"). Información que Recopilamos: No
          recopilamos información personal de los usuarios de nuestra aplicación
          Watch Face Digital. La aplicación es un reloj que no requiere acceso a
          la información personal del usuario ni a ninguna otra información
          sensible. Uso de la Información: Como no recopilamos información
          personal, no utilizamos ni compartimos dicha información. La
          aplicación no almacena datos personales y no tiene la capacidad de
          realizar un seguimiento de la actividad del usuario. Cambios en esta
          Política de Privacidad: Podemos actualizar nuestra Política de
          Privacidad de vez en cuando. Te notificaremos sobre cualquier cambio
          publicando la nueva Política de Privacidad en esta página. Póngase en
          Contacto con Nosotros: Si tienes alguna pregunta o inquietud acerca de
          nuestra Política de Privacidad, por favor contáctanos en{" "}
          <code>alejandrolandavazo@gmail.com</code>.
        </p>
      </article>
      <Link
        to="/"
        className="absolute w-20 right-0 bottom-0 mr-8 text-primary hover:text-white"
      >
        <BiArrowBack className="h-20 w-20 " />
      </Link>
    </div>
  );
};

export default Privacy;
