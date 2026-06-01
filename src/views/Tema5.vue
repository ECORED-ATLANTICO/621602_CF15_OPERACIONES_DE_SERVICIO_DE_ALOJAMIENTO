<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mantenimiento preventivo en el área de alojamiento

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 El mantenimiento preventivo en el área de alojamiento consiste en la ejecución de acciones programadas y periódicas orientadas a conservar el adecuado estado, funcionamiento y seguridad de las instalaciones, equipos, mobiliario y demás recursos utilizados en la operación hotelera. Su propósito es identificar de manera oportuna posibles deterioros, desgastes o anomalías que puedan afectar la calidad del servicio o generar inconvenientes en las habitaciones y áreas comunes.

    .p-4.bg-secundario-s5.mb-4.rounded-4
      p.mb-0 Estas acciones incluyen procesos de inspección, revisión, ajuste y limpieza técnica de componentes como sistemas eléctricos, luminarias, cerraduras, griferías, muebles, accesorios y equipos operativos presentes en el establecimiento. La aplicación constante de estas medidas contribuye a mantener condiciones adecuadas de uso, reducir la necesidad de reparaciones correctivas y prevenir interrupciones en la prestación del servicio de alojamiento.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Tipos y periodicidad

    .p-4.bg-acento-botones-a5.mb-4.rounded-4
      p.mb-0.text-center La programación de estas actividades depende de la intensidad de uso de cada elemento y las recomendaciones del fabricante.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 7.
      span Plan de mantenimiento programado
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #F0F6F9")
            th Elemento
            th(colspan="2") Actividad preventiva
            th Frecuencia
            th Responsable
        tbody
          tr
            td Aire acondicionado.
            td(colspan="2") Limpieza de filtros y revisión de gas refrigerante.
            td Mensual.
            td Técnico mantenimiento.
          tr
            td Griferías y duchas.
            td(colspan="2") Desincrustación de cal y revisión de empaques (fugas).
            td Trimestral.
            td Auxiliar habitaciones.
          tr
            td Colchones.
            td(colspan="2") Rotación (cabecera-pies / cara superior-inferior).
            td Trimestral.
            td Camarera de pisos.
          tr
            td Cerraduras electrónicas.
            td(colspan="2") Revisión de baterías y ajuste de mecanismos.
            td Semestral.
            td Técnico mantenimiento.
          tr
            td Paredes y pintura.
            td(colspan="2") Retoque de golpes y limpieza de manchas.
            td Semestral.
            td Auxiliar habitaciones.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Procedimiento de solicitud y control 

    .p-4.bg-acento-botones-a5.mb-4.rounded-4
      p.mb-0.text-center Para que la comunicación entre el ama de llaves y el departamento de mantenimiento sea efectiva, se debe seguir el flujo técnico establecido.
    
    .row.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema5/2.svg' alt='')
          h5.text-center Detección
          p.text-center La camarera o el auxiliar identifican la necesidad durante su rutina de limpieza (ej. ruido inusual en la nevera o una mancha de humedad).
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema5/3.svg' alt='')
          h5.text-center Reporte (orden de servicio)
          p.text-center Se diligencia el formato físico o digital detallando el número de habitación, el daño y la prioridad.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema5/4.svg' alt='')
          h5.text-center Ejecución
          p.text-center El técnico de mantenimiento realiza la intervención. Durante este tiempo, la habitación puede pasar a estado fuera de servicio.
      .col-sm-6.col-lg-5.col-xl-3
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema5/5.svg' alt='')
          h5.text-center Verificación y cierre
          p.text-center El ama de llaves supervisa que la reparación haya quedado estética y funcionalmente perfecta antes de liberar la habitación para la venta.

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Documentos de soporte y seguimiento 

    .p-4.bg-acento-botones-a5.mb-4.rounded-4.mb-4.mb-lg-5
      p.mb-0.text-center El registro de cada intervención es fundamental para el historial técnico del activo.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 2.
      span Clasificación del mobiliario y accesorios
    img.mb-2.d-sm-none(data-aos="fade-down", src="@/assets/curso/tema5/6-mob.svg", alt="La figura muestra la Estructura del documento de soporte y seguimiento. Cada sección describe los componentes básicos de un documento de control de mantenimiento en alojamiento: encabezado del documento, propósito, alcance, responsables y conservación. El documento permite registrar y hacer seguimiento a las solicitudes de mantenimiento, indicando la información de identificación documental, las áreas involucradas, el personal responsable —como camarera, técnico de mantenimiento y ama de llaves— y las condiciones para su conservación según la gestión documental del establecimiento.")
    img.mb-2.d-none.d-sm-block(data-aos="fade-down", src="@/assets/curso/tema5/6.svg", alt="La figura muestra la Estructura del documento de soporte y seguimiento. Cada sección describe los componentes básicos de un documento de control de mantenimiento en alojamiento: encabezado del documento, propósito, alcance, responsables y conservación. El documento permite registrar y hacer seguimiento a las solicitudes de mantenimiento, indicando la información de identificación documental, las áreas involucradas, el personal responsable —como camarera, técnico de mantenimiento y ama de llaves— y las condiciones para su conservación según la gestión documental del establecimiento.")
    figcaption  Nota. SENA, (2026).



</template>

<script>
export default {
  name: 'Tema5',
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
