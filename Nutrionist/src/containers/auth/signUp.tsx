import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import {SubmitButton} from '@/components/buttons/submitButton';
import {FONT_FAMILY} from '@/constants/fontFamily';
import {gql, useApolloClient} from '@apollo/client';
import {GET_CATEGORIES} from '@/services/queries/categories';
import {Inputview} from '@/components/hookForms';
import theme from '@/assets/stylesheets/theme';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/src/yup';
import {Signup} from '@/components/Validations/validations';
import {LinearGradientButton} from '@/components/buttons/linearGradientButton';
import ImageUploadComponent from '@/components/imageUpload';
import {DropDownButton} from '@/components/buttons/dropDownButton';
import { CountryPicker } from 'react-native-country-codes-picker';
let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);
const SignUp = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const [tab, setTab] = useState(1);
  const [showOfferedServiceDropDown, setShowOfferedServiceDropDown] =
    useState(false);
  const [selectedOffersLabel, setSelectedOffersLabel] = useState([]);
  const [showCountries, setShowCountries] = useState(true);
  let emailreg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/);
  const [placeHolder, setPlaceHolder] = useState({
    firstNamePH: '',
    lastNamePH: '',
    emailPH: '',
    phonePH: '',
    phone_codePH: '',
    positionPH: '',
    passwordPH: '',
    re_passwordPH: '',
    companyNamePH: '',
    companyEmailPH: '',
    companyAddPH: '',
    companyPhonePH: '',
    companyWhatsappPH: '',
    companyDescriptionPH: '',
    comapnyServiceReqProcPH: '',
  });
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phone_code: '',
    position: '',
    password: '',
    re_password: '',
    companyName: '',
    companyEmail: '',
    companyAdd: '',
    companyPhone: '',
    companyWhatsapp: '',
    companyPhoneCode: '',
    companyWhatsappCode: '',
    companyDescription: '',
    comapnyServiceReqProc: '',
  });
  const [countriesList, setCountriesList] = useState([
    {
      name: 'United Arab Emirates',
      iso2: 'ae',
      dialCode: '971',
      priority: 0,
      areaCodes: null,
    },
    {
      name: 'Bahrain',
      iso2: 'bh',
      dialCode: '973',
      priority: 0,
      areaCodes: null,
    },
    {
      name: 'Oman',
      iso2: 'om',
      dialCode: '968',
      priority: 0,
      areaCodes: null,
    },
    {
      name: 'Qatar',
      iso2: 'qa',
      dialCode: '974',
      priority: 0,
      areaCodes: null,
    },
    {
      name: 'Saudi Arabia',
      iso2: 'sa',
      dialCode: '966',
      priority: 0,
      areaCodes: null,
    },
    {
      name: 'Kuwait',
      iso2: 'kw',
      dialCode: '965',
      priority: 0,
      areaCodes: null,
    },
    {
      name: 'Jordan',
      iso2: 'jo',
      dialCode: '962',
      priority: 0,
      areaCodes: null,
    },
    {
      name: 'Egypt',
      iso2: 'eg',
      dialCode: '20',
      priority: 0,
      areaCodes: null,
    },
  ]);
  const [excludedCountries, setExcludedList] = useState([
    'AF',
    'AX',
    'AL',
    'DZ',
    'AS',
    'AD',
    'AO',
    'AI',
    'AQ',
    'AG',
    'AR',
    'AM',
    'AW',
    'AU',
    'AT',
    'AZ',
    'BS',
    'BD',
    'BB',
    'BY',
    'BE',
    'BZ',
    'BJ',
    'BM',
    'BT',
    'BO',
    'BQ',
    'BA',
    'BW',
    'BV',
    'BR',
    'IO',
    'BN',
    'BG',
    'BF',
    'BI',
    'KH',
    'CM',
    'CA',
    'CV',
    'KY',
    'CF',
    'TD',
    'CL',
    'CN',
    'CX',
    'CC',
    'CO',
    'KM',
    'CG',
    'CD',
    'CK',
    'CR',
    'CI',
    'HR',
    'CU',
    'CW',
    'CY',
    'CZ',
    'DK',
    'DJ',
    'DM',
    'DO',
    'EC',
    'SV',
    'GQ',
    'ER',
    'EE',
    'ET',
    'FK',
    'FO',
    'FJ',
    'FI',
    'FR',
    'GF',
    'PF',
    'TF',
    'GA',
    'GM',
    'GE',
    'DE',
    'GH',
    'GI',
    'GR',
    'GL',
    'GD',
    'GP',
    'GU',
    'GT',
    'GG',
    'GN',
    'GW',
    'GY',
    'HT',
    'HM',
    'VA',
    'HN',
    'HK',
    'HU',
    'IS',
    'IN',
    'ID',
    'IR',
    'IQ',
    'IE',
    'IM',
    'IL',
    'IT',
    'JM',
    'JP',
    'JE',

    'KZ',
    'KE',
    'KI',
    'KP',
    'KR',
    'XK',

    'KG',
    'LA',
    'LV',
    'LB',
    'LS',
    'LR',
    'LY',
    'LI',
    'LT',
    'LU',
    'MO',
    'MK',
    'MG',
    'MW',
    'MY',
    'MV',
    'ML',
    'MT',
    'MH',
    'MQ',
    'MR',
    'MU',
    'YT',
    'MX',
    'FM',
    'MD',
    'MC',
    'MN',
    'ME',
    'MS',
    'MA',
    'MZ',
    'MM',
    'NA',
    'NR',
    'NP',
    'NL',
    'AN',
    'NC',
    'NZ',
    'NI',
    'NE',
    'NG',
    'NU',
    'NF',
    'MP',
    'NO',
    'PK',
    'PW',
    'PS',
    'PA',
    'PG',
    'PY',
    'PE',
    'PH',
    'PN',
    'PL',
    'PT',
    'PR',
    'RE',
    'RO',
    'RU',
    'RW',
    'BL',
    'SH',
    'KN',
    'LC',
    'MF',
    'PM',
    'VC',
    'WS',
    'SM',
    'ST',
    'SN',
    'RS',
    'CS',
    'SC',
    'SL',
    'SG',
    'SX',
    'SK',
    'SI',
    'SB',
    'SO',
    'ZA',
    'GS',
    'SS',
    'ES',
    'LK',
    'SD',
    'SR',
    'SJ',
    'SZ',
    'SE',
    'CH',
    'SY',
    'TW',
    'TJ',
    'TZ',
    'TH',
    'TL',
    'TG',
    'TK',
    'TO',
    'TT',
    'TN',
    'TR',
    'TM',
    'TC',
    'TV',
    'UG',
    'UA',
    'GB',
    'US',
    'UM',
    'UY',
    'UZ',
    'VU',
    'VE',
    'VN',
    'VG',
    'VI',
    'WF',
    'EH',
    'YE',
    'ZM',
    'ZW',
  ]);
  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(Signup),
  });

  const renderOffers = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // let existence = selectedOffersLabel.find(data => data === item)
          // if(existence == undefined){
          setSelectedOffersLabel([...selectedOffersLabel, item]);
          // }
          setShowOfferedServiceDropDown(false);
        }}
        activeOpacity={0.8}
        style={{
          paddingVertical: 10,
          justifyContent: 'center',
        }}>
        <Text
          allowFontScaling={false}
          style={{
            alignSelf: 'flex-start',
            marginLeft: 15,
            fontSize: 12,
            fontFamily: FONT_FAMILY?.MontserratMedium,
            color: theme?.darkGrey,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSelectedOffer = ({item, index}) => {
    return (
      <View style={{flexDirection:'row',alignSelf: 'flex-start',flexWrap: 'wrap'}}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 100,
          padding: 10,
          borderColor: theme.darkGreen,
          backgroundColor: theme.backgroundRGB,
          marginHorizontal:15,
          marginVertical:5,
        }}>
        <Text>{item}</Text>
      </View>
      <TouchableOpacity style={{position:'absolute',alignSelf:'center',right:-5,top:10,}} activeOpacity={0.8} onPress={()=>{
          let itemIndex = selectedOffersLabel.findIndex(data => data === item)
          console.log('========>Index',itemIndex)
          let array = [...selectedOffersLabel]
          array.splice(itemIndex,1)
          setSelectedOffersLabel(array)
      }}>

      <Image source={require('@/assets/images/icons/trash.png')} />
      </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <Image
          source={require('@/assets/images/icons/TankBay.png')}
          style={{width: 125, height: 127}}
          resizeMode="contain"
        />
        <Text
          style={{
            justifyContent: 'center',
            fontSize: 24,
            // fontWeight: '600',
            // marginTop: 20,
            color: theme?.black,
            fontFamily: FONT_FAMILY.MontserratSemiBold,
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            fontSize: 14,
            // fontWeight: '600',
            marginTop: 5,
            color: theme?.darkGrey,
            fontFamily: FONT_FAMILY.MontserratRegular,
          }}>
          Please Enter Your Details Here
        </Text>
      </View>
      <Text
        style={{
          justifyContent: 'center',
          fontSize: 18,
          // fontWeight: '600',
          marginTop: 10,
          color: theme?.darkGreen,
          fontFamily: FONT_FAMILY.MontserratSemiBold,
        }}>
        Step 0{tab}/02
      </Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          height: 30,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            borderBottomWidth: 3,
            width: '50%',
            borderBottomColor: tab == 1 ? theme.darkGreen : theme.darkGrey,
            height: '100%',
          }}
          onPress={() => {
            setTab(1);
          }}></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            borderBottomWidth: 3,
            width: '50%',
            borderBottomColor: tab == 2 ? theme.darkGreen : theme.darkGrey,
            height: '100%',
          }}
          onPress={() => {
            setTab(2);
          }}></TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
          width: '90%',
        }}>
        <ScrollView
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // justifyContent: 'center',
            width: '100%',
            marginBottom: 300,

            // alignItems: 'center',

            // backgroundColor: 'red',
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {tab == 1 ? (
            <View style={{width: '100%'}}>
              <Inputview
                value={signUpData?.firstName}
                editable={true}
                autoCap={false}
                fieldName="first_name"
                control={control}
                keyboardType="email-address"
                textBoxContainer={{
                  flexDirection: 'row',
                  width: '99%',
                  height: 66,
                  marginTop: 0,
                  marginBottom: 0,
                  alignItems: 'center',
                }}
                selectionColor={theme.darkestBlue}
                isLeftImage={false}
                txtbxstyl={{
                  width: '100%',
                  height: signUpData?.firstName?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.firstName?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter First Name*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.firstNamePH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth: signUpData?.firstName?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    firstName: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      firstNamePH: 'Enter First Name*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, firstNamePH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <Inputview
                value={signUpData?.lastName}
                editable={true}
                autoCap={false}
                fieldName="last_name"
                control={control}
                keyboardType="email-address"
                textBoxContainer={{
                  flexDirection: 'row',
                  width: '99%',
                  height: 66,
                  marginTop: 0,
                  marginBottom: 0,
                  alignItems: 'center',
                }}
                selectionColor={theme.darkestBlue}
                isLeftImage={false}
                txtbxstyl={{
                  width: '100%',
                  height: signUpData?.lastName?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.lastName?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter Last Name*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.lastNamePH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth: signUpData?.lastName?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.last_name && errors?.last_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    lastName: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      lastNamePH: 'Enter Last Name*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, lastNamePH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <Inputview
                value={signUpData?.email}
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
                  height: signUpData?.email?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.email?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter Email Address*'}
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
                  borderWidth: signUpData?.email?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={err}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    email: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      emailPH: 'Enter Email Address*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, emailPH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <View style={{width: '100%'}}>
                <Inputview
                  value={signUpData?.phone}
                  editable={true}
                  autoCap={false}
                  fieldName="first_name"
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
                    height: signUpData?.phone?.length > 0 ? 40 : 66,
                    borderRadius: 15,
                    fontSize: 13,
                    color: theme.darkestBlue,
                    marginTop: signUpData?.phone?.length > 0 ? 10 : 0,
                  }}
                  plcholder={'Enter Phone Number*'}
                  plcholdercolor={theme.darkGrey}
                  encryption={false}
                  encryptionIconContainer={null}
                  encryptionIconSource={null}
                  encryptionIconStyle={null}
                  hasName={true}
                  name={placeHolder?.phonePH}
                  nameStyle={{
                    alignSelf: 'flex-start',
                    color: theme.darkGreen,
                    fontSize: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT_FAMILY.MontserratMedium,
                  }}
                  borderStyle={{
                    borderWidth: signUpData?.phone?.length > 0 ? 1 : 0,
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
                    marginBottom: 20,
                    width: '75%',
                  }}
                  allowMultiLine={null}
                  rightIcon={null}
                  rightIconSource={null}
                  rightIconStyle={null}
                  errTxt={errors?.first_name && errors?.first_name?.message}
                  errTxtstyle={{
                    top: 70,
                    right: 0,
                    position: 'absolute',
                    color: theme.brightRed,
                    fontSize: 11,
                    alignSelf: 'flex-end',
                  }}
                  onChangeTexts={text => {
                    setErr(false);
                    setSignUpData({
                      ...signUpData,
                      phone: text,
                    });
                    if (text.length > 0) {
                      setPlaceHolder({
                        ...placeHolder,
                        phonePH: 'Enter Phone Number*',
                      });
                    } else {
                      setPlaceHolder({...placeHolder, phonePH: ''});
                    }
                  }}
                  leftImageSource={null}
                  leftImageStyle={null}
                />
              </View>

              <Inputview
                value={signUpData?.position}
                editable={true}
                autoCap={false}
                fieldName="first_name"
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
                  height: signUpData?.position?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.position?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter current position in Company*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.positionPH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth: signUpData?.position?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    position: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      positionPH: 'Enter current position in Company*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, positionPH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <Inputview
                value={signUpData?.password}
                editable={true}
                autoCap={false}
                fieldName="first_name"
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
                  height: signUpData?.password?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.password?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter Password*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.passwordPH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth: signUpData?.password?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    firstName: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      passwordPH: 'Enter Password*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, passwordPH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <Inputview
                value={signUpData?.re_password}
                editable={true}
                autoCap={false}
                fieldName="first_name"
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
                  height: signUpData?.re_password?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.re_password?.length > 0 ? 10 : 0,
                }}
                plcholder={'Confirm Password*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.re_passwordPH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth: signUpData?.re_password?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    re_password: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      re_passwordPH: 'Confirm Password*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, re_passwordPH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
            </View>
          ) : (
            <View style={{width: '100%'}}>
              <ImageUploadComponent />
              <Inputview
                value={signUpData?.companyName}
                editable={true}
                autoCap={false}
                fieldName="first_name"
                control={control}
                keyboardType="email-address"
                textBoxContainer={{
                  flexDirection: 'row',
                  width: '99%',
                  height: 66,
                  marginTop: 0,
                  marginBottom: 0,
                  alignItems: 'center',
                }}
                selectionColor={theme.darkestBlue}
                isLeftImage={false}
                txtbxstyl={{
                  width: '100%',
                  height: signUpData?.companyName?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.companyName?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter Company Name*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.companyNamePH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth: signUpData?.companyName?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    companyName: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      companyNamePH: 'Enter Company Name*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, companyNamePH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <Inputview
                value={signUpData?.companyEmail}
                editable={true}
                autoCap={false}
                fieldName="first_name"
                control={control}
                keyboardType="email-address"
                textBoxContainer={{
                  flexDirection: 'row',
                  width: '99%',
                  height: 66,
                  marginTop: 0,
                  marginBottom: 0,
                  alignItems: 'center',
                }}
                selectionColor={theme.darkestBlue}
                isLeftImage={false}
                txtbxstyl={{
                  width: '100%',
                  height: signUpData?.companyEmail?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.companyEmail?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter Company Email Address*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.companyEmailPH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth: signUpData?.companyEmail?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    companyEmail: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      companyEmailPH: 'Enter Company Email Address*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, companyEmailPH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <Inputview
                value={signUpData?.companyAdd}
                editable={true}
                autoCap={false}
                fieldName="first_name"
                control={control}
                keyboardType="email-address"
                textBoxContainer={{
                  flexDirection: 'row',
                  width: '99%',
                  height: 66,
                  marginTop: 0,
                  marginBottom: 0,
                  alignItems: 'center',
                }}
                selectionColor={theme.darkestBlue}
                isLeftImage={false}
                txtbxstyl={{
                  width: '100%',
                  height: signUpData?.companyAdd?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop: signUpData?.companyAdd?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter Company Address*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.companyAddPH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth: signUpData?.companyAdd?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    companyAdd: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      companyAddPH: 'Enter Company Address*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, companyAddPH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <View>
                <DropDownButton
                  onPress={() =>
                    setShowOfferedServiceDropDown(!showOfferedServiceDropDown)
                  }
                  showDropDown={showOfferedServiceDropDown}
                  btnContainer={{
                    paddingLeft: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomColor: theme?.dropdownBorder,
                    backgroundColor: theme?.white,
                    width: '100%',
                    height: 66,
                    justifyContent: 'center',
                    marginBottom: 20,
                   
             
                  }}
                  label={'Select Offered Services*'}
                />
                {
                  showOfferedServiceDropDown && (
                    // (appSettings?.consultation_type?.length > 0 ? (
                    <FlatList
                      data={['Hello','hsdvhvjhasdvhjdsvhjdsavhjdsfa']}
                      showsVerticalScrollIndicator={true}
                      style={{
                        backgroundColor: theme?.white,
                        maxHeight: 120,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        position: 'absolute',
                        width: '100%',
                        top: 50,
                        zIndex:10000
                      }}
                      showsHorizontalScrollIndicator={false}
                      renderItem={renderOffers}
                    />
                  )
                  // ) : null)
                }
                {selectedOffersLabel.length > 0 && (
                  <FlatList
                    data={selectedOffersLabel}
                    style={{
                      // backgroundColor: theme?.white,
                      // maxHeight: 120,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      // width: '100%',
                      maxWidth:'99%',
                      // width:screenWidth,
                      marginBottom: 20,
                    
                     
                    }}
          
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderSelectedOffer}
                    //  horizontal
                    numColumns={2}
                  />
                )}
              </View>

              <View style={{width: '100%',flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    width: '20%',
                    height: 66,
                    marginTop: 0,
                    marginBottom: 0,
                    alignItems: 'center',
                    backgroundColor:theme.white,
                    borderRadius:10,justifyContent:'center',
                  }} onPress={()=>{
                    setShowCountries(true)
                  }}> 
  <Text style={{fontFamily:FONT_FAMILY.MontserratRegular,color:theme?.darkGrey}}>{signUpData?.companyPhoneCode}</Text>
                </TouchableOpacity>
                <Inputview
                  value={signUpData?.companyPhone}
                  editable={true}
                  autoCap={false}
                  fieldName="first_name"
                  control={control}
                  keyboardType="email-address"
                  textBoxContainer={{
                    flexDirection: 'row',
                    width: '80%',
                    height: 66,
                    marginTop: 0,
                    marginBottom: 0,
                    alignItems: 'center',
                  }}
                  selectionColor={theme.darkestBlue}
                  isLeftImage={false}
                  txtbxstyl={{
                    width: '100%',
                    height: signUpData?.companyPhone?.length > 0 ? 40 : 66,
                    borderRadius: 15,
                    fontSize: 13,
                    color: theme.darkestBlue,
                    marginTop: signUpData?.companyPhone?.length > 0 ? 10 : 0,
                  }}
                  plcholder={'Enter Company Phone Number*'}
                  plcholdercolor={theme.darkGrey}
                  encryption={false}
                  encryptionIconContainer={null}
                  encryptionIconSource={null}
                  encryptionIconStyle={null}
                  hasName={true}
                  name={placeHolder?.companyPhonePH}
                  nameStyle={{
                    alignSelf: 'flex-start',
                    color: theme.darkGreen,
                    fontSize: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT_FAMILY.MontserratMedium,
                  }}
                  borderStyle={{
                    borderWidth: signUpData?.companyPhone?.length > 0 ? 1 : 0,
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
                    marginBottom: 20,
                    width: '75%',
                  }}
                  allowMultiLine={null}
                  rightIcon={null}
                  rightIconSource={null}
                  rightIconStyle={null}
                  errTxt={errors?.first_name && errors?.first_name?.message}
                  errTxtstyle={{
                    top: 70,
                    right: 0,
                    position: 'absolute',
                    color: theme.brightRed,
                    fontSize: 11,
                    alignSelf: 'flex-end',
                  }}
                  onChangeTexts={text => {
                    setErr(false);
                    setSignUpData({
                      ...signUpData,
                      companyPhone: text,
                    });
                    if (text.length > 0) {
                      setPlaceHolder({
                        ...placeHolder,
                        companyPhonePH: 'Enter Company Phone Number*',
                      });
                    } else {
                      setPlaceHolder({...placeHolder, companyPhonePH: ''});
                    }
                  }}
                  leftImageSource={null}
                  leftImageStyle={null}
                />
              </View>
              <View style={{width: '100%'}}>
                <Inputview
                  value={signUpData?.companyWhatsapp}
                  editable={true}
                  autoCap={false}
                  fieldName="first_name"
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
                    height: signUpData?.companyWhatsapp?.length > 0 ? 40 : 66,
                    borderRadius: 15,
                    fontSize: 13,
                    color: theme.darkestBlue,
                    marginTop: signUpData?.companyWhatsapp?.length > 0 ? 10 : 0,
                  }}
                  plcholder={'Enter Company Whatsapp Number*'}
                  plcholdercolor={theme.darkGrey}
                  encryption={false}
                  encryptionIconContainer={null}
                  encryptionIconSource={null}
                  encryptionIconStyle={null}
                  hasName={true}
                  name={placeHolder?.companyWhatsappPH}
                  nameStyle={{
                    alignSelf: 'flex-start',
                    color: theme.darkGreen,
                    fontSize: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT_FAMILY.MontserratMedium,
                  }}
                  borderStyle={{
                    borderWidth:
                      signUpData?.companyWhatsapp?.length > 0 ? 1 : 0,
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
                    marginBottom: 20,
                    width: '75%',
                  }}
                  allowMultiLine={null}
                  rightIcon={null}
                  rightIconSource={null}
                  rightIconStyle={null}
                  errTxt={errors?.first_name && errors?.first_name?.message}
                  errTxtstyle={{
                    top: 70,
                    right: 0,
                    position: 'absolute',
                    color: theme.brightRed,
                    fontSize: 11,
                    alignSelf: 'flex-end',
                  }}
                  onChangeTexts={text => {
                    setErr(false);
                    setSignUpData({
                      ...signUpData,
                      companyWhatsapp: text,
                    });
                    if (text.length > 0) {
                      setPlaceHolder({
                        ...placeHolder,
                        companyWhatsappPH: 'Enter Company Whatsapp Number*',
                      });
                    } else {
                      setPlaceHolder({...placeHolder, companyWhatsappPH: ''});
                    }
                  }}
                  leftImageSource={null}
                  leftImageStyle={null}
                />
              </View>
              <Inputview
                value={signUpData?.companyDescription}
                editable={true}
                autoCap={false}
                fieldName="first_name"
                control={control}
                keyboardType="email-address"
                textBoxContainer={{
                  flexDirection: 'row',
                  width: '99%',
                  height: 127,
                  marginTop: 0,
                  marginBottom: 0,
                  alignItems: 'flex-start',
                }}
                selectionColor={theme.darkestBlue}
                isLeftImage={false}
                txtbxstyl={{
                  width: '100%',
                  height: signUpData?.companyDescription?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop:
                    signUpData?.companyDescription?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter Description*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.companyDescriptionPH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth:
                    signUpData?.companyDescription?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    companyDescription: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      companyDescriptionPH: 'Enter Description*',
                    });
                  } else {
                    setPlaceHolder({...placeHolder, companyDescriptionPH: ''});
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
              <Inputview
                value={signUpData?.comapnyServiceReqProc}
                editable={true}
                autoCap={false}
                fieldName="first_name"
                control={control}
                keyboardType="email-address"
                textBoxContainer={{
                  flexDirection: 'row',
                  width: '99%',
                  height: 155,
                  marginTop: 0,
                  marginBottom: 0,
                  alignItems: 'flex-start',
                }}
                selectionColor={theme.darkestBlue}
                isLeftImage={false}
                txtbxstyl={{
                  width: '100%',
                  height:
                    signUpData?.comapnyServiceReqProc?.length > 0 ? 40 : 66,
                  borderRadius: 15,
                  fontSize: 13,
                  color: theme.darkestBlue,
                  marginTop:
                    signUpData?.comapnyServiceReqProc?.length > 0 ? 10 : 0,
                }}
                plcholder={'Enter the procedure to Request Service*'}
                plcholdercolor={theme.darkGrey}
                encryption={false}
                encryptionIconContainer={null}
                encryptionIconSource={null}
                encryptionIconStyle={null}
                hasName={true}
                name={placeHolder?.comapnyServiceReqProcPH}
                nameStyle={{
                  alignSelf: 'flex-start',
                  color: theme.darkGreen,
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_FAMILY.MontserratMedium,
                }}
                borderStyle={{
                  borderWidth:
                    signUpData?.comapnyServiceReqProc?.length > 0 ? 1 : 0,
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
                  marginBottom: 20,
                }}
                allowMultiLine={null}
                rightIcon={null}
                rightIconSource={null}
                rightIconStyle={null}
                errTxt={errors?.first_name && errors?.first_name?.message}
                errTxtstyle={{
                  top: 70,
                  right: 0,
                  position: 'absolute',
                  color: theme.brightRed,
                  fontSize: 11,
                  alignSelf: 'flex-end',
                }}
                onChangeTexts={text => {
                  setErr(false);
                  setSignUpData({
                    ...signUpData,
                    comapnyServiceReqProc: text,
                  });
                  if (text.length > 0) {
                    setPlaceHolder({
                      ...placeHolder,
                      comapnyServiceReqProcPH:
                        'Enter the procedure to Request Service*',
                    });
                  } else {
                    setPlaceHolder({
                      ...placeHolder,
                      comapnyServiceReqProcPH: '',
                    });
                  }
                }}
                leftImageSource={null}
                leftImageStyle={null}
              />
            </View>
          )}

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
              onPress={() => setTab(2)}
              btnTextStyle={{
                color: 'white',
                textAlign: 'center',
                fontFamily: FONT_FAMILY.MontserratSemiBold,
                fontSize: 15,
              }}
              btnText={tab == 2 ? 'Sign Up' : 'Continue'}
              arrowImage={null}
              linearGradientColors={[
                theme.darkGreen,
                theme.lightGreen,
                theme.darkGreen,
              ]}
              linearGradientStyles={{
                marginTop: 50,
                width: '90%',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
            />
            <View style={{height: 70, justifyContent: 'center'}}>
              <Text style={{fontSize: 14, color: theme?.black}}>Or</Text>
            </View>
            <Text
              style={{fontSize: 14, color: theme?.darkGrey, marginBottom: 10}}>
              Already a Registered User?
            </Text>
            <LinearGradientButton
              arrowImageleft={null}
              arrowImageright={null}
              darkbutton={null}
              leftImageStyle={null}
              leftimagesource={null}
              rightImageStyle={null}
              rightImgsrc={null}
              btnContainer={{
                // marginTop: 50,
                // borderWidth: 1,
                width: '100%',
                borderRadius: 10,
                height: 60,
                justifyContent: 'center',
                // backgroundColor: theme?.brightRed,
              }}
              disabled={false}
              onPress={() => {
                if (tab == 2) {
                  setTab(1);
                } else {
                  props?.navigation?.navigate('Login');
                }
              }}
              btnTextStyle={{
                color: 'white',
                textAlign: 'center',
                fontFamily: FONT_FAMILY.MontserratSemiBold,
                fontSize: 15,
                color: tab == 2 ? theme.darkGreen : theme.white,
              }}
              btnText={tab == 2 ? 'Back to Step 01' : 'Go to Sign in'}
              arrowImage={null}
              linearGradientColors={
                tab == 2
                  ? [theme?.transparent, theme.transparent]
                  : [theme.gradientRed, theme.brightRed, theme.gradientRed]
              }
              linearGradientStyles={{
                width: '90%',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderWidth: tab == 2 ? 1 : 0,
              }}
            />
          </View>
        </ScrollView>
      </View>
      <CountryPicker
          show={showCountries}
          lang={'en'}
          style={{
            modal: {
              height: '60%',
              paddingBottom: 50,
            },
          }}
          onBackdropPress={() => {
            setShowCountries(false);
          }}
          inputPlaceholder={'Search'}
          pickerButtonOnPress={item => {
            console.log('item', item);
            // setPhoneCode(item?.dial_code);
            // // setSelectedCountry(item?.code.toLowerCase());
setSignUpData({...signUpData,companyPhoneCode:item?.dial_code})
            // setPhone('');
            // // phone = '';
            // phone_ref.current.selectCountry(item?.code.toLowerCase());
            // if (
            //   item?.code == 'BH' ||
            //   item?.code == 'QA' ||
            //   item?.code == 'OM' ||
            //   item?.code == 'KW'
            // ) {
            //   setNumLength(12);
            // } else if (item?.code == 'JO') {
            //   setNumLength(14);
            // } else {
            //   setNumLength(13);
            // }
            setShowCountries(false);
          }}
          excludedCountries={excludedCountries}
        />
    </View>
  );
};

export default SignUp;
