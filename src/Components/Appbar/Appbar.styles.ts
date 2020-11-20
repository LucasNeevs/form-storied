import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  title: any;
}

export default makeStyles((theme: Theme): IStyles => ({
  title: {
    padding: theme.spacing(1),
    fontFamily: 'Segoe UI',
    color: 'snow',
  },
}));
