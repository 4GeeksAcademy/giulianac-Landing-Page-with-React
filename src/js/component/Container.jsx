import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Cards.jsx";

//container component
const Container = () => {

//card information
const cardInfo = [ 
    {title:"A Cute Dog", image:"https://picsum.photos/id/237/200/300", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolores doloremque dolorum eligendi pariatur blanditiis illum officiis sunt magnam cupiditate! Nihil dignissimos fugit libero. Veritatis laborum molestias illo quod minus."},
    {title: "Out on a RUN", image: "https://picsum.photos/id/335/200/300", text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos excepturi error officiis fugiat quo architecto mollitia, ex porro totam voluptatum inventore quia culpa voluptas debitis, ratione aut. Iste, est."},
    {title: "Avalanche!", image: "https://picsum.photos/id/29/200/300", text:"Lorem dolor consectetur. Quod eos excepturi error officiis fugiat quo architecto mollitia, ex porro totam voluptatum inventore quia culpa voluptas debitis, ratione aut. Iste, est."},
    {title: "Fog sets in the city", image: "https://picsum.photos/id/220/200/300", text:"Consectetur, adipisicing elit. Quod eos excepturi error officiis fugiat quo architecto mollitia, ex porro totam voluptatum inventore quia culpa voluptas debitis, ratione aut. Iste, est."}, 
];

  return (
    <div className="container">
      <Jumbotron />
      <div className="row mb-4 px-5 text-center">
        <div className="col-auto d-flex">
          <>
          {
          cardInfo.map((value,index)=>{
            return <Card title={value.title} image={value.image} text={value.text} key={index}/>
          })
          }
          </>
        </div>
      </div>
    </div>
  );
};

export default Container;
