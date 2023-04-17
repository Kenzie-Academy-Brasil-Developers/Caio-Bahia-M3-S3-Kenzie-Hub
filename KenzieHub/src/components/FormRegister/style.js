import styled from "styled-components"

export const FormRegStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 17px;
  div {
    width: 100%;
  }
  button {
    width: 100%;
    height: 38.5px;
    border: 1.2px solid #ff577f;
    border-radius: 4.5px;
    background: #ff577f;
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    :hover {
      background-color: #59323f;
    }
  }
`
