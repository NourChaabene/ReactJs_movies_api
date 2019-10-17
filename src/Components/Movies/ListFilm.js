import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {  Link } from 'react-router-dom';
//import RouterComponent from '.../RouterComponent'

import Api from "../../Services/Api";
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingTop:'50px',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap:'wrap',
    width: 250,
    height: 450,
   
    alignContent:'flex-start',
    transform: 'translateZ(0)'
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

class ListFilm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    Api.getAllMoviesBySearch('test')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setTimeout(() => {
            this.setState({
              isLoaded: true,
              items: result
            });
          }, (3000));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={useStyles.root}>
            <GridList cellHeight={180} className={useStyles.gridList} cols={3}>
              <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                
              </GridListTile>
          {items.map(item => (
            
              
                <GridListTile key={item.show.id} >
                  <img src='http://static.tvmaze.com/uploads/images/medium_portrait/215/538786.jpg' alt='http://static.tvmaze.com/uploads/images/medium_portrait/215/538786.jpg' onClick={()=> <Link to="/Home">Home</Link>}/>
                  <GridListTileBar
                    title={item.show.name}
                    subtitle={<span>score: {item.score}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${item.show.name}`} className={useStyles.icon} >
                        <InfoIcon  onClick={()=> console.log("done")}/>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
              
            </GridList>
            </div>
          
          
        

      );
    }
    /* <ul>
       {items.map(item => (
         <li key={item.show.id}>
           {item.show.name} {item.show.id}
         </li>
       ))}
     </ul>
   );
 }
}*/
  }
}
export default ListFilm;