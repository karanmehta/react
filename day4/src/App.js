import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const team = [
  {
    "id": 1,
    "image": "https://picsum.photos/id/81/300/200",
    "name": "Rasika Dharangaonkar",
    "location": "Khamgaon",
    "company": "Accenture",
    "discord": "RasikaDharangaonkar#6072"
  },
  {
    "id": 2,
    "image": "https://picsum.photos/id/9/300/200",
    "name": "Sarmad",
    "location": "Hyderabad",
    "company": "OSV solution pvt. ltd.",
    "discord": "Sarmad#1031"
  },
  {
    "id": 3,
    "image": "https://picsum.photos/id/18/300/200",
    "name": "Shreya Goyal",
    "location": "Kota",
    "company": "Rajasthan Technical University Kota ",
    "discord": "shreya_goyal"
  },
  {
    "id": 4,
    "image": "https://picsum.photos/id/23/300/200",
    "name": "Swati Agrawal",
    "location": "Seattle",
    "company": "Netspi",
    "discord": "Swati"
  },
  {
    "id": 5,
    "image": "https://picsum.photos/id/45/300/200",
    "name": "Ankita Negi",
    "location": "Dehradun",
    "company": "Infosys",
    "discord": "Ankita Negi#0589"
  },
  {
    "id": 6,
    "image": "https://picsum.photos/id/32/300/200",
    "name": "Mayank Prakash",
    "location": "Gachibowli",
    "company": "Microsoft",
    "discord": "Mayank_007#7281"
  },
  {
    "id": 7,
    "image": "https://picsum.photos/id/59/300/200",
    "name": "Taru Kumar Vella",
    "location": "NA",
    "company": "Capgemini",
    "discord": "tarun#9672"
  },
  {
    "id": 8,
    "image": "https://picsum.photos/id/88/300/200",
    "name": "Ashish Rathod",
    "location": "gwalior",
    "company": "Aero flight technology ",
    "discord": "Ashish rathod#2571"
  },
  {
    "id": 9,
    "image": "https://picsum.photos/id/26/300/200",
    "name": "Karan Mehta",
    "location": "Mumbai",
    "company": "MoEngage",
    "discord": "abrai#8207"
  },
  {
    "id": 10,
    "image": "https://picsum.photos/id/1/300/200",
    "name": "Abhishek Rai",
    "location": "Baltikara",
    "company": "Amazon",
    "discord": "karanmehta#3252"
  }
];

const CardComponent = (props) => {
  const {image, name, location, company, discord} = props.user;
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{company}</h3>
      <h4>{location}</h4>
      <h5>{discord}</h5>
    </div>
  );
};

const Heading = () => (
    <header>
      <div className="wrapper">
        <h1>Team Insurgents</h1>
      </div>
    </header>
);

const CardsComponent = () => {
  return (
    team.map((team) => <CardComponent user={team} key={team.id} />)
  )
};

const BodyComponent = () => {
    return (
      <div className="card-holder wrapper">
        <CardsComponent />
      </div>
    )
};
  
const AppLayout = () => {
  return (
    <>
    <Heading />
    <BodyComponent />
    </>
  );
};

root.render(<AppLayout />);