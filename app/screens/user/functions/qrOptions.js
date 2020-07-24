import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { Alert} from 'react-native';
import { captureRef } from "react-native-view-shot";

export const onCapture = (option, captureViewRef)=>
{

    captureRef(captureViewRef, {
      format: 'png',
      quality: 1,
    })
    .then(async uri => {

        if(option === "download")
        {
            const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (newPermission.status === 'granted') {
                await MediaLibrary.createAssetAsync(uri)
                .then(() => {
                    Alert.alert(
                        'Código guardado',
                        'El código QR se ha guardado correctamente, revisa tu galería para verlo.',
                        [
                            {text: 'OK'},
                        ],
                        { cancelable: false }
                    )
                })
                .catch(() => {
                    Alert.alert(
                        'Error al guardar',
                        'El código QR no se ha podido guardar, verifica si has dado los permisos correspondientes.',
                        [
                            {text: 'OK'},
                        ],
                        { cancelable: false }
                    )
                })
            }
            
        }
        else if(option === "share")
        {
            Sharing.shareAsync(
                uri,
                {
                    UTI: 'public.png'
                }
            )
        }
        
    }, error => Alert.alert(
        'Error al guardar',
        'El código QR no se ha podido guardar, verifica si has dado los permisos correspondientes.',
        [
            {text: 'OK'},
        ],
        { cancelable: false }
    ));

}