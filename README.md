# Murthwaite Gaming — TFT Advisor

---

## First Time: Build the Installer (10 minutes)

Do this once. It produces a `.exe` you can run on any PC.

**Step 1 — Open Command Prompt in this folder:**
- Open File Explorer, navigate to the `murthwaite-tft` folder
- Click the address bar, type `cmd`, press Enter

**Step 2 — Install build tools:**
```
npm install
```
Downloads Electron + electron-builder (~300MB). Takes 2-3 minutes.

**Step 3 — Build the installer:**
```
npm run build
```
Takes 1-2 minutes. When done you'll see:
```
dist/
└── Murthwaite TFT Advisor Setup 1.0.0.exe   ← this is your installer
```

**Step 4 — Run the installer:**
- Go into the `dist` folder
- Double-click `Murthwaite TFT Advisor Setup 1.0.0.exe`
- Choose install location, click Install
- App appears on your Desktop and in Start Menu

---

## Updating After a Patch

The installed app reads `data.js` from inside itself — so to update comp data you rebuild and reinstall.

**Quick process:**
1. Open `data.js` in Notepad, make your changes
2. Run `npm run build` again
3. Run the new installer — it updates the existing installation

Takes about 3 minutes total.

---

## File Structure
```
murthwaite-tft/          ← keep this folder
├── index.html           — App UI (don't edit)
├── data.js              — Comp/meta data (edit each patch)
├── main.js              — Electron config (don't edit)
├── package.json         — Build config (don't edit)
├── icon.ico             — App icon (optional, replace with your own)
└── dist/
    └── Murthwaite TFT Advisor Setup 1.0.0.exe  ← installer output
```

---

## Notes

- You need an internet connection for images (loaded from CommunityDragon)
- The `murthwaite-tft` source folder can stay on your PC for future rebuilds
- If you want to share the app with someone, just send them the `.exe` from `dist/`
