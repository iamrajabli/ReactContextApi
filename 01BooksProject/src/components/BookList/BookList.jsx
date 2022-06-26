import { Component } from "react";
import Book from "../Book/Book";
import './BookList.css';
import { BookContext } from "../../contexts/BookContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default class BookList extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {themeContextValue => (
                    <BookContext.Consumer>
                        {bookContextValue => {
                            const { isDarkTheme, dark, light } = themeContextValue;
                            const theme = isDarkTheme ? dark : light;
                            return (
                                <section className="page-section" style={{background: theme.bg, color:theme.txt}} id="portfolio">
                                    <div className="container">
                                        <div className="text-center">
                                            <h2 className="section-heading text-uppercase">BookFolio</h2>
                                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                        </div>
                                        <div className="row">

                                            {bookContextValue.books.map((book, i) =>
                                                (<Book books={book} key={i} />)
                                            )}

                                        </div>
                                    </div>
                                </section>
                            )
                        }}
                    </BookContext.Consumer>
                )}
            </ThemeContext.Consumer>

        )
    }
}