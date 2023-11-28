import React, { lazy } from "react";
const Line = lazy(() => import("../others/Line"));

const About = (props) => {
  return (
    <div
      className={`p-4 mb-3 bg-light rounded ${
        props.className ? props.className : ""
      }`}
    >
      <h4 className="fst-italic">{props.title}</h4>
      <Line className="mb-2" />
      <p className="mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam mollitia
        minima, molestiae aliquid tenetur explicabo. Doloremque vero blanditiis,
        laborum repudiandae tenetur, similique nemo cumque, nesciunt libero
        corrupti corporis est. Fugiat, perspiciatis facere nemo fugit illo,
        ducimus non animi assumenda eum quia blanditiis voluptate vel. Sit omnis
      </p>
    </div>
  );
};
export default About;
