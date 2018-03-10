var path = require('path');

var libs = [
    'node_modules/jquery/dist/jquery.min.js'
];

var taxesds = [
    'scripts/taxesds.js',
    'scripts/components/tabs.js'
];

module.exports = {
    libs: libs.map(file => {
        return path.join(__dirname, file);
    }),
    taxesds: taxesds.map(file => {
        return path.join(__dirname, file);
    })
};