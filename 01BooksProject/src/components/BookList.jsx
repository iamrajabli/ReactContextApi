import { Component } from "react";
import Book from "./Book";
import './BookList.css';

export default class BookList extends Component {

    render() {
        const { books } = this.props;

        const bookList = books.map((book, i) => {
            return <Book books={book} key={i} />
        })
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">BookFolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">

                        {bookList}

                    </div>
                </div>
            </section>
        )
    }
}