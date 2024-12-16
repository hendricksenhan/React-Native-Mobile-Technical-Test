import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Colors } from '../assets';

interface DividerProps {
    color?: string;
    size?: number;
}
const Divider: React.FC<DividerProps> = (props) => {

    const { size = 1, color = Colors.gray } = props;

    const dividerStyles: ViewStyle[] = [];

    dividerStyles.push({
        width: 'auto',
        height: size,
        backgroundColor: color,
    });

    return <View style={dividerStyles} />;
};


export default Divider;