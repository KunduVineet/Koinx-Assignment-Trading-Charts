import React from 'react';

const Sentiments = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold p-3 text-left">Sentiments</h1>
      <h3 className="text-2xl font-medium p-1.5 text-left">Key Events </h3>

      <div className="flex justify-between space-x-4">
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-1/2 p-2 flex-col items-center justify-center">
          <img
            src="./graph.svg"
            alt="Graph"
            className="w-[70px] h-[70px] object-cover rounded-full p-1 bg-neutral-700"
          />
          <div className="p-4">
            <p className="text-sm text-gray-600 leading-relaxed p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quas
              fugiat saepe error a incidunt hic quod obcaecati, nesciunt
              blanditiis nam voluptates quos eum beatae, iste recusandae labore
              veniam earum unde tempore placeat delectus! Aliquid culpa possimus
              perspiciatis reprehenderit accusantium, soluta cupiditate. Ipsa
              sed totam velit sint eaque saepe nam quos. Iusto in dolorum
              molestias maxime, possimus corrupti facilis, voluptate eligendi
              ipsam illum fugiat consequatur repellendus vel numquam nostrum aut
              impedit sit sequi! Natus, impedit!
            </p>
          </div>
        </div>

        <div className="flex bg-white shadow-md rounded-lg p-2 overflow-hidden w-1/2 flex-col items-center justify-center">
          <img
            src="./chart.svg"
            alt="Chart"
            className="w-[70px] h-[70px] object-cover rounded-full p-1 bg-neutral-700"
          />
          <div className="p-4">
            <p className="text-sm text-gray-600 leading-relaxed p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
              consequatur necessitatibus! Rerum iusto, vitae reprehenderit in
              esse odit ex nihil adipisci nam natus accusamus. Earum
              voluptatibus nihil quis. Sit beatae iusto fugiat est, cumque ex ea
              magnam recusandae quam veniam maxime officiis exercitationem nam
              magni aspernatur perspiciatis? Suscipit doloremque nesciunt totam
              doloribus itaque ipsum odit nemo labore illum dolores, qui odio
              quae aliquam laboriosam tempore a saepe asperiores distinctio
              beatae officiis quibusdam accusantium impedit autem!
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-medium p-2.5 text-left">Analyst Estimates</h3>

      <div className="flex justify-center mt-8">
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-1/2 flex-col items-center justify-center">
          {/* Circle representing the sentiment breakdown */}
          <div
            className="w-[200px] h-[200px] rounded-full"
            style={{
              background: 'conic-gradient(#4CAF50 0% 76%, #FF9800 76% 84%, #F44336 84% 100%)',
            }}
          ></div>
          <div className="p-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              The circle above shows the distribution of sentiments:
            </p>

            <p>
              <span className="text-green-600 font-bold"> 76% Buy</span>
              <span className="text-orange-500 font-bold"> 8% Hold</span>
              <span className="text-red-600 font-bold"> 16% Sold</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;
