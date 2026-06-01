export default {
  global: {
    Name: 'Operación, supervisión e inventarios en el área de alojamiento',
    Description:
      'Este componente formativo orienta al aprendiz en la aplicación de procedimientos técnicos para la supervisión del arreglo de habitaciones y zonas comunes en el área de alojamiento, de acuerdo con los protocolos y estándares establecidos por la organización. Asimismo, fortalece las habilidades para planear y ejecutar actividades de supervisión, verificar la correcta realización de procesos de limpieza y presentación de habitaciones, gestionar reportes e informes del área, y controlar inventarios de suministros, activos y materiales necesarios para la prestación del servicio. De igual manera, promueve el manejo adecuado de formatos de control, la gestión de mantenimiento, el registro de novedades y objetos olvidados, y la administración eficiente del almacenamiento y abastecimiento de insumos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas operativas y gestión química',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de limpieza por superficies y elementos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Productos de aseo y desinfección: gestión técnica',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clasificación del mobiliario y accesorios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de intervención según el mobiliario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Limpieza de accesorios y puntos de contacto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mantenimiento y reporte de novedades',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Protocolos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Limpieza y desinfección: protocolos de bioseguridad',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de inventarios, almacenamiento y suministros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos y sistemas de inventario',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Control de existencias: máximos, mínimos y stock de seguridad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Factor de uso y cálculo de suministros',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Almacenamiento y organización',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Recepción de suministros y criterios éticos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Indicaciones técnicas por categoría de suministro',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Organización y control operativo del <em>office</em>',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mantenimiento preventivo en el área de alojamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Procedimiento de solicitud y control',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Documentos de soporte y seguimiento',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Objetos olvidados (<em>Lost & Found</em>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Clasificación de objetos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Procedimiento de reporte y control',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Pronóstico de ocupación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Definición e importancia',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Utilidad del pronóstico',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Procedimiento de estimación',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Variables que afectan el pronóstico',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Imagen y presentación personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Protocolos de porte de uniformes',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Protocolos de presentación personal',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Gestión técnica de suministros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Definición y clasificación',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Especificaciones y ficha técnica',
            hash: 't_9_2',
          },

          {
            numero: '9.3',
            titulo: 'Unidades de medida y presentación',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Tabla de rendimiento',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Procedimientos de solicitud y manejo',
            hash: 't_9_5',
          },
          {
            numero: '9.6',
            titulo: 'Catálogo técnico de suministros (ficha técnica)',
            hash: 't_9_6',
          },
          {
            numero: '9.7',
            titulo: 'Control de rendimientos y costos',
            hash: 't_9_7',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Gestión de activos de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Definición y clasificación',
            hash: 't_10_1',
          },
        ],
      },
    ],

    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Amenidades (<em>amenities</em>)',
      significado:
        'Artículos de aseo personal y cortesía (jabón, shampoo, kits) que el hotel provee para el uso del huésped en el baño.',
    },
    {
      termino: 'Bloqueo (fuera de servicio)',
      significado:
        'Acción de sacar una habitación de la venta (estado f) por razones de mantenimiento profundo, remodelación o avería grave.',
    },
    {
      termino: '<em>Check-out</em>',
      significado:
        'Proceso de salida del huésped, entrega de llaves y liquidación de cuentas. Para el área de pisos, implica una limpieza profunda de salida.',
    },
    {
      termino: 'Discrepancia',
      significado:
        'Inconsistencia entre el estado de la habitación reportado por el sistema de recepción y la realidad física encontrada por la camarera.',
    },
    {
      termino: '<em>Duvet</em>',
      significado:
        'Funda de tela lavable que recubre el edredón o plumón, mejorando la higiene y la estética de la cama de alta categoría.',
    },
    {
      termino: 'Factor de uso',
      significado:
        'Indicador matemático que representa el promedio de consumo de un suministro por cada habitación ocupada.',
    },
    {
      termino: '<em>Forecast</em> (pronóstico)',
      significado:
        'Herramienta de planeación que proyecta el porcentaje de ocupación esperado para un periodo futuro (día, semana o mes).',
    },
    {
      termino: 'Lencería (blancos)',
      significado:
        'Conjunto de activos textiles del hotel, que incluye sábanas, fundas, toallas, protectores y mantas.',
    },
    {
      termino: '<em>Lost & found</em>',
      significado:
        'Departamento o protocolo encargado del registro, custodia y devolución de los objetos olvidados por los huéspedes.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Acciones programadas de revisión y limpieza técnica para evitar el deterioro de los activos y equipos de la habitación.',
    },
    {
      termino: '<em>Office</em> de piso',
      significado:
        'Área de almacenamiento técnico en el pasillo de habitaciones donde se custodia el stock diario de lencería y suministros.',
    },
    {
      termino: '<em>Par stock</em>',
      significado:
        'Inventario mínimo de seguridad (generalmente de 3 a 5 juegos por habitación) para operar sin riesgo de desabastecimiento.',
    },
    {
      termino: 'PEPS (FIFO)',
      significado:
        'Método de control de inventarios: "primero en entrar, primero en salir", que garantiza la rotación técnica de los productos.',
    },
    {
      termino: 'SGA',
      significado:
        'Sistema globalmente armonizado para la clasificación y etiquetado de productos químicos, garantizando la seguridad del operario.',
    },
    {
      termino: '<em>Turndown</em> (cobertura)',
      significado:
        'Servicio nocturno (cortesía) donde se prepara la cama para el descanso, se retira la basura y se reponen toallas usadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Academia Formación. (2024). <em>Manual gobernanta hotel – Housekeeping</em>.',
      link:
        'https://academia-formacion.com/wp-content/uploads/2024/03/MANUAL-GOBERNANTA-HOTEL-HOUSEKEEPING.pdf',
    },
    {
      referencia:
        'Cotelco. (2020). <em>Protocolos de limpieza y desinfección para el sector hotelero</em>.',
      link:
        'https://solkem.com.co/wp-content/uploads/2020/10/Protocolos-de-Limpieza-y-Desinfeccion-Cotelco.pdf',
    },
    {
      referencia:
        'García, M., & López, A. (2023). <em>Gestión de Alojamiento y Protocolos de Calidad</em>. Editorial Turismo Global.',
      link: '',
    },
    {
      referencia:
        'Hoteles Estelar S.A. (s.f.). <em>manual de políticas y procedimientos de alojamiento. Capítulo II: ama de llaves</em>. Departamento De Gestión Humana y Calidad.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2024). <em>Guía explicativa NTC 6503: Sistema de gestión de sostenibilidad para establecimientos de alojamiento y hospedaje</em>.',
      link:
        'https://calidadturistica.gov.co/attachments/courses/1/36/Gu%C3%ADa%20explicativa%20NTC-6503%20SGSostenibilidad%20establecimiento%20de%20alojamiento%20y%20hospedaje.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo (INSST). (2019). <em>Guía para la gestión y evaluación de los riesgos ergonómicos y psicosociales en el sector hotelero</em>. Ministerio de Trabajo y Economía Social de España.',
      link:
        'https://www.insst.es/documents/94886/599872/Gu%C3%ADa%20para%20la%20gesti%C3%B3n%20y%20evaluaci%C3%B3n%20de%20los%20riesgos%20ergon%C3%B3micos%20y%20psicosociales%20en%20el%20sector%20hotelero%20-%20A%C3%B1o%202019.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2020). <em>Limpieza y desinfección de superficies ambientales en el contexto de la COVID-19</em>.',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/332168/WHO-2019-nCoV-Disinfection-2020.1-spa.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). <em>Guía de limpieza y desinfección</em>.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/11/GUIA_DE_LIMPIEZA_Y_DESINFECCION.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2024). <em>Normas técnicas colombianas y guías de calidad turística</em>. Gobierno de Colombia.',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-colombianas-y-guias',
    },
    {
      referencia:
        'Secretaría de Educación de Honduras. (2023). <em>Manual de Ama de Llaves</em>. Subdirección General de Educación de Jóvenes y Adultos (SDGEJA). [Adaptación técnica para formación profesional en hotelería].',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2024). <em>Guía de Estándares Técnicos para el Aseo y Desinfección en Establecimientos de Hospedaje</em>. Dirección de Formación Profesional.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2024). <em>Manual de Procesos Químicos y Manejo de Insumos en Alojamiento</em>. Red de Turismo y Hotelería.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2026). <em>Guía Técnica para la Planeación y Control de Procesos en Alojamiento: Ruta Crítica y Gestión de Productividad</em>.',
      link: '',
    },
    {
      referencia:
        'Xenia Team. (2025). <em>Guía definitiva para la gestión de operaciones de limpieza</em>.',
      link:
        'https://www.xenia.team/articles/housekeeping-operations-management-guide-checklists',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2020). <em>Guía de buenas prácticas de higienización y desinfección en establecimientos de alojamiento</em>. Dirección de Formación Profesional.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2024). <em>Manual Técnico de Gestión Operativa en Alojamiento: Control de Suministros y Activos</em>. Centro Nacional de Hotelería, Turismo y Alimentos.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experto temático',
          centro: 'Centro agroturístico SENA - Regional Santander',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
