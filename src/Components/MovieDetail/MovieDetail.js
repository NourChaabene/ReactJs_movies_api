import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

 
const styles = theme => ({
  content: {
  	 ...theme.mixins.gutters(),
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
     
  },
  
});
function MovieDetail(props) {
  
  const { classes } = props;
  return (
      <div>
      <Header/>
      <Footer/>
      </div>
    
    
  )
}
 
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(MovieDetail);