import React from "react";
import "./App.css";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null
    };
  }
  componentDidMount() {
    this.getQuote();
  }
  getQuote() {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quotes: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.quotes ? (
          <QuoteCard
            quote={this.state.quotes.quote}
            image={this.state.quotes.image}
            character={this.state.quotes.character}
          />
        ) : (
          <p>No data yet!</p>
        )}

        <button type="button" onClick={this.getQuote}>
          New quote
        </button>
      </div>
    );
  }
}

export default App;
