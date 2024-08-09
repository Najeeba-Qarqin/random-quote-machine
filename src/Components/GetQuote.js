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
          url: `https://x.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22I+am+not+a+product+of+my+circumstances.+I+am+a+product+of+my+decisions.%22+Stephen+Covey ${item.quote}  -  ${item.author}`,
          tumblr: `https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DStephen%2BCovey%26content%3DI%2Bam%2Bnot%2Ba%2Bproduct%2Bof%2Bmy%2Bcircumstances.%2BI%2Bam%2Ba%2Bproduct%2Bof%2Bmy%2Bdecisions.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button ${item.quote}  -  ${item.author}`,
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
            <p>
            <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer" href={url}>
              <i><FaTwitter /></i>
            </a>
            </p>
            <p>
            <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" rel="noopener noreferrer" href={tumblr}>
              <i><FaTumblr /></i>
            </a>
            </p>
            <button className="button" id="new-quote" type="button" onClick={this.quote}>New quote</button>
          </div>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://najeeba-qarqin.github.io/Portfolio-JS/">by najeeba</a>
      </div>
    );
  }
}

export default GetQuote;
