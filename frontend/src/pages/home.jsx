import { createSignal, For } from 'solid-js'
import { useNavigate } from 'solid-app-router';

import { createLocalStore, removeFromStore } from '../data/store'
import { isValidName } from '../data/validator'

import SerieItem from './modules/serie-item'
import { invalidSerieNameError, serieIsSavedBeforeError } from './modules/error';

import './general.sass'
import './home.sass'

export default () => {
	const [name, setName] = createSignal('')
	const [series, setSeries] = createLocalStore('Series')
	const navigate = useNavigate()
	const addSerie = () => checkNewName(name(), name => {
		setSeries([...series, { name: name, seasons: [] }])
		setName('')
	})
	function checkNewName(name, success) {
		if (isSerieSaved(name))
			serieIsSavedBeforeError()
		else if (isValidName(name))
			success(name)
		else
			invalidSerieNameError()
	}
	const isSerieSaved = name => series.map(it => it.name).includes(name)
	const goToSerie = serie => navigate('serie/' + serie)
	const removeSerie = index => setSeries(removeFromStore(series, index))
	const renameSerie = (name, index) => setSeries(index, 'name', name)
	return <div class='Home'>
		<div class='button-stack'>
			<input
				id='serie-input'
				type='text'
				maxLength={30}
				value={name()}
				placeholder='New Serie'
				onInput={e => setName(e.currentTarget.value)}>
			</input>
			<button class='right-button' onClick={addSerie}>
				<img class='center-image' src='/add.svg'></img>
			</button>
		</div>
		<For each={series}>{(serie, index) =>
			<SerieItem serie={serie} index={index} goToSerie={goToSerie} removeSerie={removeSerie}
				renameSerie={renameSerie} checkNewName={checkNewName} />
		}
		</For>
	</div>
}
