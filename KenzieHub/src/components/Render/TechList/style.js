import styled from "styled-components"

export const UlTechContainerStled = styled.ul`
  display: flex;
  flex-direction: column;
  background: #212529;
  border-radius: 4px;
  padding: 22px 8px;
  gap: 16px;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.182px;
    width: 100%;
    background: #121214;
    border-radius: 4px;
    :hover {
      background: #343b41;
    }

    h3 {
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;
      color: #f8f9fa;
    }
    p {
      color: white;
    }
  }
`
