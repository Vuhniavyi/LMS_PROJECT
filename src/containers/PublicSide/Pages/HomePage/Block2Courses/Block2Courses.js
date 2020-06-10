import React, { Component, Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { getAllCourses } from "../../../../../actions/userActions";
import styles from "./Block2Courses.module.css";
import { Link } from "react-router-dom";
class Block2Courses extends React.Component {
  state = {
    courses: [],
  };
  componentDidMount() {
    getAllCourses().then((response) => this.setState({ courses: response }));
  }

  render() {
    const { courses } = this.state;
    console.log("courses", courses);

    return (
      <div className={styles.sliderWrapper}>
        <div className={styles.coursesText}>Курсы</div>
        <Slider
          dots={false}
          slidesToShow={3}
          slidesToScroll={3}
          autoplay={true}
        >
          {courses.map((item) => {
            return (
              <div key={item.id} className={styles.oneSlide}>
                <div
                  className={styles.oneSlideTop}
                  style={{
                    background: `url(${item.small_image})`,
                  }}
                ></div>
                <div className={styles.oneSlideBottom}>
                  <div className={styles.title}>
                    <p>{item.title}</p>
                  </div>
                  <div className={styles.bottomText}>
                    <div className={styles.duration}>
                      <p>От {item.from_min_price} грн</p>
                    </div>
                    <div className={styles.from_min_price}>
                      <p>{item.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <Link to={`/courses/`} className={styles.detail}>
          Посмотреть все
        </Link>
      </div>
    );
  }
}

export default Block2Courses;
