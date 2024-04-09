import styled from 'styled-components';

export const RegisterUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  font-size: 16px;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size:  16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
