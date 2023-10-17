import { View, StyleSheet } from 'react-native';
import { MainHeader } from '../../components/Headers/Headers';
import { Body, Caption, Heading } from '../../components/Typography/Typography';
import * as Color from '../../components/Colors/colors';
import * as IconName from '../../components/Icons/IconName';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BasicButton } from '../../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../components/Basic/Spacer';
import { Icon } from '../../components/Icons/Icons';

const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MainHeader />
      <KeyboardAwareScrollView>
        <View style={styles.titlecontainer}>
          <Heading>Settings</Heading>
        </View>
        <Spacer space={20}/>
        <View style={styles.maincontainer}>
          
          
          <BasicButton
            onPress={() => {
              navigation.navigate('UserInfoScreen');
            }}
            style={styles.userinfocontainer}
          >
            <View style={styles.iconbtn}>
            <Icon name={IconName.USER} size={22} />
            </View>
            
            <View style={styles.textbtn}>
            <Body>  계정정보                                                      </Body>
          
            </View>


          </BasicButton>
          <Spacer space={16}/>
          <BasicButton
            onPress={() => {
              navigation.navigate('StarScreen');
            }}
            style={styles.starbtn}
          >
            
          <Icon name={IconName.STAR} size={22}/>
          <Body>  관심 기부단체                                                      </Body>
            
          </BasicButton>
          <Spacer space={16}/>
          <BasicButton
            onPress={() => {
              navigation.navigate('PlusScreen');
            }}
          >
            <Icon name={IconName.LIST} size={22}/>
            <Body>  기부단체 추가하기                                                      </Body>
          </BasicButton>
          <Spacer space={16}/>
          <BasicButton
            onPress={() => {
              navigation.navigate('CalScreen');
            }}
          >
            <Icon name={IconName.CHAT} size={22}/>
            <Body>  세금 계산기                                                      </Body>
          </BasicButton>
          <Spacer space={16}/>
          <BasicButton
            onPress={() => {
              navigation.navigate('StarScreen');
            }}
          >
            <Icon name={IconName.CLOSE} size={22} iconColor={Color.Danger_50}/>
            <Body color={Color.Danger_50}>  로그아웃                                                      </Body>
          </BasicButton>
           
        </View>
        <View style={styles.footcontainer}>
          <MainHeader/>
          <Caption>Version 1.0.0.</Caption>

        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White_100,
  },
  titlecontainer: {
    marginLeft: 20,
    marginTop: 10,

  },
  maincontainer: {
    marginLeft: 20,
    marginRight: 20,
   

  },
  userinfocontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    

  },
  footcontainer: {
    alignItems: 'center',
  },

});

export default UserScreen;