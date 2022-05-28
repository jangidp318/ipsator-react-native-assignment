import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView,TouchableOpacity } from 'react-native';

import { LanguageButton } from "./LanguageButton";




export default function GroupBooking() {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [pnr, setPnr] = useState('')
    const [msg, setMsg] = useState('')
    const [Language, setLanguage] = useState('')

    const changeLanguage = (id, clickedId) => {
        id === clickedId? setLanguage('English'):setLanguage('Hindi')
        
    }

    const onSubmit = () =>{
        console.log('****************************************')
        console.log('Name: ',name)
        console.log('Mobile: ',mobile)
        console.log('Email: ',email )
        console.log('PNR: ',pnr)
        console.log('Message: ',msg)
        console.log('Language: ',Language)
        console.log('****************************************')

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Group Booking Form</Text>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.KeyboardAvoidingViewcontainer}
            >
                <ScrollView>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            onChangeText={(val)=>setName(val)}
                            placeholder="Full Name"
                            maxLength={50}
                        />

                        <Text style={styles.label}>Mobile Number</Text>
                        <TextInput
                            style={styles.inputBox}
                            keyboardType={'phone-pad'}
                            maxLength={10}
                            placeholder="Mobile Number"
                            onChangeText={(val)=>setMobile(val)}
                        />

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.inputBox}
                            textContentType={"emailAddress"}
                            placeholder="Email Address"
                            onChangeText={(val)=>setEmail(val)}
                        />

                        <Text style={styles.label}>PNR</Text>
                        <TextInput
                            style={styles.inputBox}
                            maxLength={10}
                            placeholder="PNR Number"
                            onChangeText={(val)=>setPnr(val)}
                        />
                        <Text style={styles.label}>Message</Text>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Tell us about type of food you are looking for (eg. Thali, Biryani etc) and whether you need breakfast lunch or dinner."
                            numberOfLines={100}
                            multiline={true}
                            onChangeText={(val)=>setMsg(val)}
                        />

                        <LanguageButton
                            buttons={['English', 'Hindi']}
                            doSomethingAfterClick={changeLanguage}
                        />

                        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
                            <Text>Submit</Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1
    },
    KeyboardAvoidingViewcontainer: {
        flex: 1
    },
    inputContainer: {
        margin: 15
    },
    inputBox: {
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        fontSize: 20,
        marginVertical: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        margin: 10,
        fontSize: 26,
        color: "#ff8c00",
        fontWeight: 'bold',

    },
    label: {
        fontSize: 20,
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        padding: 10,
        paddingTop: 10,
        marginVertical: 10,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    checkBoxlabel: {
        margin: 8,
    },
    submitButton:{
        backgroundColor: "#ff8c00",
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius:5,
    }

});