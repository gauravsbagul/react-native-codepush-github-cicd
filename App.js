import React from 'react';
import {Button, View} from 'react-native';
import ConfirmGoogleCaptcha from 'react-native-google-recaptcha-v2';
import GoogleReCaptcha from 'react-native-google-recaptcha-v2/GoogleReCaptcha';
import codePush from 'react-native-code-push';

const siteKey = 'siteKey';
const baseUrl = 'baseUrl';
class App extends React.Component {
  onMessage = (event) => {
    console.log('TCL:: App -> onMessage -> event', event);
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        // this.captchaForm?.hide();
        return;
      } else {
        console.log('Verified code from Google', event.nativeEvent.data);
        setTimeout(() => {
          // this.captchaForm?.hide();
          // do what ever you want here
        }, 1500);
      }
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <GoogleReCaptcha /> */}
        <GoogleReCaptcha
          // ref={(_ref) => (this.captchaForm = _ref)}
          siteKey={siteKey}
          baseUrl={baseUrl}
          languageCode="en"
          onMessage={this.onMessage}
        />
        <Button
          onPress={() => {
            // this.captchaForm.show();
          }}
          title="hey click me"
          color="darkviolet"
        />
      </View>
    );
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(App);
