import React, { Component } from "react";
import HomePageAccordion from "./HomePageAccordion/HomePageAccordion";
import Block2Courses from "./Block2Courses/Block2Courses";
import Block3Experts from "./Block3Experts/Block3Experts";
import Block4Blog from "./Block4Blog/Block4Blog";
import Block5Form from "./Block5Form/Block5Form";

import styles from "./HomePage.module.css";
import done from "../../../../img/done.png";
import comp from "../../../../img/comp.png";
import Slovo from "../../../../img/Slovo.png";
import stars from "../../../../img/stars.png";

const HomePage = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block1}>
        <div className={styles.block1Left}>
          <div className={styles.block1LeftIn}>
            <div className={styles.topText}>
              <img className={styles.comp} src={comp} />
              <div className={styles.text1}>Онлайн курсы</div>
            </div>
            <div className={styles.title}>
              <div className={styles.titleText}>
                Образовательная платформа{" "}
                <img className={styles.Slovo} src={Slovo} />
              </div>
            </div>
            <div className={styles.description}>
              Освой маркетинг, SMM-менеджмент и получи высокооплачиваюмую работу
            </div>
            <div className={styles.dones}>
              <div className={styles.done}>
                <img className={styles.doneImg} src={done} />
                <div className={styles.doneText}>
                  Научимся делать маркетинговый план
                </div>
              </div>
              <div className={styles.done}>
                <img className={styles.doneImg} src={done} />
                <div className={styles.doneText}>
                  Сформируем привлекательное портфолио
                </div>
              </div>
              <div className={styles.done}>
                <img className={styles.doneImg} src={done} />
                <div className={styles.doneText}>
                  Найдем первых реальных клиентов
                </div>
              </div>
            </div>
            <button className={styles.buttonn}>
              <p>Оставить заявку</p>
            </button>
          </div>
        </div>
        <div className={styles.accardion}>
          <HomePageAccordion />
        </div>
      </div>
      <div className={styles.Block2Courses}>
        <Block2Courses />
      </div>
      <div className={styles.Block3Courses}>
        <Block3Experts />
      </div>
      <div className={styles.Block3Courses}>
        <Block4Blog />
      </div>
      <div className={styles.Block5Form}>
        <div className={styles.Block5}>
          <div className={styles.Block5Left}>
            <img className={styles.stars} src={stars} />
          </div>
          <div className={styles.Block5Right}>
            <Block5Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
