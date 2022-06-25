import { Component } from "react";
import BookList from "./BookList";
import BookContext from '../contexts/BookContext';
export default class App extends Component {

    static contextType = BookContext;

    render() {
        const books = this.context;
        return (
            <BookList books={books}/>
        )
    }
}