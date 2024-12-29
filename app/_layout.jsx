import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: Colors.dark.background,
            width: 250,
          },
          drawerLabelStyle: {
            color: Colors.dark.text,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
          }}
        />
        <Drawer.Screen
          name="deposit"
          options={{
            drawerLabel: 'Deposit',
            title: 'Deposit',
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen
          name="withdraw"
          options={{
            drawerLabel: 'Withdraw',
            title: 'Withdraw',
            drawerItemStyle: { display: 'none' },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
