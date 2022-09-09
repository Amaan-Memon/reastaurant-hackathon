import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

const Menu = ({ data}) => {
  console.log(data.results)
  return (
    <>
    <Header />
    <div>Menu</div>
    <Footer />
    </>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=korean&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&addRecipeInformation=true`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Menu

