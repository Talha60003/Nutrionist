import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LinearGradientButton} from '@/components/buttons/linearGradientButton';
import {FONT_FAMILY} from '@/constants/fontFamily';
import {Inputview} from '@/components/hookForms';
import theme from '@/assets/stylesheets/theme';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/src/yup';
import {SignIn} from '@/components/Validations/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [placeHolder, setPlaceHolder] = useState({
    emailPH: '',
    password: '',
  });
  const [err, setErr] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(SignIn),
  });
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: theme.white,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 0,
        alignItems: 'center',
        // paddingTop: 10,
      }}>
      <View
        style={{
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Text
          style={{
            justifyContent: 'center',
            fontSize: 24,
            fontWeight: '600',
            // marginTop: 50,
            color: theme?.black,
          }}>
          Sign In
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            fontSize: 12,
            color: theme?.darkGrey,
            marginTop: 10,
            fontFamily: FONT_FAMILY.MontserratSemiBold,
          }}>
          Enter Your Email Address and Password to Continue
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 150,
          width: '90%',
        }}>
        <Inputview
          value={email}
          editable={true}
          autoCap={false}
          fieldName="email_address"
          control={control}
          keyboardType="email-address"
          textBoxContainer={{
            flexDirection: 'row',
            width: '100%',
            height: 66,
            marginTop: 0,
            marginBottom: 0,
            alignItems: 'center',
          }}
          selectionColor={theme.darkestBlue}
          isLeftImage={false}
          txtbxstyl={{
            width: '100%',
            height: email?.length > 0 ? 40 : 66,
            borderRadius: 15,
            fontSize: 13,
            color: theme.darkestBlue,
            marginTop: 10,
          }}
          plcholder={'Enter Username or Email Address'}
          plcholdercolor={theme.darkGrey}
          encryption={false}
          encryptionIconContainer={null}
          encryptionIconSource={null}
          encryptionIconStyle={null}
          hasName={true}
          name={placeHolder?.emailPH}
          nameStyle={{
            alignSelf: 'flex-start',
            color: theme.darkGreen,
            fontSize: 14,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONT_FAMILY.MontserratMedium,
          }}
          borderStyle={{
            borderWidth: email.length > 0 ? 1 : 0,
            borderColor: theme.darkGreen,
            borderRadius: 10,
            paddingHorizontal: 10,
            backgroundColor: theme?.white,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 10,
          }}
          allowMultiLine={null}
          rightIcon={null}
          rightIconSource={null}
          rightIconStyle={null}
          errTxt={errors?.email_address && errors?.email_address?.message}
          errTxtstyle={{
            top: 70,
            right: 0,
            position: 'absolute',
            color: theme.brightRed,
            fontSize: 11,
            alignSelf: 'flex-end',
          }}
          onChangeTexts={text => {
            setEmail(text);
          }}
          leftImageSource={null}
          leftImageStyle={null}
        />
        <Inputview
          value={password}
          editable={true}
          autoCap={false}
          fieldName="password"
          control={control}
          keyboardType="email-address"
          textBoxContainer={{
            flexDirection: 'row',
            width: '100%',
            height: 66,
            marginTop: 0,
            marginBottom: 0,
            alignItems: 'center',
          }}
          selectionColor={theme.darkestBlue}
          isLeftImage={false}
          txtbxstyl={{
            width: '94%',
            height: email?.length > 0 ? 40 : 66,
            borderRadius: 15,
            fontSize: 13,
            color: theme.darkestBlue,
            marginTop: 10,
          }}
          plcholder={'Enter Your Password'}
          plcholdercolor={theme.darkGrey}
          encryption={true}
          encryptionIconContainer={null}
          encryptionIconSource={null}
          encryptionIconStyle={null}
          hasName={true}
          name={placeHolder?.password}
          nameStyle={{
            alignSelf: 'flex-start',
            color: theme.darkGreen,
            fontSize: 14,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONT_FAMILY.MontserratMedium,
          }}
          borderStyle={{
            borderWidth: email.length > 0 ? 1 : 0,
            borderColor: theme.darkGreen,
            borderRadius: 10,
            paddingHorizontal: 10,
            backgroundColor: theme?.white,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 10,
            marginTop: 20,
          }}
          allowMultiLine={null}
          rightIcon={null}
          rightIconSource={null}
          rightIconStyle={null}
          errTxt={errors?.password && errors?.password?.message}
          errTxtstyle={{
            top: 70,
            right: 0,
            position: 'absolute',
            color: theme.brightRed,
            fontSize: 11,
            alignSelf: 'flex-end',
          }}
          onChangeTexts={text => {
            setPassword(text);
          }}
          leftImageSource={null}
          leftImageStyle={null}
        />
        <View style={{width: '100%'}}>
          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
            <Text
              style={{
                // bottom: 10,
                color: theme?.brightRed,
                fontSize: 14,
                top: 20,
                fontFamily: FONT_FAMILY.MontserratBold,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <LinearGradientButton
          arrowImageleft={null}
          arrowImageright={null}
          darkbutton={null}
          leftImageStyle={null}
          leftimagesource={null}
          rightImageStyle={null}
          rightImgsrc={null}
          btnContainer={{
            // borderWidth: 1,
            width: '100%',
            borderRadius: 10,
            height: 60,
            justifyContent: 'center',
            // backgroundColor: theme?.darkGreen,
          }}
          disabled={false}
          onPress={() => props?.navigation?.navigate('Dashboard')}
          btnTextStyle={{
            color: 'white',
            textAlign: 'center',
            fontFamily: FONT_FAMILY.MontserratSemiBold,
            fontSize: 15,
          }}
          btnText={'Sign In'}
          arrowImage={null}
          linearGradientColors={[
            theme.darkGreen,
            theme.lightGreen,
            theme.darkGreen,
          ]}
          linearGradientStyles={{
            marginTop: Platform.OS == 'ios' ? 60 : 40,
            width: '90%',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
