import React from "react";

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      url: ""
    };
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
}

export default GetQuote;