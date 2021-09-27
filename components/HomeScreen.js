import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colours/colours';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import profImg from '../assets/images/profile.png';
Feather.loadFont();
const HomeScreen = () => {
  const renderCategoryItem = ({item}) => {
    console.log(item.image);
    return (
      <View style={[styles.categoryItemWrapper, {
        backgroundColor: item.selected ? colors.primary : colors.white,
        marginLeft:item.id==1?20:0,
      }]}>
      <Image source={item.image} style={styles.categoryItemImage}/>
      <Text style={styles.categoriesItemTitle}>
 {item.title}
      </Text>
        <View style={[styles.categorySelectWrapper, {
           backgroundColor: item.selected ? colors.white : colors.secondary,
        }]}>
          <Feather name="chevron-right" size={8} style={[styles.categorySelectIcon, {
            color:item.selected ? colors.black : colors.white,
          }]}/>
        </View>
    </View>);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image style={styles.profileImage} source={profImg} />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
      {/*title*/}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleSubtle}>Food</Text>
        <Text style={styles.titleTitle}>Delivery</Text>
      </View>
      {/*Search*/}
      
      <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={styles.search}>
      <Text style={styles.searchText}>Search</Text>
      </View>
        </View>
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
      </View>
       {/*Popular section*/}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map(item => (
            <View style={styles.popularTopWrapper}>

              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                    <MaterialCommunityIcons name="crown" size={12} color={colors.primary} />
                    <Text style={styles.popularTopText}>top of the week</Text>
                  </View>
                </View>
            </View>
           </View>))}
        </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titleSubtle: {
    fontSize:18,
    color: colors.textDark,
  },
  titleTitle: {
    fontSize:32,
    color: colors.textDark,
    marginTop:5,
  },
  searchWrapper:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    marginTop:30,
},
search:{
  flex:1,
  marginLeft:10,
  borderBottomColor:colors.textLight,
  borderBottomWidth:2,
  },
  searchText:{
    fontSize:14,
    marginBottom:5,
    color:colors.textLight,
  },
  categoriesWrapper: {
    marginTop:30,
  },
  categoriesTitle: {
    fontSize: 16,
    paddingHorizontal:20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom:20,
  },

  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 20,
    
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginLeft: 20,
    borderRadius:20,
  },
  categoriesItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    
},
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom:20,
},
  categorySelectIcon: {
    alignSelf: 'center',
    
  },
popularWrapper:{
  paddingHorizontal:20,
},
popularTitle:{
  fontSize: 16,
  },
  popularTopWrapper: {},
popularTopText: {},
});