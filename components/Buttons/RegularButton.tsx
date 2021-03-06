import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components/native";
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle
} from "react-native"

// Styles
import { colors } from "../colors";
import RegularText from "../Text/RegularText";

// types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>
    children: string
}

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`

const RegularButton: FunctionComponent<ButtonProps> = ({btnStyles, onPress, textStyles, children}) => {
    return (
        <ButtonView onPress={onPress} style={btnStyles}>
            <RegularText textStyles={textStyles}>
                {children}
            </RegularText>
        </ButtonView>
    )
}

export default RegularButton