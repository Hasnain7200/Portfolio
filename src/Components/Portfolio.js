import React from 'react'
import image1 from "../assets/portfolio/P1.jpg"
import image2 from "../assets/portfolio/P2.jpg"
import image3 from "../assets/portfolio/P3.jpg"

const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: image1,
          link: 'https://hasnain7200.github.io/Weather-app/',
          repo: 'https://github.com/Hasnain7200/Weather-app'
        },
        {
          id: 2,
          src: image2,
          link: 'https://hasnain7200.github.io/BeskarBanquet/',
          repo: 'https://github.com/Hasnain7200/Beskar-Banquet'
        },
        {
          id: 3,
          src: image3,
          link: 'https://hasnain7200.github.io/BeskarBanquet/',
          repo: 'https://github.com/Hasnain7200/Beskar-Banquet'
        },
 
      ];
  return (
<div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
