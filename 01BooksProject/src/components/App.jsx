import React from 'react';
import BookList from './BookList';
import BookContextProvider from '../contexts/BookContext/';
const App = () => {

    return (
        <BookContextProvider>
            <BookList />
        </BookContextProvider>
    )
}

export default App;


