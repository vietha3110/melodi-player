import '../../Stylesheet/Player.css';
import sally from '../../Assets/sally.png';
import avocado from '../../Assets/kawanimals-avocado.gif';
import ReactSlider from 'react-slider';
const Player = () => {
    return (
        <div className='player-comp'>
            <div className='player-buttons'>
                <div className='player-shuffle'>
                    <div className='wrapper-btn'>
                        <i className="fa-solid fa-shuffle fa-default"></i>
                    </div>
                </div>
                <div className='player-playbtn'>
                    <div className='wrapper-btn'>
                        <i className="fa-solid fa-backward fa-default"></i>
                    </div>
                    <div className='wrapper-btn'>
                        <i className="fa-solid fa-play fa-default"></i>
                    </div>
                    <div className='wrapper-btn'>
                        <i className="fa-solid fa-forward fa-default"></i>
                    </div>
                </div>     
                <div className='player-repeat'>
                    <div className='wrapper-btn'>
                        <i className="fa-solid fa-repeat fa-default"></i>
                    </div>
                </div>
            </div>
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
            <div className='player-volumes'>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Player;
