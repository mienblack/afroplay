import { useState } from "react";
import Menu from "../src/components/Menu/index"
import styled from "styled-components";
import VideoPlayer from "../src/components/VideoPlayer";
import Footer from "../src/components/Footer"

const StyledVideo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Video = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <StyledVideo>
            <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
            <VideoPlayer />
            <Footer/>
        </StyledVideo>
    )
}

export default Video;