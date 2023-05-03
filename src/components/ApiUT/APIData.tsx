import { Button } from "@mui/material"
import { IPhoto } from "components/models/photo"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container: any = styled.div`
  max-width: 1536px;
  margin: 10px auto;
  display: flex;
  flex-direction:column ;
  gap: 16px;
  padding-top: 8px ;
  
`
const BtnSection: any = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  padding: 12px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;  
`

const ContentSection: any = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

`
const Item: any = styled.div`
  width: 28%;
  height: 150px;
  margin: 12px 0;
  padding: 12px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const APIData = () => {
  const [photos, setPhotos] = useState<IPhoto[]>()

  const getAll = () => {
    const getAllPromise = new Promise((resolve, reject) => {
      try {
        fetch('https://6421599086992901b2b1200b.mockapi.io/getAll').then(res => res.json())
          .then(data => resolve(data))
      } catch (error) {
        reject(error)
      }
    })
    return getAllPromise
  }
  useEffect(() => {
    getAll().then(data => setPhotos(data as IPhoto[]))
      .catch(err => err)

    return () => { }
  }, [])
  return (
    <Container>
      <BtnSection>
        <Button variant="outlined">All</Button>
        <Button variant="outlined">Create</Button>
      </BtnSection>
      <ContentSection>
        {photos && photos.map(({ title, thumbnailUrl }: IPhoto, index) => <Item key={index}>
          <p>{title}</p>
          <p>{thumbnailUrl}</p>
        </Item>)}
      </ContentSection>
    </Container>
  )
}