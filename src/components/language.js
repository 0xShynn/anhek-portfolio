import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  fr: "FR",
}

const Language = () => {
  return (
    <div className="mx-3 sm:mx-4 md:mr-6 lg:mx-6 flex justify-between">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button 
              className={
                "cursor-pointer px-2 inline-block " + 
                (currentLocale === language ? 
                  `lang_active relative text-primary dark:text-secondary` : `lang_inactive text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-white`) }
              key={language} 
              onClick={() => changeLocale(language)}
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language