import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import BooksDisplay from './components/books-display/BooksDisplay';
import BookPage from './components/book-page/BookPage';
import Navbar from './components/ui/nav/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/books/:bookId">
            <BookPage />
          </Route>
          <Route path="/" exact>
            <BooksDisplay />
          </Route>
          <Route path="*">error 404</Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
