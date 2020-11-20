import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { Main } from './Styles';

export default (): ReactElement => (
  <Main bgColor="lavender">
    <Typography
      variant="h2"
    >
      Formik + Yup
    </Typography>
    <Typography
      variant="h6"
    >
      React with Typescript project made by DevNvs
    </Typography>
  </Main>
);
