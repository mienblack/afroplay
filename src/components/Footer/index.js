import { StyledFooter } from "./styles";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Link from 'next/link'


export default function Footer() {
    return (
        <StyledFooter>
            <footer className="footer">

                <ul className="socialList">
                    <li>
                        <Link href="https://www.linkedin.com/in/damien-costa/" target="_blank">
                            <FaLinkedin />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/mienblack" target="_blank">
                            <FaGithub />
                        </Link>
                    </li>
                </ul>
                <div className="ref">
                    <p>Made with 💟 by Damien Costa ✌🏿</p>
                    <p>
                        <span className="refSpan">AFROPLAY</span> &copy; 2022
                    </p>
                </div>
            </footer>
        </StyledFooter>
    )
}