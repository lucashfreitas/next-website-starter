import styled from 'styled-components';
import Button from '../../components/button';
import { MenuItem } from '../../data/global/header';

const NavContainer = styled.nav`
  display: flex;
  position: relative;

  .menu {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &__item {
      position: relative;
      border-bottom: 1px white;
      display: inline-block;

      align-self: center;

      :hover {
        .menu__sub {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    &__link {
      padding: 2rem 0.5rem;
      font-family: 'Nunito-Extrabold';
      text-transform: uppercase;
      font-size: 1.1rem;
      color: #fff;

      &:hover {
        border-bottom: 2px solid #1abc9c;
        animation: blinkText 0.7s ease-out;
      }
    }

    &__sub {
      background: gray;
      visibility: hidden;
      opacity: 0;
      width: 16rem;
      left: -2.5rem;
      top: 4.8rem;
      transition: opacity visibility;
      position: absolute;
    }

    &__sub-item {
      text-align: center;
      padding: 3rem 0;
      text-transform: capitalize;
    }

    &__sub-link {
      text-transform: capitalize;
      color: white;
    }

    &__nav-button {
      align-self: center;
    }
  }

  .nav-button {
    align-self: center;
  }

  .sub-menu {
    transition: opacity 600ms, visibility 600ms;
  }
`;

interface NavProps {
  items: Array<MenuItem>;
}

const Nav: React.FC<NavProps> = (props) => {
  const { items } = props;

  return (
    <NavContainer>
      <ul className="menu">
        {items.map((item, index) => {
          return (
            <li className="menu__item" key={index}>
              <a className="menu__link" href={item.link}>
                {item.label}
              </a>

              {item.sub && (
                <div className="menu__sub">
                  {item.sub.map((item, index) => (
                    <ul>
                      <li className="menu__sub-item" key={index}>
                        <a className="menu__sub-link" href={item.link}>
                          {item.label}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </li>
          );
        })}

        <div className="menu__nav-button">
          <Button />
        </div>
      </ul>
    </NavContainer>
  );
};

export default Nav;
