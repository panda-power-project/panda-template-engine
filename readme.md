# [![Web Starter Kit](https://cloud.githubusercontent.com/assets/110953/11445049/f05512ba-9520-11e5-8fdb-8c8eb5f690d0.jpg)](https://github.com/google/web-starter-kit/releases/latest)

## Panda-Template-Engine

This repository is running on:

* [Google Web Starter Kit](https://github.com/google/web-starter-kit)
* [Pug.js](https://github.com/pugjs/pug)

Pull the repository, npm install, run `gulp serve` to fire up the Web Starter Kit

The template engine is controlled by `pugTemplating/pugEngine.js`

Running `npm run pugify {fileName}` will fire that script, plug in data from `data.json` into `template.pug` to generate the outputs in `generatedPugs/{fileName}`

The stylesheets folder should be fixed and not touched
