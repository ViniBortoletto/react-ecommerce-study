import styled from "styled-components";

export const ButtonContainer = styled.button`
  i {
    margin-right: 0.5rem;
  }

  text-transform: capitalize;
  font-size: 1.4rem;
  color: var(--lightBlue);
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props => props.cart && "var(--mainYellow)"};
  color: ${props => props.cart && "var(--mainYellow)"};
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: 0.5s ease-in-out;

  &:hover {
    background: var(--lightBlue);
    background: ${props => props.cart && "var(--mainYellow)"};

    color: var(--mainBlue);
  }

  &:focus {
    outline: none;
  }
`;
