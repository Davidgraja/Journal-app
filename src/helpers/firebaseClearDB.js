import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const firebaseClearDB = async (uid) =>{
    const collectionRef =  collection(FirebaseDB , `Journal-app/${uid}/notes`)
        const docs = await getDocs(collectionRef)

        console.log(docs)
        const deletePromises = [];
        docs.forEach( doc =>  deletePromises.push(deleteDoc(doc.ref)) );

        await Promise.all(deletePromises);
}