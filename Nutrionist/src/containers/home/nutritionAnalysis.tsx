import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import theme from '@/assets/stylesheets/theme';
import {FONT_FAMILY} from '@/constants/fontFamily';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default function NutritionAnalysis() {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabs, setTabs] = useState([
    {uuid: 1, name: 'Carbs'},
    {uuid: 2, name: 'Fat'},
    {uuid: 3, name: 'Protein'},
    {uuid: 4, name: 'Fiber'},
  ]);

  const [calories, setCalories] = useState([
    {
      name: 'Liquid',
      weight: 160,
      kal: 400,
      progress: 20,
      percent: '50%',
      bg: '#F2E4D7',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
    {
      name: 'Desserts',
      weight: 160,
      kal: 200,
      progress: 40,
      percent: '25%',
      bg: '#E1E4F9',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
    {
      name: 'Processed Foods',
      weight: 160,
      kal: 160,
      progress: 20,
      percent: '20%',
      bg: '#FEE9DA',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
    {
      name: 'Plant-based food',
      weight: 160,
      kal: 40,
      progress: 50,
      percent: '5%',
      bg: '#DDF8F1',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
  ]);
  const [calories2, setCalories2] = useState([
    {
      name: 'Fresh animal-based product',
      weight: 160,
      kal: 400,
      progress: 20,
      percent: '60%',
      bg: '#F2E4D7',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#545EAA',
    },
    {
      name: 'Processed Foods',
      weight: 160,
      kal: 200,
      progress: 40,
      percent: '20%',
      bg: '#E1E4F9',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#545EAA',
    },
    {
      name: 'Vegetables oil',
      weight: 160,
      kal: 160,
      progress: 20,
      percent: '16%',
      bg: '#FEE9DA',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#545EAA',
    },
    {
      name: 'Trans fat',
      weight: 160,
      kal: 40,
      progress: 50,
      percent: '4%',
      bg: '#DDF8F1',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#545EAA',
    },
  ]);
  // const [dataSep, setDataSep] = useState([
  //   {
  //     name: 'Liquid',
  //     percent: '50%',
  //     kcal: '400 kcal',
  //     color: '#D0A782',
  //     progress: '20%',
  //     id: 1,
  //   },

  //   {
  //     name: 'Desserts',
  //     percent: '25%',
  //     kcal: '200 kcal',
  //     color: '#D0A782',
  //     progress: '20%',
  //     id: 2,
  //   },
  //   {
  //     name: 'Farzam',
  //     percent: '25%',
  //     kcal: '200 kcal',
  //     color: '#D0A782',
  //     progress: '20%',
  //     id: 3,
  //   },
  //   {
  //     name: 'Yousuf',
  //     percent: '25%',
  //     kcal: '200 kcal',
  //     color: '#D0A782',
  //     progress: '20%',
  //     id: 4,
  //   },
  // ]);

  const renderCaloriesList = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 12,
          padding: 15,
          width: '100%',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FONT_FAMILY?.MontserratMedium,
              color: theme?.black,
              padding: 2,
            }}>
            {item?.name}
          </Text>
          <View
            style={{
              width: '15%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'green',
            }}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: FONT_FAMILY?.MontserratSemiBold,
              }}>
              {item?.percent}
            </Text>
            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 18 / 2,
                backgroundColor: '#ECFDF3',
                justifyContent: 'center',
                alignItems: 'center',
                //   alignSelf: 'center',
              }}>
              <Image
                style={{
                  height: 10,
                  width: 10,
                }}
                source={require('@/assets/images/icons/arrow_up.png')}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: theme?.black,
            padding: 2,
            alignSelf: 'flex-end',
            fontFamily: FONT_FAMILY?.MontserratMedium,
          }}>{`${item?.kal} kcal`}</Text>

        <View
          style={{
            marginTop: 8,
            alignSelf: 'center',
          }}>
          <ProgressBarAnimated
            width={365}
            value={item?.progress}
            backgroundColorOnComplete="#6CC644"
            backgroundColor={item?.barColor}
          />
        </View>
      </TouchableOpacity>
    );
  };
  // useEffect(() => {
  //   checkData();
  // }, []);

  // const checkData = () => {
  //   var filterOffers = analysisData?.filter((itemF: any) => {
  //     return 1 == itemF?.id;
  //   });
  //   setDataSep(filterOffers);
  // };
  const renderTabs = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setTabIndex(index);

          // var filterOffers = analysisData?.filter((itemF: any) => {
          //   console.log('jhhvgcvhj', item, itemF);

          //   return item?.uuid == itemF?.id;
          // });

          // console.log('filterOffers', filterOffers);

          // if (filterOffers?.length > 0) {
          //   // setAnalysisData(filterOffers);
          //   setDataSep(filterOffers);
          // } else {
          //   // setAnalysisData([]);
          //   setDataSep([]);
          // }
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 27,
          borderRadius: 25,
        }}>
        <Text
          style={{
            color: tabIndex == index ? '#3E423F' : theme.darkestBlue,
            fontSize: 16,
            fontFamily: FONT_FAMILY?.MontserratMedium,
          }}>
          {item?.name}
        </Text>
        <View
          style={{
            borderWidth: tabIndex == index ? 1 : null,
            borderColor: tabIndex == index ? '#8D43A4' : null,
            width: tabIndex == index ? '120%' : null,
          }}></View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View
        style={{
          borderBottomColor: theme?.border,
          borderStyle: 'solid',
          borderBottomWidth: 1,
          marginTop: 15,
        }}>
        <FlatList
          data={tabs}
          renderItem={renderTabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
        />
      </View>

      {tabIndex == 0 ? (
        <>
          <View
            style={{
              marginTop: 10,
            }}>
            <View
              style={{
                paddingHorizontal: 12,
                marginTop: 10,
                width: '100%',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    width: '32%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      height: 10,
                      width: 10,
                    }}
                    source={require('@/assets/images/icons/Ellipse.png')}
                    resizeMode="cover"
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: FONT_FAMILY?.MontserratMedium,
                    }}>
                    Carbs total
                  </Text>
                </View>
                <View
                  style={{
                    width: '15%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: 'green',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: FONT_FAMILY?.MontserratSemiBold,
                    }}>
                    20%
                  </Text>
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 18 / 2,
                      backgroundColor: '#ECFDF3',
                      justifyContent: 'center',
                      alignItems: 'center',
                      //   alignSelf: 'center',
                    }}>
                    <Image
                      style={{
                        height: 10,
                        width: 10,
                      }}
                      source={require('@/assets/images/icons/arrow_up.png')}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: FONT_FAMILY?.MontserratMedium,
                    right: 3,
                  }}>
                  800 kcal
                </Text>
              </View>
            </View>

            <FlatList
              data={calories}
              renderItem={renderCaloriesList}
              showsHorizontalScrollIndicator={false}
              style={{}}
              contentContainerStyle={{paddingBottom: 100}}
            />
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              marginTop: 10,
            }}>
            <View
              style={{
                paddingHorizontal: 12,
                marginTop: 10,
                width: '100%',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    width: '28%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      height: 10,
                      width: 10,
                      tintColor: '#545EAA',
                    }}
                    source={require('@/assets/images/icons/Ellipse.png')}
                    resizeMode="cover"
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: FONT_FAMILY?.MontserratMedium,
                    }}>
                    Fat total
                  </Text>
                </View>
                <View
                  style={{
                    width: '15%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: 'green',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontFamily: FONT_FAMILY?.MontserratSemiBold,
                    }}>
                    20%
                  </Text>
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 18 / 2,
                      backgroundColor: '#ECFDF3',
                      justifyContent: 'center',
                      alignItems: 'center',
                      //   alignSelf: 'center',
                    }}>
                    <Image
                      style={{
                        height: 10,
                        width: 10,
                      }}
                      source={require('@/assets/images/icons/arrow_up.png')}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: FONT_FAMILY?.MontserratMedium,
                    right: 3,
                  }}>
                  800 kcal
                </Text>
              </View>
            </View>

            <FlatList
              data={calories2}
              renderItem={renderCaloriesList}
              showsHorizontalScrollIndicator={false}
              style={{}}
              contentContainerStyle={{paddingBottom: 100}}
            />
          </View>
        </>
      )}
    </View>
  );
}
