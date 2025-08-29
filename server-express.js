// Create a Node js server with express

// Install and import express from npm : npm install express
import express from "express";

// Create a const app express
const app = express()

// Permet de lire le JSON dans le body - pour parser les requêtes JSON (nécessaire pour accéder au corps de la requête)
app.use(express.json())



// Les Routes GET
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

// POST - Créer une ressource 
app.post('/article', (req, res) => {
   // Afficher ce que POSTMAN envoi
   console.log(req.body);
   const { name } = req.body
   res.status(201).send(`Article ${name} crée !`)
})

// PUT - modifier une ressource
app.put('/article/:name', (req, res) => {
  const { name } = req.params;
  const { nom } = req.body;
  res.send(`Article ${name} mis à jour avec le nom : ${nom}`);
});
app.put('/article/:id', (req, res) => {
  const { id } = req.params;
  const { nom } = req.body;
  res.send(`Article ${id} mis à jour avec le nom : ${nom}`);
});

// DELETE - supprimer une ressource
app.delete('/article/:id', (req, res) => {
   const { id } = req.params;
   res.send(`Article ${id} supprimé avec succes !`)
})
app.delete('/article/:name', (req, res) => {
   const { name } = req.params;
   res.send(`Article ${name} supprimé avec succes !`)
})

// ================ Create middlewares ================ //

// Creer une function qui verifie la cle passer en url 
function verifyKey(req, res, next) {
   if (req.query.key === '1234') {
      next()
   } 
   res.status(403).send('Clé daccès invalide')
}

app.get('/admin', verifyKey, (req, res) => {
   res.send('Welcome Admin')
})

// Middleware Global
app.use((req, res, next) => {
  console.log(`Requête reçue : ${req.method} ${req.url}`);
  next(); // passe au prochain handler
});

// Create a PORT
const PORT = 3000

// Start server
app.listen(PORT, () => { console.log(`Server Express démarré sur le port ${PORT}`); })