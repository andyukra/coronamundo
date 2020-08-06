import React from 'react';
import { Container, Typography, Fab, Hidden } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';
import TablaDatos from './TablaDatos.jsx';
import CardsTotal from './CardsTotal.jsx';
import Footer from './Footer.jsx';
import { connect } from 'react-redux';
import handlers from './helpers/handlers.js';

const useStyles = makeStyles({
	container: {
		marginTop: '2%'
	},
	fab: {
		position: 'fixed',
		left: '1rem',
		bottom: '1rem',
		zIndex: '100',
		transform: 'scale(0)',
		transition: '1s ease-out'
	}
})

const Main = ({ setData, setCardsScroll }) => {
	let cardScroll = null;
	let fab = null;
	const sty = useStyles();
	const getData = () => {
		fetch('https://api.covid19api.com/summary')
			.then(response => response.json())
			.then(result => setData(result));
	}
	window.onload = () => {
		let navHeight = document.querySelector('#nav').scrollHeight;
		fab = document.querySelector('#fab');
		cardScroll = document.querySelector('#cards').getBoundingClientRect().top - navHeight;
		setCardsScroll(cardScroll);
	}
	window.addEventListener('scroll', e => {
		if (!cardScroll) return null;
		if (window.scrollY >= cardScroll) {
			fab.style.transform = 'scale(1)';
		} else {
			fab.style.transform = 'scale(0)';
		}
	});

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<Container maxWidth="lg" className={sty.container}>
			<Fab color="secondary" className={sty.fab} onClick={handlers.fab} id="fab">
				<ExpandLessIcon />
			</Fab>
			<div id="cards">
				<Hidden mdDown>
					<Typography variant="h2" align="center">
						Total de casos en el mundo entero
					</Typography>
				</Hidden>
				<Hidden mdUp>
					<Typography variant="h5" align="center">
						Total de casos en el mundo entero
					</Typography>
				</Hidden>
			</div>
			<CardsTotal />
			<TablaDatos />
			<Footer />
		</Container>
	)
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	setData(x) {
		dispatch({
			type: 'SET_DATA',
			x
		})
	},
	setCardsScroll(x) {
		dispatch({
			type: 'SET_CARDS_SCROLL',
			x
		})
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);