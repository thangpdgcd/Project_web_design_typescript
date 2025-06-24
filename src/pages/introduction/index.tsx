import React from "react";
import { useTranslation } from "react-i18next";
import banner from "../../assets/img/fluentui-wide-banner.png";
import bannercontent from "../../assets/img/banner.svg";
import bannercontenttokent from "../../assets/img/banner2.svg";
import bannercontenttassets from "../../assets/img/banner3.svg";
import "./index.scss";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className='introduction-container'>
      <div className='header'>
        <p className='name'>{t("introduction.title")}</p>
        <p className='version'>{t("introduction.version")}</p>
      </div>

      <div className='content'>
        <div className='banner'>
          <img className='img-banner' src={banner} alt='' />
        </div>

        <div className='between'>{t("introduction.whats_new")}</div>

        <div className='banner-content'>
          <img src={bannercontent} alt='' />
          <img src={bannercontenttokent} alt='' />
          <img src={bannercontenttassets} alt='' />
        </div>

        <div className='word'>
          <p>{t("introduction.new_1")}</p>
          <p>{t("introduction.new_2")}</p>
          <p>{t("introduction.new_3")}</p>
        </div>

        <div className='footer-content'>
          <div className='overview'>{t("introduction.overview")}</div>
          <p className='overview-content'>
            {t("introduction.overview_content_1")}
          </p>
          <br />
          <p className='overview-content'>
            {t("introduction.overview_content_2")}
          </p>
          <ul>
            <li>
              <strong>{t("introduction.list.customizable")}</strong>
            </li>
            <li>
              <strong>{t("introduction.list.performance")}</strong>
            </li>
            <li>
              <strong>{t("introduction.list.bundle_size")}</strong>
            </li>
            <li>
              <strong>{t("introduction.list.accessibility")}</strong>
            </li>
            <li>
              <strong>{t("introduction.list.design_code")}</strong>
            </li>
          </ul>
        </div>

        <div className='contact-section'>
          <h2>{t("introduction.questions")}</h2>
          <p>
            {t("introduction.contact")}&nbsp;
            <a
              href='https://github.com/microsoft/fluentui'
              target='_blank'
              rel='noopener noreferrer'>
              GitHub
            </a>
          </p>
        </div>
      </div>

      <div className='footer'></div>
    </div>
  );
};

export default Introduction;
