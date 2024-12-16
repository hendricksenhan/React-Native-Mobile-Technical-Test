import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

interface IconProps {
    source: ImageSourcePropType;
    size: number;
}

const Icon: React.FC<IconProps> = ({ source, size = 8 }) => (
    <Image
        source={source}
        style={{ width: size, height: size }}
        resizeMode="contain"
    />
);

export default Icon;
