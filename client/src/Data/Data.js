import {useState, createContext, useEffect} from 'react';
import axios from 'axios';
export const DataCtx = createContext();


const DataApp = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [store, setStore] = useState([])
    const [explore, setExplore] = useState([])

    useEffect(() => {
        const fetchStore = async () => {
            const storeResult = await axios.get(`http://localhost:8081/getStore`);
            setStore(storeResult.data.map(x => { return {id: x.id, title: x.title, desc: x.desc, user_id : x.user_id, image : x.image, date : x.date, price : x.price}} ))
            }
        const fetchExplore = async () => {
            const exploreResult = await axios.get(`http://localhost:8081/getExplore`);
            setExplore(exploreResult.data.map(x => { return {id: x.id, user_id : x.user_id, title : x.title, post: x.post, gambar : x.gambar, date  : x.date}} ))
            }
        
        fetchStore()
        fetchExplore()

    }, [])

    const context = {isLogin, setIsLogin, store, setStore, explore, setExplore}

    return( 
        <DataCtx.Provider value={context}> 
            {props.children}
        </DataCtx.Provider>
    )
}

export default DataApp;