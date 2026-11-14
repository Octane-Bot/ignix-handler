
const mongoose = require('mongoose')

const CommandHandler = require('./CommandHandler')

class Main {
  constructor({ client, mongoUri, commandsDir }) {
    if (!client) {
      throw new Error('A client is required.')
    }

    if (mongoUri) {
      this.connectToMongo(mongoUri)
    }

    if (commandsDir) {
      new CommandHandler(commandsDir, client)
    }
  }

  async connectToMongo(mongoUri) {
    try {
      await mongoose.connect(mongoUri)
      console.log('✅ MongoDB connected successfully!')
    } catch (error) {
      console.error('❌ MongoDB connection failed:', error)
    }
  }
}

module.exports = Main
