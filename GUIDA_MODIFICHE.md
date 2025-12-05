# 📝 Guida alle Modifiche Manuali

Questa guida ti mostra **esattamente dove modificare** i contenuti del sito senza toccare la logica.

## 🎯 Principio Base

Ogni componente ha una sezione **"📝 CONTENUTI MODIFICABILI"** all'inizio del file.
**Modifica SOLO quella sezione** - tutto il resto è logica che non va toccata.

---

## 📂 File Organizzati

### ✅ Componenti già organizzati:

1. **`src/components/sections/Hero.tsx`** - Hero section homepage
2. **`src/components/sections/Services.tsx`** - Sezione servizi
3. **`src/components/layout/Navbar.tsx`** - Menu navigazione
4. **`src/components/layout/Footer.tsx`** - Footer

---

## 🔍 Come Trovare le Modifiche

### 1. Apri il file del componente
### 2. Cerca la sezione con questo commento:

```typescript
// ============================================
// 📝 CONTENUTI MODIFICABILI - Modifica qui
// ============================================
```

### 3. Modifica solo i valori in quella sezione
### 4. NON toccare nulla dopo il commento:

```typescript
// ============================================
// 🔧 LOGICA COMPONENTE - NON MODIFICARE
// ============================================
```

---

## 📋 Modifiche Rapide per File

### 🏠 Hero Section (`src/components/sections/Hero.tsx`)

**Cosa puoi modificare:**
- ✅ Immagine di sfondo
- ✅ Badge superiore (testo e icona)
- ✅ Titolo principale e parte accentata
- ✅ Sottotitolo (tutti i testi)
- ✅ Testi pulsanti CTA
- ✅ Link pulsanti
- ✅ Numero di telefono
- ✅ Indicatori di fiducia (testi e icone)

**Dove modificare:**
```typescript
const HERO_CONTENT = {
  backgroundImage: "/images/Hero-background.jpg", // ← Qui
  badge: { text: "..." }, // ← Qui
  title: { main: "...", accent: "..." }, // ← Qui
  // ... tutto il resto
};
```

---

### 🛠️ Servizi (`src/components/sections/Services.tsx`)

**Cosa puoi modificare:**
- ✅ Lista servizi (aggiungi/rimuovi/modifica)
- ✅ Descrizioni servizi
- ✅ Lista professionisti
- ✅ Testi della sezione (badge, titoli, descrizioni)

**Dove modificare:**
```typescript
// Servizi principali
const services = [
  {
    title: "Incidenti Stradali", // ← Modifica qui
    description: "...", // ← Modifica qui
    href: "/servizi/...", // ← Modifica qui
  },
  // Aggiungi nuovi servizi qui
];

// Testi sezione
const SECTION_CONTENT = {
  badge: "...", // ← Modifica qui
  title: { main: "...", accent: "..." }, // ← Modifica qui
  // ...
};
```

---

### 🧭 Navbar (`src/components/layout/Navbar.tsx`)

**Cosa puoi modificare:**
- ✅ Menu di navigazione (aggiungi/rimuovi voci)
- ✅ Numero di telefono
- ✅ Testi CTA
- ✅ Logo e nome brand

**Dove modificare:**
```typescript
// Menu navigazione
const navigation = [
  { name: "Home", href: "/" }, // ← Aggiungi/modifica voci qui
  // ...
];

// Informazioni contatto
const CONTACT_INFO = {
  phone: "+393459726530", // ← Modifica numero qui
  displayPhone: "+39 345 972 65 30", // ← Modifica visualizzazione qui
  // ...
};
```

---

### 📄 Footer (`src/components/layout/Footer.tsx`)

**Cosa puoi modificare:**
- ✅ Link servizi
- ✅ Link studio
- ✅ Link legali
- ✅ Contatti (telefono, email, orari, località)
- ✅ Link social media
- ✅ Testi brand e copyright

**Dove modificare:**
```typescript
// Link footer
const footerLinks = {
  servizi: [...], // ← Modifica link servizi qui
  studio: [...], // ← Modifica link studio qui
  legal: [...], // ← Modifica link legali qui
};

// Contatti
const CONTACT_INFO = {
  phone: "+393459726530", // ← Modifica qui
  email: "...", // ← Modifica qui
  hours: "...", // ← Modifica qui
  // ...
};

// Social
const socialLinks = [
  { name: "Facebook", href: "#" }, // ← Modifica link qui
  // ...
];
```

---

## 🎨 Modificare i Colori

I colori sono in **`src/app/globals.css`**:

```css
:root {
  --color-primary: #001F3F;        /* Blu Navy */
  --color-accent: #D4AF37;        /* Oro */
  --color-text: #1A1A1A;          /* Testo */
  /* ... */
}
```

**Modifica i valori** e i colori si aggiornano automaticamente in tutto il sito.

---

## ⚠️ Regole Importanti

### ✅ FAI:
- ✅ Modifica solo i valori nelle sezioni "CONTENUTI MODIFICABILI"
- ✅ Mantieni la struttura degli oggetti (chiavi, virgole, ecc.)
- ✅ Usa virgolette per i testi: `"testo"`
- ✅ Per i link, usa: `"/percorso"` o `"https://..."`

### ❌ NON FARE:
- ❌ Non modificare la logica (useState, useEffect, funzioni)
- ❌ Non modificare le classi CSS
- ❌ Non modificare le animazioni
- ❌ Non rimuovere virgole o parentesi graffe
- ❌ Non modificare i nomi delle variabili

---

## 🔄 Esempi Pratici

### Esempio 1: Cambiare il numero di telefono

**File:** `src/components/layout/Navbar.tsx`

**Trova:**
```typescript
const CONTACT_INFO = {
  phone: "+393459726530", // ← Modifica questo
  displayPhone: "+39 345 972 65 30", // ← E questo
};
```

**Modifica in:**
```typescript
const CONTACT_INFO = {
  phone: "+391234567890", // ← Nuovo numero senza spazi
  displayPhone: "+39 123 456 7890", // ← Nuovo numero visualizzato
};
```

---

### Esempio 2: Aggiungere un nuovo servizio

**File:** `src/components/sections/Services.tsx`

**Trova:**
```typescript
const services = [
  {
    icon: Car,
    title: "Incidenti Stradali",
    // ...
  },
  // Aggiungi qui ↓
];
```

**Aggiungi:**
```typescript
const services = [
  // ... servizi esistenti
  {
    icon: NewIcon, // ← Importa icona da lucide-react
    title: "Nuovo Servizio",
    description: "Descrizione del nuovo servizio",
    href: "/servizi/nuovo-servizio",
  },
];
```

---

### Esempio 3: Modificare un testo

**File:** `src/components/sections/Hero.tsx`

**Trova:**
```typescript
const HERO_CONTENT = {
  title: {
    main: "Il Giusto Risarcimento", // ← Modifica qui
    accent: "Che Meriti",
  },
};
```

**Modifica in:**
```typescript
const HERO_CONTENT = {
  title: {
    main: "Nuovo Titolo", // ← Nuovo testo
    accent: "Nuovo Accento",
  },
};
```

---

## 📍 Struttura File

Ogni file organizzato ha questa struttura:

```typescript
// 1. Commenti header
// 2. Import
// 3. 📝 CONTENUTI MODIFICABILI ← MODIFICA QUI
// 4. 🔧 LOGICA COMPONENTE ← NON TOCCARE
// 5. Export componente
```

---

## 🆘 Problemi Comuni

### Errore: "Unexpected token"
- **Causa:** Hai rimosso una virgola o parentesi
- **Soluzione:** Controlla la sintassi, ogni oggetto deve avere virgole tra le proprietà

### Errore: "Cannot find module"
- **Causa:** Hai modificato un import o percorso
- **Soluzione:** Non modificare gli import, solo i valori nelle sezioni modificabili

### Le modifiche non si vedono
- **Causa:** Il server di sviluppo non si è ricaricato
- **Soluzione:** Salva il file e aspetta qualche secondo, o ricarica la pagina

---

## 📚 File da Organizzare (Prossimi)

Se vuoi organizzare anche questi file, segui lo stesso pattern:

- `src/components/sections/AboutPreview.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/HowItWorks.tsx`
- `src/components/sections/Stats.tsx`
- `src/components/sections/CTASection.tsx`
- `src/components/sections/FinalCTA.tsx`

---

## 💡 Suggerimenti

1. **Usa Ctrl+F** per cercare rapidamente le sezioni "CONTENUTI MODIFICABILI"
2. **Salva spesso** per vedere le modifiche in tempo reale
3. **Testa sempre** dopo ogni modifica
4. **Fai backup** prima di modifiche importanti
5. **Leggi i commenti** - spiegano cosa fa ogni sezione

---

**🎉 Ora puoi modificare facilmente tutti i contenuti senza toccare la logica!**

