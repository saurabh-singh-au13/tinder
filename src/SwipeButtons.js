import React from 'react'
import swiped from './TinderCards'
import './swipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRateIcon from '@material-ui/icons/StarRate';
function SwipeButtons() {

    const Home = () => {

    }
    return (
        <div className="swipeButtons">
            <IconButton className="swipedButtons__repeat">
                <ReplayIcon fontSize="medium" />
            </IconButton>

            <IconButton className="swipedButtons__left">
                <CloseIcon fontSize="medium" />
            </IconButton>

            <IconButton className="swipedButtons__lightning">
                <FlashOnIcon fontSize="medium" />
            </IconButton>

            <IconButton className="swipedButtons__right">
                <FavoriteIcon fontSize="medium" />
            </IconButton>

            <IconButton className="swipedButtons__star">
                <StarRateIcon fontSize="medium" />
            </IconButton>

            
            
        </div>
    )
}

export default SwipeButtons;
