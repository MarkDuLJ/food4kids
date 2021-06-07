import FoodsLayout from 'src/layouts/FoodsLayout'
import EditFoodCell from 'src/components/EditFoodCell'

const EditFoodPage = ({ id }) => {
  return (
    <FoodsLayout>
      <EditFoodCell id={id} />
    </FoodsLayout>
  )
}

export default EditFoodPage
