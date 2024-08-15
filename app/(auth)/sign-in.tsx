import { useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import FormField from '../../components/formField'
import CustomBotton from '../../components/customBotton'
import { signIn } from '../../lib/appwrite'

const SignIn = () => {
  const [form, setForm] = useState({
    email:"",
    password:""
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit= async ()=>{
    console.log("working1")
    if(!form.email || !form.password){
      Alert.alert("Error","Please enter all the fields")
    }

    console.log("working2")
    setIsSubmitting(true)
    try {
      console.log("working3")
      await signIn(form.email, form.password)
      console.log("working4")
      router.replace("/home")
    } catch (error:any) {
      console.log("Notworking1")
      Alert.alert("Error", error.message)
    }finally{
      console.log("workingFinal")
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
            title="Email"
            value={form.email}
            handleChangeText = {(e)=>setForm({...form, email:e})}
            keyboardType="email-address"
            otherStyles="mt-7"
            placeHolder="Enter your Email"
          />
          <FormField 
            title="Password"
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
              Don't have an account?
            </Text>
            <Link href="sign-up" className='text-lg font-psemibold text-secondary'>Sign-Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn