import React from 'react'
import '../List.css'

const CryptoList = ({allCrypto}) => {
    console.log({allCrypto})

    const cryptoCoins = allCrypto.map((crypto, index) => {
        return(
            <ul key={index} className="coin-ul">
                
                <li className="img-li"><img className="coin-image" src={crypto.image} alt="coin logo"/></li>
                <li className="symbol-li">{crypto.symbol.toUpperCase()}</li>
                <li className="market-cap-pos-li">{crypto.market_cap_rank}</li>
                
                {/* <li>name: {crypto.name}</li> */}
                <li className="price-li">${crypto.current_price}</li>
                <li className="change-li">{crypto.price_change_percentage_24h.toFixed(2)}%</li>
                <span className="separator"></span>

            </ul>
            )
    })

    
    // GAINERS 
    let sortedHigh = allCrypto.sort(function(a,b){
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
        });

    let top_ten = sortedHigh.slice(0, 10)

    // LOSERS
    let sortedLow= allCrypto.sort(function(a,b){
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
        });
        
    let bottom_ten = sortedLow.slice(0, 10)

    console.log(bottom_ten)
    console.log(top_ten)
    

    

    return (
        <>
        <div className="list-container">
            
                {cryptoCoins}
            
        </div>
        {/* <div className = "gainer-container">

                <p>{bottom_ten}</p>
                <p>{top_ten}</p>

        </div> */}
        </>
    )
}

export default CryptoList
