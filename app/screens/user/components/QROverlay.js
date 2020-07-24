import React, { useRef } from 'react';
import { Text, Dimensions, Platform} from 'react-native';
import { Overlay, Icon, Divider} from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import { Button, View } from 'native-base';
import ViewShot from "react-native-view-shot";
import { onCapture } from '../functions/qrOptions';

export default function QROverlay (props)
{
    const {setShowSendComponent, showSendComponent, qrCode} = props;
    const captureViewRef = useRef();

    return(
        <View>
            <Overlay
                isVisible={showSendComponent}
                onBackdropPress={() => setShowSendComponent(!showSendComponent)}
                windowBackgroundColor="rgba(255, 255, 255, .5)"
                overlayStyle = {{ alignContent: "center", width: "70%"}}
            >
                <View>
                    
                    <View style={{alignItems:"center",backgroundColor: "#FFF", marginBottom: -20}}>
                        <ViewShot
                            ref={captureViewRef}
                        >
                            <View style={{padding: 40, backgroundColor: "#FFF"}}>
                                <QRCode
                                    value = {qrCode}
                                    size = {Dimensions.get('window').width * 0.5}
                                />
                            </View>
                        </ViewShot>
                    </View>
                    <Divider style={{width:"75%", height:2, alignSelf:"center"}}/>
                    <View style={{...Platform.isPad ? ({flexDirection: "row"}) : ({}), width:"75%", alignSelf:"center", marginVertical: 30, justifyContent:'space-between'}}>
                        <Button
                            iconLeft
                            rounded
                            onPress={() => {
                                onCapture("download", captureViewRef)
                            }}
                            style={{...Platform.isPad ? ({width:"45%", paddingHorizontal: 35}): ({width:"100%", paddingHorizontal: 50, marginBottom: 10})}}
                        >
                            <Icon
                                type = "material.community"
                                name = "cloud-download"
                            />
                            <Text style={{color: "#FFF"}}>Descargar</Text>
                        </Button>
                        <Button
                            iconLeft
                            rounded
                            onPress={() => {
                                onCapture("share", captureViewRef)
                            }}
                            style={{...Platform.isPad ? ({width:"45%", paddingHorizontal: 35}): ({width:"100%", paddingHorizontal: 50, marginTop: 10})}}
                        >
                            <Icon
                                type = "material.community"
                                name = "share"
                            />
                            <Text style={{color: "#FFF"}}>Compartir</Text>
                        </Button>
                    </View>
                    
                </View>
                
            </Overlay>
        </View>
    );

}