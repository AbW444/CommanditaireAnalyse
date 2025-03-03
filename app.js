// Importation de Page.js
import page from 'page';

// Fonction pour afficher le contenu dans la section principale
function render(content) {
    const contentDiv = document.getElementById('content');
    contentDiv.classList.remove('active'); // Désactive l'ancien contenu
    setTimeout(() => {
        contentDiv.innerHTML = content;
        contentDiv.classList.add('active'); // Active l'animation du nouveau contenu
    }, 200);
}

// Pages du site
const museePage = `
    <h1>Musée Océanographique de Monaco</h1>
    <h2>Contexte global</h2>
    <p>La préservation des océans est un enjeu majeur du XXIe siècle, notamment face aux impacts du changement climatique, de la pollution et de la surexploitation des ressources marines...</p>
    <h2>Commanditaire – Présentation</h2>
    <p>Le Musée Océanographique de Monaco, fondé en 1910, est une institution de référence dédiée à la connaissance des océans et à leur préservation...</p>
    <h2>Objectif de communication</h2>
    <ul>
        <li>Proposer une alternative immersive permettant d’observer et de comprendre les écosystèmes marins.</li>
        <li>Susciter une fascination pour la biodiversité marine.</li>
        <li>Encourager une prise de conscience sur les menaces pesant sur ces milieux.</li>
    </ul>
`;

const natGeoPage = `
    <h1>National Geographic Wild</h1>
    <h2>Contexte global</h2>
    <p>L’accélération des menaces environnementales et la perte de biodiversité nécessitent une sensibilisation massive du grand public...</p>
    <h2>Commanditaire – Présentation</h2>
    <p>National Geographic Wild est une chaîne spécialisée dans la diffusion de documentaires animaliers et environnementaux...</p>
    <h2>Objectif de communication</h2>
    <ul>
        <li>Faciliter l’accès aux informations environnementales.</li>
        <li>Encourager un engagement concret en proposant des passerelles vers des initiatives de conservation.</li>
    </ul>
`;

const associationPage = `
    <h1>Association de Protection Marine</h1>
    <h2>Contexte global</h2>
    <p>Les écosystèmes aquatiques de la Méditerranée subissent une dégradation rapide en raison de la pollution...</p>
    <h2>Commanditaire – Présentation</h2>
    <p>L’Association de Protection Marine OcéanoScientific de Nice est une organisation engagée dans la sauvegarde des écosystèmes marins méditerranéens...</p>
    <h2>Objectif de communication</h2>
    <ul>
        <li>Valoriser les données scientifiques pour sensibiliser à la fragilité des écosystèmes aquatiques.</li>
        <li>Encourager une participation active du public dans la préservation des océans.</li>
    </ul>
`;

// Définition des routes avec Page.js (mode hashbang pour éviter les erreurs 404)
page.base('/');
page({ hashbang: true });

page('/', () => render('<h1>Analyse de commanditaires</h1><p>Sélectionner un commanditaire.</p>'));
page('/musee', () => render(museePage));
page('/natgeo', () => render(natGeoPage));
page('/association', () => render(associationPage));
page();

// Structure HTML de base (à placer dans ton fichier index.html)
const layout = `
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
            text-align: left;
        }

        nav {
            background: black;
            padding: 15px;
            text-align: center;
        }

        nav a {
            color: white;
            font-weight: bold;
            text-decoration: none;
            margin: 0 15px;
            font-size: 18px;
            transition: color 0.3s;
        }

        nav a:hover {
            color: gray;
        }

        main {
            max-width: 1000px;
            margin: 50px auto;
            padding: 60px;
            border-radius: 10px;
            text-align: center;
            font-size: 22px;
        }
    </style>
    <nav>
        <a href="#/musee" onclick="navigate(event, '/musee')">Musée Océanographique</a>
        <a href="#/natgeo" onclick="navigate(event, '/natgeo')">National Geographic Wild</a>
        <a href="#/association" onclick="navigate(event, '/association')">Association Marine</a>
    </nav>
    <main id="content">
        <h1>Analyse de commanditaires</h1>
        <p>Sélectionner un commanditaire.</p>
    </main>
`;

document.body.innerHTML = layout;

// Fonction pour la navigation sans rechargement
function navigate(event, path) {
    event.preventDefault();
    page(path);
}
