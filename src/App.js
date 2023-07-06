import React from 'react';
import {Icon} from '@chakra-ui/icon'
import {IconButton} from "@chakra-ui/button";
import {HStack, Switch, Heading, Spacer, Button, Input, Stack} from '@chakra-ui/react';
import {useColorMode} from "@chakra-ui/color-mode";
import {IoFastFoodOutline} from 'react-icons/io5';
import {BsFillBasket3Fill} from 'react-icons/bs';

import Main from './components/Main';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack>
      <HStack bg='orange' p={3} w='100%'>
        <Icon ml='5' as={IoFastFoodOutline} boxSize={7} color='white' />
        <Heading size='md' fontWeight='semibold' color='white'>foodapp</Heading>
        <Spacer></Spacer>
        <Input variant='outline' placeholder='Search for food or restaurants' width='500px' bg='white' />
        <Spacer></Spacer>
        <IconButton mr='5' icon={<BsFillBasket3Fill />} color='white' bg='transparent'></IconButton>
        <Button color='white' variant='link' mr='10' >Log In</Button>
        <Switch colorScheme='teal' size='md' isChecked={isDark} onChange={toggleColorMode}/>
      </HStack>
        <Main></Main>
    </Stack>

  );
}

export default App;