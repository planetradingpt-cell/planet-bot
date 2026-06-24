require('dotenv').config();

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  AttachmentBuilder
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', async () => {

  console.log('Bot online!');

  const rulesEnabled = false;
  const supportEnabled = false;
  const linksEnabled = false;
  const startHereEnabled = false;

  // REGRAS
  const rulesChannel =
    await client.channels.fetch('1478774980312432741');

  const rulesEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setDescription(`
# __**REGRAS & DISCLAIMER**__

__*O incumprimento pode resultar num banimento ou suspensão temporária.*__
`)
    .setThumbnail('attachment://logoplanet.png')
    .setImage('attachment://disclouser.webp');

  if (rulesEnabled) {

    await rulesChannel.send({
      embeds: [rulesEmbed],
      files: ['./logoplanet.png', './disclouser.webp']
    });

  }

  // SUPPORT
  const supportChannel =
    await client.channels.fetch('1509381315298988192');

  const supportEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setDescription(`
# __**Open A Ticket!**__

Please press **"Open Ticket"** if you need any support.
`)
    .setThumbnail('attachment://logoplanet.png');

  const supportButtons = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('open_ticket')
        .setLabel('Open Ticket')
        .setEmoji('📩')
        .setStyle(ButtonStyle.Primary)
    );

  if (supportEnabled) {

    await supportChannel.send({
      embeds: [supportEmbed],
      components: [supportButtons],
      files: ['./logoplanet.png']
    });

  }

  // LINKS CHANNEL

  const linksChannel =
    await client.channels.fetch('1509380827123945483');

  const youtubeEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setTitle('YouTube')
    .setDescription(`
https://www.youtube.com/@danielf_porto
`)
    .setThumbnail('attachment://ytlogo.webp');

  const twitterEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setTitle('Twitter / X')
    .setDescription(`
https://x.com/xansj_
`)
    .setThumbnail('attachment://xlogo.webp');

  const instagramEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setTitle('Instagram')
    .setDescription(`
https://www.instagram.com/planetrading.pt/
`)
    .setThumbnail('attachment://iglogo.webp');

  const websiteEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setTitle('Website')
    .setDescription(`
https://planetrading.pt/
`)
    .setThumbnail('attachment://logoplanet.png');

  const telegramEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setTitle('Telegram')
    .setDescription(`
https://t.me/+Sj1s5_uexZNiZWM0
`)
    .setThumbnail('attachment://logo_telegram.png');

  if (linksEnabled) {

    await linksChannel.send({
      embeds: [
        youtubeEmbed,
        twitterEmbed,
        instagramEmbed,
        websiteEmbed,
        telegramEmbed
      ],
      files: [
        './ytlogo.webp',
        './xlogo.webp',
        './iglogo.webp',
        './logoplanet.png',
        './logo_telegram.png'
      ]
    });

  }

  // START HERE

  const startHereChannel =
    await client.channels.fetch('1509713497045602434');

  const logoPlanet = new AttachmentBuilder('./logoplanet.png', {
    name: 'logoplanet.png'
  });

  const startHereImage = new AttachmentBuilder('./start-here.jpeg', {
    name: 'start-here.jpeg'
  });

  const startHereEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setThumbnail('attachment://logoplanet.png')
    .setDescription(`
### __**A Tua Trading Journey Começa Aqui...**__

Bem-vindo à comunidade!

Parabéns, acabaste de fazer um dos melhores investimentos em ti próprio e na tua jornada de trading.
Agora estás no sítio certo, e estou confiante de que esta é a etapa final da tua jornada rumo à consistência e rentabilidade.

O conhecimento e as estratégias que vais aprender aqui foram desenvolvidos para elevar o teu trading a outro patamar. Se mantiveres a disciplina, o compromisso e aplicares o que aprenderes, os resultados poderão ir muito além dos lucros no mercado, poderão transformar a tua vida por completo.

### __**Começa Por Aqui:**__

Seleciona os teus cargos: **#get-roles**

Obtém acesso ao guia A-Z completo: **#claim-a-z-trading-guide**

Acede às aulas premium: **#premium-qt-lectures**

Ativa e Começa o teu Trading Journal: **#claim-trading-journal**

Consulta os horários: **#horários** para saberes a que horas as coisas acontecem.

Por fim apresenta-te e junta-te à comunidade em **#premium-chat**
`)
    .setImage('attachment://start-here.jpeg');

  if (startHereEnabled) {

    await startHereChannel.send({
      embeds: [startHereEmbed],
      files: [logoPlanet, startHereImage]
    });

  }

});

// WELCOME DM
client.on('guildMemberAdd', async (member) => {
  const welcomeChannel =
    await client.channels.fetch('1478774980312432745');

  const welcomeEmbed = new EmbedBuilder()
    .setColor('#99c1e0')
    .setTitle('Planet Trading - New Era')
    .setDescription(`
Boas ${member}, Bem-vindo à Planet Trading!

Apresenta-te no <#1478774980312432745>
`)
    .setThumbnail('attachment://logoplanet.png');

  try {

    const publicWelcomeEmbed = new EmbedBuilder()
      .setColor('#99c1e0')
      .setDescription(`
Bem-vindo ${member}, estamos super felizes por te ter como parte da comunidade <@&1478774980312432746>!

Vamos configurar tudo para ti o mais rápido possível para que possas começar a tua jornada:

Vai até o canal <#1478774980312432745> e vê, pois lá estão todas as informações necessárias para começar: cargos personalizados, acesso ao Guia de Trading A-Z, palestras premium, o teu diário de trading e uma programação semanal para que saibas o que esperar e quando.

Ah, e mais uma coisa, não deixes de te apresentar no chat! Estamos animados em receber-te como parte da nossa comunidade.

Cada novo membro torna-nos uma equipa maior, e mal podemos esperar para crescer e ter sucesso contigo.

*A tua jornada começa aqui...*
`)
      .setThumbnail('attachment://logoplanet.png');

    await welcomeChannel.send({
      embeds: [publicWelcomeEmbed],
      files: ['./logoplanet.png']
    });

    await member.send({
      embeds: [welcomeEmbed],
      files: ['./logoplanet.png']
    });

  } catch (err) {

    console.log(err);

  }

});

// BOTÕES
client.on('interactionCreate', async (interaction) => {

  if (!interaction.isButton()) return;

  // OPEN TICKET
  if (interaction.customId === 'open_ticket') {

    try {

      await interaction.deferReply({
        ephemeral: true
      });

      const ticketChannel =
        await interaction.guild.channels.create({

          name: `ticket-${interaction.user.username}`,

          type: ChannelType.GuildText

        });

      await ticketChannel.permissionOverwrites.create(
        interaction.guild.id,
        {
          ViewChannel: false
        }
      );

      await ticketChannel.permissionOverwrites.create(
        interaction.user.id,
        {
          ViewChannel: true,
          SendMessages: true,
          ReadMessageHistory: true
        }
      );

      const ticketButtons = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('claim_ticket')
            .setLabel('Claim')
            .setEmoji('🎟️')
            .setStyle(ButtonStyle.Primary),

          new ButtonBuilder()
            .setCustomId('close_ticket')
            .setLabel('Close')
            .setEmoji('🔒')
            .setStyle(ButtonStyle.Secondary),

          new ButtonBuilder()
            .setCustomId('reopen_ticket')
            .setLabel('Reopen')
            .setEmoji('🔓')
            .setStyle(ButtonStyle.Success),

          new ButtonBuilder()
            .setCustomId('delete_ticket')
            .setLabel('Delete')
            .setEmoji('🗑️')
            .setStyle(ButtonStyle.Danger)
        );

      const ticketEmbed = new EmbedBuilder()
        .setColor('#99c1e0')
        .setDescription(`
# Type your Question / Enquiry.

*Doing this will Result in a Faster Response.*
`)
        .setThumbnail('attachment://logoplanet.png');

      await ticketChannel.send({
        content: `${interaction.user}`,
        embeds: [ticketEmbed],
        components: [ticketButtons],
        files: ['./logoplanet.png']
      });

      const createdEmbed = new EmbedBuilder()
        .setColor('#57F287')
        .setDescription(`
${interaction.user}, you created a ticket and it has been moved to the Support category:

**Ticket #1,245**
${ticketChannel}
`);

      await interaction.editReply({
        embeds: [createdEmbed],
        ephemeral: true
      });

    } catch (err) {

      console.log(err);

    }

  }

  // CLAIM
  if (interaction.customId === 'claim_ticket') {

    const allowedRoleName = 'Planet';

    const hasRole =
      interaction.member.roles.cache.some(
        role => role.name === allowedRoleName
      );

    if (!hasRole) {

      const errorEmbed = new EmbedBuilder()
        .setColor('#ff4d4d')
        .setDescription(`
${interaction.user}, only Planet can claim tickets.
`);

      return interaction.reply({
        embeds: [errorEmbed],
        ephemeral: true
      });

    }

    await interaction.reply({
      content: `${interaction.user} assumiu este ticket 🎟️`
    });

  }

  // CLOSE
  if (interaction.customId === 'close_ticket') {

    const closeEmbed = new EmbedBuilder()
      .setColor('#ffb52e')
      .setDescription(`
${interaction.user}, are you sure you want to close the ticket?

The channel will be locked.
`);

    const confirmButtons = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('confirm_close')
          .setLabel('Confirm')
          .setEmoji('🔒')
          .setStyle(ButtonStyle.Secondary)
      );

    await interaction.reply({
      embeds: [closeEmbed],
      components: [confirmButtons],
      ephemeral: true
    });

  }

  // CONFIRM CLOSE
  if (interaction.customId === 'confirm_close') {

    await interaction.reply({
      content: 'Ticket fechado 🔒',
      ephemeral: true
    });

  }

  // REOPEN
  if (interaction.customId === 'reopen_ticket') {

    await interaction.reply({
      content: 'O sistema de reopen está temporariamente desativado.',
      ephemeral: true
    });

  }

  // DELETE
  if (interaction.customId === 'delete_ticket') {

    await interaction.reply({
      content: 'A apagar ticket... 🗑️',
      ephemeral: true
    });

    setTimeout(async () => {
      await interaction.channel.delete();
    }, 2000);

  }

});




client.login(process.env.DISCORD_TOKEN);
