import http from "http";

http.createServer( (req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});
   

    res.write( 'Hola mundo' );
    
    res.end();
})
.listen( 3000 );

console.log('Escuchando en el puerto, ', 3000);