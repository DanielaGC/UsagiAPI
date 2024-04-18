const axios = require('axios')

module.exports = class UsagiAPIClient {
  constructor() {
    this.url = 'https://usagiapi.chinokafuu.moe/api/'
  }

  async _request(routerName) {
    const res = await axios.get(`${this.url}/${routerName}`)
    return res.data.url
  }

  dance() {
    console.log('[DEPRECATED] - The dance functions is deprecated, use .get({ endpoint: \'dance\' })')
    return this._request('dance');
  }

  feed() {
    console.log('[DEPRECATED] - The feed functions is deprecated, use .get({ endpoint: \'feed\' })')
    return this._request('feed');
  }

  get(option) {
    if (typeof option !== 'object') {
      throw new TypeError(`[INVALID-TYPE] - This option needs to be a object, try .get({ endpoint: '${option.join('')}' })`)
    }

    if (!option && !option.endpoint) {
      throw new TypeError('[INVALID-OPTION] Set as endpoints options to make a request.')
    }

    return this._request(option.endpoint)
  }

  hug() {
    console.log('[DEPRECATED] - The hug functions is deprecated, use .get({ endpoint: \'hug\' })')
    return this._request('hug');
  }

  kiss() {
    console.log('[DEPRECATED] - The kiss functions is deprecated, use .get({ endpoint: \'kiss\' })')
    return this._request('kiss');
  }

  pat() {
    console.log('[DEPRECATED] - The pat functions is deprecated, use .get({ endpoint: \'pat\' })')
    return this._request('pat');
  }

  poke() {
    console.log('[DEPRECATED] - The poke functions is deprecated, use .get({ endpoint: \'poke\' })')
    return this._request('poke');
  }

  slap() {
    console.log('[DEPRECATED] - The slap function is deprecated, use .get({ endpoint: \'slap\' })')
    return this._request('slap');
  }

  tickle() {
    console.log('[DEPRECATED] - The tickle functions is deprecated, use .get({ endpoint: \'tickle\' })')
    return this._request('tickle');
  }
}
