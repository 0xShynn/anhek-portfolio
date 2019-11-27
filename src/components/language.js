import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  fr: "FR",
}

const Language = () => {
  return (
    <div className="ml-2 sm:ml-4 md:ml-4 lg:ml-5 flex justify-between">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <div className="lang" key={language}>
              <button 
                className={
                  "cursor-pointer inline-block " + 
                  (currentLocale === language ? 
                    `lang_active relative text-primary dark:text-secondary` : `lang_inactive text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-white`) }
                onClick={() => changeLocale(language)}
              >
                {languageName[language]}
              </button>
              <span className="separator text-gray-500 mx-2 align-baseline">/</span>
            </div>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language