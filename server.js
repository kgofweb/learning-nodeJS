// ============ SERVER BASIQUE ============ //

// Import http
import http from 'http'

// Create server
const server = http.createServer((req, res) => {
   // Return une entete http
   res.writeHead(200, {'Content-Type': 'text/html'})
   // Return du texte
   res.write('<h1>Salut les gens depuis node JS</h1>')
   // Fin de la reponse
   res.end()
})

// Create port
const PORT = 3000

// Lander le server sur un port
server.listen(PORT, () => {
   console.log(`Serveur démarré sur le PORT ${PORT}`);
})