import React from 'react'
import { Tabs } from 'expo-router'
import { View, Text, Image, ImageSourcePropType } from 'react-native'

import { icons } from '../../constants'

const Icon = ({name, color, icon, focused}:{name:string, color: string, icon:ImageSourcePropType, focused:boolean})=>{
  return <View className='items-center justify-center gap-2'>
    <Image
      source={icon}
      resizeMode='contain'
      tintColor={color}
      className='h-6 w-6'
    />
    <Text 
      className={`${focused? "font-psemibold":"font-pregular"} text-xs`}
      style={{color}}
    >
      {name}
    </Text>
  </View>
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle:{
          borderWidth: 1,
          backgroundColor: "#161622",
          borderTopColor:"#232533",
          height:84
        }

      }}>
        <Tabs.Screen name="home" options={{
          headerShown:false,
          tabBarIcon: ({color, focused})=>{
            return <Icon 
              color={color}
              focused={focused}
              name="Home"
              icon={icons.home}
            />
          }
        }}/>
        <Tabs.Screen name="bookmark" options={{
          headerShown:false,
          tabBarIcon: ({color, focused})=>{
            return <Icon 
              color={color}
              focused={focused}
              name="Bookmark"
              icon={icons.bookmark}
            />
          }
        }}/>
        <Tabs.Screen name="create" options={{
          headerShown:false,
          tabBarIcon: ({color, focused})=>{
            return <Icon 
              color={color}
              focused={focused}
              name="create"
              icon={icons.plus}
            />
          }
        }}/>
        <Tabs.Screen name="profile" options={{
          headerShown:false,
          tabBarIcon: ({color, focused})=>{
            return <Icon 
              color={color}
              focused={focused}
              name="profile"
              icon={icons.profile}
            />
          }
        }}/>
      </Tabs>
    </>
  )
}

export default TabsLayout