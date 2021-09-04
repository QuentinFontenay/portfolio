import React, { useEffect, useState } from "react"

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { Head, HeaderCopy, HeaderSubCopy, HeaderText, Container } from "./HeroStyles"
import Button from '../../styles/GlobalComponents/Button';
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ReactTypingEffect from "react-typing-effect"

const Hero = ({ props }) => {

    const stringTyping = ["Developpeur Full Stack", "Développeur Mobile", "un passionnée de nouvelle technologie"]
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 0)
        return () => clearTimeout(timeout)
    }, [])
    const one = () => (
        <HeaderSubCopy style={{ transitionDelay: "100ms", color: "white" }}>
            Bonjour, Je m'appelle
        </HeaderSubCopy>
    )
    const two = () => (
        <HeaderText style={{ transitionDelay: "200ms" }}>Quentin Fontenay</HeaderText>
    )
    const three = () => (
        <HeaderCopy style={{ transitionDelay: "300ms" }}>
            Je suis un {" "}
            <ReactTypingEffect
                typingDelay={500}
                eraseSpeed={100}
                eraseDelay={500}
                text={stringTyping}
            />
        </HeaderCopy>
    )
    const four = () => (
        <HeaderSubCopy style={{ transitionDelay: "400ms" }}>
            I'm currently focused on using React,next.js and Gatsby to create extremely fast and responsive websites.
        </HeaderSubCopy>
    )

    const items = [one, two, three, four]
    return (
        <Head bgColor="#1F2024" id={"home"}>
            <Container>
                <div className="header__container">
                    <div className={"intro"}>
                        {isMounted &&
                            items.map((item, i) => (
                                <TransitionGroup key={i}>
                                    <CSSTransition classNames="fadeup" timeout={3000}>
                                        {item}
                                    </CSSTransition>
                                </TransitionGroup>
                            ))}
                    </div>
                    {/* <div className="coding-block">
                        <HeroCard />
                    </div> */}
                </div>
            </Container>
        </Head>
    )
};

export default Hero;