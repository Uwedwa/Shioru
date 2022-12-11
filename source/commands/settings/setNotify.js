const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { getDatabase, ref, child, set } = require("firebase/database");

const type = [
    "alert",
    "channelCreate",
    "channelDelete",
    "channelPinsUpdate",
    "channelUpdate",
    "emojiCreate",
    "emojiDelete",
    "emojiUpdate",
    "guildBanAdd",
    "guildBanRemove",
    "guildIntegrationsUpdate",
    "guildMemberAdd",
    "guildMemberRemove",
    "guildMembersChunk",
    "guildUnavailable",
    "inviteCreate",
    "inviteDelete",
    "roleCreate",
    "roleDelete",
    "roleUpdate",
    "stageInstanceCreate",
    "stageInstanceDelete",
    "stageInstanceUpdate",
    "stickerCreate",
    "stickerDelete",
    "stickerUpdate",
    "threadCreate",
    "threadDelete",
    "threadUpdate",
    "webhookUpdate"
];

module.exports = {
    "name": "setNotify",
    "description": "Set up the notifications you want.",
    "category": "settings",
    "permissions": {
        "user": [PermissionsBitField.Flags.ManageGuild],
        "client": [PermissionsBitField.Flags.SendMessages]
    }
}

module.exports.command = {
    "enable": true,
    "usage": "setNotify [option: set, remove] <type> <channel>",
    "aliases": ["setnotify", "notification", "การแจ้งเตือน"],
    async execute(client, message, args) {
        const input = args.join(" ");
        const inputType = args[0];
        const inputOption = args[1] ? args[1].toLowerCase() : "";
        const inputChannel = args[2];

        const guildID = message.guild.id;
        const prefix = client.config.prefix;
        const notifyRef = child(child(ref(getDatabase(), "projects/shioru/guilds"), guildID), "notification");
        const notifySnapshot = client.api.guilds[guildID].notification;

        if (notifySnapshot) {
            const alert = notifySnapshot.alert;
            const channelCreate = notifySnapshot.channelCreate;
            const channelDelete = notifySnapshot.channelDelete;
            const channelPinsUpdate = notifySnapshot.channelPinsUpdate;
            const channelUpdate = notifySnapshot.channelUpdate;
            const emojiCreate = notifySnapshot.emojiCreate;
            const emojiDelete = notifySnapshot.emojiDelete;
            const emojiUpdate = notifySnapshot.emojiUpdate;
            const guildBanAdd = notifySnapshot.guildBanAdd;
            const guildBanRemove = notifySnapshot.guildBanRemove;
            const guildIntegrationsUpdate = notifySnapshot.guildIntegrationsUpdate;
            const guildMemberAdd = notifySnapshot.guildMemberAdd;
            const guildMemberRemove = notifySnapshot.guildMemberRemove;
            const guildMembersChunk = notifySnapshot.guildMembersChunk;
            const guildUnavailable = notifySnapshot.guildUnavailable;
            const inviteCreate = notifySnapshot.inviteCreate;
            const inviteDelete = notifySnapshot.inviteDelete;
            const roleCreate = notifySnapshot.roleCreate;
            const roleDelete = notifySnapshot.roleDelete;
            const roleUpdate = notifySnapshot.roleUpdate;
            const stageInstanceCreate = notifySnapshot.stageInstanceCreate;
            const stageInstanceDelete = notifySnapshot.stageInstanceDelete;
            const stageInstanceUpdate = notifySnapshot.stageInstanceUpdate;
            const stickerCreate = notifySnapshot.stickerCreate;
            const stickerDelete = notifySnapshot.stickerDelete;
            const stickerUpdate = notifySnapshot.stickerUpdate;
            const threadCreate = notifySnapshot.threadCreate;
            const threadDelete = notifySnapshot.threadDelete;
            const threadUpdate = notifySnapshot.threadUpdate;
            const webhookUpdate = notifySnapshot.webhookUpdate;

            if (!input) {
                const clientFetch = await client.user.fetch();
                const clientColor = clientFetch.accentColor;
                const noInputEmbed = new EmbedBuilder()
                    .setTitle(client.translate.commands.setNotify.title)
                    .setDescription(
                        client.translate.commands.setNotify.description
                            .replace("%s1", (alert ? ("<#" + alert + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s2", (channelCreate ? ("<#" + channelCreate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s3", (channelDelete ? ("<#" + channelDelete + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s4", (channelPinsUpdate ? ("<#" + channelPinsUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s5", (channelUpdate ? ("<#" + channelUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s6", (emojiCreate ? ("<#" + emojiCreate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s7", (emojiDelete ? ("<#" + emojiDelete + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s8", (emojiUpdate ? ("<#" + emojiUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s9", (guildBanAdd ? ("<#" + guildBanAdd + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s10", (guildBanRemove ? ("<#" + guildBanRemove + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s11", (guildIntegrationsUpdate ? ("<#" + guildIntegrationsUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s12", (guildMemberAdd ? ("<#" + guildMemberAdd + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s13", (guildMemberRemove ? ("<#" + guildMemberRemove + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s14", (guildMembersChunk ? ("<#" + guildMembersChunk + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s15", (guildUnavailable ? ("<#" + guildUnavailable + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s16", (inviteCreate ? ("<#" + inviteCreate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s17", (inviteDelete ? ("<#" + inviteDelete + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s18", (roleCreate ? ("<#" + roleCreate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s19", (roleDelete ? ("<#" + roleDelete + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s20", (roleUpdate ? ("<#" + roleUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s21", (stageInstanceCreate ? ("<#" + stageInstanceCreate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s22", (stageInstanceDelete ? ("<#" + stageInstanceDelete + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s23", (stageInstanceUpdate ? ("<#" + stageInstanceUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s24", (stickerCreate ? ("<#" + stickerCreate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s25", (stickerDelete ? ("<#" + stickerDelete + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s26", (stickerUpdate ? ("<#" + stickerUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s27", (threadCreate ? ("<#" + threadCreate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s28", (threadDelete ? ("<#" + threadDelete + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s29", (threadUpdate ? ("<#" + threadUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s30", (webhookUpdate ? ("<#" + webhookUpdate + ">") : client.translate.commands.setNotify.not_set))
                            .replace("%s31", (prefix + module.exports.command.usage))
                            .replace("%s32", ("/" + module.exports.command.usage))
                    )
                    .setColor(clientColor)
                    .setTimestamp()
                    .setFooter({ "text": client.translate.commands.setNotify.data_at });

                return message.channel.send({
                    "embeds": [noInputEmbed]
                });
            }

            switch (inputOption) {
                case "set":
                    if (!inputType) return message.reply(client.translate.commands.setNotify.empty_type.replace("%s", type.join(", ")));
                    if (!type.includes(inputType)) return message.reply(client.translate.commands.setNotify.type_not_found.replace("%s", type.join(", ")));
                    if (!inputChannel) return message.reply(client.translate.commands.setNotify.empty_config_channel);

                    const channel = message.guild.channels.cache.find(channels => (channels.id === inputChannel) || (channels.name === inputChannel));

                    if (!channel) return message.reply(client.translate.commands.setNotify.channel_not_found);

                    set(child(notifyRef, inputType), channel.id.toString()).then(() => {
                        message.channel.send(client.translate.commands.setNotify.set_success.replace("%s1", inputType).replace("%s2", channel.id));
                    });
                    break;
                case "remove":
                    if (!inputType) return message.reply(client.translate.commands.setNotify.empty_type.replace("%s", type.join(", ")));
                    if (!type.includes(inputType)) return message.reply(client.translate.commands.setNotify.type_not_found.replace("%s", type.join(", ")));

                    set(child(notifyRef, inputType), false).then(() => {
                        message.channel.send(client.translate.commands.setNotify.remove_success.replace("%s", inputType));
                    });
                    break;
                default:
                    return message.reply(client.translate.commands.setNotify.invalid_options.replace("%s", inputOption));
            }
        } else {
            set(notifyRef, {
                "alert": false,
                "channelCreate": false,
                "channelDelete": false,
                "channelPinsUpdate": false,
                "channelUpdate": false,
                "emojiCreate": false,
                "emojiDelete": false,
                "emojiUpdate": false,
                "guildBanAdd": false,
                "guildBanRemove": false,
                "guildIntegrationsUpdate": false,
                "guildMemberAdd": false,
                "guildMemberRemove": false,
                "guildMembersChunk": false,
                "guildUnavailable": false,
                "inviteCreate": false,
                "inviteDelete": false,
                "roleCreate": false,
                "roleDelete": false,
                "roleUpdate": false,
                "stageInstanceCreate": false,
                "stageInstanceDelete": false,
                "stageInstanceUpdate": false,
                "stickerCreate": false,
                "stickerDelete": false,
                "stickerUpdate": false,
                "threadCreate": false,
                "threadDelete": false,
                "threadUpdate": false,
                "webhookUpdate": false
            }).then(() => {
                module.exports.run(client, message, args);
            });
        }
    }
}

module.exports.interaction = {
    "enable": true
}

module.exports.interaction.slash = {
    "data": {
        "name": module.exports.name.toLowerCase(),
        "name_localizations": {
            "en-US": "notify",
            "th": "การแจ้งเตือน"
        },
        "description": module.exports.description,
        "description_localizations": {
            "en-US": "Set up the notifications you want.",
            "th": "ตั้งค่าการแจ้งเตือนที่คุณต้องการ"
        },
        "options": [
            {
                "type": 1,
                "name": "info",
                "name_localizations": {
                    "th": "ข้อมูล"
                },
                "description": "Receive information about each channel's notification.",
                "description_localizations": {
                    "th": "รับข้อมูลการแจ้งเตือนของแต่ละช่อง"
                },
                "required": false
            },
            {
                "type": 1,
                "name": "set",
                "name_localizations": {
                    "th": "ตั้งค่า"
                },
                "description": "The type of notification you want to set.",
                "description_localizations": {
                    "th": "ประเภทของการแจ้งเตือนที่คุณต้องการตั้งค่า"
                },
                "required": false,
                "options": [
                    {
                        "type": 3,
                        "name": "type",
                        "name_localizations": {
                            "th": "ประเภท"
                        },
                        "description": "The type of notification you want to set.",
                        "description_localizations": {
                            "th": "ประเภทของการแจ้งเตือนที่คุณต้องการตั้งค่า"
                        },
                        "required": true
                    },
                    {
                        "type": 7,
                        "name": "channel",
                        "name_localizations": {
                            "th": "ช่อง"
                        },
                        "description": "The channel you want to set the notification.",
                        "description_localizations": {
                            "th": "ช่องที่คุณต้องการตั้งค่าการแจ้งเตือน เช่น alert, channelCreate"
                        },
                        "required": true,
                        "channel_types": [
                            0,
                            5,
                            10,
                            11,
                            12,
                            15
                        ]
                    }
                ]
            },
            {
                "type": 1,
                "name": "remove",
                "name_localizations": {
                    "th": "ลบ"
                },
                "description": "The type of notification you want to remove.",
                "description_localizations": {
                    "th": "ประเภทของการแจ้งเตือนที่คุณต้องการลบ"
                },
                "required": false,
                "options": [
                    {
                        "type": 3,
                        "name": "type",
                        "name_localizations": {
                            "th": "ประเภท"
                        },
                        "description": "The type of notification you want to remove.",
                        "description_localizations": {
                            "th": "ประเภทของการแจ้งเตือนที่คุณต้องการลบ"
                        },
                        "required": true
                    }
                ]
            }
        ]
    },
    async execute(interaction) {
        const subCommand = interaction.options.getSubcommand();
        const inputType = interaction.options.get("type");
        const inputChannel = interaction.options.get("channel");

        const guildID = interaction.guild.id;
        const prefix = interaction.client.config.prefix;
        const notifyRef = child(child(ref(getDatabase(), "projects/shioru/guilds"), guildID), "notification");
        const notifySnapshot = interaction.client.api.guilds[guildID].notification;

        if (notifySnapshot) {
            const alert = notifySnapshot.alert;
            const channelCreate = notifySnapshot.channelCreate;
            const channelDelete = notifySnapshot.channelDelete;
            const channelPinsUpdate = notifySnapshot.channelPinsUpdate;
            const channelUpdate = notifySnapshot.channelUpdate;
            const emojiCreate = notifySnapshot.emojiCreate;
            const emojiDelete = notifySnapshot.emojiDelete;
            const emojiUpdate = notifySnapshot.emojiUpdate;
            const guildBanAdd = notifySnapshot.guildBanAdd;
            const guildBanRemove = notifySnapshot.guildBanRemove;
            const guildIntegrationsUpdate = notifySnapshot.guildIntegrationsUpdate;
            const guildMemberAdd = notifySnapshot.guildMemberAdd;
            const guildMemberRemove = notifySnapshot.guildMemberRemove;
            const guildMembersChunk = notifySnapshot.guildMembersChunk;
            const guildUnavailable = notifySnapshot.guildUnavailable;
            const inviteCreate = notifySnapshot.inviteCreate;
            const inviteDelete = notifySnapshot.inviteDelete;
            const roleCreate = notifySnapshot.roleCreate;
            const roleDelete = notifySnapshot.roleDelete;
            const roleUpdate = notifySnapshot.roleUpdate;
            const stageInstanceCreate = notifySnapshot.stageInstanceCreate;
            const stageInstanceDelete = notifySnapshot.stageInstanceDelete;
            const stageInstanceUpdate = notifySnapshot.stageInstanceUpdate;
            const stickerCreate = notifySnapshot.stickerCreate;
            const stickerDelete = notifySnapshot.stickerDelete;
            const stickerUpdate = notifySnapshot.stickerUpdate;
            const threadCreate = notifySnapshot.threadCreate;
            const threadDelete = notifySnapshot.threadDelete;
            const threadUpdate = notifySnapshot.threadUpdate;
            const webhookUpdate = notifySnapshot.webhookUpdate;

            if (subCommand === "info") {
                const clientFetch = await interaction.client.user.fetch();
                const clientColor = clientFetch.accentColor;
                const noInputEmbed = new EmbedBuilder()
                    .setTitle(interaction.client.translate.commands.setNotify.title)
                    .setDescription(
                        interaction.client.translate.commands.setNotify.description
                        .replace("%s1", (alert ? ("<#" + alert + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s2", (channelCreate ? ("<#" + channelCreate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s3", (channelDelete ? ("<#" + channelDelete + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s4", (channelPinsUpdate ? ("<#" + channelPinsUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s5", (channelUpdate ? ("<#" + channelUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s6", (emojiCreate ? ("<#" + emojiCreate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s7", (emojiDelete ? ("<#" + emojiDelete + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s8", (emojiUpdate ? ("<#" + emojiUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s9", (guildBanAdd ? ("<#" + guildBanAdd + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s10", (guildBanRemove ? ("<#" + guildBanRemove + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s11", (guildIntegrationsUpdate ? ("<#" + guildIntegrationsUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s12", (guildMemberAdd ? ("<#" + guildMemberAdd + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s13", (guildMemberRemove ? ("<#" + guildMemberRemove + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s14", (guildMembersChunk ? ("<#" + guildMembersChunk + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s15", (guildUnavailable ? ("<#" + guildUnavailable + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s16", (inviteCreate ? ("<#" + inviteCreate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s17", (inviteDelete ? ("<#" + inviteDelete + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s18", (roleCreate ? ("<#" + roleCreate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s19", (roleDelete ? ("<#" + roleDelete + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s20", (roleUpdate ? ("<#" + roleUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s21", (stageInstanceCreate ? ("<#" + stageInstanceCreate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s22", (stageInstanceDelete ? ("<#" + stageInstanceDelete + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s23", (stageInstanceUpdate ? ("<#" + stageInstanceUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s24", (stickerCreate ? ("<#" + stickerCreate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s25", (stickerDelete ? ("<#" + stickerDelete + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s26", (stickerUpdate ? ("<#" + stickerUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s27", (threadCreate ? ("<#" + threadCreate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s28", (threadDelete ? ("<#" + threadDelete + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s29", (threadUpdate ? ("<#" + threadUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s30", (webhookUpdate ? ("<#" + webhookUpdate + ">") : interaction.client.translate.commands.setNotify.not_set))
                        .replace("%s31", (prefix + module.exports.command.usage))
                        .replace("%s32", ("/" + module.exports.command.usage))
                    )
                    .setColor(clientColor)
                    .setTimestamp()
                    .setFooter({ "text": interaction.client.translate.commands.setNotify.data_at });

                return await interaction.editReply({ "embeds": [noInputEmbed] });
            }
            if (subCommand === "set") {
                if (!type.includes(inputType)) return interaction.editReply(interaction.client.translate.commands.setNotify.type_not_found.replace("%s", type.join(", ")));

                const channel = interaction.guild.channels.cache.find(channels => (channels.id === inputChannel.value) || (channels.name === inputChannel.value));

                if (!channel) return await interaction.editReply(interaction.client.translate.commands.setNotify.channel_not_found);

                await set(child(notifyRef, inputType.value), channel.id.toString());
                await interaction.editReply(interaction.client.translate.commands.setNotify.set_success.replace("%s1", inputType.value).replace("%s2", channel.id));
            }
            if (subCommand === "remove") {
                if (!type.includes(inputType)) return interaction.editReply(interaction.client.translate.commands.setNotify.type_not_found.replace("%s", type.join(", ")));
                
                await set(child(notifyRef, inputType.value), false);
                await interaction.editReply(interaction.client.translate.commands.setNotify.remove_success.replace("%s", inputType.value));
            }
        } else {
            set(notifyRef, {
                "alert": false,
                "channelCreate": false,
                "channelDelete": false,
                "channelPinsUpdate": false,
                "channelUpdate": false,
                "emojiCreate": false,
                "emojiDelete": false,
                "emojiUpdate": false,
                "guildBanAdd": false,
                "guildBanRemove": false,
                "guildIntegrationsUpdate": false,
                "guildMemberAdd": false,
                "guildMemberRemove": false,
                "guildMembersChunk": false,
                "guildUnavailable": false,
                "inviteCreate": false,
                "inviteDelete": false,
                "roleCreate": false,
                "roleDelete": false,
                "roleUpdate": false,
                "stageInstanceCreate": false,
                "stageInstanceDelete": false,
                "stageInstanceUpdate": false,
                "stickerCreate": false,
                "stickerDelete": false,
                "stickerUpdate": false,
                "threadCreate": false,
                "threadDelete": false,
                "threadUpdate": false,
                "webhookUpdate": false
            }).then(() => {
                module.exports.interaction.execute(interaction);
            });
        }
    }
};