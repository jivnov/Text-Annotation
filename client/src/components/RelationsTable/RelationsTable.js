import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { getRelations } from '../../actions/relations';

class RelationsTable extends Component {
  state = {
    relations: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:27017/relations")
      .then((response) => {
        this.setState({ relations: response.data });
        // setRelations(relations => response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Power</TableCell>
              <TableCell align="right">Word 1</TableCell>
              <TableCell align="right">Word 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.relations.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.relation_name}
                </TableCell>
                <TableCell align="right">{row.relation_power}</TableCell>
                <TableCell align="right">{row.word1}</TableCell>
                <TableCell align="right">{row.word2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
}

export default RelationsTable;