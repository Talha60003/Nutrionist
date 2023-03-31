import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
  ScrollView,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import theme from '@/assets/stylesheets/theme';
import Theme from '@/assets/stylesheets/theme';
import {FONT_FAMILY} from '@/constants/fontFamily';
import {LinearGradientButton} from '../buttons/linearGradientButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SubmitButton} from '../buttons/submitButton';
import moment from 'moment';
import DateRangePicker from 'rnv-date-range-picker';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);
interface Props {
  dragable?: any | null;
  RBSheetRef: any | null;
  type: any | null;
  height: any | null;
  onMainClose?: any | null;
  text?: any | null;
  onPressClose?: any | null;
  keyboardAvoidingViewEnabled?: any | null;
  dateRange?: any | null;
  weekRange?: any | null;
  // rangeFirst: any | null;
  // rangeLast: any | null;
}

const DynamicPopup = (props: Props) => {
  const {
    dragable,
    RBSheetRef,
    onPressClose,
    type,
    height,
    keyboardAvoidingViewEnabled,
    onMainClose,
    dateRange,
    weekRange,
    text,
  } = props;
  const RenderCalenderSorting = () => {
    const [selectedRange, setRange] = useState({});
    return (
      <ScrollView
        style={{paddingHorizontal: 10}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text></Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: FONT_FAMILY?.MontserratSemiBold,
              textAlign: 'center',
              color: '#8D43A4',
              left: 16,
            }}>
            Choose Range
          </Text>
          <TouchableOpacity onPress={onPressClose}>
            <Image
              source={require('@/assets/images/icons/close.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: theme?.activeTab,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{margin: 20}}>
          <DateRangePicker
            // blockSingleDateSelection={true}
            onSelectDateRange={range => {
              setRange(range);
            }}
            responseFormat="DD/MM/YYYY"
            maxDate={moment().date}
            minDate={moment().subtract(100, 'days')}
            selectedDateContainerStyle={{backgroundColor: 'red'}}
            selectedDateStyle={{backgroundColor: 'red'}}
          />

          <View style={{margin: 10, alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: FONT_FAMILY?.MontserratSemiBold,
              }}>
              Start Date:
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: FONT_FAMILY?.MontserratSemiBold,
                  color: '#8D43A4',
                }}>
                {'  '}
                {selectedRange.firstDate}
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: FONT_FAMILY?.MontserratSemiBold,
                color: theme?.black,
              }}>
              End date:
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: FONT_FAMILY?.MontserratSemiBold,
                  color: '#8D43A4',
                }}>
                {'  '}
                {selectedRange.secondDate}
              </Text>
            </Text>
          </View>
        </View>
        <SubmitButton
          btnContainer={{
            width: '90%',
            borderRadius: 10,
            backgroundColor: theme?.activeTab,
            height: 54,
            justifyContent: 'center',

            alignSelf: 'center',
          }}
          disabled={false}
          onPress={onPressClose}
          btnTextStyle={{
            color: theme.white,
            alignSelf: 'center',
            fontSize: 14,
            fontFamily: FONT_FAMILY.MontserratSemiBold,
            textTransform: 'uppercase',
          }}
          btnText={'Done'}
          arrowImage={true}
          custom={null}
          arrowImageleft={null}
          arrowImageright={true}
          darkbutton={null}
          leftImageStyle={null}
          leftimagesource={null}
          rightImageStyle={null}
        />
      </ScrollView>
    );
  };

  const RenderSelectRangePopup = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [dateModal,setDateModal]=React.useState(false);
    const [modalExecuted, setModalExecuted] = useState(0);
    const [tabs, setTabs] = useState([
      {uuid: '1', name: 'By period'},
      {uuid: '2', name: 'By date'},
      {uuid: '3', name: ''},
    ]);
    const [days, setDays] = useState([
      {
        day: '1 week',
      },
      // {
      //   day: '1 weeks',
      // },
      {
        day: '2 weeks',
      },
      {
        day: '3 weeks',
      },
      {
        day: '1 month',
      },
      {
        day: '2 months',
      },
      {
        day: '3 months',
      },
      {
        day: '6 months',
      },
      {
        day: '1 year',
      },
      
    ]);
    const renderTabs = ({item, index}) => {
      
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setTabIndex(index);
            if(item.name==="By date"){
              setDateModal(true);
              setModalExecuted(7);
              // dateRange();
            }else if(item.name==="By period"){
              setDateModal(false);
              setModalExecuted(10);
            }
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            //   alignSelf: 'center',
            //   paddingHorizontal: 0,
            width: '64%',
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
              width: tabIndex == index ? '100%' : null,
            }}>
            <Text
              style={{
                color: tabIndex == index ? theme?.white : theme.darkGrey,
                fontSize: 14.7,
                fontFamily: FONT_FAMILY?.MontserratMedium,
              }}>
              {item?.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    const renderDays = ({item, index}) => {
    if(dateModal){
        console.log('item', item);
        if(index===modalExecuted){
          return (
            <>
            
            <RenderCalenderSorting/>
                </>
          );
        }
      }else{
        return(
          <>
            <View
              style={{
                width: '100%',
                margin: 10,
                // backgroundColor: 'red',
                // marginTop: 25,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONT_FAMILY?.MontserratMedium,
                }}>
                {item?.day}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: theme?.border,
                  borderStyle: 'solid',
                  borderBottomWidth: 1,
                }}></View>
            </View>
          </>
        )
      } 
  }
      
    return (
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 10,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT_FAMILY.MontserratSemiBold,
              color: theme?.activeTab,
            }}>
            Clear
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FONT_FAMILY.MontserratSemiBold,
              color: theme?.black,
            }}>
            Select Time
          </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={onPressClose}>
            <Image
              source={require('@/assets/images/icons/close.png')}
              style={{width: 22, height: 22, tintColor: theme?.black}}
            />
          </TouchableOpacity>
        </View>
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

        <View
          style={{
            width: '100%',
            height: 300,
            marginTop: 20,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={days}
            renderItem={renderDays}
            showsHorizontalScrollIndicator={false}
            style={{}}
            contentContainerStyle={{paddingBottom: 30}}
          />
        </View>
        <SubmitButton
          btnContainer={{
            width: '90%',
            borderRadius: 10,
            backgroundColor: theme?.activeTab,
            height: 54,
            justifyContent: 'center',
            // alignSelf: 'flex-end',
          }}
          disabled={false}
          onPress={onPressClose}
          btnTextStyle={{
            color: theme.white,
            alignSelf: 'center',
            fontSize: 14,
            fontFamily: FONT_FAMILY.MontserratSemiBold,
            textTransform: 'uppercase',
          }}
          btnText={'Done'}
          arrowImage={true}
          custom={null}
          arrowImageleft={null}
          arrowImageright={true}
          darkbutton={null}
          leftImageStyle={null}
          leftimagesource={null}
          rightImageStyle={null}
        />
      </View>
    );
  };

  const RenderDateSelection = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            // backgroundColor: 'red',
          }}>
          <Text></Text>
          <Text
            style={{
              justifyContent: 'center',
              fontSize: 18,
              fontFamily: FONT_FAMILY?.MontserratSemiBold,
              color: theme?.activeTab,
              left: 8,
            }}>
            Select Time
          </Text>

          <TouchableOpacity onPress={onPressClose}>
            <Image
              source={require('@/assets/images/icons/close.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: theme?.activeTab,
              }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={dateRange}
          activeOpacity={0.9}
          style={{
            width: '40%',
            height: 50,
            marginTop: 60,
            // backgroundColor: 'red',
            backgroundColor: theme?.activeTab,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: FONT_FAMILY?.MontserratSemiBold,
              color: theme?.white,
            }}>
            {' '}
            Date Range
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={weekRange}
          activeOpacity={0.9}
          style={{
            width: '40%',
            height: 50,
            marginTop: 30,
            // backgroundColor: 'red',
            borderWidth: 1,
            borderColor: theme?.activeTab,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: FONT_FAMILY?.MontserratSemiBold,
              color: theme?.activeTab,
            }}>
            Week Period
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const RenderSorting = () => {
    const [isSelected, setSelection] = useState(false);

    const [days, setDays] = useState([
      {
        score: 'Highest Score',
      },
      {
        score: 'Lowest Score',
      },
      {
        score: 'Highest GI',
      },
      {
        score: 'Lowest GI',
      },
      {
        score: 'Highest GL',
      },
      {
        score: 'Lowest GL',
      },
      {
        score: 'Highest calories',
      },
      {
        score: 'Lowest calories',
      },
      {
        score: 'Highest carbs',
      },
      {
        score: 'Lowest carbs',
      },
    ]);

    const renderDays = ({item, index}) => {
      console.log('item', item);

      return (
        <View
          style={{
            width: '100%',
            margin: 10,
            // backgroundColor: 'red',
            // marginTop: 25,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT_FAMILY?.MontserratMedium,
            }}>
            {item?.score}
          </Text>
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
    return (
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 10,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            width: '95%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FONT_FAMILY.MontserratSemiBold,
              color: theme?.black,
            }}>
            Sort by
          </Text>

          <TouchableOpacity activeOpacity={0.9} onPress={onPressClose}>
            <Image
              source={require('@/assets/images/icons/close.png')}
              style={{width: 22, height: 22, tintColor: theme?.black}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 400,
            marginTop: 20,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={days}
            renderItem={renderDays}
            showsHorizontalScrollIndicator={false}
            style={{}}
            contentContainerStyle={{paddingBottom: 30}}
          />
        </View>
      </View>
    );
  };

  const RenderListFood = () => {
    const [days, setDays] = useState([
      {
        score: 'Highest Frequency',
      },
      {
        score: 'Lowest Frequency',
      },
      {
        score: 'Highest Score',
      },
      {
        score: 'Lowest Score',
      },
      {
        score: 'Most intake amount',
      },
      {
        score: 'Least intake amount',
      },
    ]);

    const renderDays = ({item, index}) => {
      console.log('item', item);

      return (
        <View
          style={{
            width: '100%',
            margin: 10,
            // backgroundColor: 'red',
            // marginTop: 25,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT_FAMILY?.MontserratMedium,
            }}>
            {item?.score}
          </Text>
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
    return (
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 10,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            width: '95%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FONT_FAMILY.MontserratSemiBold,
              color: theme?.black,
            }}>
            Filter by
          </Text>

          <TouchableOpacity activeOpacity={0.9} onPress={onPressClose}>
            <Image
              source={require('@/assets/images/icons/close.png')}
              style={{width: 22, height: 22, tintColor: theme?.black}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '100%',
            height: 400,
            marginTop: 20,
          }}>
          {days.map((item,index)=>{
            return(
              <>
                <View style={{
                  padding:10,
                  borderBottomColor:"lightgray",
                  borderBottomWidth:1,
                  flexDirection:"row",
                  alignItems:"center"

                }}>
                  
                  <View style={{
                    width:15,
                    height:15,
                    borderColor:"gray",
                    borderWidth:2,marginRight:10
                  }}>
                    
                  </View>
                  <Text style={{
                    fontSize:18,
                    fontWeight:"light",
                    color:"gray"
                  }}  key={index}>{item.score}</Text>
                </View>
              </>
            )
          })}
        </View>
      </View>
    );
  };

  const renderByCondition = value => {
    switch (value) {
      case 'RenderCalenderSorting':
        return <RenderCalenderSorting />;
      case 'RenderSorting':
        return <RenderSorting />;
      case 'RenderListFood':
        return <RenderListFood />;
      case 'RenderDateSelection':
        return <RenderDateSelection />;
      case 'RenderSelectRangePopup':
        return <RenderSelectRangePopup />;
    }
  };

  return (
    <React.StrictMode>
      <RBSheet
        ref={RBSheetRef}
        height={height}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
        closeOnPressMask={dragable != undefined ? dragable : true}
        closeOnDragDown={dragable != undefined ? dragable : true}
        dragFromTopOnly={dragable != undefined ? dragable : true}
        children={renderByCondition(type)}
        onClose={onMainClose}
        keyboardAvoidingViewEnabled={keyboardAvoidingViewEnabled}
      />
    </React.StrictMode>
  );
};
export default DynamicPopup;
