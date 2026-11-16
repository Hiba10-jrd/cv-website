# Antoine Michel — CV numérique

Un CV personnel en français réalisé pour un projet scolaire. Direction artistique éditoriale, tons ivoire et forêt, illustration informatique originale en CSS, interface responsive et animations discrètes. Le profil fourni est un **exemple**, pas une identité vérifiée. Les projets sont explicitement des démonstrations.

## Technologies et installation

HTML5, CSS3 et JavaScript natif (modules ES). Vite est la seule dépendance de développement. Aucune bibliothèque d’animation ou framework. Node.js 22 recommandé.

```bash
npm install
npm run dev
```

Ouvrir l’adresse locale indiquée par Vite. Pour préparer puis vérifier la production :

```bash
npm run build
npm run preview
```

Le dossier `dist/` contient le site statique déployable.

## Organisation

```text
index.html                 Structure sémantique, métadonnées et repli sans JS
public/favicon.svg         Identité visuelle
public/robots.txt           Instructions aux moteurs de recherche
src/data/portfolio.js      Toutes les informations personnelles
src/main.js                Intégration des données
src/js/navigation.js       Menu mobile et navigation active
src/js/animations.js       Révélations et progression au défilement
src/js/projects.js         Filtres et fenêtre de détails
src/js/utils.js            Échappement et validation des protocoles de liens
src/styles/                Base, sections et adaptations responsive
vite.config.js             Configuration du chemin de déploiement
```

## Personnalisation

Modifier `src/data/portfolio.js` pour le nom, le titre, le profil, la ville, les expériences, la formation, les compétences, les langues et les intérêts. Les contacts absents sont `null` : aucun faux lien n’est rendu. Remplacer les valeurs de `contact` par une adresse email, un téléphone et des URL HTTPS valides. Le titre de l’onglet est mis à jour depuis les données ; pour le référencement sans JavaScript, actualiser aussi les métadonnées et le repli `<noscript>` dans `index.html`.

Pour ajouter une formation ou une expérience, ajouter un objet dans le tableau correspondant. Pour ajouter un projet, reprendre un objet de `projects`, fournir un `id` unique, une catégorie et des textes réels. `github` et `live` peuvent rester `null`. Les liens ne sont affichés que pour des URL HTTPS. Les catégories existantes sont `support`, `reseau` et `maintenance` ; ajouter un bouton de filtre dans `index.html` pour une nouvelle catégorie. Les compteurs et les mentions de démonstration sont éditoriaux : les adapter à vos vrais projets dans `index.html` et `src/js/projects.js`.

### Photo et images

L’illustration actuelle est un visuel abstrait en CSS, clairement indiqué « sans photo ». Aucun portrait fictif n’est utilisé. Pour la remplacer, placer votre photo optimisée (WebP ou AVIF) dans `public/images/`, puis remplacer le contenu de `.hero-art` dans `index.html` par une image avec un texte alternatif, des dimensions explicites et `object-fit: cover`. Ne pas charger paresseusement la photo principale. Pour les futurs visuels de projets, ajouter un champ image aux données et utiliser des images dimensionnées et `loading="lazy"` dans le rendu des cartes.

## GitHub Pages

Aucun dépôt ni déploiement n’est créé automatiquement. Après avoir choisi votre dépôt :

```bash
git init
git add .
git commit -m "Création du CV numérique"
git branch -M main
git remote add origin <URL_DU_DEPOT>
git push -u origin main
```

Pour un dépôt projet, définir `VITE_BASE_PATH` sur `/<NOM_DU_DEPOT>/` avant le build. En PowerShell :

```powershell
$env:VITE_BASE_PATH = '/<NOM_DU_DEPOT>/'
npm run build
```

Par défaut, `base: './'` produit des liens relatifs également adaptés à un sous-dossier. Pour publier via GitHub Actions, ouvrir **Settings → Pages → Source → GitHub Actions**, puis créer un workflow avec `actions/checkout@v4`, `actions/setup-node@v4` (Node 22 et cache npm), `npm ci`, `npm run build`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3` (`path: dist`) et un job `actions/deploy-pages@v4`. Donner au workflow les permissions `contents: read`, `pages: write`, `id-token: write`, et définir l’environnement de déploiement `github-pages`. Configurer `VITE_BASE_PATH` dans l’environnement du build si nécessaire.

Une fois l’URL finale connue, ajouter les métadonnées canonical et `og:url`, ainsi qu’un sitemap utilisant cette vraie URL.

## Accessibilité et interactions

Structure sémantique, lien d’évitement, focus visible, filtres avec état annoncé, menu avec `aria-expanded`, détails de compétences natifs et fenêtre modale native avec fermeture Échap et retour du focus. Les effets tiennent compte de `prefers-reduced-motion`. Le défilement reste natif. Les révélations ne masquent jamais le contenu en attente de JavaScript. Un CV synthétique reste visible sans JavaScript.

Le menu mobile se ferme après une sélection, en cliquant à l’extérieur ou avec Échap. Les projets de démonstration ouvrent des détails et n’affichent aucun faux lien. Le bouton de retour en haut utilise une ancre native.

## Limites connues

Les données personnelles, niveaux de langues, outils précis et projets réels restent à renseigner. Pas de backend, formulaire d’envoi ou suivi analytique. Les polices Google nécessitent une connexion ; des polices système prennent le relais. Les illustrations sont en CSS, sans images distantes. Le repli sans JavaScript est une version synthétique à maintenir lors d’un changement d’identité. Aucun score Lighthouse ou conformité WCAG complète n’est revendiqué sans audit.
