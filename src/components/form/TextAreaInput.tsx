

import { Textarea } from "@/components/ui/textarea"

type TextAreaProps = {
    name: string,
    labelText?:string,
    defaultValue?: string
}



import React from 'react'
import { Label } from "../ui/label"

const TextAreaInput = (props: TextAreaProps) => {
    const { name, labelText,defaultValue } = props
    return (
    <div className="mb-4">
        <Label 
        className="capitalize" htmlFor={name}>{labelText || name}</Label>
        
        <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        />
</div>
  )
}

export default TextAreaInput