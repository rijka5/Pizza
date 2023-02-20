import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome} from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();

  const categories = ['Pepperoni', 'Olive', 'Tune', 'Margaritta', 'Salsice'];

  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.subContainer}>
            <View style={styles.headerContainer}>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text>
                            Hello Ivan Petrov
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        <ScrollView horizontal>
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>
                    Popular Pizza:
                </Text>
            </View>
            {categories.map((value)=>{
                return (
                    <View style={styles.categoryContainer} key={value}>
                        <Text style={styles.categoryText}>
                            {value}
                        </Text>
                    </View>
                )
            })}
        </ScrollView>
        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Product')}>
            <Image style={styles.productImg} source={require('./assets/product.png')}></Image>
            <Text style={styles.cardTitle}>Special Pizza</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:10}}>
                <Text>Tomato</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.priceSymbol}>$</Text>
                    <Text style={styles.priceText}>8</Text>
                </View>
                <FontAwesome name='heart' style={styles.hearticon} color='white' size={18} />
            </View>
        </TouchableOpacity>

        <View style={styles.nearContainer}>
            <View>
                <Text style={styles.nearTitle}>Near you</Text>
                <Text style={styles.nearCount}>10+</Text>
            </View>
            <Text style={styles.viewAll}>View All</Text>
        </View>

        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.restaurantsContainer}
        >
            <View style={styles.restaurants}>
                <Image style={styles.restaurantImg} source={require('./assets/pizza.jpg')}></Image>
                <View>
                    <Text>Francos</Text>
                    <FontAwesome name='star' style={{marginRight: 3}} color='black'size={18}></FontAwesome>
                </View>
            </View>
            <View style={styles.restaurants}>
                <Image style={styles.restaurantImg} source={require('./assets/pizza.jpg')}></Image>
                <View>
                    <Text>Francos</Text>
                    <FontAwesome name='star' style={{marginRight: 3}} color='black'size={18}></FontAwesome>
                </View>
            </View>
            <View style={styles.restaurants}>
                <Image style={styles.restaurantImg} source={require('./assets/pizza.jpg')}></Image>
                <View>
                    <Text>Francos</Text>
                    <FontAwesome name='star' style={{marginRight: 3}} color='black'size={18}></FontAwesome>
                </View>
            </View>
        </ScrollView>

        <View style={styles.navigation}>
            <View style={{flexDirection: 'row', flex: 1.2}}>
                <View style={{alignItems: 'center', flex: 1}}>
                    <FontAwesome name='home' size={30} color='#f0f0f0'></FontAwesome>
                </View>
                <View style={{alignItems: 'center', flex: 1}}>
                    <FontAwesome name='map-marker' size={30} color='#f0f0f0'></FontAwesome>
                </View>
                <View style={{alignItems: 'center', flex: 1}}>
                    <FontAwesome name='user' size={30} color='#f0f0f0'></FontAwesome>
                </View>
            </View>
        </View>


    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#cccccc'
    },
    subContainer:{
    backgroundColor: '#909090',
    paddingTop: 10,
    paddingBottom: 20,       
    },
    categoryContainer:{
        paddingHorizontal: 10     
    },
    categoryText:{
        fontSize: 18
    },
    card:{
        width:160,
        backgroundColor: '#f0f0f0',
        paddingBottom:15,
        paddingTop: 85,
        paddingHorizontal: 15,
        overflow: 'visible',
        zIndex:10,
        marginTop:50,
        marginLeft:20,
        borderRadius:10
    },
    productImg:{
        height: 110,
        width: 110,
        position: 'absolute',
        left: 25,
        top: 0
    },
    cardTitle: {
        fontSize: 18,
        marginTop: 30,
        fontWeight: 'bold'
    },
    nearContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginVertical: 15
    },
    nearTitle: {
        fontWeight: 'bold'
    },
    viewAll: {
        fontWeight: 'bold'
    },
    restaurantsContainer:{
        marginLeft: 25
    },
    restaurants: {
        padding: 15,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center'
    },
    restaurantImg:{
        height: 50,
        width: 50,
        marginRight: 10
    },
    navigation:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: 'black'
    }

})
