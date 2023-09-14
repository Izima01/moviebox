import star from '../assets/Star.svg';
import tickets from '../assets/Tickets.svg';
import List from '../assets/List.svg';
import best from '../assets/bestshow.png'

const MovieInfo = () => {
  return (
    <div className="text-black sm:px-2">
        <div className="top flex flex-col gap-1.5 lg:gap-0 lg:flex-row justify-between w-full">
            <div className="flex gap-5 flex-col lg:flex-row">
                <h3 className="flex items-center justify-between md:gap-2 text-[#404040] text-xl md:text-lg lg:text-xl">
                    Top Gun: Maverick
                    <div className="bg-[#404040] w-1.5 h-1.5 mt-1 rounded-full" />
                    2022
                    <div className="bg-[#404040] w-1.5 h-1.5 mt-1 rounded-full" />
                    PG-13
                    <div className="bg-[#404040] w-1.5 h-1.5 mt-1 rounded-full" />
                    2h 10m
                </h3>

                <div className="flex gap-3">
                    <button className="py-0.5 text-sm text-[#B91C1C] border border-[#F8E7EB] px-3 rounded-full">Action</button>
                    <button className="py-0.5 text-sm text-[#B91C1C] border border-[#F8E7EB] px-3 rounded-full">Action</button>
                </div>
            </div>
            <div className='flex gap-2 items-end'>
                <img src={star} alt="" />
                <p className='text-[#bdbcbc] text-xl font-medium'>8.5</p>
                <p className='text-[#666] font-semibold border-l border-l-[#bdbcbc] pl-1 leading-none'>350k</p>
            </div>
        </div>

        <section className="bottom flex flex-col sm:flex-row w-full justify-between mt-7 gap-6">
            <section className='w-full sm:w-8/12 md:w-7/12 lg:w-3/4 '>
                <p className='text-[#333] text-lg mb-7'>After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
                
                <p className='text-lg text-[#333] mb-5'>
                    Directors:
                    <span className='text-[#BE123C]'> Joseph Kosinki </span>
                </p>
                
                <p className='text-lg text-[#333] mb-5'>
                    Writers :
                    <span className='text-[#BE123C]'> Jim Cash, Jack Epps Jr, Peter Craig</span>
                </p>
                
                <p className='text-lg text-[#333] mb-5'>
                    Stars :
                    <span className='text-[#BE123C]'> Tom Cruise, Jennifer Connelly, Miles Teller</span>
                </p>
            </section>
            <div className='flex flex-col w-full sm:w-4/12 md:w-5/12 lg:w-[calc(25%-24px)] gap-4'>
                <button className='bg-[#BE123C] text-white justify-center md:text-lg flex items-center w-full py-2.5 rounded-lg'>
                    <img src={tickets} className='pr-2 md:scale-75' alt="" />
                    See Showtimes
                </button>
                <button className='border-[#BE123C] border text-black bg-[#F8E7EB] md:text-lg flex justify-center items-center w-full py-2.5 rounded-lg'>
                    <img src={List} className='pr-2 md:scale-75' alt="" />
                    More watch options
                </button>
                <img src={best} alt="" />
            </div>
        </section>
    </div>
  )
}

export default MovieInfo