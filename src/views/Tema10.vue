<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10 
      h1 Gestión de activos de operación

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema10/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La gestión de activos de operación en el área de alojamiento integra las actividades relacionadas con el control, conservación, mantenimiento y administración de los elementos reutilizables necesarios para la prestación del servicio hotelero. Entre estos recursos se encuentran lencería, menaje, mobiliario, equipos operativos y demás elementos utilizados diariamente en habitaciones y áreas comunes del establecimiento.

      .p-4.bg-secundario-s10.rounded-4
        p.mb-0.text-center Para garantizar su adecuado funcionamiento y conservación, se desarrollan procesos de inventario, almacenamiento, inspección, clasificación, seguimiento y mantenimiento, aplicando procedimientos que favorecen el control de los recursos y contribuyen a prolongar su vida útil.

    separador

    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 10.1 Definición y clasificación

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema10/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-4.bg-acento-contenido-a10.rounded-4.mb-3
          p.mb-0 Los activos de operación son todos los elementos necesarios para el montaje de la habitación y el servicio al huésped que no se consumen con el primer uso, sino que se lavan, desinfectan y reutilizan. Su control es vital para el ama de Llaves, ya que su escasez impide la venta de habitaciones.
        
    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Tipos de activos de operación

    .p-4.bg-secundario-s5.rounded-4.mb-4
      p.mb-0.text-center Se clasifican según su naturaleza y el área de uso:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--7.p-4.h-100
          h4.text-center Lencería (blancos): 
          p.mb-0.text-center sábanas, fundas, protectores de colchón, edredones (#[em duvets]), toallas (cuerpo, manos, facial, pie de baño) y batas.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--7.p-4.h-100
          h4.text-center Menaje y cristalería: 
          p.mb-0.text-center Vasos, tazas, platos de minibar, termos y bandejas.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .tarjeta.bg-img.bg-img--7.p-4.h-100
          h4.text-center Elementos de confort: 
          p.mb-0.text-center Almohadas, mantas adicionales, cojines decorativos y pies de cama.
      .col-sm-6.col-lg-5.col-xl-3
        .tarjeta.bg-img.bg-img--7.p-4.h-100
          h4.text-center Accesorios de habitación: 
          p.mb-0.text-center Ganchos de ropa (perchas), cubetas de hielo, secadores de pelo y planchas.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Ficha técnica de activos

    .p-4.bg-acento-contenido-a10.rounded-4.mb-5
      p.mb-0.text-center Para garantizar la durabilidad y la estandarización, cada activo debe cumplir con especificaciones técnicas de compra y mantenimiento.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 11.
          span Especificaciones técnicas de activos de operación
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F0F6F9")
                th Activo
                th(colspan="2") Especificación técnica (ejemplo)
                th(colspan="2") Criterio de calidad
            tbody
              tr
                td Sábana blanca.
                td(colspan="2") Percal 250 hilos, 60 % algodón / 40 % poliéster.
                td(colspan="2") Resistencia a 200 lavados, sin pilling (moteo).
              tr
                td Toalla cuerpo.
                td(colspan="2") Gramaje de 550 g/m², 100 % algodón     ring-spun.
                td(colspan="2") Alta absorción, suavidad al tacto, doble costura.
              tr
                td Almohada.
                td(colspan="2") Relleno de fibra siliconada virgen, 700 gr.
                td(colspan="2") Hipoalergénica, recupera forma (resiliencia).
              tr
                td Vaso de vidrio.
                td(colspan="2") Vidrio templado, capacidad 12 oz.
                td(colspan="2") Transparencia total, resistente a choques térmicos.


    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Procedimiento de manejo y reposición

    .p-4.bg-acento-contenido-a10.rounded-4.mb-4
      p.mb-0.text-center Para que el hotel funcione sin contratiempos, se aplica el concepto de "<strong><em>Par Stock</em></strong>" (inventario base). Generalmente, un hotel maneja de 3 a 5 juegos de lencería por habitación (uno puesto, uno sucio en lavandería, uno limpio en estante).

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Procedimiento de reposición:

    .row.mb-5.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema10/3.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .ps-1.py-4.pe-4
              h5 Conteo en la salida: 
              p.mb-0 Al hacer el aseo, el auxiliar de habitaciones verifica que no falten activos (ej. Toallas o ganchos).
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema10/4.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .ps-1.py-4.pe-4
              h5 Reporte de bajas: 
              p.mb-0 Si una sábana está rota o manchada permanentemente, se retira de operación y se reporta como "baja".
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema10/5.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .ps-1.py-4.pe-4
              h5 Reposición por #[em stock]: 
              p.mb-0 El ama de llaves autoriza la salida de activos nuevos del almacén para mantener el par stock completo.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema10/6.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .ps-1.py-4.pe-4
              h5 Rotación: 
              p.mb-0 Para que el desgaste sea uniforme, la lencería que sale de lavandería debe colocarse debajo de la que ya está en el estante (uso equitativo).
      
  
  
  </template>

<script>
export default {
  name: 'Tema10',
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
