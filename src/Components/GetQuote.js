import React from "react";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      url: "",
    };
    this.quote = this.quote.bind(this);
  }
  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      this.quote();
    }
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  quote() {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then((data) => {
        var item = data[Math.floor(Math.random() * data.length)]
        this.setState({
          text: item.text,
          author: item.author,
          url: "https://twitter.com/intent/tweet?text=" + item.text + " - " + item.author
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <FaQuoteLeft /> <span id="text">{this.state.text}</span><FaQuoteRight />
            <div className="quote-author">
              - <span id="author">{this.state.author}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GetQuote;
