import superagent from "superagent";

const BASE_URL = "https://api.otakugifs.xyz/gif/";

export class gifs {
    key: string; // API key.

    constructor(apiKey: string) {
        if (!apiKey) throw new Error("[OtakuGifs]: API key missing");
        this.key = apiKey;
    };

    async angrystare() {
        let { body } = await superagent
        .get(`${BASE_URL}/angrystare`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async bite() {
        let { body } = await superagent
        .get(`${BASE_URL}/bite`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async bleh() {
        let { body } = await superagent
        .get(`${BASE_URL}/bleh`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async blush() {
        let { body } = await superagent
        .get(`${BASE_URL}/blush`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async brofist() {
        let { body } = await superagent
        .get(`${BASE_URL}/brofist`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async celebrate() {
        let { body } = await superagent
        .get(`${BASE_URL}/celebrate`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async cheers() {
        let { body } = await superagent
        .get(`${BASE_URL}/cheers`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async clap() {
        let { body } = await superagent
        .get(`${BASE_URL}/clap`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async confused() {
        let { body } = await superagent
        .get(`${BASE_URL}/confused`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async cry() {
        let { body } = await superagent
        .get(`${BASE_URL}/cry`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async cuddle() {
        let { body } = await superagent
        .get(`${BASE_URL}/cuddle`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async dance() {
        let { body } = await superagent
        .get(`${BASE_URL}/dance`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async drool() {
        let { body } = await superagent
        .get(`${BASE_URL}/drool`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async embarrassed() {
        let { body } = await superagent
        .get(`${BASE_URL}/embarrassed`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async handhold() {
        let { body } = await superagent
        .get(`${BASE_URL}/handhold`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async happy() {
        let { body } = await superagent
        .get(`${BASE_URL}/happy`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async headbang() {
        let { body } = await superagent
        .get(`${BASE_URL}/headbang`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async hug() {
        let { body } = await superagent
        .get(`${BASE_URL}/hug`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async kiss() {
        let { body } = await superagent
        .get(`${BASE_URL}/kiss`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async laugh() {
        let { body } = await superagent
        .get(`${BASE_URL}/laugh`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async lick() {
        let { body } = await superagent
        .get(`${BASE_URL}/lick`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async love() {
        let { body } = await superagent
        .get(`${BASE_URL}/love`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async mad() {
        let { body } = await superagent
        .get(`${BASE_URL}/mad`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async nervous() {
        let { body } = await superagent
        .get(`${BASE_URL}/nervous`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async no() {
        let { body } = await superagent
        .get(`${BASE_URL}/no`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async nom() {
        let { body } = await superagent
        .get(`${BASE_URL}/nom`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async pat() {
        let { body } = await superagent
        .get(`${BASE_URL}/pat`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async peek() {
        let { body } = await superagent
        .get(`${BASE_URL}/peek`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async pinch() {
        let { body } = await superagent
        .get(`${BASE_URL}/pinch`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async poke() {
        let { body } = await superagent
        .get(`${BASE_URL}/poke`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async pout() {
        let { body } = await superagent
        .get(`${BASE_URL}/pout`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async punch() {
        let { body } = await superagent
        .get(`${BASE_URL}/punch`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async roll() {
        let { body } = await superagent
        .get(`${BASE_URL}/roll`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async run() {
        let { body } = await superagent
        .get(`${BASE_URL}/run`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async sad() {
        let { body } = await superagent
        .get(`${BASE_URL}/sad`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async scared() {
        let { body } = await superagent
        .get(`${BASE_URL}/scared`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async shrug() {
        let { body } = await superagent
        .get(`${BASE_URL}/shrug`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async shy() {
        let { body } = await superagent
        .get(`${BASE_URL}/shy`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async sigh() {
        let { body } = await superagent
        .get(`${BASE_URL}/sigh`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async sip() {
        let { body } = await superagent
        .get(`${BASE_URL}/sip`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async slap() {
        let { body } = await superagent
        .get(`${BASE_URL}/slap`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async sleep() {
        let { body } = await superagent
        .get(`${BASE_URL}/sleep`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async smack() {
        let { body } = await superagent
        .get(`${BASE_URL}/smack`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async smile() {
        let { body } = await superagent
        .get(`${BASE_URL}/smile`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async smug() {
        let { body } = await superagent
        .get(`${BASE_URL}/smug`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async sorry() {
        let { body } = await superagent
        .get(`${BASE_URL}/sorry`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async stare() {
        let { body } = await superagent
        .get(`${BASE_URL}/stare`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async surprised() {
        let { body } = await superagent
        .get(`${BASE_URL}/surprised`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async thumbsup() {
        let { body } = await superagent
        .get(`${BASE_URL}/thumbsup`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async tickle() {
        let { body } = await superagent
        .get(`${BASE_URL}/tickle`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async tired() {
        let { body } = await superagent
        .get(`${BASE_URL}/tired`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async wave() {
        let { body } = await superagent
        .get(`${BASE_URL}/wave`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async wink() {
        let { body } = await superagent
        .get(`${BASE_URL}/wink`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async yawn() {
        let { body } = await superagent
        .get(`${BASE_URL}/yawn`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async yay() {
        let { body } = await superagent
        .get(`${BASE_URL}/yay`)
        .set("X-API-KEY", this.key);

        return body.url;
    };

    async yes() {
        let { body } = await superagent
        .get(`${BASE_URL}/yes`)
        .set("X-API-KEY", this.key);

        return body.url;
    };
};