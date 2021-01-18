import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: fit-content;
  height: fit-content;

  margin-top: 3.2rem;

  & + a {
    margin-top: 1.6rem;
  }

  border-radius: 0.8rem;
  text-decoration: none;

  background-color: ${(props) => props.theme.color.yellow.default};

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1.2rem 1.6rem;
    height: 100%;

    font-size: 1.6rem;
    font-weight: 500;

    color: ${(props) => props.theme.color.yellow.dark};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    height: 3.2rem;
    width: 3.2rem;

    margin: 0.8rem;
    border-radius: 0.8rem;

    color: ${(props) => props.theme.color.shape.light1};
    background-color: ${(props) => props.theme.color.blue.default};
  }
`;
