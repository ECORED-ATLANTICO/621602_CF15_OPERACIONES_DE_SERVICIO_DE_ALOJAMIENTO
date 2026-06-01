<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión técnica de habitaciones
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La clasificación del mobiliario y los accesorios en el área de alojamiento permite identificar, organizar y gestionar los diferentes elementos que hacen parte de la dotación y funcionamiento de las habitaciones y zonas comunes dentro de un establecimiento hotelero. Estos componentes cumplen funciones relacionadas con el confort, la funcionalidad, la decoración, la seguridad y la adecuada prestación del servicio al huésped, por lo que requieren procedimientos específicos de limpieza, conservación, mantenimiento y control operativo. 
        p.mb-0 Asimismo, el conocimiento técnico del mobiliario y los accesorios contribuye a prevenir daños ocasionados por el uso inadecuado de productos químicos, la manipulación incorrecta o la aplicación deficiente de procedimientos operativos. Esto favorece la conservación de los elementos, prolonga su vida útil y permite mantener los estándares de calidad, presentación y funcionalidad exigidos en el servicio de alojamiento.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-6.mb-4.mb-lg-0
        .p-4.py-3.bg-img.bg-img--9.rounded-4.h-100
          p.mb-0 #[strong Mobiliario]: conjunto de muebles de diversos estilos (madera, fórmica, pino, ratán) que brindan comodidad: camas, mesitas de noche, escritorio, peinadora, sillas, sofá cama, mesa de centro, butacas, mesa de comedor y porta equipaje.
      .col-lg-6
        .p-4.py-3.bg-img.bg-img--9.rounded-4.h-100
          p.mb-0 #[strong Accesorios]: artículos que complementan la decoración: bandejas, termos, vasos, ceniceros, cortinas, lámparas (de pie, mesa, pared), cuadros (al óleo o con vidrio), adornos florales, matas y adornos diversos.

    .row.justify-content-center.align-items-center.z-2.bg-secundario-s1.pt-3.rounded-4
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Clasificación del mobiliario y accesorios
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/3.png", alt="La figura muestra la clasificación del mobiliario y accesorios que pueden encontrarse en una habitación. Esta se divide en dos partes: al lado izquierdo señala la clasificación del mobiliario de la habitación, el cual está compuesto por la cama, un escritorio y una silla. Al lado derecho la clasificación de accesorios; como lo son:  objetos como cuadros, materas, lámparas, vasos, jarras, toallas, porta toallas y porta equipaje.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/2.png", alt="La figura muestra la clasificación del mobiliario y accesorios que pueden encontrarse en una habitación. Esta se divide en dos partes: al lado izquierdo señala la clasificación del mobiliario de la habitación, el cual está compuesto por la cama, un escritorio y una silla. Al lado derecho la clasificación de accesorios; como lo son:  objetos como cuadros, materas, lámparas, vasos, jarras, toallas, porta toallas y porta equipaje.")
        figcaption  Nota. SENA, (2024).

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Técnicas de intervención según el mobiliario

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las técnicas de intervención según el mobiliario corresponden a los procedimientos aplicados para la limpieza, conservación, mantenimiento y tratamiento de los diferentes elementos que conforman la dotación del área de alojamiento. Estas técnicas se desarrollan teniendo en cuenta las características físicas y funcionales de cada mueble, el tipo de material con el que ha sido fabricado, su nivel de uso y las condiciones operativas del establecimiento hotelero.
        .p-4.bg-secundario-s5.rounded-4.mb-3
          p.mb-0 Cada tipo de mobiliario requiere cuidados específicos de acuerdo con sus materiales y acabados. Por esta razón, las actividades operativas deben ejecutarse siguiendo procedimientos organizados que incluyan la adecuada selección de insumos, el uso correcto de equipos y la aplicación de medidas preventivas orientadas a minimizar el desgaste, las manchas, la corrosión, la humedad y otros factores que puedan afectar la integridad y conservación de los elementos.
        p.mb-0 Protocolos técnicos según material de mobiliario

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Muebles de descanso
              p Material: madera (laminada / maciza). 
              p Técnica de limpieza: limpieza con paño de microfibra casi seco. Aplicar silicona o cera protectora en el sentido de la veta.
              p.mb-0 Frecuencia sugerida: diaria (polvo) / mensual (nutrición).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/5.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Tapizados
              p Material: tela / microfibra.
              p Técnica de limpieza: aspirado profundo para eliminar ácaros. Limpieza de manchas con espuma seca.
              p.mb-0 Frecuencia sugerida: semanal (aspirado) / trimestral (lavado).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/6.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Superficies de trabajo
              p Material: vidrio / cristal.
              p Técnica de limpieza: uso de limpiavidrios con técnica de zigzag. Secado con paño que no deje pelusas.
              p.mb-0 Frecuencia sugerida: diaria.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/7.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Material: acero / cromo.
              p Técnica de limpieza: desinfección y brillo con paño seco. Evitar fibras abrasivas que rayen el material.
              p.mb-0 Frecuencia sugerida: diaria.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/8.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Los productos de aseo y desinfección son insumos fundamentales en las operaciones de limpieza y mantenimiento del área de alojamiento, ya que permiten garantizar condiciones adecuadas de higiene, seguridad y presentación en habitaciones, baños, áreas comunes y demás espacios del establecimiento hotelero. Su uso adecuado contribuye a la eliminación de suciedad, microorganismos y otros contaminantes, favoreciendo ambientes saludables y confortables tanto para huéspedes como para trabajadores.
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 La gestión técnica de estos productos comprende las actividades relacionadas con su selección, identificación, almacenamiento, manipulación, preparación y aplicación, teniendo en cuenta las características de cada sustancia, las superficies sobre las cuales serán utilizadas y los protocolos establecidos por la organización. 


    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 3.
      span Matriz de limpieza: mobiliario de habitación
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2024).
        thead
          tr(style="background-color: #F0F6F9")
            th Elemento
            th Producto sugerido
            th(colspan="2") Técnica operativa
            th Frecuencia
        tbody
          tr
            td Muebles de madera / fórmica.
            td Crema, aceite para pulir o paño húmedo.
            td(colspan="2") Retirar polvo con paño. Aplicar aceite con un paño y pulir con otro seco.
            td 
              p.mb-0 Polvo: diario. 
              p.mb-0 Pulido: 2-3 veces/semana.
          tr
            td Muebles de tela.
            td Shampoo específico / Aspirado.
            td(colspan="2") Aspirar con el cepillo indicado. El lavado lo realiza personal especializado.
            td Cuando presenten suciedad.
          tr
            td Vitrinas y espejos.
            td Limpiavidrios / Solución detergente.
            td(colspan="2") Fregar marcos con esponja, limpiar vidrio y pulir con papel absorbente.
            td En habitaciones de salida.


    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        .p-4.bg-img.bg-img--8.rounded-4.mb-4.mb-lg-0
          p.mb-0 La limpieza de los accesorios y elementos complementarios de una habitación de hotel comprende las actividades orientadas a mantener en adecuadas condiciones de higiene, funcionamiento y presentación los diferentes componentes que hacen parte de la ambientación y dotación del espacio de alojamiento.  Asimismo, el adecuado mantenimiento de estos componentes contribuye a conservar su funcionalidad y prolongar su vida útil, favoreciendo el cumplimiento de los estándares operativos, de bioseguridad y de calidad establecidos en los servicios de alojamiento.
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/10.png", alt="")


    .row.justify-content-center.mb-4
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 4.
          span Matriz de limpieza: accesorios y complementos
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
          table
            caption Nota. SENA, (2024).
            thead
              tr(style="background-color: #F0F6F9")
                th Accesorio
                th(colspan="2") Producto
                th(colspan="2") Procedimiento técnico
            tbody
              tr
                td Bandeja, termo, vasos.
                td(colspan="2") Solución detergente higienizante.
                td(colspan="2") Lavar, dejar actuar y pasar por agua caliente para eliminar bacterias. Secar bien.
              tr
                td Ceniceros.
                td(colspan="2") Solución detergente.
                td(colspan="2") Vaciar cenizas, lavar para eliminar olor y suciedad. Enjuagar y secar.
              tr
                td Cortinas.
                td(colspan="2") Aspirado / detergente.
                td(colspan="2") Correr y aspirar con cepillo. Lavado en seco o tintorería según material.
              tr
                td Lámparas.
                td(colspan="2") Shampoo (pantallas) / brasso (metal).
                td(colspan="2") Desconectar antes. Quitar polvo con paño seco. Limpiar pantallas con espuma.
              tr
                td Cuadros al óleo.
                td(colspan="2") Paño seco (pintura) / húmedo (marco).
                td(colspan="2") Retirar polvo del área pintada solo con paño seco. No tocar la pintura con humedad.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Procedimiento para paredes y ventanas

    .p-4.bg-acento-contenido-a5.rounded-4.mb-3
      p.mb-0.text-center La limpieza de superficies verticales requiere una técnica ascendente para evitar marcas permanentes.

    .row.justify-content-center.align-items-center
      .col-lg-6
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-6
        .row.justify-content-center.mb-5
          .col-lg-6.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/12.svg', alt='')
              .tarjeta.bg-acento-botones-a5
                .p-4.text-center
                  h5.text-center Ventanas y espejos
                  p.text-center.mb-0 Utilizar solución detergente o limpiavidrios. Es vital fregar primero los marcos con una esponja sin manchar el vidrio. Retirar el producto con un haragán (limpiador de goma) para no dejar residuos y pulir.
          .col-lg-6.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/13.svg', alt='')
              .tarjeta.bg-acento-botones-a5
                .p-4.text-center
                  h5.text-center Paredes diversas
                  p.text-center.mb-0 Quitar primero polvo y telarañas con cepillo. Enjabonar con esponja o paño y retirar con paño húmedo.


    .row.justify-content-center.align-items-stretch.z-2
      .col-lg-10
        .bg-acento-contenido-a5.bg-special.rounded-4.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.position-lg-relative.z-2
              img.position-lg-absolute.img-flotante(src="@/assets/curso/common/notebook.png", alt="").img-fluid.d-none.d-lg-block
            .col-lg-10
              p.mb-0 #[strong Nota técnica:]. No usar detergentes fuertes o ácidos en paredes pintadas. En paredes de madera, usar aceites o cremas específicas.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Limpieza de accesorios y puntos de contacto 

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/14.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p.mb-4 Corresponde a las actividades orientadas a conservar en adecuadas condiciones de higiene y presentación las superficies y objetos que son manipulados frecuentemente por huéspedes y trabajadores dentro de las habitaciones y áreas comunes del establecimiento de alojamiento, debido a que son los espacios donde se concentra una mayor carga microbiana. Entre los principales puntos de contacto se encuentran manijas, interruptores, controles remotos, teléfonos, pasamanos, griferías, chapas, botones, escritorios, mesas y otros componentes de uso constante durante la operación hotelera. Debido a su frecuente manipulación, estos elementos requieren procesos periódicos de limpieza y desinfección, utilizando productos y técnicas apropiadas según el tipo de material y las recomendaciones establecidas por el fabricante.
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Lámparas y pantallas")
            .col-auto
              p.mb-0 Limpieza con plumero o paño seco para evitar manchas de humedad en las pantallas de tela.
          .row(numero="2" titulo="Cuadros y marcos")
            .col-auto
              p.mb-0 Limpieza de marcos con paño húmedo y vidrios con producto específico. Verificar siempre la alineación (simetría visual).
          .row(numero="3" titulo="Puntos de alto contacto (<em>high-touch</em>)")
            .col-auto
              p Se debe garantizar la desinfección de:
              .px-3
                ul.checklist
                  li
                    | Control remoto (usar fundas protectoras si el protocolo lo indica).
                  li
                    | Teléfonos y teclados.
                  li
                    | Manijas de puertas y cajones.
                  li
                    | Interruptores de luz.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Mantenimiento y reporte de novedades

    .row.g-0.rounded-4.bg-secundario-s5.mb-5.justify-content-center
      .col-sm-6.col-lg-3.d-flex.align-items-center
        figure.m-0
          img(src="@/assets/curso/tema2/15.png", alt="" data-aos="zoom-in-down")
      .col-lg-9.p-4.p-xl-0
        .d-flex.flex-column.justify-content-center.h-100
          p.mb-0.px-lg-3 Durante las actividades operativas de limpieza, supervisión y alistamiento de habitaciones, el personal del área de alojamiento debe inspeccionar constantemente el estado de las instalaciones con el fin de identificar daños, anomalías o condiciones que requieran atención técnica o acciones correctivas. Entre las situaciones más comunes se encuentran problemas eléctricos, filtraciones, deterioro del mobiliario, fallas en equipos, inconvenientes de iluminación y desgaste de accesorios o elementos de uso frecuente.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-5
      .row.justify-content-center.align-items-center(titulo="Inspección táctil")
        .col-sm-10.col-lg-8.col-xl-7.mb-4.mb-lg-0
          p.mb-0 Consiste en verificar manualmente el estado de muebles, accesorios, equipos y superficies para identificar humedad, desprendimientos, inestabilidad, desgaste o fallas que no siempre son visibles a simple vista. Esta actividad permite detectar oportunamente condiciones que puedan afectar la seguridad, funcionalidad o presentación de las habitaciones.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/16.png", alt="" data-aos="zoom-in-down")

      .row.justify-content-center.align-items-center(titulo="Reporte de daños")
        .col-sm-10.col-lg-8.col-xl-7.mb-4.mb-lg-0
          p.mb-0 Corresponde al registro y comunicación de averías, deterioros o irregularidades detectadas durante las labores operativas. Su finalidad es informar oportunamente al área responsable para gestionar acciones de mantenimiento preventivo o correctivo que garanticen la continuidad y calidad del servicio.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/17.png", alt="" data-aos="zoom-in-down")

      .row.justify-content-center.align-items-center(titulo="Verificación de funcionamiento")
        .col-sm-10.col-lg-8.col-xl-7.mb-4.mb-lg-0
          p.mb-0 Actividad orientada a comprobar el correcto funcionamiento de equipos y elementos de uso frecuente dentro de la habitación, como luminarias, cerraduras, griferías, aire acondicionado, teléfonos, controles y tomas eléctricas. Su aplicación permite prevenir fallas operativas y asegurar condiciones adecuadas de confort y seguridad para el huésped.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/18.png", alt="" data-aos="zoom-in-down")

      .row.justify-content-center.align-items-center(titulo="Control de condiciones locativas")
        .col-sm-10.col-lg-8.col-xl-7.mb-4.mb-lg-0
          p.mb-0 Revisar el estado general de paredes, pisos, techos, ventanas y demás componentes estructurales de la habitación para identificar manchas, humedad, fisuras, desprendimientos o deterioros que puedan afectar la imagen, seguridad o mantenimiento del espacio de alojamiento.
        .col-sm-8.col-lg-4.col-xl-3
          figure
            img(src="@/assets/curso/tema2/19.png", alt="" data-aos="zoom-in-down")




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
