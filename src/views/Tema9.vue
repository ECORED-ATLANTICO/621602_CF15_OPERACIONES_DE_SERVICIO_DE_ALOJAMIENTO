<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9 
      h1 Gestión técnica de suministros

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión técnica de suministros en el área de alojamiento integra las actividades relacionadas con el control, manejo, conservación y distribución de los insumos utilizados en la operación hotelera. Su adecuada administración garantiza la disponibilidad oportuna de materiales y productos necesarios para las labores de limpieza, acondicionamiento de habitaciones y atención al huésped, favoreciendo la continuidad y eficiencia del servicio.

    separador

    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.1 Definición y clasificación

    .p-4.bg-secundario-s10.rounded-4.mb-4
      p.mb-0.text-center Los suministros son todos los elementos de consumo diario necesarios para la operación de las habitaciones y áreas comunes. Se dividen principalmente en tres clases:

    .row.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          h5.text-center Amenidades (amenities)
          p.text-center Artículos de aseo personal para el huésped (jabón, shampoo, gorro de ducha, kit dental).
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          h5.text-center Suministros de limpieza (insumos químicos)
          p.text-center Productos para higienizar superficies (detergentes, desinfectantes, limpiavidrios).
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          h5.text-center Suministros de papelería y complementos
          p.text-center Directorios, libretas, bolígrafos, papel higiénico, pañuelos faciales y bolsas de lavandería.

    separador

    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.2 Especificaciones y ficha técnica
    
    .row.justify-content-center.align-items-center.mb-3
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema9/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las especificaciones y fichas técnicas son herramientas utilizadas para identificar y describir las características, condiciones de uso y requerimientos de los productos, materiales y equipos utilizados en la operación hotelera.
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 Las especificaciones corresponden a la información relacionada con las propiedades y condiciones de un producto, tales como composición, presentación, capacidad, dimensiones, forma de uso, almacenamiento y medidas de seguridad. Esta información facilita la correcta selección y utilización de los insumos dentro de las actividades operativas.
        p.mb-0 Por su parte, la ficha técnica es el documento que reúne de manera organizada los datos específicos de un producto, equipo o material. Generalmente incluye información sobre características físicas y químicas, instrucciones de uso, recomendaciones de manipulación, condiciones de almacenamiento, riesgos, tiempo de vida útil y medidas preventivas.

    .p-4.bg-terciario-t5.rounded-4.mb-4
      p.mb-0.text-center Cada suministro debe estar respaldado por documentación técnica que garantice su idoneidad y seguridad:

    .row.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-xl-0
        .p-4.rounded-4.bg-img.bg-img--3.h-100
          h5.text-center Ficha técnica del producto
          p.mb-0.text-center Documento que describe las características físicas (color, olor), composición química, modo de empleo y precauciones.
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-xl-0
        .p-4.rounded-4.bg-img.bg-img--3.h-100
          h5.text-center Ficha de datos de seguridad (FDS / SGA)
          p.mb-0.text-center Documento que indica los niveles de toxicidad, equipo de protección personal (EPP) requerido y primeros auxilios. Es fundamental para los productos químicos.
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-xl-0
        .p-4.rounded-4.bg-img.bg-img--3.h-100
          h5.text-center Especificación de calidad
          p.mb-0.text-center Define el estándar del hotel (ej. "jabón de tocador de 20 gr con aroma a té verde y empaque biodegradable").
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-xl-0
        figure.h-100
          img.h-100(src="@/assets/curso/tema9/3.png", alt="" data-aos="fade-down-right")

    separador

    #t_9_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.3 Unidades de medida y presentación

    .p-4.bg-secundario-s5.rounded-4.mb-4
      p.mb-0.text-center Las unidades de medida y presentación son criterios que permiten determinar la cantidad y forma de entrega de los insumos utilizados en la operación hotelera. Su adecuada gestión contribuye a la eficiencia en el uso de recursos, la optimización de costos y la garantía de la calidad del servicio.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema9/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Líquidos (químicos):")
            .col-auto
              p.mb-0 galones, litros o pimpinas (para dilución posterior).
          .row(numero="2" titulo="Amenidades:")
            .col-auto
              p.mb-0 unidades (unids), cajas o gruesas (144 unidades).
          .row(numero="3" titulo="Papelería: ")
            .col-auto
              p.mb-0 resmas, paquetes o bloques.
          .row(numero="4" titulo="Presentación: ")
            .col-auto
              p.mb-0 se refiere al empaque (sachet, botella pet, envase dosificador dispenser). Los hoteles con política de sostenibilidad prefieren presentaciones de gran formato para recargar dosificadores fijos.

    separador

    #t_9_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.4 Tabla de rendimiento

    p.mb-4 La tabla de rendimiento es una herramienta utilizada para calcular y controlar el consumo y aprovechamiento de los productos e insumos empleados en la operación hotelera. Su aplicación permite determinar la cantidad de producto requerida para desarrollar determinadas actividades de limpieza, desinfección y acondicionamiento, favoreciendo el uso eficiente de los recursos y el control operativo dentro del área de alojamiento. Esto evita el desperdicio y el robo hormiga.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 8.
          span Tabla de rendimiento estimado
        .tabla-a.color-acento-contenido.tabla-a--text-left
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F0F6F9")
                th Suministro
                th Unidad de medida
                th Rendimiento (x habitación)

            tbody
              tr
                td Papel higiénico.
                td Rollo.
                td 0.25 rollos / habitación ocupada.
              tr
                td Champú (20 ml).
                td Unidad.
                td 1 unidad / persona.
              tr
                td Limpiavidrios.
                td Mililitros (ml).
                td 15 ml / habitación.
              tr
                td Jabón en barra.
                td Unidad.
                td 1 unidad / habitación (salida).

    separador

    #t_9_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.5 Procedimientos de solicitud y manejo

    .row.justify-content-center.align-items-center
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema9/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Requisición:")
            .col-auto
              p.mb-0 el auxiliar de habitaciones o la camarera solicita al ama de llaves los insumos necesarios para su turno mediante un formato de requisición interno.
          .row(numero="2" titulo="Entrega y carga del carro:")
            .col-auto
              p.mb-0 el personal alista su carro de limpieza verificando que lleve el stock suficiente para las 12-15 habitaciones asignadas.
          .row(numero="3" titulo="Devolución:")
            .col-auto
              p.mb-0 al finalizar el turno, los suministros sobrantes o envases vacíos (en el caso de químicos) deben regresar al office o almacén de piso para su conteo.

    separador

    #t_9_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.6 Catálogo técnico de suministros (ficha técnica)

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema9/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El catálogo técnico de suministros es una herramienta utilizada para organizar y describir las características, especificaciones y condiciones de uso de los productos e insumos empleados en la operación hotelera. Este documento reúne información de las fichas técnicas, como presentación, composición, forma de uso, almacenamiento, medidas de seguridad y recomendaciones de manipulación.
        .p-4.bg-secundario-s5.rounded-4.mb-3
          p.mb-0 El coordinador o supervisor de habitaciones debe manejar una ficha técnica simplificada para asegurar que el personal aplique el producto correcto en la superficie adecuada.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 9.
      span Especificaciones de insumos químicos y suministros
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #F0F6F9")
            th Suministro
            th Clasificación
            th Especificación técnica
            th Presentación

        tbody
          tr
            td Detergente multiusos.
            td Limpiador.
            td Ph neutro, biodegradable, aroma cítrico.
            td Galón / bidón 5 lts.
          tr
            td Amonio cuaternario.
            td Desinfectante.
            td Quinta generación, amplio espectro virucida.
            td Litro concentrado.
          tr
            td Limpiavidrios.
            td Solvente.
            td Base alcohol, secado rápido, sin vetas.
            td Atomizador 500 ml.
          tr
            td Papel higiénico.
            td Consumible.
            td Doble hoja, precortado, 250 hojas / rollo.
            td Paca x 48 rollos.
          tr
            td Jabón de tocador.
            td Amenidad.
            td 20 gr, envase de papel kraft (sostenible).
            td Caja x 100 unid.
  
    separador

    #t_9_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.7 Control de rendimientos y costos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema9/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p.mb-0 Permite supervisar el consumo y aprovechamiento de los insumos utilizados en la operación hotelera, facilitando el uso eficiente de los recursos y el control de gastos en el área de alojamiento. Su aplicación contribuye a mantener un equilibrio entre la calidad del servicio y la optimización de los recursos operativo. 
        p Este proceso incluye el seguimiento del consumo de productos de aseo, amenidades, lencería y demás suministros utilizados en las actividades de limpieza y acondicionamiento de habitaciones. Asimismo, permite identificar desperdicios, excesos de consumo y necesidades de reposición, favoreciendo una mejor administración de inventarios y presupuestos.
        .p-4.bg-acento-botones-a5.rounded-4
          p.mb-0 El rendimiento no es solo una métrica de ahorro, sino un indicador de calidad (poca cantidad no limpia, mucha cantidad daña la superficie).

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 10.
          span Tabla de rendimiento por unidad de producción (habitación)
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F0F6F9")
                th Insumo / suministro
                th Cantidad estándar por habitación
                th Rendimiento por unidad de medida

            tbody
              tr
                td Desinfectante baños.
                td 30 ml.
                td 1 litro = 33 habitaciones.
              tr
                td Limpiavidrios.
                td 10 ml.
                td 500 ml = 50 habitaciones.
              tr
                td Bolsas de basura
                td 2 unidades.
                td 1 paquete (50u) = 25 habitaciones.
              tr
                td Champú / acondicionador
                td 1 unidad c / u.
                td 1 caja (100u) = 100 personas.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema9/7.png", alt="")
      .col-lg-7.bg-audio.rounded-4
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.w-155.mb-4.mb-lg-0(src="@/assets/curso/common/mic.png", alt="alt")
          .col-sm-8.col-lg-8
            h5 ¿Sabías qué?
            p Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-terciario.mb-3(
              texto="“Charlas que venden” Episodio: Definir algunos principios básicos "
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

















</template>

<script>
export default {
  name: 'Tema9', // Tema 9
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
