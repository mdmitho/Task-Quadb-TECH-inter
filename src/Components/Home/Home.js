import React from 'react';
import DispalyInfo from '../DispalyInfo/DispalyInfo';
import FatchData from '../Hook/FatchData';

const Home = () => {
    const [infos]=FatchData()
    
    return (
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
          {infos.map((info) => (
            <DispalyInfo info={info} key={info.show.id}></DispalyInfo>
          ))}
        </div>
      </div>
    );
};

export default Home;