var React = require('react');
var FilteredContentList = require('./FilteredContentList');
require("!style-loader!css-loader!sass-loader!../sass/components/filterableContent.scss");


class GenreList extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>
      <div className="filters-dropdown_genres">
            <label>
            <input type="checkbox" />
            Action</label>
                        <label>
            <input type="checkbox" />
            Mystery</label>
                        <label>
            <input type="checkbox" />
            Crime</label>
      </div>
      </div>
    )
  }
}


class FilterableContent extends React.Component {
  constructor() {
    super();
    this.state = {
      showGenres: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showGenres: !this.state.showGenres})
  }

  render() {








return (

<section>
  <div className="filters-wrapper">
    <div className="container">
      <div>
        <div>
          <div className="filters-dropdown-wrapper">
            <span className="filters-dropdown" onClick={this.onClick.bind(this)}>Genre</span>
            <div >
              {this.state.showGenres && < GenreList / >}
            </div>
          </div>
          <div  className="filters-dropdown-wrapper" >
            <span className="filters-dropdown">Year</span>
            <div >
              {this.state.showYear && < YearList / >}
            </div>
          </div>
          <div className="filters-searchbar">
            <input type="text" />
          </div>
        </div>
        <div className="filters-checkbox">
          <div className="filters-checkbox_wrapper">
            <label>
            <input type="checkbox" />
            Movies</label>
          </div>
          <div className="filters-checkbox_wrapper">
            <label>
            <input type="checkbox" />
            Books</label>
          </div>
          <div  className="filters-clear">
            <a href="#">Clear filters</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="filterable-content-wrapper">
    <div className="container">
      <div id="filter-list">
          <FilteredContentList />
      </div>
    </div>
  </div>
</section>

    )
  }
}

module.exports = FilterableContent;
