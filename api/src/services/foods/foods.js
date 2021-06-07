import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const foods = () => {
  return db.food.findMany()
}

export const food = ({ id }) => {
  return db.food.findUnique({
    where: { id },
  })
}

export const createFood = ({ input }) => {
  return db.food.create({
    data: input,
  })
}

export const updateFood = ({ id, input }) => {
  return db.food.update({
    data: input,
    where: { id },
  })
}

export const deleteFood = ({ id }) => {
  return db.food.delete({
    where: { id },
  })
}
