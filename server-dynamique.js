// ============ SERVER DYNAMIQUE ============ //
import http from 'http'

// Create PORT
const PORT = 8000

// Infos to show
const name = 'Mervy'
const work = 'Web Dev'

// Create server
const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type' : 'text/html' })

   const html = `
      <html>
         <head>
            <title>Infos utilisateur</title>
         </head>
         <body>
            <h1>Bienvenue ${name}</h1>
            <p>Vous avez ${work} ans</p>
            <p>Bienvenue dans le monde de Node.js</p>
         </body>
      </html>
   `
   res.end(html)
})

// Demarer le server
server.listen(PORT, () => { console.log(`Server démarré sur le port : ${PORT}`); })