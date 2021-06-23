import { Category } from '@prisma/client'

import Showfoods from 'src/components/Showfoods'
export const QUERY = gql`
  query ShowFoodsQuery {
    foods {
      id
      name
      imgurl
      packSize
      stock

      price
      category
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const groupBy = (list, keyGetter) => {
  const map = new Map()
  list.forEach((item) => {
    const key = keyGetter(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })
  return map
}

export const Success = ({ foods }) => {
  const grouped = groupBy(foods, (food) => food.category)
  return Object.values(Category).map((cat) => {
    const categoryArr = grouped.get(cat)
    console.log(categoryArr)
    if (categoryArr) {
      return (
        <div className="mt-4 p-4">
          <h2>{cat.toUpperCase()}:</h2>
          <div className="grid grid-cols-3 gap-4">
            {categoryArr.map((food, i) => (
              <Showfoods food={food} key={i} />
            ))}
          </div>
        </div>
      )
    } else {
      return (
        <div className="mt-4">
          <h2>{cat.toUpperCase()}:</h2>
          <p>empty data under {cat} category</p>
        </div>
      )
    }
  })
}
