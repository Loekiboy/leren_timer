# Leren Timer 🕐

Een prachtige timer extensie voor studygo.com, jojoschool.nl en quizlet.com. Deze browser extensie voegt een elegante, geanimeerde timer overlay toe aan je favoriete leersites met instelbare tijdsduur.

## ✨ Features

- ⏱️ **Instelbare timer** - Stel de duur in van 1 tot 60 minuten
- 🎛️ **Popup interface** - Eenvoudig de timer instellen via de extensie popup
- 🔗 **GitHub link** - Directe link naar de broncode
- 🎨 **Mooie animaties** - Vloeiende overgangen en visuele feedback
- 🎉 **Voltooiingsviering** - Confetti effect wanneer de timer afloopt
- 🔔 **Visuele waarschuwingen** - Duidelijke indicatie in de laatste minuut
- 📌 **Versleepbaar** - Plaats de timer waar je wilt
- 🔽 **Minimaliseerbaar** - Minimaliseer de timer naar een klein icoon in de hoek
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

1. **Installeer de extensie** (zie instructies hieronder)

2. **Stel de timer in:**
   - Klik op het Leren Timer icoon in je browser toolbar
   - Stel de gewenste duur in (1-60 minuten)
   - Kies een snelkoppeling (5, 8, 15, of 25 minuten) of voer een aangepaste waarde in
   - Klik op "Opslaan"

3. **Gebruik de timer op een ondersteunde website:**
   - Bezoek studygo.com, jojoschool.nl, of quizlet.com
   - De timer verschijnt automatisch in de rechterbovenhoek

4. **Bedieningsknoppen:**
   - ▶ **Start** - Begin de countdown
   - ⏸ **Pauze** - Pauzeer de timer
   - ↻ **Reset** - Zet de timer terug naar de ingestelde duur
   - × **Minimaliseren** - Maak de timer kleiner. Klik op de kleine tijdsweergave rechtsonder om weer te maximaliseren.

5. **Versleepbaar:** Klik en sleep de timer header om de positie aan te passen

6. **Voltooiing:** Wanneer de timer afloopt, zie je een prachtige confetti animatie! 🎊

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
├── popup.html           # Popup interface HTML
├── popup.css            # Popup styling
├── popup.js             # Popup logica
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

- Gebruik de popup om je favoriete tijdsduur in te stellen
- De timer onthoudt je instellingen voor de volgende keer
- Gebruik presets voor veelgebruikte tijden (Pomodoro: 25 min)
- De laatste minuut krijgt een rode waarschuwing
- De timer blijft zichtbaar terwijl je door de website navigeert
- Minimaliseer de timer om meer schermruimte te krijgen
- In geminimaliseerde modus kun je op de kleine tijdsweergave (rechtsonder) klikken om hem terug te brengen
- Klik op "Bekijk code op GitHub" in de popup voor de broncode

---

Veel succes met leren! 📚✨