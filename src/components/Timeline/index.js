import { StyledTimeline } from './styles'
import Link from 'next/link'
import Slider from "react-slick";

export default function Timeline({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section>

                        <h2>{playlistName}</h2>

                        <Slider {...settings} className='timelineVideos'>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return (titleNormalized.includes(searchValueNormalized))
                            }).map((video) => {
                                let idVideo;
                                const linkFormat =
                                    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                                const match = video.url.match(linkFormat);
                                if (match && match[2].length == 11) {
                                    idVideo = match[2];
                                }
                                return (
                                    <Link
                                        key={video.url}
                                        href={{
                                            pathname: "/video",
                                            query: {
                                                v: idVideo,
                                                title: video.title,
                                            },
                                        }}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </Link>
                                )
                            })}
                        </Slider>
                    </section>

                )
            })}
        </StyledTimeline>
    )
}