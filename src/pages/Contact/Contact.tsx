import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

export default function Contact() {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div
      style={{ backgroundColor: "var(--bg-primary)" }}
      className="min-h-[650px] flex items-center justify-center px-4 py-8 sm:py-12"
    >
      <div
        className={`max-w-6xl w-full rounded-xl overflow-hidden ${currentTheme === 'dark'
          ? 'shadow-[0_0_20px_4px_rgba(30,58,138,0.2)]'
          : currentTheme === 'color'
            ? 'shadow-[0_0_20px_4px_rgba(120,53,15,0.2)]'
            : 'shadow-[0_0_20px_4px_rgba(0,0,0,0.1)]'
          }`}
      >
        <div className="flex flex-col lg:flex-row">

          <div
            style={{
              backgroundColor: currentTheme === 'dark' ? '#1e293b' : currentTheme === 'color' ? '#fffbeb' : '#f3f4f6',
              borderRight: currentTheme === 'dark' ? '1px solid #334155' : currentTheme === 'color' ? '1px solid #fcd34d' : '1px solid #e5e7eb'
            }}
            className="w-full lg:w-2/5 p-6 sm:p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="mb-6 sm:mb-8">
              <h1
                style={{ color: "var(--text-title-contact)" }}
                className={`text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 ${currentTheme === 'color' ? 'text-amber-800' : ''}`}
              >
                Get in touch
              </h1>
              <p
                style={{ color: "var(--text-subTitle-contact)" }}
                className={`text-base sm:text-lg ${currentTheme === 'color' ? 'text-amber-600' : ''}`}
              >
                We'd love to hear from you. Here's how you can reach us.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div
                  style={{ color: "var(--logo)" }}
                  className={`mt-1 p-2 rounded-full ${currentTheme === 'dark' ? 'bg-slate-700' : currentTheme === 'color' ? 'bg-amber-100' : 'bg-gray-100'}`}
                >
                  <Icon icon="mdi:email" className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3
                    style={{ color: "var(--text-title-contact)" }}
                    className={`font-semibold text-sm sm:text-base ${currentTheme === 'color' ? 'text-amber-800' : ''}`}
                  >
                    Email
                  </h3>
                  <p
                    style={{ color: "var(--text-subTitle-contact)" }}
                    className={`text-xs sm:text-sm ${currentTheme === 'color' ? 'text-amber-600' : ''}`}
                  >
                    ashishsahoo0013@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div
                  style={{ color: "var(--logo)" }}
                  className={`mt-1 p-2 rounded-full ${currentTheme === 'dark' ? 'bg-slate-700' : currentTheme === 'color' ? 'bg-amber-100' : 'bg-gray-100'}`}
                >
                  <Icon icon="mdi:phone" className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3
                    style={{ color: "var(--text-title-contact)" }}
                    className={`font-semibold text-sm sm:text-base ${currentTheme === 'color' ? 'text-amber-800' : ''}`}
                  >
                    Phone
                  </h3>
                  <p
                    style={{ color: "var(--text-subTitle-contact)" }}
                    className={`text-xs sm:text-sm ${currentTheme === 'color' ? 'text-amber-600' : ''}`}
                  >
                    +91 8999081573
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div
                  style={{ color: "var(--logo)" }}
                  className={`mt-1 p-2 rounded-full ${currentTheme === 'dark' ? 'bg-slate-700' : currentTheme === 'color' ? 'bg-amber-100' : 'bg-gray-100'}`}
                >
                  <Icon icon="mdi:linkedin" className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3
                    style={{ color: "var(--text-title-contact)" }}
                    className={`font-semibold text-sm sm:text-base ${currentTheme === 'color' ? 'text-amber-800' : ''}`}
                  >
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/ashishsahoo899/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-logo)" }}
                    className={`text-xs sm:text-sm hover:underline ${currentTheme === 'color' ? 'text-amber-600' : ''}`}
                  >
                    linkedin.com/in/ashishsahoo899
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section - Mobile First */}
          <div
            style={{ backgroundColor: "var(--bg-primary)" }}
            className="w-full lg:w-3/5 p-6 sm:p-8 md:p-12 flex flex-col justify-center"
          >
            <h2
              style={{ color: "var(--text-primary)" }}
              className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${currentTheme === 'color' ? 'text-amber-800' : ''}`}
            >
              Send us a message
            </h2>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
                <div>
                  <label
                    style={{ color: "var(--text-primary)" }}
                    htmlFor="name"
                    className={`block text-xs sm:text-sm font-medium mb-1 ${currentTheme === 'color' ? 'text-amber-700' : ''}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg border focus:outline-none focus:ring-2 ${currentTheme === 'dark'
                      ? 'bg-gray-800 border-gray-700 focus:ring-blue-500 text-gray-100'
                      : currentTheme === 'color'
                        ? 'bg-amber-50 border-amber-200 focus:ring-amber-500 text-amber-900'
                        : 'bg-white border-gray-300 focus:ring-gray-500 text-gray-800'
                      }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    style={{ color: "var(--text-primary)" }}
                    htmlFor="email"
                    className={`block text-xs sm:text-sm font-medium mb-1 ${currentTheme === 'color' ? 'text-amber-700' : ''}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg border focus:outline-none focus:ring-2 ${currentTheme === 'dark'
                      ? 'bg-gray-800 border-gray-700 focus:ring-blue-500 text-gray-100'
                      : currentTheme === 'color'
                        ? 'bg-amber-50 border-amber-200 focus:ring-amber-500 text-amber-900'
                        : 'bg-white border-gray-300 focus:ring-gray-500 text-gray-800'
                      }`}
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label
                  style={{ color: "var(--text-primary)" }}
                  htmlFor="subject"
                  className={`block text-xs sm:text-sm font-medium mb-1 ${currentTheme === 'color' ? 'text-amber-700' : ''}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg border focus:outline-none focus:ring-2 ${currentTheme === 'dark'
                    ? 'bg-gray-800 border-gray-700 focus:ring-blue-500 text-gray-100'
                    : currentTheme === 'color'
                      ? 'bg-amber-50 border-amber-200 focus:ring-amber-500 text-amber-900'
                      : 'bg-white border-gray-300 focus:ring-gray-500 text-gray-800'
                    }`}
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  style={{ color: "var(--text-primary)" }}
                  htmlFor="message"
                  className={`block text-xs sm:text-sm font-medium mb-1 ${currentTheme === 'color' ? 'text-amber-700' : ''}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg border focus:outline-none focus:ring-2 ${currentTheme === 'dark'
                    ? 'bg-gray-800 border-gray-700 focus:ring-blue-500 text-gray-100'
                    : currentTheme === 'color'
                      ? 'bg-amber-50 border-amber-200 focus:ring-amber-500 text-amber-900'
                      : 'bg-white border-gray-300 focus:ring-gray-500 text-gray-800'
                    }`}
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all text-sm sm:text-base ${currentTheme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : currentTheme === 'color'
                    ? 'bg-amber-500 hover:bg-amber-600 text-amber-50'
                    : 'bg-gray-700 hover:bg-gray-800 text-white'
                  }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}