<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas operativas y gestión química

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="").z-2
      
      .row.justify-content-center.z-2
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Las técnicas operativas y la gestión química comprenden el conjunto de procedimientos, métodos y controles aplicados en el área de alojamiento para garantizar condiciones adecuadas de limpieza, higiene, desinfección, conservación de superficies y seguridad operacional dentro de los establecimientos de hospedaje. Estas actividades incluyen procesos organizados y estandarizados relacionados con la limpieza de habitaciones, áreas comunes, mobiliario y equipos. La meta es alcanzar la eficiencia estética y sanitaria sin comprometer la vida útil de los materiales.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Técnicas de limpieza por superficies y elementos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las técnicas de limpieza aplicadas a superficies y elementos comprenden las actividades y métodos utilizados para mantener en óptimas condiciones de aseo, conservación y apariencia las distintas áreas, mobiliarios, equipos y materiales que hacen parte del servicio de alojamiento. Su aplicación depende del tipo de superficie a intervenir, el nivel de suciedad presente, la frecuencia de utilización y los lineamientos técnicos definidos por el establecimiento hotelero para asegurar la calidad en los procesos de limpieza y mantenimiento.
        p.mb-0 No todas las superficies reaccionan igual a los químicos o la fricción. Según el SENA (2024), la técnica correcta prolonga la vida útil del activo.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 1.
      span Protocolos de limpieza por componente
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. SENA, (2024).
        thead
          tr(style="background-color: #F0F6F9")
            th Elemento
            th Técnica operativa
            th Herramienta / insumo
            th Criterio de calidad
        tbody
          tr
            td Mobiliario.
            td Sacudido en húmedo (método de la mano plana).
            td Paño de microfibra / Lustramuebles.
            td Sin vetas ni residuos de grasa.
          tr
            td Accesorios.
            td Desinfección de puntos de contacto (manijas, control).
            td Alcohol isopropílico.
            td Libre de huellas y microorganismos.
          tr
            td Baños.
            td Fregado de juntas y desincrustación de loza.
            td Fibra blanca / Amonios.
            td Porcelana brillante y sin sarro.
          tr
            td Pisos.
            td Trapeado en "ocho" o zigzag de adentro hacia afuera.
            td Mopa / Detergente neutro.
            td Sin marcas de agua ni pelusas.
          tr
            td Paredes.
            td Limpieza ascendente para evitar chorreaduras.
            td Esponja suave.
            td Sin manchas de roce o polvo.
          tr
            td Ventanas.
            td Técnica de "S" o zigzag con jalador de goma.
            td Limpiavidrios.
            td Transparencia total sin rayones.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Productos de aseo y desinfección: gestión técnica

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        p Los productos de aseo y desinfección son insumos fundamentales en las operaciones de limpieza y mantenimiento del área de alojamiento, ya que permiten garantizar condiciones adecuadas de higiene, seguridad y presentación en habitaciones, baños, áreas comunes y demás espacios del establecimiento hotelero. Su uso adecuado contribuye a la eliminación de suciedad, microorganismos y otros contaminantes, favoreciendo ambientes saludables y confortables tanto para huéspedes como para trabajadores.
        .p-4.bg-acento-contenido-a5.mb-4.rounded-4
          .mb-0 La gestión técnica de estos productos comprende las actividades relacionadas con su selección, identificación, almacenamiento, manipulación, preparación y aplicación, teniendo en cuenta las características de cada sustancia, las superficies sobre las cuales serán utilizadas y los protocolos establecidos por la organización. 
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/3.png", alt="")
    
    .p-4.bg-acento-botones-a5.mb-4.rounded-4
      p.mb-0.text-center Asimismo, incluye el control del consumo, la verificación de concentraciones y el cumplimiento de medidas de seguridad orientadas a prevenir riesgos laborales, daños en los materiales y afectaciones al medio ambiente.

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/4.png", alt="")
          .crd_hover_txt--body.bg-secundario-s5
            h4.mb-3.text-center Tipos y características
            p.mb-0.text-center Se dividen en detergentes (limpian), desinfectantes (matan gérmenes) y selladores (protegen).
            
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/5.png", alt="")
          .crd_hover_txt--body.bg-secundario-s5.pt-2.pt-sm-4.pt-lg-2
            h4.mb-3.text-center Ficha técnica y hoja de seguridad (FDS/MSDS)
            p.mb-0.text-center Documentos obligatorios que dictan el uso, riesgos y primeros auxilios. Es vital el cumplimiento del Sistema Globalmente Armonizado (SGA) para el etiquetado.
    
      .col-xl-4.col-lg-6.col-md-9.col-11
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/6.png", alt="")
          .crd_hover_txt--body.bg-secundario-s5
            h4.mb-3.text-center Técnicas de dosificación
            p.mb-0.text-center Uso de bombas dosificadoras o vasos medidores. Nunca "al ojo", ya que afecta el rendimiento y la salud del trabajador.

    .p-4.px-3.bg-acento-botones-a5.mb-4.rounded-4.mb-4
      p.mb-0.text-center La correcta preparación de las soluciones químicas, de acuerdo con las indicaciones técnicas del fabricante, favorece la efectividad de los productos en la eliminación de suciedad y microorganismos, evitando desperdicios, sobrecostos y posibles afectaciones en las superficies, equipos o en la salud del personal operativo.


    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 2.
      span Tabla de rendimiento y dilución (ejemplo)
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2024).
        thead
          tr(style="background-color: #F0F6F9")
            th Producto
            th Dilución sugerida
            th Uso principal
            th Rendimiento estándar
        tbody
          tr
            td Desinfectante.
            td 10 ml por 1 litro.
            td Pisos y baños.
            td 50 m² por litro preparado.
          tr
            td Detergente neutro.
            td 20 ml por 1 litro.
            td Mobiliario.
            td 10 habitaciones por litro.
          tr
            td Limpiavidrios.
            td Uso directo.
            td Espejos / ventanas.
            td 15 m² por atomizador.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
