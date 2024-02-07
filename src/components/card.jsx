import Contents from "./content";
const details = [
  {
    image:require("../assets/images/smilingman.jpg"),
    spanList: ["Photosnap", "New!", "Featured"],
    Designation: "Senior Front-End Developer",
    ullist: ["1d ago", "Full-Time", "USA Only"],
    ollist: ["Front-End", "Senior", "HTML", "CSS", "Javascript"],
  },
  {
    image:require("../assets/images/smilingman.jpg"),
    spanList: ["Photosnap", "New!", "Featured"],
    Designation: "Full-stack Developer",
    ullist: ["1d ago", "Full-Time", "USA Only"],
    ollist: ["Python", "Java", "HTML", "CSS", "Javascript"],
  },
  {
    image:require("../assets/images/smilingman.jpg"),
    spanList: ["Photosnap", "New!", "Featured"],
    Designation: "Senior back-End Developer",
    ullist: ["1d ago", "Full-Time", "USA Only"],
    ollist: ["MySQL", "Java", "Nextjs", "Mongodb", "Rust"],
  },
  {
    image:require("../assets/images/smilingman.jpg"),
    spanList: ["Photosnap", "New!", "Featured"],
    Designation: "UI/UX Designer",
    ullist: ["1d ago", "Full-Time", "USA Only"],
    ollist: ["Figma","Canva","HTML","CSS"],
  },
  {
    image:require("../assets/images/smilingman.jpg"),
    spanList: ["Photosnap", "New!", "Featured"],
    Designation: "Senior Front-End Developer",
    ullist: ["1d ago", "Full-Time", "USA Only"],
    ollist: ["Front-End", "Senior", "HTML", "CSS", "Javascript"],
  },
];

function Card() {
  return (
    <>
      <div className="container">
        {details.map((item, index) => {
          return <div className="box">
            <Contents
              key={index}
              image={item.image}
              span={item.spanList}
              designation={item.Designation}
              ul={item.ullist}
              ol={item.ollist}
            />
          </div>;
        })}
      </div>
    </>
  );
}
export default Card;
