import styled from "styled-components";
import config from '../../../config.json'

export const StyledHeader = styled.div`

background-color: ${({ theme }) => theme.backgroundLevel1};

img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
}

.user-info-div {
    display: flex;
    align-items: center;
    gap: 30px;
}

button{
    background-color: ${({ theme }) => theme.textColorBase};
    color: ${({ theme }) => theme.backgroundLevel1};
    width: fit-content;
    height: 40px;
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
}
`
export const StyledBanner = styled.div`
    background: url(${config.bg});
    height: 230px;
    width: 100%;
`