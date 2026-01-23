import llmproject from "../../images/project/llmproject.png";
import ec from "../../images/project/ec-mars.png";
import spahd from "../../images/project/spahd.png";
import voting from "../../images/project/voting.png";

export const projects = [
    {
        title: "ec-mars.com",
        description:
            "Plateforme SaaS intelligente qui révolutionne la gestion de cabinet grâce à l'IA : affectation automatique des tâches, prédiction des délais et analyse de performance en temps réel.",
        image: ec,
        links: [
            {
                title: "Site officiel",
                url: "https://ec-mars.com",
            },
        ],
        tags: ["Web", "Intelligence Artificielle", "Data", "SaaS", "Automatisation"],
    },
    {
        title: "Email Ticket Generation",
        description:
            "Système intelligent qui transforme automatiquement vos emails en tickets structurés grâce à l'IA. Analyse, classifie et organise les demandes pour optimiser votre workflow IT et service client.",
        image: llmproject,
        links: [
            {
                title: "GitHub",
                url: "https://github.com/RHPrincy/email-llm-ticketing",
            },
        ],
        tags: ["Web", "Automatisation", "Backend", "API"],
    },
    {
        title: "Modèle de simulation économique dynamique pour Madagascar",
        description:
            "Modèle prédictif avancé simulant l'évolution économique de Madagascar. Intègre dynamiques temporelles et facteurs multiples pour anticiper la croissance et évaluer l'impact des politiques économiques.",
        image: spahd,
        tags: ["Data Science", "Analyse de données", "Python", "Simulation", "Visualisation"],
    },
    {
        title: "Plateforme de vote numérique",
        description:
            "Vote électronique sécurisée et transparente. Gestion complète des scrutins avec garantie d'intégrité et confidentialité. Déployée avec succès pour l'élection présidentielle étudiante (FMSA) à l'Université d'Antananarivo.",
        image: voting,
        tags: ["Web", "Systèmes distribués", "Temps réel"],
    },
];
