const fs = require('fs')

const saveNumber = (file, number) => {
  const numbers = readNumbers(file)
  numbers.push(number)
  fs.writeFileSync(file, JSON.stringify(numbers, null, 2))
}

const readNumbers = (file) => {
  if (!fs.existsSync(file)) {
    return []
  }
  const data = fs.readFileSync(file)
  return JSON.parse(data)
}

const isFileFilled = (file) => {
  const numbers = readNumbers(file);
  return numbers.length > 0;
}

const areAllFilesFilled = (files) => {
  return Object.values(files).every(file => isFileFilled(file));
};

module.exports = {
  saveNumber,
  readNumbers,
  isFileFilled,
  areAllFilesFilled
}
