import AddUser from "./components/AddUser";
import Todos from "./components/Users"
import { VStack, Box, Heading, } from '@chakra-ui/react';
import './components/usercard.css'
import { useState } from "react";
function App() {
const [isUserAddedOpen, setIsUserAddedOpen] = useState(false);

const toggleIsUserAddedOpen = () => {
  setIsUserAddedOpen(!isUserAddedOpen);
}


  return (
    <>
      <VStack p='4'>
        {/* <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} /> */}
        <Box>
          <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, cyan.400, purple.400, pink.400)' bgClip='text'>User Dashboard</Heading>
        </Box>
        <button className="btn btn-success" onClick={toggleIsUserAddedOpen}>Add User</button>
         {isUserAddedOpen && <AddUser toggleIsUserAddedOpen={toggleIsUserAddedOpen} />}
        <Todos />
      </VStack>

    </>
  )
}

export default App
