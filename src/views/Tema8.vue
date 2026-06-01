<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Imagen y presentación personal

    .row.justify-content-center.align-items-center.mb-3
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La imagen y presentación personal en el área de alojamiento son aspectos fundamentales en la prestación del servicio hotelero, ya que reflejan organización, profesionalismo y calidad dentro del establecimiento. Una adecuada apariencia del personal genera confianza, buena impresión y satisfacción en los huéspedes, fortaleciendo la percepción positiva del servicio recibido.
        .p-4.bg-terciario-t5.rounded-4
          p.mb-0 La presentación personal incluye aspectos relacionados con la higiene, el cuidado personal, el uso apropiado del uniforme, la postura, la actitud y el comportamiento durante el desarrollo de las actividades operativas, de acuerdo con las políticas establecidas por el hotel.
    
    .p-4.bg-secundario-s5.rounded-4.mb-4
      p.mb-0 Además, una buena imagen personal favorece la comunicación con el huésped, y contribuye al cumplimiento de los protocolos de bioseguridad, orden y seguridad en el área de alojamiento, proyectando responsabilidad, respeto y compromiso con la calidad del servicio

    separador

    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Protocolos de porte de uniformes

    p Establecen las normas y lineamientos relacionados con la adecuada presentación del personal durante el desarrollo de las actividades operativas dentro del establecimiento hotelero. Su aplicación permite proyectar una imagen organizada, profesional y acorde con los estándares de calidad y servicio definidos por la organización
    p.mb-4.mb-lg-5 El uniforme es un distintivo de autoridad y servicio. Su uso debe regirse por las siguientes normas:

    .row.justify-content-center.align-items-center
      .col-lg-6
        SlyderA(tipo="b").bg-acento-botones-a5.p-4.tarjeta.h-100.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Estado general
              p.mb-0 El uniforme debe estar permanentemente limpio, planchado y en buen estado de costura (sin botones faltantes ni dobladillos sueltos).
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Identificación
              p.mb-0 El carné o placa de identificación (gafete) debe portarse siempre en un lugar visible, generalmente al lado izquierdo del pecho.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Calzado
              p.mb-0 Debe ser de color oscuro (según el estándar del hotel), de material antideslizante, cerrado y mantenerse siempre lustrado.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Restricciones 
              p.mb-0 El uniforme es para uso exclusivo dentro de las instalaciones del hotel. No se debe portar en la calle ni en lugares públicos ajenos a la jornada laboral.
      .col-sm-11.col-lg-6
        figure
          img(src="@/assets/curso/tema8/2.png", alt="" data-aos="zoom-in-down")

    separador

    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Protocolos de presentación personal

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Son normas y lineamientos establecidos para garantizar una adecuada imagen, higiene y comportamiento del personal durante la prestación del servicio hotelero. Su cumplimiento permite proyectar profesionalismo, orden y responsabilidad, fortaleciendo la confianza y la percepción de calidad por parte de los huéspedes.
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 Estos lineamientos incluyen aspectos relacionados con el cuidado personal, la apariencia física, el uso adecuado del uniforme, la postura, el lenguaje corporal y las conductas esperadas durante el desarrollo de las actividades operativas. Además, contribuyen al cumplimiento de los estándares de bioseguridad, atención al cliente y servicio definidos por el establecimiento hotelero.
        p.mb-0 La higiene personal es un requisito técnico para evitar la contaminación en las habitaciones y proyectar pulcritud.

    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Cabello
              p.mb-0 Debe mantenerse limpio. En el caso de cabello largo, este debe ir totalmente recogido (moño o malla) para evitar la caída de cabellos en camas o baños.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema8/4.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Manos y uñas
              p.mb-0 Las uñas deben estar cortas, limpias y sin esmaltes de colores llamativos (se prefiere brillo natural o tonos tipo "francés"). Esto facilita la manipulación higiénica de la lencería.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema8/5.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Maquillaje y fragancias: 
              p.mb-0 El maquillaje debe ser natural y discreto. Se prohíbe el uso de perfumes fuertes o llamativos; se recomiendan colonias frescas o simplemente el uso de desodorante neutro.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema8/6.png', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-7.col-xl-5.mb-4.mb-lg-0
              h4 Accesorios: 
              p.mb-0 Por seguridad y ergonomía, se debe limitar el uso de joyas. Se permite un reloj sencillo y anillos de boda lisos. Se deben evitar aretes largos o colgantes que puedan enredarse durante la limpieza.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema8/7.png', alt='')


















  
  </template>

<script>
export default {
  name: 'Tema8',
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
