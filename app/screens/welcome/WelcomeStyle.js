import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({

    imageContainer: {
        height: "60%",
        backgroundColor: "#FFF",
    },
    imgContainer: {
        height: "70%",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        marginTop: "10%",
        alignSelf: "center"
    },
    svgContainer : {
        width: "100%",
        height: "48%",
    },
    buttonsContainer:{
        height: "40%",
        backgroundColor: "#0D47A1",
        justifyContent: "center"
    },
    button: {
        width: "70%",
        backgroundColor: "#FFF",
        alignSelf: "center",
        height: 70,
        marginVertical: 20
    },
    buttonText: {
        color: "#000",
        fontWeight: "600",
        ...Platform.isPad ? ({fontSize: RFValue(14)}) : ({fontSize: RFValue(11)}) 
    }

});