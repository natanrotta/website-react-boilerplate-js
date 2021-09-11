import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};
`

export const Image = styled.img`
    height: 300px;
    width: 300px;
`