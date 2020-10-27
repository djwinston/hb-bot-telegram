const isDev = process.env.BOT_TOKEN

const log = (message, target) => {
  if (!isDev) return
  console.log(message, target)
}

module.exports = log