const post = async ( url, data ) => {
  const res = await fetch( url, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( data ),
    method: 'POST',
  })

  return await res.json()
}

const get = async ( url, p = null ) => {
  const res = !p 
    ? await fetch( `${ url }?${ p }` )
    : await fetch( url )

  return await res.json()
}

export { post, get };