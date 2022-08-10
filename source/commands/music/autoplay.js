module.exports = {
    "name": "autoplay",
    "description": "Turn on / off automatic music playing",
    "category": "music",
    "permissions": {
        "client": ["SEND_MESSAGES"]
    }
};

module.exports.command = {
    "enable": true,
    "usage": "autoplay",
    "aliases": ["เล่นอัตโนมัติ", "autop", "atplay", "atp"],
    async execute(client, message, args) {
        const queue = client.music.getQueue(message);

        if (!queue) return message.reply(client.translate.commands.autoplay.no_queue);
        if (message.author.id !== queue.songs[0].user.id && queue.autoplay === false) return message.reply(client.translate.commands.autoplay.not_queue_owner);

        const mode = client.music.toggleAutoplay(message);

        message.channel.send(mode ? client.translate.commands.autoplay.on : client.translate.commands.autoplay.off);
    }
}

module.exports.interaction = {
    "enable": true,
    "data": {
        "name": module.exports.name,
        "name_localizations": {
            "en-US": "autoplay",
            "th": "เล่นอัตโนมัติ"
        },
        "description": module.exports.description,
        "description_localizations": {
            "en-US": "Turn on / off automatic music playing",
            "th": "เปิด/ปิดการเล่นเพลงอัตโนมัติ"
        }
    },
    async execute(interaction) {
        const queue = interaction.client.music.getQueue(interaction);

        if (!queue) return await interaction.editReply(interaction.client.translate.commands.autoplay.no_queue);
        if (interaction.user.id !== queue.songs[0].user.id && queue.autoplay === false) return await interaction.editReply(interaction.client.translate.commands.autoplay.not_queue_owner);

        const mode = interaction.client.music.toggleAutoplay(interaction);

        await interaction.editReply(mode ? interaction.client.translate.commands.autoplay.on : interaction.client.translate.commands.autoplay.off);
    }
};