/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import createComponent from './createComponent';
import useTheme from './useTheme';

const RSafeAreaView = createComponent(SafeAreaView);
const RView = createComponent();
const RText = createComponent(Text);

const Welcome = () => {
  const theme = useTheme();
  const [count, setCount] = useState(1);

  return (
    <RSafeAreaView style={styles.container} backgroundColor="mainBackground">
      <RText textVariants="header" color="textColor">
        Welcome
      </RText>
      <RText textVariants="body" color="textColor">
        {count}
      </RText>
      <Button title="Count" onPress={() => setCount(prev => prev + 1)} />
      <RView
        style={{width: 100, height: 100}}
        backgroundColor="cardPrimaryBackground"
        marginTop="m"
      />
      <Button
        title="toggle"
        onPress={() => theme.setIsDarkMode(prev => !prev)}
      />
    </RSafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
