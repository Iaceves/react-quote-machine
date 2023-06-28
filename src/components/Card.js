import React from "react";
import "./card-style.css";
import axios from "axios";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "Only do what your heart tells you.",
      author: "Princess Diana",
    };
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  onSubmitHandle = () => {
    axios.get("http://localhost:3001/quotes").then((response) => {
      // Handle the successful response
      const quotes = response.data;
      const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomQuoteIndex];
      this.setState({
        quote: randomQuote.quote,
        author: randomQuote.author,
      });
    });
  };

  render() {
    return (
      <>
        <div id="quote-box">
          <h2 id="text">
            <img
              src="https://www.pngall.com/wp-content/uploads/4/Quotation-Symbol-PNG.png"
              className="img-colon"
              alt="colon"
            ></img>
            {this.state.quote}
          </h2>
          <h5 id="author">-{this.state.author}</h5>
          <div className="twitter-button">
            <a href="twitter.com/intent/tweet">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png"
                id="tweet-quote"
                alt="twitter-link"
              ></img>
            </a>
            <button id="new-quote" onClick={this.onSubmitHandle}>
              New Quote
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
