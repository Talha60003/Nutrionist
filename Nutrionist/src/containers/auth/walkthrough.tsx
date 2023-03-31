import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
  Platform,
  ImageBackground,
} from 'react-native';

import theme from '@/assets/stylesheets/theme';
import {CircleBackButton} from '@/components/buttons/circleBackButton';
import {FONT_FAMILY} from '@/constants/fontFamily';
import AppIntroSlider from 'react-native-app-intro-slider';
import walkthroughStyles from '@/assets/stylesheets/walkthrough.styles';
import {SubmitButton} from '@/components/buttons/submitButton';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

const Walkthrough = props => {
  const [slides, setSlides] = useState([
    {
      key: 1,
      title: 'Demo 1',
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.   ",
      text2:
        "Just add your location & vehicle information and we'll be right there.",
      image: require('@/assets/images/walkthrough_Images/Feedbro.png'),
    },
    {
      key: 2,
      title: 'Demo 2',
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.   ",
      text2: "Whatever your car needs, we're just a click away.",
      image: require('@/assets/images/walkthrough_Images/Multitaskingrafiki.png'),
    },
  ]);
  const [isSelectedCount, setSelectedCount] = useState(0);
  const _slidesref = useRef(null);
  const onDone = () => {
    props?.navigation?.replace('Login');
  };

  const renderNext = () => {
    _slidesref.current.goToSlide(isSelectedCount + 1);
    setSelectedCount(isSelectedCount + 1);
  };

  const renderItem = ({item}) => {
    return (
      <View
        // style={walkthroughStyles.renderItemSecondView}
        style={walkthroughStyles.renderItemMainView}>
        <Text style={walkthroughStyles.renderItemTitleStyle}>
          {item?.title}
        </Text>
        <Text style={walkthroughStyles.renderItemTextStyle}>{item?.text1}</Text>
      </View>
    );
  };
  return (
    <View style={walkthroughStyles.container}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={theme.transparent}
      />
      <View style={walkthroughStyles.containerImageView}>
        <Image
          style={{height: 339, width: 339, alignSelf: 'center'}}
          source={slides[isSelectedCount]?.image}
          resizeMode="contain"
        />
      </View>
      <AppIntroSlider
        ref={_slidesref}
        data={slides}
        renderItem={renderItem}
        bottomButton
        showNextButton={false}
        showDoneButton={false}
        activeDotStyle={{
          bottom: '20%',
          width: 10,
          height: 10,
          borderRadius: 10 / 2,
          borderColor: theme.darkGreen,
          backgroundColor: theme.darkGreen,
        }}
        dotStyle={{
          bottom: '20%',
          width: 10,
          height: 10,
          borderRadius: 10 / 2,
          backgroundColor: theme.greyColor,
        }}
        onSlideChange={num => {
          setSelectedCount(num);
        }}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignSelf: 'center',
          width: screenWidth * 0.95,
          bottom:
            Platform.OS == 'ios'
              ? screenHeight > 900
                ? 20
                : screenHeight > 800
                ? 48
                : 50
              : 20,
        }}>
        <SubmitButton
          btnContainer={{
            width: '20%',
            borderRadius: 10,
            height: 54,
            justifyContent: 'center',
            alignSelf: 'flex-end',
          }}
          disabled={false}
          onPress={() => {
            onDone();
          }}
          btnTextStyle={{
            color: theme.brightRed,
            alignSelf: 'center',
            fontSize: 14,
            fontFamily: FONT_FAMILY.MontserratBold,
            textTransform: 'uppercase',
          }}
          btnText={'Skip'}
          arrowImage={true}
          custom={null}
          arrowImageleft={null}
          arrowImageright={true}
          darkbutton={null}
          leftImageStyle={null}
          leftimagesource={null}
          rightImageStyle={null}
        />
        <SubmitButton
          btnContainer={{
            width: '20%',

            borderRadius: 10,
            height: 54,
            justifyContent: 'center',

            alignSelf: 'flex-start',
          }}
          disabled={false}
          onPress={() => {
            {
              isSelectedCount != slides?.length - 1 ? renderNext() : onDone();
            }
          }}
          btnTextStyle={{
            color: theme.darkGreen,
            alignSelf: 'center',
            fontSize: 14,
            fontFamily: FONT_FAMILY.MontserratBold,
            textTransform: 'uppercase',
          }}
          btnText={'Next'}
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
    </View>
  );
};

export default Walkthrough;
