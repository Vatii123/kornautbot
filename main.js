const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '+ping') {
    msg.reply('Pong!');
  }
});

client.on('message', badword => {
  if (badword.content === 'nigga') {
    badword.reply('https://www.youtube.com/watch?v=YG4iTGjuoKw');
  }
});

client.on('guildMemberAdd', join => {
  const channel = join.guild.channels.cache.find(channel => channel.name === 'general');
  if (!channel) return;
  let embed = new Discord.MessageEmbed()
  .setColor('#79FF3F')
  .setTitle('Welcome!')
  .setDescription(`${member} has /tp'd into the server.`)
  .setFooter(`Created by professional stabber#3476`)
  channel.send(embed);
});

client.on('message', welcometest => {
  if (welcometest.content === '+welcometest') {
    welcometest.reply(embed);
  }
});

client.on('message', helpmsg => {
  if (helpmsg.content === '+commands') {
    let cmdsembed = new Discord.MessageEmbed()
    .setTitle('Commands List')
    .addFields(
  		{ name: '+ping', value: 'Pong!' },
      { name: '+info', value: 'Information of Kornaut'}
  	)
    helpmsg.reply('cmdsembed');
  }
}






client.login('Token-goes-here');
