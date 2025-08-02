import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function Layout() {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <div
      className={`theme-${currentTheme}`}
      style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <Header />
      <div className='flex w-full max-w-[100vw]'>
        {currentTheme === 'dark' && (
          <aside className="hidden lg:block w-60 min-h-[calc(100vh-64px)] bg-gray-800 text-white p-4">
            <div className="space-y-4">
              <Link to="/">
                <div className="p-2 hover:bg-gray-700 rounded cursor-pointer">Home</div>
              </Link>
              <Link to="/about">
                <div className="p-2 hover:bg-gray-700 rounded cursor-pointer">About</div>
              </Link>
              <Link to="/contact">
                <div className="p-2 hover:bg-gray-700 rounded cursor-pointer">Contact</div>
              </Link>
            </div>
          </aside>
        )}
        <main className={`flex-1 p-4 w-full max-w-[100vw]`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}