import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { setTheme } from '../store/slices/themeSlice';
import type { RootState } from '../store/store';
import { logout } from "../store/slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleThemeChange = (theme: 'light' | 'dark' | 'color') => {
    dispatch(setTheme(theme));
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      if (prev) setDropdownOpen(false);
      return !prev;
    });
  };

  return (
    <header
      className="border-b shadow-sm transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--accent)',
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Theme Switcher
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Home
          </Link>
          <Link to="/about" className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            About
          </Link>
          <Link to="/contact" className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <div className="relative w-25">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium rounded-lg border shadow-sm transition-colors cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-section)',
                color: 'var(--text-section)',
                borderColor: 'var(--border-card)',
              }}
            >
              {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}
              <svg
                className="w-2.5 h-2.5 ml-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute mt-2 w-full rounded-lg shadow-sm border z-10"
                style={{
                  backgroundColor: 'var(--bg-section)',
                  borderColor: 'var(--border-card)',
                }}
              >
                <ul className="py-2 text-sm" style={{ color: 'var(--text-section)' }}>
                  {['light', 'dark', 'color'].map((theme) => (
                    <li key={theme}>
                      <button
                        onClick={() => handleThemeChange(theme as 'light' | 'dark' | 'color')}
                        className="w-full text-left px-4 py-2 hover:bg-opacity-75 transition-colors"
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--text-section)',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--hover-card)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            onClick={() => dispatch(logout())}
            className="p-2 rounded-lg hover:bg-opacity-75 transition-colors cursor-pointer"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            <Icon icon="hugeicons:logout-square-02" width="24" height="24" />
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md p-2"
            style={{ color: 'var(--text-primary)' }}
          >
            <Icon
              icon={mobileMenuOpen ? 'iconamoon:close-bold' : 'charm:menu-hamburger'}
              className="h-6 w-6"
            />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 ">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="block text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="block text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="block text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact
          </Link>

          <div className="relative w-full">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium rounded-lg border shadow-sm transition-colors"
              style={{
                backgroundColor: 'var(--bg-section)',
                color: 'var(--text-section)',
                borderColor: 'var(--border-card)',
              }}
            >
              {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)} Theme
              <svg
                className="w-2.5 h-2.5 ml-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute mt-2 w-full rounded-lg shadow-sm border z-10"
                style={{
                  backgroundColor: 'var(--bg-section)',
                  borderColor: 'var(--border-card)',
                }}
              >
                <ul className="py-2 text-sm" style={{ color: 'var(--text-section)' }}>
                  {['light', 'dark', 'color'].map((theme) => (
                    <li key={theme}>
                      <button
                        onClick={() => handleThemeChange(theme as 'light' | 'dark' | 'color')}
                        className="w-full text-left px-4 py-2 hover:bg-opacity-75 transition-colors"
                        style={{
                          backgroundColor: 'transparent',
                          color: 'var(--text-section)',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--hover-card)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <p
            onClick={() => dispatch(logout())}
            className="block text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Logout
          </p>
        </div>
      )}
    </header>
  );
}