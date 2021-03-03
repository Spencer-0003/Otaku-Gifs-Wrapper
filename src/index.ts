import superagent from "superagent";

const BASE_URL = "https://api.otakugifs.xyz/gif/";

export default class OtakuGifs {
    key: string; // API key.

    constructor(apiKey: string) {
        this.key = apiKey;
    };
};