import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { Paragraph, Divider, Button, Card } from 'react-native-paper'
import agregar from '../../assets/mas.png'
import pagar from '../../assets/dinero.png'


const ServiceContainer = () => {
    const styles = getStyles()
    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1, marginTop:20}}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom:10}}>
                    <Card style={styles.cardContainerBox}>
                        <Card.Content>
                        <View>
                                <Button
                                    style={styles.buttonAdd}
                                    mode="text"
                                    icon="plus-circle-outline"
                                />
                            {/* <View>
                                <Text>Formas de carga</Text>
                            </View> */}
                        </View>
                        <Divider/>
                        {/* <View style={{flex: 1, flexDirection: 'row'}}>
                            <View>
                                <Button
                                    mode="contained"
                                    icon={pagar}
                                />
                            </View>
                            <View>
                                <Text>Formas de carga</Text>
                            </View>
                        </View> */}
                        </Card.Content>
                    </Card>
                </View>
                <Divider/>
            </SafeAreaView>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        cardContainerBox: {
            width: 270,
            marginLeft: 45,
            height: 180,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#8c8c8c",
            marginBottom:1,            
        },
        buttonAdd:{
            width:1,
        }
    })
  )
  

export default ServiceContainer
