import Spinner from "./Spinner"
import useGif from '../hooks/useGif';

const Random = () => {


  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt="" width="450" />)
      }

      

      <button 
        className='w-10/12  bg-blue-400 rounded-lg text-lg py-2 mb-[20px]' 
        onClick={ () => fetchData() }>
        Generate
      </button>

    </div>
  )
}

export default Random