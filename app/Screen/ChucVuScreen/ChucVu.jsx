import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BackNav from '../../Compoment/BackNav';
import { readChucVu } from '../../services/database';
import ItemListEmployee from '../../Compoment/ItemEmployee';

export default function ListChucVu({ navigation }) {
  const [chucVuData, setChucVuData] = useState([]);

  const handleAddChucVu = () => {
    navigation.navigate("AddChucVu"); // Correctly handle navigation
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await readChucVu();
      if (data) {
        const chucVuArray = Object.keys(data).map(key => ({
          ...data[key],
          id: key,
        }));
        setChucVuData(chucVuArray);
      }
    };

    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <BackNav 
          navigation={navigation} 
          name={"Danh sách chức vụ"} 
          soLuong={chucVuData.length} 
          btn={"Add"} 
          onAddPress={handleAddChucVu} // Pass function instead of executing it
        />
      </View>

      <FlatList
        style={{ marginTop: 20 }}
        data={chucVuData}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={() => navigation.navigate("ChucVuDetail", { chucVuId: item.id })}
          >
            <ItemListEmployee manv={item.loaichucvu} name={item.hschucvu} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});