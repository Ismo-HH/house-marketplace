# House Marketplace

Find and list houses for sale or for rent. This is forked from [Brad Traversy](https://github.com/bradtraversy)'s [House Marketplace](https://github.com/bradtraversy/house-marketplace) a React / Firebase v9 project from the React Front To Back 2022 course. 

## 📌 Yleiskuvaus

**House Marketplace** on web-sovellus, jonka tarkoituksena on toimia opintojakson Pilvipalvelut web-kehityksessä  asuntojen selaaminen, lisääminen ja hallinta. Sovellus toimii markkinapaikkana, jossa käyttäjät voivat:

* selata myytäviä ja vuokrattavia asuntoja
* lisätä omia ilmoituksia
* muokata ja poistaa omia ilmoituksia
* ottaa yhteyttä ilmoituksen jättäjään
* hallita omaa käyttäjäprofiilia

Sovellus on toteutettu seuraavilla web-teknologioilla:

* **Frontend:** React
* **Backend / palvelut:** Firebase (Authentication, Firestore, Storage)

Firebase toimii palveluna (BaaS), joten erillistä omaa backend-palvelinta ei tarvitse rakentaa.

---

## 🧱 Ohjelman rakenne

Projektin kansiorakenne on tyypillisesti seuraavanlainen:

```
house-marketplace/
├── public/            # Staattiset tiedostot (index.html, kuvat jne.)
├── src/               # Varsinainen sovelluskoodi
│   ├── components/    # UI-komponentit (kortit, listat, navbar jne.)
│   ├── pages/         # Sivut (Home, Explore, Profile, Listing jne.)
│   ├── hooks/         # Mahdolliset custom hookit
│   ├── firebase.js    # Firebase-konfiguraatio
│   ├── App.js         # Sovelluksen pääkomponentti
│   └── index.js       # Sisäänkäyntipiste
├── package.json       # Riippuvuudet ja skriptit
├── package-lock.json
└── README.md
```

### 🔑 Keskeiset osat

#### 1. Frontend (React)

* Vastaa käyttöliittymästä
* Komponenttipohjainen rakenne
* React Router hoitaa sivunavigaation

#### 2. Firebase Authentication

* Käyttäjien rekisteröinti ja kirjautuminen
* Kirjautumisvaihtoehtoja ovat sähköposti + salasana tai Google login

#### 3. Firestore (tietokanta)

* Tallentaa:

* käyttäjätiedot
* asuntolistaukset

#### 4. Firebase Storage

* Kuvien tallennus (esim. asunnon kuvat)

#### 5. Lisäominaisuudet

* Kartta (esim. Leaflet tai Google Maps)
* Kuvakaruselli (Swiper)
* Ilmoitukset (Toastify)

---

## ⚙️ Asennus ja käynnistys omalla koneella

### 1. Vaatimukset

Varmista, että sinulla on asennettuna:

* Node.js (suositus: v24+)
* npm (tulee Node.js:n mukana)
* Git

---

### 2. Projektin kloonaus

Avaa komentokehote ja suorita:

```bash
git clone https://github.com/Ismo-HH/house-marketplace.git
cd house-marketplace
```

---

### 3. Riippuvuuksien asennus

Asenna projektin paketit:

```bash
npm install
```

Tämä asentaa kaikki `package.json`-tiedostossa määritellyt kirjastot.

---

### 4. Firebase-konfiguraatio

Luo Firebase-projekti:

1. Mene: https://console.firebase.google.com

2. Luo uusi projekti

3. Ota käyttöön:

   * Authentication
   * Firestore Database
   * Storage

4. Lisää web-app Firebaseen ja kopioi config

Luo projektiin tiedosto (esim. `src/firebase.js`) ja lisää:

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);

export default app;
```

---

### 5. (Valinnainen) .env-tiedosto

Suositeltavampaa olisi laittaa muuttujat ympäristömuuttujaksi:

```
REACT_APP_GEOCODE_API_KEY=YOUR_API_KEY
```

Tai:

```
NEXT_PUBLIC_GEOCODE_KEY=YOUR_API_KEY
```

Tämä liittyy kartta- ja geokoodausominaisuuksiin.

---

### 6. Sovelluksen käynnistys

Käynnistä kehityspalvelin:

```bash
npm start
```

Tai joissakin projekteissa:

```bash
npm run dev
```

---

### 7. Sovelluksen avaaminen selaimessa

Avaa selaimessa:

```
http://localhost:3000
```

Jos kaikki toimii oikein, näet sovelluksen etusivun.

---

## 🔄 Sovelluksen käyttö

Kun sovellus on käynnissä:

1. Rekisteröidy käyttäjäksi
2. Kirjaudu sisään
3. Lisää uusi asuntolistaus
4. Selaa muiden käyttäjien ilmoituksia
5. Muokkaa omaa profiilia

---

## 🚀 Yhteenveto

House Marketplace on moderni full-stack web-sovellus, jossa:

* React hoitaa käyttöliittymän
* Firebase hoitaa backendin
* Käyttäjät voivat lisätä ja selata asuntoilmoituksia

Sovellus on helppo ajaa paikallisesti, koska:

* ei vaadi omaa palvelinta
* Firebase hoitaa suurimman osan backend-logiikasta

---

## 📚 Lähteet

* GitHub House Marketplace (React + Firebase) ([Alkuperäinen House Marketplace][https://github.com/bradtraversy/house-marketplace])
