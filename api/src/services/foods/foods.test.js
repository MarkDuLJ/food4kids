import { foods, food, createFood, updateFood, deleteFood } from './foods'

describe('foods', () => {
  scenario('returns all foods', async (scenario) => {
    const result = await foods()

    expect(result.length).toEqual(Object.keys(scenario.food).length)
  })

  scenario('returns a single food', async (scenario) => {
    const result = await food({ id: scenario.food.one.id })

    expect(result).toEqual(scenario.food.one)
  })

  scenario('creates a food', async (scenario) => {
    const result = await createFood({
      input: { name: 'String', servingSize: 9639711 },
    })

    expect(result.name).toEqual('String')
    expect(result.servingSize).toEqual(9639711)
    expect(result.calories).toEqual()
    expect(result.totalFat).toEqual()
    expect(result.sodium).toEqual()
    expect(result.protein).toEqual()
    expect(result.carbs).toEqual()
    expect(result.price).toEqual()
    expect(result.regular).toEqual()
  })

  scenario('updates a food', async (scenario) => {
    const original = await food({ id: scenario.food.one.id })
    const result = await updateFood({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a food', async (scenario) => {
    const original = await deleteFood({ id: scenario.food.one.id })
    const result = await food({ id: original.id })

    expect(result).toEqual(null)
  })
})
