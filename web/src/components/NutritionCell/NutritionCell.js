import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

export const QUERY = gql`
  query NutritionQuery {
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

const UPDATE_FOOD_MUTATION = gql`
  mutation UpdateFoodMutation($id: Int!, $input: UpdateFoodInput!) {
    updateFood(id: $id, input: $input) {
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

import { groupBy } from 'src/components/ShowFoodsCell'
import { Category } from '@prisma/client'
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

const checkStock = (foodlist) => {
  if (foodlist) {
    const total = foodlist.reduce((acc, cur) => {
      return acc + cur.stock
    }, 0)
    return total
  }
  return 0
}

export const Success = ({ foods, snum, urnum }) => {
  const [updateFood, { loading, error }] = useMutation(UPDATE_FOOD_MUTATION, {
    onCompleted: () => {
      toast.success('Food stock updated')
    },
  })

  const wantedCategory = []
  const menuList = []
  const savetoDB = (id, input) => {
    updateFood({ variables: { id, input } })
  }

  const fullfill = (arr, limit) => {
    if (arr[0] && arr[0].stock >= limit) {
      let stock = arr[0].stock - limit
      menuList.push({ ...arr[0], stock })
      return
    }

    limit = limit - arr[0].stock
    menuList.push({ ...arr[0], stock: 0 })
    arr.shift()
    fullfill(arr, limit)
  }

  if (snum && snum > 0 && urnum && urnum > 0) {
    const grouped = groupBy(foods, (food) => food.category)
    const enoughstock = Object.values(Category).every(
      (cat) => checkStock(grouped.get(cat)) >= snum
    )

    if (enoughstock) {
      const result = Object.values(Category).map((cat) =>
        grouped.get(cat).sort((a, b) => b.stock - a.stock)
      )

      result.forEach((arr) => {
        let limit = snum
        fullfill(arr, limit)
      })
      snum = 0
      urnum = 0
    } else {
      for (let cat of Object.values(Category)) {
        const a = grouped.get(cat)
        if (!a || checkStock(a) < snum) {
          wantedCategory.push(cat)
        }
      }
    }
    console.log(menuList)
    console.log(wantedCategory)
    return (
      <div className="mt-4 text-center">
        {menuList.length > 0 && (
          <>
            <h1 className="text-xl font-bold text-center text-green-400 uppercase">
              Match plan succeeded
            </h1>
            <ul>
              {menuList.map((food, i) => (
                <li key={i} className="mt-2">
                  CATEGORY:{food.category} NAME:{food.name} CURRENT STOCK:
                  {food.stock}
                  {/* <button
                    onClick={() => savetoDB(food.id, { stock: food.stock })}
                  >
                    UPDATE DATABASE
                  </button> */}
                </li>
              ))}
            </ul>
          </>
        )}

        {wantedCategory.length > 0 && (
          <>
            <h1 className="text-xl font-bold text-center text-yellow-400 uppercase">
              Sorry, below categories are needed
            </h1>
            <ul>
              {wantedCategory.map((cat, i) => (
                <li
                  key={i}
                  className="text-lg font-bold text-center text-inidgo-300 uppercase"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    )
  } else {
    return (
      <h1 className="text-sm font-bold text-left text-gray-300">
        Number only, waiting for input...
      </h1>
    )
  }
}
