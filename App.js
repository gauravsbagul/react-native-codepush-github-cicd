import React from 'react';
import codePush from 'react-native-code-push';
import GoogleReCaptcha from './Modal';

const siteKey = '6Ld4GNgUAAAAAALi_QZF2DyemOtBmWYaIn7J8E7l';
const baseUrl = 'https://www.google.com/recaptcha/api.js';
class App extends React.Component {
  onMessage = (event) => {
    console.log('TCL:: App -> onMessage -> event', event);
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        this.captchaForm?.hide();
        return;
      } else {
        console.log('Verified code from Google', event.nativeEvent.data);
        setTimeout(() => {
          this.captchaForm?.hide();
          // do what ever you want here
        }, 1500);
      }
    }
  };
  render() {
    return (
      <>
        <GoogleReCaptcha
          ref={(_ref) => (this.captchaForm = _ref)}
          siteKey={siteKey}
          baseUrl={baseUrl}
          languageCode="en"
          onMessage={this.onMessage}
        />
      </>
    );
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(App);
