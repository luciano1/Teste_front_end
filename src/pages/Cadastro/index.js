import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Header from '../header';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  grade: {
    margin: "0 auto",
  },
  line: {
    minWidth: "98%",
  },
  button: {
    height: '90%',
    width: "20%",
    float: "right",
    marginRight: "1%"
  }
}));

export default function Cadastro() {
  const classes = useStyles();
  const initialValue = {};
  const [values, setValues] = useState(initialValue);
  const navigate = useHistory();

  function onSubmit(ev) {
    ev.preventDefault();

    api.post('/users', values)
      .then((response) => {
        navigate.push('/');
      });
  }

  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Fragment>
      <Header />
      <form className={classes.root} onChange={onChange}>
        <div className={classes.grade} >
          <TextField className={classes.line} label="Nome" name="name" onChange={onChange} />
          <TextField className={classes.line} label="CPF" name="cpf" onChange={onChange} />
          <TextField className={classes.line} label="Idade" name="age" onChange={onChange} />
          <TextField className={classes.line} label="E-mail" name="email" onChange={onChange} />
        </div>
        <Button className={classes.button} onClick={onSubmit} variant="contained" color="primary" type="onSubmit">
          Cadastrar
        </Button>
        <Link to="/">
          <Button className={classes.button} variant="outlined" color="primary">
            Ver Cadastros
        </Button>
        </Link>
      </form>
    </Fragment>
  );
}
