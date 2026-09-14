// Todo el copy del sitio vive aquí. Editar texto = editar este archivo.
// Los iconos se referencian por clave string (ver components/Icons.jsx).

export const translations = {
  en: {
    locale: "en-US",
    langLabel: "EN",
    switchTo: "Cambiar a español",

    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      approach: "Our Approach",
      contact: "Contact",
      cta: "Schedule a Consultation",
      menu: "Menu",
      close: "Close",
    },

    hero: {
      badge: "ADDISON, ILLINOIS · USA",
      title: ["We move businesses forward with ", "strategy", ", structure and management."],
      subtitle:
        "We help companies and entrepreneurs optimize their operations, strengthen their processes and build strategies aimed at sustainable growth.",
      ctaPrimary: "Request a consultation",
      ctaSecondary: "Explore our services",
      cardTitle: "Growth with structure",
      cardMeta: "diagnose · plan · execute",
    },

    marquee: [
      "STRATEGIC CONSULTING",
      "PROCESS OPTIMIZATION",
      "OPERATIONAL CONSULTING",
      "BUSINESS INSIGHTS",
      "PROJECT MANAGEMENT",
      "BUSINESS GROWTH",
    ],

    challenges: {
      eyebrow: "01 — CHALLENGES",
      title: "Challenges we help solve",
      intro:
        "Every organization arrives with a different friction point. These are the three we encounter most often.",
      items: [
        {
          num: "01",
          title: "Growth without structure",
          body: "We organize processes and priorities so that growth becomes sustainable.",
        },
        {
          num: "02",
          title: "Inefficient processes",
          body: "We identify opportunities to improve organization, productivity and execution.",
        },
        {
          num: "03",
          title: "Lack of strategic direction",
          body: "We turn business objectives into clear, measurable action plans.",
        },
      ],
    },

    services: {
      eyebrow: "02 — SERVICES",
      title: "Core services",
      intro:
        "Six areas of work that can be engaged individually or combined into a single plan.",
      items: [
        {
          slug: "strategic-consulting",
          icon: "target",
          title: "Strategic consulting",
          body: "Business diagnosis, opportunity identification and tailored action plans.",
          detail: [
            "We review where the business stands today and where it wants to be.",
            "We define priorities, scope and a realistic sequence of decisions.",
            "We deliver an action plan with clear responsibilities and checkpoints.",
          ],
        },
        {
          slug: "process-optimization",
          icon: "flow",
          title: "Process management and optimization",
          body: "Review and improvement of internal processes to increase efficiency and organization.",
          detail: [
            "We map how work actually flows across the organization.",
            "We remove duplicated steps, bottlenecks and unclear handoffs.",
            "We document the resulting process so it survives staff changes.",
          ],
        },
        {
          slug: "operational-consulting",
          icon: "gear",
          title: "Operational consulting",
          body: "Support with operational structure, methodologies and performance improvement.",
          detail: [
            "We assess the current operating structure and its capacity.",
            "We propose methodologies that fit the size and pace of the business.",
            "We support the team while the new way of working settles in.",
          ],
        },
        {
          slug: "business-insights",
          icon: "chart",
          title: "Analysis and business insights",
          body: "Using information and metrics to support business decisions.",
          detail: [
            "We define the indicators that actually matter for the business.",
            "We organize available information into a readable view.",
            "We translate the numbers into decisions, not just dashboards.",
          ],
        },
        {
          slug: "project-management",
          icon: "list",
          title: "Project management",
          body: "Planning, organization, follow-up and implementation of initiatives.",
          detail: [
            "We structure the initiative into phases, owners and dates.",
            "We keep follow-up steady so the project does not stall.",
            "We close with a review of what was delivered and what remains.",
          ],
        },
        {
          slug: "business-growth",
          icon: "growth",
          title: "Business development and growth",
          body: "Strategies to strengthen operations and support sustainable growth.",
          detail: [
            "We look at where capacity, process and demand meet — or fail to.",
            "We build a growth approach the current operation can absorb.",
            "We adjust the plan as the business changes.",
          ],
        },
      ],
      detailLabel: "What the work looks like",
    },

    approach: {
      eyebrow: "03 — OUR APPROACH",
      title: "A five-step process, always the same",
      intro:
        "The method does not change from client to client. What changes is the content of each step.",
      link: "Start at step 01 →",
      steps: [
        {
          num: "01",
          title: "Understand",
          body: "Analyze current needs, objectives and challenges.",
        },
        {
          num: "02",
          title: "Diagnose",
          body: "Identify critical areas and opportunities for improvement.",
        },
        {
          num: "03",
          title: "Design",
          body: "Build a strategy and action plan adapted to the business.",
        },
        {
          num: "04",
          title: "Implement",
          body: "Support the organized execution of the initiatives.",
        },
        {
          num: "05",
          title: "Measure and optimize",
          body: "Evaluate results and detect new opportunities.",
        },
      ],
    },

    why: {
      eyebrow: "04 — WHY APEX",
      title: "Our own judgment, not templates",
      items: [
        {
          title: "Tailored solutions",
          body: "Every company receives an approach adapted to its own needs.",
        },
        {
          title: "Strategic vision",
          body: "We connect operations, processes and business objectives.",
        },
        {
          title: "Results orientation",
          body: "We work with clear objectives and measurable actions.",
        },
        {
          title: "Professional support",
          body: "We accompany the client through the different stages of the process.",
        },
      ],
      badge: "APEX METHOD",
    },

    about: {
      eyebrow: "05 — ABOUT US",
      title: "A business consulting and management firm in Addison, Illinois",
      paragraphs: [
        "APEX Facility Consulting LLC helps companies strengthen their organizational structure, optimize processes and develop strategies aimed at improving performance and growth.",
        "Our approach combines analysis, planning and strategic support to build solutions adapted to the particular needs of each organization.",
      ],
      pillarsTitle: "How we work",
      pillars: [
        {
          icon: "target",
          title: "We start from the operation",
          body: "Before proposing anything, we look at how the business actually runs day to day.",
        },
        {
          icon: "flow",
          title: "We leave things documented",
          body: "A decision that lives only in a conversation does not survive the next quarter.",
        },
        {
          icon: "growth",
          title: "We stay through execution",
          body: "A plan handed over and abandoned is not a result. We support the implementation.",
        },
      ],
    },

    contact: {
      eyebrow: "06 — CONTACT",
      title: "Request a consultation",
      intro:
        "Tell us where the bottleneck is. We reply with a first read of the case and the next steps.",
      addressLabel: "ADDRESS",
      phoneLabel: "PHONE",
      hoursLabel: "AVAILABILITY",
      hours: "Monday to Friday · By appointment",
      directions: "Open in Google Maps",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        service: "Service of interest",
        servicePlaceholder: "Select a service",
        message: "Message",
        messagePlaceholder: "Briefly describe your situation or what you need help with.",
        submit: "Request a consultation",
        sending: "Sending…",
        success: "Thank you — we have received your request. We will get back to you shortly.",
        error: "The message could not be sent. Please try again or call us at",
        required: "Required",
        invalidEmail: "Please enter a valid email address.",
        notConfigured:
          "The form is not connected yet. Add your Web3Forms key in NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
      },
    },

    cta: {
      title: "Let's look at your operation together",
      body: "A first conversation is enough to know whether we can help and where we would start.",
      button: "Schedule a Consultation",
    },

    footer: {
      blurb: "Business consulting and management. Strategy, processes and sustainable growth.",
      navTitle: "NAVIGATION",
      servicesTitle: "SERVICES",
      contactTitle: "CONTACT",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact: "Contact",
      rights: "All Rights Reserved.",
    },

    legal: {
      privacy: {
        title: "Privacy Policy",
        updated: "Last updated: January 2026",
        sections: [
          {
            h: "Information we collect",
            p: "We only collect the information you voluntarily submit through our contact form: name, company, email address, phone number, service of interest and the content of your message.",
          },
          {
            h: "How we use it",
            p: "The information is used exclusively to respond to your enquiry and, where applicable, to provide the consulting services requested. We do not sell, rent or share your personal information with third parties for marketing purposes.",
          },
          {
            h: "Retention",
            p: "We retain contact information only for as long as necessary to attend to your enquiry and to comply with applicable legal or accounting obligations.",
          },
          {
            h: "Your rights",
            p: "You may request access to, correction of, or deletion of the personal information you have provided by contacting us at the phone number or address listed on this site.",
          },
          {
            h: "Third-party services",
            p: "This website is hosted on Vercel and the contact form is processed by a third-party form service. These providers process the data strictly to deliver the message to us.",
          },
        ],
      },
      terms: {
        title: "Terms of Use",
        updated: "Last updated: January 2026",
        sections: [
          {
            h: "Acceptance",
            p: "By accessing and using this website you agree to these terms of use. If you do not agree, please do not use the site.",
          },
          {
            h: "Informational purpose",
            p: "The content of this website is provided for general informational purposes about the services of APEX Facility Consulting LLC. It does not constitute professional, legal, accounting or financial advice, and no consulting relationship is created merely by browsing this site.",
          },
          {
            h: "Intellectual property",
            p: "All content, text, graphics and design elements on this site are the property of APEX Facility Consulting LLC and may not be reproduced without written authorization.",
          },
          {
            h: "Limitation of liability",
            p: "We make reasonable efforts to keep the information on this site accurate and current, but we do not guarantee that it is free of errors or omissions, nor do we accept liability for decisions made solely on the basis of this content.",
          },
          {
            h: "Contact",
            p: "Questions about these terms can be directed to us using the contact details on this site.",
          },
        ],
      },
    },

    notFound: {
      title: "Page not found",
      body: "The page you are looking for does not exist or has been moved.",
      button: "Back to home",
    },

    // Encabezados de las páginas internas (distintos del título de cada sección
    // para no repetir el mismo texto dos veces en la misma página).
    pages: {
      about: {
        eyebrow: "ABOUT US",
        title: "Structure, process and strategy — built around your operation",
        intro:
          "APEX Facility Consulting LLC is a business consulting and management firm based in Addison, Illinois, working with companies and entrepreneurs across the United States.",
      },
      services: {
        eyebrow: "SERVICES",
        title: "What we do, and how each engagement actually runs",
        intro:
          "Six areas of work that can be engaged individually or combined into a single plan, always adapted to the size and pace of the business.",
      },
      approach: {
        eyebrow: "OUR APPROACH",
        title: "How an engagement moves from first conversation to measurable result",
        intro:
          "The method does not change from client to client. What changes is the content of each step.",
      },
      contact: {
        eyebrow: "CONTACT",
        title: "Let's talk about your operation",
        intro:
          "Send us the details and we will reply with a first read of the case and a proposed starting point.",
      },
    },

    meta: {
      home: {
        title: "APEX Facility Consulting LLC | Business Consulting in Addison, Illinois",
        description:
          "Business consulting and management firm in Addison, Illinois. Strategy, process optimization, operational consulting and sustainable growth.",
      },
      about: {
        title: "About Us | APEX Facility Consulting LLC",
        description:
          "A business consulting and management firm in Addison, Illinois helping companies strengthen structure, processes and strategy.",
      },
      services: {
        title: "Services | APEX Facility Consulting LLC",
        description:
          "Strategic consulting, process optimization, operational consulting, business insights, project management and business growth.",
      },
      approach: {
        title: "Our Approach | APEX Facility Consulting LLC",
        description:
          "A five-step method: understand, diagnose, design, implement, measure and optimize.",
      },
      contact: {
        title: "Contact | APEX Facility Consulting LLC",
        description:
          "Request a consultation with APEX Facility Consulting LLC in Addison, Illinois. (571) 593-2156.",
      },
    },
  },

  es: {
    locale: "es-US",
    langLabel: "ES",
    switchTo: "Switch to English",

    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      approach: "Metodología",
      contact: "Contacto",
      cta: "Solicitar una consulta",
      menu: "Menú",
      close: "Cerrar",
    },

    hero: {
      badge: "ADDISON, ILLINOIS · EE. UU.",
      title: ["Impulsamos empresas con ", "estrategia", ", estructura y gestión."],
      subtitle:
        "Ayudamos a empresas y emprendedores a optimizar sus operaciones, fortalecer sus procesos y desarrollar estrategias orientadas a un crecimiento sostenible.",
      ctaPrimary: "Solicitar una consulta",
      ctaSecondary: "Conocer nuestros servicios",
      cardTitle: "Crecimiento con estructura",
      cardMeta: "diagnóstico · plan · ejecución",
    },

    marquee: [
      "CONSULTORÍA ESTRATÉGICA",
      "OPTIMIZACIÓN DE PROCESOS",
      "CONSULTORÍA OPERACIONAL",
      "BUSINESS INSIGHTS",
      "GESTIÓN DE PROYECTOS",
      "CRECIMIENTO EMPRESARIAL",
    ],

    challenges: {
      eyebrow: "01 — DESAFÍOS",
      title: "Desafíos que ayudamos a resolver",
      intro:
        "Cada organización llega con un punto de fricción distinto. Estos son los tres que encontramos con más frecuencia.",
      items: [
        {
          num: "01",
          title: "Crecimiento sin estructura",
          body: "Organizamos procesos y prioridades para que el crecimiento sea sostenible.",
        },
        {
          num: "02",
          title: "Procesos ineficientes",
          body: "Identificamos oportunidades para mejorar organización, productividad y ejecución.",
        },
        {
          num: "03",
          title: "Falta de dirección estratégica",
          body: "Convertimos objetivos empresariales en planes de acción claros y medibles.",
        },
      ],
    },

    services: {
      eyebrow: "02 — SERVICIOS",
      title: "Servicios principales",
      intro:
        "Seis áreas de trabajo que pueden contratarse por separado o combinarse en un solo plan.",
      items: [
        {
          slug: "strategic-consulting",
          icon: "target",
          title: "Consultoría estratégica",
          body: "Diagnóstico empresarial, identificación de oportunidades y planes de acción personalizados.",
          detail: [
            "Revisamos dónde está hoy el negocio y hacia dónde quiere ir.",
            "Definimos prioridades, alcance y una secuencia realista de decisiones.",
            "Entregamos un plan de acción con responsables y puntos de control claros.",
          ],
        },
        {
          slug: "process-optimization",
          icon: "flow",
          title: "Gestión y optimización de procesos",
          body: "Revisión y mejora de procesos internos para aumentar eficiencia y organización.",
          detail: [
            "Mapeamos cómo fluye realmente el trabajo dentro de la organización.",
            "Eliminamos pasos duplicados, cuellos de botella y entregas poco claras.",
            "Documentamos el proceso resultante para que sobreviva a los cambios de personal.",
          ],
        },
        {
          slug: "operational-consulting",
          icon: "gear",
          title: "Consultoría operacional",
          body: "Apoyo en estructura operativa, metodologías y mejora del desempeño.",
          detail: [
            "Evaluamos la estructura operativa actual y su capacidad.",
            "Proponemos metodologías acordes al tamaño y ritmo del negocio.",
            "Acompañamos al equipo mientras la nueva forma de trabajar se asienta.",
          ],
        },
        {
          slug: "business-insights",
          icon: "chart",
          title: "Análisis y business insights",
          body: "Uso de información y métricas para apoyar decisiones empresariales.",
          detail: [
            "Definimos los indicadores que realmente importan para el negocio.",
            "Organizamos la información disponible en una vista legible.",
            "Traducimos los números en decisiones, no solo en tableros.",
          ],
        },
        {
          slug: "project-management",
          icon: "list",
          title: "Gestión de proyectos",
          body: "Planeación, organización, seguimiento e implementación de iniciativas.",
          detail: [
            "Estructuramos la iniciativa en fases, responsables y fechas.",
            "Mantenemos un seguimiento constante para que el proyecto no se detenga.",
            "Cerramos con una revisión de lo entregado y lo que queda pendiente.",
          ],
        },
        {
          slug: "business-growth",
          icon: "growth",
          title: "Desarrollo y crecimiento empresarial",
          body: "Estrategias para fortalecer la operación y apoyar un crecimiento sostenible.",
          detail: [
            "Analizamos dónde se encuentran capacidad, proceso y demanda — o dónde no.",
            "Construimos un enfoque de crecimiento que la operación actual pueda absorber.",
            "Ajustamos el plan a medida que el negocio cambia.",
          ],
        },
      ],
      detailLabel: "Cómo se ve el trabajo",
    },

    approach: {
      eyebrow: "03 — NUESTRA METODOLOGÍA",
      title: "Un proceso de cinco pasos, siempre el mismo",
      intro:
        "El método no cambia de cliente a cliente. Lo que cambia es el contenido de cada paso.",
      link: "Empezar por el paso 01 →",
      steps: [
        {
          num: "01",
          title: "Comprender",
          body: "Analizar necesidades, objetivos y desafíos actuales.",
        },
        {
          num: "02",
          title: "Diagnosticar",
          body: "Identificar áreas críticas y oportunidades de mejora.",
        },
        {
          num: "03",
          title: "Diseñar",
          body: "Construir una estrategia y plan de acción adaptado al negocio.",
        },
        {
          num: "04",
          title: "Implementar",
          body: "Acompañar la ejecución organizada de las iniciativas.",
        },
        {
          num: "05",
          title: "Medir y optimizar",
          body: "Evaluar resultados y detectar nuevas oportunidades.",
        },
      ],
    },

    why: {
      eyebrow: "04 — POR QUÉ APEX",
      title: "Criterio propio, no plantillas",
      items: [
        {
          title: "Soluciones personalizadas",
          body: "Cada empresa recibe un enfoque adaptado a sus necesidades.",
        },
        {
          title: "Visión estratégica",
          body: "Conectamos operación, procesos y objetivos de negocio.",
        },
        {
          title: "Orientación a resultados",
          body: "Trabajamos con objetivos claros y acciones medibles.",
        },
        {
          title: "Acompañamiento profesional",
          body: "Apoyamos al cliente durante las diferentes etapas del proceso.",
        },
      ],
      badge: "MÉTODO APEX",
    },

    about: {
      eyebrow: "05 — NOSOTROS",
      title: "Una firma de consultoría y gestión empresarial en Addison, Illinois",
      paragraphs: [
        "APEX Facility Consulting LLC ayuda a empresas a fortalecer su estructura organizacional, optimizar procesos y desarrollar estrategias orientadas a mejorar su desempeño y crecimiento.",
        "Nuestro enfoque combina análisis, planificación y acompañamiento estratégico para desarrollar soluciones adaptadas a las necesidades particulares de cada organización.",
      ],
      pillarsTitle: "Cómo trabajamos",
      pillars: [
        {
          icon: "target",
          title: "Partimos de la operación",
          body: "Antes de proponer nada, observamos cómo funciona el negocio en el día a día.",
        },
        {
          icon: "flow",
          title: "Dejamos todo documentado",
          body: "Una decisión que solo vive en una conversación no sobrevive al siguiente trimestre.",
        },
        {
          icon: "growth",
          title: "Acompañamos la ejecución",
          body: "Un plan entregado y abandonado no es un resultado. Acompañamos la implementación.",
        },
      ],
    },

    contact: {
      eyebrow: "06 — CONTACTO",
      title: "Solicitar una consulta",
      intro:
        "Cuéntanos dónde está el cuello de botella. Respondemos con una primera lectura del caso y los siguientes pasos.",
      addressLabel: "DIRECCIÓN",
      phoneLabel: "TELÉFONO",
      hoursLabel: "DISPONIBILIDAD",
      hours: "Lunes a viernes · Con cita previa",
      directions: "Abrir en Google Maps",
      form: {
        name: "Nombre",
        company: "Empresa",
        email: "Email",
        phone: "Teléfono",
        service: "Servicio de interés",
        servicePlaceholder: "Selecciona un servicio",
        message: "Mensaje",
        messagePlaceholder: "Describe brevemente tu situación o en qué necesitas apoyo.",
        submit: "Solicitar una consulta",
        sending: "Enviando…",
        success: "Gracias — hemos recibido tu solicitud. Te responderemos en breve.",
        error: "No se pudo enviar el mensaje. Inténtalo de nuevo o llámanos al",
        required: "Campo obligatorio",
        invalidEmail: "Introduce una dirección de email válida.",
        notConfigured:
          "El formulario aún no está conectado. Añade tu clave de Web3Forms en NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
      },
    },

    cta: {
      title: "Revisemos juntos tu operación",
      body: "Una primera conversación basta para saber si podemos ayudar y por dónde empezaríamos.",
      button: "Solicitar una consulta",
    },

    footer: {
      blurb: "Consultoría y gestión empresarial. Estrategia, procesos y crecimiento sostenible.",
      navTitle: "NAVEGACIÓN",
      servicesTitle: "SERVICIOS",
      contactTitle: "CONTACTO",
      privacy: "Política de privacidad",
      terms: "Términos de uso",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },

    legal: {
      privacy: {
        title: "Política de privacidad",
        updated: "Última actualización: enero de 2026",
        sections: [
          {
            h: "Información que recopilamos",
            p: "Solo recopilamos la información que envías voluntariamente a través de nuestro formulario de contacto: nombre, empresa, correo electrónico, teléfono, servicio de interés y el contenido de tu mensaje.",
          },
          {
            h: "Cómo la usamos",
            p: "La información se utiliza exclusivamente para responder a tu consulta y, cuando corresponda, para prestar los servicios de consultoría solicitados. No vendemos, alquilamos ni compartimos tu información personal con terceros con fines de marketing.",
          },
          {
            h: "Conservación",
            p: "Conservamos la información de contacto únicamente durante el tiempo necesario para atender tu consulta y cumplir con las obligaciones legales o contables aplicables.",
          },
          {
            h: "Tus derechos",
            p: "Puedes solicitar el acceso, la corrección o la eliminación de la información personal que hayas proporcionado contactándonos en el teléfono o la dirección indicados en este sitio.",
          },
          {
            h: "Servicios de terceros",
            p: "Este sitio está alojado en Vercel y el formulario de contacto se procesa mediante un servicio externo de formularios. Estos proveedores procesan los datos estrictamente para hacernos llegar el mensaje.",
          },
        ],
      },
      terms: {
        title: "Términos de uso",
        updated: "Última actualización: enero de 2026",
        sections: [
          {
            h: "Aceptación",
            p: "Al acceder y utilizar este sitio web aceptas estos términos de uso. Si no estás de acuerdo, por favor no utilices el sitio.",
          },
          {
            h: "Finalidad informativa",
            p: "El contenido de este sitio se ofrece con fines informativos generales sobre los servicios de APEX Facility Consulting LLC. No constituye asesoramiento profesional, legal, contable ni financiero, y la simple navegación por el sitio no crea una relación de consultoría.",
          },
          {
            h: "Propiedad intelectual",
            p: "Todo el contenido, textos, gráficos y elementos de diseño de este sitio son propiedad de APEX Facility Consulting LLC y no pueden reproducirse sin autorización escrita.",
          },
          {
            h: "Limitación de responsabilidad",
            p: "Hacemos esfuerzos razonables para mantener la información del sitio precisa y actualizada, pero no garantizamos que esté libre de errores u omisiones, ni asumimos responsabilidad por decisiones tomadas únicamente con base en este contenido.",
          },
          {
            h: "Contacto",
            p: "Las preguntas sobre estos términos pueden dirigirse a nosotros utilizando los datos de contacto de este sitio.",
          },
        ],
      },
    },

    notFound: {
      title: "Página no encontrada",
      body: "La página que buscas no existe o ha sido movida.",
      button: "Volver al inicio",
    },

    pages: {
      about: {
        eyebrow: "NOSOTROS",
        title: "Estructura, procesos y estrategia — construidos sobre tu operación",
        intro:
          "APEX Facility Consulting LLC es una firma de consultoría y gestión empresarial con sede en Addison, Illinois, que trabaja con empresas y emprendedores en Estados Unidos.",
      },
      services: {
        eyebrow: "SERVICIOS",
        title: "Qué hacemos y cómo se desarrolla cada proyecto",
        intro:
          "Seis áreas de trabajo que pueden contratarse por separado o combinarse en un solo plan, siempre adaptadas al tamaño y al ritmo del negocio.",
      },
      approach: {
        eyebrow: "NUESTRA METODOLOGÍA",
        title: "Cómo pasamos de la primera conversación a un resultado medible",
        intro:
          "El método no cambia de cliente a cliente. Lo que cambia es el contenido de cada paso.",
      },
      contact: {
        eyebrow: "CONTACTO",
        title: "Hablemos de tu operación",
        intro:
          "Envíanos los detalles y te responderemos con una primera lectura del caso y un punto de partida propuesto.",
      },
    },

    meta: {
      home: {
        title: "APEX Facility Consulting LLC | Consultoría empresarial en Addison, Illinois",
        description:
          "Firma de consultoría y gestión empresarial en Addison, Illinois. Estrategia, optimización de procesos, consultoría operacional y crecimiento sostenible.",
      },
      about: {
        title: "Nosotros | APEX Facility Consulting LLC",
        description:
          "Firma de consultoría y gestión empresarial en Addison, Illinois que ayuda a empresas a fortalecer estructura, procesos y estrategia.",
      },
      services: {
        title: "Servicios | APEX Facility Consulting LLC",
        description:
          "Consultoría estratégica, optimización de procesos, consultoría operacional, business insights, gestión de proyectos y crecimiento empresarial.",
      },
      approach: {
        title: "Metodología | APEX Facility Consulting LLC",
        description:
          "Un método de cinco pasos: comprender, diagnosticar, diseñar, implementar, medir y optimizar.",
      },
      contact: {
        title: "Contacto | APEX Facility Consulting LLC",
        description:
          "Solicita una consulta con APEX Facility Consulting LLC en Addison, Illinois. (571) 593-2156.",
      },
    },
  },
};

export const LANGS = ["en", "es"];
export const DEFAULT_LANG = "en";
