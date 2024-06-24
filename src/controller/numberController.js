const path = require('path')
const fileUtils = require('../utils/fileUtils')

const files = {
  fileA: path.join(__dirname, '../data/A.json'),
  fileB: path.join(__dirname, '../data/B.json'),
  fileC: path.join(__dirname, '../data/C.json'),
  fileD: path.join(__dirname, '../data/D.json')
}


const handleNumberInput = async (req, res) => {
  if (fileUtils.areAllFilesFilled(files)) {
    return res.status(400).json({ message: 'All files are filled. Process get completed.s' })
  }

  const { number } = req.body
  if (number < 1 || number > 25) {
    return res.status(400).json({ message: 'Number must be between 1 and 25.' })
  }

  const result = number * 7

  if (result > 140) {
    await fileUtils.saveNumber(files.fileA, result)
  } else if (result > 100) {
    await fileUtils.saveNumber(files.fileB, result)
  } else if (result > 60) {
    await fileUtils.saveNumber(files.fileC, result)
  } else {
    await fileUtils.saveNumber(files.fileD, result)
  }

  res.json({ message: 'Number saved successfully.', result })
}

const listAllNumbers = async (req, res) => {
  const fileA = await fileUtils.readNumbers(files.fileA)
  const fileB = await fileUtils.readNumbers(files.fileB)
  const fileC = await fileUtils.readNumbers(files.fileC)
  const fileD = await fileUtils.readNumbers(files.fileD)

  res.json({ fileA, fileB, fileC, fileD })
}

module.exports = {
  handleNumberInput,
  listAllNumbers
}
