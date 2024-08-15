import { useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import FormField from '../../components/formField'
import CustomBotton from '../../components/customBotton'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    userName:"",
    email:"",
    password:""
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit= async ()=>{
    if(!form.userName || !form.email || !form.password){
      Alert.alert("Error","Please enter all the fields")
    }

    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.userName)

      router.replace("/home")
    } catch (error:any) {
      Alert.alert("Error", error.message)
    }finally{
      setIsSubmitting(false);
    }

    // createUser();
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className='w-full justify-center px-4 my-6 min-h-[83vh]'>
          <Image 
            source={images.logo}
            resizeMode='center'
            className='w-[130px] h-[84px]'
          />
          <Text className='text-2xl font-psemibold text-white text-semibold mt-10'>Log In to Aura</Text>
          <FormField 
            title="Username"
            value={form.userName}
            handleChangeText = {(e)=>setForm({...form, userName:e})}
            keyboardType={''}
            otherStyles="mt-7"
            placeHolder="Enter your Username"
          />
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText = {(e)=>setForm({...form, email:e})}
            keyboardType="email-address"
            otherStyles="mt-7"
            placeHolder="Enter your Email"
          />
          <FormField 
            title="password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7" 
            keyboardType={''}          
            placeHolder="Enter your Password"
          />

          <CustomBotton 
            title='Sign-In'
            containerStyles='mt-7'
            handlePress={submit}
            isLoading={isSubmitting}
            textStyles=''
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg font-pregular text-gray-100'>
              Have an account already?
            </Text>
            <Link href="sign-in" className='text-lg font-psemibold text-secondary'>Sign-In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp