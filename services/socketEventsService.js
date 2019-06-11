const PhoneController = require('../controllers/phoneController');

class SocketEventsService {
  constructor(socket) {
    this.socket = socket;
    this.phoneController = new PhoneController(socket)
  }

  /**
   * Register socket.io events
   */
  register() {
    this._listenEvents();
    this._emitEvents();
  }

  /**
   * Creates socket.io event listeners
   * @private
   */
  _listenEvents() {
    this.socket.on('com.friendlyscore.send.phone', data => this.phoneController.send(data));
    // this.socket.on('com.friendlyscore.send.sms_code', data => this.socketEventsService.onSendSMSCode(data));

    this.socket.on('com.friendlyscore.show.phone', data => this.phoneController.show());
    // this.socket.on('com.friendlyscore.show.sms_code', data => this.socketEventsService.onShowPsychometry(data));
  }

  /**
   * Creates socket.io event emitters
   * @private
   */
  _emitEvents() {}
}

module.exports = SocketEventsService;
