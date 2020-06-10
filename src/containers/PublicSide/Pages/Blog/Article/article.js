import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myArticle } from "../../../../../actions/userActions";
import eye from "../../../../../img/Geye.png";
import eye1 from "../../../../../img/eye.png";

import styles from "./article.module.css";

const Article = (props) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    myArticle(props.match.params.id).then((article) => setArticle(article));
  }, [props.match.params.id]);

  console.log("article", article);
  return (
    article && (
      <div className={styles.articleWrapper}>
        <div
          className={styles.articleTopCenter}
          style={{
            background: `url(${article.image})`,
            filter: "invert(0%)",
            zIndex: "0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className={styles.articleTop}>
            <div className={styles.title}>{article.title}</div>
            <div className={styles.desc}>{article.desc}</div>
            <div className={styles.author}>
              <div className={styles.authorLeft}>
                <div
                  className={styles.authorImg}
                  style={{
                    background: `url(${article.author.photo})`,
                    filter: "invert(0%)",
                    zIndex: "0",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className={styles.authorText}>
                  <div className={styles.authorName}>{article.author.name}</div>
                  <div className={styles.authorPosition}>
                    {article.author.position}
                  </div>
                </div>
              </div>
              <div className={styles.authorRight}>
                <div className={styles.authorDate}>{article.date}</div>
                <div className={styles.viewsAndImg}>
                  <img className={styles.eye} src={eye} />
                  <div className={styles.views}>{article.count_views}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articleBottom}>
          <div className={styles.articleBottomCenter}>
            <div
              className={styles.articleBottomLeft}
              dangerouslySetInnerHTML={{
                __html: article && article.content,
              }}
            ></div>
            <div className={styles.articleBottomRight}>
              <div className={styles.articleMore}>
                <div className={styles.articleMoreText}>Похожее:</div>
                {article.articles.map((art) => {
                  return (
                    <Link to={`/article/${art.id_}`} className={styles.anyArt} key={art.id}>
                      <div
                        className={styles.artImg}
                        style={{
                          background: `url(${art.image_})`,
                          zIndex: "0",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className={styles.artInf}>
                        <div className={styles.artTitle}>{art.lead_}</div>
                        <div className={styles.artBottom}>
                          <div className={styles.artDate}>{art.date_}</div>
                          <div className={styles.artCount}>
                            <img className={styles.eye1} src={eye1} />
                            <div className={styles.artEye}>{art.count_views_}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Article;
