import React, {useState} from 'react';

import {
  View,
  Pressable,
  ImageBackground,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const MaxDisplaySize = props => {
  const splitInput = props.answer.toString().split('.');
  const charsInLHS = splitInput[0];
  const charsInRHS = typeof splitInput[1] === 'undefined' ? '0' : splitInput[1];
  let trunc_answer;
  console.log(
    props.answer,
    props.answer.toString().length,
    charsInLHS,
    charsInLHS.length,
    charsInRHS,
    charsInRHS.length,
  );

  if (props.answer.toString().length >= 8) {
    if (charsInLHS.length > charsInRHS.length) {
      trunc_answer = props.answer.toString().slice(0, 9);
    } else {
      trunc_answer = parseFloat(props.answer)
        .toFixed(9 - charsInLHS.length)
        .toString();
    }
  } else {
    trunc_answer = props.answer;
  }
  return trunc_answer;
};

const App = () => {
  const [mainNumber, setMainNumber] = useState('0');
  const [topNumber, setTopNumber] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  return (
    <SafeAreaView style={{backgroundColor: 'rgba(180, 180, 180, 1.0)'}}>
      <View style={styles.screenLayout}>
        <View style={styles.glassDisplay}>
          <ImageBackground
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
            source={require('./assets/GlassDisplay.png')}>
            <Text style={styles.displayTopLabel}>
              {topNumber} {currentOperator}
            </Text>
            <Text style={styles.displayLabel}>
              <MaxDisplaySize answer={mainNumber} />
            </Text>
          </ImageBackground>
        </View>

        <View style={styles.buttonsLayout}>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => {
              setCurrentOperator('');
              setMainNumber('0');
              setTopNumber('');
            }}>
            <Text style={styles.normalText}>Clear All</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber('0')}>
            <Text style={styles.normalText}>Del</Text>
          </Pressable>
        </View>

        <View style={styles.buttonsLayout}>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '7'))}>
            <Text style={styles.normalText}>7</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '8'))}>
            <Text style={styles.normalText}>8</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '9'))}>
            <Text style={styles.normalText}>9</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.colouredButton,
            ]}
            onPress={() => {
              setCurrentOperator('+');
              if (topNumber === '') {
                setTopNumber(mainNumber);
                setMainNumber('0');
              } else {
                setTopNumber(
                  eval(
                    parseFloat(topNumber) +
                      currentOperator +
                      parseFloat(mainNumber),
                  ),
                );
                setMainNumber('0');
              }
            }}>
            <Text style={styles.normalText}>+</Text>
          </Pressable>
        </View>

        <View style={styles.buttonsLayout}>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '4'))}>
            <Text style={styles.normalText}>4</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '5'))}>
            <Text style={styles.normalText}>5</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '6'))}>
            <Text style={styles.normalText}>6</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.colouredButton,
            ]}
            onPress={() => {
              setCurrentOperator('-');
              if (topNumber === '') {
                setTopNumber(mainNumber);
                setMainNumber('0');
              } else {
                setTopNumber(
                  eval(
                    parseFloat(topNumber) +
                      currentOperator +
                      parseFloat(mainNumber),
                  ),
                );
                setMainNumber('0');
              }
            }}>
            <Text style={styles.normalText}>-</Text>
          </Pressable>
        </View>

        <View style={styles.buttonsLayout}>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '1'))}>
            <Text style={styles.normalText}>1</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '2'))}>
            <Text style={styles.normalText}>2</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => setMainNumber(parseFloat(mainNumber + '3'))}>
            <Text style={styles.normalText}>3</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.colouredButton,
            ]}
            onPress={() => {
              setCurrentOperator('*');
              if (topNumber === '') {
                setTopNumber(mainNumber);
                setMainNumber('0');
              } else {
                setTopNumber(
                  eval(
                    parseFloat(topNumber) +
                      currentOperator +
                      parseFloat(mainNumber),
                  ),
                );
                setMainNumber('0');
              }
            }}>
            <Text style={styles.normalText}>X</Text>
          </Pressable>
        </View>

        <View style={styles.buttonsLayout}>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
              {flex: 2.4},
            ]}
            onPress={() => setMainNumber(mainNumber + '0')}>
            <Text style={styles.normalText}>0</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.button,
            ]}
            onPress={() => {
              if (!String(mainNumber).includes('.')) {
                setMainNumber(mainNumber + '.');
              }
            }}>
            <Text style={styles.normalText}>.</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.colouredButton,
            ]}
            onPress={() => {
              setCurrentOperator('/');
              if (topNumber === '') {
                setTopNumber(mainNumber);
                setMainNumber('0');
              } else {
                setTopNumber(
                  eval(
                    parseFloat(topNumber) +
                      currentOperator +
                      parseFloat(mainNumber),
                  ),
                );
                setMainNumber('0');
              }
            }}>
            <Text style={styles.normalText}>÷</Text>
          </Pressable>
        </View>

        <View style={styles.buttonsLayout}>
          <Pressable
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1.0},
              styles.colouredButton,
            ]}
            onPress={() => {
              if (currentOperator.length > 0) {
                setMainNumber(
                  eval(
                    parseFloat(topNumber) +
                      currentOperator +
                      parseFloat(mainNumber),
                  ),
                );
                setTopNumber('');
                setCurrentOperator('');
              }
            }}>
            <Text style={styles.normalText}>=</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: 'rgba(204, 204, 204, .8)',
    marginTop: 0,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    padding: 2,
    borderWidth: 2,
    borderRadius: 4,
  },
  colouredButton: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 255, 255, .5)',
    marginTop: 0,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    padding: 2,
    borderWidth: 2,
    borderRadius: 4,
  },
  displayLabel: {
    textAlign: 'right',
    padding: 8,
    fontSize: 50,
  },
  displayTopLabel: {
    textAlign: 'left',
    fontSize: 20,
    padding: 8,
    flex: 1,
  },
  screenLayout: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(180, 180, 180, 1.0)',
    padding: 15,
    height: '100%',
  },
  buttonsLayout: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 0,
  },
  glassDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 2,
    marginBottom: 50,
    marginTop: 50,
    padding: 10,
    width: '100%',
  },
  normalText: {
    marginTop: 0,
    paddingVertical: 0,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
