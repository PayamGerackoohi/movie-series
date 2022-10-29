import { createSignal, Show } from 'solid-js'

import '../general.sass'
import './serie-item.sass'

/**
 * @argument index: number
 * @argument serie: { name: string }
 * @argument removeSerie(index: number): void
 * @argument goToSerie(name: string): void
 * @argument renameSerie(name: string, index: number): void
 * @argument checkNewName(name: string, success: (name: string) => void): void
 */
export default (params) => {
	const [name, setName] = createSignal(params.serie.name)
	const [newName, setNewName] = createSignal(name())
	const [edit, setEdit] = createSignal(false)
	function onEdit() {
		if (edit()) {
			const trimmedName = newName().trim()
			if (trimmedName === name()) {
				closeEdit()
				return
			}
			params.checkNewName(trimmedName, () => {
				params.renameSerie(trimmedName, params.index())
				setName(trimmedName)
				setEdit(e => !e)
			})
		} else
			setEdit(e => !e)
	}
	function closeEdit() {
		setEdit(false)
		setNewName(name())
	}
	return <>
		<div class='serie-item flex-stack'>
			<div class='button-stack'>
				<button class='left-button' onClick={() => params.removeSerie(params.index())}>
					<img class='center-image' src='remove.svg'></img>
				</button>
				<button id='serie-name' class='middle-button' onClick={() => params.goToSerie(name())}>{name()}</button>
				<button class={`${edit() ? 'rect-button' : 'right-button'}`} onClick={() => onEdit()}>
					<img class='center-image' src={edit() ? 'check.svg' : 'edit.svg'}></img>
				</button>
			</div>
			<div class='button-stack'>
				<Show when={edit()}>
					<input
						id='edit-input'
						type='text'
						maxLength={30}
						value={newName()}
						placeholder='Edit Name'
						onInput={e => setNewName(e.currentTarget.value)}>
					</input>
					<button class='right-button' onClick={() => closeEdit()}>
						<img class='center-image' src='close.svg'></img>
					</button>
				</Show>
			</div>
		</div>
	</>
}
