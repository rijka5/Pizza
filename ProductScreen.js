import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';
import {useNavigation} from '@react-navigation/native'

export default function ProductScreen() {
const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={{backgroundColor: '#f0f0f0', paddingBottom: 15}}>
          <View style={styles.navbar}>
            <View style={styles.whiteIconContainer}>
              <FontAwesome onPress={() => navigation.navigate('Home')} name='chevron-left' color='#E4643B' size={20} />
            </View>
            <View style={styles.whiteIconContainer}>
              <FontAwesome name='shopping-basket' color='#E4643B' size={16} />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./assets/product.png')}  style={styles.productImage} />
          </View>          
        </View>

        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>20cm</Text>
          </View>
          <View style={styles.badgeActive}>
            <Text style={styles.badgeActiveText}>30cm</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>40cm</Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between', 
          paddingHorizontal: 25, 
          paddingVertical: 15, 
          backgroundColor: '#f0f0f0'}}>
            <Text style={styles.productTitle}>Margarita</Text>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <FontAwesome name='minus' color='#e4643b' size={20} />
              <Text style={{fontSize: 20, color: '#e4643b', fontWeight:'bold', marginHorizontal: 10}}>0</Text>
              <FontAwesome name='plus' color='#e4643b' size={20} />
            </View>
          </View>
          <Text style={styles.drinksTitle}>Choose Drinks</Text>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: 25}}>
              <View style={styles.drinkContainer}>
                <Text style={styles.drinkText}>$2</Text>
                <Image source={require('./assets/coke.png')}  style={styles.drinkImage} />
              </View>
              <View style={styles.drinkContainer}>
                <Text style={styles.drinkText}>$2</Text>
                <Image source={require('./assets/cherry.png')}  style={styles.drinkImage} />
              </View>
              <View style={styles.drinkContainer}>
                <Text style={styles.drinkText}>$2</Text>
                <Image source={require('./assets/fanta.png')}  style={styles.drinkImage} />
              </View>


          </ScrollView>
      </View>

      <View style={styles.navigation}>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>$</Text>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>10</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={{color: 'white', fontWeight: 'bold', marginLeft: 5}}>Add to cart</Text>
          </View>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: 'black',
    paddingHorizontal: 20
  },
  subContainer:{
    backgroundColor: 'white',
    paddingBottom: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  navbar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10
  },
  whiteIconContainer:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center'
  },
  colorIconContainer:{
    backgroundColor: '#E4643B',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center'
  },
  productImage:{
    height: 220,
    width: 220,
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },
  badge: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 16
  },
  badgeActive: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#E4643B',
    borderRadius: 16,
    marginHorizontal: 15
  },
  badgeText: {
    color: 'grey',
    fontWeight: 'bold'
  },
  badgeActiveText: {
    color: 'white',
    fontWeight: 'bold'
  },
  drinksTitle:{
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
  },
  drinkContainer:{
    paddingHorizontal: 10,
    paddingTop:10,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: '#f0f0f0'
  },
  drinkImage:{
    height: 60,
    width: 60,
  },
  drinkText:{
    fontWeight: 'bold'
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 30
  }
})

