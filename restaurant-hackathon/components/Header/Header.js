import Styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image'

const HeaderContainer = Styled.div`
background: #203C75;
height: 6.5rem;
`;

const ItemHolder = Styled.div`
padding: 1rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: white;
`;

const Title = Styled.h1`
fontFamily: Lato;
text-transform: uppercase;
text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
0px 0px 20px #b393d3;
`;

export const Header = ({ onClick, numberOfOrders}) => {
  return (
    <HeaderContainer>
      <ItemHolder>
      <div style={{borderRadius: '10px', overflow: 'hidden'}}>
      <Image src="/southKoreaFlag.png" height={80} width={120}></Image>
      </div>
      <Title>K-Chick</Title>
      <ItemHolder >
      <ShoppingCartIcon onClick={onClick} style={{ fontSize: 50 }}/>
      <p style={{ fontSize: 12 }}>({numberOfOrders})</p>
      </ItemHolder>
      </ItemHolder>
    </HeaderContainer>
  );
};
