const net = require('net');
const client = new net.Socket();
const args = process.argv.slice(2);
let host = args[0];
let port = args[1];

client.connect(port, host, function() {
    console.log('Connected');
    client.write("Hello From Client " + client.address().address);
});
