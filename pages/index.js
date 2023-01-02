import React, { useState, useEffect } from "react"
import Menu from "../src/components/Menu"
import Header from '../src/components/Header'
import Timeline from '../src/components/Timeline'
import { videoService } from "../src/services/videoService"
import Footer from "../src/components/Footer"


function HomePage(props) {
    const service = videoService()
    const [searchValue, setSearchValue] = useState("")
    const [playlists, setPlaylists] = useState({})

    useEffect(() => {
        service.getAllVideos()
            .then(res => {
                console.log(res.data)
                //Forma imutavel
                const newPlaylists = {}
                res.data.forEach((video) => {
                    console.log(video)
                    if (!newPlaylists[video.playlist]) newPlaylists[video.playlist] = []
                    newPlaylists[video.playlist] = [video, ...newPlaylists[video.playlist]]
                })
                setPlaylists(newPlaylists)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(playlists)

    return (
        <>

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu theme={props.theme} searchValue={searchValue} setSearchValue={setSearchValue} />
                <Header />
                <Timeline searchValue={searchValue} playlists={playlists} />
                <Footer />
            </div>
        </>
    )
}

export default HomePage

