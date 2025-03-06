// Contenu des pages
const pages = {
    accueil: `
        <div class="hero-section">
            <div class="hero-text">
                <h1 class="hero-title">ANALYSE DE COMMANDITAIRES</h1>
                <p class="hero-subtitle">Sélectionner un commanditaire pour visionner la fiche d'analyse.</p>
            </div>
            <div class="image-buttons-container">
                <img src="images/IMG 02.png" alt="Musée Océanographique" class="nav-image" data-page="musee">
                <img src="images/IMG 03.png" alt="National Geographic Wild" class="nav-image" data-page="natgeo">
                <img src="images/IMG 04.png" alt="Association Marine" class="nav-image" data-page="association">
            </div>
        </div>
    `,
    
    musee: `
        <div class="content-section">
            <div class="content-header">
                <img src="images/IMG 02.png" alt="Logo Musée Océanographique" class="content-logo">
                <h1>MUSÉE<br>OCÉANOGRAPHIQUE DE MONACO</h1>
            </div>
            
            <h2>Contexte global</h2>
            <p>La préservation des océans est un enjeu majeur du XXIe siècle, notamment face aux impacts du changement climatique, de la pollution et de la surexploitation des ressources marines. Le Musée Océanographique de Monaco joue un rôle clé dans la sensibilisation du grand public à ces problématiques à travers ses expositions et initiatives éducatives. Cependant, la représentation des milieux marins en milieu muséal pose un défi majeur : comment retranscrire fidèlement la complexité des écosystèmes aquatiques et rendre visible l'invisible.</p>
            
            <h2>Commanditaire – Présentation</h2>
            <p>Le Musée Océanographique de Monaco, fondé en 1910, est une institution de référence dédiée à la connaissance des océans et à leur préservation. Il propose une approche pédagogique alliant sciences, culture et art pour éveiller les consciences et promouvoir des comportements responsables envers le monde marin.</p>
            
            <h2>Objectif de communication</h2>
            <p>En réponse au contexte : Proposer une alternative immersive permettant d'observer et de comprendre les écosystèmes marins sans nécessiter de reconstitutions physiques en aquarium.<br>
            Susciter une fascination pour la biodiversité marine à travers une approche interactive et éducative.<br>
            Encourager une prise de conscience sur les menaces qui pèsent sur ces milieux et inciter à des actions concrètes en faveur de la préservation des océans.</p>
            
            <h2>Problème de communication</h2>
            <p>Difficulté d'accès : Les visiteurs n'ont pas toujours la possibilité de voir les espèces dans leur environnement naturel et d'en saisir pleinement l'importance écologique.<br>
            Difficulté de diffusion : Les informations scientifiques sur les écosystèmes sont souvent complexes et peuvent manquer d'attrait pour le grand public.<br>
            Baisse de sortie cible sur internet réseaux : Le musée doit renforcer sa présence numérique pour capter une audience jeune et engagée.</p>
            
            <h2>Ma cible</h2>
            <p>Jeunes adultes 16-25 ans intéressés par les sciences naturelles, l'océanographie et la conservation marine.<br>
            Étudiants et chercheurs en biologie marine cherchant des ressources pédagogiques complémentaires.<br>
            Visiteurs du musée souhaitant prolonger leur expérience avec des outils numériques immersifs.<br>
            Public scolaire et universitaire désireux d'utiliser des supports interactifs pour apprendre sur la biodiversité marine.</p>
            
            <h2>Mission</h2>
            <p>Ce projet vise à développer une expérience immersive disponible sur les sites du musée et ou durant la visite physique. L'objectif est d'offrir une exploration interactive des écosystèmes marins à travers<br>
            Une interface numérique permettant de visualiser les espèces et leurs habitats.<br>
            Une représentation dynamique des interactions entre les organismes et leur environnement.<br>
            Une mise en contexte des impacts environnementaux grâce à des visualisations de données accessibles et engageantes.</p>
        </div>
    `,
    
    natgeo: `
        <div class="content-section">
            <div class="content-header">
                <img src="images/IMG 03.png" alt="Logo National Geographic Wild" class="content-logo">
                <h1>NATIONAL<br>GEOGRAPHIC WILD</h1>
            </div>
            
            <h2>Contexte global</h2>
            <p>L'accélération des menaces environnementales et la perte de biodiversité nécessitent une sensibilisation massive du grand public. National Geographic Wild, en tant que média dédié à la nature et aux documentaires scientifiques, a un rôle essentiel dans la transmission de ces enjeux. Cependant, l'accès à l'information et la mobilisation du public restent des défis majeurs.</p>
            
            <h2>Commanditaire – Présentation</h2>
            <p>National Geographic Wild est une chaîne spécialisée dans la diffusion de documentaires animaliers et environnementaux. Elle met en avant la beauté du monde naturel tout en alertant sur les dangers qui le menacent. Son engagement éducatif et sa capacité à toucher une audience mondiale en font un acteur incontournable de la sensibilisation à l'environnement.</p>
            
            <h2>Objectif de communication</h2>
            <p>En réponse au contexte : Faciliter l'accès aux informations environnementales et renforcer l'impact des documentaires auprès du public.<br>
            Susciter une curiosité accrue pour la nature et l'envie de s'impliquer dans sa préservation.<br>
            Encourager un engagement concret en proposant des passerelles vers des initiatives et organisations de conservation.</p>
            
            <h2>Problème de communication</h2>
            <p>Difficulté d'accès : Le grand public manque parfois de repères pour approfondir les thématiques abordées dans les documentaires.<br>
            Difficulté d'engagement : Le spectateur est souvent passif devant le contenu et ne sait pas comment agir concrètement après le visionnage.<br>
            Fragmentation de l'information : Les contenus sont parfois perçus comme des éléments isolés, sans lien direct entre eux, limitant ainsi une compréhension systémique des enjeux environnementaux.</p>
            
            <h2>Ma cible</h2>
            <p>Spectateurs et abonnés 16-25 ans de National Geographic Wild, amateurs de documentaires animaliers et environnementaux.<br>
            Curieux et passionnés de nature souhaitant s'engager dans des actions concrètes de protection des écosystèmes.<br>
            Étudiants en écologie et biologie cherchant du contenu éducatif complémentaire.<br>
            Organisations de sensibilisation et de conservation désireuses d'utiliser une plateforme interactive pour mobiliser un public plus large.</p>
            
            <h2>Mission</h2>
            <p>Ma mission sera de créer un module interactif dédié aux expéditions scientifiques de National Geographic, permettant au public de suivre, revivre et interagir avec les missions sur le terrain. Ce projet vise à sensibiliser aux milieux aquatiques en disparition à travers une expérience immersive post-documentaire, intégrée directement sur le site web de National Geographic.<br>
            Grâce à une carte interactive des expéditions, un parcours immersif basé sur du contenu réel (vidéos, témoignages, visualisations dynamiques) et des mini-expériences interactives, ce module transformerait le spectateur passif en explorateur actif, tout en valorisant le travail des scientifiques.<br>
            ette initiative offrirait une passerelle entre les documentaires et l'espace numérique, engageant durablement le public dans la compréhension et la préservation des écosystèmes fragiles.</p>
        </div>
    `,
    
    association: `
        <div class="content-section">
            <div class="content-header">
                <img src="images/IMG 04.png" alt="Logo Association de Protection Marine" class="content-logo">
                <h1>ASSOCIATION<br>DE PROTECTION MARINE OCÉANOSCIENTIFIC</h1>
            </div>
            
            <h2>Contexte global</h2>
            <p>Les écosystèmes aquatiques de la Méditerranée subissent une dégradation rapide en raison de la pollution, du réchauffement climatique et de la surpêche. La diffusion des connaissances scientifiques est essentielle pour sensibiliser le grand public et favoriser des actions de préservation. Cependant, le manque d'outils interactifs et accessibles limite la compréhension et l'implication des citoyens dans ces enjeux environnementaux.</p>
            
            <h2>Commanditaire – Présentation</h2>
            <p>L'Association de Protection Marine OcéanoScientific de Nice est une organisation engagée dans la sauvegarde des écosystèmes marins méditerranéens. Elle œuvre à travers la recherche scientifique, des actions de terrain et des campagnes de sensibilisation auprès des citoyens et des institutions.</p>
            
            <h2>Objectif de communication</h2>
            <p>En réponse au contexte : Valoriser les données scientifiques pour sensibiliser à la fragilité des écosystèmes aquatiques et encourager leur préservation.<br>
            Susciter l'intérêt du grand public en rendant accessibles et compréhensibles les enjeux de conservation marine.<br>
            Encourager une participation active en facilitant l'engagement des citoyens et bénévoles dans des actions concrètes.</p>
            
            <h2>Problème de communication</h2>
            <p>Difficulté d'accès : Les connaissances scientifiques restent souvent confinées aux milieux académiques et spécialisés.<br>
            Difficulté de compréhension : L'abondance de données complexes rend leur vulgarisation difficile sans outils adaptés.<br>
            Difficulté de diffusion : Le manque de supports interactifs limite la portée des campagnes de sensibilisation.</p>
            
            <h2>Ma cible</h2>
            <p>Grand public 16-25 ans curieux des enjeux environnementaux mais ayant peu d'accès aux informations scientifiques.<br>
            Bénévoles et militants écologiques souhaitant des outils interactifs pour vulgariser les données de terrain.<br>
            Étudiants en sciences de l'environnement cherchant des moyens d'apprentissage immersifs et visuels.<br>
            Médias et organismes éducatifs intéressés par des supports innovants pour sensibiliser un large public.</p>
            
            <h2>Mission</h2>
            <p>Le projet consiste à concevoir un dispositif interactif permettant de mieux comprendre les écosystèmes marins méditerranéens à travers<br>
            Des micro-espaces numériques illustrant les interactions entre espèces et leur environnement.<br>
            Une visualisation des données scientifiques sous forme d'infographies et de simulations dynamiques.<br>
            Un système de sensibilisation ludique et immersif, favorisant une prise de conscience et une implication active du public dans la préservation des océans.</p>
        </div>
    `
};

// Fonction pour afficher le contenu avec transition
function showPage(pageName) {
    const contentElement = document.getElementById('content');
    
    // Transition de sortie
    contentElement.classList.add('fade');
    
    // Attendre la transition avant de changer le contenu
    setTimeout(() => {
        contentElement.innerHTML = pages[pageName] || pages.accueil;
        
        // Transition d'entrée
        setTimeout(() => {
            contentElement.classList.remove('fade');
        }, 50);
    }, 300);
    
    // Mettre à jour l'URL sans recharger la page
    window.history.pushState({page: pageName}, pageName, `#${pageName}`);
}

// Ajouter les écouteurs d'événements pour les liens de navigation
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer tous les liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    
    // Ajouter un gestionnaire d'événements à chaque lien
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageName = link.getAttribute('data-page');
            showPage(pageName);
        });
    });
    
    // Logo cliquable pour retourner à l'accueil
    document.getElementById('logo').addEventListener('click', (event) => {
        event.preventDefault();
        showPage('accueil');
    });
    
    // Gestionnaire d'événements pour les images navigables
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-image')) {
            const pageName = event.target.getAttribute('data-page');
            if (pageName) {
                showPage(pageName);
            }
        }
    });
    
    // Gérer la navigation avec les boutons retour/avant du navigateur
    window.addEventListener('popstate', (event) => {
        const pageName = event.state?.page || 'accueil';
        showPage(pageName);
    });
    
    // Vérifier si une page spécifique est demandée via le hash
    const hash = window.location.hash.substring(1);
    if (hash && pages[hash]) {
        showPage(hash);
    } else {
        showPage('accueil');
    }
});
