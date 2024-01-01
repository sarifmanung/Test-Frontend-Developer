import React, { useState } from "react";
import { Layout, Button } from "antd";
import { useTranslation } from "react-i18next";
import "./TestCssShape.scss";
import TranslationSection from "../components/Translation.tsx";

const { Content } = Layout;

function Test1() {
  const [contentPosition, setContentPosition] = useState(0);
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

  const handleMoveLeft = () => {
    setCurrentShapeIndex((currentShapeIndex + 1) % 6);
    setContentPosition((contentPosition + 1) % 6);
  };

  const handleMoveRight = () => {
    setCurrentShapeIndex((currentShapeIndex - 1 + 6) % 6);
    setContentPosition((contentPosition - 1 + 6) % 6);
  };

  const handlePosition = () => {
    setCurrentShapeIndex((currentShapeIndex + 3) % 6);
    setContentPosition((contentPosition + 3) % 6);
  };

  const handleElementPosition = (clickedIndex) => {
    let randomIndex = currentShapeIndex;
    while (randomIndex === currentShapeIndex) {
      randomIndex = Math.floor(Math.random() * 6);
    }
    setCurrentShapeIndex(randomIndex);
    setContentPosition(randomIndex);
  };

  const shapes = {
    0: "square",
    1: "circle",
    2: "oval",
    3: "trapezoid",
    4: "rectangle",
    5: "parallelogram",
  };

  const { t } = useTranslation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content className="content">
        <TranslationSection />
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "70px",
          }}
        >
          <Button onClick={handleMoveLeft}> {t("description.part1")} </Button>{" "}
          <Button onClick={handlePosition}> {t("description.part2")} </Button>{" "}
          <Button onClick={handleMoveRight}> {t("description.part1")} </Button>{" "}
        </div>{" "}
        <div
          className="container"
          style={{ padding: "0 50px", display: "flex", flexWrap: "wrap" }}
        >
          {Object.keys(shapes).map((i) => (
            <div
              className="shape-container"
              key={i}
              onClick={() => handleElementPosition(+i)}
            >
              <div className={shapes[(+i + currentShapeIndex) % 6]}> </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </Content>{" "}
    </Layout>
  );
}

export default Test1;
