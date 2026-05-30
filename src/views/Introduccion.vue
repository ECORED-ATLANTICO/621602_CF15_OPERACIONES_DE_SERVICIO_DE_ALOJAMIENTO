<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/intro.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La gestión operativa en los establecimientos de alojamiento constituye el pilar fundamental para garantizar la satisfacción del huésped y la sostenibilidad del negocio hotelero. De acuerdo con la Organización Mundial del Turismo (2023), la calidad del servicio en el departamento de habitaciones no solo depende de la infraestructura, sino de la rigurosidad en los procesos de limpieza, desinfección y mantenimiento preventivo. Estos procesos aseguran ambientes bioseguros y estéticamente impecables, donde el uso técnico de productos químicos y la dosificación basada en fichas técnicas minimizan el impacto ambiental y optimizan los costos operativos.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro-img.png", alt="")
      .col-lg-9
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 Asimismo, la supervisión se erige como un proceso de verificación crítica que permite la trazabilidad de los estándares de calidad. Según Gallego (2021), la función del supervisor en alojamiento trasciende la inspección ocular, involucrando la documentación de informes, la gestión de objetos olvidados y la coordinación de mantenimientos programados para preservar los activos de la organización. En este contexto, el protocolo de presentación personal se integra como elemento tangible de la promesa de servicio, consolidando la confianza del cliente a través de la profesionalidad del talento humano.
        p.mb-0 Finalmente, la eficiencia administrativa en el área de alojamiento se sustenta en una gestión técnica de inventarios y suministros. La aplicación de modelos matemáticos para el cálculo de stocks mínimos, máximos y de seguridad es vital para evitar el desabastecimiento o el lucro cesante por exceso de inventario. Al respecto, Parra et al. (2022) señalan que un control riguroso en la recepción, almacenamiento y rotación de suministros, bajo criterios éticos y normativos, garantiza una cadena de suministro fluida. Por tanto, este componente programático busca desarrollar competencias que permitan al aprendiz administrar los recursos materiales con precisión, asegurando que la operación hotelera sea rentable y competitiva.

</template>

<script>
export default {
  name: 'Introduccion',
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
