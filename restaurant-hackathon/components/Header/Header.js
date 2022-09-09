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
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <ItemHolder>
      <Image src="/southKoreaFlag.png" height={60} width={120}></Image>
      <h1>K-Chick</h1>
      <ItemHolder >
      <ShoppingCartIcon style={{ fontSize: 50 }}/>
      <p style={{ fontSize: 10 }}>(1)</p>
      </ItemHolder>
      </ItemHolder>
    </HeaderContainer>
  );
};
