import Todos from "./components/Users"
import { VStack, IconButton, Box, Heading, useColorMode } from '@chakra-ui/react';
function App() {



  return (
    <>
      <VStack p='4'>
        {/* <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} /> */}
        <Box>
          <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, cyan.400, purple.400, pink.400)' bgClip='text'>User Dashboard</Heading>
        </Box>
        <Todos />
      </VStack>

    </>
  )
}

export default App
