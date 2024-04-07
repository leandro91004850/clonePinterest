import { theme } from '@/theme'
import { fontFamily } from '@/theme/fontFamily'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Profile() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.black
    },
    
    text: {
        fontSize: 20,
        color: theme.colors.white,
        fontFamily: fontFamily.bold
    }

})