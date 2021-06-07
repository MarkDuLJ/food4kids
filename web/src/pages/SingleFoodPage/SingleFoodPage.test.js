import { render } from '@redwoodjs/testing'

import SingleFoodPage from './SingleFoodPage'

describe('SingleFoodPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleFoodPage />)
    }).not.toThrow()
  })
})
