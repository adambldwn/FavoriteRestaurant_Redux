import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import {useSelector} from 'react-redux';

const Favorites = () => {

    const favList = useSelector(state => state.favoriteList)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(_,index) => index.toString() }
                    data={favList}
                    renderItem={({ item }) => <Text>{item.name}</Text> }
                    ListEmptyComponent={()=> <Text>Nothing Fav...</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

export { Favorites };