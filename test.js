import fs from 'node:fs/promises'

const readPJson = async() => {
    const fileName  = new URL('./package.json', import.meta.url).pathname
    console.log(JSON.parse(await fs.readFile(fileName,{encoding:'utf-8'})))
}

const writeNewFile = async() => {
    const newFile = new URL('./demo.js', import.meta.url).pathname
    fs.writeFile(newFile,`console.log('We have a new file named as demo.js')`)
}

//readPJson()
writeNewFile()