import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DevicesBody from '../DevicesBody/DevicesBody';
import DevicesHeaders from '../DevicesHeaders/DevicesHeaders';

export default function Devices({user}) {
    return (
        <>
        <DevicesBody user = {user}/>
        </>
    )
}

const styles = StyleSheet.create({})
