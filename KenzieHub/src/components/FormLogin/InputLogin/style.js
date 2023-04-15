import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  gap: 10px;

  input {
    width: 100%;
    height: 38.5px;
    padding: 0px 12px;
    border-radius: 4px;
    background: #343b41;
    border: none;
    color: #f8f9fa;
    font-weight: 400;
    font-size: 14px;
    :hover {
      border: 1px solid #f8f9fa;
    }
  }
  div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`
