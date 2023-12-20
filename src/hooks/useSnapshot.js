import { useEffect,useState } from "react";
import {doc, onSnapshot} from 'firebase/firestore';
import {db} from '../firebase';

const useSnapshot = (collection, docId)=>{
    const [val, setVal] = useState();

    useEffect(()=>{
        const docRef = doc(db,collection,docId);
        const unsub = onSnapshot(docRef, (doc)=>setVal(doc.data()));
        return ()=> unsub();

    },[]);
    return{val};
}

export default useSnapshot;