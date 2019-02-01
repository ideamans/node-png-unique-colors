import test from 'ava'
import pngUniqueColors from '../'
import Fs from 'fs'
import Path from 'path'

test('Count unique colors from file', async t => {
  const colors = await pngUniqueColors(Path.join(__dirname, 'sample/dice.png'))
  t.is(colors, 79766)
})

test('Count unique colors from buffer', async t => {
  const buffer = Fs.readFileSync(Path.join(__dirname, 'sample/dice.png'))
  const colors = await pngUniqueColors(buffer)
  t.is(colors, 79766)

})