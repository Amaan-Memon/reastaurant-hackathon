import Styled from "styled-components";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import { ItemCard } from "../components/ItemCard/ItemCard";
import { Content } from "../components/Content/Content";


const ItemContainer = Styled.div`

`;
const PageContainer = Styled.div`

`;
const ContentContainer = Styled.div`

`;
export default function Home({data}) {
  console.log(data);
  return (
    <PageContainer>
      <Header />
      <ItemContainer>
        <ItemCard />
      </ItemContainer>
      <ContentContainer>
        <Content/>
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
