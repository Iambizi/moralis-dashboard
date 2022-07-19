import { Box } from "@chakra-ui/react"

const CustomContainer = ({children}) =>{
    return(
        <>
        <Box bg="white" width="fulll" height="full" px="20" py="10" rounded="lg" shadow="lg" text="align-left">
            {children}
        </Box>
        </>
    )
}

export default CustomContainer;