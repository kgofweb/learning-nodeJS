// console.log("Salut tout le monde depuis Node.js 2025");

import os from 'os'
import fs from 'fs'
import { showInfos } from './user.js'

const infosUser = showInfos('Brad', '25')
const osUser = os.userInfo().username

// console.log(`${infosUser} et votre OS est : ${osUser}`);


// écris dans le fichier log.txt l’heure de lancement du script fs
const lancement = new Date().toLocaleString()
const ligne = `Heure de landecement : ${lancement}\n`;

// écrire a l'interieur du fichier ET pour ne pas écraser le contenu
fs.appendFileSync('log.txt', ligne)

// cette methodeécrase le contenu precedent
// fs.writeFileSync('./log.txt', ligne)

const stats = fs.statSync('log.txt')
console.log(`${stats.size} octets`)

