import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const Rankings = ({ allCrypto, getCrypto }) => {
    const [topTen, setTopTen] = useState()

         // TOP 10 GAINERS ARRAY
         let sortedHigh =  allCrypto.sort(function(a,b){
            return b.price_change_percentage_24h - a.price_change_percentage_24h;
        });
            
        let top_ten = sortedHigh.slice(0, 10)
    
        // TOP 10 LOSERS ARRAY
        let sortedLow = allCrypto.sort(function(a,b){
            return a.price_change_percentage_24h - b.price_change_percentage_24h;
            });
            
        let bottom_ten = sortedLow.slice(0, 10)
    
        const handleTopTen = (coin) => {
            console.log("handleTopTen called")
            const newTopTen = [...topTen, coin]
            setTopTen(newTopTen)
        }
    
        console.log('top ten:', top_ten)
        console.log('bottom ten:', bottom_ten)
    
        const bottomTenMap = bottom_ten.map((crypto, index) => {
            return( 
                <>
                <ul key={index} className="bottom-ten-ul">
                    <li>{crypto.symbol.toUpperCase()}</li>
                    
                    <li>{crypto.price_change_percentage_24h.toFixed(2)}%</li>
                    
                </ul>
                
                </>
            )
        })
        const topTenMap = top_ten.map((crypto, index) => {
            return( 
                <ul key={index} className="top-ten-ul">
                    <li>{crypto.symbol.toUpperCase()}</li>
                    <li>{crypto.price_change_percentage_24h.toFixed(2)}%</li>
                </ul>
            )
        })

        return (
            <>
            <div className="gainer-container">{topTenMap}</div>
            <div className="loser-container">{bottomTenMap}</div>
    
            </>
        )}
     
        export default Rankings
    
    // useEffect(() => {
    //     getData();
    // })

    // const getData = async () => {

    //     const data = await getCrypto();

    //     console.log('data', data)

    //     let sortedHigh =  data.sort(function(a,b){
    //         return b.price_change_percentage_24h - a.price_change_percentage_24h;
    //     });
            
    //     let top_ten = sortedHigh.slice(0, 10)
    
    //     // TOP 10 LOSERS ARRAY
    //     let sortedLow = data.sort(function(a,b){
    //         return a.price_change_percentage_24h - b.price_change_percentage_24h;
    //         });
            
    //     let bottom_ten = sortedLow.slice(0, 10)
    
    //     const newTopTen = [...topTen, top_ten]
        
    //     setTopTen(newTopTen)
    // }

    

    
   
//     if (topTen) {

//         return(
//             <>
//             {/* {bottomTenMap} */}
//             <h1>has length</h1>
            
                        
//             <div className = "gainer-container">
                   
//                 {/* <Bar
                
//                 data = {
//                     { labels: [topTen[0].name, topTen[1].name, 'Yellow', 'Green', 'Purple', 'Orange'],
//                         datasets: [
//                             {
//                                 label: '# of Votes',
//                                 data: [12, 19, 3, 5, 2, 3],
//                                 backgroundColor: [
//                                     'rgba(255, 99, 132, 0.2)',
//                                     'rgba(54, 162, 235, 0.2)',
//                                     'rgba(255, 206, 86, 0.2)',
//                                     'rgba(75, 192, 192, 0.2)',
//                                     'rgba(153, 102, 255, 0.2)',
//                                     'rgba(255, 159, 64, 0.2)'
//                                 ],
//                                 borderColor: [
//                                     'rgba(255, 99, 132, 1)',
//                                     'rgba(54, 162, 235, 1)',
//                                     'rgba(255, 206, 86, 1)',
//                                     'rgba(75, 192, 192, 1)',
//                                     'rgba(153, 102, 255, 1)',
//                                     'rgba(255, 159, 64, 1)'
//                                 ],
//                             borderWidth: 1
//                             }
//                         ]
//                     }
//                 }
                
            
//                         height={400}
//                         width={600}
//                         options={{maintainAspectRatio: false}}
//             /> */}
                
//             </div>
//                 <div className = "loser-container">

//                     {/* {bottom_ten} */}
                        
//                 </div>
//             </>
            
//         )
//     } else {
//         return(
//             <h2>has no length</h2>
//         )
//     }
   
// }

// export default Rankings


// // const Rankings = ({ allCrypto }) => {

// //     // const [topTenGraphData, setTopTenGraphData] = useState([]);
// //     // const [bottomTenGraphData, setBottomTenGraphData] = useState([]);

// //     // useEffect(() => {
// //     //     awaitData();
// //     //     console.log('allcrypto', allCrypto)
// //     // }, []);

// //     // TOP 10 GAINERS ARRAY
// //     let sortedHigh =  allCrypto.sort(function(a,b){
// //         return b.price_change_percentage_24h - a.price_change_percentage_24h;
// //         });

// //     let top_ten = sortedHigh.slice(0, 10)

// //     // TOP 10 LOSERS ARRAY
// //     let sortedLow =  allCrypto.sort(function(a,b){
// //         return a.price_change_percentage_24h - b.price_change_percentage_24h;
// //         });
        
// //     let bottom_ten = sortedLow.slice(0, 10)


// //     // const awaitData = async () => {
// //     //     setTopTenGraphData(top_ten);
// //     //     setBottomTenGraphData(bottom_ten);
// //     // }

//     // const bottomTenMap = bottom_ten.map((crypto, index) => {
//     //     return( 
//     //         <ul key={index} className="bottom-ten-ul">
//     //             <li>{crypto.symbol}</li>
//     //             <li>{crypto.price_change_percentage_24h.toFixed(2)}%</li>
//     //         </ul>
//     //     )
//     // })

// //     // const handleTopTen = (coin) => {
// //     //     console.log("handleTopTen called")
// //     //     const newTopTen = [...topTenGraphData, coin]
// //     //     setTopTenGraphData(newTopTen)
// //     // }

// //     // handleTopTen()

// //     // console.log('top ten graph data', topTenGraphData)

    

// //     // if (topTenGraphData.length) {
// //         // console.log(topTenGraphData)
// //         return (
// //             <>
// //             <div className = "gainer-container">
                   
// //                 {/* <Bar
                
// //                 data = {
// //                     { labels: [topTenGraphData[0].name, topTenGraphData[1].name, 'Yellow', 'Green', 'Purple', 'Orange'],
// //                         datasets: [
// //                             {
// //                                 label: '# of Votes',
// //                                 data: [12, 19, 3, 5, 2, 3],
// //                                 backgroundColor: [
// //                                     'rgba(255, 99, 132, 0.2)',
// //                                     'rgba(54, 162, 235, 0.2)',
// //                                     'rgba(255, 206, 86, 0.2)',
// //                                     'rgba(75, 192, 192, 0.2)',
// //                                     'rgba(153, 102, 255, 0.2)',
// //                                     'rgba(255, 159, 64, 0.2)'
// //                                 ],
// //                                 borderColor: [
// //                                     'rgba(255, 99, 132, 1)',
// //                                     'rgba(54, 162, 235, 1)',
// //                                     'rgba(255, 206, 86, 1)',
// //                                     'rgba(75, 192, 192, 1)',
// //                                     'rgba(153, 102, 255, 1)',
// //                                     'rgba(255, 159, 64, 1)'
// //                                 ],
// //                             borderWidth: 1
// //                             }
// //                         ]
// //                     }
// //                 }
                
            
// //                         height={400}
// //                         width={600}
// //                         options={{maintainAspectRatio: false}}
// //             /> */}
                
// //             </div>
// //                 <div className = "loser-container">

// //                     {bottom_ten}
                    
                
                    
// //                 </div>
// //             </>
// //         )
// //     // } else {
// //     //     console.log('topTenGraphData', topTenGraphData)
// //     //     return (
// //     //         <div></div>
// //     //     )
// //     // }
// // }

// // export default Rankings
