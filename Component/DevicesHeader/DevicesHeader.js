import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DevicesBody from '../DevicesBody/DevicesBody';
import DeviceTypeCheck from '../DeviceTypeCheck/DeviceTypeCheck';

export default function DevicesHeaders({ user }) {
    const [text, onChangeText] = useState("");
    return (
        <View style={{ flexDirection: 'row', paddingTop: 40 }}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        paddingHorizontal: 30,
                        paddingRight: 30,
                        backgroundColor: "#F5F5F6"
                    }}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="type"
                        onChangeText={onChangeText}
                        value={text}
                    />
                  
                </View>
            </View>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: 70,
                    justifyContent: 'center'
                }}
            >
                <FontAwesome5 style={{ fontSize: 20 }} solid name={'search'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
