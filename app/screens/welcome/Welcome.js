import React from 'react';
import { Image, View, StatusBar } from 'react-native';
import Waves from './../../../assets/welcome/welcome.svg';
import { styles } from './WelcomeStyle';
import { Button } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default function Welcome()
{
    const navigation = useNavigation();

    return(
        <View>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={styles.imageContainer}>
                <View style={styles.imgContainer}>
                    <Image
                        source = {require('../../../assets/welcome/welcome.png')}
                        resizeMode = "contain"
                        style={styles.image}
                    />
                </View>
                <View style={styles.svgContainer}>
                    <Waves/>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    buttonStyle = {styles.button}
                    titleStyle = {styles.buttonText}
                    onPress={() => navigation.navigate('User')}
                    style={styles.btnUserType}
                    title = {"Registrarse como Usuario"}
                />
                <Button
                    borderRadius = {30}
                    buttonStyle = {styles.button}
                    titleStyle = {styles.buttonText}
                    onPress={() => navigation.navigate('AdminLogin')}
                    style={styles.btnUserType}
                    title = {"Entrar como Administrador"}
                />
            </View>
        </View>
    );
}