import { ReactNode } from 'react';
import Nav from '../../components/Landing/Nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <footer className='text-center text-white text-slate-500 bg-black py-5'>
        Netflix VietNam
      </footer>
    </>
  );
}
