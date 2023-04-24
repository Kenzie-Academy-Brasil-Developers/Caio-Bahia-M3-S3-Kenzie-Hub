import styled from "styled-components"

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: #f8f9fa;
    font-weight: 400;
    font-size: 9.73988px;
    margin-bottom: 12px;
  }
  select {
    display: flex;
    flex-direction: row;

    align-items: center;
    padding: 0px 10px;

    width: 100%;
    height: 38.5px;
    background: rgb(52, 59, 65);
    border: 0.973988px solid rgb(52, 59, 65);
    border-radius: 3.20867px;

    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 13.0293px;
    color: #868e96;
  }
  .register-error {
    color: rgb(134, 142, 150);
    font-weight: 400;
    font-size: 10px;
    margin-top: 10px;
  }
`
