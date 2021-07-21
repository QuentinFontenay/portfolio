import React from 'react'
import PropTypes from 'prop-types'

import { ButtonsWrapper, LeftButton, RightButton } from './SliderButtonsStyles'

const SliderButtons = ({ slideIndex, setSlideIndex, slideCount, large }) => {

    const handleClickRight = () => {
        playSfx()
        if (slideCount - 1 === slideIndex) {
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }
    const handleClickLeft = () => {
        playSfx()
        if (slideIndex === 0) {
            setSlideIndex(slideCount - 1)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    return (
        <ButtonsWrapper large={large}>
            <LeftButton large={large} onClick={handleClickLeft} name="previous slide" aria-label="previous slide" />
            <RightButton large={large} onClick={handleClickRight} name="next slide" aria-label="next slide" />
        </ButtonsWrapper>
    )
}

SliderButtons.defaultProps = {
    large: false,
}

SliderButtons.propTypes = {
    slideIndex: PropTypes.number.isRequired,
    setSlideIndex: PropTypes.func.isRequired,
    slideCount: PropTypes.number.isRequired,
    large: PropTypes.bool,
}

export default SliderButtons
