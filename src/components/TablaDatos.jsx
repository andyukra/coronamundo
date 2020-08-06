import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from '@material-ui/core';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import handlers from './helpers/handlers';

const useStyles = makeStyles({
    flagCell: {
        display: 'flex',
        alignItems: 'center'
    },
    tableHd: {
        background: 'rgba(0,0,0,0.8)'
    }
})

const TablaDatos = ({ data, setRowsPerPage, pagination, setPage }) => {

    const sty = useStyles();

    const filterData = () => {
        if (!data || data.length === 0) return null;
        handlers.sortData(data);
        let dataFormat = data.slice(pagination.page * pagination.rowsPerPage, pagination.rowsPerPage + pagination.page * pagination.rowsPerPage);
        const list = dataFormat.map((x, i) => {
            return (
                <TableRow key={i}>
                    <TableCell className={sty.flagCell}>
                        {handlers.filterFlag(x.CountryCode)} <p style={{ marginLeft: '5px' }}>{x.Country}</p>
                    </TableCell>
                    <TableCell align="right">
                        <Typography>{x.TotalConfirmed}</Typography>
                        <Typography variant="body2" color="textSecondary">+ {x.NewConfirmed}</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography>{x.TotalRecovered}</Typography>
                        <Typography variant="body2" color="textSecondary">+ {x.NewRecovered}</Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography>{x.TotalDeaths}</Typography>
                        <Typography variant="body2" color="textSecondary">+ {x.NewDeaths}</Typography>
                    </TableCell>
                </TableRow>
            )
        })
        return list;
    }

    const changeRowsPerPage = e => {
        setRowsPerPage(e.target.value);
        setPage(0);
    }

    const changePage = (e, newPage) => {
        let item = document.querySelector('#table').getBoundingClientRect();
        let navHeight = document.querySelector('#nav').scrollHeight;
        handlers.getStarted(window.scrollY + item.top - (navHeight + 10));
        setPage(newPage);
    }



    return (
        <TableContainer component={Paper} id="table">
            <Table>
                <TableHead>
                    <TableRow className={sty.tableHd}>
                        <TableCell align="left" style={{color : 'white'}}>País</TableCell>
                        <TableCell style={{ color: 'white' }} align="right">Casos confirmados</TableCell>
                        <TableCell style={{ color: 'white' }} align="right">Total recuperados</TableCell>
                        <TableCell style={{ color: 'white' }} align="right">Total fallecidos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterData()}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[10, 15, 20]}
                            count={!data ? 0 : data.length}
                            onChangeRowsPerPage={changeRowsPerPage}
                            rowsPerPage={pagination.rowsPerPage}
                            onChangePage={changePage}
                            page={pagination.page}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = state => ({
    data: state.data.Countries,
    pagination: state.pagination
})

const mapDispatchToProps = dispatch => ({
    setRowsPerPage(x) {
        dispatch({
            type: 'SET_ROWS_PER_PAGE',
            x
        })
    },

    setPage(x) {
        dispatch({
            type: 'SET_PAGE',
            x
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TablaDatos);