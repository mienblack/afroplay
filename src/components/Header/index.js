import { useState } from "react"
import { StyledHeader, StyledBanner } from './styles'
import config from '../../../config.json'
import Favorites from "../Favorites"

export default function Header() {
    const [showFav, setShowFav] = useState(false)
    function showFavorites() {
        setShowFav(true)
    }
    function hideFavorites() {
        setShowFav(false)
    }

    return (
        <StyledHeader>
            <StyledBanner />
            {/*<img src="" alt="" />*/}
            <section className="user-info">
                <div className='user-info-div'>
                    <img src={`https://github.com/${config.github}.png`} alt="profile" />
                    <div>
                        <h2>{config.name}</h2>
                        <p>{config.job}</p>
                    </div>
                </div>
                <button onClick={showFavorites}>FAVORITOS</button>
            </section>
            <Favorites show={showFav} onHide={hideFavorites}>
                {config.favorites.map(fav=><a href={fav.ref} target="_blank"><li key={fav}><img src={fav.image}/>{fav.name}</li></a>)}
            </Favorites>
        </StyledHeader>
    )
}
