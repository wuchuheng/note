const fs = require('fs')
const crypto = require('crypto')


const rootDir = 'public'
const localDir = `${rootDir}/assets/js`
const files = fs.readdirSync(localDir)
const searchFile = files.find(filename => filename.match("app\..+\.js"))


addFileToWorkService([
    `assets/js/${searchFile}`,
    'favicon.ico'
])

function addFileToWorkService (files){
    files.forEach(file => {
        const fileBuffer = fs.readFileSync(`${rootDir}/${file}`);
        const hashSum = crypto.createHash('md5');
        hashSum.update(fileBuffer);
        const hex = hashSum.digest('hex');
        const sw = `${rootDir}/service-worker.js`
        const data = fs.readFileSync(sw, 'utf8')
        const appendText= `,{
                    "url": "${file}",
                    "revision": "${hex}"
                  }
            ].concat(self.__precacheManifest || []);`
        const result = data.replace(`].concat(self.__precacheManifest || []);`, appendText);
        fs.writeFileSync(sw, result, 'utf8')
    })
}
