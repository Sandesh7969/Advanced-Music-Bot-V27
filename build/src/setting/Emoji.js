export default class OrasEmoji extends Object {
    constructor(client) {
        super();
        this.tick = "<:x_tick:1239384584315994153>";
        this.cross = "<:x_cross:1239384581921050726>";
        this.playing = "<:x_music:1239384630621245562>";
        this.exclamation = "<:x_info:1239384932019867689>";
        this.queue = "<:queue:1243736955381092432>";
        this.info = "<:x_info:1239384932019867689>";
        this.defSearch = "<:youtube:1246014166704066642>";
        this.premium = "<:x_diamond:1239384621301501982>";
        this.invite = "<:icons_invite:1166374883912065044>";
        this.support = "<:Support:1166374880040734781>";
        this.spotiSearch = "<:x_spotify:1239384520839663736>";
        this.deezSearch = "<:Deezer_oras:1065634451603861545>";
        this.vote = "<:voter:1166374882053984296>";
        this.soundSearch = "<:Soundcloud_oras:1065634569262473277>";
        this.badges = {
            named: "<:owner:1166375413778493501>",
            owner: "<:ownership:1169756062044410006>",
            dev: "<a:developer_bot:1166375405503139972>",
            admin: "<:ny_Admin:1166375418815856693>",
            codev: "<:Active_Dev:1166375415946940459>",
            author: "",
            friend: "<:bsdk_friends:1169758132260585613>",
            vip: "<:dc_Vipz:1169758685128577085>",
            premiumUser: "<:event_kastro:1064437428888281138>",
            mod: "<:mod_badge:1166375421986750564>",
            staff: "<:Staff:1166375424486539336>",
            supporter: "<:earlysupporter:1166375426956996619>",
            user: "<:kronix_member:1075040201195393074>",
        };
        this.helpMenu = {
            music: "<:x_music:1239384630621245562>",
            home: "<:x_home:1239384525973491802>",
            filters: "<:queue:1243736955381092432>",
            info: "<:x_info:1239384932019867689>",
            utility: "<:x_setting:1239384634958155777>",
            allCommands: "<a:_:1243527241762340985>",
        };
        this.setup = {
            pause: "<:x_pause:1239384816990949437>",
            resume: "<:resume:1099927448734408744>",
            skip: "<:forward10:986893749005217812>",
            previous: "<:Oras_Previous:1137298056283430982>",
            shuffle: "<:shuffle:1139766210213462066>",
            author: "<:icons_queue:1166374069717958666>",
            nowPlaying: "<:x_music:1239384630621245562>",
            requester: "<:kronix_member:1075040201195393074>",
            duration: "<:x_time:1239384666121965708>",
            stop: "<:ss_stop:1099927856651436082>",
            loop: "<:loop:1129823572991426651>",
            volLow: "<:lower_vol:1139766602527690902>",
            volHigh: "<:higher_vol:1139766719917854751>",
            fav: "<:discotoolsxyzicon8:1158301800311566398>",
            autoplay: "<:emoji_05:1158269184715788388>",
            filters: "<:icons_control:1166377285499224164>",
        };
        this.orasNew = {
            emote: "<:music__kastro:1064440924190539888>",
            nowPlaying: "<:music__kastro:1064440924190539888>",
            requester: "<:kronix_member:1075040201195393074>",
            duration: "<:duration333:1169749340923904060>",
            author: "<:icons_queue:1166374069717958666>",
            pause: "<:Pause:1129824564386467991>",
            resume: "<:resume:1129824021618380801>",
            skip: "<:forward10:986893749005217812>",
            fav: "<:event_kastro:1064437428888281138>",
            previous: "<:Oras_Previous:1137298056283430982>",
            stop: "<:stop:1129823823399751690>",
        };
        this.spotify = {
            emote: "<:music__kastro:1064440924190539888>",
            filters: "",
            nowPlaying: "<a:spotify:1169747235748184134>",
            requester: "<:kronix_member:1075040201195393074>",
            duration: "<:duration333:1169749340923904060>",
            pause: "<:ss_pause:1099927332204073011>",
            author: "<:icons_queue:1166374069717958666>",
            resume: "<:resume:1099927448734408744>",
            stop: "<:ss_stop:1099927856651436082>",
            loop: "<:loop:1129823572991426651>",
            shuffle: "<:shuffle:1139766210213462066>",
            forward: "<:backward:1129823401175949322>",
            backward: "<:forward10:1129823372008759327>",
            volLow: "<:lower_vol:1139766602527690902>",
            volHigh: "<:higher_vol:1139766719917854751>",
            previous: "<:Oras_Previous:1137298056283430982>",
            skip: "<:forward10:986893749005217812>",
        };
        this.special = {
            emote: "<:music__kastro:1064440924190539888>",
            nowPlaying: "<:music__kastro:1064440924190539888>",
            requester: "<:kronix_member:1075040201195393074>",
            duration: "<:duration333:1169749340923904060>",
            pause: "<:ss_pause:1099927332204073011>",
            author: "<:kronix_member:1075040201195393074>",
            resume: "<:resume:1099927448734408744>",
            stop: "<:ss_stop:1099927856651436082>",
            loop: "<:loop:1129823572991426651>",
            shuffle: "<:shuffle:1139766210213462066>",
            forward: "<:backward:1129823401175949322>",
            backward: "<:forward10:1129823372008759327>",
            volLow: "<:lower_vol:1139766602527690902>",
            volHigh: "<:higher_vol:1139766719917854751>",
            previous: "<:Oras_Previous:1137298056283430982>",
            skip: "<:last:1139768093766336632>",
        };
        this.noButtons = {
            emote: "<:music__kastro:1064440924190539888>",
            nowPlaying: "<:kronix_member:1075040201195393074>",
            author: "<:icons_queue:1166374069717958666>",
            requester: "<:kronix_member:1075040201195393074>",
            duration: "<:duration333:1169749340923904060>",
            filters: "",
        };
        this.simple = {
            emote: "<:music__kastro:1064440924190539888>",
            nowPlaying: "<:kronix_member:1075040201195393074>",
            requester: "<:kronix_member:1075040201195393074>",
            author: "<:icons_queue:1166374069717958666>",
            duration: "<:duration333:1169749340923904060>",
            filters: "",
            pause: "<:ss_pause:1099927332204073011>",
            resume: "<:resume:1099927448734408744>",
            stop: "<:stop:1129823823399751690>",
            skip: "<:skip:1099927755342233720>",
            loop: "<:loop:1129823572991426651>",
        };
        this.oldStyle = {
            emote: "<:music__kastro:1064440924190539888>",
            nowPlaying: "<:kronix_member:1075040201195393074>",
            author: "<:icons_queue:1166374069717958666>",
            requester: "<:kronix_member:1075040201195393074>",
            duration: "<:duration333:1169749340923904060>",
        };
    }
}
//# sourceMappingURL=Emoji.js.map
