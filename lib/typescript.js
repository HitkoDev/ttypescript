__filename = require.resolve('typescript/lib/typescript.js');
__dirname = require('path').dirname(__filename);
const ts = require(__filename);
require('./patch')(ts);
module.exports = ts;
