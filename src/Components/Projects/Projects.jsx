import React from 'react';
import './Projects.css'
import screen1 from '../../assets/images/screen-1.png'
import screen2 from '../../assets/images/screen-2.png'
import screen3 from '../../assets/images/screen-3.png'
import screen4 from '../../assets/images/screen4.png'



export default function Projects() {
    
    const navigateToMarket = () => {
        window.open("https://github.com/Flaviu8/market-app", "_blank", "noopener,noreferrer");
    }

    const navigateToNetlifyMarket = () => {
        window.open("https://elegant-douhua-e6ef1a.netlify.app/", "_blank", "noopener,noreferrer");
    }

    const navigateToNetlifyStore = () => {
        window.open("https://lucent-lamington-12e0dd.netlify.app/", "_blank", "noopener,noreferrer");
    }

        const navigateToStore = () => {
        window.open("https://github.com/Flaviu8/store_go", "_blank", "noopener,noreferrer");
    }

    const navigateToNetlifyVideo = () => {
        window.open("https://stellar-licorice-325adf.netlify.app/", "_blank", "noopener,noreferrer");
    }

       const navigateToVideo = () => {
        window.open("https://github.com/Flaviu8/video-apps", "_blank", "noopener,noreferrer");
    }

       const navigateToDesign = () => {
        window.open("https://delicate-sawine-0ce150.netlify.app/", "_blank", "noopener,noreferrer");
    }

      const navigateToDesignGit = () => {
        window.open("https://github.com/Flaviu8/profiri", "_blank", "noopener,noreferrer");
    }


  return (
    <div className='projects_main'>
        <h3 className='text-neutral-950 text-3xl ml-4 pt-6 pb-6 text-center'>My Projects Front-end</h3>
    <div className='projects ml-4 mr-4'>
        <div className="max-w-sm mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <img
            className="w-full h-48 object-cover"
            src={screen2}
            alt="Card"
        />
        <div className="">
            <h2 className="text-xl font-semibold text-gray-800">Market-Project</h2>
            <p className="mt-2 text-gray-600">
            React/CSS
            </p>
        </div>
        <div className="buttons ">
            <button onClick={navigateToMarket} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
                Source Code
            </button>
            <button onClick={navigateToNetlifyMarket} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded ml-6">
                Netlify Link
            </button>
        </div>
        </div>
        <div className="max-w-sm mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <img
            className="w-full h-48 object-cover"
            src={screen1}
            alt="Card"
        />
        <div className="px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800">Netflix-Project</h2>
            <p className="mt-2 text-gray-600">
            React/Styled-Component
            </p>
        </div>
        <div className="px-4 py-2">
            <button onClick={navigateToVideo} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
            Source Code
            </button>
            <button onClick={navigateToNetlifyVideo} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded ml-6">
                Netlify Link
            </button>
        </div>
        </div>
        <div className="max-w-sm mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <img
            className="w-full h-48 object-cover"
            src={screen3}
            alt="Card"
        />
        <div className="px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800">Store-Project</h2>
            <p className="mt-2 text-gray-600">
            React/CSS
            </p>
        </div>
        <div className="px-4 py-2">
            <button onClick={navigateToStore} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
            Source Code
            </button>
            <button onClick={navigateToNetlifyStore} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded ml-6">
                Netlify Link
            </button>
        </div>
        </div>
         <div className="max-w-sm mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <img
            className="w-full h-48 object-cover"
            src={screen4}
            alt="Card"
        />
        <div className="px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800">Design-Project</h2>
            <p className="mt-2 text-gray-600">
            React/CSS
            </p>
        </div>
        <div className="px-4 py-2">
            <button onClick={navigateToDesignGit} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
            Source Code
            </button>
            <button onClick={navigateToDesign} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded ml-6">
                Netlify Link
            </button>
        </div>
        </div>
        </div>
        <h4 className='text-neutral-950 text-3xl ml-4 pt-6 pb-6 text-center'>My Projects Back-end</h4>
        <div className='ml-4 flex justify-center'>
            <ul className='links'>
                <li className='mb-4'><a className='text-2xl text-indigo-600' href='https://github.com/Flaviu8/market-app-backend' target='_blank'>Market App Backend</a></li>
                <li><a className='text-2xl text-indigo-600' href='https://github.com/Flaviu8/cinema-backend' target='_blank'>Cinema App Backend</a></li>
                <li className='mt-4'><a className='text-2xl text-indigo-600' href='https://github.com/Flaviu8/e-book' target='_blank'>eBook App Backend</a></li>
                <li className='mt-4'><a className='text-2xl text-indigo-600' href='https://github.com/Flaviu8/memoQr-backend' target='_blank'>MemoQr App Backend</a></li>
            </ul>
        </div>
    </div>
  );
};



