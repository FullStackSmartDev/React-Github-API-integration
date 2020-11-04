import styled from "styled-components";

export const container = styled.div`
`;

export const header = styled.div`
  font-size: xx-large;
  margin-bottom: 32px;
`;

export const issuer_title = styled.div`
  font-size: xx-large;
  margin-bottom: 32px;
`;

export const comment_body = styled.div`
  margin-bottom: 32px;
  margin-left: 64px;
`;

export const text_input = styled.input`
  padding: 6px 8px 6px 0;
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  color: #354052;
  border: none;
  outline: none;
  border-radius: 2px;
  z-index: 1000;

  &::placeholder {
    color: #dfe3e9;
  }
`;

export const submit_input = styled.input.attrs({
    type: 'submit',
    value: 'Submit'
})`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;