import { StyledFooter } from "./styles";

export default function Footer() {
    return (
        <StyledFooter>
            <section>
                <div className="div-footer">
                    <p>Made with 💟 by Damien Costa ✌🏿</p>
                    <a href="https://github.com/mienblack" target="_blank"><img src="/assets/images/github-icon.png"  alt="github" /></a>
                    <a href="https://www.linkedin.com/in/damien-costa/" target="_blank"><img src="/assets/images/linkedin-icon.png" alt="linkedin" /></a>
                </div>
            </section>
        </StyledFooter>
    )
}