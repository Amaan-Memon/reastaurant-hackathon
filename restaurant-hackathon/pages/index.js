import React, { useState } from "react";
import Styled from "styled-components";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ItemCard } from "../components/ItemCard/ItemCard";
import { data } from '../libs/dummyData'
import Modal from '../components/BasketModal/Modal'

export const ItemContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-around;
  width: 100%;
`;
const PageContainer = Styled.div`

`;
const ContentContainer = Styled.div`
padding: 2rem;
min-height: 80vh;
`;
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState([]);

  const handleOrder = (item) => {
    setCurrentOrder([...currentOrder, item]);
    console.log(currentOrder)
  }

  return (
    <PageContainer>
      <Modal
        order={currentOrder}
        onClose={() => setShowModal(false)}
        show={showModal}
      />
      <Header numberOfOrders={currentOrder.length} onClick={() => setShowModal(true)}/>      
      <ContentContainer>
        <ItemContainer>
          {data.map((item) => (
            <ItemCard key={item.id} data={item} onClickOrder={()=>handleOrder(item.title)}/>
          ))}
        </ItemContainer>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=korean&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&addRecipeInformation=true`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
