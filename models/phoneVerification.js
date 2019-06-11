

class PhoneVerification {
  constructor() {
    this.sendPhoneUri = ''
  }

  /**
   *
   * @param phone
   * @returns {Promise<any>}
   */
  sendPhone(phone) {
    const options = {
      json: true,
      body: {
        "platform": "android",
        "client_id": process.env.FS_API_OAUTH2_CLIENT_ID,
        "phone_number": phone
      }
    };

    return new Promise((resolve, reject) => {
      if (phone) {
        request
          .post(this.sendPhoneUri, options, (err, res, body) => {
            if (err) {
              reject(err);
            } else {
              if (body.temp_token) {
                resolve({...options, token: body.temp_token});
              } else {
                reject();
              }
            }
          });
      } else {
        reject({
          err: 500
        })
      }
    });
  };
}

module.exports = PhoneVerification;
