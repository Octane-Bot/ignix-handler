const fs = require('fs')
const path = require('path')

const getAllFiles = (dir) => {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  const commandFiles = []

  for (const file of files) {
    const filePath = path.join(dir, file.name)

    if (file.isDirectory()) {
      commandFiles.push(...getAllFiles(filePath))
      continue
    }

    if (file.isFile()) {
      commandFiles.push(filePath)
    }
  }

  return commandFiles
}

module.exports = getAllFiles