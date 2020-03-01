
const fs = require('fs');

const sSoundsDir = './sounds';
const aFiles = fs.readdirSync(sSoundsDir);
const path = require('path');

const SoundsLib = {};

aFiles.forEach((sFile) => {
    var sKey = sFile.replace(/\.[^.]+$/, '');
    var sFilePath = path.join(sSoundsDir, sFile);
    Object.defineProperty(SoundsLib, sKey, { 
        get() { return fs.readFileSync(sFilePath); }
    });
});

export default SoundsLib