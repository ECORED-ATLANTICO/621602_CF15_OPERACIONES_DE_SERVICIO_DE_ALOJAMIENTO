<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión de inventarios, almacenamiento y suministros

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La gestión de inventarios, almacenamiento y suministros en el área de alojamiento reúne las actividades relacionadas con el control, la organización, la conservación y la distribución de los recursos necesarios para el desarrollo de las operaciones hoteleras. Una adecuada administración de estos elementos garantiza la disponibilidad oportuna de insumos, materiales y equipos utilizados en los procesos de limpieza, acondicionamiento y atención al huésped, favoreciendo la continuidad y eficiencia del servicio.

    .p-4.bg-acento-botones-a5.rounded-4.mb-4
      p.mb-0 Entre las actividades desarrolladas se encuentran la recepción, clasificación, rotación, organización y entrega de elementos operativos como lencería, amenidades, productos químicos, artículos de aseo, papelería y demás materiales requeridos en el área de alojamiento. Para ello, se utilizan registros, formatos y mecanismos de control que facilitan el seguimiento permanente de los recursos disponibles y fortalecen la gestión operativa dentro del establecimiento.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Conceptos y sistemas de inventario

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Los sistemas de inventarios, almacenamiento y suministros en hotelería son herramientas y procedimientos destinados a controlar, organizar y administrar los recursos necesarios para el funcionamiento de las diferentes áreas operativas de un establecimiento de alojamiento. Su implementación garantiza la disponibilidad oportuna de materiales, productos y equipos requeridos para las actividades de limpieza, mantenimiento, acondicionamiento y atención al huésped, favoreciendo la continuidad y eficiencia del servicio hotelero.
        .p-4.bg-acento-contenido-a5.rounded-4
          p.mb-0 En el sector hotelero, estos sistemas permiten gestionar elementos como lencería, amenidades, productos químicos, artículos de aseo, papelería, equipos operativos y demás recursos utilizados diariamente en habitaciones y áreas comunes. Para ello, se emplean mecanismos de registro, seguimiento y verificación que facilitan el control de existencias, el monitoreo del consumo y la planificación de reposición de cada insumo.

    .p-4.bg-secundario-s5.rounded-4.mb-4
      p.mb-0.text-center Entre los principales sistemas aplicados en hotelería se encuentran:

    TabsB.color-primario.mb-4.mb-lg-5
      .py-4.py-md-5(titulo="Sistema FIFO (<em>First In, First Out</em>)" :icono="require('@/assets/curso/tema4/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Sistema FIFO (<em>First In, First Out</em>)
            p Consiste en utilizar primero los productos que ingresaron inicialmente al almacén, evitando vencimientos o deterioro de insumos.
            p.mb-0 Consiste en utilizar primero los productos que ingresaron inicialmente al almacén, evitando vencimientos o deterioro de insumos.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema4/9.png', alt='')
      .py-4.py-md-5(titulo="Sistema de máximos y mínimos" :icono="require('@/assets/curso/tema4/4.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Sistema de máximos y mínimos
            p.mb-0 Permite establecer cantidades límite de productos para controlar cuándo debe realizarse una reposición de inventario.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema4/10.png', alt='')
      .py-4.py-md-5(titulo="Inventario permanente" :icono="require('@/assets/curso/tema4/5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Inventario permanente
            p.mb-0 Facilita el control continuo de entradas y salidas de productos mediante registros actualizados
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema4/11.png', alt='')
      .py-4.py-md-5(titulo="Inventario periódico" :icono="require('@/assets/curso/tema4/6.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Inventario periódico
            p.mb-0 Consiste en realizar verificaciones físicas de existencias en intervalos determinados para comparar y ajustar registros.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema4/12.png', alt='')
      .py-4.py-md-5(titulo="Sistema de requisiciones" :icono="require('@/assets/curso/tema4/7.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Sistema de requisiciones
            p.mb-0 Se utiliza para controlar la solicitud y entrega de suministros entre almacén y áreas operativas.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema4/13.png', alt='')
      .py-4.py-md-5(titulo="Control por <em>stock</em> de seguridad" :icono="require('@/assets/curso/tema4/8.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Control por <em>stock</em> de seguridad
            p.mb-0 Mantiene una cantidad mínima de reserva para evitar desabastecimientos durante la operación.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema4/14.png', alt='')

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Clasificación de suministros, activos operativos y activos fijos en hotelería

    .row.g-0.rounded-4.bg-secundario-s10.mb-5.justify-content-center
      .col-sm-6.col-lg-3.d-flex
        figure.m-0
          img(src="@/assets/curso/tema4/15.png", alt="" data-aos="zoom-in-down")
      .col-lg-9.p-4.p-xl-0
        .d-flex.flex-column.justify-content-center.h-100
          p.mb-0.px-lg-3 La clasificación de suministros, activos operativos y activos fijos permite identificar y organizar los recursos utilizados en la prestación de los servicios dentro de un establecimiento de alojamiento, facilitando su control, almacenamiento y mantenimiento. Los suministros incluyen insumos de consumo frecuente utilizados en las labores operativas y la atención al huésped; los activos operativos corresponden a elementos reutilizables necesarios para el funcionamiento del servicio, como lencería y menaje; mientras que los activos fijos hacen referencia a bienes permanentes de mayor valor y duración, como mobiliario, equipos y maquinaria utilizados en la operación hotelera.

    .row.justify-content-center
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/16.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h5.mb-3.text-center Suministros de consumo (amenidades)
            p.mb-0.text-center Corresponden a los insumos de uso frecuente y reposición constante utilizados para la atención y comodidad del huésped durante su estadía, como jabones, champú, papelería y café.
            
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/17.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h5.mb-3.text-center Activos de operación (lencería y menaje)
            p.mb-0.text-center Incluyen los elementos reutilizables necesarios para el funcionamiento diario del servicio de alojamiento, tales como sábanas, toallas, almohadas y cristalería.
    
      .col-xl-4.col-lg-6.col-md-9.col-11
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/18.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h5.mb-3.text-center Activos fijos
            p.mb-0.text-center Son bienes permanentes de mayor valor y duración utilizados en la operación del establecimiento hotelero, como mobiliario, maquinaria de limpieza y televisores.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Control de existencias: máximos, mínimos y #[em stock] de seguridad

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/19.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El control de existencias en el área de alojamiento permite supervisar y gestionar la disponibilidad de insumos, materiales y recursos necesarios para garantizar la continuidad de las operaciones hoteleras. Su adecuada administración facilita el abastecimiento oportuno de productos utilizados en las actividades de limpieza, acondicionamiento y atención al huésped, evitando faltantes, acumulación innecesaria de inventario y pérdidas operativas
        .p-4.bg-terciario-t5.rounded-4
          p.mb-0 Para mantener una gestión eficiente del inventario, los establecimientos de alojamiento establecen parámetros que permiten determinar las cantidades requeridas de cada producto de acuerdo con el consumo, la rotación y las necesidades operativas. 

    .p-4.bg-secundario-s5.rounded-4.mb-4
      p.mb-0.text-center Entre los principales mecanismos utilizados tenemos: 

    .row.justify-content-center.align-items-center
      .col-lg-6
        SlyderA(tipo="b").bg-acento-botones-a5.p-4.tarjeta.h-100.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 #[em Stock] mínimo 
              p.mb-0 Es la cantidad mínima de productos que se deben mantener en el almacén para evitar desabastecimientos durante la operación.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 #[em Stock] máximo 
              p.mb-0 Es la cantidad máxima que el almacén puede o debe custodiar para evitar deterioro o pérdidas de espacio.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Stock de seguridad 
              p.mb-0 Reserva extra para cubrir retrasos de proveedores o picos inesperados de ocupación.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Tiempo de espera (lead time)
              p.mb-0 Días que transcurren desde que se solicita el pedido hasta que llega al hotel.
      .col-sm-11.col-lg-6
        figure
          img(src="@/assets/curso/tema4/20.png", alt="" data-aos="zoom-in-down")

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Factor de uso y cálculo de suministros

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        p.mb-4.mb-lg-0 El factor de uso y cálculo de suministros permite establecer la cantidad de insumos requeridos para el desarrollo de las actividades operativas en el área de alojamiento. Su aplicación facilita la planificación y administración de los recursos utilizados en los procesos de limpieza, acondicionamiento de habitaciones y atención al huésped, favoreciendo la continuidad del servicio y el uso eficiente de los materiales.
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/21.png", alt="" data-aos="zoom-in-down")
      .col-lg-4
        .p-4.bg-acento-botones-a5.rounded-4
          p.mb-0 El factor de uso corresponde al consumo promedio de un producto por cada habitación ocupada. Su cálculo permite proyectar las compras futuras, identificando la cantidad real de insumos requeridos para evitar desperdicios, faltantes o sobreabastecimiento

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-10.col-xl-8
        figure
          img(src="@/assets/curso/tema4/22.svg", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/23.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El cálculo de suministros consiste en estimar las cantidades de productos, materiales y elementos operativos que deben mantenerse disponibles para garantizar el adecuado funcionamiento de las habitaciones y áreas comunes. Para realizar esta proyección, se tienen en cuenta factores como el número de habitaciones, la rotación de huéspedes, la frecuencia de reposición y los tiempos de abastecimiento requeridos por la operación.
        p.mb-0 Entre los principales insumos utilizados en hotelería se encuentran amenidades, productos químicos, artículos de aseo, lencería, papelería y otros materiales empleados diariamente en la prestación del servicio.

    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Almacenamiento y organización

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-4
        .p-4.bg-acento-contenido-a5.rounded-4.mb-4.mb-lg-0
          p.mb-0 El almacenamiento y la organización en el área de alojamiento son actividades esenciales para garantizar el adecuado manejo, conservación y control de los insumos, materiales y equipos utilizados en la operación hotelera. Una correcta distribución de los recursos permite mantener condiciones adecuadas de orden, higiene y seguridad, facilitando el acceso oportuno a los elementos requeridos para el desarrollo de las labores operativas.
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/24.png", alt="" data-aos="zoom-in-down")
      .col-lg-4
        .p-4.bg-acento-contenido-a5.rounded-4.mb-4.mb-lg-0
          p.mb-0 Estas actividades incluyen procesos relacionados con la recepción, clasificación, ubicación, rotación y seguimiento de los materiales almacenados, mediante métodos que favorecen el control y la trazabilidad de los recursos disponibles. De igual manera, una adecuada gestión del almacenamiento ayuda a disminuir pérdidas, prevenir desperdicios y fortalecer la eficiencia en el manejo de inventarios.

    .row.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema4/25.svg' alt='')
          .tarjeta.bg-acento-botones-a5.h-100
            .ps-1.py-4.pe-4
              h5 Técnica de organización
              p.mb-0 Se utiliza el método PEPS (primero en entrar, primero en salir). Los productos más antiguos deben estar al frente para evitar su vencimiento.
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema4/26.svg' alt='')
          .tarjeta.bg-acento-botones-a5.h-100
            .ps-1.py-4.pe-4
              h5 Características del espacio
              p.mb-0 El área debe ser seca, ventilada, iluminada y con estanterías que no toquen directamente el piso (mínimo 15 cm de elevación).
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema4/27.svg' alt='')
          .tarjeta.bg-acento-botones-a5.h-100
            .ps-1.py-4.pe-4
              h5 Clasificación
              p.mb-0 Separar químicos de la lencería y alimentos (minibar) para evitar la transferencia de olores o contaminación.

    separador

    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Recepción de suministros y criterios éticos

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/28.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Verificación técnica")
            .col-auto
              p.mb-0 Cotejar la factura o remisión contra la mercancía física (cantidad, peso, estado del empaque).
          .row(numero="2" titulo="Criterios de devolución")
            .col-auto
              p.mb-0 Si el producto está vencido, el empaque está roto o no corresponde a la ficha técnica solicitada, se genera un reporte de novedad y se procede a la devolución.
          .row(numero="3" titulo="Responsabilidad ética")
            .col-auto
              p.mb-0 El manejo de inventarios requiere transparencia total. Está prohibido el uso personal de suministros del hotel o la alteración de registros para ocultar faltantes.

    separador

    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Indicaciones técnicas por categoría de suministro

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/29.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Hacen referencia a las orientaciones y criterios establecidos para el manejo, almacenamiento, conservación y uso adecuado de los diferentes insumos utilizados en la operación hotelera. Estas directrices permiten asegurar el aprovechamiento correcto de los recursos, conservar sus condiciones de calidad y disminuir riesgos, pérdidas o deterioros durante las actividades desarrolladas en el área de alojamiento.
        .p-4.bg-secundario-s5.rounded-4.mb-3
          p.mb-0 Cada tipo de suministro requiere condiciones específicas de manipulación y control, según sus características físicas, químicas y funcionales. Por ello, es necesario aplicar procedimientos diferenciados para productos de aseo, amenidades, lencería, papelería, equipos operativos y demás materiales utilizados en habitaciones y áreas comunes del establecimiento.
        p.mb-0 No todos los suministros requieren las mismas condiciones. El coordinador debe supervisar que se respeten las siguientes pautas técnicas:

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 6.
      span Modelo de protocolos de almacenamiento por tipo de insumo
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. SENA, (2024).
        thead
          tr(style="background-color: #F0F6F9")
            th Categoría
            th Suministros (ejemplos)
            th Condiciones de almacenamiento
            th Riesgos a evitar
        tbody
          tr
            td Amenidades y consumibles.
            td Jabones, #[em shampoo], kits dentales, café, té.
            td Lugar fresco, seco y protegido de la luz solar directa. Mantener en sus empaques originales.
            td Humedad (jabones derretidos), caducidad prematura, decoloración del empaque.
          tr
            td Insumos químicos (limpieza).
            td Desinfección de puntos de contacto (manijas, control).
            td Área ventilada, lejos de fuentes de calor. Almacenar por debajo de la lencería para evitar derrames accidentales que dañen los textiles.
            td Evaporación, degradación de compuestos, derrame y contaminación.
          tr
            td Papelería y complementos.
            td Papel higiénico, pañuelos, libretas, bolígrafos, bolsas.
            td Lugar seco, libre de humedad excesiva. Apilar en estanterías, nunca directamente sobre el piso.
            td Papel húmedo, arrugado o manchado, tinta de bolígrafos seca.
          tr
            td Bienes muebles pequeños.
            td Ganchos (perchas), vasos, termos, cubetas.
            td Organizados por tipo en estanterías. Evitar el apilamiento excesivo.
            td Daños físicos, rayones, desportillado (vasos).

    separador 
    #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.7 Organización y control operativo del <em>office</em>

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/30.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La organización y el control operativo del #[em office] en el área de alojamiento están orientados a mantener en adecuadas condiciones de orden, almacenamiento, distribución y disponibilidad los insumos, equipos y elementos necesarios para el desarrollo de las actividades operativas.
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 El #[em office] de piso funciona como un almacén satélite que abastece diariamente las labores realizadas por las camareras, por lo que su administración debe manejarse con el mismo nivel de control del almacén central. La adecuada disposición de este espacio permite clasificar y ubicar correctamente productos de aseo, lencería, amenidades, papelería, equipos y demás suministros utilizados durante la operación. Además, facilita el acceso oportuno a los recursos requeridos, optimiza los tiempos de trabajo y contribuye a mantener condiciones apropiadas de higiene, seguridad y control dentro del área de alojamiento.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Procedimiento para la organización del #[em office]

    p.mb-5 Para garantizar la eficiencia, el coordinador debe asegurar que el office siga el método PEPS (primero en entrar, primero en salir), lo cual previene el vencimiento o deterioro de los productos.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        PasosA.color-amarillo(tipo="n")
          .row.align-items-center.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h3 Recepción y ubicación: 
              p al recibir los suministros desde el almacén, se colocan en el office siguiendo una distribución lógica: lo más pesado abajo (químicos), lo más liviano arriba (amenidades), y lo de mayor uso al medio (papel higiénico).
            .col-6.col-md-3
              figure
                img.w-120(src='@/assets/curso/tema4/31.svg', alt='')
          .row.align-items-center.justify-content-center
            .col-6.col-md-3.mb-4.mb-md-0
              figure
                img.w-120(src='@/assets/curso/tema4/32.svg', alt='')
            .col-md-9
              h3.text-start Rotación (PEPS / FIFO): 
              p.text-start los productos que ya estaban en el estante se mueven hacia adelante, y los productos nuevos se colocan atrás o abajo.
          .row.align-items-center.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h3 Seguridad y accesibilidad: 
              p todos los productos químicos deben estar correctamente rotulados (con la etiqueta original y la FDS /SGA visible), y las estanterías deben estar a una altura de 15 cm del piso (para limpieza y control de plagas) y lejos de la lencería.
            .col-6.col-md-3
              figure
                img.w-120(src='@/assets/curso/tema4/33.svg', alt='')
          .row.align-items-center.justify-content-center
            .col-6.col-md-3.mb-4.mb-md-0
              figure
                img.w-120(src='@/assets/curso/tema4/34.svg', alt='')
            .col-md-9
              h3.text-start Devolución:
              p.text-start al finalizar el turno, los suministros sobrantes o envases vacíos (en el caso de químicos) deben regresar al office o almacén de piso para su conteo y posterior devolución.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/35.png", alt="")
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
  name: 'Tema4',
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
