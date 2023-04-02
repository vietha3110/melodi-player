import '../../Stylesheet/Player.css';

import PlayerButtons from './PlayerButtons';
import PlayerMusic from './PlayerMusic';
import PlayerVolume from './PlayerVolume';



const Player = () => {
    return (
        <div className='player-comp'>
            <PlayerButtons />
            <PlayerMusic/>
            <PlayerVolume/>
        </div>
    )
}

export default Player;
