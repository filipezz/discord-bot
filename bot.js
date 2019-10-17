const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

client.login('NjMxMTk0NTY4MTg0MDM3Mzg2.XZ03OA.MD-hNPboWXBcYYt3dvZun4HghPI');

client.once('ready', () => {
	console.log('Ready!');
});



client.on('message', async message => {					
	if (message.content === 'DJ Robson Caetano') {
		message.channel.send(djRobsonCaetano);
    }
    if (message.content === 'Brabo') {
		message.channel.send('Brabo Brabo');
	}
	if (message.content === 'Can a robot write a symphony?') {
		message.channel.send(robot);
	}
	if (message.content === 'Computador...') {
		message.channel.send('Ｓｉｍ  ｍｅｓｔｒｅ？');
	}
	
  if (message.content === 'Poe aquela do Robson caetano') {
    if (message.member.voice.channel) {

		message.member.voice.channel.join()
        .then(connection => { 
			message.reply('Ｖｏｃê  ｑｕｅ  ｓａｂｅ  ｍｅｓｔｒｅ．．．');
			const dispatcher =  connection.play(ytdl('https://www.youtube.com/watch?v=TFdO7oqkMzI'));
			dispatcher.on("end", end => connection.voice.channel.leave());
        })
        .catch(console.log);
    } else {	
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content.startsWith("Mete o pé")) {
	
	if (message.guild.me.voice.channel !== undefined) {
	  message.guild.me.voice.channel.leave();
	  message.reply("Bando de pau no cu");
	} else {
	  message.reply("I'm not connected to a voice channel!");
	}
  }
  


}  
);

const djRobsonCaetano = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.addField('Pulou Picado tá agarrado', 'AAAAAAAI AIII')
    .setImage('https://i.ytimg.com/vi/mc6r20MRiD0/maxresdefault.jpg')
    .setFooter('Ronaldo')
	.setTimestamp()

const robot = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('Ｃａｎ ｙｏｕ？')
    .setImage('https://i.imgur.com/61abtfg.png')
	.setTimestamp()




