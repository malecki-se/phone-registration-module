const SocketEventsService = require('../services/socketEventsService');
const LocaleService = require('../services/localeService');
const PhoneView = require('../views/phoneView');

class PhoneController {
  constructor(socket) {
    this.socket = socket;
    this.socketEventsService = new SocketEventsService(socket);
    this.localeService = new LocaleService(socket);
    this.phoneView = new PhoneView();
    this.init()
  }

  init() {
    this._registerSocketEvents();
  }

  /**
   *
   * @returns {{viewId: string, DOM: {tag: string, child: *[]}[]}}
   */
  show() {
    const countryCode = this.localeService.getCountryCode();
    const params = {
      countryCode,
    };

    return this.phoneView.render(params);
  }

  /**
   *
   */
  send() {
    console.log('phone sent')
  }

  /**
   * Registers socket events
   * @private
   */
  _registerSocketEvents() {
    this.socketEventsService.register();
  }
}

module.exports = PhoneController;
