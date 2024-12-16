import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Icons } from '../assets';
import { TransactionData } from '../types';
import Column from './layouts/Column';
import Row from './layouts/Row';
import Spacer from './Spacer';
import Icon from './Icon';
import { formatBankName, formatDate, formatRupiah } from '../utils';

const StatusText = ({ status = 'PENDING' }) => {
    const isPending = status === 'PENDING';

    return (
        <Column
            style={[
                styles.statusContainer,
                { backgroundColor: isPending ? Colors.white : Colors.green, borderColor: isPending ? Colors.orange : Colors.green }
            ]}
        >
            <Text style={[styles.statusText, { color: isPending ? Colors.black : Colors.white }]}>
                {isPending ? 'Pengecekan' : 'Berhasil'}
            </Text>
        </Column>
    );
};

const Dot = () => {
    const dot_size = 6;
    return <Column style={[styles.dot, { height: dot_size, width: dot_size }]} />;
};

interface TransactionItemProps {
    data: TransactionData;
    onPress: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ data, onPress }) => {
    const isPending = data.status === 'PENDING';

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.transactionItem,
                { borderLeftColor: isPending ? Colors.orange : Colors.green }
            ]}
        >
            <Column>
                <Row style={styles.row}>
                    <Text style={styles.textBold}>{formatBankName(data.sender_bank)}</Text>
                    <Icon source={Icons.Arrow_Right_Icon} size={24} />
                    <Text style={styles.textBold}>{formatBankName(data.beneficiary_bank)}</Text>
                </Row>
                <Spacer height={2} />
                <Text style={styles.textSemiBold}>{data.beneficiary_name.toUpperCase()}</Text>
                <Spacer height={2} />
                <Row style={styles.row}>
                    <Text style={styles.textSemiBold}>{formatRupiah(data.amount)}</Text>
                    <Dot />
                    <Text style={styles.textSemiBold}>{formatDate(data.created_at)}</Text>
                </Row>
            </Column>
            <StatusText status={data.status} />
        </TouchableOpacity>
    );
};

export default TransactionItem;

const styles = StyleSheet.create({
    transactionItem: {
        backgroundColor: Colors.white,
        borderLeftWidth: 8,
        padding: 16,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    textSemiBold: {
        fontWeight: 'medium',
        fontSize: 16,
    },
    statusContainer: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
    },
    statusText: {
        fontWeight: 'bold',
    },
    dot: {
        marginHorizontal: 4,
        borderRadius: 6,
        backgroundColor: Colors.black,
    },
});
