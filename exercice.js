// Import express
import express from 'express'

// Create app express
const app = express()

// / → “Bienvenue”
app.get('/', (req, res) => {
   res.send('Bienvenue')
})

// /a-propos → “Page à propos”
app.get('/about', (req, res) => {
   res.send('About Page')
})

// /api/heure → l’heure actuelle au format JSON
app.get('/api/heure', (req, res) => {
   const hoursNow = new Date().toISOString()
   res.send(`Heure actuelle : ${hoursNow}`)
})

// /utilisateur/:nom → “Bonjour, [nom] !”
app.get('/utilisateur/:nom', (req, res) => {
   const { nom } = req.params
   res.send(`Bonjour ${nom}`)
})

// Create PORT
const PORT = 5000

// Listen server
app.listen(PORT, () => { console.log(`Server Express démarré sur le port ${PORT}`); })