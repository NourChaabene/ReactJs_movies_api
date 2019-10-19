
import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './footer.css'

export default function Footer(props) {
  return (
    <Paper className="footer">
      <Typography component="h6">
        Nobo ©
          </Typography>
      <Typography component="p">
        All right reserved
          </Typography>
    </Paper>
  );
}
