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

export default function FavouriteFood() {
  const [tabIndex, setTabIndex] = useState(0);
  const [foodTabIndex, setFoodTabIndex] = useState(0);
  const RBSheetListOfFood = useRef(null);
  const [tabs, setTabs] = useState([
    {uuid: '1', name: 'Per Categories'},
    {uuid: '2', name: 'Total list'},
  ]);
  const [foodTabs, setFoodTabs] = useState([
    {uuid: 1, name: 'All'},
    {uuid: 2, name: 'Vegetables'},
    {uuid: 3, name: 'Fruits'},
  ]);
  const renderTabs = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setTabIndex(index);
        }}
        style={{
          // backgroundColor: 'red',
          // justifyContent: 'center',
          // alignItems: 'center',
          // alignSelf: 'center',
          // width: '100%',
          // borderRadius: 25,

          paddingVertical: 0,
          backgroundColor: index === tabIndex ? theme?.activeTab : theme?.lightGrey,
          margin: 3,
          borderRadius: 25,
        }}>
        <View
          style={{
            // backgroundColor: tabIndex == index ? theme?.activeTab : null,
            // height: 35,
            // borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            // width: tabIndex == index ? '84%' : null,
            padding: 8,
            fontSize: 14,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: index === tabIndex ? theme?.white : theme?.black,
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
  const renderFoodTabs = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setFoodTabIndex(index);
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 30,
          borderRadius: 25,
        }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{
              color: foodTabIndex == index ? '#3E423F' : theme.darkestBlue,
              bottom: 6,
              fontSize: 16,
              fontFamily: FONT_FAMILY?.MontserratMedium,
            }}>
            {item?.name}
          </Text>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 20 / 2,
              justifyContent: 'center',
              alignItems: 'center',
              bottom: 7,
              backgroundColor:
                foodTabIndex == index ? theme?.activeTab : theme?.border,
              left: 8,
            }}>
            <Text
              style={{
                fontSize: 10,
                fontFamily: FONT_FAMILY?.MontserratMedium,
                color: foodTabIndex == index ? theme?.white : theme?.black,
              }}>
              {foodTabIndex == 1 ? 2 : 1}
            </Text>
          </View>
        </View>

        <View
          style={{
            borderWidth: foodTabIndex == index ? 1 : null,
            borderColor: foodTabIndex == index ? '#8D43A4' : null,
            width: foodTabIndex == index ? '110%' : null,
          }}></View>
      </TouchableOpacity>
    );
  };
  const [foodList2, setFoodList2] = useState([
    {
      name: 'Soda',
      gram: 'Soda & Soft Drinks',
    },
    {
      name: 'Coffee',
      gram: 'Coffee',
    },
    {
      name: 'Potato Chips',
      gram: 'Snacks',
    },
    {
      name: 'Burger',
      gram: 'Meat & Fish',
    },
  ]);
  const [foodList, setFoodList] = useState([
    {
      name: 'Brocolli',
    },
    {
      name: 'Carrots',
    },
  ]);
  const [foodListFruits, setFruits] = useState([
    {
      name: 'Apple',
    },
    {
      name: 'Watermelon',
    },
    {
      name: 'Orange',
    },
  ]);
  const [foodScore, setFoodScore] = useState([
    {
      no: '90/100',
      gram: 'B',
      color: '#56AC96',
    },
    {
      no: '90/100',
      gram: 'B',
      color: '#56AC96',
    },
  ]);
  const [foodScore2, setFoodScore2] = useState([
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
      no: '8x',
      color: '#B91700',
    },
    {
      no: '6x',
      color: '#B91700',
    },
  ]);
  const [gi2, setGi2] = useState([
    {
      no: '8x',
      color: '#B91700',
    },
    {
      no: '6x',
      color: '#B91700',
    },
    {
      no: '5x',
      color: '#56AC96',
    },
    {
      no: '5x',
      color: '#B91700',
    },
  ]);
  const [gl, setGl] = useState([
    {
      no: '200 gr',
      color: '#DC6803',
    },
    {
      no: '50 gr',
      color: '#B91700',
    },
  ]);
  const [gl2, setGl2] = useState([
    {
      no: '200 g',
      color: '#DC6803',
    },
    {
      no: '100 g',
      color: '#B91700',
    },
    {
      no: '100 g',
      color: '#56AC96',
    },
    {
      no: '200 g',
      color: '#DC6803',
    },
  ]);
  const [foodScoreFruits, setFoodScoreFruits] = useState([
    {
      no: '90/100',
      gram: 'B',
      color: '#56AC96',
    },
    {
      no: '90/100',
      gram: 'B',
      color: '#56AC96',
    },
    {
      no: '90/100',
      gram: 'B',
      color: '#56AC96',
    },
  ]);
  const [giFruits, setGiFruits] = useState([
    {
      no: '8x',
      color: '#B91700',
    },
    {
      no: '6x',
      color: '#B91700',
    },
    {
      no: '6x',
      color: '#B91700',
    },
  ]);
  const [glFruits, setGlFruits] = useState([
    {
      no: '200 gr',
      color: '#DC6803',
    },
    {
      no: '50 gr',
      color: '#B91700',
    },
    {
      no: '50 gr',
      color: '#B91700',
    },
  ]);

  const renderFoodList = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          paddingVertical: 20,
          width: 150,
        }}>
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
  const renderFoodList2 = ({item, index}) => {
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
          numberOfLines={2}
          ellipsizeMode={'tail'}
          style={{
            width: 100,
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
          top: 5,
          padding: 10,
          width: 120,
          alignItems: 'center',
        }}>
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
  const renderFoodScore2 = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 25,
          top: 13,
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
          width: 40,
          alignItems: 'center',
        }}>
        <Text
          style={{
            top: 5,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratRegular,
            color: item?.black,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  const renderGI2 = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 32,
          padding: 10,
          width: 110,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              top: -24,
            }}>
            Frequency
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratRegular,
            color: theme?.black,
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
          width: 95,
          alignItems: 'center',
        }}>
        <Text
          style={{
            top: 5,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratRegular,
            color: item?.black,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };
  const renderGl2 = ({item, index}) => {
    return (
      <View
        style={{
          //   backgroundColor: 'red',
          flexDirection: 'column',
          paddingVertical: 32,
          padding: 10,
          width: 100,
          alignItems: 'center',
        }}>
        {index == 0 && (
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONT_FAMILY?.MontserratRegular,
              color: theme?.black,
              //   position: 'absolute',
              top: -24,
              //   height: 120,
              //   backgroundColor: 'red',
              // paddingHorizontal: 20,
            }}>
            7 days qty
          </Text>
        )}
        <Text
          style={{
            top: 10,
            fontSize: 13,
            fontFamily: FONT_FAMILY?.MontserratRegular,
            color: theme?.black,
          }}>
          {item?.no}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 150}}>
      <View
        style={{
          backgroundColor: theme?.border,
          width: '88%',
          height: 40,
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 18,
        }}></View>
      <View
        style={{
          marginTop: 16,
        }}>
        <FlatList
          style={{width: '96%', alignSelf: 'center'}}
          data={tabs}
          renderItem={renderTabs}
          // scrollEnabled={false}
          horizontal={true}
          // showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{
          //   alignItems: 'center',
          // }}
        />
      </View>

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

      {tabIndex == 0 ? (
        <>
          <View
            style={{
              borderBottomColor: theme?.border,
              borderStyle: 'solid',
              borderBottomWidth: 1,
              marginTop: 28,
            }}>
            <FlatList
              data={foodTabs}
              renderItem={renderFoodTabs}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{}}
            />
          </View>
          {foodTabIndex == 0 ? (
            <>
              <View>
                <View
                  style={{
                    width: '45%',
                    paddingHorizontal: 20,
                    marginTop: 17,
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
                    Vegetables
                  </Text>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 20 / 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: theme?.border,
                      top: 2,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: FONT_FAMILY?.MontserratMedium,
                        color: theme?.black,
                      }}>
                      1
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    marginTop: 10,
                    borderBottomWidth: 2,
                    borderBottomColor: theme?.border,
                  }}>
                  <FlatList
                    data={foodList}
                    renderItem={renderFoodList2}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                  />

                  <ScrollView
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
                  </ScrollView>
                </View>
              </View>

              <View>
                <View
                  style={{
                    width: '33%',
                    paddingHorizontal: 20,
                    marginTop: 17,
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
                    Fruits
                  </Text>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 20 / 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: theme?.border,
                      top: 2,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: FONT_FAMILY?.MontserratMedium,
                        color: theme?.black,
                      }}>
                      1
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    marginTop: 10,
                    borderBottomWidth: 2,
                    borderBottomColor: theme?.border,
                  }}>
                  <FlatList
                    data={foodListFruits}
                    renderItem={renderFoodList}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                  />

                  <ScrollView
                    horizontal={true}
                    style={{
                      width: '100%',
                      alignSelf: 'center',
                      flexDirection: 'row',
                    }}>
                    <View style={{}}>
                      <FlatList
                        data={foodScoreFruits}
                        renderItem={renderFoodScore}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{}}
                      />
                    </View>
                    <View style={{}}>
                      <FlatList
                        data={giFruits}
                        renderItem={renderGI}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{}}
                      />
                    </View>
                    <View style={{}}>
                      <FlatList
                        data={glFruits}
                        renderItem={renderGl}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{}}
                      />
                    </View>
                  </ScrollView>
                </View>
              </View>
            </>
          ) : (
            <View>
              <View
                style={{
                  width: '45%',
                  paddingHorizontal: 20,
                  marginTop: 17,
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
                  Vegetables
                </Text>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20 / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme?.border,
                    top: 2,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: FONT_FAMILY?.MontserratMedium,
                      color: theme?.black,
                    }}>
                    1
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  marginTop: 10,
                  borderBottomWidth: 2,
                  borderBottomColor: theme?.border,
                }}>
                <FlatList
                  data={foodList}
                  renderItem={renderFoodList2}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />

                <ScrollView
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
                </ScrollView>
              </View>
            </View>
            // <View>
            //   <View
            //     style={{
            //       width: '33%',
            //       paddingHorizontal: 20,
            //       marginTop: 17,
            //       flexDirection: 'row',
            //       justifyContent: 'space-between',
            //       alignItems: 'center',
            //     }}>
            //     <Text
            //       style={{
            //         fontSize: 18,
            //         fontFamily: FONT_FAMILY?.MontserratMedium,
            //         color: theme?.black,
            //       }}>
            //       Fruits
            //     </Text>
            //     <View
            //       style={{
            //         width: 20,
            //         height: 20,
            //         borderRadius: 20 / 2,
            //         justifyContent: 'center',
            //         alignItems: 'center',
            //         backgroundColor: theme?.border,
            //         top: 2,
            //       }}>
            //       <Text
            //         style={{
            //           fontSize: 10,
            //           fontFamily: FONT_FAMILY?.MontserratMedium,
            //           color: theme?.black,
            //         }}>
            //         1
            //       </Text>
            //     </View>
            //   </View>

            //   <View
            //     style={{
            //       flexDirection: 'row',
            //       paddingHorizontal: 20,
            //       marginTop: 10,
            //       borderBottomWidth: 2,
            //       borderBottomColor: theme?.border,
            //     }}>
            //     <FlatList
            //       data={foodListFruits}
            //       renderItem={renderFoodList}
            //       scrollEnabled={false}
            //       showsHorizontalScrollIndicator={false}
            //       contentContainerStyle={{}}
            //     />

            //     <ScrollView
            //       horizontal={true}
            //       style={{
            //         width: '100%',
            //         alignSelf: 'center',
            //         flexDirection: 'row',
            //       }}>
            //       <View style={{}}>
            //         <FlatList
            //           data={foodScoreFruits}
            //           renderItem={renderFoodScore}
            //           scrollEnabled={false}
            //           showsHorizontalScrollIndicator={false}
            //           contentContainerStyle={{}}
            //         />
            //       </View>
            //       <View style={{}}>
            //         <FlatList
            //           data={giFruits}
            //           renderItem={renderGI}
            //           scrollEnabled={false}
            //           showsHorizontalScrollIndicator={false}
            //           contentContainerStyle={{}}
            //         />
            //       </View>
            //       <View style={{}}>
            //         <FlatList
            //           data={glFruits}
            //           renderItem={renderGl}
            //           scrollEnabled={false}
            //           showsHorizontalScrollIndicator={false}
            //           contentContainerStyle={{}}
            //         />
            //       </View>
            //     </ScrollView>
            //   </View>
            // </View>
          )}
        </>
      ) : (
        <>
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
              List of Food
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                RBSheetListOfFood?.current?.open();
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
              data={foodList2}
              renderItem={renderFoodList2}
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
                  data={foodScore2}
                  renderItem={renderFoodScore2}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={gi2}
                  renderItem={renderGI2}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={gl2}
                  renderItem={renderGl2}
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
        RBSheetRef={RBSheetListOfFood}
        type={'RenderListFood'}
        height={500}
        text={'Do you want to delete'}
        onPressClose={() => {
          RBSheetListOfFood?.current?.close();
        }}
      />
    </ScrollView>
  );
}