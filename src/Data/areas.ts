export interface Area {
    slug: string
    titulo: string
    resumo: string
    descricao: string
    servicos: string[]
    imagem: string
}

export const areas: Area[] = [
    {
        slug: 'civil',
        titulo: 'Civil',
        resumo: 'Contratos, pareceres, cobranças e relações de consumo com linguagem clara e atuação sistematizada.',
        descricao: 'Os advogados da equipe Pontes & Britto possuem vasta experiência em Direito Civil e têm a preocupação de proporcionar uma melhor compreensão de assuntos e institutos complexos, através de linguagem simples e atuação altamente sistematizada. Com foco constante na melhor e mais atualizada informação, manejam com sabedoria os principais aspectos e desdobramentos doutrinários e jurisprudenciais.',
        servicos: [
            'Revisão e elaboração de contratos',
            'Pareceres',
            'Cobrança e ressarcimento',
            'Assessoria em negociação, mediação e arbitragem',
            'Atuação na esfera judicial e administrativa, abrangendo, inclusive, Juizados Especiais Cíveis e Procon',
            'Orientação de contratos que envolvam relação de consumo',
        ],
        imagem: '/images/civil.jpg',
    },
    {
        slug: 'trabalhista',
        titulo: 'Trabalhista',
        resumo: 'Proteção do patrimônio e da imagem institucional, com prevenção de passivos e defesa estratégica.',
        descricao: 'Nosso objetivo é a proteção do patrimônio e da imagem institucional, através do cumprimento à legislação de forma sistemática e consistente, com resposta imediata às novas exigências legais. Prezamos pela redução de custos com passivos judiciais trabalhistas, mitigando ainda os riscos de sanções administrativas com autos de infração, multas e indenizações.',
        servicos: [
            'Assessoria e consultoria',
            'Compliance trabalhista',
            'Mapeamento de risco',
            'Defesas trabalhistas',
            'Ações indenizatórias',
            'Reclamações trabalhistas',
        ],
        imagem: '/images/trabalhista.png',
    },
    {
        slug: 'digital',
        titulo: 'Digital',
        resumo: 'Contratos de tecnologia, proteção de dados e adequação à LGPD para negócios que inovam.',
        descricao: 'Acompanhar as inovações e seus aprimoramentos para a prestação dos nossos serviços e oferecer aos nossos clientes a solução jurídica mais eficaz na atividade empresarial que envolva estes assuntos é o pilar das nossas atividades.',
        servicos: [
            'Elaboração, análise e revisão jurídica de contratos relacionados a tecnologia e inovação',
            'Mapeamento do fluxo de dados sensíveis',
            'Implementação e adequação à LGPD',
        ],
        imagem: '/images/digital.png',
    },
    {
        slug: 'empresarial',
        titulo: 'Empresarial',
        resumo: 'Atuação preventiva que mitiga riscos e dá segurança jurídica à sua atividade econômica.',
        descricao: 'Sabemos da importância de uma atuação preventiva que visa a mitigação de riscos envolvendo uma atividade econômica organizada. Proporcionar a oportunidade de análise dos negócios, de forma que sejam pensadas soluções preventivas que evitem infortúnios legais, é o nosso objetivo.',
        servicos: [
            'Compliance e investigação interna',
            'Atos societários',
            'Regularização da empresa',
            'Análise e planejamento tributário',
            'Avaliação sobre atendimento dos direitos dos consumidores, como regras de comércio eletrônico, garantia e direito de arrependimento',
            'Análise do melhor modelo societário',
            'Apoio no cumprimento das obrigações trabalhistas',
            'Defesa da empresa em processos judiciais e administrativos em todas as instâncias (trabalhista, cível e tributária)',
        ],
        imagem: '/images/empresarial.png',
    },
    {
        slug: 'internacional',
        titulo: 'Internacional',
        resumo: 'Nacionalidade, vistos e homologações, com atuação direta em Portugal.',
        descricao: 'Especialidade do direito responsável por regular determinados conjuntos de normas através de relações externas estabelecidas em uma sociedade internacional. O nosso trabalho abrange atuação direta em Portugal, com o objetivo de auxiliar brasileiros e estrangeiros em serviços direcionados a este ramo.',
        servicos: [
            'Processos de nacionalidade portuguesa e italiana',
            'Homologação de sentença estrangeira',
            'Homologação de união estável',
            'Divórcios internacionais',
            'Vistos e autorização de residência em Portugal',
        ],
        imagem: '/images/internacional.png',
    },
]
