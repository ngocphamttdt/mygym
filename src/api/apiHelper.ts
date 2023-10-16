export const get: any = async (url: string) => {
  try {
    const requestOptions: any = {
      method: "POST",
      headers: { "Content-Type": "application/json" },

    }
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error("url", error)
    return error
  }
}

export const post: any = async (url: string, data: any) => {
  const requestOptions: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }
  try {
    const response = await fetch(url, requestOptions)
    return await response.json()
  } catch (error) {
    console.error("url", error)
    return error
  }
}

export const put: any = async (url: string, data: any) => {
  const requestOptions: any = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }
  const response = await fetch(url, requestOptions)
  return await response.json()
}

export const remove: any = async (url: string) => {
  const requestOptions: any = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }
  const response = await fetch(url, requestOptions)
  return await response.json
}
