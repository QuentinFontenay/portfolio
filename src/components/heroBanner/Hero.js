import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero.css";

const HeroBanner = () => {
    return (
        <section class="hero">
            <div class="hero-inner">
                <h1>Hi, I'm Quentin Fontenay</h1>
                <h2>A full Stack Developer</h2>
                <p>fidshfhs dh osdhf oihdso osd f sdho fdhsjf hsh fkjh fjdshf ds hsd iuf iusdhf uhsd fs</p>
            </div>
            <div class="hero-image">
                <img src="images/heroProfile.jpg" alt=""></img>
            </div>
        </section>
    )
}

export default HeroBanner;