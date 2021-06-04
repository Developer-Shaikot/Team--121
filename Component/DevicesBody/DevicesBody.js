import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";

export default function DevicesBody({ user }) {
    const { name, type, photo1, photo2, price, keyFeatures, description } = user;
    const scrollX = new Animated.Value(0);
    const [device, setDevice] = React.useState(null);
    console.log(user);
    return (
        <View 
        style={{ alignItems: 'center' }}>
            <View 
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 20,
                paddingHorizontal: 30
            }}>
                <Image source={photo1}
             resizeMode="contain"
             style={{
                 width: 200,
                 height: 200,
            }} />
             <Image source={photo2}
             resizeMode="contain"
             style={{
                width: 200,
                height: 200,
            }} />
            </View>
            <View 
                resizeMode="contain"
                style={{
                width: "40%",
                marginBottom:30
            }}>
            <Text style={{fontWeight :"bold"}}>Key features:</Text>
            <Text >{keyFeatures}</Text>
            </View>
            <View 
                resizeMode="contain"
                style={{
                width: "40%",
                marginBottom:50
            }}>
            <Text>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
