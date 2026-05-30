<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Operación, supervisión e inventarios en el área de alojamiento',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos del aprendiz sobre la gestión operativa del área de habitaciones y zonas comunes, verificando su comprensión de la estructura organizacional, los procedimientos técnicos de limpieza y arreglo, la normativa aplicable, la planeación de actividades, el manejo de suministros y activos, así como los procesos de supervisión y mantenimiento, con el fin de fortalecer las competencias requeridas para la coordinación eficiente del servicio de alojamiento',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de aplicar técnicas correctas de limpieza en superficies del hotel?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tiempo de trabajo del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el uso de productos químicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Prolongar la vida útil de los materiales y garantizar higiene.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limpiar únicamente las superficies visibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende el objetivo principal de aplicar técnicas correctas de limpieza en superficies del hotel',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente técnicas correctas de limpieza en superficies del hotel',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la técnica recomendada para limpiar pisos en habitaciones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Movimiento circular al azar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trapeado en zigzag o forma de ocho.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Limpieza vertical de arriba hacia abajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limpieza con movimientos rápidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la técnica recomendada para limpiar pisos en habitaciones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente la técnica recomendada para limpiar pisos en habitaciones.',
        },
        {
          id: 3,
          texto:
            '¿Qué documento contiene información sobre riesgos, manejo y primeros auxilios de un producto químico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orden de servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ficha técnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de inventario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ficha de datos de seguridad (FDS/MSDS).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende información sobre riesgos, manejo y primeros auxilios de un producto químico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente sobre información sobre riesgos, manejo y primeros auxilios de un producto químico.',
        },
        {
          id: 4,
          texto: '¿Cuál es el propósito principal de los detergentes?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar suciedad y grasa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Desinfectar microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Perfumar las habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proteger las superficies.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende el propósito principal de los detergentes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente del propósito principal de los detergentes.',
        },
        {
          id: 5,
          texto:
            '¿Qué producto se recomienda para desinfectar puntos de alto contacto como manijas y controles?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Detergente neutro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alcohol isopropílico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cloro concentrado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Shampoo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende el componente de desinfectar puntos de alto contacto como manijas y controles.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de desinfectar puntos de alto contacto como manijas y controles.',
        },
        {
          id: 6,
          texto:
            '¿Qué técnica se utiliza para limpiar ventanas y evitar rayones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Técnica circular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Técnica vertical.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Técnica horizontal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Técnica en forma de “S” o zigzag.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la técnica para limpiar ventanas y evitar rayones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de la técnica para limpiar ventanas y evitar rayones.',
        },
        {
          id: 7,
          texto: '¿Cuál es la función del inventario permanente o perpetuo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar los objetos perdidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar conteos anuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actualizar las existencias en tiempo real.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calcular el pronóstico de ocupación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la función del inventario permanente o perpetuo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de la función del inventario permanente o perpetuo.',
        },
        {
          id: 8,
          texto:
            '¿Qué método de almacenamiento significa “Primero en Entrar, Primero en Salir”?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'FIFO o PEPS.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'ABC.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ISO.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar la lencería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende el método de almacenamiento “Primero en Entrar, Primero en Salir.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente método de almacenamiento “Primero en Entrar, Primero en Salir.',
        },
        {
          id: 9,
          texto: '¿Cuál es el propósito del stock mínimo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indicar la cantidad máxima de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Señalar el punto en el que se debe realizar un nuevo pedido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir la cantidad total del inventario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar la rotación del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende el propósito del stock mínimo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente del propósito del stock mínimo.',
        },
        {
          id: 10,
          texto: '¿Qué elemento pertenece a la categoría de amenidades?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Televisor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Colchón.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Escritorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Jabón de tocador.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de los elementos que pertenecen a la categoría de amenidades.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente elementos que pertenecen a la categoría de amenidades.',
        },
        {
          id: 11,
          texto: '¿Cuál es la técnica correcta para la limpieza de paredes?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limpieza descendente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limpieza horizontal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Decreto 1072.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limpieza circular.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la técnica correcta para la limpieza de paredes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente la técnica correcta para la limpieza de paredes.',
        },
        {
          id: 12,
          texto:
            '¿Qué se debe hacer al encontrar un objeto olvidado en una habitación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardarlo para uso personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desecharlo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Informar inmediatamente al Ama de Llaves.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dejarlo en la habitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de que hacer con los objetos olvidados en la habitación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente objetos olvidados en la habitación.',
        },
        {
          id: 13,
          texto: '¿Cuál es el primer paso del mantenimiento correctivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reparación inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cierre del reporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Detección de la avería.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Compra de repuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende pasos del mantenimiento correctivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de los pasos del mantenimiento correctivo.',
        },
        {
          id: 14,
          texto:
            '¿Qué técnica de supervisión consiste en revisar la habitación siguiendo el sentido de las agujas del reloj?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Técnica del control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Técnica del reloj.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Técnica de rotación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Técnica de verificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la técnica de supervisión que consiste en revisar la habitación siguiendo el sentido de las agujas del reloj.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente técnica de supervisión que consiste en revisar la habitación siguiendo el sentido de las agujas del reloj.',
        },
        {
          id: 15,
          texto: '¿Qué significa la clave de habitación “VL”?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vacía y libre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Visitante local.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ventilación libre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vacía y limpia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de conocer lo que significa las claves de habitaciones..',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de conocer lo que significa las claves de habitaciones.',
        },
        {
          id: 16,
          texto: '¿Cuál es la finalidad del pronóstico de ocupación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prever la demanda futura de habitaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir la limpieza de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcular el número de empleados permanentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el consumo de energía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de la finalidad del pronóstico de ocupación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de la finalidad del pronóstico de ocupación.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una norma básica de presentación personal para el personal de habitaciones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de perfumes fuertes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uñas largas y decoradas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uniforme limpio y planchado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso libre de accesorios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia la norma básica de presentación personal para el personal de habitaciones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente la norma básica de presentación personal para el personal de habitaciones.',
        },
        {
          id: 18,
          texto:
            '¿Qué se debe verificar durante la supervisión final de una habitación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el orden del mobiliario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la limpieza del baño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estimación futura de habitaciones ocupadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Higiene, estética y funcionamiento de los equipos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de verificación durante la supervisión final de una habitación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de verificación durante la supervisión final de una habitación.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la función del factor de uso en la gestión de suministros?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar el consumo promedio por habitación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Calcular el número de habitaciones del hotel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar el tiempo de limpieza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el desempeño del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de la función del factor de uso en la gestión de suministros.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de la función del factor de uso en la gestión de suministros.',
        },
        {
          id: 20,
          texto:
            '¿Qué se debe hacer antes de usar un producto químico de limpieza?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclarlo con otros productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicarlo directamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Revisar su ficha técnica y dosificación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usarlo sin diluir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende que se debe hacer antes de usar un producto químico de limpieza.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de que se debe hacer antes de usar un producto químico de limpieza.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
