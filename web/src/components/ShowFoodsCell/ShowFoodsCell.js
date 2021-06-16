import { Link, routes } from '@redwoodjs/router'

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

export const Success = ({ foods }) => {
  return foods.map((food) => (
    <article key={food.id} className="mt-150">
      <header>
        <h2 className="text-4xl font-bold text-center text-blue-400 ">
          <Link
            className="hover:text-blue-100 transition duration-100"
            to={routes.singleFood({ id: food.id })}
          >
            {food.name}
          </Link>
        </h2>
      </header>
      <img src={food.imgurl} alt="" />
      <p>{food.price}</p>
      <p>{food.stock}</p>
      <div>Category: {food.category}</div>
    </article>
  ))
}
