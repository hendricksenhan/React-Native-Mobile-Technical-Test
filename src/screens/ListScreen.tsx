import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { API_GET_LIST_TRANSACTION } from '../services/APIConfig';
import { Colors, Icons } from '../assets';
import { Column, Icon, ModalSort, Row, Spacer, TransactionItem } from '../components';
import { useNavigation } from '@react-navigation/native';
import useFetchTransactions from '../hooks/useFetchTransaction';

function ListScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { listData, setListData, defaultListData } = useFetchTransactions(API_GET_LIST_TRANSACTION);

  const EmptyText = () => (
    <Column style={styles.emptyContainer}>
      <Text>Tidak ada data transaksi</Text>
    </Column>
  );

  const RenderItem = ({ item }) => (
    <TransactionItem
      data={item}
      onPress={() => navigation.navigate('DetailScreen', { data: item })}
    />
  );

  const filteredData = listData.filter((data) =>
    data.beneficiary_name.toLowerCase().includes(search.toLowerCase()) ||
    data.sender_bank.toLowerCase().includes(search.toLowerCase()) ||
    data.beneficiary_bank.toLowerCase().includes(search.toLowerCase()) ||
    data.amount.toString().includes(search)
  );

  return (
    <SafeAreaView style={styles.container}>
      <ModalSort
        defaultListData={defaultListData}
        value={listData}
        changeSort={setListData}
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />

      <Row style={styles.searchBar}>
        <Icon source={Icons.Search_Icon} size={24} />
        <TextInput
          placeholder="Cari nama, bank, atau nominal"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Row style={styles.sortButton}>
            <Text style={styles.sortText}>Urutkan</Text>
            <Icon source={Icons.Chevron_Down_Icon} size={24} />
          </Row>
        </TouchableOpacity>
      </Row>

      <FlatList
        style={styles.flatList}
        data={filteredData}
        ItemSeparatorComponent={() => <Spacer height={8} />}
        renderItem={RenderItem}
        ListEmptyComponent={EmptyText}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    margin: 8,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.white,
    marginRight: 8,
  },
  sortButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  sortText: {
    color: Colors.orange,
    fontWeight: 'bold',
  },
  flatList: {
    flex: 1,
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
