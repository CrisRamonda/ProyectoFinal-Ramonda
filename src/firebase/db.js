import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })
    return products
}

export const getProductsByCategory = async (prodCategory) => {
    const q = query(collection(db, "products"), where("category", "==", prodCategory))
    const products = []

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })
    return products
}

export const getProductById = async (productId) => {
    const docRef = doc(db, "products", productId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log('No existe ese producto')
    }
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        console.log("Document written with ID: ", docRef.id)
        return docRef.id
    } catch (e) {
        console.error("Error adding document: ", e)
    }
}