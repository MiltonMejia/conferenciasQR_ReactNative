import React, { useState, useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { Icon, Picker } from 'native-base';
import axios from 'axios';

export default function StatesComponent(props)
{

    const {setState} = props;
    const [stateName, setstateName] = useState("Seleccione su Estado de procedencia");
    const [states, setStates] = useState('');

    useEffect(() => {
        getStateList(setStates)
    }, [])

    function setStateProps (value)
    {
        setState(value);
        setstateName(value);
    }

    if(states != 0 )
    {
        return(
            <Picker
                mode="dialog"
                iosHeader="Seleccione un Estado"
                headerBackButtonText = 'Regresar'
                selectedValue = {stateName}
                onValueChange = {(value) =>  setStateProps(value) }
                style = {{
                    width: "102%",
                    borderBottomColor: "#FFF",
                    borderBottomWidth: 1,
                    marginVertical: 10,
                    ...Platform.select({
                        android: {
                            color: "#FFF"
                        }
                    })
                }}
                textStyle = {{
                    color: "#FFF",
                    paddingLeft: 0,
                    paddingRight: 0
                }}
                iosIcon={<Icon name="arrow-down" style={{ color: "#FFF", fontSize: 25 }} />}
                placeholderIconColor = "#FFF"
            >
                {
                    states.map((item) => <Picker.Item value={item.id} label={item.nombre} key={item.id}/>)
                }
                <Picker.Item value="Seleccione su Estado de procedencia" label="Seleccione su Estado de procedencia" key='-1'/>
            </Picker>
        );
    } else
    {
        return(
            <Picker
                mode="dialog"
                iosHeader="Seleccione un Estado"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#FFF", fontSize: 25 }} />}
            >
            </Picker>
        )
    }

}

function getStateList(setStates)
{
    const query = `
        query {
            totalEstados{
                id
                nombre
            }
        }
    `;

    const apiURL = 'https://apiconferencias.rakoonsoftware.com.mx';

    axios.post(apiURL, {
        query: query
    })
    .then((res) => {
        let data = res.data.data.totalEstados
        setStates(data)
    })
    .catch(() => Alert.alert("No se ha podidod cargar la información requerida. Intentelo más tarde"))
        
}