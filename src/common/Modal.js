import React, { useState } from 'react';
import { Portal, Text, Button, Provider, TextInput, Divider } from 'react-native-paper';
import { Alert, Modal, StyleSheet, TouchableHighlight, View, ScrollView, SafeAreaView } from "react-native";

const commonModal = ({ show, setIsVisible }) => {
  const styles = getStyles()
  const [visible, setVisible] = useState(false);
  const [textDestino, setTextDestino] = useState('');
  const [textMonto, setTextMonto] = useState('');
  const [textConcepto, setTextConcepto] = useState('');

  const showModal = () => setVisible(show);

  const hideModal = () => setVisible(false);

  return (
    <ScrollView>
            <SafeAreaView style={{flex: 1, marginTop:20}}>
              <View style={styles.centeredView}>
                  <Modal animationType="fade" transparent={true} visible={show}>
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Transferencia</Text>
                      <TextInput
                          label="Destino"
                          value={textDestino}
                          onChange={text => setTextDestino(text)}
                          mode="outlined"
                          placeholder="Ingrese CBU o Alias"
                      />
                      <Divider style={{marginTop:10}}/>
                      <TextInput
                          label="Monto"
                          value={textMonto}
                          onChange={text => setTextMonto(text)}
                          mode="outlined"
                          placeholder="Monto"
                          />
                      <Divider style={{marginTop:10}}/>    
                      <TextInput
                          label="Concepto"
                          value={textConcepto}
                          onChange={text => setTextConcepto(text)}
                          mode="outlined"
                          placeholder="Concepto"
                      /> 
                      <Divider style={{ marginTop:10}}/>
                      <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#780650", marginTop:15 }}
                        onPress={() => {
                          setIsVisible(!show);
                        }} 
                      >
                        <Text style={styles.textStyle}>Confirmar</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                  </Modal>
              </View>
        </SafeAreaView>
    </ScrollView>
  );
};

const getStyles = () => (
    StyleSheet.create({
        centeredView: {
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
            marginTop: 60
          },
          modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            // alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
          },
          openButton: {
            backgroundColor: "#F194FF",
            borderRadius: 20,
            padding: 10,
            elevation: 2
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            textAlign: "left",
            color:'#520339',
            fontSize:15,
            fontWeight: "bold",
          }
    })
)

export default commonModal;