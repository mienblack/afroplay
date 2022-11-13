import styled from "styled-components";

export const StyledFavorites = styled.div`
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: center;
    align-items: center;
}

.fav {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    top: 0;
    width: 100vw;
    height: 250px;
    background-color: blue;
    padding: 20px;
    list-style-type: none;
}

.hide {
    display: none;
}
`