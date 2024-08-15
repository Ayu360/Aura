import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomBotton = ({title, handlePress, textStyles, isLoading, containerStyles}:
    {title:string, handlePress:()=>void, textStyles:string, isLoading:boolean, 
        containerStyles:string}
) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center 
            items-center ${containerStyles} ${isLoading?"opacity-50":""}`}
        disabled={isLoading}
    >
      <Text className={`text-primary text-lg font-psemibold${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBotton