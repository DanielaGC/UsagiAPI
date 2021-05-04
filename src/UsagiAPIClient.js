const axios = require("axios");

module.exports = class UsagiAPIClient {
  constructor() {
    this.url = "https://usagiapi.danielagc.repl.co/api/";
  }

  async get(Options) {
    const tiers = ["dance", "feed", "hug", "kiss", "pat", "poke", "slap", "tickle"];

    if (Options == null || Options.type == null) {
      throw new TypeError("[INVALID-OPTION] - Set as type options to make a request");
    }

    if (!typeof Options.type === String) {
      throw new TypeError("[INVALID-TYPE] - The described option is not a String");
    }

    if (!tiers.includes(Options.type)) {
      throw new TypeError(`[OPTION-NOT-FOUND] - The option "${Options.type}" is not available`);
    }

    const res = await axios.get(`${this.url}/${Options.type}`);
    return res.data.url;
  }
}