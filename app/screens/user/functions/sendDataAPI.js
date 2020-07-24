import axios from 'axios';
import { Alert } from 'react-native';

export const SendDataAPI = (props) =>
{
    const {sendDataOK, formData} = props;
    const {
        userType,
        folioNumber,
        firstName,
        lastName,
        mLastName,
        email,
        facebook,
        phone,
        state
    } = formData;
    var param = 'folio:"'+folioNumber+'",nombre:"'+firstName+'",apellidoPaterno:"'+lastName+'",apellidoMaterno:"'+mLastName+'",estado:'+state+',correo:"'+email+'",telefono:"'+phone+'",facebook:"'+facebook+'",tipoAsistente:'+userType ;
    var query = "mutation{crearAsistente("+param+"){ nombre }}";
    var apiURL = 'https://apiconferencias.rakoonsoftware.com.mx';

    axios.post(apiURL, {
        query: query,
        variables: {
            folioNumber : {folioNumber},
            firstName : {firstName},
            lastName : {lastName},
            mLastName : {mLastName},
            state : {state},
            email : {email},
            phone : {phone},
            facebook : {facebook},
            userType : {userType}
        }
    })
    .then((res) => {
        typeof res.headers.token !== 'undefined' ? sendDataOK(true, res.headers.token) : 
        Alert.alert(
            'Error',
            res.data.errors[0].message,
            [
                {text: 'OK'},
            ],
            { cancelable: false }
        )
    })
    .catch(() => {
        Alert.alert(
            'Error al enviar',
            'La información no pudo ser procesada, intente más tarde.',
            [
                {text: 'OK'},
            ],
            { cancelable: false }
        )
    })
}