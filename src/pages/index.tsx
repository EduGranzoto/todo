import React, { useState } from "react"
import { Flex, Box, Heading, Input, Button, FormControl } from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa";

export default function Home() {
  const [task, setTask] = useState('')
  const [listTask, setListTask] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setTask('')
    setListTask([...listTask, task])
  }

  return (
    <>
      <Flex width="100%" height="auto" justifyContent="center">
        <Flex as="form" 
          width="100%" 
          maxWidth={890}
          bg='white' 
          padding={8} 
          borderRadius={8} 
          direction="column" 
          onSubmit={ handleSubmit }
        >
          <Box p={5} shadow='md' borderWidth='1px'>
            <Heading fontSize='xl'>Task</Heading>           
            <FormControl display="flex" flexDirection="row">
              <Input value={ task } onChange={ (e) => setTask(e.currentTarget.value) } variant='flushed' placeholder="Task" mt={4} />
              <Button type="submit" size="sm" colorScheme="blue" mt={5}>
                <FaPlus size="sm" /> &nbsp;
                Adicionar
              </Button>
            </FormControl>           
          </Box>

          <Box p={5} shadow='md' borderWidth='1px'>
            <Heading fontSize='xl'>List To Do</Heading>           
            <Flex mt={6} direction="column">
              {
                listTask.length > 0 ? listTask.map((result, chave) => (
                  <Box 
                    p={2} 
                    mb={2} 
                    border="1px" 
                    borderColor="blue.200" 
                    borderRadius="lg" 
                    key={ chave } 
                    display="flex" 
                    flexDirection="row" 
                    width="100%"
                  >
                    <p>{result}</p>
                    <div>
                      dsdasds
                    </div>
                  </Box>
                )) : 'Está vazio'
              }
            </Flex>         
          </Box>
        </Flex>       
      </Flex>
    </>
    
  )
}
