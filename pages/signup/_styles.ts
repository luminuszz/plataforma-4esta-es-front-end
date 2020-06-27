import { makeStyles } from '@material-ui/core/styles';

import signupImage from '../../assets/02.png';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${signupImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#fff',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  checkbox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  submit: {
    height: 40,
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.success[50],
  },
}));
