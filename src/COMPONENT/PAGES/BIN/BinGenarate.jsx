import { useEffect, useState } from "react"


const BinGenarate = () => {
    const [length, setLength] = useState('');
    const [cardType, setCardType] = useState('');
    const [card, setCard] = useState('');

    const [bins, setBins] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const randomArray = [];

        if(cardType == "5"){
            setCard("Master Card")
        } else{
            setCard("Visa Card")
        }

        for (let i = 1; i <= length; i++){
            const randomNumber = cardType + Math.floor(Math.random() * Math.pow(10, 5)).toString().padStart(5, '0');
            
            randomArray.push(randomNumber);
        }

        const fetchBinInfo = (binNumber) => {
            return fetch(`https://data.handyapi.com/bin/${binNumber}`)
            .then(response => response.json())
            .then((result) => {
                
                setBins( prevBins => [...prevBins, {binNumber, result}])
            })
            .catch(error => {
                console.log(error)
            })
        }

        randomArray.forEach((binNumber) => fetchBinInfo(binNumber))
    }


    console.log(bins)
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="p-10 w-full flex items-center justify-center">
            <form onSubmit={handleSubmit} className="fixed">
                <input type="text" placeholder="How many cards needed?" value={length} required onChange={(e) => setLength(e.target.value)} className="border border-black px-3 py-1 rounded-xl" />
                <select value={cardType} required onChange={(e) => setCardType(e.target.value)} className="m-2 border px-3 py-1 rounded-xl focus:border-black">
                    <option>Select Card</option>
                    <option value="5">Master Card</option>
                    <option value="4">Visa Card</option>
                </select>
                <button className="bg-red-500 px-3 py-1 rounded-xl" >Submit</button>
            </form>
        </div>
        <span className="font-bold text-xl">{card}</span>
        {cardType && <table className="border border-black m-5">
            <thead className="border border-black">
                <tr>
                    <th className="border border-black p-2">Bin Number</th>
                    <th className="border border-black p-2">Card Tier</th>
                    <th className="border border-black p-2">Country</th>
                    <th className="border border-black p-2">Issuer</th>
                    <th className="border border-black p-2">Card</th>
                    <th className="border border-black p-2">Status</th>
                    <th className="border border-black p-2">Type</th>
                </tr>
            </thead>
            <tbody>
                {bins ? bins.map((items, index) => {
                    return <tr key={index} className="hover:bg-blue-700">
                        <td className="p-2 border border-black">{items.binNumber}</td>
                        <td className="p-2 border border-black">{items.result.CardTier}</td>
                        <td className="p-2 border border-black">{items.result.Country?.Name}</td>
                        <td className="p-2 border border-black">{items.result.Issuer}</td>
                        <td className="p-2 border border-black">{items.result.Scheme}</td>
                        <td className="p-2 border border-black">{items.result.Status}</td>
                        <td className="p-2 border border-black">{items.result.Type}</td>
                    </tr>
                }) : <div>

                </div>}
            </tbody>
        </table>}
    </div>
  )
}

export default BinGenarate