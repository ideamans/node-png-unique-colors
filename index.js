const { PNG } = require('pngjs'),
  fs = require('fs'),
  util = require('util');

const WEIGHT = [0,1,2,4].map(n => Math.pow(256, n))

async function pngUniqueColors(png) {
  if (typeof png === 'string' || png instanceof String) {
    png = await new Promise((resolve, reject) => {
      fs.readFile(png, (err, buffer) => {
        if (err) return reject(err)
        resolve(buffer)
      })
    })
  }

  const img = await new Promise((resolve, reject) => {
    const img = new PNG()
    img.parse(png, err => {
      if (err) return reject(err)
      resolve(img);
    })
  })

  const uniq = {}
  for (let i = 0; i < img.data.length; i += 4) {
    const key = WEIGHT.reduce((key, c, j) => key + (img.data[i + j] || 0) * c, 0)
    uniq[key] = true
  }

  return Object.keys(uniq).length
}

module.exports = pngUniqueColors