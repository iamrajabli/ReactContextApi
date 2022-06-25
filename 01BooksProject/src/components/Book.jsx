import { Component } from "react"
import './Book.css';

export default class Book extends Component {
    render() {
        const { author, imageURL, pageNum, title, topic } = this.props.books;
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><span className="plus">+</span></div>
                        </div>
                        <img className="img-fluid" src={imageURL} alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{title}</div>
                        <div className="portfolio-caption-subheading text-muted">{author}</div>
                    </div>
                </div>
            </div>
        )
    }
}