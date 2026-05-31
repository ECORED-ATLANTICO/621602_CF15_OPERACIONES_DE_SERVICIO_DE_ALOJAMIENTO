<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Protocolos
    
    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img.z-2(src="@/assets/curso/tema3/1.png", alt="").img-fluid.d-none.d-lg-block

      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 En los establecimientos de alojamiento, los protocolos constituyen una guía técnica para desarrollar de manera organizada y segura las actividades relacionadas con la limpieza, desinfección, bioseguridad y acondicionamiento de habitaciones. Estas directrices permiten unificar criterios operativos, mejorar la ejecución de las tareas y mantener condiciones adecuadas de higiene, seguridad y presentación en los diferentes espacios destinados al servicio del huésped.

      .p-4.bg-secundario-s5.mb-4.rounded-4
        p.mb-0 Entre las acciones contempladas en estos procedimientos se encuentran las técnicas de limpieza y desinfección de superficies, áreas de contacto frecuente y elementos de uso común, así como los procesos aplicados para el arreglo y tendido de camas. 

      .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
        h5.mb-0 Tiempos estándar de limpieza (productividad)

      .row.justify-content-center.align-items-center.mb-4
        .col-sm-8.col-lg-4
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema3/2.png", alt="" data-aos="zoom-in-down")
        .col-lg-8
          p Los tiempos estándar de limpieza son parámetros definidos para orientar la ejecución de las actividades de aseo, desinfección y acondicionamiento en habitaciones y áreas comunes dentro de un establecimiento de alojamiento. Su aplicación facilita la organización eficiente de las labores operativas, permitiendo medir el rendimiento del personal y contribuyendo al cumplimiento de los niveles de calidad establecidos en la operación hotelera.
          .p-4.bg-secundario-s5.mb-4.rounded-4
            p.mb-0 La definición de estos tiempos considera diferentes factores, entre ellos el tipo de habitación, el nivel de ocupación, las condiciones de higiene requeridas, el estado de la unidad de alojamiento y la cantidad de elementos que deben intervenirse durante el proceso. También se tienen en cuenta aspectos relacionados con la experiencia del personal, la distribución de los espacios y la disponibilidad de equipos, herramientas e insumos necesarios para ejecutar las actividades operativas.

      .p-4.bg-acento-botones-a5.mb-4.rounded-4
        p.mb-0.text-center Para la planeación técnica, el coordinador debe manejar los siguientes tiempos promedio de inversión por unidad:

      .row.justify-content-center.mb-4
        .col-lg-10.col-xl-8
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 5.
            span Tiempos técnicos de ejecución por tipo de habitación
          .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
            table
              caption Nota. SENA, (2024).
              thead
                tr(style="background-color: #F0F6F9")
                  th Tipo de situación
                  th Habitación / acción
                  th Tiempo estimado (min)
              tbody
                tr
                  td Salida (#[em Check-out]).
                  td Doble (uso individual).
                  td 35 - 40
                tr
                  td Salida (#[em Check-out]).
                  td Doble (2 personas).
                  td 45 - 48
                tr
                  td Ocupada (#[em Stay-over]).
                  td Doble (2 personas).
                  td 24 - 29
                tr
                  td Cama Individual.
                  td Cambio total de ropa limpia.
                  td 4 - 5
                tr
                  td Baño (Salida).
                  td Limpieza profunda (2 personas).
                  td 12 - 14
                tr
                  td Baño (Ocupada).
                  td Limpieza de rutina (2 personas).
                  td 8 - 10

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Claves de estado de habitación

    SlyderF(columnas="col-lg-6 col-xl-4 mb-5")
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/3.svg' alt='')
        p.text-center Ocupada: asignada a un huésped y en uso durante su estadía.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/4.svg' alt='')
        p.text-center Dominar la información que se va a transmitir.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/5.svg' alt='')
        p.text-center Recordar que la imagen personal es parte del servicio.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/6.svg' alt='')
        p.text-center Ocupada, no durmió: asignada a un huésped, pero sin evidencia de uso durante la noche.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/7.svg' alt='')
        p.text-center Vacía y limpia: disponible para la venta, en adecuadas condiciones de limpieza y presentación.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/8.svg' alt='')
        p.text-center Vacía y sucia: desocupada que requiere limpieza y acondicionamiento antes de ser asignada nuevamente.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/9.svg' alt='')
        p.text-center Ocupada con cuna: ocupada que cuenta con cuna o dotación especial para infante.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/10.svg' alt='')
        p.text-center Habitación con pasador. asegurada desde el interior mediante pasador o dispositivo de seguridad.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Limpieza y desinfección: protocolos de bioseguridad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La limpieza y desinfección en el área de alojamiento hacen parte de los protocolos de bioseguridad implementados para garantizar condiciones adecuadas de higiene seguridad y prevención de riesgos dentro de los establecimientos hoteleros. Estas actividades permiten controlar la presencia de suciedad, microorganismos y agentes contaminantes en habitaciones, baños, áreas comunes y superficies de contacto frecuente, contribuyendo a proteger la salud de huéspedes y trabajadores.
        .p-4.bg-acento-contenido-a10.rounded-4.mb-3
          p.mb-0 La aplicación de protocolos de bioseguridad facilita la estandarización de los procedimientos operativos relacionados con el aseo, la manipulación de residuos, el uso de productos químicos y la desinfección de espacios, favoreciendo el cumplimiento de las normas de seguridad y salud en el trabajo, así como de los lineamientos de calidad establecidos por la organización.
        p.mb-0 Entre los principales componentes de los protocolos de limpieza y desinfección se encuentran:

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Limpieza de superficies
              p.mb-0 Comprende la eliminación de polvo, suciedad y residuos presentes en pisos, muebles, paredes, baños y demás áreas de la habitación.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/12.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Desinfección de puntos de contacto
              p.mb-0 Incluye el tratamiento de superficies manipuladas frecuentemente, como manijas, interruptores, controles, teléfonos y griferías, utilizando productos desinfectantes adecuados.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/13.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Uso de elementos de protección personal (EPP)
              p.mb-0 Contempla la utilización de guantes, tapabocas, gafas y demás implementos requeridos para reducir riesgos durante las labores operativas. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/14.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Manejo seguro de productos químicos
              p.mb-0 Hace referencia a la correcta preparación, dilución, almacenamiento y aplicación de detergentes y desinfectantes según las indicaciones técnicas.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/15.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Gestión de residuos
              p.mb-0 Incluye la recolección, clasificación y disposición adecuada de desechos generados durante las actividades de limpieza. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/16.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Control de contaminación cruzada
              p.mb-0 Corresponde a las medidas aplicadas para evitar la transferencia de microorganismos entre superficies, áreas o elementos intervenidos.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/17.png', alt='')







</template>

<script>
export default {
  name: 'Tema3',
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
