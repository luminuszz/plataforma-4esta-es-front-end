/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import logo from '../../assets/photo.png';
import { useStyles } from './styles';

const SignUp: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={logo} alt="logo" />
          </Avatar>
          <Typography component="p">
            Primeira vez por aqui? Faça seu cadastro agora mesmo!
          </Typography>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Contato"
              type="phone"
              id="phone"
              autoComplete="current-phone"
            />
            <div className={classes.checkbox}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Profissional de decoração
                "
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Profissional de decoração
                "
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Já tem conta? Entre
                </Link>
              </Grid>
            </Grid>
            <Box mt={5} />
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
