import logo from '../assets/Logo(1).svg';
import home from '../assets/Home.svg';
import Movie from '../assets/Movie.svg';
import TV from '../assets/TV.svg';
import Calendar from '../assets/Calendar.svg';
import Logout from '../assets/Logout.svg';
import { NavLink } from 'react-router-dom';
import Playing from './Playing';

const links = [
    { to: '/', name: 'Home', logo: home },
    { to: '/details/id:346698', name: 'Movies', logo: Movie },
    { to: '/series', name: 'TV Series', logo: TV },
    { to: '/upcoming', name: 'Upcoming', logo: Calendar },
];

const Aside = () => {
  return (
    <aside className="border border-[rgba(0,0,0,0.3)] rounded-e-3xl py-4 w-48 lg:w-[14.5rem] flex flex-col justify-between items-center bg-white h-screen">
        <img src={logo} alt="logo" className='w-3/4 h-10' />

        <nav className='flex flex-col w-full'>
            {links.map(({to, name, logo}, i) => (
                <NavLink key={i} to={to} className={({isActive}) => `flex pl-6 py-3 text-lg w-full font-semibold ${isActive ? 'text-[#BE123C] bg-[#d6335c33] border-r-[#BE123C] border-r-4' : 'text-[#666]'}`}>
                <img src={logo} className='mr-3' alt="" />
                {name}
            </NavLink>
            ))}
        </nav>

        <Playing />

        <button className='flex text-lg text-[#666] font-bold'>
          <img src={Logout} className='mr-2.5' alt="" />
          Log out
        </button>
    </aside>
  )
}

export default Aside