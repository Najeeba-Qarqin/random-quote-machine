import React from "react";
import { FaTwitter, FaQuoteLeft, FaQuoteRight, FaTumblr } from "react-icons/fa";

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      url: "",
      tumblr: '',
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
          url: "https://twitter.com/intent/tweet?text=" + item.text + " - " + item.author,
          tumblr: 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + item.text + " - " + item.author,
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div id="wrapper">
        <h2>Randome Quote Machine</h2><br/>
        <div id="quote-box">
          <div className="quote-text">
            <FaQuoteLeft /> <span id="text">{this.state.text}</span><FaQuoteRight />
          </div>
          <div className="quote-author">
            - <span id="author">{this.state.author}</span>
          </div>
          <div className="buttons">
            <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer" href={this.state.url}>
              <FaTwitter />
            </a>
            <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" rel="noopener noreferrer" href={this.state.tumblr}>
              <FaTumblr />
            </a>
            <button className="button" id="new-quote" onClick={this.quote}>New quote</button>
          </div>
        </div>
            <a target="_blank" rel="noopener noreferrer" href=''>by najeeba</a>
      </div>
    );
  }
};

export default GetQuote;
