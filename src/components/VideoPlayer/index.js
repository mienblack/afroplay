import { useRouter } from "next/router";
import {StyledVideoPlayer} from "./styles"

export default function VideoPlayer() {
    const router = useRouter();
    return (
        <StyledVideoPlayer>
            <div>
                <iframe
                width="896"
                height="504"
                src={`https://www.youtube.com/embed/${router.query.v}`}
                title="Youtube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
                <h2 className="title">{router.query.title}</h2>
            </div>
        </StyledVideoPlayer>
    )
}