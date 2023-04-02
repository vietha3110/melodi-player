import '../../Stylesheet/PlayerVolume.css';
import ReactSlider from 'react-slider';

const PlayerVolume = () => {
    return (
        <div className='player-volume'>
            <div><i className="fa-solid fa-volume-high"></i></div>
            <div className='player-volume-slider'>
                <ReactSlider
                    className="player-volume-progress-slider"
                    thumbClassName="player-volume-progress-thumb"
                    trackClassName="player-volume-progress-track"
                    max={100}
                    renderThumb={(props, state) => <div {...props}></div>}
                />
            </div>
        </div>
    )
}

export default PlayerVolume;
