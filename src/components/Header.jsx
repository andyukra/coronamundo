import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Chip } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListSubheader, Hidden, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AdbIcon from '@material-ui/icons/Adb';
import WebIcon from '@material-ui/icons/Web';
import FaceIcon from '@material-ui/icons/Facebook';
import WhatsIcon from '@material-ui/icons/WhatsApp';
import { connect } from 'react-redux';
import Banner from './Banner.jsx';

const useStyles = makeStyles({
	list: {
		width: '250px'
	},
	bar: {
		position: 'fixed',
		opacity : 0,
		transition : '1s ease-out'
	},
	drawDiv:{
		width : '100%',
		height : '200px',
		background : 'url("/img/creador.jpg")',
		backgroundSize : 'cover',
		backgroundRepeat : 'no-repeat',
		backgroundPosition : 'center'
	}
})

const Header = ({ togDrawer, drawer, data }) => {

	const sty = useStyles();

	const filterDate = () => {
		if (!data) return null;
		let dataFormat = new Date(data);
		return dataFormat.toLocaleString()
	}

	window.onload = () => {
		let nav = document.querySelector('#nav');
	}

	window.onscroll = () => {
		if(window.scrollY > 300){
			nav.style.opacity = 1;
		} else {
			nav.style.opacity = 0;
		}
	}

	return (
		<>
			<Drawer anchor="left" open={drawer} onClose={() => togDrawer(false)}>
				<div className={sty.drawDiv}></div>
				<List className={sty.list}>
					<ListSubheader>
						<Typography>Información</Typography>
					</ListSubheader>
					<ListItem button>
						<ListItemIcon label="Inicio">
							<AdbIcon />
						</ListItemIcon>
						<Typography>Nombre : Andy</Typography>
					</ListItem>
					<ListItem button>
						<ListItemIcon label="Inicio">
							<WebIcon />
						</ListItemIcon>
						<Typography>Desarrollador Web</Typography>
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemIcon label="Inicio">
							<FaceIcon color="primary"/>
						</ListItemIcon>
						<Typography>Andy King</Typography>
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemIcon label="Inicio">
							<WhatsIcon style={{color:'green'}}/>
						</ListItemIcon>
						<Typography>+541155874698</Typography>
					</ListItem>
					<Divider />
				</List>
				<Typography variant="body2" color="textSecondary" style={{padding : '5px'}}>Muchas gracias por visitar este sitio.</Typography>
			</Drawer>
			<AppBar id="nav" position="static" color="secondary" className={sty.bar}>
				<Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<IconButton color="inherit" onClick={() => togDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" style={{ marginLeft: '16px' }}>
							CoronaMundo
                		</Typography>
					</div>
					<Hidden mdDown>
						<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '5px 0' }}>
							<Typography variant="h6">Ultima Actualización</Typography>
							<Chip
								label={filterDate() + ' hs.'}
								component="h1"
								size="medium"
								color="primary"
							/>
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
			<Banner />
		</>
	)
}

const mapStateToProps = state => ({
	drawer: state.drawer,
	data: state.data.Date
})

const mapDispatchToProps = dispatch => ({
	togDrawer(x) {
		dispatch({
			type: 'TOG_DRAWER',
			x
		})
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);