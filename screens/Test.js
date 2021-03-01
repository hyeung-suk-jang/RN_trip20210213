import React,{useCallback, useState} from 'react'
import {Text,TouchableOpacity} from 'react-native'
const Test=()=>{
const[count,setCount]=React.useState()

const __Testing=useCallback(()=>{
    setCount((previousState)=>console.log(previousState))
},[setCount,count])

    return(<TouchableOpacity onPress={()=>__Testing()}>
        <Text>Test</Text>
    </TouchableOpacity>)
}
export default Test