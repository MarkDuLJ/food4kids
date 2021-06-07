import { render } from '@redwoodjs/testing'

import NutritionLayout from './NutritionLayout'

describe('NutritionLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NutritionLayout />)
    }).not.toThrow()
  })
})
