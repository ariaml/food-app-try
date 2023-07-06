import React from 'react';
import {Grid, GridItem, Text, Stack} from '@chakra-ui/react'


function Main() {

  return (
    <Stack>
      <Text ml='2' p='4' >Cuisine</Text>
      <Grid w='100%' ml='2' templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
    </Stack>
  );
}

export default Main;