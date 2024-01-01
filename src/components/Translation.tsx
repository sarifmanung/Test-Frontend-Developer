import React from "react";
import { useTranslation, Trans, Translation } from "react-i18next"; // Move the import statement to the top

const lngs = {
  en: { nativeName: "ENGLISH" },
  th: { nativeName: "THAI" },
};

function TranslationSection() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div style={{ width: "100%" }}>
        <select
          style={{ position: "fixed", right: "0" }}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
        >
          {Object.keys(lngs).map((n) => (
            <option key={n} value={n}>
              {" "}
              {lngs[n].nativeName}{" "}
            </option>
          ))}{" "}
        </select>{" "}
      </div>{" "}
    </>
  );
}

export default TranslationSection;
