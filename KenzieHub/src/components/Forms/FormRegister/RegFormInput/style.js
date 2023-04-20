import styled from "styled-components"

export const InputContainer = styled.div`
  .label-container {
    color: #f8f9fa;
    font-weight: 400;
    font-size: 9.73988px;
    margin-bottom: 12px;
  }
  input {
    height: 38.38px;
    width: 100%;
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    background: #343b41;

    font-weight: 400;
    font-size: 12.9865px;
    color: #868e96;
    padding: 0px 10px;
    :hover {
      border: 1px solid #f8f9fa;
      color: #f8f9fa;
    }
  }
  .register-error {
    color: rgb(134, 142, 150);
    font-weight: 400;
    font-size: 10px;
    margin-top: 10px;
  }
`
