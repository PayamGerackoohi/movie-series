import { For, batch, createEffect, on } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { useNavigate, useParams } from 'solid-app-router';

import { createLocalStore, createLocalSignal } from '../data/store'

import './general.sass'
import './serie.sass'

export default () => {
	const params = useParams()
	const navigate = useNavigate()
	const [series, setSeries] = createLocalStore('Series')
	const serieIndex = series.findIndex(s => s.name === params.serie)
	const [seasons, setSeasons] = createStore(series[serieIndex].seasons)
	const activeSeason = seasons.findIndex(e => e.some(it => !it))
	const [expand, setExpand] = createStore(seasons.map((_, i) => activeSeason === i))
	const [addCount, setAddCount] = createLocalSignal('AddCount', 1)
	const addSeason = () => batch(() => {
		setSeasons(s => [...s, []])
		setExpand(e => [...e, true])
	})
	const removeSeason = () => batch(() => {
		setSeasons(s => s.slice(0, s.length - 1))
		setExpand(e => e.slice(0, e.length - 1))
	})
	const addEpisode = index => batch(() => {
		setSeasons(index, it => [...it, 0])
		setExpand(index, () => true)
	})
	const removeEpisode = index => batch(() => {
		setSeasons(index, it => it.slice(0, it.length - 1))
		setExpand(index, () => true)
	})
	const addEpisodes = index => batchEpisodeChange(() => addEpisode(index))
	const removeEpisodes = index => batchEpisodeChange(() => removeEpisode(index))
	const batchEpisodeChange = action => batch(() => Array.from({ length: addCount() }).forEach(action))
	const toggleState = (index, episode) => setSeasons(index, produce(it => it[episode] = intNot(it[episode])))
	const intNot = num => num ? 0 : 1
	createEffect(() => batch(() => {
		setSeries(serieIndex, { name: params.serie, seasons: seasons })
	}))
	function addCountChanged(e) {
		const num = e.currentTarget.valueAsNumber
		setAddCount(num)
		if (!num || num <= 1)
			setAddCount(1)
	}
	const onBackPressed = () => navigate('/')
	const onTitleClicked = index => setExpand(index, e => !e)
	const titleClassByExpand = exp => `${exp ? 'middle-button' : 'left-round-button'}`
	return <>
		<div class='middle'>
			<div id='title' class='round-button solid-button'>{params.serie}</div>
		</div>
		<div id='header1' class='spread'>
			<div class='button-stack'>
				<button class='left-button' onClick={addSeason}>
					<img class='center-image' src='/add.svg'></img>
				</button>
				<div class='middle-button solid-button'>Season</div>
				<button class='right-button' onClick={removeSeason}>
					<img class='center-image' src='/remove.svg'></img>
				</button>
			</div>
			<button id='back-button' class='circle-button' onClick={onBackPressed}>
				<img src='/left-arrow.svg' class='center-image'></img>
			</button>
		</div>
		<div id='header2' class='right-side'>
			<span>±</span>
			<input id='-add-count' type='number' value={addCount()} onInput={addCountChanged} />
			<span>episode{addCount() == 1 ? '' : 's'}</span>
		</div>
		<For each={seasons}>{(season, index) =>
			<>
				<div class='button-stack serie-title'>
					<button
						class={titleClassByExpand(expand[index()])}
						onClick={() => onTitleClicked(index())}
					>
						Season {index() + 1}
					</button>
					<button class='rect-button' onClick={() => addEpisodes(index())}>
						<img class='center-image' src='/add.svg'></img>
					</button>
					<button class='right-button' onClick={() => removeEpisodes(index())}>
						<img class='center-image' src='/remove.svg'></img>
					</button>
				</div>
				<details open={expand[index()]}>
					<summary style='display:none;'></summary>
					<div class='reverse-middle-button solid-button season-content'>
						<For each={season}>{(state, episode) =>
							<button
								class={`episode ${state ? 'seen' : 'new'}`}
								onClick={() => toggleState(index(), episode())}>
								Episode {episode() + 1}
							</button>
						}
						</For>
					</div>
				</details>
			</>
		}
		</For>
	</>
}
