import Styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const Item = Styled.div`
border: 5px solid #c72032;
border-radius: 25px;
width: 20rem;
  height: 20rem;
  position: relative;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(8, 67, 129, 0.5);
    background-opacity: 0.5;
   
  }
`;

const ItemImage = Styled.img`
  position: absolute;
  justify-content: center;
  width:19.5rem;
  height: 19.5rem;
  z-index: -1;
  border-radius: 20px;
  

`;

const ItemDataContainer = Styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  `;

const Opacity = Styled.div`
position: absolute;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
width: 100%;
height: 30%;
`

const ItemName = Styled.h1`
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  color: white;
  font-size: 1.5rem;
  z-index: 2;


`;

const ItemPrice = Styled.h2`
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
  color: white;
  font-size: 1.25rem;
  z-index: 2;
`;

const AddItemContainer = Styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  font-size:large;
  bottom: 0.5rem; 
  right 1rem;
`;

export const ItemCard = (data) => {
  return (
    <Item>
      <ItemImage src="/Korean-Fried-Chicken.webp" />
      <Opacity>
      <ItemDataContainer>
      <ItemName>Korean Fried Chicken</ItemName>
      <ItemPrice>£7.00</ItemPrice>
      <AddItemContainer>
        <AddIcon fontSize="large"/>
      </AddItemContainer>
      </ItemDataContainer>
      </Opacity>
    </Item>
  );
};
