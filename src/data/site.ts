export const site = {
  name: "Leo Gouveia",
  brandMark: "LAG",
  title: "Desenvolvedor Full Stack e Arquiteto de Software",
  description: "Pagina pessoal e profissional com visual pixel art moderno.",
  kicker: "CONSTRUINDO SOLUÇÕES DIGITAIS",
  role: "Profissional de Tecnologia, Produto e Criatividade Digital",
  intro:
    "Mais de 19 anos criando soluções para produtos, plataformas e experiências digitais.",
  stats: [
    { value: "19+", label: "anos de experiencia" },
    { value: "1º", label: "lugar no Hackathon Caixa" },
    { value: "DF", label: "Brasília • remoto" },
  ],
  about: {
    kicker: "Sobre",
    heading: "Perfil profissional",
    paragraphs: [
      "Sou desenvolvedor e arquiteto de software com mais de 19 anos de experiência na criação de soluções digitais para instituições financeiras, produtos internos e aplicações voltadas ao usuário final. Ao longo da carreira atuei em diferentes camadas do desenvolvimento, desde bancos de dados e integrações até interfaces web e mobile.",
      "Tenho experiência com Angular, React, Node.js, SQL, arquitetura de sistemas e liderança técnica. Gosto especialmente de transformar problemas complexos em soluções simples, escaláveis e fáceis de manter, sempre equilibrando qualidade técnica, experiência do usuário e objetivos de negócio.",
    ],
    skills: [
      "Angular",
      "React",
      "Node.js",
      "Arquitetura",
      "SQL",
      "Cloud",
      "Mobile",
      "Automação",
      "Liderança",
      "UX",
      "Produto",
      "Engenharia",
      "Inovação",
      "Colaboração",
      "Resolução de problemas",
    ],
  },
  experience: {
    kicker: "Carreira",
    heading: "Experiência",
    items: [
      {
        period: "2008 - atual",
        title: "Arquiteto e Desenvolvedor de Software",
        company: "Caixa Econômica Federal",
        description:
          "Atuação em arquitetura de software, desenvolvimento de aplicações corporativas, definição de padrões técnicos, integrações e modernização de sistemas. Participação em iniciativas estratégicas voltadas à transformação digital e melhoria da experiência dos usuários.",
      },
      {
        period: "2023",
        title: "Hackathon Caixa",
        company: "1º Lugar Nacional",
        description:
          "Desenvolvimento de solução inovadora em equipe multidisciplinar, conquistando o primeiro lugar entre os projetos participantes do programa de inovação da instituição.",
      },
      {
        period: "Projetos Paralelos",
        title: "Desenvolvedor Full Stack",
        company: "Projetos pessoais e open source",
        description:
          "Criação de aplicações web, ferramentas de automação, sistemas de monitoramento de preços, landing pages e experimentos envolvendo IA, UX e produtividade.",
      },
    ],
  },

  projects: {
    kicker: "Portfólio",
    heading: "Projetos selecionados",
    items: [
      {
        title: "Amazon Price Tracker",
        description:
          "Plataforma para monitoramento de preços da Amazon com histórico, alertas automáticos e painel web para acompanhamento de produtos.",
        href: "#",
        screenClass: "screen-one",
      },
      {
        title: "Simulador Financeiro",
        description:
          "Aplicação para simulação de financiamentos utilizando os sistemas PRICE e SAC, com foco em clareza visual e experiência do usuário.",
        href: "#",
        screenClass: "screen-two",
      },
      {
        title: "Portfólio Pessoal",
        description:
          "Site desenvolvido com foco em performance, acessibilidade e identidade visual inspirada em interfaces retrô e pixel art.",
        href: "#",
        screenClass: "screen-three",
      },
    ],
  },

  contact: {
    kicker: "Contato",
    heading: "Vamos conversar",
    intro:
      "Gosto de trocar ideias sobre tecnologia, arquitetura de software, desenvolvimento de produtos digitais e inovação. Se quiser conversar sobre projetos, oportunidades de colaboração ou simplesmente compartilhar experiências, ficarei feliz em responder.",
    email: "leonardo.gouveia@outlook.com",
    github: "https://github.com/leogouveia",
    githubLabel: "github.com/leogouveia",
    linkedin: "https://www.linkedin.com/in/leonardo-gouveia",
    linkedinLabel: "linkedin.com/in/leonardo-gouveia",
  },
  nav: [
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ],
} as const;
