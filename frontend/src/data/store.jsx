import { createEffect, createSignal } from 'solid-js';
import { createStore } from "solid-js/store"

export function createLocalSignal(name, init) {
	const local = localStorage.getItem(name)
	const [signal, setSignal] = createSignal(local || init)
	createEffect(() => localStorage.setItem(name, signal()))
	return [signal, setSignal]
}

export function createLocalStore(name, init = [], fields = undefined) {
	const local = localStorage.getItem(name)
	const [store, setStore] = createStore(local ? JSON.parse(local) : init)
	createEffect(() => localStorage.setItem(name, JSON.stringify(store, fields)))
	return [store, setStore]
}

export const removeFromStore = (list, index) => [...list.slice(0, index), ...list.slice(index + 1)]
