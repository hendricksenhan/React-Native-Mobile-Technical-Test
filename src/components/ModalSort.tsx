import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from './Icon'; // Assuming you have an Icon component
import Icons from './../assets/icons'; // Assuming you have an Icons enum or object
import Spacer from './Spacer'; // Importing Spacer component
import { Colors } from '../assets';
import Column from './layouts/Column';
import Row from './layouts/Row';

interface ModalSortProps {
    defaultListData: any[];
    value: any[];
    changeSort: (sortedData: any[]) => void;
    isVisible: boolean;
    onClose: () => void;
}

interface TextIconButtonProps {
    isActive: boolean;
    label: string;
    onPress: () => void;
}

const TextIconButton: React.FC<TextIconButtonProps> = ({ isActive, label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Row style={{ alignItems: 'center' }} >
                <Icon
                    source={isActive ? Icons.Radio_Button_Active_Icon : Icons.Radio_Button_Inactive_Icon}
                    size={24}
                />
                <Spacer width={8} />
                <Text style={{ fontSize: 16 }}>{label}</Text>
            </Row>
        </TouchableOpacity>
    );
};

const ModalSort: React.FC<ModalSortProps> = ({ defaultListData, value, changeSort, isVisible, onClose }) => {
    const [sortValue, setSortValue] = useState<string>("default");

    const handleSort = (type: string, compareFn: (a: any, b: any) => number) => {
        setSortValue(type);
        const sortedData = [...value].sort(compareFn);
        changeSort(sortedData);
        onClose();
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <Column style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{
                    backgroundColor: Colors.white, width: Dimensions.get('window').width - 32, paddingHorizontal: 16, paddingVertical: 40, borderRadius: 10
                }}>
                    <TextIconButton
                        label="URUTKAN"
                        isActive={sortValue === 'default'}
                        onPress={() => {
                            setSortValue("default");
                            changeSort([...defaultListData]);
                            onClose();
                        }}
                    />
                    <Spacer height={40} />
                    <TextIconButton
                        label="Nama A-Z"
                        isActive={sortValue === 'AZ'}
                        onPress={() => handleSort("AZ", (a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name))}
                    />
                    <Spacer height={40} />
                    <TextIconButton
                        label="Nama Z-A"
                        isActive={sortValue === "ZA"}
                        onPress={() => handleSort("ZA", (a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name))}
                    />
                    <Spacer height={40} />
                    <TextIconButton
                        label="Tanggal terbaru"
                        isActive={sortValue === 'dateNew'}
                        onPress={() => handleSort("dateNew", (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())}
                    />
                    <Spacer height={40} />
                    <TextIconButton
                        label="Tanggal Terlama"
                        isActive={sortValue === 'dateOld'}
                        onPress={() => handleSort("dateOld", (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())}
                    />
                </View>
            </Column>
        </Modal>
    );
};

export default ModalSort;
