/* eslint-disable react/no-unknown-property */
import { Show } from 'solid-js'
import { useRegisterSW } from 'virtual:pwa-register/solid'
import { pwaInfo } from 'virtual:pwa-info'
import './reload-prompt.sass'

// eslint-disable-next-line no-console
console.log(pwaInfo)

export default () => {
	// replaced dynamically
	const reloadSW = '__RELOAD_SW__'
	const {
		needRefresh: [needRefresh, setNeedRefresh],
		offlineReady: [offlineReady, setOfflineReady],
		updateServiceWorker,
	} = useRegisterSW({
		immediate: true,
		onRegisteredSW(swUrl, r) {
			// eslint-disable-next-line no-console
			console.log(`Service Worker at: ${swUrl}`)
			// @ts-expect-error just ignore
			if (reloadSW === 'true') {
				r && setInterval(() => {
					// eslint-disable-next-line no-console
					console.log('Checking for sw update')
					r.update()
				}, 20000 /* 20s for testing purposes */)
			}
			else {
				// eslint-disable-next-line no-console
				console.log(`SW Registered: ${r}`)
			}
		},
		onRegisterError(error) {
			console.error('SW registration error', error)
		},
	})

	const close = () => {
		setOfflineReady(false)
		setNeedRefresh(false)
	}

	return (
		<div class='container'>
			<Show when={offlineReady() || needRefresh()}>
				<div class='toast'>
					<div class='message'>
						<Show
							fallback={<span>New content available, click on reload button to update.</span>}
							when={offlineReady()}
						>
							<span>App ready to work offline</span>
						</Show>
					</div>
					<div class='button-holder'>
						<Show when={needRefresh()}>
							<button class='toast-button' onClick={() => updateServiceWorker(true)}>Reload</button>
						</Show>
						<button class='toast-button' onClick={close}>Close</button>
					</div>
				</div>
			</Show>
		</div>
	)
}
