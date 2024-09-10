import React from 'react'
import styles from './select.module.scss'

import { UiCard } from '../../entities/leads/ui/UiCard'

export const Home = () => {
	return (
		<section className='home'>
			<UiCard />
			<div className={'home__' + styles.root}>home table</div>
			{/* <header className='App-header'>
				 <img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header> */}
		</section>
	)
}
