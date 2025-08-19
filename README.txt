# Wedding Table Lookup + Upload Card

This build adds a **Share Wedding Photos** card ABOVE the Gift Fund card.
It appears after a guest selects their name.

## Set your upload page link
In `script.js`, set:
    const UPLOAD_URL = "https://YOUR-PAGES-URL.example.com/";
(or keep `window.UPLOAD_URL` if you set it inline before loading `script.js`).

If `UPLOAD_URL` remains "YOUR_UPLOAD_SITE_URL_HERE", the button will still show but use "#".

## Deploy
1) Put these files into a GitHub repo.
2) Enable GitHub Pages (build from `main` / root).
3) Visit the page and test.
