const maxmind = require('maxmind');

class LocaleService {
  constructor(socket) {
    this.socket = socket;
  }

  /**
   *
   * @returns {(any | string) | string | string}
   */
  getCountryCode() {
    const ip = this._getIP();
    const maxmindDB = path.resolve(__dirname, '../', 'maxmind', 'GeoLite2-Country.mmdb');
    const countryLookup = maxmind.openSync(maxmindDB);
    const country = countryLookup.get(ip);
    return country && country.country.iso_code || process.env.DEFAULT_COUNTRY_CODE || 'GB';
  }

  /**
   *
   * @returns {*}
   * @private
   */
  _getIP() {
    const handshakeData = this.socket.request;
    return handshakeData && handshakeData.address;
  }
}

module.exports = LocaleService;
