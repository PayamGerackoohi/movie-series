/* @refresh reload */
import { lazy } from 'solid-js';
import { render } from 'solid-js/web'
import { Router, Routes, Route } from 'solid-app-router';
import ReloadPrompt from './pages/modules/reload-prompt';
import './index.css'

const Home = lazy(() => import('./pages/home'))
const Serie = lazy(() => import('./pages/serie'))

if (!localStorage.AppName) {
	localStorage.clear()
	localStorage.AppName = 'Movie Series'
	console.log('localStorage is cleaned.')
}

render(() =>
	<Router>
		<Routes>
			<Route path='/' component={Home} />
			<Route path='serie/:serie' component={Serie} />
		</Routes>
		<ReloadPrompt />
	</Router>,
	document.getElementById('root'))
