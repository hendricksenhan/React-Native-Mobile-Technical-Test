import React from 'react';
import { View, ViewStyle } from 'react-native';

interface SpacerProps {
    height?: number;
    width?: number;
}
const Spacer: React.FC<SpacerProps> = (props) => {

    const { height, width } = props;

    const spacerStyles: ViewStyle[] = [];

    spacerStyles.push({
        height, width,
    });

    return <View style={spacerStyles} />;
};


export default Spacer;