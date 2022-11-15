import { StyledTimeline } from './styles'
import Link from 'next/link'

export default function Timeline({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
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
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}