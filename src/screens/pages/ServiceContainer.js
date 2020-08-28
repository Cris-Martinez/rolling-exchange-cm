import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Divider, List, TextInput, IconButton } from 'react-native-paper'

const windowHeigh = Dimensions.get('screen').height

const ServiceContainer = () => {
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
            <SafeAreaView style={{flex: 1, marginTop:20,minHeight: windowHeigh}}>
            <View style={styles.favoritesSearchbar}>
                <IconButton
                            onPress={() => searchCompany(company)}
                            icon="magnify-plus-outline"
                            color="black"
                            size={35}
                />
                <TextInput
                    style={styles.input}
                    label="Buscar por empresa"
                    value={company}
                    onChangeText={company => setCompany(company)}
                />
            </View>
                <Divider/>
                {dataCompany.map(c => 
                  <List.Item
                        key={c.title}
                        title={c.title}
                        left={props => <List.Icon {...props} icon="checkbox-blank-circle" />}
                    />
                )}
            </SafeAreaView>
        </ScrollView>
    )
}

const getStyles = () => (
    StyleSheet.create({
        favoritesSearchbar: {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            marginBottom:45
          },
          input: {
            width: '70%',
            paddingBottom: 10,
            height: 60
          }
    })
  )
  

export default ServiceContainer
