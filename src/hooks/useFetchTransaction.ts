import { useState, useEffect } from 'react';
import { TransactionData } from '../types';

//custom hooks to get transaction data from API
const useFetchTransactions = (initialUrl: string, initialData: TransactionData[] = []) => {
  const [listData, setListData] = useState<TransactionData[]>(initialData);
  const [defaultListData, setDefaultListData] = useState<TransactionData[]>(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(initialUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
          },
        });

        const data = await response.json();
        const objectToArray = Object.values(data) as TransactionData[];
        setListData(objectToArray);
        setDefaultListData(objectToArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [initialUrl]);

  return {
    listData,
    setListData,
    defaultListData
  };
};

export default useFetchTransactions;
