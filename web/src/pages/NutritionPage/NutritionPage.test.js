import { render } from '@redwoodjs/testing'

import NutritionPage from './NutritionPage'

describe('NutritionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NutritionPage />)
    }).not.toThrow()
  })
})
