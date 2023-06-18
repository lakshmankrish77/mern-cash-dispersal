import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #f74b4b;
  height: 100%;
  width: 100vw;
  font-family: 'Roboto', sans-serif;

  padding: ${(props) =>
    !props.active ? '230px' : 'calc(var(--nav-width) + 2rem)'};
  transition: 2s;
  padding-top: calc(var(--header-height) + 2rem);
  padding-right: 20px;
  @media only screen and (max-width: 768px) {

    padding: ${(props) => (props.active ? '0px' : '78px')};
    padding-top: 50px;
  
  }
`;
//
