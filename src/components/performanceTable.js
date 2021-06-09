import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(metric, portfolio, benchmark) {
  return { metric, portfolio, benchmark };
}

const rows = [
  createData('Return', 9.62, 7.58),
  createData('Std Dev', 9.70, 10.16),
  createData('Sharpe Ratio', 9.70, 10.16),
  createData('Down Capture Ratio', 86.88, 100.00),
  createData('Up Capture Ratio', 103.85, 100.00),

];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function PerformanceTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>Time Period: Since Common Inception (1/1/2018) to 31/3/2021 </caption>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Metric</StyledTableCell>
            <StyledTableCell align="right">Portfolio</StyledTableCell>
            <StyledTableCell align="right">Benchmark</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.metric}>
              <StyledTableCell component="th" scope="row">
                {row.metric}
              </StyledTableCell>
              <StyledTableCell align="right">{row.portfolio}</StyledTableCell>
              <StyledTableCell align="right">{row.benchmark}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
