import superagent from "superagent";

const BASE_URL = "https://api.otakugifs.xyz/gif/";

export class OtakuGifs {
    key: string; // API key.

    constructor(apiKey: string) {
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
};