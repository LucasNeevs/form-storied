import React, { ReactElement, useState } from 'react';
import {
  Table, TableHead, TableBody, TableCell, TableRow,
} from '@material-ui/core';
import Moment from 'moment';
import DefaultObject from './Panel.utils';
import { IForm } from '../Form/Form.types';

export default (): ReactElement => {
  const [content, setContent] = useState(DefaultObject);

  return (
    <div style={{ paddingTop: 20 }}>
      <Table>
        <TableHead style={{ background: 'linear-gradient(to top, #b1b1b1, lavender)' }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surrname</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            (content.length <= 0 || content === undefined)
              ? (
                <TableRow key={0}>
                  <TableCell>Loading...</TableCell>
                  <TableCell>Loading...</TableCell>
                  <TableCell>Loading...</TableCell>
                  <TableCell>Loading...</TableCell>
                  <TableCell>Loading...</TableCell>
                </TableRow>
              ) : (
                content.map((c: IForm): ReactElement<IForm> => (
                  <TableRow key={c.id}>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.surrname}</TableCell>
                    <TableCell>{Moment(c.age).format('MMMM Do YYYY')}</TableCell>
                    <TableCell>{c.gender}</TableCell>
                    <TableCell>{c.message}</TableCell>
                  </TableRow>
                ))
              )
          }
        </TableBody>
      </Table>
    </div>
  );
};
