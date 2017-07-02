var React = require('react');
require("!style-loader!css-loader!sass-loader!../sass/components/headingBlock.scss");


class HeadingBlock extends React.Component {

  render() {

    return (
    <div className="heading-block">
      <div className="container">
      <h2>{this.props.name}</h2>
      </div>
    </div>

    )
  }
}

module.exports = HeadingBlock;
