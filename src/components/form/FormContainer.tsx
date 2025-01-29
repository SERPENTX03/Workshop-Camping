"use client"

import React from 'react'
import { useActionState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import { actionFuction } from '@/utils/Types'

const initiaState = { 
  message: ' '
}


const FormContainer = ({action,children}:
  {action:actionFuction, children:React.ReactNode}) => {
  const {toast} = useToast()
  const [state, formAction] = useActionState(action,initiaState)
  // console.log(state)
  
  useEffect(()=> {
    if(state.message){
      toast({description:state.message})
    }
  },[state])

  return (
    <form action={formAction}>
      {children}
      </form>
  ) 
}

export default FormContainer