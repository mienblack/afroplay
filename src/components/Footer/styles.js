import styled from "styled-components";

export const StyledFooter = styled.span`
    background-color:  ${({ theme }) => theme.backgroundLevel2};
    font-size: 1em;
    text-transform: capitalize;
    font-weight: bold;
    color: ${({ theme }) => theme.textColorBase};
    text-align: center;
   
    .footer {
    width: 90%;
    bottom: 0;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.socialList {
    display: flex;
    justify-content: center;
    list-style: none;
}

.socialList li {
    margin: 0 1em;
    font-size: 1.2em;
}

.socialList a {
    text-decoration: none;
}

.socialList a:hover {
    color: #ffbb33;
}

.ref {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 0.7rem;
}

.refSpan{
    color: #ffbb33;
    font-weight: bold;
}
    
    a {
        padding: 2px;
        text-decoration: none;
        color: ${({ theme }) => theme.textColorBase};
        cursor: pointer;
    }

`