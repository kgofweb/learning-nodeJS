// Create a Node js server with express

// Install and import express from npm : npm install express
import express from "express";
import { readFile } from "fs";

// Create a const app express
const app = express()

// Permet de lire le JSON dans le body - pour parser les requêtes JSON (nécessaire pour accéder au corps de la requête)
app.use(express.json())



// Les Routes GET
app.get('/article', (req, res) => {
   res.send(`
      <!DOCTYPE html>
      <html>
      <head><title>Node JS APP</title></head>
      <body>
         <h2>Bienvue sur Node APP</h2>
         <p>Application node js Statique</p>
      </body>
      </html>
   `)

   // readFile('web-express.html', (error, data) => {
   //    if (error) {
   //       res.writeHead(500)
   //       return res.end('Erreur server')
   //    }

   //    res.writeHead(201, {'Content-Type' : 'application/json'})
   //    res.end(data)
   // })
})

// Liste des utilsateurs (GET : Lire une ressource)
app.get('/users', (req, res) => {
   res.send('Listes des utilsateurs')
})

// Récuprer un utilsateur via son id
app.get('/users/:id', (req, res) => {
   const user = req.params.id
   res.send(`Utilisateurs avec id : ${user}`)
})

app.get('/users/:email', (req, res) => {
   const user_email = req.params.email
   res.send(`Votre email est : ${user_email}`)
})

app.get('/api/users', (req, res) => {
   res.json({
      name: 'Polina',
      age: 20
   })
})

// Comment Créer une ressource (POST)
app.post('/article', (req, res) => {
   const { article } = req.body
   res.status(201).send(`Article ${article} crée !`)
})


// Create middlewares

// Create a PORT
const PORT = 3000

// Start server
app.listen(PORT, () => { console.log(`Server Express démarré sur le port ${PORT}`); })