import React from 'react';
import codePush from 'react-native-code-push';
import GoogleReCaptcha from './Modal';

//6Ld1dskZAAAAAGSmnsSpRQ5vX6HRUt0bbmBbxMUT
// const siteKey = '6Ld4GNgUAAAAAALi_QZF2DyemOtBmWYaIn7J8E7l';
const siteKey = '6LcgI54UAAAAABGdGmruw6DdOocFpYVdjYBRe4zb';

const baseUrl = 'https://www.google.com/recaptcha/api.js';
class App extends React.Component {
  onMessage = (event) => {
    console.log('TCL:: App -> onMessage -> event', event);
    debugger;
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        return;
      } else {
        console.log('Verified code from Google', event.nativeEvent.data);
        return;
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
