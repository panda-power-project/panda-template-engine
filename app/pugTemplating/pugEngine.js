const pug = require('pug')
const fs = require('fs')
const data = require('./data.json')

const OUTPUT_DIR = `${__dirname}/generatedPugs`
if (!fs.existsSync(OUTPUT_DIR)) {
  console.log('Created generatedPugs folder...')
  fs.mkdirSync(OUTPUT_DIR)
}

const OUTPUT_FOLDER_NAME = process.argv[2] || 'generatedPug'

const OUTPUT_PATH = `${__dirname}/generatedPugs/${OUTPUT_FOLDER_NAME}`
if (!fs.existsSync(OUTPUT_PATH)) {
  console.log('Directory does not exists, creating directory...')
  fs.mkdirSync(OUTPUT_PATH)
} else {
  console.log('Directory exists')
}

console.log('Generating HTML from Pug Template...')
const compileOptions = { pretty: true }
const compiledFunction = pug.compileFile(`${__dirname}/template.pug`, compileOptions)
const compiledContent = compiledFunction(data)
fs.writeFileSync(`${OUTPUT_PATH}/index.html`, compiledContent)

console.log('Generating Main CSS...')
fs.createReadStream(`${__dirname}/stylesheets/main.css`).pipe(fs.createWriteStream(`${OUTPUT_PATH}/main.css`))

console.log('Generating Bulma CSS...')
fs.createReadStream(`${__dirname}/stylesheets/bulma.css`).pipe(fs.createWriteStream(`${OUTPUT_PATH}/bulma.css`))
