import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode"
import RegisterVideo from "../src/components/RegisterVideo"
import Head from 'next/head'


const theme = {
    light: {
        backgroundBase: "#EDF2EE",
        backgroundLevel1: "#CCDED0",
        backgroundLevel2: "#A1C6A9",
        borderBase: "#FFFFFF",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#000602de",
        backgroundLevel1: "#05230D",
        backgroundLevel2: "#103B1B",
        borderBase: "#000000",
        textColorBase: "#FFFFFF",
    }
}

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const context = useContext(ColorModeContext)

    return (
        <ThemeProvider theme={theme[context.mode]}>
            <Head>
                <title>AfroPlay</title>
            </Head>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
}