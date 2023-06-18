import styled from 'styled-components';

export const Headerbar = styled.div`
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  background-color: var(--white-color);
  z-index: var(--z-fixed);

  i {
    margin-left: ${(props) => (!props.active ? '180px' : 'var(--nav-width)')};
    transition: 0.5s;
  }
  @media only screen and (max-width: 768px) {
    i {
      margin-left: ${(props) => (!props.active ? '58px' : '0px')};
      margin-right: 50px;
      padding: 0 1rem;
    }
  }
`;

export const Toggle = styled.div`
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const UserIcon = styled.div`
  
  width: 90px;
  height: 50px;
  display: flex;
  justify-content: bottom;
  align-items: center;
  overflow: hidden;
`;
