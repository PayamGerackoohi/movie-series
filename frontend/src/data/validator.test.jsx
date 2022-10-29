import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { isValidName } from './validator'

test('is valid name', () => {
	assert.ok(isValidName('Serie'))
	assert.ok(isValidName('Serie 2'))
	assert.ok(isValidName('Serie 2-_.!,\'":&*()'))
})

test('is invalid name', () => {
	assert.not(isValidName(''))
	assert.not(isValidName('[]/;\\`~{}|<>?@#$%^+='))
})

test.run()
