import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

import { icons } from '../constants'


const FormField = ({title, value, otherStyles, handleChangeText, keyboardType="", placeHolder}:
    {
        title:string, value:string, otherStyles:string, placeHolder:string,
        handleChangeText:(e:string)=>void, keyboardType:string
    }
) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base font-pmedium text-gray-100'>{title}</Text>
            <View className='border-2 border-black-200 w-full h-16 px-4 
            rounded-2xl bg-black-100 items-center focus:border-secondary flex-row'
            >
            <TextInput 
                className='flex-1 text-white font-psemibold text-base'
                value={value}
                placeholder={placeHolder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title==="password" && !showPassword}
            />

            {
                title==="password" &&
                <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                    <Image
                        source={!showPassword? icons.eye : icons.eyeHide}
                        resizeMode='contain'
                        className='w-6 h-6'
                    />
                </TouchableOpacity>
            }

            </View>
        </View>
    )
}

export default FormField