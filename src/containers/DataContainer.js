import React, {useState, useEffect} from 'react'
import CryptoList from "../components/CryptoList"

const DataContainer = () => {

    const [allCrypto, setAllCrypto] = useState([]);


    const getCrypto = () => {
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.json())
            .then(data =>setAllCrypto(data))
            .catch((err) => {
                console.log(err)
            })
    }
    

    useEffect(() => {
        getCrypto()
    }, [])

            



    return (
        <>
            <div className="data-container">
                <CryptoList allCrypto={allCrypto} getCrypto={getCrypto}/>
            </div>
        </>
    )
}

export default DataContainer
