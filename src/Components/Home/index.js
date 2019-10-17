import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar'
import ListFilm from '../Movies/ListFilm';

 
const styles = theme => ({
  content: {
  	 ...theme.mixins.gutters(),
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
     
  },
  
});
function Home(props) {
  
  const { classes } = props;
  return (
    <div>
    <SearchBar
      dataSource={[]}
      
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 25px',
        maxWidth: 800,
        marginTop:'25px',
        marginLeft:'auto',
        marginRight:'auto'
      }}
    />
      
    
    <ListFilm/>
    </div>
    
  )
}
 
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Home);

 
 
      
 
//export default withStyles(styles)(Home);