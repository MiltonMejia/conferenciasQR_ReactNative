import React from 'react';
import { Image, View, StatusBar } from 'react-native';
import Waves from './../../../assets/welcome/welcome.svg';
import { styles } from './WelcomeStyle';
import { Button } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import { Input, Item, ActionSheet, Label, Root } from 'native-base';

export default function AdminLogin()
{
    const navigation = useNavigation();

    return(
        <View>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={styles.imageContainer}>
                <View style={styles.imgContainer}>
                    <Image
                        source = {require('../../../assets/admin/adminLogin.png')}
                        resizeMode = "contain"
                        style={styles.image}
                    />
                </View>
                <View style={styles.svgContainer}>
                    <Waves/>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
            </View>
        </View>
    );
}