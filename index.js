'use strict'

require('dotenv').config()

const bot = require('./src/controller/telegrafController')
const state = require('./src/state/')
const dbController = require('./src/controller/dbController')
const StateController = require('./src/controller/stateController')
const TimeController = require('./src/controller/timeController')
const UserController = require('./src/controller/usersController')

const parseDate = require('./src/helpers/parseDate')
const logger = require('./src/helpers/logger')

bot.command('set', (ctx) => {
  // console.log('set log', ctx.update)
  // console.log('entities', ctx.message.entities);  
  const text = ctx.update.message.text
  const date = parseDate(text) 
  const {id, first_name, last_name, username, is_bot} = ctx.update.message.from
  const user = {id, first_name, last_name, username, is_bot, birthday: date}
  UserController.addUser(user)
  console.log(`TCL>>>: id`, id)
  logger('new users', state.users)
})
bot.command('time', (ctx) => {
  // console.log('state', state);  
  ctx.reply(state.now)})
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.on('text', (ctx) => {
  const chat_id = ctx.update.message.chat.id
  // console.log('ctx.update', ctx.update)
  // console.log('entities', ctx.message.entities);
  ctx.reply(`chat_id=${chat_id}`)
  StateController.update({ chat_id: chat_id })
})

bot.launch()
StateController.init()

