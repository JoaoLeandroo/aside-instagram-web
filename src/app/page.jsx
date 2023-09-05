import { BsInstagram, BsSearch, BsList } from 'react-icons/bs'
import { BiMoviePlay, BiMessageRounded, BiUserCircle } from 'react-icons/bi'
import { AiFillHome, AiOutlineHeart, AiOutlinePlusSquare } from 'react-icons/ai'
import { MdOutlineExplore } from 'react-icons/md'

export default function Home() {
  return (
    <aside className="w-60 h-screen border border-solid border-gray-300 p-5">
      <div className='p-3 mt-3 flex gap-3 cursor-pointer'>
        <BsInstagram size={25}/>
        <h2 className='font-semibold'>Instagram</h2>
      </div>
      <div className='mt-5'>
        <ul>
          <li className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold'>
            <AiFillHome size={25}/>
            <p className='text-[18px]'>Página Inicial</p>
          </li>
          <li className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold'>
            <BsSearch size={25}/>
            <p className='text-[18px]'>Pesquisa</p>
          </li>
          <li className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold'>
            <MdOutlineExplore size={25}/>
            <p className='text-[18px]'>Explorar</p>
          </li>
          <li className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold'>
            <BiMoviePlay size={25}/>
            <p className='text-[18px]'>Reels</p>
          </li>
          <li className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold'>
            <BiMessageRounded size={25}/>
            <p className='text-[18px]'>Mensagens</p>
          </li>
          <li className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold'>
            <AiOutlineHeart size={25}/>
            <p className='text-[18px]'>Notificações</p>
          </li>
          <li className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold'>
            <AiOutlinePlusSquare size={25}/>
            <p className='text-[18px]'>Criar</p>
          </li>
          <li className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold'>
            <BiUserCircle size={25}/>
            <p className='text-[18px]'>Perfil</p>
          </li>
        </ul>
      </div>

      <div className='h-12 cursor-pointer p-3 flex items-center gap-2 rounded-md hover:bg-slate-100 hover:font-bold mt-5'>
        <BsList size={30}/>
        <p className='text-[19px]'>Mais</p>
      </div>
    </aside>
  )
}
