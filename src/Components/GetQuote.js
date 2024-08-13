import React from 'react';
import {
  FaTwitter, FaQuoteLeft, FaTumblr,
}
  from 'react-icons/fa';

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      url: '',
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
    fetch('https://raw.githubusercontent.com/AtaGowani/daily-motivation/master/src/data/quotes.json')
      .then((response) => response.json())
      .then((data) => {
        const item = data[Math.floor(Math.random() * data.length)];
        this.setState({
          quote: item.quote,
          author: item.author,
          url: `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22I%20am%20not%20a%20product%20of%20my%20circumstances.%20I%20am%20a%20product%20of%20my%20decisions.%22%20Stephen%20Covey ${item.quote}  -  ${item.author}`,
          tumblr: `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Stephen%20Covey&content=I%20am%20not%20a%20product%20of%20my%20circumstances.%20I%20am%20a%20product%20of%20my%20decisions.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button ${item.quote}  -  ${item.author}`,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {
      quote, author, url, tumblr,
    } = this.state;
    return (
      <div id="wrapper">
        <h2>Randome Quote Machine</h2>
        <br />
        <div id="quote-box">
          <div className="quote-text">
            <i><FaQuoteLeft /></i>
            <span id="text">{quote}</span>
          </div>
          <div className="quote-author">
            -
            <span id="author">{author}</span>
          </div>
          <div className="buttons">
            <a className="button" id="tweet-quote" aria-label="Tweet this quote!" target="_blank" rel="noopener noreferrer" href={url}>
              <i><FaTwitter /></i>
            </a>
            <a className="button" id="tumblr-quote" aria-label="Post this quote on tumblr!" target="_blank" rel="noopener noreferrer" href={tumblr}>
              <i><FaTumblr /></i>
            </a>
            <button className="button" id="new-quote" type="button" onClick={this.quote}>New quote</button>
          </div>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://najeeba-qarqin.github.io/Portfolio-JS/">by najeeba</a>
      </div>
    );
  }
}

export default GetQuote;
