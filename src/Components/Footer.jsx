import fb from '../assets/facebook-square.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="w-[86%] md:w-3/5 lg:w-1/2 mx-auto my-20">
      <ul className="flex gap-12 mx-auto justify-center">
        <li className='hover:scale-110 duration-500 transition'>
          <a href="https://facebook.com">
            <img src={fb} alt="" />
          </a>
        </li>
        <li className='hover:scale-110 duration-500 transition'>
          <a href="https://instagram.com">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li className='hover:scale-110 duration-500 transition'>
          <a href="https://twitter.com">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li className='hover:scale-110 duration-500 transition'>
          <a href="https://youtube.com">
            <img src={youtube} alt="" />
          </a>
        </li>
      </ul>

      <nav className="my-8 flex justify-between">
        <a href="/" className="text-[#111827] sm:text-lg font-bold hover:text-[#30436e]">Conditions of Use</a>
        <a href="/" className="text-[#111827] sm:text-lg font-bold hover:text-[#30436e]">Privacy & Policy</a>
        <a href="/" className="text-[#111827] sm:text-lg font-bold hover:text-[#30436e]">Press Room</a>
      </nav>

      <p className='text-[#6B7280] text-lg font-bold text-center'>© 2021 MovieBox by Adriana Eka Prayudha</p>
    </footer>
  )
}

export default Footer