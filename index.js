// Module File System FS
// import { readFileSync, writeFileSync } from "fs";
// import chalk from "chalk";

// const content = readFileSync('./info.txt', 'utf-8');
// const content_two = writeFileSync('./info.txt', 'Chapitre 2 : Les modules natifs')

// console.log(content_two);

// console.log(chalk.blue("Je suis : ", content));


// Module Path (pour les chemins de fichiers)
import path from 'path'

const file = path.join('dossier', 'info.txt')
// console.log(file);


// Module natif URL
import { URL } from "url";

const myURL = new URL('https://openai.com/docs?categorie=nodejs');
const result = myURL.searchParams.get('categorie')
// console.log(result);

// Module os pour obtenir des infos sur systeme
import os from 'os'

const user = os.userInfo().username
const memory = os.freemem() / 1024 / 1024
const a = os.cpus()

// console.log('User : ', user);
// console.log('User memory: ', memory);
// console.log('User : ', a);

// Module natif HTTP : Permet de creer un mini Server sans express
// import http from "http";

// const PORT = 5000

// const server = http.createServer((request, response) => {
//    response.writeHead(200, {'content-Type': 'text/plain'})
//    response.end('Bonjour depuis un serveur HTTP natif !')
// })

// server.listen(PORT, () => {
//    console.log(`Server demaré sur le port : ${PORT}`);
// })


// Module personnalisé
import {direBonjour} from './utiles.js'

console.log(direBonjour('Pauline'));
