# ÉcoRénov' - Site de Génération de Leads Rénovation Énergétique

Site Astro de génération de leads pour la rénovation énergétique avec simulateur interactif, blog SEO et pages d'experts.

## 🚀 Déploiement sur Vercel (sans terminal)

### Étape 1 : Créer un compte GitHub (si vous n'en avez pas)
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up"
3. Suivez les étapes de création de compte

### Étape 2 : Créer un nouveau repository
1. Connectez-vous à GitHub
2. Cliquez sur le "+" en haut à droite → "New repository"
3. Nom du repository : `ecorenov-leads`
4. Laissez "Public" coché
5. Cliquez sur "Create repository"

### Étape 3 : Téléverser les fichiers
1. Sur la page de votre nouveau repository, cliquez sur "uploading an existing file"
2. Glissez-déposez TOUS les fichiers et dossiers de cette archive
3. En bas de page, cliquez sur "Commit changes"

### Étape 4 : Connecter Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up" et choisissez "Continue with GitHub"
3. Autorisez Vercel à accéder à vos repositories
4. Cliquez sur "New Project"
5. Trouvez `ecorenov-leads` dans la liste et cliquez sur "Import"
6. Vercel détecte automatiquement qu'il s'agit d'un projet Astro
7. Cliquez sur "Deploy"

### Étape 5 : Votre site est en ligne ! 🎉
Après quelques minutes, Vercel vous fournit une URL du type :
`https://ecorenov-leads.vercel.app`

---

## ⚙️ Configuration

### Webhook Make.com
Pour recevoir les leads dans Make.com :
1. Créez un scénario Make.com avec un trigger "Webhook"
2. Copiez l'URL du webhook
3. Modifiez le fichier `src/components/Simulator.astro`
4. Remplacez `VOTRE_WEBHOOK_MAKE_URL` par votre URL

### Personnalisation des couleurs
Les couleurs sont définies dans `tailwind.config.mjs` :
- Bleu marine : `#1e293b` (navy-900)
- Vert émeraude : `#10b981` (emerald-500)

### Ajout d'articles de blog
1. Créez un fichier `.md` dans `src/content/blog/`
2. Suivez le format des articles existants
3. Redéployez (Vercel détecte automatiquement les changements)

### Génération de pages locales (pSEO)
Le fichier `src/data/data.json` contient les données pour générer des pages par ville.
Pour activer cette fonctionnalité, créez une page dynamique `src/pages/[city]/index.astro`.

---

## 📁 Structure du projet

```
ecorenov-leads/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Composants réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Simulator.astro    # ⭐ Simulateur principal
│   │   ├── StickyButton.astro
│   │   ├── TrustSection.astro
│   │   ├── FAQ.astro
│   │   ├── AuthorBox.astro
│   │   └── JsonLd.astro
│   ├── content/          # Content Collections
│   │   ├── blog/         # Articles de blog (.md)
│   │   ├── experts/      # Profils d'experts (.md)
│   │   └── comparisons/  # Comparatifs (.md)
│   ├── data/
│   │   └── data.json     # Données pour pSEO
│   ├── layouts/
│   │   └── Layout.astro  # Template principal
│   ├── pages/            # Pages du site
│   │   ├── index.astro
│   │   ├── simulateur.astro
│   │   ├── blog/
│   │   ├── experts/
│   │   └── comparatifs/
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 🔧 Développement local (optionnel)

Si vous souhaitez modifier le site localement :

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

---

## 📊 Fonctionnalités

### ✅ Simulateur interactif
- Curseurs pour surface logement et toiture
- Sélection du type d'énergie
- Calcul en temps réel des économies
- Formulaire de capture avec validation
- Consentement RGPD obligatoire
- Envoi vers webhook Make.com

### ✅ SEO optimisé
- Content Collections Astro
- Rich Snippets (JSON-LD)
- Meta tags Open Graph
- Sitemap automatique
- URLs propres

### ✅ E-E-A-T
- Profils d'experts détaillés
- Author Box sur chaque article
- Sources officielles citées
- Certifications mises en avant

### ✅ Conversion
- Bouton sticky flottant
- Blocs de réassurance
- FAQ interactive
- CTA stratégiquement placés

---

## 📝 Licence

Ce projet est fourni tel quel pour un usage personnel ou commercial.

---

## 🆘 Support

Pour toute question, créez une "Issue" sur le repository GitHub.
