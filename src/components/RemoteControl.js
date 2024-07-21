import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal, Portal, TextInput, Button, Provider } from 'react-native-paper';

/* 
1 : start
2 : stop
3 : sleep
4 : previous
5 : next
6 : up
7 : down
8 : close
9 : minimize
10 : exit
*/

const RemoteControl = () => {
  const [visible, setVisible] = useState(false);
  const [ipText, setIpText] = useState('');
  const [ipAddress, setIpAddress] = useState('192.168.8.131');
  const [response, setResponse] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleEnter = () => {
    setIpAddress(ipText);
    console.log('IP Address changed to:', ipText);
    hideModal();
  };

  const postRequest = async (value) => {
    try {
      const res = await fetch(`http://${ipAddress}:8088/action`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: value })
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const resData = await res.json();
      setResponse(resData.message);
      console.log(resData.message);
    } catch (error) {
      console.error(error);
      setResponse('Error: Could not reach the server.');
      console.log('Error: Could not reach the server.');
    }
  };
  

  const handlePress = async (value) => {
    postRequest(value);
  };
  
  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
            <TextInput
              label="IP Address"
              value={ipText}
              onChangeText={text => setIpText(text)}
              style={styles.input}
            />
            <Button mode="contained" onPress={handleEnter} style={styles.enterButton}>
              Enter
            </Button>
          </Modal>
        </Portal>
        <View style={styles.header}>
          <Image source={require('../../assets/Logo.png')} style={styles.logo} />
          <Text style={styles.appName}>MotionPilot</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>handlePress(1)} style={[styles.button, styles.startButton]}>
            <Icon name="play" size={30} color="#fff" />
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlePress(2)} style={[styles.button, styles.stopButton]}>
            <Icon name="stop" size={30} color="#fff" />
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowCenter}>
          <TouchableOpacity onPress={()=>handlePress(6)} style={[styles.button, styles.navigationButton]}>
            <Icon name="arrow-up" size={30} color="#fff" />
            <Text style={styles.buttonText}>Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>handlePress(4)} style={[styles.button, styles.navigationButton]}>
            <Icon name="backward" size={30} color="#fff" />
            <Text style={styles.buttonText}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlePress(3)} style={[styles.button, styles.sleepButton, styles.circleButton]}>
            <Icon name="moon-o" size={40} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlePress(5)} style={[styles.button, styles.navigationButton]}>
            <Icon name="forward" size={30} color="#fff" />
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowCenter}>
          <TouchableOpacity onPress={()=>handlePress(7)} style={[styles.button, styles.navigationButton]}>
            <Icon name="arrow-down" size={30} color="#fff" />
            <Text style={styles.buttonText}>Down</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>handlePress(8)} style={[styles.button, styles.closeButton]}>
            <Icon name="times" size={30} color="#fff" />
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlePress(9)} style={[styles.button, styles.minimizeButton]}>
            <Icon name="window-minimize" size={30} color="#fff" />
            <Text style={styles.buttonText}>Minimize</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlePress(10)} style={[styles.button, styles.exitButton]}>
            <Icon name="sign-out" size={30} color="#fff" />
            <Text style={styles.buttonText}>Exit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.networkButton} onPress={showModal}>
          <Icon name="wifi" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  networkButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#0795a8',
    padding: 10,
    borderRadius: 50,
  },
  modalContainer: {
    padding: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 20,
  },
  enterButton: {
    backgroundColor: '#4CAF50',
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
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#f44336',
  },
  navigationButton: {
    backgroundColor: '#8e8f8d',
  },
  sleepButton: {
    backgroundColor: '#0795a8',
  },
  circleButton: {
    borderRadius: 50,
    width: 90,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#f44336',
  },
  minimizeButton: {
    backgroundColor: '#8e8f8d',
  },
  exitButton: {
    backgroundColor: '#d1c302',
  },
});

export default RemoteControl;
