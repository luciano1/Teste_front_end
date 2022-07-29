import React, { Fragment, Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Header from '../header';
import { Button, withStyles } from '@material-ui/core';
import api from '../../services/api';


const useStyles = theme => ({
  table: {
    minWidth: 650,
  },
  button: {
    marginTop: 6,
  },
  field: {
    margin: '1%',
  }
});

function createData(name, cpf, age, email) {
  return { name, cpf, age, email };
}

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowsUser: [],
      campoPreenchido: "",
    }
  }

  async doResearch() {
    const response = await api.get('/users/' + this.state.campoPreenchido);
    let pesquisa = response.data;
    let rows_temp = [];

    pesquisa.map(function (user) {
      rows_temp.push(createData(user.name, user.cpf, user.idade, user.email));
      return rows_temp;
    });
    this.setState({
      rowsUser: rows_temp
    });
  }

  async getData() {
    const response = await api.get('/users');
    let users_raw = response.data;
    let rows_temp = [];

    users_raw.map(function (user) {
      rows_temp.push(createData(user.name, user.cpf, user.idade, user.email));
      return rows_temp;
    });
    this.setState({ rowsUser: rows_temp });
  }

  onChange(ev) {
    const { name, value } = ev.target;
    this.setState({ [name] : value });
    console.log(this.state.campoPreenchido);
  }

  componentDidMount() {
    this.getData();
  }

  handleKeyDown(event){
    if (event.key==='Enter') {
      this.doResearch();
      console.log("enter foi pressionado");
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Header />
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.field} onChange={(e) => this.onChange(e)} name="campoPreenchido" id="standard-basic" label="" placeholder="Pesquisar por nome" onKeyDown={(e) => this.doResearch(e)} />
            <Button id={1} className={classes.button} onClick={() => this.doResearch()} variant="contained" color="primary">
              Pesquisar
          </Button>
          </form>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">CPF</TableCell>
                <TableCell align="right">Idade</TableCell>
                <TableCell align="right">E-mail</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rowsUser.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.cpf}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Fragment>
    );
  }
}

export default withStyles(useStyles)(Main)
