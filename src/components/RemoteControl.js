// RemoteControl.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RemoteControl = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../..//assets/Logo.png')} style={styles.logo} />
        <Text style={styles.appName}>MotionPilot</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.startButton]}>
          <Icon name="play" size={30} color="#fff" />
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.stopButton]}>
          <Icon name="stop" size={30} color="#fff" />
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowCenter}>
        <TouchableOpacity style={[styles.button, styles.navigationButton]}>
          <Icon name="arrow-up" size={30} color="#fff" />
          <Text style={styles.buttonText}>Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.navigationButton]}>
          <Icon name="backward" size={30} color="#fff" />
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.sleepButton, styles.circleButton]}>
          <Icon name="moon-o" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.navigationButton]}>
          <Icon name="forward" size={30} color="#fff" />
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowCenter}>
        <TouchableOpacity style={[styles.button, styles.navigationButton]}>
          <Icon name="arrow-down" size={30} color="#fff" />
          <Text style={styles.buttonText}>Down</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.closeButton]}>
          <Icon name="times" size={30} color="#fff" />
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.minimizeButton]}>
          <Icon name="window-minimize" size={30} color="#fff" />
          <Text style={styles.buttonText}>Minimize</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.exitButton]}>
          <Icon name="sign-out" size={30} color="#fff" />
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 36,
    color: '#282c34',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0', // Light background color
  },
  buttonText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
  },
  startButton: {
    backgroundColor: '#4CAF50', // Green
  },
  stopButton: {
    backgroundColor: '#f44336', // Red
  },
  navigationButton: {
    backgroundColor: '#8e8f8d', // Light Ash
  },
  sleepButton: {
    backgroundColor: '#0795a8', // Teal
  },
  circleButton: {
    borderRadius: 50, // Circular button
    width: 90,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#f44336', // Red
  },
  minimizeButton: {
    backgroundColor: '#8e8f8d', // Light Ash
  },
  exitButton: {
    backgroundColor: '#d1c302', // Yellow
  },
});

export default RemoteControl;
