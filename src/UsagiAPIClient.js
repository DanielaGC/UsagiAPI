const axios = require('axios')

module.exports = class UsagiAPIClient {
  constructor() {
    this.url = 'https://usagiapi.danielagc.repl.co/api/'
  }

  async _request(routerName) {
    const res = await axios.get(`${this.url}/${routerName}`)
    return res.data.url
  }

  dance() {
    return this._request('dance');
  }

  feed() {
    return this._request('feed');
  }

 hug() {
    return this._request('hug');
  }

 kiss() {
    return this._request('kiss');
  }

 pat() {
    return this._request('pat');
  }

 poke() {
    return this._request('poke');
  }

 slap() {
    return this._request('slap');
  }

 tickle() {
    return this._request('tickle');
  }
}
