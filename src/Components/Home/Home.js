import React from 'react';
import DispalyInfo from '../DispalyInfo/DispalyInfo';
import FatchData from '../Hook/FatchData';

const Home = () => {
    const [infos]=FatchData()
    
    return (
        <div>



            
       {
        infos.map((info)=>(
            <DispalyInfo info={info}
            key={info.show.id}
            >

            </DispalyInfo>
        )

        )
       }
            
        </div>
    );
};

export default Home;