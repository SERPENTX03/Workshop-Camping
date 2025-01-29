import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

type formInputProps = {
  name : string,
  type : string,
  label: string,
  id: string,
  placeholder: string,
  htmlFor: string,
  className?: string,
}

const Forminput = (props: formInputProps) => {
  const {name, type, label,id,placeholder,htmlFor,className} = props
  return (
    <div className='w-[50%]'>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
       placeholder={placeholder}
       name={name}
       id={id}
       type={type}
       className={className}
        />
    </div>
  )
}

export default Forminput