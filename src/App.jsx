import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Layout from './components/Layout';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <div className="flex-1 w-full p-4 mx-auto max-w-7xl md:px-8 md:py-16">
        <Layout>
          <h1 className="text-gray-800 text-2xl text-center font-bold leading-7 bg-clip-text text-transparent sm:text-3xl sm:leading-9 sm:truncate">
            Snowpack + Preact + HMR + Tailwind
          </h1>
          <div className="h-full flex flex-wrap md:flex-no-wrap justify-center items-center my-12 py-12 px-4 sm:px-8">
            <div className="flex flex-wrap justify-center">
              <div>
                <img
                  className="w-56 md:w-40"
                  src="./snowpack-logo-black.png"
                  alt="snowpack-logo"
                />
                <img
                  className="w-56 md:w-40 mt-2"
                  src="./snowpack-wordmark-black.png"
                  alt="snowpack-wordmark"
                />
              </div>
              <div className="w-24 my-auto text-gray-700 hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <img className="w-56 md:w-40" src="./preact.png" alt="preact" />
              <div className="w-24 my-auto text-gray-700 hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-8 md:mt-0">
              Edit{' '}
              <code className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                src/App.jsx
              </code>{' '}
              and save to reload.
            </p>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
