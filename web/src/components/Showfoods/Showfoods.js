import { Link, routes } from '@redwoodjs/router'

const Showfoods = ({ food }) => {
  return (
    <article key={food.id} className="mt-8 shadow-xl relative">
      <Link
        className="hover:text-blue-400 transition duration-100"
        to={routes.singleFood({ id: food.id })}
      >
        <p className="absolute -top-1 -right-1 bg-red-600 text-white text-3xl font-semibold p-1.5 leading-none rounded-full transform rotate-3">
          ${food.price}
        </p>
        <img src={food.imgurl} alt="" className="h-40 w-full object-cover" />
        <h2 className="text-xl font-bold text-center text-blue-400 hover:text-gray-400">
          {food.name}
        </h2>
        <p>Stock:{food.stock}</p>
        <div>Category: {food.category}</div>
      </Link>
    </article>
  )
}

export default Showfoods
