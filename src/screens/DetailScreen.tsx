import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Colors, Icons } from '../assets';
import { formatBankName, formatDate, formatRupiah } from '../utils';
import { Column, Divider, Icon, Row, Spacer } from '../components';
import { useNavigation } from '@react-navigation/native';

function Detailscreen({ route }): React.JSX.Element {
    const { data } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>

            <Column style={styles.container}>

                <Row style={styles.headerRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon source={Icons.Arrow_Left_Icon} size={24} />
                    </TouchableOpacity>
                    <Spacer width={4} />
                    <Text style={styles.textSemiBoldStyle}>ID TRANSAKSI: #{data.id}</Text>
                    <Spacer width={4} />
                    <TouchableOpacity>
                        <Icon source={Icons.Copy_Icon} size={16} />
                    </TouchableOpacity>
                </Row>

                <Divider color={Colors.lightGray} />

                <Row style={styles.transactionDetailsHeader}>
                    <Text style={styles.textSemiBoldStyle}>DETAIL TRANSAKSI</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={[styles.textSemiBoldStyle, styles.closeText]}>Tutup</Text>
                    </TouchableOpacity>
                </Row>

                <Divider />

                <Column style={styles.detailsContainer}>
                    <Row style={styles.bankRow}>
                        <Text style={styles.textBoldStyle}>{formatBankName(data.sender_bank)}</Text>
                        <Icon source={Icons.Arrow_Right_Icon} size={16} />
                        <Text style={styles.textBoldStyle}>{formatBankName(data.beneficiary_bank)}</Text>
                    </Row>
                    <Spacer height={16} />

                    <Row style={styles.detailsRow}>
                        <Column style={styles.column}>
                            <Text style={styles.textSemiBoldStyle}>{data.beneficiary_name.toUpperCase()}</Text>
                            <Spacer height={4} />
                            <Text style={styles.text}>{data.account_number}</Text>
                        </Column>

                        <Column style={styles.column}>
                            <Text style={styles.textSemiBoldStyle}>NOMINAL</Text>
                            <Spacer height={4} />
                            <Text style={styles.text}>{formatRupiah(data.amount)}</Text>
                        </Column>
                    </Row>

                    <Spacer height={16} />

                    <Row style={styles.detailsRow}>
                        <Column style={styles.column}>
                            <Text style={styles.textSemiBoldStyle}>BERITA TRANSFER</Text>
                            <Text style={styles.text}>{data.remark}</Text>
                        </Column>

                        <Column style={styles.column}>
                            <Text style={styles.textSemiBoldStyle}>KODE UNIK</Text>
                            <Text style={styles.text}>{data.unique_code}</Text>
                        </Column>
                    </Row>

                    <Spacer height={16} />

                    <Column>
                        <Text style={styles.textSemiBoldStyle}>WAKTU DIBUAT</Text>
                        <Text style={styles.text}>{formatDate(data.created_at)}</Text>
                    </Column>
                </Column>

            </Column>
        </SafeAreaView>
    );
}

export default Detailscreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        backgroundColor: Colors.white,
    },
    headerRow: {
        alignItems: 'center',
        padding: 16,
    },
    textBoldStyle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    textSemiBoldStyle: {
        fontWeight: '600',
        fontSize: 16,
    },
    transactionDetailsHeader: {
        alignItems: 'center',
        padding: 16,
        justifyContent: 'space-between',
    },
    closeText: {
        color: Colors.orange,
    },
    detailsContainer: {
        padding: 16,
    },
    bankRow: {
        alignItems: 'center',
    },
    detailsRow: {
        alignItems: 'center',
    },
    column: {
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
});
