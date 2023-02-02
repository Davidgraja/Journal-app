import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../src/firebase/config";

export const firebaseClearDB = async (uid) =>{
    const collectionRef =  collection(FirebaseDB , `Journal-app/${uid}/notes`)
        const docs = await getDocs(collectionRef)

        const deletePromises = [];
        docs.forEach( doc =>  deletePromises.push(deleteDoc(doc.ref)) );

        await Promise.all(deletePromises);
}