import React, { Component } from "react";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      wordRequest: this.props.wordRequest,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.unsplash.com/search/photos/?client_id=_pMC_WA-MiyVV-gZn53SDrkhWM9Yc5Uimzk8nZ2PcUc&page=1&query=" +
        this.state.wordRequest
    )
      .then((response) => response.json())
      .then((data) => {
        let pictures = data.results.map((pic, index) => {
          return (
            <div key={index}>
              <img src={pic.urls.regular} />
            </div>
          );
        });
        this.setState({
          pictures: pictures,
        });
      });
  }

  componentDidUpdate() {
    let url =
      "https://api.unsplash.com/search/photos/?client_id=_pMC_WA-MiyVV-gZn53SDrkhWM9Yc5Uimzk8nZ2PcUc&page=1&query=" +
      this.state.wordRequest;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let pictures = data.results.map((pic, index) => {
          return (
            <div key={index}>
              <img src={pic.urls.regular} />
            </div>
          );
        });
        this.setState({
          pictures: pictures,
        });
      });
  }

  componentWillReceiveProps({ wordRequest }) {
    this.setState({ ...this.state, wordRequest });
  }

  render() {
    return <div>{this.state.pictures}</div>;
  }
}

export default Api;
