import { child, ref, get } from "firebase/database";
import { useEffect, useState } from "react"
import { database } from "../../ADMIN/Data";


const useFindData = () => {
    const [bikes, setBikes] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [mobiles, setMobiles] = useState([]);
 

    const fetchDataAndMerge = async (category, setData) => {
        const dbRef = ref(database);
        const categoryRef = child(dbRef, category);
        const snapshot = await get(categoryRef);
        const categoryArray = [];
        snapshot.forEach((childSnapshot) => {
            categoryArray.push(childSnapshot.val());
        });
        setData(categoryArray);
    };
    useEffect(() => {
        Promise.all([
            fetchDataAndMerge("bike", setBikes),
            fetchDataAndMerge("laptop", setLaptops),
            fetchDataAndMerge("mobile", setMobiles)
        ])
    },[])
  return {bikes, laptops, mobiles}
}

export default useFindData