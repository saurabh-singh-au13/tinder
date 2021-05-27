import TinderCard from 'react-tinder-card'
import React, { useState } from 'react';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople ] = useState([
        {
            name: 'Ratan Tata',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ratan_Tata_photo.jpg/220px-Ratan_Tata_photo.jpg'

        },
        {
            name: 'Sonu Sood ',
            url: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/12/973670-sonu-sood.jpg'

        },
        {
            name: 'Saurabh Singh ',
            url: 'https://avatars.githubusercontent.com/u/70137970?s=400&u=bdeea84e3732449e7cafe5de140ec0b88a0c0047&v=4'

        },
        {
            name: 'Salman Ali',
            url: 'https://i1.sndcdn.com/artworks-dXUk9r7Lgi0W9L4Q-SjlqUw-t500x500.jpg'

        },
        {
            name: 'Allu Arjun ',
            url: 'https://static.toiimg.com/thumb/msid-73906086,imgsize-232169,width-800,height-600,resizemode-75/73906086.jpg'

        },
        {
            name: 'Anushka Shetty ',
            url: 'https://szcdn.ragalahari.com/feb2020/hd/anushka-shetty-hit-pre-release/anushka-shetty-hit-pre-releasethumb.jpg'

        },
        {
            name: 'Rajni Kanth ',
            url: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/04/04/927328-rajinikanth-film-driver.jpg'

        },

        {
            name: 'Elon Musk ',
            url: 'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg'

        },

        {
            name: 'Sunil Chhetri',
            url: 'https://thebridge.in/wp-content/uploads/2018/06/sunil-chhetri-header-2-e1599729337718.jpg?width=500&height=300'

        }


        
    ]);
    const Swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
    };

    const outOfFrame = ( name )=> {
        console.log(name + "left the screen");
    };


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className = "swip"
                        key = {person.name}
                        preventSwip = {[ "up", "down"]}
                        onSwip = {(dir) => Swiped(dir, person.name)}
                        onCardLeftScreen = {() => outOfFrame(person.name)}
                    >
                        <div
                            style = {{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                        
                    </TinderCard>
                        

                    
                ))}
            </div>
       </div>
    )
}

export default TinderCards
