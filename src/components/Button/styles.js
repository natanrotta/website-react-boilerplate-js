import styled, { css } from "styled-components";

const primaryButton = css`
  background-color: ${({ theme }) => theme.colors.buttonPrimary };
  color: ${({ theme }) => theme.colors.buttonPrimaryLabel };
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover };
  }
`

const secondaryButton = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.buttonSecondaryLabel };
  border: 1px solid ${({ theme }) => theme.colors.buttonSecondaryBorder };
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover };
    color: ${({ theme }) => theme.colors.buttonSecondaryLabelHover };
  }
`

const buttonVariants = {
  primary: primaryButton,
  secondary: secondaryButton
}

export const StyledButton = styled.button`
  height: 30px;
  width: 100px;
  ${({ variant }) => buttonVariants[variant]}
`