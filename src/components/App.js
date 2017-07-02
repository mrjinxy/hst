var React = require('react');
var Cta = require('./Cta');
var FilterableContent = require('./FilterableContent');
var Testimonial = require('./Testimonial');
var HeadingBlock = require('./HeadingBlock');

class App extends React.Component {
  render() {
    return (
      <div>
        <HeadingBlock name="Exercise 1 - Testimonial Block" />
        <Testimonial />
        <HeadingBlock name="Exercise 2 - CTA Quote" />
        <Cta />
        <HeadingBlock name="Exercise 3 - Filterable Content" />
        <FilterableContent />
      </div>
    )
  }
}

module.exports = App;