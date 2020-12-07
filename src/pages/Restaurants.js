import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {RestaurantItem} from '../components';

const Restaurants = () => {
    const [list, setList] = useState([]);

    // const fetchData= () => {
    //     axios.post(
    //         "https://worldwide-restaurants.p.rapidapi.com/search",
    //         {
    //             limit: '30',
    //             language: 'en_US',
    //             location_id: '297704',
    //             currency: 'USD'
    //         },
    //         {
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'x-rapidapi-key': 'da03f4ac24mshfdc5ea129989060p111edajsn4cecb5b0d860',  
    //                 'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com'
    //               }
    //         }
    //     ).then(response => setList(response.data.results.data))
    // }

    useEffect(()=>{
        fetchData()
    },[]);

    const renderList = ({item}) => <RestaurantItem item={item}/>

    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 25, textAlign:'center', fontWeight: 'bold'}}>Restaurants</Text>
                <FlatList
                    keyExtractor={(_,index) => index.toString()}
                    data={list}
                    renderItem={renderList}
                />
            </View>
        </SafeAreaView>
    )
}

export {Restaurants};