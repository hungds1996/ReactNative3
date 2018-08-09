import { StyleSheet } from 'react-native';

export const primary = 'skyblue';
export const primaryDark = 'steelblue';
export const primaryHighlight = 'lightblue';
export const textDefault = "black";
export const textPicked = "white";


export const masterStyles = StyleSheet.create({
    wrapper : {
        flex : 1,
    },
    bgPrimary : {
        backgroundColor : primary,
    },
    textLarge : {
        fontSize : 24,
        color : textDefault,
        paddingVertical : 10,
    },
    horizontalPadding : {
        paddingHorizontal : 5,
    },
    button: {
        backgroundColor: 'transparent'
    },
});