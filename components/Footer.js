import React from "react";
import { Text, View } from 'react-native';
import style from '../style/style';

export default function Footer() {
    return(
        <View style={style.footer}>
            <Text style={style.author}>
                Author: Study Group 5
            </Text>
        </View>
    )
}