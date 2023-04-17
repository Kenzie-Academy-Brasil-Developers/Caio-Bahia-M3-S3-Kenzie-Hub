import styled from "styled-components"

export const MainStyled = styled.main`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121214;
  font-family: "Inter", sans-serif;
  .central-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;

    header {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
      /* margin-bottom: 32px; */
      margin: 30px auto;
      padding: 0px 1px;
      img {
        width: 120px;
      }
      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2426px;

        width: 80px;
        height: 32px;

        background: #212529;
        border-radius: 4px;
        border: none;

        color: #f8f9fa;
        text-align: center;
        font-weight: 600;
        font-size: 10px;
      }
    }
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #212529;
      padding: 33px 15px;
      width: 100%;
      box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
      border-radius: 3.19812px;
      margin-bottom: 46px;
      .small-text-call {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        gap: 18px;
        margin-bottom: 22px;

        h2 {
          color: #f8f9fa;
          font-weight: 700;
          font-size: 15px;
        }
        p {
          color: #868e96;
          font-weight: 400;
          font-size: 10px;
        }
      }
    }
  }
`
