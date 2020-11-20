import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: any;
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: 'lavender',
  },
}));
