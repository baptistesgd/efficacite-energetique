# RénovAction - Site Lead Gen Rénovation Énergétique

Site Astro de génération de leads avec simulateur interactif, blog SEO et pages d'experts E-E-A-T.

## 🚀 Déploiement sur Vercel (sans terminal)

### Étape 1 : Créer un repository GitHub
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "+" → "New repository"
3. Nom : `efficacite-energetique`
4. Public → Create repository

### Étape 2 : Téléverser les fichiers
1. Cliquez sur "uploading an existing file"
2. Glissez-déposez TOUS les fichiers de cette archive
3. Cliquez sur "Commit changes"

### Étape 3 : Connecter Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. "Sign Up" → "Continue with GitHub"
3. "New Project" → Importez `efficacite-energetique`
4. Cliquez sur "Deploy"

URL : `https://efficacite-energetique.vercel.app`

---

## ⚙️ Configuration du Webhook Make.com

1. Créez un scénario Make.com avec un trigger "Webhook"
2. Copiez l'URL du webhook
3. Modifiez `src/components/Simulator.astro` ligne 8
4. Remplacez `VOTRE_WEBHOOK_MAKE_URL` par votre URL

---

## ✅ Fonctionnalités

- **Simulateur interactif** : Sliders surface, consommation, toiture
- **Calcul dynamique JS** : Économies affichées en temps réel
- **Formulaire lead** : Prénom, Nom, Tel FR, CP, Email + consentement RGPD
- **Webhook** : Envoi JSON vers Make.com
- **Bouton sticky** : "Calculer mes aides" sur toutes les pages
- **SEO** : JSON-LD (Article, FAQ, Person), meta tags OG
- **E-E-A-T** : 2 experts avec profils crédibles et sources officielles

---

## 👥 Experts

1. **Aurélien Vaugirard** - Ingénieur INSA Lyon, ancien consultant ADEME
2. **Clémence Roche-Lafont** - Ingénieure Centrale Nantes, experte judiciaire

Sources citées : ADEME, CRE, Ministère Transition Écologique, Enerplan, RE2020

---

## 📁 Structure

```
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Simulator.astro    # Simulateur principal
│   │   ├── StickyButton.astro # Bouton flottant
│   │   └── ...
│   ├── content/
│   │   ├── blog/              # 2 articles 1000+ mots
│   │   ├── experts/           # 2 profils experts
│   │   └── comparisons/       # 1 comparatif PAC vs Granulés
│   └── pages/
├── package.json               # Inclut @tailwindcss/typography
├── tailwind.config.mjs        # Plugin typography activé
└── astro.config.mjs
```

---

## 🔧 Développement local

```bash
npm install
npm run dev
npm run build
```
