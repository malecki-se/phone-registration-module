class PhoneView {

  /**
   *
   * @param params
   * @returns {{viewId: string, DOM: {tag: string, child: *[]}[]}}
   */
  render(params) {
    const { countryCode } = params;

    return {
      viewId: 'phone-view',
      DOM: [{
        tag: 'fs-component',
        child: [
          {
            tag: 'fs-verify-user',
            child: [
              {
                tag: 'fs-heading',
                text: 'Improve your financial credibility',
                child: [
                  {
                    tag: 'fs-separator-purple-md'
                  }
                ]
              },
              {
                tag: 'fs-verify-user-form',
                child: [
                  {
                    tag: 'fs-form-group',
                    child: [
                      {
                        tag: 'fs-form-label',
                        text: 'Please enter your mobile phone number'
                      },
                      {
                        tag: 'fs-form-input',
                        html: `<input type="text" placeholder="Enter your mobile phone number" fs-form="landing-phone-form" fs-field="landing-phone-form-phone" fs-ip-country-code="${countryCode}" fs-validate-id="landing-phone-form-phone" fs-validated="false" fs-validate-type="regex" fs-validate-msg="Enter correct phone number" fs-validate-pattern="[a-z0-9!#$%&\'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?">`
                      }
                    ]
                  },
                  {
                    tag: 'fs-form-group-checkbox',
                    html: '<label><input type="checkbox" fs-form="landing-email-form" fs-field="landing-email-form-privacy" fs-validate-id="landing-email-form-privacy" fs-validated="false" fs-validate-type="boolean" fs-validate-msg="To continue accept terms and conditions">By using Friendlyscore you agree to our <a href="#" target="_blank">terms and conditions</a> and <a href="#" target="_blank">privacy policy</a><fs-checkmark></fs-checkmark></label>',
                  },
                  {
                    tag: 'fs-button-verify-user',
                    text: 'Send SMS code',
                    attr: [
                      {
                        name: 'fs-validate-elements',
                        value: '["landing-email-form-email", "landing-email-form-privacy"]'
                      },
                      {
                        name: 'fs-validate-range',
                        value: 'all'
                      },
                      {
                        name: 'fs-validated',
                        value: 'false'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            tag: 'fs-powered',
            child: [
              {
                tag: 'fs-span',
                text: 'POWERED BY:'
              },
              {
                tag: 'fs-img',
                html: '<img src="https://friendlyscore.com/bundles/socialscoreapi/img/landing/logo-poweredby.svg">'
              }
            ]
          }
        ]
      }]
    }
  };
}

module.exports = PhoneView;
