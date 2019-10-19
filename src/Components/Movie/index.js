import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';
import './search.scss';
import Api from '../../Services/Api';
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      query: ''
    };
  }
  handleClick = (e) => {
    e.preventDefault()
    Api.getAllMoviesBySearch(this.state.query).then(res => res.json()).then(result => {
      this.setState({
        isLoaded: true,
        items: result
      });
    })
  }
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }
  returnImage = (e) => {
    return `background-img:url(${e.show.image.medium})`
  }
  componentDidMount() {
    Api.getAllMoviesBySearch('Nobo').then(res => res.json()).then(result => {
      this.setState({
        isLoaded: true,
        items: result
      });
    }).catch(
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render() {
    return (
      <div>
        <form class="search-container" onSubmit={this.handleClick}>
          <input type="text" id="search-bar" placeholder="Choose your taste" onChange={this.handleChange} />
          <a onClick={this.handleClick}><img class="search-icon" alt="icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
        </form>
        <div class="container">
          {
            this.state.items.map(item => (
              <Link to={`/detail/${item.show.id}`}>
                <div class="movie" key={item.show.id} >
                  <img class="movie-img" src={item.show.image && item.show.image.original || 'https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg'} />
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>{item.show.name.replace(/\s\s+/g, ' ')}</h1>
                        <ul class="movie-gen">
                          <li>PG-13  /</li>
                          <li>2h 49min  /</li>
                          <li>{item.show.genres}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>SUMMARY</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
                          <li><i class="material-icons">&#xE813;</i>124</li>
                          <li><i class="material-icons">&#xE813;</i>3</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="col1">
                        <p class="movie-description">{(item.show.summary || '').slice(0, 256) + '...'} </p>
                      </div>
                    </div>
                    <div class="mr-grid action-row">
                      <div class="col2"><div class="watch-btn"><h3><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
                      </div>
                      <div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
                      </div>
                      <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
                      </div>
                      <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
                      </div>
                    </div>

                  </div>


                </div>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}
export default Movie;