import React, { ReactElement } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './Appbar.styles';

export default (): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar>
      <Typography
        variant="h4"
        component="p"
        className={classes.title}
      >
        DevNvs
      </Typography>
    </AppBar>
  );
};
