import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import MyStyles from '../Style';
const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
const BackgroundImage = () => (
    <View style={MyStyles.container}>
        <ImageBackground source={image} resizeMode="cover" style={MyStyles.image}>
            <Text style={MyStyles.text}>Inside</Text>
        </ImageBackground>
    </View>
);
export default BackgroundImage;