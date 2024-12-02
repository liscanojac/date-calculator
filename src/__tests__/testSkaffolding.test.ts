import { expect, test } from 'vitest'
import { returnOptionsTitle } from '../date-calculator/testSkaffolding'

test('Testing skaffolding', () => {
  expect(returnOptionsTitle()).toBe('Options')
})
