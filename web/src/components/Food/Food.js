import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/FoodsCell'

const DELETE_FOOD_MUTATION = gql`
  mutation DeleteFoodMutation($id: Int!) {
    deleteFood(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Food = ({ food }) => {
  const [deleteFood] = useMutation(DELETE_FOOD_MUTATION, {
    onCompleted: () => {
      toast.success('Food deleted')
      navigate(routes.foods())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete food ' + id + '?')) {
      deleteFood({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Food {food.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{food.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{food.name}</td>
            </tr>
            <tr>
              <th>Imgurl</th>
              <td>{food.imgurl}</td>
            </tr>
            <tr>
              <th>Stock</th>
              <td>{food.stock}</td>
            </tr>
            <tr>
              <th>Pack size</th>
              <td>{food.packSize}</td>
            </tr>
            <tr>
              <th>Serving size</th>
              <td>{food.servingSize}</td>
            </tr>
            <tr>
              <th>Calories</th>
              <td>{food.calories}</td>
            </tr>
            <tr>
              <th>Total fat</th>
              <td>{food.totalFat}</td>
            </tr>
            <tr>
              <th>Sodium</th>
              <td>{food.sodium}</td>
            </tr>
            <tr>
              <th>Protein</th>
              <td>{food.protein}</td>
            </tr>
            <tr>
              <th>Carbs</th>
              <td>{food.carbs}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{food.price}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{food.category}</td>
            </tr>
            <tr>
              <th>Regular</th>
              <td>{checkboxInputTag(food.regular)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(food.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFood({ id: food.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(food.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Food
