import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';
import theme from '@/assets/stylesheets/theme';
import {ScrollView} from 'react-native-gesture-handler';
import NutritionDashboard from '@/containers/home/nutritionDashboard';
import {FONT_FAMILY} from '@/constants/fontFamily';
import NutritionAnalysis from '@/containers/home/nutritionAnalysis';
import FoodAnalysis from '@/containers/home/foodAnalysis';
import DynamicPopup from '@/components/modal/dynamicPopup';
import FavouriteFood from './favouriteFood';
let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

export const Dashboard = props => {
  const [tabIndex, setTabIndex] = useState(0);
  const RBSheetCalender = useRef(null);
  const RBSheetSelectRangePopup = useRef(null);
  const RBSheetDaysSelection = useRef(null);
  const [dashboardData, setDashboardData] = useState([
    {
      name: 'Food Quality Score',
      img: require('@/assets/images/icons/fork.png'),
      points: '70',
      percent: '20%',
      isDivide: true,
      bg: '#FCDDEC',
    },
    {
      name: 'Nutrition personal score',
      img: require('@/assets/images/icons/bowl.png'),
      points: '70',
      percent: '20%',
      isDivide: true,
      bg: '#C7D7FE',
    },
    {
      name: 'Average Gl',
      img: require('@/assets/images/icons/pizza.png'),
      points: '10',
      percent: '20%',
      isDivide: false,
      bg: '#D9D6FE',
    },
    {
      name: 'Average GL',
      img: require('@/assets/images/icons/spoon.png'),
      points: '10',
      percent: '20%',
      isDivide: true,
      bg: '#FEDF89',
    },
  ]);
  const [tabs, setTabs] = useState([
    'Nutrition Dashboard',
    'Nutrition Analysis',
    'Food quality analysis',
    'Favourite food',
    'Favourite Recepies',
  ]);
  const RenderActiveComponent = () => {
    switch (tabIndex) {
      case 0:
        return <NutritionDashboard />;
        break;
      case 1:
        return <NutritionAnalysis />;
        break;
      case 2:
        return <FoodAnalysis />;
        break;
      case 3:
        return <FavouriteFood />;
        break;
      case 4:
      return <FavouriteFood />;
      break;
    }
  };
  const renderTopCards = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: screenWidth * 0.45,
          height: 150,
          backgroundColor: item?.bg,
          margin: 5,
          marginTop: 20,
          borderRadius: 15,
          justifyContent: 'space-between',
          // padding:10
        }}>
        {/* row1 */}

        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontFamily: FONT_FAMILY?.MontserratMedium,
              fontWeight: '700',
              fontSize: 18,
              maxWidth: 120,
            }}>
            {item?.name}
          </Text>
          <Image
            source={item?.img}
            style={{
              height: 35,
              width: 35,
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* row2 */}
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontFamily: FONT_FAMILY?.MontserratBold,
              // fontWeight: '700',
              fontSize: 24,
            }}>
            {item?.points}
            <Text
              style={{
                fontFamily: FONT_FAMILY?.MontserratMedium,
                fontWeight: '500',
                fontSize: 14,
              }}>
              /100
            </Text>
          </Text>

          <View
            style={{
              display: 'flex',
              // padding:3\
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              // flexDirection: 'row',
              backgroundColor: '#ECFDF3',
              borderRadius: 20,
              // paddingHorizontal:10,
              paddingVertical: 3,
              width: 70,
            }}>
            <Image
              style={{
                height: 12,
                width: 12,
              }}
              source={require('@/assets/images/icons/arrow_up.png')}
            />

            <Text
              style={{
                fontFamily: FONT_FAMILY?.MontserratMedium,
                // fontWeight: 'bold',
                fontSize: 18,
                color: theme?.greenFont,
              }}>
              {item?.percent}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderTabs = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          // padding: 3,
          paddingVertical: 0,
          backgroundColor:
            index === tabIndex ? theme?.activeTab : theme?.lightGrey,
          margin: 3,
          borderRadius: 25,
        }}
        onPress={() => setTabIndex(index)}>
        <Text
          style={{
            padding: 8,
            fontSize: 14,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: index === tabIndex ? theme?.white : theme?.black,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} />
      {/* Top 4 container */}
      <View style={styles?.topContainer}>
        {/* heading */}
        <Text
          onPress={() => {
            props?.navigation?.navigate('MyDateRangePicker');
          }}
          style={{
            fontSize: 24,
            color: theme?.white,
            fontFamily: FONT_FAMILY?.MontserratBold,
            padding: 15,
          }}>
          Nutritions
        </Text>

        <FlatList
          data={dashboardData}
          renderItem={renderTopCards}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{alignSelf: 'center'}}
          contentContainerStyle={{
            alignSelf: 'center',
            // paddingTop:100,
            width: screenWidth,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          // RBSheetCalender?.current?.open();
          RBSheetSelectRangePopup?.current?.open();
        }}
        style={{
          width: '90%',
          height: 59,
          marginTop: 10,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: theme?.darkGrey,
          alignSelf: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                color: '#8D43A4',
                fontFamily: FONT_FAMILY?.MontserratSemiBold,
              }}>
              Select date or period
            </Text>

            <Text
              style={{
                top: 5,
                fontSize: 14,
                color: theme?.black,
                fontFamily: FONT_FAMILY?.MontserratMedium,
              }}>
              Today .
              <Text
                style={{
                  fontSize: 14,
                  color: theme?.black,
                  fontFamily: FONT_FAMILY?.MontserratLight,
                }}>
                {'  '}
                Wed, 11/1/2023
              </Text>
            </Text>
          </View>
          <Image
            style={{
              height: 12,
              width: 12,
            }}
            source={require('@/assets/images/icons/arrowDown.png')}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      {/* Tabs */}
      <View
        style={{
          paddingVertical: 8,
          borderBottomColor: theme?.border,
          borderStyle: 'solid',
          borderBottomWidth: tabIndex == 0 ? 1 : null,
        }}>
        <FlatList
          data={tabs}
          renderItem={renderTabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 20,
            marginBottom: 8,
            paddingHorizontal: 10,
            // backgroundColor:"pink"
          }}
        />
      </View>

      <DynamicPopup
        RBSheetRef={RBSheetCalender}
        type={'RenderCalenderSorting'}
        height={600}
        onPressClose={() => {
          RBSheetCalender?.current?.close();
        }}
      />

      <DynamicPopup
        RBSheetRef={RBSheetSelectRangePopup}
        type={'RenderSelectRangePopup'}
        height={400}
        onPressClose={() => {
          RBSheetSelectRangePopup?.current?.close();
        }}
        dateRange={() => {
          RBSheetSelectRangePopup?.current?.close();
            RBSheetCalender?.current?.open();

          // setTimeout(() => {
          //   RBSheetCalender?.current?.open();
          // }, 1000);
        }}
        weekRange={() => {
          RBSheetSelectRangePopup?.current?.close();

          RBSheetDaysSelection?.current?.open();
          // setTimeout(() => {
          // }, 1000);
        }}
      />

      <DynamicPopup
        RBSheetRef={RBSheetDaysSelection}
        type={'RenderDateSelection'}
        height={500}
        text={'Do you want to delete'}
        onPressClose={() => {
          RBSheetDaysSelection?.current?.close();
        }}
      />

      <RenderActiveComponent />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    width: screenWidth,
    // height: 300,
    paddingTop: 30,
    backgroundColor: theme?.topDashboard,
    // paddingBottom:25,
  },
  topHeading: {
    fontSize: 18,
    fontFamily: FONT_FAMILY?.MontserratMedium,
    // fontWeight: "bold"
  },
});
