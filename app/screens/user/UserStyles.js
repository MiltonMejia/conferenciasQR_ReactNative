import { StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    imageContainer: {
        height: "30%",
        backgroundColor: "#FFF",
    },
    image: {
        width: "100%",
        height: "100%",
        alignSelf: "center"
    },
    formContainer: {
        height: "70%",
        backgroundColor: "#0D47A1",
        paddingVertical: 50,
    },
    scrollContainer: {
        width: "80%",
        alignSelf: "center"
    },
    topContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    topContainer_buttonContainer: {
        width: "40%",
        marginRight: 25
    },
    topContainer_folioContainer: {
        width: "60%",
        marginLeft: 25
    },
    formInput: {
        marginVertical: 10
    },
    btnUserType: {
        height: 50,
        backgroundColor: "#FFF",
        justifyContent: "center",
        borderRadius: 30
    },
    btnUserTypeText: {
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
        ...Platform.isPad ? ({fontSize: RFValue(12)}) : ({fontSize: RFValue(11)}) 
    },
    inputText: {
        color: "#FFF"
    },
    btnSend: {
        width: "100%",
        height: 60,
        backgroundColor: "#FFF",
        alignSelf: "center",
        marginTop: 25,
        borderRadius: 30
    },
    btnSendText: {
        color: "#000",
        fontWeight: "bold",
        ...Platform.isPad ? ({fontSize: RFValue(12)}) : ({fontSize: RFValue(12)}) 
    },
    flexContainer: {
        ...Platform.isPad ? {
            flexDirection: "row",
            justifyContent:'space-between',
            alignItems: "center"
        } : {

        }
    },
    flexContainerInputLeft: {
        marginVertical: 10,
        ...Platform.isPad ? {
            width: "47%",
        } : {
            width: "100%"
        }
    },
    flexContainerInputRight: {
        marginVertical: 10,
        ...Platform.isPad ? {
            width: "47%",
        } : {
            width: "100%"
        }
    }
});