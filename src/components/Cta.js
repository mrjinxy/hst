var React = require('react');
require("!style-loader!css-loader!sass-loader!../sass/components/cta.scss");


class Cta extends React.Component {

  render() {
    var jokes;
    var xhttp = new XMLHttpRequest();
    var getJoke = function() {
      xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
      xhttp.send();
    }

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        jokes = JSON.parse(this.responseText);
        showJoke(jokes);
      }
    };

    var showJoke = function (joke) {
      var quoteElement = document.getElementById('joke');
      quoteElement.innerHTML = joke.value.joke;
    }

    getJoke();

    return (
      <section className="cta-wrapper">
        <div className="container">
          <p id="joke"></p>
          <a onClick={getJoke}>Tell Me More</a>
        </div>
      </section>
      )
  }
}

module.exports = Cta;
