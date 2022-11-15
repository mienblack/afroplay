import styled from "styled-components";

export const StyledVideoPlayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    div {
        width: fit-content;
        background-color: ${({ theme }) => theme.backgroundLevel1};
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 10px;
        }
    .title {
        padding: 10px;
        width: 896px;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        border-radius:10px;
    }
    iframe {
        border-radius: 20px;
        border: none;
        margin-bottom: 5px;
    }
`