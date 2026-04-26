# 🚀 Suno Architect Deployment Guide
**Creator:** drfendiameen

This guide explains how to deploy the Suno Architect project to cPanel.

## 🛠️ Option 1: Manual Deployment (Fastest)
Use this method to deploy directly from your local machine.

1.  **Generate Build Files:**
    ```powershell
    npm run build
    ```
2.  **Run Deployment Script:**
    ```powershell
    python deploy.py
    ```

---

## 🤖 Option 2: Automated Deployment (GitHub Actions)
Use this method to deploy automatically whenever you push code to GitHub.

1.  **Set Up GitHub Secret:**
    *   Go to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions**.
    *   Click **New repository secret**.
    *   Name: `FTP_PASSWORD`
    *   Value: `Iris6102009@#`
2.  **Push to Main:**
    *   Simply run `git push origin main`.
    *   GitHub will automatically build and deploy your site.

---

## 📂 Project Configuration
*   **Target URL:** `https://kliacustoms.net/sunoarch`
*   **FTP Host:** `ftp.kliacustoms.net`
*   **FTP User:** `sunoarch@kliacustoms.net`
*   **Remote Directory:** `/` (maps to the `sunoarch` folder on server)

## ⚠️ Important Notes
*   **White Screen Fix:** If you see a white screen, ensure `base: '/sunoarch/'` is set in `vite.config.ts`.
*   **Build Folder:** The deployment script/action only uploads the `dist/` folder, which contains the optimized code for production.

---

## 📱 Option 3: Android APK Generation (Capacitor)
Use this method to turn the website into an Android application.

### 1. Sync Latest Code
Whenever you change the website code, run:
```powershell
npm run build
npx cap sync
```

### 2. Build Signed APK (in Android Studio)
1.  Open **Android Studio**.
2.  Open the `android` folder in this project.
3.  Go to **Build** > **Generate Signed Bundle / APK...**
4.  Select **APK** -> **Next**.
5.  Create/Use a keystore and select the **release** variant.
6.  The signed APK will be located at: `android/app/release/app-release.apk`

### 🎨 App Assets
*   **Icon:** `resources/icon-only.png`
*   **Splash:** `resources/splash.png`
*   (To regenerate assets run: `npx capacitor-assets generate --android`)

