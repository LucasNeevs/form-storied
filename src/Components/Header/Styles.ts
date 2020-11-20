import styled from 'styled-components';

interface IMain {
  bgColor: string;
}

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 400px;
  width: 100%;
  background-color: ${(props: IMain) => props.bgColor};
`;
