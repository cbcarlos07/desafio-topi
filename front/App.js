import React, { useEffect, useState } from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';

import { Searchbar } from 'react-native-paper';

import api from './api'


const App = () => {
  const [ searchQuery, setSearchQuery] = useState()
  const [ data, setData] = useState([])
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState('Java') ;
  useEffect(()=>{
      loadRepositories();
  },[])

  const onChangeSearch = query => {        
    setSearchTerm( query )
    setData([])
    loadRepositories()
  };

  const loadRepositories = () => {
        
    if (loading) return;
    setLoading(true)
    api
      .post( '/search', {lang: searchTerm, page } )
      .then( response =>{
        if( response.data.length > 0 ){
          console.log(response.data);
          const repositories = response.data;
          setData( data.concat( repositories ) )   
          console.log('data', data);     
          setPage( page + 1 )
          setLoading(false)

        }else{
          setData([])
        }
      })    
  }

  


  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={{width: 100, height: 100}} >
        <Image 
            source={item.owner.avatar_url} 
            style={styles.avatar}/>
      </View>
      <View style={{width: 150, height: 50,}} >
        <Text style={styles.texto}>
            <Text style={styles.title}>Name:</Text> {item.full_name}</Text>
        <Text style={styles.texto}>
            <Text style={styles.title}>Stars:</Text> {item.stargazers_count}</Text>
        <Text style={styles.texto}>
            <Text style={styles.title}>Forks:</Text> {item.forks_count}</Text>        
      </View>
       
    </View>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };
  
    return (
      <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {
        data.length > 0
        ?
        <FlatList
          style={{ marginTop: 30 }}
          contentContainerStyle={styles.list}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          onEndReached={loadRepositories}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
        : 
        <Text>Itens não encontrados</Text>

      }

      </>
    );
  
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    height: 150
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  avatar: {
    width:80,
    height:100,
    resizeMode:'contain',
    top: 2,
    borderRadius: 400/ 2
  },
  texto: {
    fontSize: 10,
    paddingLeft: 10,
    top: 2
  },
  title: {
    fontWeight: "bold"
  }
});

export default App