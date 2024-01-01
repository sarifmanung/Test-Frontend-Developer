import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import TranslationSection from "../components/Translation.tsx";
import "./Homepage.css";

function Homepage() {
  const { t } = useTranslation();
  return (
    <div style={{ background: "#f0f0f0", height: "100vh" }}>
      <TranslationSection />
      <Row
        justify="center"
        align="middle"
        style={{ height: "100%", padding: "20px" }}
      >
        <Col
          span={12}
          className="custom-col"
          onClick={() => {
            window.location.href = "/test1";
          }}
        >
          <div className="">
            <h2 style={{ color: "#1890ff" }}> {t("description.part3")} </h2>{" "}
            <p> {t("description.part4")} </p>{" "}
          </div>{" "}
        </Col>{" "}
        <Col
          span={12}
          className="custom-col"
          onClick={() => {
            window.location.href = "/test2";
          }}
        >
          <div className="">
            <h2 style={{ color: "#52c41a" }}> {t("description.part5")} </h2>{" "}
            <p> {t("description.part6")} </p>{" "}
          </div>{" "}
        </Col>{" "}
      </Row>{" "}
    </div>
  );
}

export default Homepage;
