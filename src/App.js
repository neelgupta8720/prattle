import logo from './logo.svg';
import './App.css';
import Card from "./Card"
import Navbar from "./Navbar"
import { ChakraProvider } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import Ca from "./Ca"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Ca />

        <Grid templateColumns='repeat(3, 1fr)' gap={3}>
          <Card />
          <Card />
          <Card />
        </Grid>

        <Grid templateColumns='repeat(3, 1fr)' gap={3} mt="5%">
          <Card />
          <Card />
          <Card />
        </Grid>


        <Grid templateColumns='repeat(3, 1fr)' gap={3} mt="5%">
          <Card />
          <Card />
          <Card />
        </Grid>

        <Footer />

      </ChakraProvider>

    </div>
  );
}

export default App;
