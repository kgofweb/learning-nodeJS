// HTTP to create server
import http from 'http'
// readFile to read our html page
import { readFile } from 'fs'

// Create server
const server = http.createServer((req, res) => {
   // Read our page html
   readFile('web.html', (error, data) => {
      // En cas d'erreur (Si npar exemple le fichier n'existe pas !!!)
      if (error) {
         res.writeHead(500)
         return res.end('Erreur server')
      }

      // Si tout est OK
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.end(data)
   })
})

// Create PORT
const PORT = 5000

// Listen server
server.listen(PORT, () => {
   console.log(` Server démarré sur le port ${PORT} `);
})