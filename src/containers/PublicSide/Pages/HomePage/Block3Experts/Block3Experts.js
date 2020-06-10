import React, { Component, Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { mySpeakers } from "../../../../../actions/userActions";
import styles from "./Block3Experts.module.css";
import { Link } from "react-router-dom";
class Block3Experts extends React.Component {
  state = {
    speakers: []
  };
  componentDidMount() {
    mySpeakers().then(response => this.setState({ speakers: response }));
  }

  render() {
    const { speakers } = this.state;
    console.log("speakers", speakers);

    return (
      <div className={styles.sliderWrapper}>
        <div className={styles.coursesText}>Эксперты</div>
        <Slider
          dots={false}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
        >
          {speakers.map(item => {
            return (
              <div key={item.id} className={styles.oneSlide}>
                <div
                  className={styles.oneSlideTop}
                  style={{
                    background: `url(${item.photo})`,
                    backgroundPosition: '50% 0%',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className={styles.oneSlideBottom}>
                  <div className={styles.title}>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.bottomText}>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        {/* <Link to={`/courses/`} className={styles.detail}>
          Посмотреть все
        </Link> */}
      </div>
    );
  }
}

export default Block3Experts;



