import { Link, routes } from '@redwoodjs/router'
import logo from '../../../public/logo.webp'

const NutritionLayout = ({ children }) => {
  return (
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-gray-100 text-blue">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-white-400 hover:text-blue-100 bg-white transition duration-100"
            to={routes.home()}
          >
            <img src={logo} alt="food4kids" />
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-300 transition duration-100 rounded uppercase"
                to={routes.nutrition()}
              >
                Nutrition
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-300 transition duration-100 rounded uppercase"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-300 transition duration-100 rounded uppercase"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                className="py-2 px-4 hover:bg-blue-300 transition duration-100 rounded uppercase"
                href="#"
              >
                Log In
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default NutritionLayout
