import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn){
		return (
		<nav style={{display:'flex', justifyContent:'flex-end'}}>
			<p onClick={() => onRouteChange('signout')} className='nav f4 link  black pa2 pointer'>Sign Out</p>
		</nav>
		);} 
		else {
			return(
				<nav style={{display:'flex', justifyContent:'flex-end'}}>
					<p onClick={() => onRouteChange('signin')} className='nav f4 link  black pa2 pointer'>Sign In</p>
					<p onClick={() => onRouteChange('register')} className='nav f4 link  black pa2 pointer'>Register</p>
				</nav>
				);
		}
	}


export default Navigation;