# [![Panda Power](https://img.clipartfest.com/492f473e234752fec7b0e3e67ad72303_cute-panda-clipart-2-cute-panda-clipart-vector_1920-1080.jpeg)](https://github.com/panda-power-project/panda-template-engine)

## Panda-Template-Engine

This repository is running on:

* [Google Web Starter Kit](https://github.com/google/web-starter-kit)
* [Pug.js](https://github.com/pugjs/pug)

Pull the repository, npm install, run `gulp serve` to fire up the Web Starter Kit

The template engine is controlled by `pugTemplating/pugEngine.js`

Running `npm run pugify {fileName}` will fire that script, plug in data from `data.json` into `template.pug` to generate the outputs in `generatedPugs/{fileName}`

The stylesheets folder should be fixed and not touched
