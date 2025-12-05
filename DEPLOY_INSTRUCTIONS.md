# Istruzioni per Deploy su Vercel tramite GitHub

## Passo 1: Creare Repository GitHub

1. Vai su https://github.com/new
2. Nome repository: `vanessa` (o altro nome a tua scelta)
3. Scegli se renderlo Pubblico o Privato
4. **NON** selezionare "Add a README file", "Add .gitignore" o "Choose a license"
5. Clicca "Create repository"

## Passo 2: Collegare Repository Locale a GitHub

Dopo aver creato il repository, GitHub ti mostrerà le istruzioni. Esegui questi comandi nel terminale:

```bash
git remote add origin https://github.com/TUO_USERNAME/vanessa.git
git branch -M main
git push -u origin main
```

**Nota:** Sostituisci `TUO_USERNAME` con il tuo username GitHub.

## Passo 3: Deploy su Vercel

### Opzione A: Tramite Dashboard Vercel (Consigliato)

1. Vai su https://vercel.com e accedi con il tuo account GitHub
2. Clicca "Add New Project"
3. Seleziona il repository `vanessa` dalla lista
4. Vercel rileverà automaticamente che è un progetto Next.js
5. Lascia le impostazioni predefinite (sono già corrette per Next.js)
6. Clicca "Deploy"
7. Vercel farà il build e il deploy automaticamente

### Opzione B: Tramite Vercel CLI

Se preferisci usare la CLI:

```bash
npm i -g vercel
vercel login
vercel
```

Seguire le istruzioni interattive.

## Configurazione Automatica

Vercel configurerà automaticamente:
- ✅ Framework: Next.js
- ✅ Build Command: `next build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

## Variabili d'Ambiente (se necessarie)

Se hai variabili d'ambiente da configurare:
1. Vai su Vercel Dashboard → Il tuo progetto → Settings → Environment Variables
2. Aggiungi le variabili necessarie

## Deploy Automatici

Dopo il setup iniziale:
- Ogni push su `main` triggererà un nuovo deploy automatico
- Ogni pull request creerà un preview deployment

## URL del Sito

Dopo il deploy, Vercel ti fornirà un URL tipo:
- `https://vanessa.vercel.app` (o un nome personalizzato)

