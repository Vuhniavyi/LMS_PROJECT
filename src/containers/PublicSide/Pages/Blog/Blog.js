import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../Components/Filter/filters";
import eye from "../../../../img/eye.png";
import { myArticles } from "../../../../actions/userActions";
import styles from "./Blog.module.css";

const Articles = (props) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    myArticles().then((articles) => setArticles(articles));
  }, []);

  //   const onSubmit = values => {
  //     console.log("values", values);
  //   };

  console.log("articles", articles);

  return (
    <div className={styles.articlesWrapper}>
      <div className={styles.articlesTitle}>Блог</div>
      <div className={styles.articles}>
        {articles &&
          articles.map((article) => {
            return (
              <Link
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
                      <div className={styles.views}>{article.count_views}</div>
                    </div>
                  </div>
                  <div className={styles.articleTitle}>
                    {article.title.slice(0, 45) + "..."}
                  </div>
                  <div className={styles.articleDescription}>
                    {article.lead.slice(0, 45) + "..."}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Articles;
