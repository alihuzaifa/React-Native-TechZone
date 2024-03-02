import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}
export default Loader
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
})