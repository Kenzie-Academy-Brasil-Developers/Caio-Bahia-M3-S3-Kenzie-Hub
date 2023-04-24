import styled from "styled-components"

export const DivModalStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: gray;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 16px;
    background-color: #343b41;
    height: 50px;
    h2 {
      color: #f8f9fa;
      font-weight: 700;
      font-size: 14px;
    }
    button {
      border: none;
      background: none;
      font-weight: 600;
      font-size: 14px;
      color: #868e96;
    }
  }
`
