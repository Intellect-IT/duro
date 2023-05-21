import React from "react";
import { useTranslation } from "react-i18next";
import newsData from "../data/news.json";
import { Link } from "react-router-dom";

export default function NewsWidget() {
  const { t } = useTranslation();

  return (
    <div className="recent-posts mb-50">
      <div className="widget-title">
        <h3 className="title">{t("home.news.recent")}</h3>
      </div>
      <div className="recent-post-widget no-border">
        <div className="post-img">
          <Link to="/news/opening-hours-easter-holiday-2023">
            <img
              src={newsData["opening-hours-easter-holiday-2023"].img}
              alt=""
            />
          </Link>
        </div>
        <div className="post-desc">
          <Link to="/news/opening-hours-easter-holiday-2023">
            {t(newsData["opening-hours-easter-holiday-2023"].title)}
          </Link>
          <span className="date-post">
            {" "}
            <i className="fa fa-calendar"></i> {newsData["opening-hours-easter-holiday-2023"].date}{" "}
          </span>
        </div>
      </div>
      <div className="recent-post-widget">
        <div className="post-img">
          <Link to="/news/milorad-batta-mihailovitch-exhibition-duro-niche-perfumery">
            <img
              src={
                newsData[
                  "milorad-batta-mihailovitch-exhibition-duro-niche-perfumery"
                ].img
              }
              alt=""
            />
          </Link>
        </div>
        <div className="post-desc">
          <Link to="/news/milorad-batta-mihailovitch-exhibition-duro-niche-perfumery">
            {" "}
            {t(newsData["milorad-batta-mihailovitch-exhibition-duro-niche-perfumery"].title)}
          </Link>
          <span className="date-post">
            {" "}
            <i className="fa fa-calendar"></i> {newsData["milorad-batta-mihailovitch-exhibition-duro-niche-perfumery"].date}{" "}
          </span>
        </div>
      </div>
      <div className="recent-post-widget">
        <div className="post-img">
          <Link to="/news/grand-opening-event-duro-niche-perfumery">
            <img
              src={newsData["grand-opening-event-duro-niche-perfumery"].img}
              alt=""
            />
          </Link>
        </div>
        <div className="post-desc">
          <Link to="/news/grand-opening-event-duro-niche-perfumery">
            {t(newsData["grand-opening-event-duro-niche-perfumery"].title)}
          </Link>
          <span className="date-post">
            {" "}
            <i className="fa fa-calendar"></i> {newsData["grand-opening-event-duro-niche-perfumery"].date}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
