import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { Divider, List, TextInput, IconButton, Avatar,Text  } from 'react-native-paper'

const ProfileContainer = () => {
    const styles = getStyles()
    const [ company, setCompany ] = useState('')
    const data = [
        {
          title: "Gasnor",
        },
        {
          title: "EDET S.A.",
        },
        {
          title: "SAT Sapem",
        },
        {
          title: "Claro",
        },
        {
          title: "Personal",
        }
      ];
    const [ dataCompany, setDataCompany ] = useState(data)
    const [ deviceCompanies, setDeviceCompanies ] = useState([])
        
    const searchCompany = term => {
        let currentCompany = dataCompany
        let resultCompanies = []

        if(term !== '' && term.length > 2) {
            resultCompanies  = currentCompany.filter(
            company => {
              const formattedCompany = company.title.toLowerCase()
              const formattedTerm = term.toLowerCase()
              return formattedCompany.includes(formattedTerm)
            }
          )
          updateList(resultCompanies, term)
        }else{
          setDataCompany(data)
        }     
      }
    
      const updateList = (newList, term) => {
        term !== '' ?
            setDataCompany(newList)
        :
            setDataCompany(deviceCompanies)
      }

    return(
        <ScrollView>
            <SafeAreaView style={{flex: 1, marginTop:20}}>
            <View style={styles.favoritesSearchbar}>
                <Avatar.Image size={180} source={require('../../assets/avatar.jpg')} />
            </View>
                <Divider/>
                <View style={styles.profile}>
                    <Text style={styles.text}>Nombre: </Text>
                    <Text style={styles.textArea}>Cristian Esteban Martinez</Text>
                    <Text style={styles.text}>Numero de Tarjeta: </Text>
                    <Text style={styles.textArea}>4444 5555 6666 7777</Text>
                    <Text style={styles.text}>CBU: </Text>
                    <Text style={styles.textArea}>4444 5555 6666 7777 8888</Text>
                    <Text style={styles.text}>Domicilio: </Text>
                    <Text style={styles.textArea}>Marcos Paz 1834</Text>
                    <Text style={styles.text}>DNI: </Text>
                    <Text style={styles.textArea}>44556677</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        favoritesSearchbar: {
            flex: 1.6,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            marginBottom:45
          },
          profile:{
            justifyContent: 'center',
            marginBottom: 40
          },
          input: {
            width: '70%',
            paddingBottom: 10,
            height: 60
          },
        text:{
          fontWeight:'bold',
          marginTop: 13,
          marginLeft: 40,
        },
        textArea:{
          fontWeight:'bold',
          marginTop: 13,
          marginLeft: 40,
          backgroundColor:'#bfbfbf',
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#8c8c8c",
          width:170,
          height:35,
          padding: 10
        },
    })
  )
  

export default ProfileContainer
