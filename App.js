import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  state = { cool: true };

  render() {
    if (this.state.cool) {
      return (
        <View style={styles.cool}>
          <Text>You're Cool</Text>
          <Button
            title="Cool?"
            onPress={() =>
              Alert.alert(
                'Cool?',
                'Are You Cool?',
                [
                  {
                    text: "Yes, I'm Cool",
                    onPress: () => console.log('Ask me later pressed'),
                  },
                  {
                    text: "No, I'm not that cool",
                    onPress: () => {
                      this.setState({ cool: false });
                    },
                    style: 'cancel',
                  },
                ],
                { cancelable: false }
              )
            }
          />
        </View>
      );
    } else {
      return (
        <View style={styles.warm}>
          <Text>You're not Cool</Text>
          <Button
            title="Cool?"
            onPress={() =>
              Alert.alert(
                'Cool?',
                'Are You Cool?',
                [
                  {
                    text: "Yes, I'm Cool",
                    onPress: () => console.log('Ask me later pressed'),
                  },
                  {
                    text: "No, I'm not that cool",
                    onPress: () => {
                      this.setState({ cool: false });
                    },
                    style: 'cancel',
                  },
                ],
                { cancelable: false }
              )
            }
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  cool: {
    flex: 1,
    backgroundColor: '#89cff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warm: {
    flex: 1,
    backgroundColor: '#f54029',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
