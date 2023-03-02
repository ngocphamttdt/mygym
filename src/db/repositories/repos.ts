import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from 'firebase/firestore'
import { db } from '..'

export const _all = async (collectionName: string): Promise<Array<any>> => {
  const querySnapshot = await getDocs(collection(db, collectionName))
  const data: Array<any> = []

  querySnapshot.forEach((doc: any) => {
    data.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return data
}

export const _create = async (collectionName: string, document: any) =>
  await addDoc(collection(db, collectionName), document)

export const _update = async (
  collectionName: string,
  docId: string,
  document: any
) => {
  const docRef = doc(db, collectionName, docId)
  await updateDoc(docRef, document)
}

export const _remove = async (collectionName: string, docId: string) => {
  const docRef = doc(db, collectionName, docId)
  await deleteDoc(docRef)
}
