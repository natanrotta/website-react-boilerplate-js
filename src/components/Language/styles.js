import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Flag = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 10px;
  border: ${({ isSelected }) => isSelected ? '2px solid green' : 'none' };
  padding: 2px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`