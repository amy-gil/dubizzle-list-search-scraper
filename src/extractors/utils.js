onst fs = require('fs');

function saveToFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

module.exports = { saveToFile };