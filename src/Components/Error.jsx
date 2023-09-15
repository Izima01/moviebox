import err from '../assets/error-905.svg';

// eslint-disable-next-line react/prop-types
const Error = ({ info }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
        <img src={err} className='w-16' alt="" />
        <h2 className='text-xl text-red-600 font-bold'>Error Fetching Data: {info}</h2>
    </div>
  )
}

export default Error