import React, { Fragment, useState } from "react";
import clasess from "./Mainpage.module.css";
import img1 from "../Material/1.png";
import img2 from "../Material/2.png";
import img4 from "../Material/3.png";
import img5 from "../Material/4.png";
export default function MainPage() {
  const words = [
    {
      id: 0,
      value: (
        <div className={clasess.container}>
          <div className={clasess.mainImage}>
            {" "}
            <img src={img1} alt="fireSpot" />
          </div>
          <div className={clasess.innerContent}>
            {" "}
            <h3>What Is Career Counselling?</h3>
            <p>
              Career Counselling is the process of giving advice, support and
              guidance for selecting the right stream after class 10th, and the
              right career after 12th and graduation. Career confusion and
              indecision can affect you at any stage of your career, thus it is
              important to get the right support to resolve it and plan ahead.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      value: (
        <div className={clasess.container}>
          <div className={clasess.mainImage}>
            {" "}
            <img src={img2} alt="fireSpot" />
          </div>
          <div className={clasess.innerContent}>
            {" "}
            <h3>Why Do I Need Career Counselling?</h3>
            <p>Here are a few ways in which career counselling helps us:</p>
            <p>Helps Pick The Right Career</p>
            <p>Helps Provide Expert Resources</p>
            <p>Helps Gain Confidence And Insight</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      value: (
        <div className={clasess.container}>
          <div className={clasess.mainImage}>
            {" "}
            <img src={img5} alt="fireSpot" />
          </div>
          <div className={clasess.innerContent}>
            <h3>Who Need Career Counselling & When?</h3>
            <p>
              The perfect time for students to seek Career Counselling is during
              the ages 13-17 years (8th standard to 12th standard). It is a time
              when career decisions are made. This is why they need someone to
              guide them in the right direction at this time.
            </p>{" "}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      value: (
        <div className={clasess.container}>
          <div className={clasess.mainImage}>
            {" "}
            <img src={img4} alt="fireSpot" />
          </div>
          <div className={clasess.innerContent}>
            <h3>What Career Counselling Is Not</h3>
            <p>
              It is not general advice about careers, courses and curriculum.
            </p>
            <p>It is not a short-term process that gives instant results.</p>
            <p>
              It is not a service that helps you get jobs or admissions in
              companies and colleges respectively.
            </p>
            <p>It is not a procedure that runs on trial-and-error.</p>
          </div>
        </div>
      ),
    },
  ];
  const [wordData, setWordData] = useState(words[0].value);
  const handleClick = (index) => {
    const wordSlider = words[index].value;
    setWordData(wordSlider);
  };
  return (
    <Fragment>
      <div className={clasess.Maincontainer}>
        <div className={clasess.topTitle}>Lets Started</div>
        <div className={clasess.main}>
          <div className={clasess.inner}> {wordData}</div>
        </div>
        <div className={clasess.flex_row}>
            {words.map((data, index) => (
              <h1 key={data.id} onClick={() => handleClick(index)}>
                .
              </h1>
            ))}
        </div>
      </div>
    </Fragment>
  );
}