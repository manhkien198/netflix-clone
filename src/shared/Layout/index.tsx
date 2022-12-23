import { ReactNode } from 'react';
import Nav from '../../components/Landing/Nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <div className="grow">
      {children}
      </div>
      <footer className='text-center text-slate-500 bg-black py-5 opacity-80'>
        Netflix VietNam
      </footer>
    </div>
  );
}
