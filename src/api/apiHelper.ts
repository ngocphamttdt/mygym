export const get: any = async (url: string, token: string) => {
  try {
    const headers = { 'Authorization': `bearer ${token}` };
    const response = await fetch(url, { headers })
    return await response.json()
  } catch (error) {
    console.error("url", error)
    return error
  }
}

export const post: any = async (url: string, data: any, token: string) => {
  debugger
  const header = { 'Content-Type': 'application/json' }
  const headerAuthen = {
    'Content-Type': 'application/json',
    'Authorization': `bearer ${token}`
  }

  const requestOptions: any = {
    method: "POST",
    headers: token ? headerAuthen : header,
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

export const put: any = async (url: string, data: any, token: string) => {
  const requestOptions: any = {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(url, requestOptions)
  return await response.json()
}

export const remove: any = async (url: string, token: string) => {
  const requestOptions: any = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    }
  }
  const response = await fetch(url, requestOptions)
  return await response.json
}
