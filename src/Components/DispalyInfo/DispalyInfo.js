import React from 'react';

const DispalyInfo = (props) => {

    const img = props.info.show.image.medium;
    const name = props.info.show.name;
    const language = props.info.show.language;

    console.log(props.info.show.language);

    return (
      <div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name : {name}</h2>
            <p>Language : {language}</p>
            <div class="card-actions">
              <button class="btn btn-primary text-white">Show More Details</button>
            </div>
          </div>
        </div>

        </div>

       
    );
};

export default DispalyInfo;