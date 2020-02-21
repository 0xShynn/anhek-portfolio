import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useIntl } from "gatsby-plugin-intl"
import Portrait from './portrait';
import Stack from './stack';
import Integration from './icons/integration';
import Design from './icons/design';
import Development from './icons/development';
import Button from './button';


const About = () => {
  const intl = useIntl();

  return (
    <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32">
      <div className="w-48 h-48 mx-auto mt-12 mb-10 overflow-hidden rounded-full md:w-56 md:h-56 md:mb-12">
        <Portrait/>
      </div>
      <div className="text-gray-800 dark:text-white">
        <div className="mx-auto mb-24">
          <p className="font-bold leading-snug text-left text-1xl md:text-center sm:text-2xl md:text-3xl lg:text-4xl font-header">
            <FormattedMessage id="about.intro" />
          </p>
        </div>
        <div className="mb-24">
          <h3 className="mb-8 text-xl font-bold text-center uppercase md:text-2xl font-header text-primary dark:text-secondary">
            <FormattedMessage id="stack.title" />
          </h3>
          <Stack/>
        </div>
        <div className="flex flex-col mb-24 lg:-mx-6 lg:flex-row">
          <div className="w-2/3 mx-auto mb-12 text-center sm:w-2/3 lg:mb-0 lg:mx-6 lg:w-1/3 lg:w-full">
            <Design className="w-16 mx-auto mb-6 sm:w-20"/>
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
              <FormattedMessage id="services.design.title" />
            </h3>
            <p className="text-xl md:text-2xl">
              <FormattedMessage id="services.design.desc" />
            </p>
          </div>
          <div className="w-2/3 mx-auto mb-12 text-center sm:w-2/3 lg:mb-0 lg:mx-6 lg:w-1/3 lg:w-full">
            <Integration className="w-16 mx-auto mb-6 sm:w-20"/>
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
              <FormattedMessage id="services.integration.title" />
            </h3>
            <p className="text-xl md:text-2xl">
              <FormattedMessage id="services.integration.desc" />
            </p>
          </div>
          <div className="w-2/3 mx-6 mx-auto mb-0 text-center lg:mx-6 sm:w-2/3 lg:w-1/3 lg:w-full">
            <Development className="w-16 mx-auto mb-6 sm:w-20"/>
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
              <FormattedMessage id="services.development.title" />
            </h3>
            <p className="text-xl md:text-2xl">
              <FormattedMessage id="services.development.desc" />
            </p>
          </div>
        </div>
        <div className="mb-12">
          <p className="mb-8 text-xl md:mb-16 md:leading-relaxed md:text-center md:text-2xl">
            <FormattedMessage id="about.presentation" />
          </p>
          <div className="flex justify-center">
            <Button
              link={intl.formatMessage({ id: "global.resume" })}
              style={ `` }
              text={<FormattedMessage id="global.downloadResume2" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;