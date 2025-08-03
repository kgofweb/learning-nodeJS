// Create a Node js server with express

// Install and import express from npm : npm install express
import express from "express";

// Create a const app express
const app = express()

// Create the first route GET
app.get('/', (req, res) => {
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
})

// Route bonjour
app.get('/bonjour', (req, res) => {
   res.send('Bonjour')
})

// Route name in dynamic URL
app.get('/user/:name', (req, res) => {
   const name = req.params.name
   res.send(`Bonjour ${name}`)
})

// Retrun a json file
app.get('/api/users', (req, res) => {
   res.json({
      name: 'Polina',
      age: 20
   })
})

// Create middlewares

// Create a PORT
const PORT = 3000

// Start server
app.listen(PORT, () => { console.log(`Server Express démarré sur le port ${PORT}`); })