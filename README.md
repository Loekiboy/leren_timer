# Leren Timer 🕐

Een prachtige 8-minuten timer extensie voor studygo.com, jojoschool.nl en quizlet.com. Deze browser extensie voegt een elegante, geanimeerde timer overlay toe aan je favoriete leersites.

## ✨ Features

- ⏱️ **8-minuten countdown timer** - Perfect voor geconcentreerd leren
- 🎨 **Mooie animaties** - Vloeiende overgangen en visuele feedback
- 🎉 **Voltooiingsviering** - Confetti effect wanneer de timer afloopt
- 🔔 **Visuele waarschuwingen** - Duidelijke indicatie in de laatste minuut
- 📌 **Versleepbaar** - Plaats de timer waar je wilt
- 💾 **Pauzeer & Hervat** - Volledige controle over je timer
- 🎯 **Naadloze integratie** - Past perfect bij de websites

## 🚀 Installatie

### Chrome / Edge / Brave

1. Download of clone deze repository
2. Open Chrome en ga naar `chrome://extensions/`
3. Schakel "Ontwikkelaarsmodus" in (rechterbovenhoek)
4. Klik op "Uitgepakte extensie laden"
5. Selecteer de `leren_timer` map
6. De extensie is nu geïnstalleerd! 🎉

### Firefox

1. Download of clone deze repository
2. Open Firefox en ga naar `about:debugging#/runtime/this-firefox`
3. Klik op "Tijdelijke add-on laden"
4. Selecteer het `manifest.json` bestand uit de `leren_timer` map
5. De extensie is nu geïnstalleerd! 🎉

## 📖 Gebruik

1. Bezoek een van de ondersteunde websites:
   - studygo.com
   - jojoschool.nl
   - quizlet.com

2. De timer verschijnt automatisch in de rechterbovenhoek

3. **Bedieningsknoppen:**
   - ▶ **Start** - Begin de 8-minuten countdown
   - ⏸ **Pauze** - Pauzeer de timer
   - ↻ **Reset** - Zet de timer terug naar 8:00
   - × **Minimaliseren** - Maak de timer kleiner

4. **Versleepbaar:** Klik en sleep de timer header om de positie aan te passen

5. **Voltooiing:** Wanneer de timer afloopt, zie je een prachtige confetti animatie! 🎊

## 🎨 Design

De timer is ontworpen met moderne UI/UX principes:
- Gradient kleuren (#667eea → #764ba2)
- Gladde animaties en overgangen
- Responsive design
- Toegankelijk (keyboard navigatie, reduced motion support)
- Glasmorfisme effect

## 🛠️ Ontwikkeling

### Project Structuur

```
leren_timer/
├── manifest.json          # Extension configuratie
├── content.js            # Hoofd timer logica
├── timer.css            # Styling en animaties
├── icons/               # Extension iconen
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── generate-icons.js    # Icon generator script
└── README.md           # Deze file
```

### Icons Genereren

Als je de iconen opnieuw wilt genereren:

```bash
npm install
node generate-icons.js
```

## 🌐 Ondersteunde Websites

- ✅ studygo.com
- ✅ jojoschool.nl  
- ✅ quizlet.com

## 🔧 Technische Details

- **Manifest Version:** 3 (nieuwste standaard)
- **Permissions:** activeTab (minimale permissies)
- **Content Scripts:** Injectie op bovenstaande domeinen
- **Browser Compatibiliteit:** Chrome, Edge, Brave, Firefox

## 📝 Licentie

Dit project is open source en beschikbaar onder de MIT licentie.

## 🤝 Bijdragen

Bijdragen zijn welkom! Voel je vrij om issues te openen of pull requests in te dienen.

## 💡 Tips

- Gebruik de timer voor geconcentreerde leersessies
- De laatste minuut krijgt een rode waarschuwing
- De timer blijft zichtbaar terwijl je door de website navigeert
- Minimaliseer de timer om meer schermruimte te krijgen

---

Veel succes met leren! 📚✨