
import { IPhoto } from 'components/models/photo'
import React, { useEffect, useRef, useState } from 'react'


export const Photos = () => {
  const postRef = useRef<HTMLInputElement>(null)
  const [photos, setPhotos] = useState<IPhoto[]>()
  const [favoritePhoto, setFavoritePhoto] = useState<boolean>(false)
  const [testVal, setTestVal] = useState<string>()
  const [newPostName, setNewPostName] = useState<string>()
  const getAll = async () => {
    try {
      const photoData = await fetch(`https://6421599086992901b2b1200b.mockapi.io/getAll`).then((response) => {
        return response.json()
      }).then(data => {
        setPhotos(data as IPhoto[])
      })

      // const response2 = await fetch('https://6421599086992901b2b1200b.mockapi.io/getAll')
      // const dataSecond = await response2.json()
      // console.log('dataSecond', dataSecond);

    } catch (error: any) {
    }
  }

  const handleFavourite = async (id: number, favouriteVal: boolean) => {
    try {
      const requestOptions: any = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ favourite: !favouriteVal })
      }
      const baseUrl: string = `https://6421599086992901b2b1200b.mockapi.io/getAll/${id}`
      await fetch(baseUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('new put: ', data)
          setTestVal(data.title as string)
        })
    } catch (error: any) {
      console.log('errr1', error);
    }
  }

  const handleCreate = async () => {
    const requestOptions: any = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        thumbnailUrl: 'hp-thumbmail1',
        title: 'hp-gym',
        favourite: false
      } as IPhoto)
    }
    const baseUrl: string = `https://6421599086992901b2b1200b.mockapi.io/getAll`
    await fetch(baseUrl, requestOptions)
      .then(response => response.json())
      .then(data => {

        console.log('new post: ', data)
        setNewPostName(data.title as string)
      })

  }
  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <div>
        <input name='search-post' ref={postRef} ></input>
        <button
          onClick={handleCreate}
          data-testid="f-create"
        >
          Create
        </button>
      </div>
      <div>
        {photos ?
          <>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                  <td>ThumbnailUrl</td>
                  <td>Favourite</td>
                </tr>
              </thead>
              <tbody>
                {photos?.map(({ id, title, thumbnailUrl, favourite }: IPhoto, indx) => (
                  <tr key={indx}>
                    <td>{title}</td>
                    <td>{thumbnailUrl}</td>
                    <td><button data-testid="f-btn" onClick={() => handleFavourite(id, favourite)}>{favourite ? 'Add to Favourites' : 'Remove to Favourites'}</button></td>
                  </tr>
                ))}
              </tbody>
            </table></>
          :
          <div>Loading</div>
        }

        <div>postId: {testVal}</div>
        <div>new post name: {newPostName}</div>
      </div>
    </>
  )
}