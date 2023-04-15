import styled from "styled-components"

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #121214;
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 26px 13px;
    border-bottom: 1px solid #212529;
    img {
      width: 105px;
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 16.2426px;

      width: 55.49px;
      height: 32px;
      background: #212529;
      border-radius: 4px;

      font-weight: 600;
      font-size: 12px;
      text-align: center;
      color: #f8f9fa;
      border: none;
    }
  }
  .dashboard-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    gap: 20px;

    width: 100%;
    height: 130px;

    border-bottom: 1px solid #212529;
    h2 {
      color: #f8f9fa;
      font-weight: 700;
      font-size: 18px;
    }
    h3 {
      color: #868e96;
      font-weight: 400;
      font-size: 12px;
    }
  }
  .dashboard-app {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
    h2 {
      color: #f8f9fa;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
    p {
      color: #ffffff;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
`
