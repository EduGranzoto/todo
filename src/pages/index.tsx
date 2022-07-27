import { Flex, Box, Heading, Text, Input } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex width="100%" height="100vh" justifyContent="center">
      <Flex as="form" 
        width="100%" 
        maxWidth={890}
        bg='white' 
        padding={8} 
        borderRadius={8} 
        direction="column"
      >
        <Box p={5} shadow='md' borderWidth='1px'>
          <Heading fontSize='xl'>List To Do</Heading>
          <Input variant='flushed' placeholder="Task" mt={4} />
        </Box>
      </Flex> 
     
    </Flex>
    
  )
}
