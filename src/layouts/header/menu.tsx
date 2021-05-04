import React from 'react';
import styled from 'styled-components';
import { MenuItem } from '../../data/global/header';

interface MenuProps {
  items: Array<MenuItem>;
}

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;

  ul {
    list-style: none;
    display: inline-block;
  }
`;

const Menu: React.FC<MenuProps> = (props) => {
  const { items } = props;
  return (
    <StyledMenu>
      <ul>
        {items.map((x, index) => (
          <a key={index} href={x.link}>
            {x.label}
          </a>
        ))}
        ;
      </ul>
    </StyledMenu>
  );
};

export default Menu;
