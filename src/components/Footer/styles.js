import styled from "styled-components";

export const StyledFooter = styled.span`
    background-color:  ${({ theme }) => theme.backgroundLevel2};
    font-size: 1em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColorBase};
    text-align: center;
    padding: 10px;
    p {
        font-weight: bold;
    }
    a {
        padding: 2px;
        text-decoration: none;
        color: ${({ theme }) => theme.textColorBase};
        cursor: pointer;
    }
    .div-footer {
        margin-left: 30px;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .div-footer img {
        width: 30px;
    }

`