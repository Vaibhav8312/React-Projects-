import useGif from '../hooks/useGif';
import React, { useState } from 'react'
import Spinner from "./Spinner"


const Tag = () => {

  const [tag, setTag] = useState('');
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt="" width="450" />)
      }


      <input
        className='w-10/12 text-center rounded-lg text-lg py-2 mb-[3px]'
        onChange={(event) => setTag(event.target.value) }
        type="text"
        value={tag} 
        />
 

      <button
        className='w-10/12  bg-yellow-400 rounded-lg text-lg py-2 mb-[20px]'
        onClick={() => fetchData(tag) }>
        Generate
      </button>

    </div>  
  )
}

export default Tag