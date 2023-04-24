import styled from "styled-components"

export const ContainerModal = styled.div`
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
  form {
    display: flex;
    flex-direction: column;
    background: #212529;
    padding: 15px;
    padding-bottom: 25px;
    gap: 16px;
    .Title-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: white;
      width: 100%;
      gap: 10px;
      p {
        color: #f8f9fa;
        font-weight: 400;
        font-size: 10px;
      }
      div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 38.5px;
        padding: 0px 12px;
        border-radius: 4px;
        background: #343b41;
        border: none;
        font-weight: 400;
        font-size: 14px;
        p {
          color: #868e96;
        }
        :hover {
          border: 1px solid #f8f9fa;
        }
      }
    }
    .button-container {
      display: flex;
      gap: 20px;
      button {
        border-radius: 4px;
        height: 38px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        color: #ffffff;
        font-weight: 500;
        font-size: 12.7913px;
      }
      .save-btn {
        width: 65%;
        background: #ff577f;
        border: 1.2182px solid #ff577f;
      }
      .exclude-btn {
        width: 30%;
        background: #868e96;
      }
    }
  }
`
