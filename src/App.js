import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import BooksDisplay from './components/books-display/BooksDisplay';
import BookPage from './components/book-page/BookPage';
import Navbar from './components/ui/nav/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/react-library/books/:bookId">
            <BookPage />
          </Route>
          <Route path="/react-library/" exact>
            <BooksDisplay />
          </Route>
          <Route path="*">error 404</Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
