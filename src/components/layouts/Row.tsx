import React from 'react';
import { View, ViewStyle } from 'react-native';
interface RowProps {
  style?: ViewStyle;
  spaceBetweenCenter?: boolean;
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ style = {}, spaceBetweenCenter = false, children }) => {
  const rowStyles: ViewStyle[] = [];

  rowStyles.push({
    flexDirection: 'row',
  });
  {
    spaceBetweenCenter &&
      rowStyles.push({
        justifyContent: 'space-between',
        alignItems: 'center',
      });
  }
  rowStyles.push(style);

  return <View style={rowStyles}>{children}</View>;
}


export default Row;