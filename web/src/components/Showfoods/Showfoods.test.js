import { render } from '@redwoodjs/testing'

import Showfoods from './Showfoods'

describe('Showfoods', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Showfoods />)
    }).not.toThrow()
  })
})
