import '../../Stylesheet/PlayerMusic.css';
import sally from '../../Assets/sally.png';
import avocado from '../../Assets/kawanimals-avocado.gif';
import ReactSlider from 'react-slider';

const PlayerMusic = () => {
    return (
        <div className='player-music-info'>
            <div className='player-music-info-box'>
                <div className='player-music-info-img'>
                    <img src={sally} alt='chicken'>
                    </img>
                </div>
                <div className='player-music-info-center'>
                    <div className='player-music-info-center-img'>
                        <img src={avocado} alt='avocado' />
                    </div>
                    <div className='player-music-info-center-slider'>
                        <ReactSlider
                            className="player-volume-progress-slider"
                            thumbClassName="player-volume-progress-thumb"
                            trackClassName="player-volume-progress-track"
                            max={100}
                            renderThumb={(props, state) => <div {...props}></div>}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerMusic;
