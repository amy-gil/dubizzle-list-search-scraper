onst { saveToFile } = require('../extractors/utils');

async function saveData(properties) {
saveToFile('output/properties.json', properties);
}

module.exports = { saveData };