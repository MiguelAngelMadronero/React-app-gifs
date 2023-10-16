export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=xEx0DRxvJoUSGm7R5e1769PqRj7HSxVh&q=${ category }&limit=10`;
    const resp= await fetch(url);
    const {data}= await resp.json();
    const gifs=data.map(img=>({
      id: img.id,
      title: img.title.trim().length === 0 ? category : img.title ,
      url: img.images.downsized_medium.url
  
    }));
    
    return gifs;
}
  