export const QUERY = gql`
  query SingleFoodQuery($id: Int!) {
    food(id: $id) {
      name
      imgurl
      servingSize
      calories
      totalFat
      sodium
      protein
      carbs
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ food }) => {
  console.log(food)
  const {
    name,
    imgurl,
    servingSize,
    calories,
    totalFat,
    sodium,
    protein,
    carbs,
  } = food

  const rounded = (item) => Math.round((item / servingSize) * 100)
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Nutrition Facts
            </h2>
            <hr className="h-10 leading-10" />
            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-100">
              {name.toUpperCase()}
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              Serving Size {servingSize} g
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              Calories {calories}
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              Total Fat {rounded(totalFat)}%
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              sodium {rounded(sodium)}%
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              protein {rounded(protein)}%
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              carbs {rounded(carbs)}%
            </p>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <img
                  className="object-cover object-center w-full h-64 rounded-md shadow"
                  src={imgurl}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
