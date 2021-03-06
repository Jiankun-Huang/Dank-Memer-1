const GenericImageCommand = require('../models/GenericImageCommand.js')

const command = new GenericImageCommand('spank', (msg, args) => {
  let avatarurl = (msg.mentions.length > 0 ? msg.mentions[0].staticAvatarURL : msg.author.staticAvatarURL).replace('gif', 'png')
  const authorurl = (msg.mentions.length > 0 ? msg.author.staticAvatarURL : msg.channel.guild.shard.client.user.staticAvatarURL).replace('gif', 'png')
  if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
    avatarurl = args.join(' ').replace(/gif|webp/g, 'png')
  }
  return JSON.stringify([`${avatarurl}`, `${authorurl}`])
}, {
  aliases: ['spanking'],
  description: 'Spank those naughty users'
})

module.exports = command
