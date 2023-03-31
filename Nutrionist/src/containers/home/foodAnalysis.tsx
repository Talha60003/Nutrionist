import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import theme from '@/assets/stylesheets/theme';
import {FONT_FAMILY} from '@/constants/fontFamily';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import DynamicPopup from '@/components/modal/dynamicPopup';

export default function FoodAnalysis() {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabs, setTabs] = useState([
    {uuid: '1', name: 'Summary'},
    {uuid: '2', name: 'Food Details'},
  ]);
  const RBSheetSorting = useRef(null);
  const [analysisData, setAnalysisData] = useState([
    {
      name: 'Liquid',
      percent: '50%',
      kcal: '400 kcal',
      color: '#D0A782',
      id: 1,
    },
    {
      name: 'Desserts',
      percent: '25%',
      kcal: '200 kcal',
      color: '#D0A782',
      id: 2,
    },
    {
      name: 'Desserts',
      percent: '25%',
      kcal: '200 kcal',
      color: '#D0A782',
      id: 3,
    },
    {
      name: 'Desserts',
      percent: '25%',
      kcal: '200 kcal',
      color: '#D0A782',
      id: 4,
    },
  ]);
  const [calories, setCalories] = useState([
    {
      name: 'Liquid',
      weight: 160,
      kal: 400,
      progress: 60,
      percent: '50%',
      bg: '#F2E4D7',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
    {
      name: 'Desserts',
      weight: 160,
      kal: 200,
      progress: 45,
      percent: '25%',
      bg: '#E1E4F9',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
    {
      name: 'Processed Food',
      weight: 160,
      kal: 160,
      progress: 30,
      percent: '20%',
      bg: '#FEE9DA',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
    {
      name: 'Plant Based Foods',
      weight: 160,
      kal: 40,
      progress: 20,
      percent: '5%',
      bg: '#DDF8F1',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#D0A782',
    },
  ]);
  const [summary, setSummary] = useState([
    {
      name: 'Raw food',
      weight: 160,
      kal: 600,
      progress: 20,
      percent: '20%',
      bg: '#E7E7FC',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#3538CD',
    },
    {
      name: 'Minimally  processed food',
      weight: 160,
      kal: 600,
      progress: 40,
      percent: '30%',
      bg: '#FCF2E9',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#DC6803',
    },
    {
      name: 'Highly processed food',
      weight: 160,
      kal: 600,
      progress: 20,
      percent: '50%',
      bg: '#F9EAE9',
      bgP: 'rgba(0, 0, 0, 0.08)',
      barColor: '#912018',
    },
  ]);
  const renderAnalysis = ({item}) => {
    return (
      <View
        style={{
          paddingHorizontal: 12,
          padding: 10,
          width: '100%',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '50%',
              // backgroundColor: 'yellow',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONT_FAMILY?.MontserratMedium,
              }}>
              {item?.name}
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
        <View style={{alignSelf: 'flex-end'}}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: FONT_FAMILY?.MontserratMedium,
              right: 3,
            }}>
            {item?.kal} kcal
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            borderBottomColor: theme?.border,
            borderStyle: 'solid',
            borderBottomWidth: 1,
          }}></View>
      </View>
    );
  };
  const renderTabs = ({item, index}) => {
    console.log('indexxxx', index);

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setTabIndex(index);

          // var filterOffers = analysisData?.filter(
          //   (itemF: any) => item?.uuid == itemF?.id,
          // );
          // console.log('filterOffers', filterOffers);

          // if (filterOffers?.length > 0) {
          //   setAnalysisData(filterOffers);
          // } else {
          //   // setAnalysisData([]);
          // }
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          //   alignSelf: 'center',
          //   paddingHorizontal: 0,
          width: '100%',
          borderRadius: 25,
        }}>
        <View
          style={{
            backgroundColor: tabIndex == index ? theme?.activeTab : null,
            // width: '80%',
            height: 35,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: tabIndex == index ? '84%' : null,
          }}>
          <Text
            style={{
              color: tabIndex == index ? theme?.white : theme.darkGrey,
              fontSize: 16,
              fontFamily: FONT_FAMILY?.MontserratMedium,
            }}>
            {item?.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderSummary = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          height: 135,
          width: 145,
          backgroundColor: item?.bg,
          borderRadius: 10,
          marginHorizontal: 5,
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            width: '100%',
            height: 60,
            display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            top: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              fontFamily: FONT_FAMILY?.MontserratSemiBold,
              color: theme?.black,
              padding: 2,
            }}>
            {item?.name}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            top: 2,
            flexDirection: 'row',
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
              left: 4,
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

        <Text
          style={{
            fontSize: 14,
            color: theme?.black,
            padding: 2,
            textAlign: 'center',
            top: 0,
            // color: theme?.black,
            fontFamily: FONT_FAMILY?.MontserratMedium,
          }}>{`${item?.kal} kcal`}</Text>

        <View
          style={{
            marginTop: 8,
            alignSelf: 'center',
          }}>
          <ProgressBarAnimated
            width={125}
            value={item?.progress}
            backgroundColorOnComplete="#6CC644"
            backgroundColor={item?.barColor}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const [foodList, setFoodList] = useState([
    {
      name: 'Pumpkin Soup',
      gram: '250g',
    },
    {
      name: 'Beef Burger',
      gram: '250g',
    },
    {
      name: 'Tomato paste',
      gram: '250g',
    },
    {
      name: 'Ice Cream',
      gram: '250g',
    },
  ]);
  const [foodScore, setFoodScore] = useState([
    {
      no: '30/100',
      gram: 'E',
      color: '#B91700',
    },
    {
      no: '30/100',
      gram: 'E',
      color: '#B91700',
    },
    {
      no: '30/100',
      gram: 'E',
      color: '#56AC96',
    },
    {
      no: '30/100',
      gram: 'E',
      color: '#B91700',
    },
  ]);
  const [gi, setGi] = useState([
    {
      no: '70',
      color: '#B91700',
    },
    {
      no: '85',
      color: '#B91700',
    },
    {
      no: '30',
      color: '#56AC96',
    },
    {
      no: '62',
      color: '#B91700',
    },
  ]);
  const [gl, setGl] = useState([
    {
      no: '14',
      color: '#DC6803',
    },
    {
      no: '37.5',
      color: '#B91700',
    },
    {
      no: '0.5',
      color: '#56AC96',
    },
    {
      no: '14.9',
      color: '#DC6803',
    },
  ]);
  const [calory, setCalory] = useState([
    {
      no: '14',
    },
    {
      no: '37.5',
    },
    {
      no: '0.5',
    },
    {
      no: '14.9',
    },
  ]);
  const [carbs, setCarbs] = useState([
    {
      no: '14',
    },
    {
      no: '37.5',
    },
    {
      no: '0.5',
    },
    {
      no: '14.9',
    },
  ]);
  const [fat, setFat] = useState([
    {
      no: '14',
    },
    {
      no: '37.5',
    },
    {
      no: '0.5',
    },
    {
      no: '14.9',
    },
  ]);
  const [protein, setProtein] = useState([
    {
      no: '14',
    },
    {
      no: '37.5',
    },
    {
      no: '0.5',
    },
    {
      no: '14.9',
    },
  ]);
  const [fiber, setFiber] = useState([
    {
      no: '14',
    },
    {
      no: '37.5',
    },
    {
      no: '0.5',
    },
    {
      no: '14.9',
    },
  ]);
  const renderFoodList = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 20,
          width: 150,
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              //   position: 'absolute',
              top: -13,
              //   height: 120,
              //   backgroundColor: 'red',
              // paddingHorizontal: 20,
            }}>
            Food List
          </Text>
        )}
        <Text
          style={{
            top: 13,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: theme?.black,
          }}>
          {item?.name}
        </Text>
        <Text
          style={{
            top: 13,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: theme?.darkGrey,
          }}>
          {item?.gram}
        </Text>
      </View>
    );
  };
  const renderFoodScore = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 20,
          top: 10,
          padding: 10,
          width: 120,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              //   position: 'absolute',
              top: -30,
              //   height: 120,
              //   backgroundColor: 'red',
              // paddingHorizontal: 20,
            }}>
            Food Score
          </Text>
        )}
        <View
          style={{
            borderColor: item?.color,
            borderWidth: 1,
            width: 70,
            height: 28,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 14,
              height: 14,
              borderRadius: 3,
              backgroundColor: item?.color,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 11.5,
                fontFamily: FONT_FAMILY?.MontserratMedium,
                color: theme?.white,
              }}>
              {item?.gram}
            </Text>
          </View>
          <Text
            style={{
              left: 3,
              fontSize: 13,
              fontFamily: FONT_FAMILY?.MontserratMedium,
              color: item?.color,
            }}>
            {item?.no}
          </Text>
        </View>
      </View>
    );
  };
  const renderGI = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 26.5,
          padding: 10,
          width: 60,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              top: -27,
            }}>
            GI
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratSemiBold,
            color: item?.color,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  const renderGl = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 26.5,
          padding: 10,
          width: 60,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              //   position: 'absolute',
              top: -27,
              //   height: 120,
              //   backgroundColor: 'red',
              // paddingHorizontal: 20,
            }}>
            GL
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratSemiBold,
            color: item?.color,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  const renderCalories = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 26.5,
          padding: 10,
          width: 122,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              //   position: 'absolute',
              top: -27,
              //   height: 120,
              //   backgroundColor: 'red',
              // paddingHorizontal: 20,
            }}>
            Calories(Kcal)
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: theme?.black,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  const renderCarbs = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 26.5,
          padding: 10,
          width: 84,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              //   position: 'absolute',
              top: -27,
              //   height: 120,
              //   backgroundColor: 'red',
              // paddingHorizontal: 20,
            }}>
            Carbs(g)
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: theme?.black,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  const renderFats = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 26.5,
          padding: 10,
          width: 122,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              //   position: 'absolute',
              top: -27,
              //   height: 120,
              //   backgroundColor: 'red',
              // paddingHorizontal: 20,
            }}>
            Fat(g)
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: theme?.black,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  const renderProtein = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 26.5,
          padding: 10,
          width: 123,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              top: -27,
            }}>
            Protein(g)
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: theme?.black,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  const renderFiber = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 26.5,
          padding: 10,
          width: 82,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              top: -27,
            }}>
            Fiber(g)
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: theme?.black,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: theme?.lightGreyColor,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          marginTop: 15,
        }}>
        <FlatList
          data={tabs}
          renderItem={renderTabs}
          scrollEnabled={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
        />
      </View>
      {tabIndex == 0 ? (
        <>
          <View
            style={{
              borderBottomColor: theme?.border,
              borderStyle: 'solid',
              borderBottomWidth: 1,
              marginTop: 20,
            }}></View>
          <View
            style={{
              paddingHorizontal: 12,
            }}>
            <FlatList
              data={summary}
              renderItem={renderSummary}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: 20,
                // backgroundColor:"pink"
              }}
            />
          </View>

          <View
            style={{
              marginTop: 10,
            }}>
            <FlatList
              data={calories}
              renderItem={renderAnalysis}
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
              width: '90%',
              backgroundColor: theme?.border,
              height: 40,
              alignSelf: 'center',
              borderRadius: 10,
              marginTop: 20,
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 15,
            }}>
            <Image
              style={{
                height: 12,
                width: 12,
              }}
              source={require('@/assets/images/icons/Icon.png')}
              resizeMode="contain"
            />
            <Text
              style={{
                left: 10,
                fontSize: 15,
                fontFamily: FONT_FAMILY?.MontserratMedium,
                color: theme?.darkGrey,
              }}>
              Search Food
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              borderBottomColor: theme?.border,
              borderStyle: 'solid',
              borderBottomWidth: 1,
              marginTop: 20,
            }}></View>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: FONT_FAMILY?.MontserratMedium,
                color: theme?.black,
              }}>
              Food details
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                RBSheetSorting?.current?.open();
              }}
              style={{
                width: 28,
                height: 28,
                borderRadius: 28 / 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: theme?.border,
              }}>
              <Image
                style={{
                  height: 15,
                  width: 15,
                }}
                source={require('@/assets/images/icons/filter.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              marginTop: 25,
            }}>
            <FlatList
              data={foodList}
              renderItem={renderFoodList}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{}}
            />

            <ScrollView
              contentContainerStyle={{paddingBottom: 150}}
              horizontal={true}
              style={{
                width: '100%',
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View style={{}}>
                <FlatList
                  data={foodScore}
                  renderItem={renderFoodScore}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={gi}
                  renderItem={renderGI}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={gl}
                  renderItem={renderGl}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={calory}
                  renderItem={renderCalories}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={carbs}
                  renderItem={renderCarbs}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={fat}
                  renderItem={renderFats}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={protein}
                  renderItem={renderProtein}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={fiber}
                  renderItem={renderFiber}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
            </ScrollView>
          </View>
        </>
      )}
      <DynamicPopup
        RBSheetRef={RBSheetSorting}
        type={'RenderSorting'}
        height={500}
        text={'Do you want to delete'}
        onPressClose={() => {
          RBSheetSorting?.current?.close();
        }}
      />
    </View>
  );
}
