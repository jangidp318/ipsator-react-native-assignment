import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const LanguageButton = ({ buttons, doSomethingAfterClick }) => {
    const [clickedId, setCLickedId] = useState(0)


    const handleClick = (item,id)=>{
        setCLickedId(id)
        doSomethingAfterClick(id, clickedId)
    }

    

    return (
        <View style={styles.container}>
            {
                buttons.map((buttonLabel, index) => {
                    return (
                        <TouchableOpacity 
                            onPress={(item) => handleClick(item,index)}
                            key={[index]}
                            style={[
                                index === clickedId ? styles.buttonActive : styles.button,
                            ]}
                            >
                            {
                                index === clickedId? <MaterialIcons name="done" size={24} color="black" />:null
                            }
                            <Text
                                style={index === clickedId ? styles.textActive : styles.text}
                                >
                                {buttonLabel}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    button: {
        flex: 1,
        flexDirection:'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor:'#e0e0e0',
        margin: 10,
    },
    text:{
        color:'black'
    },
    buttonActive:{
        flex: 1,
        flexDirection:'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor:'#ffe5cc',
        margin: 10,
        
    },
    textActive:{
        color:'#ff8c00',
        fontSize:20,
    }
});