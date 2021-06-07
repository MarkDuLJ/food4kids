import FoodsLayout from 'src/layouts/FoodsLayout'
import FoodCell from 'src/components/FoodCell'

const FoodPage = ({ id }) => {
  return (
    <FoodsLayout>
      <FoodCell id={id} />
    </FoodsLayout>
  )
}

export default FoodPage
