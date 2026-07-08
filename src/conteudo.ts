export const content = {
  settings: {
    // Global Feature Toggles
    registrationOpen: true,
    submissionOpen: true,

    // Home Page Toggles
    showNoticeBanner: true,
    showIapsSection: true,
    showHomeRegistrationCta: true,
    showHomeInternationalCta: true,

    // Home Page Grid Cards Toggles
    showHomeCardCongress: true,
    showHomeCardRegistration: true,
    showHomeCardSubmissions: true,
    showHomeCardSchedule: true,
    showHomeCardDates: true,
    showHomeCardAlfid: true,

    // Speakers Page Toggles
    showSpeakersFloatingDots: true,

    // Registration Page Toggles
    showRegistrationFeesSection: true,
    showRegistrationCtaSection: true,
    showRegistrationInternationalSection: true,

    // Submission Page Toggles
    showSubmissionThemesSection: true,
    showSubmissionGuidelinesSection: true,
    showSubmissionCtaSection: true,

    // Navbar Toggles
    showNavbarPhotosLink: true,
    showNavbarAlfidLink: true,
    showNavbarOrganizationLink: true,
    showNavbarSpeakersLink: true,

    // Schedule Toggles
    showDetailedSchedule: false, // Set to true to replace the "coming soon" section with the schedule table below
  },
  navbar: {
    home: { pt: "Início", es: "Inicio" },
    congress: { pt: "O Congresso", es: "El Congreso" },
    dates: { pt: "Datas", es: "Fechas" },
    submission: { pt: "Submissão", es: "Envío" },
    registration: { pt: "Inscrição", es: "Inscripción" },
    schedule: { pt: "Programação", es: "Programación" },
    organization: { pt: "Organização", es: "Organización" },
    alfid: { pt: "A Associação", es: "La Asociación" },
    speakers: { pt: "Palestrantes", es: "Ponentes" },
    photos: { pt: "Fotos", es: "Fotos" },
    logoLine1: { pt: "Associação Latina", es: "Asociación Latina" },
    logoLine2: { pt: "de Filosofia do Esporte", es: "de Filosofía del Deporte" }
  },
  footer: {
    contact: { pt: "Contato", es: "Contacto" },
    instagram: { pt: "Instagram", es: "Instagram" },
    website: { pt: "Website", es: "Website" },
    rights: { pt: "© 2026 ALFiD. Todos os direitos reservados.", es: "© 2026 ALFiD. Todos los derechos reservados." },
    category1: { pt: "Sobre o evento", es: "Sobre el evento" },
    category2: { pt: "Participe", es: "Participe" },
    category3: { pt: "Institucional", es: "Institucional" }
  },
  home: {
    documentTitle: "5º Congresso da ALFiD — 2026",
    hero: {
      title1: { pt: "5º Congresso da", es: "5º Congreso de la" },
      title2: { pt: "Associação Latina", es: "Asociación Latina" },
      title3: { pt: "de Filosofia", es: "de Filosofía" },
      title4: { pt: "do Esporte", es: "del Deporte" },
      description: { pt: "A Filosofia do Esporte como espaço de reflexão crítica.", es: "La Filosofía del Deporte como espacio de reflexión crítica." },
      dateLocation: { pt: "27, 28 e 29 de Agosto de 2026", es: "27, 28 y 29 de Agosto de 2026" }
    },
    explore: {
      notice: { 
        pt: "O prazo para submissão de resumos foi encerrado. As inscrições para participação já estão abertas — inscreva-se agora.", 
        es: "El plazo para el envío de resúmenes ha finalizado. Las inscripciones para participación ya están abiertas — inscríbase ahora." 
      },
      title: { pt: "explore o congresso", es: "explore el congreso" },
      description: { pt: "Navegue pelas seções do 5º Congresso da ALFiD e fique por dentro de todas as informações necessárias para sua participação.", es: "Navegue por las secciones del 5º Congreso de la ALFiD y manténgase informado de toda la información necesaria para su participación." }
    },
    cards: {
      congress: {
        title: { pt: "o congresso", es: "el congreso" },
        description: { pt: "Conheça os objetivos e a história deste encontro.", es: "Conozca los objetivos y la historia de este encuentro." }
      },
      dates: {
        title: { pt: "datas importantes", es: "fechas importantes" },
        description: { pt: "Confira os prazos de submissão e inscrições.", es: "Consulte los plazos de envío e inscripciones." }
      },
      submissions: {
        title: { pt: "submissão de trabalhos", es: "envío de trabajos" },
        description: { pt: "Envie seu resumo e participe dos debates.", es: "Envíe su resumen y participe en los debates." }
      },
      registration: {
        title: { pt: "inscrições", es: "inscripciones" },
        description: { pt: "Garanta sua vaga e não perca o 1º lote!", es: "¡Asegura tu lugar y no te pierdas la primera etapa de venta!" }
      },
      schedule: {
        title: { pt: "programação", es: "programación" },
        description: { pt: "Confira a agenda completa do evento.", es: "Consulte la agenda completa del evento." }
      },
      alfid: {
        title: { pt: "ALFiD", es: "ALFiD" },
        description: { pt: "Conheça a história da nossa associação.", es: "Conozca la historia de nuestra asociación." }
      }
    },
    iaps: {
      title: { pt: "estenda sua visita", es: "extienda su visita" },
      description: { pt: "O Congresso da ALFiD antecede a Conferência da IAPS 2026, que também será realizada na EEFE-USP. Aproveite a oportunidade para participar de ambos os eventos e ampliar as possibilidades de diálogo e intercâmbio.", es: "El Congreso de la ALFiD precede a la Conferencia de la IAPS 2026, que también se realizará en la EEFE-USP. Aproveche la oportunidad de participar en ambos eventos y ampliar las posibilidades de diálogo e intercambio." },
      button: { pt: "visitar site da IAPS", es: "visitar sitio de la IAPS" },
      link: "https://iapsconference2026.com.br/",
      image: "/images/logos/IAPS-conf.svg",
      hide: false
    },
    logos: {
      realization: { pt: "realização", es: "realización" },
      support: { pt: "apoio", es: "apoyo" }
    },
    registration_cta: {
      title: { pt: "inscrições abertas", es: "inscripciones abiertas" },
      description: { pt: "Garanta agora sua participação no 5º Congresso da ALFiD. As vagas são limitadas e o 1º lote já está disponível.", es: "Asegure ahora su participación en el 5º Congreso de la ALFiD. Las plazas son limitadas y el primer lote ya está disponible." },
      button: { pt: "ir para inscrições", es: "ir a inscripciones" },
      international_title: { pt: "Inscripción para personas que no residen en Brasil", es: "Inscripción para personas que no residen en Brasil" },
      international_description: { pt: "Rellene el formulario con sus datos. El pago se realizará el día del evento, en efectivo.", es: "Rellene el formulario con sus datos. El pago se realizará el día del evento, en efectivo." },
      international_button: { pt: "acceder al formulario", es: "acceder al formulario" },
      international_link: "https://forms.gle/oodQzoW37CMs2E4u9",
      hide: false,
      international_hide: false
    }
  },
  congress: {
    documentTitle: "O Congresso — 5º Congresso da ALFiD",
    hero: {
      title1: { pt: "sobre o", es: "sobre el" },
      title2: { pt: "congresso", es: "congreso" }
    },
    intro: {
      titleLine1: { pt: "a Filosofia do Esporte como", es: "la Filosofía del Deporte como" },
      titleLine2: { pt: "espaço de reflexão crítica", es: "espacio de reflexión crítica" },
      description: {
        p1: { pt: "O 5º Congresso da Associação Latina de Filosofia do Esporte será realizado de 27 a 29 de agosto de 2026, na ", es: "El 5º Congreso de la Asociación Latina de Filosofía del Deporte se llevará a cabo del 27 al 29 de agosto de 2026, en la " },
        link: { pt: "Escola de Educação Física e Esporte", es: "Escuela de Educación Física y Deporte" },
        p2: { pt: " da Universidade de São Paulo.", es: " de la Universidad de São Paulo." }
      },
      location: { pt: "São Paulo (Brasil)", es: "São Paulo (Brasil)" },
      institution: { pt: "Escola de Educação Física e Esporte da USP", es: "Escuela de Educación Física y Deporte de la USP" },
      format: { pt: "Presencial", es: "Presencial" }
    },
    stats: {
      years: { pt: "anos de ALFiD", es: "años de ALFiD" },
      edition: { pt: "edição do congresso", es: "edición del congreso" },
      languages: { pt: "idiomas oficiais", es: "idiomas oficiales" }
    },
    presentation: {
      title: { pt: "apresentação", es: "presentación" },
      p1_1: { pt: "A ", es: "La " },
      p1_link: { pt: "Associação Latina de Filosofia do Esporte (ALFID)", es: "Asociación Latina de Filosofía del Deporte (ALFID)" },
      p1_2: { pt: " tem como objetivo promover o estudo do esporte, da educação física e do lazer como fenômenos filosóficos, no contexto das línguas latinas.", es: " tiene como objetivo promover el estudio del deporte, la educación física y el ocio como fenómenos filosóficos, en el contexto de las lenguas latinas." },
      p2_1: { pt: "Para nós, o termo ", es: "Para nosotros, el término " },
      p2_bold: { pt: "esporte", es: "deporte" },
      p2_2: { pt: " é compreendido de forma ampla, abrangendo diferentes práticas corporais relacionadas a essas áreas.", es: " se entiende de manera amplia, abarcando diferentes prácticas corporales relacionadas con estas áreas." },
      p3: { pt: "Os eventos da ALFiD são abertos a todos que se interessam pelas interfaces entre esporte e filosofia — estudantes, docentes, profissionais de Educação Física, das humanidades e áreas afins.", es: "Los eventos de la ALFiD están abiertos a todos los que se interesan por las interfaces entre el deporte y la filosofía: estudiantes, docentes, profesionales de la Educación Física, las humanidades y áreas afines." },
      p4: { pt: "Internacionalmente, a Filosofia do Esporte é uma área amplamente reconhecida, instigante e instigadora, que aborda questões em torno do esporte com o rigor metodológico da filosofia e que repensa e faz pensar a própria ciência esportiva.", es: "Internacionalmente, la Filosofía del Deporte es un área ampliamente reconocida, instigante e instigadora, que aborda cuestiones en torno al deporte con el rigor metodológico de la filosofía y que repiensa y hace pensar a la propia ciencia deportiva." },
      p5: { pt: "Diferentes áreas unem-se no propósito de manter uma precisão epistêmica a fim de investigar e aprofundar temáticas variadas da área da educação física e do esporte.", es: "Diferentes áreas se unen con el propósito de mantener una precisión epistémica para investigar y profundizar en temáticas variadas del área de la educación física y el deporte." },
      p6: { pt: "Em sua quinta edição, o congresso retorna ao Brasil com o propósito de reunir associações latino-americanas e pesquisadoras e pesquisadores da área, em diferentes momentos de suas trajetórias.", es: "En su quinta edición, el congreso regresa a Brasil con el propósito de reunir a asociaciones latinoamericanas e investigadoras e investigadores del área, en diferentes momentos de sus trayectorias." },
      p7: { pt: "O encontro propõe um ambiente acolhedor e intelectualmente rigoroso, voltado ao fortalecimento da produção acadêmica e à ampliação do diálogo entre diferentes perspectivas.", es: "El encuentro propone un ambiente acogedor e intelectualmente riguroso, orientado al fortalecimiento de la producción académica y a la ampliación del diálogo entre diferentes perspectivas." },
      p8: { pt: "Nesta edição, o congresso receberá submissões para apresentações orais, além de contar com conferências e mesas-redondas com participação nacional e internacional. A programação acontecerá presencialmente, havendo uma mesa remota para trabalhos excepcionais de outros países falantes da língua latina.*", es: "En esta edición, el congreso recibirá presentaciones para ponencias orales, además de contar con conferencias y mesas redondas con participación nacional e internacional. La programación se llevará a cabo de forma presencial, con una mesa remota para trabajos excepcionales de otros países de habla latina.*" },
      p8_note: { pt: "*Para este painel, serão selecionados 20 trabalhos.", es: "*Para este panel se seleccionarán 20 trabajos." },
      areas: {
        epistemologia: { pt: "epistemologia", es: "epistemología" },
        metafisica: { pt: "metafísica", es: "metafísica" },
        logica: { pt: "lógica", es: "lógica" },
        etica: { pt: "ética", es: "ética" },
        estetica: { pt: "estética", es: "estética" },
        fenomenologia: { pt: "fenomenologia", es: "fenomenología" },
        filosofia_aplicada: { pt: "filosofia aplicada", es: "filosofía aplicada" },
        filosofia_comparada: { pt: "filosofia comparada", es: "filosofía comparada" },
        filosofia_analitica: { pt: "filosofia analítica", es: "filosofía analítica" }
      }
    },
    objectives: {
      title: { pt: "nosso propósito", es: "nuestro propósito" },
      description: { pt: "O Congresso da ALFiD tem como propósito reunir associações latino-americanas de filosofia do esporte e pessoas pesquisadoras em diferentes momentos de sua trajetória, promovendo um ambiente acolhedor que incentive e fortaleça a produção acadêmica na área.", es: "El Congreso de la ALFiD tiene como propósito reunir a asociaciones latinoamericanas de filosofía del deporte e investigadores en diferentes momentos de su trayectoria, promoviendo un ambiente acogedor que incentive y fortalezca la producción académica en el área." },
      list: [
        {
          number: "01.",
          title: { pt: "Pesquisa e Produção", es: "Investigación y Producción" },
          description: { pt: "Estimular, encorajar e promover estudos, pesquisas e produções acadêmicas na área.", es: "Estimular, fomentar y promover estudios, investigaciones y producciones académicas en el área." }
        },
        {
          number: "02.",
          title: { pt: "Debate Global", es: "Debate Global" },
          description: { pt: "Ampliar a internacionalização e fortalecer o debate entre falantes de línguas latinas no âmbito acadêmico e científico.", es: "Ampliar la internacionalización y fortalecer el debate entre hablantes de lenguas latinas en el ámbito académico y científico." }
        },
        {
          number: "03.",
          title: { pt: "Visão Científica", es: "Visión Científica" },
          description: { pt: "Propiciar consistência, conexão e visibilidade à oferta de pesquisas científicas de universidades brasileiras e latino-americanas.", es: "Propiciar consistencia, conexión y visibilidad a la oferta de investigaciones científicas de universidades brasileñas y latinoamericanas." }
        },
        {
          number: "04.",
          title: { pt: "Acesso Acadêmico", es: "Acceso Académico" },
          description: { pt: "Possibilitar a participação e acesso aos alunos e alunas de graduação e pós-graduação às temáticas abordadas.", es: "Posibilitar la participación y el acceso de los estudiantes de grado y posgrado a las temáticas abordadas." }
        }
      ]
    }
  },
  dates: {
    documentTitle: "Datas Importantes — 5º Congresso da ALFiD",
    hero: {
      title1: { pt: "datas", es: "fechas" },
      title2: { pt: "importantes", es: "importantes" }
    },
    list: [
      {
        day: "17",
        weekday: { pt: "Qua", es: "Mié" },
        monthYear: { pt: "Abril, 2026", es: "Abril, 2026" },
        title: { pt: "Data limite para submissão de trabalhos", es: "Fecha límite para la presentación de trabajos" },
        expired: true
      },
      {
        day: "15",
        weekday: { pt: "Sex", es: "Vie" },
        monthYear: { pt: "Maio, 2026", es: "Mayo, 2026" },
        title: { pt: "Divulgação dos resultados e notificação de aceite", es: "Divulgación de resultados y notificación de aceptación" }
      },
      {
        day: "30",
        weekday: { pt: "Sáb", es: "Sáb" },
        monthYear: { pt: "Maio, 2026", es: "Mayo, 2026" },
        title: { pt: "Prazo final para inscrições com desconto", es: "Fecha límite para inscripciones con descuento" }
      },
      {
        day: "30",
        weekday: { pt: "Qui", es: "Jue" },
        monthYear: { pt: "Julho, 2026", es: "Julio, 2026" },
        title: { pt: "Prazo final para inscrições (ou até o preenchimento das vagas)", es: "Fecha límite para inscripciones (o hasta el límite de vacantes)" }
      },
      {
        day: "27-29",
        weekday: { pt: "Qui-Sáb", es: "Jue-Sáb" },
        monthYear: { pt: "Agosto, 2026", es: "Agosto, 2026" },
        title: { pt: "5º Congresso da ALFiD", es: "5º Congreso de la ALFiD" }
      }
    ]
  },
  submission: {
    documentTitle: "Submissão de Trabalhos — 5º Congresso da ALFiD",
    hero: {
      title1: { pt: "submissão", es: "envío" },
      title2: { pt: "de", es: "de" },
      title3: { pt: "trabalhos", es: "trabajos" }
    },
    themes: {
      deadline_notice: { pt: "O prazo para submissão de trabalhos foi encerrado.", es: "El plazo para la presentación de trabajos ha finalizado." },
      title: { pt: "Temas para inscrição de apresentações orais", es: "Temas para la inscripción de presentaciones orales" },
      list: [
        { pt: "Ética", es: "Ética" },
        { pt: "Epistemologia", es: "Epistemología" },
        { pt: "Estudos Aplicados", es: "Estudios Aplicados" },
        { pt: "Metafísica", es: "Metafísica" },
        { pt: "Fenomenologia", es: "Fenomenología" },
        { pt: "Competição", es: "Competición" },
        { pt: "Estética", es: "Estética" },
        { pt: "Doping", es: "Dopaje" },
        { pt: "Definições e teorias do esporte", es: "Definiciones y teorías del deporte" },
        { pt: "Gênero", es: "Género" },
        { pt: "Racismo", es: "Racismo" },
        { pt: "Interdisciplinaridade", es: "Interdisciplinariedad" },
        { pt: "Tecnologia", es: "Tecnología" },
        { pt: "Natureza/Ambiente", es: "Naturaleza/Ambiente" },
        { pt: "Filosofia Social/Política", es: "Filosofía Social/Política" },
        { pt: "Definições e teorias do jogo e do brincar", es: "Definiciones y teorías del juego y del jugar" },
        { pt: "Outro", es: "Otro" }
      ]
    },
    criteria: {
      title: { pt: "Critérios de seleção de trabalhos", es: "Criterios de selección de trabajos" },
      description: { pt: "Serão considerados trabalhos fundamentados em referenciais teórico-metodológicos da filosofia ou que dialoguem com outras áreas das humanidades, e que proponham reflexões pertinentes às práticas corporais no esporte, no lazer e na educação.", es: "Se considerarán trabajos fundamentados en marcos teórico-metodológicos de la filosofía o que dialoguen con otras áreas de las humanidades, y que propongan reflexiones pertinentes a las prácticas corporales en el deporte, el ocio y la educación." }
    },
    guidelines: {
      title: { pt: "Orientações para submissão de resumos", es: "Orientaciones para la presentación de resúmenes" },
      download_soon: { pt: "O download do PDF será disponibilizado em breve.", es: "La descarga del PDF estará disponible pronto." },
      languages: {
        pt: {
          name: { pt: "Português", es: "Portugués" },
          instruction: { pt: "orientações para submissão", es: "instrucciones de envío" },
          buttonText: { pt: "visualizar", es: "visualizar" },
          closeText: { pt: "fechar", es: "cerrar" },
          downloadText: { pt: "baixar pdf", es: "descargar pdf" },
          content: {
            p1_bold: { pt: "Os resumos podem abranger qualquer área da filosofia do esporte. Também serão consideradas propostas de mesas-redondas, que devem incluir uma lista de potenciais participantes. A comissão organizadora reconhece o valor de diferentes métodos filosóficos, bem como abordagens multidisciplinares. No entanto, a aceitação dos resumos dependerá de seu conteúdo e qualidade filosófica.", es: "Los resúmenes pueden abarcar cualquier área de la filosofía del deporte. También se considerarán propuestas de mesas redondas, que deben incluir una lista de participantes potenciales. El comité organizador reconoce el valor de los diferentes métodos filosóficos, así como de los enfoques multidisciplinarios. Sin embargo, la aceptación de los resúmenes dependerá de su contenido y calidad filosófica." },
            p2: { pt: "Todas as apresentações serão realizadas no formato oral e para tal serão disponibilizados recursos audiovisuais (computador e projetor de imagem).", es: "Todas las presentaciones se realizarán en formato oral y para ello se dispondrá de recursos audiovisuales (computadora y proyector de imágenes)." },
            p3: { pt: "O prazo para submissão de resumos ou propostas para mesas redondas foi encerrado. Uma comissão do conselho diretivo da associação será responsável pela avaliação dos resumos submetidos.", es: "El plazo para la presentación de resúmenes o propuestas de mesas redondas ha finalizado. Una comisión de la junta directiva de la asociación se encargará de evaluar los resúmenes presentados." },
            p4: { pt: "A decisão da comissão será comunicada até 15 de maio de 2026.", es: "La decisión del comité se comunicará antes del 15 de mayo de 2026." },
            p5: { pt: "", es: "" },
            format_title: { pt: "Formato", es: "Formato" },
            format_p1: { pt: "Os resumos devem ter entre 300 e 500 palavras (excluindo referências), em um dos idiomas oficiais da associação (espanhol, francês, italiano ou português) e deverão ser preparados contendo as seguintes informações:", es: "Los resúmenes deben tener entre 300 y 500 palabras (excluyendo referencias), en uno de los idiomas oficiales de la asociación (español, francés, italiano o portugués) y deben prepararse con la siguiente información:" },
            format_list: [
              { pt: "Autoria, endereço de e-mail, instituição", es: "Autoría, dirección de correo electrónico, institución" },
              { pt: "Título", es: "Título" },
              { pt: "Resumo: fonte Times New Roman, tamanho 12, espaçamento simples, alinhamento do texto à esquerda.", es: "Resumen: fuente Times New Roman, tamaño 12, interlineado sencillo, alineación del texto a la izquierda." },
              { pt: "Palavras-chave (3 a 5)", es: "Palabras clave (3 a 5)" },
              { pt: "Três referências bibliográficas que contextualizam o tema na literatura filosófica pertinente", es: "Tres referencias bibliográficas que contextualizan el tema en la literatura filosófica pertinente" },
              { pt: "Indique a área ou tema mais adequado para sua apresentação (sugerir duas destas opções):", es: "Indique el área o tema más adecuado para su presentación (sugiera dos de estas opciones):" }
            ],
            submission_title: { pt: "Submissão", es: "Envío" },
            submission_p1: { pt: "Os resumos devem ser submetidos, em WORD (.doc), em dois arquivos diversos no mesmo e-mail:", es: "Los resúmenes deben presentarse, en WORD (.doc), en dos archivos diferentes en el mismo correo electrónico:" },
            submission_list: [
              { pt: "um contendo todas as informações (itens 1 ao 6) e título do arquivo contendo o título do texto seguido do sobrenome do/a primeiro/a autor/a;", es: "uno que contenga toda la información (puntos 1 a 6) y el título del archivo que contenga el título del texto seguido del apellido del primer autor;" },
              { pt: "outro sem dados de identificação de autoria (sem o item 1), e com o título do arquivo contendo apenas o título do texto.", es: "otro sin datos de identificación de autoría (sin el punto 1), y con el título del archivo que contenga únicamente el título del texto." }
            ],
            additional_info: { pt: "Informações adicionais serão divulgadas nos canais de comunicação.", es: "Se publicará información adicional a través de los canales de comunicación." }
          }
        },
        es: {
          name: { pt: "Espanhol", es: "Español" },
          instruction: { pt: "instrucciones de envío", es: "instrucciones de envío" },
          buttonText: { pt: "visualizar", es: "visualizar" },
          closeText: { pt: "cerrar", es: "cerrar" },
          downloadText: { pt: "descargar pdf", es: "descargar pdf" },
          content: {
            p1_bold: { pt: "Los resúmenes pueden abarcar cualquier área de la filosofía del deporte. También se tendrán en cuenta las propuestas de mesas redondas, que deberán incluir una lista de posibles participantes. El comité organizador reconoce el valor de los diferentes métodos filosóficos, así como de los enfoques multidisciplinares. No obstante, la aceptación de los resúmenes dependerá de su contenido y de su calidad filosófica.", es: "Los resúmenes pueden abarcar cualquier área de la filosofía del deporte. También se tendrán en cuenta las propuestas de mesas redondas, que deberán incluir una lista de posibles participantes. El comité organizador reconoce el valor de los diferentes métodos filosóficos, así como de los enfoques multidisciplinares. No obstante, la aceptación de los resúmenes dependerá de su contenido y de su calidad filosófica." },
            p2: { pt: "Todas las presentaciones se realizarán en formato oral y, para ello, se pondrán a disposición recursos audiovisuales (ordenador y proyector de imágenes).", es: "Todas las presentaciones se realizarán en formato oral y, para ello, se pondrán a disposición recursos audiovisuales (ordenador y proyector de imágenes)." },
            p3: { pt: "O prazo para a submissão de resumos ou propostas de mesas redondas foi encerrado. A decisão da comissão de avaliação será comunicada até 15 de maio de 2026.", es: "El plazo para la presentación de resúmenes o propuestas de mesas redondas ha finalizado. La decisión de la comisión de evaluación se comunicará antes del 15 de mayo de 2026." },
            p4: { pt: "", es: "" },
            format_title: { pt: "Formato", es: "Formato" },
            format_p1: { pt: "Los resúmenes deben tener entre 300 y 500 palabras (sin incluir las referencias), estar redactados en uno de los idiomas oficiales de la asociación (español, francés, italiano o portugués) y contener la siguiente información:", es: "Los resúmenes deben tener entre 300 y 500 palabras (sin incluir las referencias), estar redactados en uno de los idiomas oficiales de la asociación (español, francés, italiano o portugués) y contener la siguiente información:" },
            format_list: [
              { pt: "Autoría, dirección de correo electrónico, institución", es: "Autoría, dirección de correo electrónico, institución" },
              { pt: "Título", es: "Título" },
              { pt: "Resumen: fonte Times New Roman, tamanho 12, interlineado sencillo, alineación del texto a la izquierda", es: "Resumen: fuente Times New Roman, tamaño 12, interlineado sencillo, alineación del texto a la izquierda" },
              { pt: "Palabras clave (3 a 5)", es: "Palabras clave (3 a 5)" },
              { pt: "Tres referencias bibliográficas que contextualice el tema en la literatura filosófica pertinente", es: "Tres referencias bibliográficas que contextualice el tema en la literatura filosófica pertinente" },
              { pt: "Indique el área o tema más adecuado para su presentación (sugiera dos de estas opciones):", es: "Indique el área o tema más adecuado para su presentación (sugiera dos de estas opciones):" }
            ],
            submission_title: { pt: "Envío", es: "Envío" },
            submission_p1: { pt: "Los resúmenes deben enviarse en formato WORD (.doc), en dos arquivos distintos no mesmo e-mail:", es: "Los resúmenes deben enviarse en formato WORD (.doc), en dos arquivos distintos no mesmo e-mail:" },
            submission_list: [
              { pt: "Uno con toda la informação (puntos 1 a 6) e o título do arquivo com o título do texto seguido do sobrenome do primeiro autor;", es: "Uno con toda la informação (puntos 1 a 6) e o título do arquivo com o título do texto seguido del apellido del primer autor;" },
              { pt: "Otro sem dados de identificação da autoría (sem o ponto 1) e com o título do arquivo contendo solo o título do texto.", es: "Otro sem dados de identificação da autoría (sem o ponto 1) e com o título do arquivo contendo solo o título do texto." }
            ],
            additional_info: { pt: "Se publicará información adicional a través de los canales de comunicación.", es: "Se publicará información adicional a través de los canales de comunicación." }
          }
        },
        fr: {
          name: { pt: "Francês", es: "Francés" },
          instruction: { pt: "consignes de soumission", es: "consignes de soumission" },
          buttonText: { pt: "visualiser", es: "visualiser" },
          closeText: { pt: "fermer", es: "fermer" },
          downloadText: { pt: "télécharger le pdf", es: "télécharger le pdf" },
          content: {
            p1_bold: { pt: "Les résumés peuvent couvrir n'importe quel domaine de la philosophie du sport. Les propositions de tables rondes, qui doivent inclure une liste de participants potentiels, serão igualmente prises en considération. Le comité organizador reconhece o valor dos diferentes métodos filosóficos, assim como das abordagens multidisciplinares. No entanto, a aceitação dos resumos dependerá de seu conteúdo e de sua qualidade filosófica.", es: "Les résumés peuvent couvrir n'importe quel domaine de la philosophie du sport. Les propositions de tables rondes, qui doivent inclure une liste de participants potentiels, seront également prises en considération. Le comité organizador reconnaît la valeur des différentes méthodes philosophiques, ainsi que des approches multidisciplinares. Cependant, l'acceptation des résumés dépendra de leur contenu et de leur qualité philosophique." },
            p2: { pt: "Toutes les présentations se feront sous forme orale et des ressources audiovisuelles (ordinateur et projecteur) serão mises à disposição à cet efeito.", es: "Toutes les présentations se feront sous forme orale et des ressources audiovisuelles (ordinateur et projecteur) seront mises à disposition à cet effet." },
            p3: { pt: "O prazo para a submissão de resumos ou propostas de mesas redondas foi encerrado. A decisão da comissão de avaliação será comunicada até 15 de maio de 2026.", es: "La date limite pour la soumission des résumés ou des propositions de tables rondes est passée. La décision de la commission sera communiquée avant le 15 mai 2026." },
            p4: { pt: "", es: "" },
            format_title: { pt: "Format", es: "Format" },
            format_p1: { pt: "Les résumés devem contar entre 300 e 500 palavras (hors références), être rédigés dans l'une des langues officielles de l'association (espagnol, francês, italiano ou português) e conter as informações seguintes :", es: "Les résumés doivent compter entre 300 et 500 mots (hors références), être rédigés dans l'une des langues officielles de l'association (espagnol, français, italiano ou português) et contenir les informations suivantes :" },
            format_list: [
              { pt: "Auteur, adresse électronique, instituição", es: "Auteur, adresse électronique, instituição" },
              { pt: "Titre", es: "Titre" },
              { pt: "Résumé : police Times New Roman, taille 12, interligne simple, alignement du texte à gauche.", es: "Résumé : police Times New Roman, taille 12, interligne simple, alignement du texte à gauche." },
              { pt: "Mots-clés (3 à 5)", es: "Mots-clés (3 à 5)" },
              { pt: "Trois références bibliográficas qui contextualisent le thème dans la littérature philosophique pertinente", es: "Trois références bibliográficas qui contextualisent le thème dans la littérature philosophique pertinente" },
              { pt: "Indiquez le domaine ou le thème le plus approprié pour votre présentation (suggérez deux de ces options) :", es: "Indiquez le domaine ou le thème le plus approprié pour votre présentation (suggérez deux de ces options) :" }
            ],
            submission_title: { pt: "Soumission", es: "Soumission" },
            submission_p1: { pt: "Les résumés devem ser submetidos, no formato WORD (.doc), em dois arquivos distintos no mesmo e-mail :", es: "Les résumés devem ser submetidos, no formato WORD (.doc), em dois arquivos distintos no mesmo e-mail :" },
            submission_list: [
              { pt: "l'un contenant todas as informações (pontos 1 a 6) e o título do arquivo contendo o título do texto seguido do sobrenome do primeiro autor ;", es: "l'un contenant todas as informações (pontos 1 a 6) e o título do arquivo contendo o título do texto seguido do sobrenome do primeiro autor ;" },
              { pt: "l'autre sem os dados de identificação do autor (sem o ponto 1), e com o título do arquivo contendo apenas o título do texto.", es: "l'autre sem os dados de identificação do autor (sem o ponto 1), e com o título do arquivo contendo apenas o título do texto." }
            ],
            additional_info: { pt: "Des informações complementares serão divulgadas via os canais de comunicação.", es: "Des informações complementares serão divulgadas via os canais de comunicação." }
          }
        },
        it: {
          name: { pt: "Italiano", es: "Italiano" },
          instruction: { pt: "istruzioni per l'invio", es: "istruzioni per l'invio" },
          buttonText: { pt: "visualizza", es: "visualizza" },
          closeText: { pt: "chiudi", es: "chiudi" },
          downloadText: { pt: "scarica il pdf", es: "scarica il pdf" },
          content: {
            p1_bold: { pt: "Gli abstract possono riguardare qualsiasi area della filosofia dello sport. Saranno prese in considerazione anche proposte di tavole rotonde, che dovranno includere un elenco di potenziali partecipanti. Il comitato organizzatore riconosce il valore dei diversi metodi filosofici, nonché degli approcci multidisciplinari. Tuttavia, l'accettazione degli abstract dipenderà dal loro contenuto e dalla loro qualidade filosófica.", es: "Gli abstract possono riguardare qualsiasi area della filosofia dello sport. Saranno prese in considerazione anche proposte di tavole rotonde, que dovranno includere un elenco di potenziali partecipanti. Il comitato organizzatore riconosce il valore dei diversi metodi filosofici, nonché degli approcci multidisciplinari. Tuttavia, l'accettazione degli abstract dipenderà dal loro contenuto e dalla loro qualità filosofica." },
            p2: { pt: "Tutte le presentazioni serão in formato orale e per questo serão messi a disposição mezzi audiovisuais (computer e proiettore).", es: "Tutte le presentazioni serão in formato orale e per questo serão messi a disposição mezzi audiovisuais (computer e proiettore)." },
            p3: { pt: "O prazo para a submissão de resumos ou propostas de mesas redondas foi encerrado. A decisão da comissão de avaliação será comunicada até 15 de maio de 2026.", es: "Il termine per la presentazione degli abstract o delle proposte per le tavole rotonde è scaduto. La decisione della commissione sarà comunicata entro il 15 maggio 2026." },
            p4: { pt: "", es: "" },
            format_title: { pt: "Formato", es: "Formato" },
            format_p1: { pt: "Gli abstract devem conter entre 300 e 500 palavras (excluindo referências), em um dos idiomas oficiais da associação (espanhol, francês, italiano ou português) e devem ser redatti contendo as seguintes informações:", es: "Gli abstract devem conter entre 300 e 500 palavras (excluindo referências), em um dos idiomas oficiais da associação (espanhol, francês, italiano ou português) e devem ser redatti contendo as seguintes informações:" },
            format_list: [
              { pt: "Autore, indirizzo e-mail, instituição", es: "Autore, indirizzo e-mail, instituição" },
              { pt: "Titolo", es: "Titolo" },
              { pt: "Riassunto: carattere Times New Roman, tamanho 12, interlinea singola, alinhamento do texto à esquerda.", es: "Riassunto: carattere Times New Roman, tamanho 12, interlinea singola, alinhamento do texto à esquerda." },
              { pt: "Parole chiave (da 3 a 5)", es: "Parole chiave (da 3 a 5)" },
              { pt: "Tre referências bibliográficas que contextualizam o tema na literatura filosófica pertinente", es: "Tre referências bibliográficas que contextualizam o tema na literatura filosófica pertinente" },
              { pt: "Indicare l'area o o tema mais adequado para sua apresentação (sugerir due di queste opzioni):", es: "Indicare l'area o o tema mais adequado para sua presentazione (sugerir due di queste opzioni):" }
            ],
            submission_title: { pt: "Sottomissione", es: "Sottomissione" },
            submission_p1: { pt: "Gli abstract devem ser submetidos, no formato WORD (.doc), em dois arquivos diversos no mesmo e-mail:", es: "Gli abstract devem ser submetidos, no formato WORD (.doc), em dois arquivos diversos no mesmo e-mail:" },
            submission_list: [
              { pt: "um contendo todas as informações (pontos 1 a 6) e o título do arquivo contendo o título do texto seguido do sobrenome do primeiro autor ;", es: "uno contenente tutte le informações (punti da 1 a 6) e il titolo del file contenente il titolo del testo seguito dal cognome del primo autore;" },
              { pt: "outro sem os dados de identificação do autor (sem o ponto 1) e com o título do arquivo contendo apenas o título do texto.", es: "un altro senza dati identificativi dell'autore (senza il punto 1) e con il titolo do file contenente solo il titolo do testo." }
            ],
            additional_info: { pt: "Ulteriori informações serão divulgadas através dos canais de comunicazione.", es: "Ulteriori informações serão divulgadas através dos canais de comunicazione." }
          }
        }
      }
    },
    cta_section: {
      title: { pt: "agradecemos a todos que submeteram seus trabalhos!", es: "¡agradecemos a todos los que enviaron sus trabajos!" },
      description: { pt: "O prazo para envio dos resumos foi encerrado.\nEm breve divulgaremos os resultados.", es: "El plazo para el envío de resúmenes ha finalizado.\nPronto anunciaremos los resultados." },
      button: { pt: "ver orientações", es: "ver instrucciones" },
      link: "#guidelines",
      note: { pt: "", es: "" },
      hide: true
    }
  },
  registration: {
    documentTitle: "Inscrições — 5º Congresso da ALFiD",
    hero: {
      title: { pt: "inscrições", es: "inscripciones" },
      description: { pt: "Garanta sua participação no 5º Congresso da ALFiD.", es: "Asegure su participación en el 5º Congreso de la ALFiD." }
    },
    fees: {
      title: { pt: "taxa de inscrição", es: "tasa de inscripción" },
      batch1: {
        label: { pt: "Valores até 30 de maio", es: "Valores hasta el 30 de mayo" },
        studentLabel: { pt: "Estudantes e Professores/as de Escola Pública", es: "Estudiantes y Profesores/as de Escuela Pública" },
        professionalLabel: { pt: "Profissionais", es: "Profesionales" }
      },
      batch2: {
        label: { pt: "Valores até 30 de julho", es: "Valores hasta el 30 de julio" },
        studentLabel: { pt: "Estudantes e Professores/as de Escola Pública", es: "Estudiantes y Profesores/as de Escuela Pública" },
        professionalLabel: { pt: "Profissionais", es: "Profesionales" }
      }
    },
    cta_section: {
      title: { pt: "faça parte desta edição", es: "sea parte de esta edición" },
      description: { pt: "Não perca o 1º lote e garanta sua participação — vagas limitadas.", es: "No se pierda el 1º lote y asegure su participación — plazas limitadas." },
      button: { pt: "Quero me inscrever", es: "Quiero inscribirme" },
      ticketButton: { pt: "Consultar boleto / 2ª via", es: "Consultar boleto / 2ª vía" },
      link: "https://eefe2.webhostusp.sti.usp.br/inscricoes/alfid2026/index.php",
      ticketLink: "https://uspdigital.usp.br/mercurioweb/merBoletoBancarioAcompanhar.jsp?codmnu=197",
      soon: { pt: "Em breve...", es: "Próximamente..." },
      hide: false,
      hideButton: false,
      hideTicketButton: false
    }
  },
  schedule: {
    documentTitle: "Programação — 5º Congresso da ALFiD",
    hero: {
      title: { pt: "programação", es: "programación" },
      soon: { pt: "Em breve...", es: "Próximamente..." }
    },
    description: { pt: "A programação detalhada do 5º Congresso da ALFiD está sendo finalizada e será divulgada em breve!", es: "¡La programação detalhada do 5º Congresso da ALFiD está sendo finalizada e será divulgada em breve!" },
    construction: { pt: "Em breve...", es: "Próximamente..." },
    days: [
      {
        date: { pt: "Dia 1 — 15 de Outubro", es: "Día 1 — 15 de Octubre" },
        events: [
          {
            time: "08:30 - 09:30",
            title: { pt: "Credenciamento e Entrega de Materiais", es: "Acreditación y Entrega de Materiales" },
            description: { pt: "Recepção dos participantes e retirada de crachás na secretaria do evento.", es: "Recepción de participantes y entrega de credenciales en la secretaría del evento." }
          },
          {
            time: "09:30 - 10:30",
            title: { pt: "Abertura Oficial", es: "Apertura Oficial" },
            description: { pt: "Mesa de abertura com autoridades acadêmicas e representantes da ALFiD.", es: "Mesa de apertura con autoridades académicas y representantes de la ALFiD." }
          },
          {
            time: "10:30 - 12:00",
            title: { pt: "Conferência de Abertura", es: "Conferencia de Apertura" },
            description: { pt: "Palestra com convidado especial abordando os rumos da Filosofia do Esporte.", es: "Conferencia con invitado especial abordando los rumbos de la Filosofía del Deporte." }
          }
        ]
      },
      {
        date: { pt: "Dia 2 — 16 de Outubro", es: "Día 2 — 16 de Octubre" },
        events: [
          {
            time: "09:00 - 12:00",
            title: { pt: "Mesas Redondas e Simpósios Temáticos", es: "Mesas Redondas y Simposios Temáticos" },
            description: { pt: "Apresentação de trabalhos e discussões em grupos temáticos simultâneos.", es: "Presentación de trabalhos e discussões em grupos temáticos simultáneos." }
          },
          {
            time: "14:00 - 16:00",
            title: { pt: "Sessões de Comunicações Orais", es: "Sesiones de Comunicaciones Orales" },
            description: { pt: "Apresentação de pesquisas selecionadas pelo comitê científico.", es: "Presentación de investigaciones seleccionadas por el comité científico." }
          }
        ]
      }
    ]
  },
  organization: {
    documentTitle: "Organização — 5º Congresso da ALFiD",
    hero: {
      title1: { pt: "organização", es: "organización" },
      title2: { pt: "do evento", es: "del evento" }
    },
    committees: {
      promotion: { pt: "Promoção e Organização", es: "Promoción y Organización" },
      support: { pt: "Apoio", es: "Apoyo" },
      scientific: { pt: "Comissão Científica", es: "Comisión Científica" }
    },
    members: {
      cesc: { pt: "Centro de Estudos Socioculturais do Movimento Humano (CESC)", es: "Centro de Estudios Socioculturales del Movimiento Humano (CESC)" },
      pedagogy: { pt: "Departamento de Pedagogia do Movimento do Corpo Humano", es: "Departamento de Pedagogía del Movimiento del Cuerpo Humano" },
      eefe: { pt: "Escola de Educação Física e Esporte da Universidade de São Paulo", es: "Escuela de Educação Física e Esporte da Universidade de São Paulo" },
      aefd: { pt: "Associação Espanhola de Filosofia do Desporto - AEFD", es: "Associação Espanhola de Filosofia do Desporto - AEFD" },
      afdlp: { pt: "Associação de Filosofia do Desporto em Língua Portuguesa - AFDLP", es: "Associação de Filosofia do Desporto em Língua Portuguesa - AFDLP" },
      prpi: { pt: "Pró-Reitoria de Pesquisa e Inovação da USP (PRPI-USP)", es: "Pró-Reitoria de Pesquisa e Inovação da USP (PRPI-USP)" },
      scientific_list: [
        { pt: "Profa. Dra. Ana Cristina Zimmermann — Escola de Educação Física e Esporte da Universidade de São Paulo (Brasil)", es: "Profa. Dra. Ana Cristina Zimmermann — Escola de Educação Física e Esporte da Universidade de São Paulo (Brasil)" },
        { pt: "Profa. Dra. Soraia Chung Saura — Escola de Educação Física e Esporte da Universidade de São Paulo (Brasil)", es: "Profa. Dra. Soraia Chung Saura — Escola de Educação Física e Esporte da Universidade de São Paulo (Brasil)" },
        { pt: "Profa. Dra. Michele Viviane Carbinatto — Escola de Educação Física e Esporte da Universidade de São Paulo (Brasil)", es: "Profa. Dra. Michele Viviane Carbinatto — Escola de Educação Física e Esporte da Universidade de São Paulo (Brasil)" },
        { pt: "Profa. Dra. Carolina Fernandes da Silva — Universidade Federal de Santa Catarina (Brasil)", es: "Profa. Dra. Carolina Fernandes da Silva — Universidade Federal de Santa Catarina (Brasil)" },
        { pt: "Prof. Dr. Mafaldo Maza Dueñas — Universidad Autónoma Chapingo (México)", es: "Prof. Dr. Mafaldo Maza Dueñas — Universidad Autónoma Chapingo (México)" },
        { pt: "Prof. Dr. Ramiro Gonzalez Gainza — Universidad Nacional de Luján (Argentina)", es: "Prof. Dr. Ramiro Gonzalez Gainza — Universidad Nacional de Luján (Argentina)" },
        { pt: "Prof. Dr. Jonas Holst — Universidad San Jorge (Espanha)", es: "Prof. Dr. Jonas Holst — Universidad San Jorge (Espanha)" },
        { pt: "Prof. Dr. Emanuele Isidori — Università degli Studi di Roma (Itália)", es: "Prof. Dr. Emanuele Isidori — Università degli Studi di Roma (Itália)" },
        { pt: "Prof. Dr. Francisco Javier López Frías — Emma Eccles Jones College of Education and Human Services (Estados Unidos)", es: "Prof. Dr. Francisco Javier López Frías — Emma Eccles Jones College of Education and Human Services (Estados Unidos)" },
        { pt: "Prof. Dr. Maria Luísa Gagliardini Graça — Universidade do Porto (Portugal)", es: "Prof. Dr. Maria Luísa Gagliardini Graça — Universidade do Porto (Portugal)" },
        { pt: "Prof. Dr. Bernard Andrieu — Université Paris Cité (França)", es: "Prof. Dr. Bernard Andrieu — Université Paris Cité (França)" }
      ]
    }
  },
  alfid: {
    documentTitle: "A Associação — 5º Congresso da ALFiD",
    hero: {
      title1: { pt: "sobre", es: "sobre" },
      title2: { pt: "a ALFiD", es: "la ALFiD" }
    },
    sections: {
      philosophy: {
        title: { pt: "A Filosofia do Esporte", es: "La Filosofía del Deporte" },
        description: { pt: "A Filosofia do Esporte consolida-se internacionalmente a partir da década de 1970, com a criação da International Association for the Philosophy of Sport (IAPS). Desde então, a área tem se expandido por meio da formação de associações parceiras que reúnem diferentes nacionalidades, ampliando as reflexões na interface entre Filosofia e Educação Física.", es: "La Filosofía del Deporte se consolida internacionalmente a partir de la década de 1970, con la creación de la International Association for the Philosophy of Sport (IAPS). Desde entonces, el área se ha expandido a través de la formación de asociaciones asociadas que reúnen diferentes nacionalidades, ampliando las reflexiones en la interfaz entre Filosofía y Educación Física." }
      },
      foundation: {
        title: { pt: "A Fundação da ALFiD", es: "La Fundación de la ALFiD" },
        p1: { pt: "A Associação Latina de Filosofia do Esporte (ALFiD) foi criada em novembro de 2013, com o propósito de promover estudos e análises do esporte como fenômeno filosófico no contexto das línguas latinas — espanhol, francês, italiano e português.", es: "La Asociación Latina de Filosofía del Deporte (ALFiD) fue creada en noviembre de 2013, con el propósito de promover estudios e análisis del deporte como fenómeno filosófico no contexto das línguas latinas — espanhol, francês, italiano e português." },
        p2: { pt: "Sua formação está diretamente ligada ao crescimento do número de pessoas latino-americanas dedicadas à Filosofia do Esporte e aos bons resultados das conferências da IAPS realizadas no Porto (Portugal), em 2012, e em Fullerton (EUA), em 2013, que passaram a incluir trabalhos em espanhol e português.", es: "Su formación está directamente vinculada al crecimiento del número de personas latinoamericanas dedicadas a la Filosofía del Deporte y a los buenos resultados de las conferencias de la IAPS realizadas en Oporto (Portugal), en 2012, y en Fullerton (Estados Unidos), en 2013, que pasaron a incluir trabajos en español y portugués." },
        p3: { pt: "Embora já houvesse conversas informais, foi nesses encontros que surgiram reuniões com o objetivo de criar uma associação própria. A ALFiD nasce desse movimento.", es: "Embora já houvesse conversas informais, foi nesses encontros que surgiram reuniões com o objetivo de criar uma associação própria. A ALFiD nasce desse movimento." }
      },
      congresses: {
        title: { pt: "Nossos Congressos", es: "Nuestros Congresos" },
        ed1: {
          title: { pt: "1ª edição — 2014", es: "1ª edición — 2014" },
          description: { pt: "Realizada em Natal (Brasil), em conjunto com a 42ª Conferência da IAPS, a primeira edição marcou o início das atividades da ALFID.", es: "Realizada em Natal (Brasil), em conjunto com a 42ª Conferência da IAPS, a primeira edição marcou o início das atividades da ALFID." }
        },
        ed2: {
          title: { pt: "2ª edição — 2016", es: "2ª edición — 2016" },
          description: { pt: "O segundo congresso ocorreu na Faculdade de Desporto da Universidade do Porto (FADEUP), no Porto (Portugal), dando continuidade ao fortalecimento do evento no cenário internacional.", es: "El segundo congreso tuvo lugar en la Facultad de Deporte de la Universidad de Oporto (FADEUP), en Oporto (Portugal), continuando el fortalecimiento del evento en el escenario internacional." }
        },
        ed3: {
          title: { pt: "3ª edição — 2018", es: "3ª edición — 2018" },
          description: { pt: "Realizada na Escola de Educação Física e Esporte da Universidade de São Paulo (EEFE-USP), em São Paulo (Brasil), esta edição representou um momento importante de consolidação da ALFID.", es: "Realizada en la Escuela de Educación Física y Deporte de la Universidad de São Paulo (EEFE-USP), en São Paulo (Brasil), esta edición representó un momento importante de consolidación de la ALFID." },
          p2: { pt: "O encontro reuniu cerca de 140 participantes de diferentes países, como Argentina, México, Espanha, Portugal, França, Costa Rica, Austrália e Colômbia, além de representantes de diversos estados brasileiros, ampliando o diálogo internacional na área.", es: "El encuentro reunió cerca de 140 participantes de diferentes países, como Argentina, México, España, Portugal, Francia, Costa Rica, Australia y Colombia, además de representantes de diversos estados brasileños, ampliando el diálogo internacional en el área." }
        },
        ed4: {
          title: { pt: "4ª edição — 2024", es: "4ª edición — 2024" },
          description: { pt: "A quarta edição aconteceu em Salamanca (Espanha), na Universidade de Salamanca, em parceria com associações e instituições da área, reafirmando o caráter internacional do congresso.", es: "La cuarta edición tuvo lugar en Salamanca (España), en la Universidad de Salamanca, en colaboración con asociaciones e instituciones del área, reafirmando el carácter internacional del congreso." }
        },
        ed5: {
          title: { pt: "5ª edição — 2026", es: "5ª edición — 2026" },
          description: { pt: "A quinta edição do congresso retorna ao Brasil com o propósito de reunir associações latino-americanas de filosofia do esporte e pessoas que pesquisam a área em diferentes momentos de suas trajetórias.", es: "La quinta edición del congreso regresa a Brasil con el propósito de reunir asociaciones latinoamericanas de filosofía del deporte y personas que investigan el área en diferentes momentos de sus trayectorias." },
          p2: { pt: "O encontro propõe um ambiente acolhedor e intelectualmente rigoroso, voltado ao fortalecimento da produção acadêmica e à ampliação do diálogo entre diferentes perspectivas.", es: "El encuentro propone un ambiente acogedor e intelectualmente riguroso, enfocado en el fortalecimiento de la producción académica y la ampliación del diálogo entre diferentes perspectivas." }
        }
      }
    }
  },
  speakers: {
    documentTitle: "Palestrantes — 5º Congresso da ALFiD",
    hero: {
      title: { pt: "palestrantes", es: "ponentes" }
    },
    list: [
      {
        name: "Prof. Dr. Alberto Reinaldo Reppold Filho",
        bio: {
          pt: "Professor Visitante Sênior da Universidade Federal de Ciências da Saúde de Porto Alegre e Professor Titular aposentado da ESEFID-UFRGS. Pesquisador nas áreas de políticas públicas do esporte, governança esportiva, gestão de projetos sociais, atividade física e ética na pesquisa, com ampla atuação nacional e internacional na formação de profissionais e pesquisadores.",
          es: "Profesor Visitante Senior de la Universidade Federal de Ciências da Saúde de Porto Alegre y Profesor Titular jubilado de la ESEFID-UFRGS. Investigador en las áreas de políticas públicas del deporte, gobernanza deportiva, gestión de proyectos sociales, actividad física y ética en la investigación, con amplia actuación nacional e internacional en la formación de profesionales e investigadores."
        },
        website: "http://lattes.cnpq.br/1473692434258851",
        image: "/images/palestrantes/alberto-filho.webp"
      },
      {
        name: "Prof. Alexandre Meyer Luz",
        bio: {
          pt: "Professor associado do Departamento de Filosofia da UFSC. Tem como área de pesquisa questões de Epistemologia Contemporânea e Filosofia do esporte, nesta última especialmente o tema lutas. Orientador de mestrado e Doutorado no PPGFilosofia da UFSC, do qual foi coordenador.",
          es: "Profesor asociado del Departamento de Filosofía de la UFSC. Su área de investigación son temas de Epistemología Contemporánea y Filosofía del deporte, en este último especialmente el tema de las luchas. Orientador de maestría y doctorado en el PPGFilosofia de la UFSC, del cual fue coordinador."
        },
        website: "http://lattes.cnpq.br/0299421437669387",
        image: "/images/palestrantes/alexandre-meyer.webp"
      },
      {
        name: "Profa. Dra. Ana Zimmermann",
        bio: {
          pt: "Professora Livre-Docente da EEFE-USP. Pesquisadora nas áreas de corporeidade, jogo e filosofia do esporte. É uma das coordenadoras do Grupo de Estudos PULA, pesquisadora associada ao Institut des Sciences du Sport-Santé de Paris e integrou o Comitê Consultivo Ad Hoc da UNESCO para Jogos e Esportes Tradicionais.",
          es: "Profesora Livre-Docente de la EEFE-USP. Investigadora en las áreas de corporeidad, juego y filosofía del deporte. Es una de las coordinadoras del Grupo de Estudios PULA, investigadora asociada al Institut des Sciences du Sport-Santé de Paris e integró el Comité Consultivo Ad Hoc de la UNESCO para Juegos y Deportes Tradicionales."
        },
        website: "http://lattes.cnpq.br/9176730729451504",
        image: "/images/palestrantes/ana-zimmermann.webp"
      },
      {
        name: "Profa. Dra. Carolina Fernandes da Silva",
        bio: {
          pt: "Professora do Departamento de Educação Física da UFSC. Líder do Sôma - Núcleo de Estudos em Cultura, Corpo e Movimento do CDS/UFSC e do Grupo Interdisciplinar de Estudos Olímpicos (GIEO). Pesquisa em Subjetividades, Corpo, Gênero, mídia e Formação.",
          es: "Profesora del Departamento de Educación Física de la UFSC. Líder de Sôma - Núcleo de Estudios en Cultura, Cuerpo y Movimiento del CDS/UFSC y del Grupo Interdisciplinario de Estudios Olímpicos (GIEO). Investigación en Subjetividades, Cuerpo, Género, Medios y Formación."
        },
        website: "http://lattes.cnpq.br/4505740998626100",
        image: "/images/palestrantes/carolina-silva.webp"
      },
      {
        name: "Prof. Dr. Cesar Torres",
        bio: {
          pt: "Professor no Department of Kinesiology, Sport Studies and Physical Education, The College of Brockport, EUA. Pesquisa em Filosofia e História do Esporte. Ex-presidente da Associação Internacional de Filosofia do Esporte.",
          es: "Profesor en el Departamento de Kinesiología, Estudios Deportivos y Educación Física, The College of Brockport, EE. UU. Investigación en Filosofía e Historia del Deporte. Ex presidente de la Asociación Internacional de Filosofía del Deporte."
        },
        website: "https://www.brockport.edu/live/profiles/12883-cesar-r-torres",
        image: "/images/palestrantes/cesar-torres.webp"
      },
      {
        name: "Prof. Dr. Francisco Javier López Frías",
        bio: {
          pt: "Professor no Departamento de Cinesiologia e Ciências da Saúde, Emma Eccles Jones College of Education and Human Services, EUA. Presidente da Associação Espanhola de Filosofia do Esporte e editor-chefe da revista Sport, Ethics and Philosophy.",
          es: "Profesor en el Departamento de Kinesiología y Ciencias de la Salud, Emma Eccles Jones College of Education and Human Services, EE. UU. Presidente de la Asociación Española de Filosofía del Deporte y editor en jefe de la revista Sport, Ethics and Philosophy."
        },
        website: "https://cehs.usu.edu/khs/directory/lopezfrias-franciscojavier",
        image: "/images/palestrantes/francisco-frías.webp"
      },
      {
        name: "Profa. Dra. Luz Elena Gallo Cadavid",
        bio: {
          pt: "Docente no Instituto de Educacion Física da Universidad de Antioquia, Colômbia. Integrante do grupo de Investigação “Estudios en educação corporal”. Pesquisa corporeidade, subjetividades e atividade física à luz da filosofia.",
          es: "Docente en el Instituto de Educación Física de la Universidad de Antioquia, Colombia. Integrante del grupo de investigación “Estudios en educación corporal”. Investiga corporeidad, subjetividades y actividad física a la luz de la filosofía."
        },
        website: "https://dialnet.unirioja.es/servlet/autor?codigo=1000154",
        image: "/images/palestrantes/luz-cadavid.webp"
      },
      {
        name: "Prof. Dr. Mafaldo Maza Dueñas",
        bio: {
          pt: "Professor na Universidad Autónoma Chapingo, México. Dedicado aos temas da filosofia do esporte, especialmente corporeidade, brincar, jogo, esporte, ética, virtudes, ser no mundo. Vice-presidente da Associação Latina de Filosofia do Esporte.",
          es: "Profesor en la Universidad Autónoma Chapingo, México. Dedicado a temas de filosofía del deporte, especialmente corporeidad, jugar, juego, deporte, ética, virtudes, ser en el mundo. Vicepresidente de la Asociación Latina de Filosofía del Deporte."
        },
        website: "https://orcid.org/0000-0002-0871-6500",
        image: "/images/palestrantes/mafaldo-duenas.webp"
      },
      {
        name: "Prof. Dr. Marcus Vinicius Simões de Campos",
        bio: {
          pt: "Professor do curso de Ciências do Esporte, UNICAMP. Senior researcher nos centros/grupos de pesquisa interdisciplinary Centre for Ethics, Regulation and Integrity in Sport, e Centre for Biomedical Ethics and Law. Presidente da Associação de Filosofia do Esporte em Língua Portuguesa. Pesquisa em filosofia e ética do esporte, bioética aplicada ao esporte, filosofia do Jogo e do lazer.",
          es: "Profesor del curso de Ciencias del Deporte, UNICAMP. Investigador senior en los centros/grupos de investigación interdisciplinary Centre for Ethics, Regulation and Integrity in Sport, y Centre for Biomedical Ethics and Law. Presidente de la Asociación de Filosofía del Deporte en Lengua Portuguesa. Investigación en filosofía y ética del deporte, bioética aplicada al deporte, filosofía del juego y del ocio."
        },
        website: "http://lattes.cnpq.br/0829010705250836",
        image: "/images/palestrantes/marcus-campos.webp"
      },
      {
        name: "Prof. Dr. Odilon José Roble",
        bio: {
          pt: "Diretor da Faculdade de Educação Física da Unicamp. Desenvolve pesquisas sobre Filosofia do Esporte, Filosofia do corpo e Filosofia da Dança. Participou da criação da Associação de Filosofia do Esporte em Língua Portuguesa.",
          es: "Director de la Facultad de Educación Física de la Unicamp. Desarrolla investigaciones sobre Filosofía del Deporte, Filosofía del cuerpo y Filosofía de la Danza. Participó en la creación de la Asociación de Filosofía del Deporte en Lengua Portuguesa."
        },
        website: "http://lattes.cnpq.br/1778627834013870",
        image: "/images/palestrantes/odair-roble.webp"
      },
      {
        name: "Prof. Dr. Ramiro Gonzalez Gainza",
        bio: {
          pt: "Docente da Universidade Nacional de Luján, Argentina, do Instituto Superior de Formação de Professores Joaquín V. González e do ISTLYR. Dedicado à filosofia do esporte e membro da Cooperativa Editorial Espíritu Guerrero.",
          es: "Docente de la Universidad Nacional de Luján, Argentina, del Instituto Superior de Formación de Profesores Joaquín V. González y del ISTLYR. Dedicado a la filosofía del deporte y miembro de la Cooperativa Editorial Espíritu Guerrero."
        },
        website: "https://www.linkedin.com/in/ramiro-gonz%C3%A1lez-ga%C3%ADnza-1761a116/",
        image: "/images/palestrantes/ramiro-gainza.webp"
      },
      {
        name: "Profa. Dra. Soraia Chung Saura",
        bio: {
          pt: "Professora Doutora da EEFE-USP. Pesquisadora nas áreas de filosofia do esporte, estudos do imaginário e jogos tradicionais. É uma das coordenadoras do Grupo de Estudos PULA e do Projeto Cinema e Corpo, além de ter integrado o Comitê Consultivo Ad Hoc da UNESCO para Jogos e Esportes Tradicionais.",
          es: "Profesora Doctora de la EEFE-USP. Investigadora en las áreas de filosofía del deporte, estudios del imaginario y juegos tradicionales. Es una de las coordinadoras del Grupo de Estudios PULA y del Projeto Cine y Cuerpo, además de haber integrado el Comité Consultivo Ad Hoc de la UNESCO para Juegos y Deportes Tradicionales."
        },
        website: "http://lattes.cnpq.br/3190982691700175",
        image: "/images/palestrantes/soraia-saura.webp"
      },
      {
        name: "Profa. Dra. Terezinha Petrucia da Nóbrega",
        bio: {
          pt: "Professora Titular da UFRN. Professora Convidada da Université de Montpellier, e Estágio de Pesquisa Sênior na École Normale Superieur de Paris. Uma das precursoras dos estudos da corporeidade sob a perspectiva da filosofia no Brasil, com pesquisa em: corpo, corporeidade, estética, fenomenologia, psicanálise.",
          es: "Profesora Titular de la UFRN. Profesora Invitada en la Université de Montpellier, y Estancia de Investigación Senior en la École Normale Superieur de Paris. Una de las precursoras de los estudios de corporeidad desde la perspectiva de la filosofía en Brasil, con investigación en: cuerpo, corporeidad, estética, fenomenología, psicoanálisis."
        },
        website: "http://lattes.cnpq.br/6743881635494941",
        image: "/images/palestrantes/terezinha-nóbrega.webp"
      },
      {
        name: "Palestrante Extra 1",
        bio: {
          pt: "Espaço reservado para biografia do palestrante adicional em português.",
          es: "Espacio reservado para biografía del ponente adicional en español."
        },
        website: "",
        image: "",
        hide: true
      },
      {
        name: "Palestrante Extra 2",
        bio: {
          pt: "Espaço reservado para biografia do palestrante adicional em português.",
          es: "Espacio reservado para biografía del ponente adicional en español."
        },
        website: "",
        image: "",
        hide: true
      },
      {
        name: "Palestrante Extra 3",
        bio: {
          pt: "Espaço reservado para biografia do palestrante adicional em português.",
          es: "Espacio reservado para biografía del ponente adicional en español."
        },
        website: "",
        image: "",
        hide: true
      }
    ]
  },
  photos: {
    documentTitle: "Fotos — ALFiD",
    hero: {
      title1: { pt: "Galeria de", es: "Galería de" },
      title2: { pt: "Fotos", es: "Fotos" }
    },
    events: {
      title1: { pt: "Congresso da ALFiD 2018 - São Paulo", es: "Congreso de la ALFiD 2018 - São Paulo" },
      title2: { pt: "Congresso da ALFiD 2024 - Salamanca", es: "Congreso de la ALFiD 2024 - Salamanca" },
      soon: { pt: "Fotos em breve...", es: "Fotos próximamente..." }
    }
  },
  app: {
    fallback: {
      title: { pt: "Em breve...", es: "Próximamente..." },
      description: { pt: "Esta página está em construção.", es: "Esta página está en construcción." }
    }
  }
};
