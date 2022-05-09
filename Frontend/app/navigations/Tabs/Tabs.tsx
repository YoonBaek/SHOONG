import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompTest from '@screens/CompTest';
import BiometricSettings from '@screens/Settings/BiometricSettings';
import NotificationSettings from '@screens/Settings/NotificationSettings';
import Settings from '@screens/Settings/Settings';
import UserInfoSettings from '@screens/Settings/UserInfoSettings';
import Wallet from '@screens/Wallet';
import Typography from '@theme/Typography';
import { isAndroid } from '@utils/native';
import { BlurView } from 'expo-blur';
import { Cardholder, CurrencyEth, GasPump, Users, UserCircleGear } from 'phosphor-react-native';
import { StyleSheet, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components/native';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="내 지갑"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isAndroid() ? theme.cardColor : 'transparent',
          borderRadius: 40,
          padding: 10,
          height: 90,
          position: 'absolute',
          overflow: 'hidden',
        },
        tabBarBackground: () => (
          <BlurView
            tint={isDark ? 'dark' : 'light'}
            intensity={30}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      {/* <Screen
        name="지갑"
        component={Wallet}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            return <Cardholder color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="송금"
        component={() => (
          <TmpView>
            <Typography>송금</Typography>
          </TmpView>
        )}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            return <CurrencyEth color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="친구"
        component={() => (
          <TmpView>
            <Typography>친구 화면</Typography>
          </TmpView>
        )}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            return <Users color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="예약송금"
        component={() => (
          <TmpView>
            <Typography>예약 송금 화면</Typography>
          </TmpView>
        )}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            return <GasPump color={color} size={size} />;
          },
        }}
      /> */}
      <Screen
        name="설정"
        // component={Settings}
        // component={CompTest}
        component={UserInfoSettings}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            return <UserCircleGear color={color} size={size} />;
          },
        }}
      />
    </Navigator>
  );
};

export default Tabs;

const TmpView = styled.ScrollView``;
