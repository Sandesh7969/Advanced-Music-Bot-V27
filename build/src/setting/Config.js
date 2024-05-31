export default class OrasConfig extends Object {
    token;
    prefix;
    nodes;
    spotiId;
    owners;
    spotiSecret;
    spotiNodes;
    webhooks;
    supportId;
    color;
    server;
    botinvite;
    voteUrl;
    voteApi;
    setupBgLink;
    constructor() {
        super();
        this.token =
            "" || process.env['token'];
        this.botid = "1180892789840547840"
        this.prefix = "*";
        this.nodes = [
            {
                name: `Kronix`,
                url: `ll.sleepyinsomniac.eu.org`,
                auth: `youshallnotpass`,
                secure: false,
            },
          {
              name: `Oras`,
              url: `buses.sleepyinsomniac.eu.org`,
              auth: `youshallnotpass`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteApi =
            "";
        this.webhooks = {
            guildCreate: "" || process.env['guildCreate'],
            guildDelete: "" || process.env['guildDelete'],
            Cmds: "" || process.env['cmds'],
        };
        this.server = "https://discord.gg/GPzYFx7zfe";
        this.botinvite = `https://discord.com/api/oauth2/authorize?client_id=1180892789840547840&permissions=8&scope=applications.commands%20bot`;
        this.spotiId = "6c31645ffb004ab8b44d06f7b96d1b66";
        this.spotiSecret = "3618fdc0b4824cfd91a8d425dac32987";
        this.owners = ["1131953433134497923"];
        this.color = "#45FFCA";
        this.supportId = ""; //Server Id
        this.spotiNodes = [
            {
                id: `Kronix`,
                host: `ll.sleepyinsomniac.eu.org`,
                port: 80,
                password: `youshallnotpass`,
                secure: false,
            },
          {
              id: `Oras`,
              host: `buses.sleepyinsomniac.eu.org`,
              port: 80,
              password: `youshallnotpass`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteUrl = "https://discord.gg/GPzYFx7zfe";
        this.setupBgLink =
            "https://media.discordapp.net/attachments/1190943041922535517/1190943144158691369/live_now.png?ex=65a3a33c&is=65912e3c&hm=3f442c1bd2f8b61e3be1f1c625d891df2b90334098765ca174750746912df20d&=&format=webp&quality=lossless&width=1000&height=562";
    }
}
//# sourceMappingURL=Config.js.map
