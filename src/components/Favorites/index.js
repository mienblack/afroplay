import { StyledFavorites } from "./styles"

export default function Favorites(props) {

    function hideModal(e) {
        let target = e.target
        if (target.id == "modal") {
            props.onHide()
        }
        console.log(target)
    }

    return (
        <StyledFavorites>
            <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hide"}>
                <ul className="fav">
                    {props.children}
                </ul>
            </div>
        </StyledFavorites>
    )
}