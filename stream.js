const fs = require('fs');
const rs = fs.createReadStream('./files/lorem.text',{encoding: 'utf8'});
const ws = fs.createWriteStream('./files/new-lorem.text');

//rs.on('data', (dataStream)=>{  ws.write(dataStream)})

rs.pipe(ws)

