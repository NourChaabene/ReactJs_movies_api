import React from 'react';
import Api from '../../Services/Api';
import './style.scss'

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: '',
      movie: {
        genres: [],
        rating: {}
      }
    };
  }
  componentDidMount() {
	document.getElementsByClassName('footer')[0].style.position = 'fixed'
    const { id } = this.props.match.params
    Api.getMovieById(id).then(res => res.json()).then(result => {
      this.setState({ movie: result })
      console.log(this.state.movie)
    }).catch(
      (error) => {
        console.error(error)
      }
    )
  }
  render() {
    return (
      <div style={{display: 'flex', 'justify-content': 'space-between'}}>
        <div>
          <img className="left-info" alt="movie-img" style={{ 'max-width': 300 }} src={this.state.movie.image && this.state.movie.image.original} />
          <img className="left-info blurry" alt="movie-img" style={{ 'max-width': 300 }} src={this.state.movie.image && this.state.movie.image.original} />
        </div>
        <div className="right">
          <h1 className="movie-title">{this.state.movie.name}</h1>
          <h5> Rating: {this.state.movie.rating.average} /5</h5>
          <h5> Premiered: {this.state.movie.premiered}</h5>
          <p className="movie-summary">
            {this.state.movie.summary && this.state.movie.summary.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>
          <p className="movie-link">
            <a href={this.state.movie.url}>{this.state.movie.url}</a>
          </p>
          <p className="movie-website">{this.state.movie.officialSite}</p>
          <h2>Genres</h2>
        <ul>{
          this.state.movie.genres.map(item => (
            <li>{item}</li>
          ))
        }</ul>
        </div>

      </div>
    )
  }
}


export default MovieDetail
