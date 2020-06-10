import React, { Component, Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { myArticles } from "../../../../../actions/userActions";
import styles from "./Block4Blog.module.css";
import { Link } from "react-router-dom";
import eye from "../../../../../img/eye.png";

class Block4Blog extends React.Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    myArticles().then((response) => this.setState({ articles: response }));
  }

  render() {
    const { articles } = this.state;
    console.log("articles", articles);

    return (
      <div className={styles.articlesWrapper}>
        <div className={styles.articlesTitle}>Блог</div>
        <Slider
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
        >
          {articles &&
            articles.map((article) => {
              return (
                <div
                  key={article.id}
                  to={`/article/${article.id}`}
                  className={styles.articleWrapper}
                >
                  <div
                    className={styles.articleTop}
                    style={{
                      background: `url(${article.image})`,
                      zIndex: "0",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className={styles.articleBottom}>
                    <div className={styles.timeAndViews}>
                      <div className={styles.time}>{article.date}</div>
                      <div className={styles.viewsAndImg}>
                        <img className={styles.eye} src={eye} />
                        <div className={styles.views}>
                          {article.count_views}
                        </div>
                      </div>
                    </div>
                    <div className={styles.articleTitle}>
                      {article.title.slice(0, 45) + "..."}
                    </div>
                    <div className={styles.articleDescription}>
                      {article.lead.slice(0, 45) + "..."}
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
        <Link to={`/article/`} className={styles.detail}>
          Все статьи
        </Link>
      </div>
    );
  }
}

export default Block4Blog;
