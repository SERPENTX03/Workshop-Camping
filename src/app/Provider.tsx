import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster";

const Provider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
  )
}

export default Provider