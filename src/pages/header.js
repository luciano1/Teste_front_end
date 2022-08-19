import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  itenBotton: {
    flexGrow: 1,
  },
  itenBottonPonto: {
    flexGrow: 1,
    default: "#e91e63",
    hover: "#ad1457"
  },
}));
// function sayHello() {
//   alert('Apertou');
// }



export default function Header() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              X
            </IconButton>
            <Typography variant="h6" className={classes.itenBotton}>
              Registro de pontos
            </Typography>
            {/* <Typography variant="h6" className={classes.itenBottonPonto} onClick={sayHello} >
              Meu ponto
            </Typography> */}
            <Link to="/Ponto">
              <Button color="primary" variant="contained">Meu ponto</Button>
            </Link>
            <Link to="/Cadastro">
              <Button color="primary" variant="contained">Novos Usuarios</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

    </Fragment>
  );
}
