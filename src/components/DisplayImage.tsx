import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const DisplayAnImage = () => {
    return (
        <View style={styles.container}>
            {/* By Download */}
            <Image
                style={styles.tinyLogo}
                source={require('../assets/car.jpg')}
            />
            {/* By Url */}
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    );
};

export default DisplayAnImage;