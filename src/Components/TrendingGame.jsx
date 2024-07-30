/* eslint-disable react/jsx-key */
import TrendigCardsData from '../Data/TrendingCardsData/TrendigCardsData'
import Primarybtn from './Buttons/PrimaryButton/Primarybtn'
import TrendingCard from './Cards/GameCard'
import './TrendingGame.css'
const TrendingGame = () => {
    const cards = TrendigCardsData.map(browse => {
        return <TrendingCard img={browse.img} action={browse.action} gameName = {browse.gameName} price = {browse.price}/>
    })
    return (
        <>
            <div className='section'>
                <div className='title'>
                    <div className='title-left-part'>
                        <h3>Trending</h3>
                        <h1>Trending Games</h1>
                    </div>
                    <div className='right-part'>
                    <Primarybtn>View all</Primarybtn>
                    </div>
                    
                </div>
                <div className='container-cards'>
                    <div className='card-trendings'>
                            {cards}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingGame