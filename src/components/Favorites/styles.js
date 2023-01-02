import styled from "styled-components";

export const StyledFavorites = styled.div`
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.fav {
z-index:999;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    top: 0;
    width: 100vw;
    height: fit-content;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    padding: 20px;
    list-style-type: none;
    color: black;
    font-size: 15px;
    font-weight: bold;
}

.fav li {
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
}

.fav img {
    width: 60px;
    height: 60px;
}



a {
    color: black;
    text-decoration: none;
}

.hide {
    display: none;
}
`