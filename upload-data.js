import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0lbFFhTjr05ETGDRNSi8bQGDA2lOxdcg",
  authDomain: "progetto-seme.firebaseapp.com",
  databaseURL: "https://progetto-seme-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "progetto-seme",
  storageBucket: "progetto-seme.firebasestorage.app",
  messagingSenderId: "111990248618",
  appId: "1:111990248618:web:605c37a8cc7232ba76ecd3",
  measurementId: "G-15K5E9J7CX"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const classesData = [
  { id: "4AX", name: "4AX" },
  { id: "4BX", name: "4BX" },
  { id: "4A", name: "4A" },
  { id: "4C", name: "4C" },
  { id: "4FSA", name: "4FSA" },
  { id: "4ASA", name: "4ASA" }
];

const studentsData = [
  [
    { id: "4jOXM7QPalcbuN9VqRCM", name: "Chiaro Carlo", school: "Scuola del Registro", class: "4AX", className: "4AX", email: "chiaro.carlo@example.com", password: "123456" },
    { id: "JIIennZ00ix6KzSaiUNC", name: "Cianciulli Francesco", school: "Scuola del Registro", class: "4AX", className: "4AX", email: "cianciulli.francesco@example.com", password: "123456" },
    { id: "E7TovQzy3gPv0lY4ZPMJ", name: "Ciniglio Raffaele", class: "4AX", school: "Scuola del Registro", className: "4AX", email: "ciniglio.raffaele@example.com", password: "123456" },
    { id: "sENYYtEu9qwLHLBiXIRv", class: "4AX", school: "Scuola del Registro", name: "Coccia Antonio Pio", className: "4AX", email: "coccia.antoniopio@example.com", password: "123456" },
    { id: "9zbmKye1JZ1ZRma5HOnC", name: "D'Alterio Francesco Pio", class: "4AX", school: "Scuola del Registro", className: "4AX", email: "dalterio.francescopio@example.com", password: "123456" },
    { id: "P7KsMAqnph9bz6J1FA2A", name: "D'Oriano Mattia", school: "Scuola del Registro", class: "4AX", className: "4AX", email: "doriano.mattia@example.com", password: "123456" },
    { id: "KCIFhzaLZmrnKMqNC3xp", school: "Scuola del Registro", class: "4AX", name: "Daniele Francesco Pio", className: "4AX", email: "daniele.francescopio@example.com", password: "123456" },
    { id: "gaOJ1qkgPZEHB3lY4Pma", class: "4AX", name: "De Falco Gennaro", school: "Scuola del Registro", className: "4AX", email: "defalco.gennaro@example.com", password: "123456" },
    { id: "U1FCFH2iWV12cycI3Ui5", school: "Scuola del Registro", class: "4AX", name: "De Rosa Luca", className: "4AX", email: "derosa.luca@example.com", password: "123456" },
    { id: "sPURIrmFnDkK1kcWmlpz", class: "4AX", school: "Scuola del Registro", name: "De Vivo Carlo", className: "4AX", email: "devivo.carlo@example.com", password: "123456" },
    { id: "YaXzx9PXSOXGyB5deWS8", name: "Di Costanzo Nicola", class: "4AX", school: "Scuola del Registro", className: "4AX", email: "dicostanzo.nicola@example.com", password: "123456" },
    { id: "9WvC7LTHSlUtp6kB3R5b", class: "4AX", school: "Scuola del Registro", name: "Gallo Antonio Pio", className: "4AX", email: "gallo.antoniopio@example.com", password: "123456" },
    { id: "x2kk2Q8w6nP6zdCh5coh", school: "Scuola del Registro", name: "Licciardi Giovanni", class: "4AX", className: "4AX", email: "licciardi.giovanni@example.com", password: "123456" },
    { id: "dfOGGkZrdvaOhbARbA6g", class: "4AX", school: "Scuola del Registro", name: "Lucignano Alessandro", className: "4AX", email: "lucignano.alessandro@example.com", password: "123456" },
    { id: "kggnBMNNdCgGYOZcbXER", name: "Margiore Carlo", class: "4AX", school: "Scuola del Registro", className: "4AX", email: "margiore.carlo@example.com", password: "123456" },
    { id: "ybKl98vdWsvtnsMHtSKv", school: "Scuola del Registro", name: "Oterbo Danilo", class: "4AX", className: "4AX", email: "oterbo.danilo@example.com", password: "123456" },
    { id: "Scb05w925mwhXBx7tMOW", school: "Scuola del Registro", name: "Scotti Covella Antonio", class: "4AX", className: "4AX", email: "scotticovella.antonio@example.com", password: "123456" }
  ],
  [
    { id: "4woM2FeFgIa23Q1VBPXS", class: "4BX", school: "Scuola del Registro", name: "Carrino Simone", className: "4BX", email: "carrino.simone@example.com", password: "123456" },
    { id: "MeeiY81VuW0r721SO99O", class: "4BX", name: "Coppola Christian", school: "Scuola del Registro", className: "4BX", email: "coppola.christian@example.com", password: "123456" },
    { id: "s5n6ShEiGBKJICoOJ1K8", class: "4BX", name: "De Falco Giovanni", school: "Scuola del Registro", className: "4BX", email: "defalco.giovanni@example.com", password: "123456" },
    { id: "7v2X52cWnexdJVG7q8P0", name: "Di Lauro Nicola", class: "4BX", school: "Scuola del Registro", className: "4BX", email: "dilauro.nicola@example.com", password: "123456" },
    { id: "dhZyAzGF5llyn4dejeX7", name: "Di Marino Antonio", school: "Scuola del Registro", class: "4BX", className: "4BX", email: "dimarino.antonio@example.com", password: "123456" },
    { id: "lO33NuLhMgABP91Uj8dt", class: "4BX", school: "Scuola del Registro", name: "Di Napoli Giuseppe", className: "4BX", email: "dinapoli.giuseppe@example.com", password: "123456" },
    { id: "mRGyjqzdvIF9TicSikb2", school: "Scuola del Registro", class: "4BX", name: "Giordano Antonino", className: "4BX", email: "giordano.antonino@example.com", password: "123456" },
    { id: "r66BEqtt1eJp2aOh58NT", class: "4BX", name: "Giuffreda Raffaele", school: "Scuola del Registro", className: "4BX", email: "giuffreda.raffaele@example.com", password: "123456" },
    { id: "Bp1fnDroszCZOjF5lHUw", name: "Marchetti Luigi", school: "Scuola del Registro", class: "4BX", className: "4BX", email: "marchetti.luigi@example.com", password: "123456" },
    { id: "JL56FCCohQm98ANEnIVV", class: "4BX", school: "Scuola del Registro", name: "Napolitano Antonio", className: "4BX", email: "napolitano.antonio@example.com", password: "123456" },
    { id: "ImFjHRYTx1te92dEmXu6", school: "Scuola del Registro", class: "4BX", name: "Pagliaro Marco", className: "4BX", email: "pagliaro.marco@example.com", password: "123456" },
    { id: "sShzOfErTT20UpCtfsUC", class: "4BX", name: "Palmentieri Michele", school: "Scuola del Registro", className: "4BX", email: "palmentieri.michele@example.com", password: "123456" },
    { id: "wyK0uJpm5OPeGKS9MiVH", class: "4BX", name: "Perna Matteo", school: "Scuola del Registro", className: "4BX", email: "perna.matteo@example.com", password: "123456" },
    { id: "1XaGz12F4u3rbOd7J2Ci", name: "Pirillo Emanuele", school: "Scuola del Registro", class: "4BX", className: "4BX", email: "pirillo.emanuele@example.com", password: "123456" },
    { id: "nI78mPpy3F2LPtcwVojK", class: "4BX", name: "Quaranta Francesco", school: "Scuola del Registro", className: "4BX", email: "quaranta.francesco@example.com", password: "123456" },
    { id: "6eIzXzfdKSzU3ftbzw0i", name: "Simeoli Gennaro", school: "Scuola del Registro", class: "4BX", className: "4BX", email: "simeoli.gennaro@example.com", password: "123456" }
  ],
  [
    { id: "8jduUfkZVCJeTNplLGlH", school: "Scuola del Registro", class: "4A", name: "Andreew Bogdan", className: "4A", email: "andreew.bogdan@example.com", password: "123456" },
    { id: "GTIYxxs6oxu8fAdXQBt7", school: "Scuola del Registro", class: "4A", name: "Bellucci Manuel", className: "4A", email: "bellucci.manuel@example.com", password: "123456" },
    { id: "oevaBnTRRzHAZKPSE4uL", name: "Capuano Fabiana", school: "Scuola del Registro", class: "4A", className: "4A", email: "capuano.fabiana@example.com", password: "123456" },
    { id: "35ARhjkEesPhTuEwsFAM", class: "4A", name: "Caputo Francesco", school: "Scuola del Registro", className: "4A", email: "caputo.francesco@example.com", password: "123456" },
    { id: "CWvmIio9uIoLEH1YB1n8", class: "4A", school: "Scuola del Registro", name: "Catavere Simone", className: "4A", email: "catavere.simone@example.com", password: "123456" },
    { id: "n7fNFwElN58CXfREl3Vq", class: "4A", school: "Scuola del Registro", name: "Corsaro Samuel", className: "4A", email: "corsaro.samuel@example.com", password: "123456" },
    { id: "ksfCMho6X5NsZ5igcRjO", name: "Costagliola Giuseppe", class: "4A", school: "Scuola del Registro", className: "4A", email: "costagliola.giuseppe@example.com", password: "123456" },
    { id: "oZUsiDjb1Vhf5z2DQuaL", class: "4A", school: "Scuola del Registro", name: "Costagliola Simon", className: "4A", email: "costagliola.simon@example.com", password: "123456" },
    { id: "vRU6p4dgBz6INLxyY6tB", school: "Scuola del Registro", name: "Cribello Massimo", class: "4A", className: "4A", email: "cribello.massimo@example.com", password: "123456" },
    { id: "BJiFH3ci5kwgHrU88h7x", name: "Esposito Mattia", class: "4A", school: "Scuola del Registro", className: "4A", email: "esposito.mattia@example.com", password: "123456" },
    { id: "pSUM76RGG8OzjSNW98D2", name: "Kravchenko Dmytro", class: "4A", school: "Scuola del Registro", className: "4A", email: "kravchenko.dmytro@example.com", password: "123456" },
    { id: "TQXry1tyQ1MKkMD0IqFz", name: "Leone Bruno", school: "Scuola del Registro", class: "4A", className: "4A", email: "leone.bruno@example.com", password: "123456" },
    { id: "NSmHIqPv6RcUflqByTLH", name: "Liccardo Giuseppe", class: "4A", school: "Scuola del Registro", className: "4A", email: "liccardo.giuseppe@example.com", password: "123456" },
    { id: "7Iwghu9WQ9tDRQLrYDH5", name: "Lucci Josef Karol", class: "4A", school: "Scuola del Registro", className: "4A", email: "lucci.josefkarol@example.com", password: "123456" },
    { id: "fChIWakFTatxMZ8l8GUY", name: "Mangiapia Fabiana", class: "4A", school: "Scuola del Registro", className: "4A", email: "mangiapia.fabiana@example.com", password: "123456" },
    { id: "Czm4z4lkTZB8W88sipBy", school: "Scuola del Registro", name: "Marigliano Lorenzo", class: "4A", className: "4A", email: "marigliano.lorenzo@example.com", password: "123456" },
    { id: "LQ7Wb4oM7p1zcWDUrHTt", class: "4A", name: "Novissimo Giuseppe", school: "Scuola del Registro", className: "4A", email: "novissimo.giuseppe@example.com", password: "123456" },
    { id: "JB4m3Fn264904ZiaDaX4", school: "Scuola del Registro", name: "Orlando Tommaso", class: "4A", className: "4A", email: "orlando.tommaso@example.com", password: "123456" },
    { id: "zZ6SdMkgmhvpzqrRk7xG", name: "Parola Andrea", school: "Scuola del Registro", class: "4A", className: "4A", email: "parola.andrea@example.com", password: "123456" },
    { id: "KLvCV16u32L2h2MYK0kS", class: "4A", name: "Pietrangeli Jacopo", school: "Scuola del Registro", className: "4A", email: "pietrangeli.jacopo@example.com", password: "123456" },
    { id: "loCg6fGZrZQFYyTgjw2w", name: "Pisano Samuele", class: "4A", school: "Scuola del Registro", className: "4A", email: "pisano.samuele@example.com", password: "123456" },
    { id: "WMEi80UsMK9nUI2ekgT7", school: "Scuola del Registro", name: "Raia Antonio", class: "4A", className: "4A", email: "raia.antonio@example.com", password: "123456" },
    { id: "cY5TGAZGFrHnBqUaLiX5", class: "4A", school: "Scuola del Registro", name: "Scamardella Samuele", className: "4A", email: "scamardella.samuele@example.com", password: "123456" }
  ],
  [
    { id: "6vAj0re33ncIPHoNOmbI", class: "4C", school: "Scuola del Registro", name: "Avino Thomas Pio", className: "4C", email: "avino.thomaspio@example.com", password: "123456" },
    { id: "08YigqbiHnVCasS01khF", school: "Scuola del Registro", name: "Basile Manuel", class: "4C", className: "4C", email: "basile.manuel@example.com", password: "123456" },
    { id: "z6v25PlOnRSQoei29v2i", school: "Scuola del Registro", name: "Broscritto Francesco", class: "4C", className: "4C", email: "broscritto.francesco@example.com", password: "123456" },
    { id: "5RjhOjXqx0zRMj67N1UZ", school: "Scuola del Registro", name: "Cetrangolo Cristian", class: "4C", className: "4C", email: "cetrangolo.cristian@example.com", password: "123456" },
    { id: "u6w7lPbBWoXofiIsrVbV", name: "Costagliola Matteo", school: "Scuola del Registro", class: "4C", className: "4C", email: "costagliola.matteo@example.com", password: "123456" },
    { id: "pCPW8oW7TtIOB0zc4DNo", class: "4C", name: "Cotumaccio Antonio", school: "Scuola del Registro", className: "4C", email: "cotumaccio.antonio@example.com", password: "123456" },
    { id: "cjANQQMNcAtLFSMC5c0v", class: "4C", name: "Dell'Annunziata Mattia", school: "Scuola del Registro", className: "4C", email: "dellannunziata.mattia@example.com", password: "123456" },
    { id: "tfbLGPpwzQ8BEDnHFKln", class: "4C", name: "Di Falco Luigi", school: "Scuola del Registro", className: "4C", email: "difalco.luigi@example.com", password: "123456" },
    { id: "MQKXAfz5v1OUDzkUtwwe", school: "Scuola del Registro", name: "Esposito Fabio Massimiliano", class: "4C", className: "4C", email: "esposito.fabiomassimiliano@example.com", password: "123456" },
    { id: "lYuSA7aq2rHNG2zcheMT", school: "Scuola del Registro", name: "Giancola Mattia", className: "4C", email: "giancola.mattia@example.com", password: "123456" },
    { id: "JlBJEPLgp0XpgYd0iHyb", name: "Grieco Massimo Domenico", class: "4C", school: "Scuola del Registro", className: "4C", email: "grieco.massimodomenico@example.com", password: "123456" },
    { id: "xhs64lD9HHz2xlfLfWVH", class: "4C", name: "Gritto Salvatore Pio", school: "Scuola del Registro", className: "4C", email: "gritto.salvatorepio@example.com", password: "123456" },
    { id: "xqorLb14wtBhhKDRGuZJ", name: "Quinto Christian", class: "4C", school: "Scuola del Registro", className: "4C", email: "quinto.christian@example.com", password: "123456" },
    { id: "n7SBEv3idnQpPmePfuug", school: "Scuola del Registro", name: "Schiraldi Francesco", className: "4C", email: "schiraldi.francesco@example.com", password: "123456" },
    { id: "SyspwRjhViT1KHPIimxU", name: "Tortora Michele", school: "Scuola del Registro", class: "4C", className: "4C", email: "tortora.michele@example.com", password: "123456" },
    { id: "tmAjI2kJPQrrD8qagudH", name: "Verola Salvatore", school: "Scuola del Registro", class: "4C", className: "4C", email: "verola.salvatore@example.com", password: "123456" },
    { id: "AyaeSe18U7GqXDdSOVMk", class: "4C", school: "Scuola del Registro", name: "Volpe Christian", className: "4C", email: "volpe.christian@example.com", password: "123456" },
    { id: "ucOjg0qq1706MyJP9V4u", class: "4C", name: "Volpe Gabriel", school: "Scuola del Registro", className: "4C", email: "volpe.gabriel@example.com", password: "123456" }
  ],
  [
    { id: "wDd3RqsOTglUV6a62YtB", school: "Scuola del Registro", class: "4FSA", name: "Aracri Fabiola", className: "4FSA", email: "aracri.fabiola@example.com", password: "123456" },
    { id: "DkRRxfT2mDEN2GMX1H5j", school: "Scuola del Registro", name: "Aresini Manuela Raffaela", class: "4FSA", className: "4FSA", email: "aresini.manuelaraffaela@example.com", password: "123456" },
    { id: "Gixxzb5unGqCu6RE1yz8", class: "4FSA", school: "Scuola del Registro", name: "Bellucci Andrea", className: "4FSA", email: "bellucci.andrea@example.com", password: "123456" },
    { id: "LCoo0kPzTKShShmmgw7ucB", name: "Benvenuto Sara", school: "Scuola del Registro", class: "4FSA", className: "4FSA", email: "benvenuto.sara@example.com", password: "123456" },
    { id: "ehEe7C3t5ybubUXVHHCe", class: "4FSA", name: "Botte Anita", school: "Scuola del Registro", className: "4FSA", email: "botte.anita@example.com", password: "123456" },
    { id: "0GC4ez1qHyNRxxhWBYmh", class: "4FSA", school: "Scuola del Registro", name: "Castiglia Beatrice Iris", className: "4FSA", email: "castiglia.beatriceiris@example.com", password: "123456" },
    { id: "bcaUJiyFSRJxfSJXQrO1", name: "Cozzolino Michele", class: "4FSA", school: "Scuola del Registro", className: "4FSA", email: "cozzolino.michele@example.com", password: "123456" },
    { id: "3U2ExerJeLLwPgMU5ALQ", school: "Scuola del Registro", name: "D'Agostino Giuliano", className: "4FSA", email: "dagostino.giuliano@example.com", password: "123456" },
    { id: "YWzFNm7ykfjo98NYxUWR", school: "Scuola del Registro", name: "Del Giudice Lorenzo", class: "4FSA", className: "4FSA", email: "delgiudice.lorenzo@example.com", password: "123456" },
    { id: "TnFUeR6ux0jnqfkJDNuH", name: "Della Valle Siria", school: "Scuola del Registro", class: "4FSA", className: "4FSA", email: "dellavalle.siria@example.com", password: "123456" },
    { id: "QxvgCyLZloTcguBsJwaS", name: "Disanto Luca", school: "Scuola del Registro", class: "4FSA", className: "4FSA", email: "disanto.luca@example.com", password: "123456" },
    { id: "3GW69TjPws4EF897wp9T", school: "Scuola del Registro", name: "Festevole Michele", className: "4FSA", email: "festevole.michele@example.com", password: "123456" },
    { id: "LG6Soig0LSF0VtvqgdIO", school: "Scuola del Registro", name: "Garofalo Fabiana", className: "4FSA", email: "garofalo.fabiana@example.com", password: "123456" },
    { id: "QWzY5QC65XG1nW8NJADz", class: "4FSA", name: "Grande Giuliana Rita", school: "Scuola del Registro", className: "4FSA", email: "grande.giulianarita@example.com", password: "123456" },
    { id: "DuPD6g8TcdERt8imRF8g", class: "4FSA", name: "Leandro Mattia Paolo", school: "Scuola del Registro", className: "4FSA", email: "leandro.mattiapaolo@example.com", password: "123456" },
    { id: "TRT6FC3gHpH6yQhFewVc", class: "4FSA", name: "Matarese Nicholas", school: "Scuola del Registro", className: "4FSA", email: "matarese.nicholas@example.com", password: "123456" },
    { id: "Gq6Qtc4nHMriEabtjJAY", class: "4FSA", name: "Maturo Emanuele Vittorio", school: "Scuola del Registro", className: "4FSA", email: "maturo.emanuelevittorio@example.com", password: "123456" },
    { id: "4jN7Vt2OjU4Lg8CJKZdA", class: "4FSA", name: "Opera Davide", school: "Scuola del Registro", className: "4FSA", email: "opera.davide@example.com", password: "123456" },
    { id: "h5UTZSXYB7MurWwrYcA2", class: "4FSA", name: "Palumbo Luca", school: "Scuola del Registro", className: "4FSA", email: "palumbo.luca@example.com", password: "123456" },
    { id: "YDER3umiH8xAHQKBrXcA", name: "Paparone Gianmarco", school: "Scuola del Registro", className: "4FSA", email: "paparone.gianmarco@example.com", password: "123456" },
    { id: "CXzaqDeVmsO9Dhl2rX2U", name: "Rotta Matteo", school: "Scuola del Registro", class: "4FSA", className: "4FSA", email: "rotta.matteo@example.com", password: "123456" },
    { id: "yO7Nyp8RgljbK9n2SOl6", name: "Scamardella Emanuele", school: "Scuola del Registro", className: "4FSA", email: "scamardella.emanuele@example.com", password: "123456" },
    { id: "1vOWF0drmq7646ZI794r", name: "Schiano Di Cola Luigi", school: "Scuola del Registro", className: "4FSA", email: "schianodicola.luigi@example.com", password: "123456" },
    { id: "sUSuk4M0ERyL6f5T5kcT", name: "Schupffer Christian", school: "Scuola del Registro", class: "4FSA", className: "4FSA", email: "schupffer.christian@example.com", password: "123456" }
  ],
  [
    { id: "KODwuHuatmdoSTrawwOg", name: "Cecaro Alexandro", school: "Scuola del Registro", class: "4ASA", className: "4ASA", email: "cecaro.alexandro@example.com", password: "123456" },
    { id: "p2EXzTZVXPzk6d4AOKra", class: "4ASA", school: "Scuola del Registro", name: "Ciotola Rebecca", className: "4ASA", email: "ciotola.rebecca@example.com", password: "123456" },
    { id: "Llc988kiZE3MpehetIj7", school: "Scuola del Registro", name: "D'Insanto Alessandro", class: "4ASA", className: "4ASA", email: "dinsanto.alessandro@example.com", password: "123456" },
    { id: "VNgTc5vNDMTKnypX0flA", name: "Esposito Tommaso", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "esposito.tommaso@example.com", password: "123456" },
    { id: "iBYTGxL1yxpFexE0dqDC", school: "Scuola del Registro", name: "Forte Marika", class: "4ASA", className: "4ASA", email: "forte.marika@example.com", password: "123456" },
    { id: "ziZjA2orclN4izmTT0tM", name: "Gisonna Giulia", school: "Scuola del Registro", class: "4ASA", className: "4ASA", email: "gisonna.giulia@example.com", password: "123456" },
    { id: "Q5SJk1ymVNqP778KzjKZ", name: "La Motta Daniele", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "lamotta.daniele@example.com", password: "123456" },
    { id: "VGngF5ki9O6Sbh7hPQGr", name: "Lanuto Arianna", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "lanuto.arianna@example.com", password: "123456" },
    { id: "Mh73ZMtMsNuLKjRlVzU7", name: "Lauro Elsa", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "lauro.elsa@example.com", password: "123456" },
    { id: "FUArW1qP3qNHAkTiXlwy", name: "Lemma Carolina", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "lemma.carolina@example.com", password: "123456" },
    { id: "zrcuBA7t9i8VLMVPedut", name: "Lubrano Lavadera Lavinia", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "lubranolavadera.lavinia@example.com", password: "123456" },
    { id: "bcbRuvkyhcTx9rYti76k", name: "Manna Lorenzo", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "manna.lorenzo@example.com", password: "123456" },
    { id: "Gt3RAfXik3hpw60HWGkh", name: "Massa Eleonora", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "massa.eleonora@example.com", password: "123456" },
    { id: "yS9KrH0Lxd1wQvbuE8F3", name: "Mazzella Di Cecaro Daniele", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "mazzelladicecaro.daniele@example.com", password: "123456" },
    { id: "oepRxO6kxS458Iwp3YLd", name: "Merone Carmen", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "merone.carmen@example.com", password: "123456" },
    { id: "tJh6CFTFvD04jhvegIQn", name: "Musiello Ilaria", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "musiello.ilaria@example.com", password: "123456" },
    { id: "6rbjZ7uA31cR2FI8AYRw", name: "Nuziale Aldo", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "nuziale.aldo@example.com", password: "123456" },
    { id: "O8QI5qn2gYc2DxjIPRxX", name: "Riso Lorenzo", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "riso.lorenzo@example.com", password: "123456" },
    { id: "T6exlhGUjewsW1Uafc1H", name: "Romano Sara", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "romano.sara@example.com", password: "123456" },
    { id: "8A3Ktk97RV8Q0C6XXcRc", name: "Scamardella Jacopo", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "scamardella.jacopo@example.com", password: "123456" },
    { id: "lQ9xpkBFOPuZEWl6NoeA", name: "Scotto Di Carlo Andrea", class: "4ASA", school: "Scuola del Registro", className: "4ASA", email: "scottodicarlo.andrea@example.com", password: "123456" }
  ]
];

async function uploadData() {
  for (const classData of classesData) {
    const classRef = ref(db, `classes/${classData.id}`);
    await set(classRef, classData);
  }

  for (let i = 0; i < studentsData.length; i++) {
    const classStudents = studentsData[i];
    for (const student of classStudents) {
      const studentRef = ref(db, `students/${student.id}`);
      await set(studentRef, student);
    }
  }

  console.log("Data uploaded successfully!");
}

uploadData().catch(error => {
  console.error("Error uploading data:", error);
});
