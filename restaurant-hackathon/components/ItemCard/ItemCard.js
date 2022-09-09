import Styled from 'styled-components';

const Item = Styled.div`
`;

export const ItemCard = ({ item }) => {
  return (
    <Item>
      <div>{item}</div>
      
    </Item>
  );
}

