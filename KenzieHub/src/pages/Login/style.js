import styled from "styled-components"

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121214;
  font-family: "Inter", sans-serif;
`

export const DivCentralLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  img {
    width: 130px;
    margin-bottom: 20px;
  }
`

export const DivLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212529;
  padding: 33px 15px;
  width: 100%;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  max-width: 400px;
  h2 {
    color: #f8f9fa;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 20px;
  }
`
export const GotoRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;
  p {
    color: #868e96;
    font-weight: 600;
    font-size: 12px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 38.5px;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    background: #868e96;

    color: #f8f9fa;
    font-weight: 500;
    font-size: 14px;
    :hover {
      background: #343b41;
      border: 1.2182px solid #343b41;
    }
  }
`
