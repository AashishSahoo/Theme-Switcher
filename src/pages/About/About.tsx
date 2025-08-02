import logo from '../../assets/logo.png';
import store from '../../assets/store.jpg';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

export default function About() {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-colors duration-300 ${currentTheme === 'dark' ? 'shadow-blue-500/20' : 'shadow-gray-200'}`}>
      <div className="flex flex-col md:flex-row font-sans min-h-[650px]">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <img
            src={store}
            alt="Our store"
            className="w-full h-full object-cover absolute inset-0"
          />

        </div>

        <div
          style={{ backgroundColor: "var(--bg-about)" }}
          className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16"
        >
          <div className="mb-6">
            <img
              src={logo}
              alt="Company logo"
              className={`w-40`}
            />
          </div>

          <h1
            style={{ color: "var(--text-title-about)" }}
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
          >
            Crafting Exceptional Experiences
          </h1>

          <div className="space-y-4">
            <p
              style={{ color: "var(--text-subTitle-about)" }}
              className="text-base md:text-lg leading-relaxed"
            >
              At our core, we believe in blending quality with innovation to deliver products that elevate your everyday life.
            </p>

            <p
              style={{ color: "var(--text-subTitle-about)" }}
              className="text-base md:text-lg leading-relaxed"
            >
              Founded with a passion for excellence, our store brings you carefully curated selections that combine functionality with timeless design.
            </p>

            <p
              style={{ color: "var(--text-subTitle-about)" }}
              className="text-base md:text-lg leading-relaxed"
            >
              We're committed to sustainable practices and ethical sourcing, ensuring every purchase makes a positive impact.
            </p>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <div className={`h-1 w-12 ${currentTheme === 'dark' ? 'bg-blue-400' : currentTheme === 'color' ? 'bg-amber-500' : 'bg-gray-800'}`}></div>
            <span
              style={{ color: "var(--text-subTitle-about)" }}
              className="font-medium uppercase tracking-wider text-sm"
            >
              Since 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}