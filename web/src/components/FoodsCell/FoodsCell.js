import { Link, routes } from '@redwoodjs/router'

import Foods from 'src/components/Foods'

export const QUERY = gql`
  query FOODS {
    foods {
      id
      name
      imgurl
      stock
      packSize
      servingSize
      calories
      totalFat
      sodium
      protein
      carbs
      price
      category
      regular
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No foods yet. '}
      <Link to={routes.newFood()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ foods }) => {
  return <Foods foods={foods} />
}
