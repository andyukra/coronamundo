import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Hidden } from '@material-ui/core';
import handlers from './helpers/handlers';
import styles from './helpers/bannerStyles';
import { connect } from 'react-redux';

const useStyles = makeStyles(styles);

const Banner = ({cardsScroll}) => {

    const sty = useStyles();

    return (
        <section className={sty.root}>
            <div className={sty.inBann}>
                <Typography variant="h2" className={sty.banTitle}>
                    Datos mundiales del coronavirus
                </Typography>
                <Hidden mdDown>
                    <div className={sty.divid}></div>
                </Hidden>
                <Hidden mdDown>
                    <div>
                        <Typography variant="h4" style={{ margin: '0 10px' }}>
                            Información actualizada sobre la situación de la pandemia en el mundo.
                    </Typography>
                        <Button
                            variant="outlined"
                            color="inherit"
                            style={{ margin: '10px 0 0 10px' }}
                            onClick={() => handlers.getStarted(cardsScroll)}
                            >
                            Comenzar
                        </Button>
                    </div>
                </Hidden>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    cardsScroll : state.cardsScroll
});

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);