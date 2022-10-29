// WTF: uvu is not sass compatible!
// WTF: uvu is not SolidRouter compatible!
// import { suite } from 'uvu'
// import * as assert from 'uvu/assert'
// import { render, fireEvent, waitFor } from 'solid-testing-library'
// import { isInDocument, hasStyle } from 'solid-dom-testing'
// import Home from './home'

// const test = suite('<Home />')

// test.before.each((context) => {
// 	const returnValue = render(() => <Home />)
// 	Object.getOwnPropertyNames(returnValue).forEach(name => {
// 		context[name] = returnValue[name]
// 	})
// })

// test.after.each(({ unmount }) => unmount())

// test('it renders an input and a button', ({ getByPlaceholderText, getByText }) => {
// 	assert.ok(isInDocument(getByPlaceholderText('New Serie')))
// 	assert.ok(isInDocument(getByText('+')))
// })

// test('add a serie', () => { assert.ok(false) })

// test('remove a serie', () => { assert.ok(false) })

// test('go to serie details', () => { assert.ok(false) })

// test.run()
