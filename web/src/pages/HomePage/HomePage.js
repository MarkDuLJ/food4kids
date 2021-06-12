import { Link, routes } from '@redwoodjs/router'
import bgPic from '../../../public/superboy.webp'

const HomePage = () => {
  return (
    <>
        <div className="text-2xl leading-7  font-bold text-purple-500 ml-16 mb-4">
          Feed the hope of hungry children in Waterloo Region today
        </div>
        <img src={bgPic} alt="background" />
    </>
  )
}

export default HomePage
