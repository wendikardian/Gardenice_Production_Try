import {useState, createContext, useEffect} from 'react';
import axios from 'axios';
export const DataCtx = createContext();


const DataApp = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [store, setStore] = useState([])
    const [userDataList, setUserDataList] = useState([])
    const [comment, setComment] = useState([])
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
        const userDataList = async () => {
            const userListResult = await axios.get(`http://localhost:8081/userList`);
            setUserDataList(userListResult.data.map(x => { return {id: x.id, name : x.name, email : x.email, gender : x.gender, roles : x.roles, image: x.image}} ))
            }
        const fetchComment = async () => {
            const commentData = await axios.get(`http://localhost:8081/getComment`);
            setComment(commentData.data.map(x => { return {id: x.id, user_id : x.user_id, post_id : x.post_id, comment : x.comment, date : x.date}} ))
            }
        
        fetchStore()
        fetchExplore()
        userDataList()
        fetchComment()

    }, [])

    const context = {isLogin, setIsLogin, store, setStore, explore, setExplore, userDataList, setUserDataList, comment, setComment}

    return( 
        <DataCtx.Provider value={context}> 
            {props.children}
        </DataCtx.Provider>
    )
}

export default DataApp;