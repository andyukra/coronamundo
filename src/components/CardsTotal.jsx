import React from 'react';
import { connect } from 'react-redux';
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { Typography, Grid, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardCenter:{
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

const CardsTotal = ({ data }) => {

    const sty = useStyles();

    const filterData = x => {
        if (!data || data.length === 0) return null;
        switch (x) {
            case 'mundial': return data.Global.TotalConfirmed;
            case 'saved': return data.Global.TotalRecovered;
            case 'death': return data.Global.TotalDeaths;
            default: return null;
        }
    }

    const filterNew = x => {
        if (!data || data.length === 0) return null;
        switch (x) {
            case 'mundial': return data.Global.NewConfirmed;
            case 'saved': return data.Global.NewRecovered;
            case 'death': return data.Global.NewDeaths;
            default: return null;
        }
    }

    return (
        <section style={{margin:'20px 0'}}>
            <Grid container spacing={4} justify="center">
                <Grid item md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="caso"
                                height="140"
                                image="/img/mundial.jpg"
                                title="casos mundial"
                        />
                        <CardContent className={sty.cardCenter}>
                            <Typography align="center" color="error" variant="h4">Infectados</Typography>
                            <Chip
                                size="medium"
                                label={filterData('mundial')}
                                style={{margin:'15px 0'}}
                                color="secondary"
                                component="h1"
                                variant="outlined"
                            />
                            <Typography variant="body2" color="textSecondary" align="center">
                                + {filterNew('mundial')}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="caso"
                                height="140"
                                image="/img/saved.jpg"
                                title="recuperados mundial"
                        />
                        <CardContent className={sty.cardCenter}>
                            <Typography align="center" color="primary" variant="h4">Recuperados</Typography>
                            <Chip
                                size="medium"
                                label={filterData('saved')}
                                style={{margin:'15px 0'}}
                                color="primary"
                                component="h1"
                                variant="outlined"
                            />
                            <Typography variant="body2" color="textSecondary" align="center">
                                + {filterNew('saved')}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="caso"
                                height="140"
                                image="/img/death.jpg"
                                title="muertos mundial"
                        />                        
                        <CardContent className={sty.cardCenter}>
                            <Typography align="center" variant="h4">Fallecidos</Typography>
                            <Chip
                                size="medium"
                                label={filterData('death')}
                                style={{margin:'15px 0'}}
                                component="h1"
                                variant="outlined"
                            />
                            <Typography variant="body2" color="textSecondary" align="center">
                                + {filterNew('death')}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </section>
    )
}

const mapStateToProps = state => ({
    data: state.data
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CardsTotal);