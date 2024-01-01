import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "ENGLISH" },
  th: { nativeName: "THAI" },
};

function Testlang() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <select
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
      {/* contents */}{" "}
      <p>
        <Trans i18nKey="description.part1">
          Edit <code> src / Testlang.js </code> and save to reload.{" "}
        </Trans>{" "}
      </p>{" "}
      <a> {t("description.part2")} </a>{" "}
    </>
  );
}

export default Testlang;
