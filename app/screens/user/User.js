import React, { useState } from 'react';
import { View, Image, StatusBar, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Input, Item, ActionSheet, Label, Root } from 'native-base';
import { styles } from './UserStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StatesComponent from './components/StatesComponent';
import QROverlay from './components/QROverlay';
import {SendDataAPI} from './functions/sendDataAPI';

export default function User()
{
    const userTypeOptions = ["Alumno", "Invitado"];

    const [qrCode, setQRCode] = useState(null);
    const [showSendComponent, setShowSendComponent] = useState(false);
    const [formData, setFormData] = useState({

        userType: "",
        folioNumber: "",
        firstName: "",
        lastName: "",
        mLastName: "",
        email: "",
        repeatEmail: "",
        facebook: "",
        phone: "",
        state: ""

    });
    
    const setState = (stateID) =>
    {
        setFormData({...formData, state: stateID})
    }

    const sendDataOK = (isSend, qrCode) =>
    {
        setQRCode(qrCode);
        setShowSendComponent(isSend);
    }

     return(
         <Root>
             <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
             <View style={styles.imageContainer}>
                <Image
                    source = {require('../../../assets/user/user.png')}
                    resizeMode = "contain"
                    style={styles.image}
                />
            </View>

            <View style={styles.formContainer}>
                <KeyboardAwareScrollView style={styles.scrollContainer}>
                    <View style={styles.topContainer}>
                        <View style={styles.topContainer_buttonContainer}>
                            <Button
                                buttonStyle = {styles.btnUserType}
                                titleStyle = { styles.btnUserTypeText}
                                onPress={() =>
                                    ActionSheet.show(
                                    {
                                        options: userTypeOptions,
                                        title: "Seleccione el tipo de Usuario"
                                    },
                                    buttonIndex => {
                                        setFormData({...formData, userType: buttonIndex + 1})
                                    }
                                )}
                                style={styles.btnUserType}
                                title = {formData.userType === "" ? "Tipo de Usuario" : userTypeOptions[formData.userType - 1]}
                            />
                        </View >
                        <View style={styles.topContainer_folioContainer}>
                            <Item 
                                floatingLabel
                                style={styles.formInput}ç
                            >
                                <Label style={styles.inputText}>Folio</Label>
                                <Input
                                    autoCorrect = {false}
                                    style={styles.inputText}
                                    onChangeText = {(text) => setFormData({...formData, folioNumber: text})}
                                />
                            </Item>
                        </View>
                    </View>
                    
                    <Item floatingLabel style={styles.formInput}>
                        <Label style={styles.inputText}>Nombre(s)</Label>
                        <Input
                            style={styles.inputText}
                            onChangeText = {(text) => setFormData({...formData, firstName: text})}
                        />
                    </Item>

                    <View style={styles.flexContainer}>
                        <Item floatingLabel style={styles.flexContainerInputRight}>
                            <Label style={styles.inputText}>Apellido Paterno</Label>
                            <Input
                                style={styles.inputText}
                                onChangeText = {(text) => setFormData({...formData, lastName: text})}
                            />
                        </Item>
                        <Item floatingLabel style={styles.flexContainerInputLeft}>
                            <Label style={styles.inputText}>Apellido Materno</Label>
                            <Input
                                style={styles.inputText}
                                onChangeText = {(text) => setFormData({...formData, mLastName: text})}
                            />
                        </Item>
                    </View>            

                    <View style={styles.flexContainer}>
                        <Item floatingLabel style={styles.flexContainerInputRight}>
                            <Label style={styles.inputText}>Correo electrónico</Label>
                            <Input
                                style={styles.inputText}
                                onChangeText = {(text) => setFormData({...formData, email: text})}
                            />
                        </Item>
                        <Item floatingLabel style={styles.flexContainerInputLeft}>
                            <Label style={styles.inputText}>Repetir correo electrónico</Label>
                            <Input
                                style={styles.inputText}
                                onChangeText = {(text) => setFormData({...formData, repeatEmail: text})}
                            />
                        </Item>
                    </View>

                    <View style={styles.flexContainer}>
                        <Item floatingLabel style={styles.flexContainerInputRight}>
                            <Label style={styles.inputText}>Usuario de Facebook</Label>
                            <Input
                                style={styles.inputText}
                                onChangeText = {(text) => setFormData({...formData, facebook: text})}
                            />
                        </Item>
                        <Item floatingLabel style={styles.flexContainerInputLeft}>
                            <Label style={styles.inputText}>Número de teléfono</Label>
                            <Input
                                keyboardType = {'numeric'}
                                style={styles.inputText}
                                onChangeText = {(text) => setFormData({...formData, phone: text})}
                            />
                        </Item>
                    </View>

                    <StatesComponent setState={setState}/>
                    
                    <Button
                        buttonStyle = {styles.btnSend}
                        titleStyle = {styles.btnSendText}
                        onPress={() => SendDataAPI({sendDataOK, formData})}
                        title= "Enviar"
                        color = "#FFF"
                    />
                </KeyboardAwareScrollView>
                <QROverlay setShowSendComponent={setShowSendComponent} showSendComponent={showSendComponent} qrCode={qrCode}/>
            </View>
         </Root>
    );
}
