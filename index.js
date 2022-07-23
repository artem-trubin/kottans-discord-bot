const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
  console.log("Ready!");
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  switch (commandName) {
    case "ping":
      await interaction.reply('Pong!');
      break;
    case "server":
      await interaction.reply('Server Info.');
      break;
    case "user":
      await interaction.reply('User info.');
      break;
  }
});

client.login(token);
