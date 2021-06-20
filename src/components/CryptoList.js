import React from 'react'
import Rankings from './Rankings'
import '../List.css'

const CryptoList = ({ allCrypto, getCrypto}) => {

    const cryptoCoins = allCrypto.map((crypto, index) => {
        if (crypto.price_change_percentage_24h >= 0){
            
            return(
                <ul key={index} className="coin-ul">
                    
                    <li className="img-li"><img className="coin-image" src={crypto.image} alt="coin logo"/></li>
                    <li className="symbol-li">{crypto.symbol.toUpperCase()}</li>
                    <li className="market-cap-pos-li">{crypto.market_cap_rank}</li>
                    
                    {/* <li>name: {crypto.name}</li> */}
                    <li className="price-li">${crypto.current_price}</li>
                    <li className="change-li, change-li-positive">{crypto.price_change_percentage_24h.toFixed(2)}%</li>
                    <span className="separator"></span>
    
                </ul>
                )
        } else {
            return(
                <ul key={index} className="coin-ul">
                    
                    <li className="img-li"><img className="coin-image" src={crypto.image} alt="coin logo"/></li>
                    <li className="symbol-li">{crypto.symbol.toUpperCase()}</li>
                    <li className="market-cap-pos-li">{crypto.market_cap_rank}</li>
                    
                    {/* <li>name: {crypto.name}</li> */}
                    <li className="price-li">${crypto.current_price}</li>
                    <li className="change-li, change-li-negative">{crypto.price_change_percentage_24h.toFixed(2)}%</li>
                    <span className="separator"></span>
    
                </ul>
                )
        }
       
    })

    
    
    

    return (
        <>
        <div className="list-container">
            
                {cryptoCoins}
            
        </div>
        <div>
            <Rankings allCrypto={allCrypto} getCrypto={getCrypto}/>
        </div>
        
       </>
    )
}

export default CryptoList
