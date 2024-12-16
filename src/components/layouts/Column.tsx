import React from 'react';
import { View, ViewStyle } from 'react-native';

interface ColumnProps {
    style?: ViewStyle;
    children?: React.ReactNode;
}
const Column: React.FC<ColumnProps> = ({ style = {}, children }) => {
    const columnStyles: ViewStyle[] = [];

    columnStyles.push({
        flexDirection: 'column'
    });
    columnStyles.push(style);

    return <View style={columnStyles}>{children}</View>;
};


export default Column;