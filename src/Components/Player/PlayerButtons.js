import '../../Stylesheet/PlayerButtons.css';



const PlayerButtons = () => {
    return (
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
    )
}

export default PlayerButtons;
