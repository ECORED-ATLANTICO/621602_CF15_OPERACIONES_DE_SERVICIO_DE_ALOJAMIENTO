<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El componente formativo Operación, supervisión e inventarios en el área de alojamiento, orienta a los aprendices, al desarrollo de conocimientos y habilidades relacionadas con la gestión operativa, técnica y administrativa de los procesos ejecutados en el área de alojamiento de los establecimientos hoteleros. Su contenido integra procedimientos de limpieza, desinfección y manejo técnico de productos químicos, aplicando técnicas adecuadas según el tipo de superficies, mobiliario, accesorios y puntos de contacto presentes en habitaciones y áreas comunes. Además, incorpora protocolos de bioseguridad, mantenimiento preventivo y reporte de novedades, garantizando condiciones de higiene, seguridad, conservación y calidad en la prestación del servicio.
        p El componente también fortalece competencias relacionadas con la administración de inventarios, almacenamiento y control de suministros, mediante procesos de recepción, organización, clasificación, cálculo de consumos y control de existencias. De igual manera, aborda la gestión de activos operativos y el manejo de documentos de soporte y seguimiento requeridos en la operación hotelera. Asimismo, desarrolla aspectos asociados con el pronóstico de ocupación, la planificación operativa, el control de objetos olvidados (Lost & Found) y la aplicación de protocolos de imagen y presentación personal, favoreciendo el orden, la organización y la eficiencia en los procesos del área de alojamiento.
        p.mb-0 Finalmente, este componente permite al aprendiz fortalecer competencias relacionadas con la supervisión operativa, la administración eficiente de recursos y el cumplimiento de los estándares de calidad, bioseguridad y servicio exigids en el sector hotelero y de alojamien to.
    
    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="El componente formativo Operación, supervisión e inventarios en el área de alojamiento orienta el desarrollo de conocimientos y habilidades relacionadas con la gestión operativa, técnica y administrativa de los procesos hoteleros en el área de alojamiento. Integra procedimientos de limpieza, desinfección, manejo técnico de productos químicos, bioseguridad, mantenimiento preventivo y reporte de novedades, aplicando técnicas según superficies, mobiliario y puntos de contacto. Además, fortalece competencias en administración de inventarios, almacenamiento, control de suministros, gestión de activos operativos y manejo de documentos de seguimiento. Asimismo, aborda el pronóstico de ocupación, la planificación operativa, el control de objetos olvidados (Lost & Found) y los protocolos de imagen y presentación personal, contribuyendo al cumplimiento de estándares de calidad, seguridad, organización y servicio en el sector hotelero.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
