import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import BooksDisplay from './components/books-display/BooksDisplay';
import BookPage from './components/book-page/BookPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/books/:bookId">
            <BookPage />
          </Route>
          <Route path="/" exact>
            <BooksDisplay />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
