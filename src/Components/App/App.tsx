/* eslint-disable no-alert */
import React, { ReactElement } from 'react';
import Appbar from '../Appbar/Appbar';
import Header from '../Header/Header';
import Form from '../Form/Form';

export default (): ReactElement => (
  <>
    <Appbar />
    <Header />
    <Form />
  </>
);
