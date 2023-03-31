import theme from '@/assets/stylesheets/theme';
import React, {useState, useEffect, useRef} from 'react';
import {Controller} from 'react-hook-form';
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

interface Props {
  hasName: boolean | null;
  nameStyle: any | null;
  borderStyle: any | null;

  name: string | null;
  textBoxContainer: any | null;
  isLeftImage: boolean | null;
  leftImageSource: any | null;
  leftImageStyle: any | null;
  txtbxstyl: any | null;
  plcholder: string | null;
  plcholdercolor: any | null;
  allowMultiLine: boolean | null;
  encryption: boolean | null;
  encryptionIconContainer: any | null;
  encryptionIconSource: any | null;
  encryptionIconStyle: any | null;
  rightIcon: boolean | null;
  rightIconSource: any | null;
  rightIconStyle: any | null;
  control: any | null;
  errTxt: any | null;
  errTxtstyle: any | null;
  onChangeTexts: any | null;
  fieldName: any | null;
  keyboardType: any | null;
  autoCap: boolean | 'none';
  value?: string | null;
  editable?: boolean | null;
  selectionColor?: string | null;
}

export const Inputview = (props: Props) => {
  const {
    nameStyle,
    borderStyle,
    name,
    textBoxContainer,
    isLeftImage,
    leftImageSource,
    leftImageStyle,
    txtbxstyl,
    plcholder,
    plcholdercolor,
    allowMultiLine,
    encryption,
    encryptionIconContainer,

    encryptionIconStyle,
    rightIcon,
    rightIconSource,
    rightIconStyle,
    control,
    errTxt,

    onChangeTexts,
    fieldName,
    keyboardType,
    autoCap,
    value,
    editable,
    selectionColor,
  } = props;
  const [showPassword, setShowPassword] = useState(true);
  const moveText = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (value !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
  }, [value]);

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };
  console.log('------>', errTxt);
  return (
    <>
      <View
        style={[
          borderStyle,
          {
            borderColor:
              errTxt && value?.length ? theme.brightRed : theme.darkGreen,
          },
        ]}>
        {/* {name.length > 0 && <Text style={nameStyle}>{name}</Text>} */}
        <View style={textBoxContainer}>
          {isLeftImage ? (
            <Image
              source={leftImageSource}
              style={leftImageStyle}
              resizeMode="contain"
            />
          ) : null}
          {name.length > 0 && (
            <Animated.View
              style={[
                {
                  top: 25,
                  left: 0,
                  position: 'absolute',
                  borderRadius: 90,
                  zIndex: 10000,
                },
                animStyle,
              ]}>
              <Text
                style={[
                  nameStyle,
                  ,
                  {
                    color:
                      errTxt && value?.length
                        ? theme.brightRed
                        : theme.darkGreen,
                  },
                ]}>
                {name}
              </Text>
            </Animated.View>
          )}
          <Controller
            control={control}
            name={fieldName}
            render={({field: {onChange}}) => (
              <TextInput
                editable={editable}
                style={txtbxstyl}
                placeholder={plcholder}
                placeholderTextColor={plcholdercolor}
                multiline={allowMultiLine}
                onChangeText={(e: any) => {
                  onChange(e), onChangeTexts && onChangeTexts(e);
                }}
                secureTextEntry={encryption ? showPassword : !showPassword}
                value={value}
                keyboardType={keyboardType}
                selectionColor={selectionColor}
                autoCapitalize={autoCap}
              />
            )}
          />

          {encryption && (
            <TouchableOpacity
              style={encryptionIconContainer}
              onPress={() => {
                setShowPassword(!showPassword);
              }}>
              <Image
                source={
                  showPassword
                    ? require('@/assets/images/icons/hide.png')
                    : require('@/assets/images/icons/show.png')
                }
                style={encryptionIconStyle}
                resizeMode="contain"></Image>
            </TouchableOpacity>
          )}
        </View>
        {rightIcon ? (
          <Image
            source={rightIconSource}
            style={rightIconStyle}
            resizeMode="contain"
          />
        ) : null}
      </View>
    </>
  );
};
