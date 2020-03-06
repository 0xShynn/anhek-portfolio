import React from "react"
import Form from "./form"
import { FormattedMessage } from "react-intl"

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-3xl px-6 py-20 mx-auto sm:px-10 lg:px-0 md:py-20 lg:py-32"
    >
      <header className="mb-10 text-left md:text-center md:mb-20">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-primary dark:text-secondary lg:text-5xl font-header">
          <FormattedMessage id="contact.title" />
        </h2>
        <p className="text-xl text-gray-800 dark:text-white md:text-2xl">
          <FormattedMessage id="contact.intro" />
        </p>
      </header>
      <Form />
    </section>
  )
}

export default Contact
