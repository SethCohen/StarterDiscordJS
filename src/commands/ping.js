const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responds back with pong.'),
	async execute(interaction) {
		return interaction.reply({ content: 'pong' });
	},
};
