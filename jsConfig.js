var path = require('path');

var taxesds = [
    'scripts/taxesds.js',
    'scripts/components/tabs.js',
    'scripts/components/nav.js'
];

module.exports = {
    taxesds: taxesds.map(file => {
        return path.join(__dirname, file);
    })
};