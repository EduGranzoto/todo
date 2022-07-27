import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    styles: {
        colors: {
            
        },
        fonts: {
            heading: "Roboto", 
            body: "Roboto"
        },
        global: {
            body: {
                bg: "gray.900", 
                color: "gray.900"               
            }
        }
    }
})