const Discord = require("discord.js");

const config = require("./Data/config.json");

const ytdl = require('ytdl-core');

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.on("ready", () => console.log("NFz na area!"));

//Message reply:
client.on("messageCreate", message => {
    console.log(message.content);
    if (message.content == "hello") message.reply("Hello!");
});

//LoL ainda existe? :
client.on("messageCreate", message => {
    if (message.content == "lol") message.reply("Mds, LoL ainda existe?");
});

//Samuel burro:
client.on("messageCreate", message => {
    if (message.author.id == "204697436202074113") { const replies = ["Cala a boca ai Samuel", "Samuel burro", "Para de falar, Samuel", "Ta burro?"], replytext = Math.floor((Math.random() * replies.length) + 0); 
    message.reply(replies[replytext]); };
});

//Hortencin:
client.on("messageCreate", message => {
    if (message.author.id == "282290568048934913") { const replies = ["Hortencio bixa", "É HORTENÇÃO"], replytext = Math.floor((Math.random() * replies.length) + 0); 
    message.reply(replies[replytext]); };
});

/*Song request:nod
client.on("messageCreate", message => {
if (message.content == "s1") {
    if (!message.member.voice.channel) return message.reply("You have to be in a VoiceChannel");
    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play(ytdl("https://youtu.be/~~~~")).on("finish", () => 
        VoiceConnection.disconnect());
        message.reply("done");
    }).catch(e => console.log(e))};
});
*/

/*client.on("messageCreate", message => {
    if(!message.content.startsWith(config.prefix))return;
    
    const args = message.content.substring(config.prefix.length).split(/ +/);

    switch (args[0]) {
        case 
    }
});*/

//Login token:
client.login(config.token);