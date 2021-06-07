import { Router, Route,Set } from '@redwoodjs/router'

import NutritionLayout from 'src/layouts/NutritionLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/foods/new" page={NewFoodPage} name="newFood" />
      <Route path="/foods/{id:Int}/edit" page={EditFoodPage} name="editFood" />
      <Route path="/foods/{id:Int}" page={FoodPage} name="food" />
      <Route path="/foods" page={FoodsPage} name="foods" />
      <Set wrap={NutritionLayout}>
        <Route path="/single-food/{id:Int}" page={SingleFoodPage} name="singleFood" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/nutrition" page={NutritionPage} name="nutrition" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
