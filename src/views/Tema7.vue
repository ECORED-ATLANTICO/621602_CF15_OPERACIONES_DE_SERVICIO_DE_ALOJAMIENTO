<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Pronóstico de ocupación

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(src='@/assets/curso/tema7/1.png' alt='' data-aos="zoom-in-down")

    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El pronóstico de ocupación es un proceso fundamental en la operación hotelera, ya que permite anticipar el comportamiento de la demanda y planificar de manera adecuada los recursos necesarios para la prestación del servicio. Su aplicación facilita la organización de las diferentes áreas operativas del establecimiento, contribuyendo a mejorar la eficiencia, la productividad y la atención al huésped.
  
  
    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Definición e importancia
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El pronóstico de ocupación es una herramienta utilizada para estimar la cantidad de habitaciones que serán utilizadas durante un periodo determinado. Su aplicación permite anticipar el comportamiento de la demanda, facilitando la planificación de recursos, la organización de las actividades operativas y la toma de decisiones relacionadas con la prestación del servicio hotelero.
        .p-4.bg-terciario-t5.mb-4.rounded-4
          p.mb-0 En el área de alojamiento, esta proyección favorece la planificación del personal, el control del consumo de suministros, la organización de la disponibilidad de habitaciones y la optimización de los tiempos de operación. Además, fortalece la coordinación entre áreas como recepción, ama de llaves, mantenimiento y alimentos y bebidas, contribuyendo a una operación más eficiente y organizada.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Importancia para el departamento de pisos
    
    .bg-secundario-s5.p-4.rounded-4.mb-4
      p.mb-0 Permite al ama de llaves saber con antelación cuántas camareras debe programar, cuánta lencería debe enviar a lavandería y qué cantidad de suministros debe solicitar al almacén. Sin un pronóstico, se corre el riesgo de tener exceso de personal (gastos innecesarios) o falta de este (mala calidad en el servicio).

    separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Utilidad del pronóstico
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La utilidad del pronóstico de ocupación se basa en la capacidad de anticipar las necesidades operativas y administrativas del servicio hotelero, permitiendo planificar de forma más eficiente los recursos humanos, materiales y logísticos necesarios para la atención de los huéspedes. Esta herramienta favorece la organización de las actividades diarias y contribuye a mantener la continuidad y calidad de la operación.
        .p-4.bg-acento-contenido-a5.mb-4.rounded-4.mb-3
          p.mb-0 Asimismo, el pronóstico permite identificar temporadas de alta y baja ocupación, facilitando el ajuste de estrategias operativas, comerciales y administrativas según el comportamiento esperado de la demanda. Además, ayuda a prevenir sobrecostos, reducir desperdicios y garantizar una adecuada prestación del servicio al huésped.
        p.mb-0 El uso correcto de esta herramienta impacta en cuatro áreas clave:

    .row.justify-content-center.align-items-center
      .col-lg-6
        SlyderA(tipo="b").bg-acento-botones-a5.p-4.tarjeta.h-100.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Programación de turnos
              p.mb-0 Optimiza el cuadro de horarios del personal (camareras, auxiliares de habitaciones y limpiadores).
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Gestión de compras
              p.mb-0 Define las cantidades de pedidos de suministros (jabones, papel higiénico, químicos) evitando el desabastecimiento.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Mantenimiento programado
              p.mb-0 Identifica las fechas de baja ocupación para bloquear habitaciones y realizar reparaciones profundas o pintura sin afectar las ventas.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Control de presupuesto
              p.mb-0 Ayuda a controlar los costos variables que dependen directamente del número de huéspedes.
      .col-sm-11.col-lg-6
        figure
          img(src="@/assets/curso/tema7/4.png", alt="" data-aos="zoom-in-down")

    separador

    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.3 Procedimiento de estimación

    .p-4.bg-terciario-t5.rounded-4.mb-4
      p.mb-0 Para calcular la ocupación prevista, se sigue un proceso lógico de recolección de datos, el cual consta de lo siguiente:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--13.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema7/5.svg' alt='')
          h4.text-center Recopilación de datos
          p.mb-0 Se toma el total de habitaciones del hotel (capacidad instalada).
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--13.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema7/6.svg' alt='')
          h4.text-center Análisis de reservas
          p.mb-0 Se suman las reservas confirmadas, los grupos bloqueados y el promedio histórico de clientes que llegan sin reserva (walk-ins).
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .tarjeta.bg-img.bg-img--13.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema7/7.svg' alt='')
          h4.text-center Cálculo del porcentaje de ocupación: 
          p.mb-0 Se aplica la fórmula técnica para obtener el indicador.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Fórmula de ocupación:
    
    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        figure
          img(src="@/assets/curso/tema7/8.svg", alt="" data-aos="zoom-in-down")

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Ejemplo de aplicación:
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .p-5.bg-img.bg-img--8.rounded-4
          p.py-2.mb-4 Si el hotel tiene 100 habitaciones y el sistema reporta 75 reservas para el lunes:
          p.mb-0 75 / 100 x 100 = 75 % de ocupación.

    separador

    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.4 Variables que afectan el pronóstico

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p El pronóstico de ocupación puede verse afectado por diferentes variables internas y externas que influyen en el comportamiento de la demanda en los establecimientos de alojamiento. El análisis de estos factores permite realizar estimaciones más precisas sobre la cantidad de habitaciones que podrían ocuparse durante un periodo determinado, facilitando la planificación y organización de la operación hotelera.
        .p-4.bg-secundario-s5.rounded-4.mb-3
          p.mb-0 Entre las principales variables se encuentran las temporadas turísticas, eventos locales, reservas confirmadas, cancelaciones, historial de ocupación y tendencias del mercado. También influyen aspectos como las condiciones económicas, las tarifas, la competencia, la ubicación del establecimiento y las condiciones climáticas.
        p.mb-4.mb-lg-0 De igual manera, factores operativos como habitaciones fuera de servicio, mantenimientos programados, capacidad instalada y disponibilidad de personal pueden modificar las proyecciones de ocupación. Asimismo, situaciones externas como festividades, vacaciones o emergencias pueden generar variaciones significativas en la demanda.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema7/10.png", alt="")
    
    .p-4.bg-secundario-s10.rounded-4.mb-4
      p.mb-0.text-center El coordinador debe estar atento a factores externos que pueden alterar la estimación inicial:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Cancelaciones de último momento")
            .col-auto
              p.mb-0 Reducen la ocupación prevista.
          .row(numero="2" titulo="<em>No-shows</em>")
            .col-auto
              p.mb-0 Huéspedes con reserva que no se presentan.
          .row(numero="3" titulo="Salidas anticipadas o prolongaciones de estancia")
            .col-auto
              p.mb-0 Huéspedes que deciden irse antes o quedarse más días de lo planeado.
          .row(numero="4" titulo="Eventos locales")
            .col-auto
              p.mb-0 Huéspedes ferias, congresos o festividades que aumentan la demanda inesperadamente.

  </template>

<script>
export default {
  name: 'Tema7',
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
