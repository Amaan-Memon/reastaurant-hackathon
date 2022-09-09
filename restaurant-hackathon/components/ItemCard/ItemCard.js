import Styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

const Item = Styled.div`
width: 10rem;
  height: 15rem;
  position: relative;
  &:hover {
    cursor: grab;
  }

  > * {
    border-radius: 3px;
  }
`;

const ItemImage = Styled.img`
  width: 10rem;
  height: 10rem;

`;

const ItemName = Styled.h1`
`;

const ItemPrice = Styled.h2`
`;

const AddItemContainer = Styled.div`
`;


export const ItemCard = (data) => {
  return (
    <Item>
      <ItemImage src="/Korean-Fried-Chicken.webp"/>
      <ItemName>Korean Fried Chicken</ItemName>
      <ItemPrice>£7</ItemPrice>
      <AddItemContainer>
        <AddIcon />
      </AddItemContainer>
      
      
    </Item>
  );
}

