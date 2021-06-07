import { Link, routes } from '@redwoodjs/router'
import bgPic from '../../../public/superboy.webp'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <img src={bgPic} alt="background" />
    </>
  )
}

export default HomePage
