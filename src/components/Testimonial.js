var React = require('react');
require("!style-loader!css-loader!sass-loader!../sass/components/testimonial.scss");


class Testimonial extends React.Component {

  render() {

    return (
      <div className="testimonial-wrapper">
        <div className="container">
          <p>Kinfolk squid godard vaporware iPhone gentrify typewriter. Four dollar toast pork belly biodiesel lyft roof party four loko health goth chicharrones. Tofu prism typewriter air plant. Kinfolk chia seitan, 3 wolf moon meh pour-over.</p>
          <span className="testimonial-name">Indiana Jones, Archeologist</span>
        </div>
      </div>
    )
  }
}

module.exports = Testimonial;
