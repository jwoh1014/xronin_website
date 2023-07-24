import { Fragment, useState } from "react";
import ProductPopup from "./popup/ProductPopup";
import Timeline from "./Timeline";

const Drops = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({ img: "", title: "" });
  const dropData = [
    {
      img: "img/drops/1.jpg",
      title: "Neoh #4588",
    },
    {
      img: "img/drops/2.jpg",
      title: "Neoh #4587",
    },
    {
      img: "img/drops/3.jpg",
      title: "Neoh #4586",
    },
    {
      img: "img/drops/4.jpg",
      title: "Neoh #4585",
    },
    {
      img: "img/drops/5.jpg",
      title: "Neoh #4584",
    },
    {
      img: "img/drops/6.jpg",
      title: "Neoh #4583",
    },
  ];

  const onClick = (value) => {
    setData(dropData[value - 1]);
    setToggle(true);
  };

  const { img, title } = data;

  return (
    <Fragment>
      <ProductPopup
        open={toggle}
        close={() => setToggle(false)}
        img={img}
        title={title}
      />
      {/* Drops Section */}
      <section id="drop">
        <div className="container">
          <div className="clearfix" />

          <Timeline />
        </div>
      </section>
      {/* !Drops Section */}
    </Fragment>
  );
};
export default Drops;
