const fs = require('fs'); // Tambahin di atas

client.on('message', message => {
  fs.appendFileSync('chatlog.txt', `[${message.from}]: ${message.body}\n`);
});
