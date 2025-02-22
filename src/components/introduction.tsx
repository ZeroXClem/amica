import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState, useCallback } from "react";
import { updateConfig } from "@/utils/config";
import { useTranslation, Trans } from 'react-i18next';

export const Introduction = ({ open }: {
  open: boolean;
}) => {
  const [opened, setOpened] = useState(open);
  const { t } = useTranslation();

  if (! opened) {
    return null;
  }

  return (
    <div className="absolute z-40 h-full w-full bg-black/30 mx-auto max-w-7xl sm:px-24 lg:px-32  py-40 font-M_PLUS_2"
      onClick={() => {
        setOpened(false);
      }}
    >
      <div className="mx-auto my-auto max-h-full overflow-auto rounded-lg bg-white p-4">
        <div className="my-4">
          <div className="my-8 font-bold text-secondary text-xl">
            {t("Welcome to Amica")} v0.1
          </div>
          <p>{t("amica_intro", `
            Amica is an open source chatbot interface that provides emotion, text to speech, and speech to text capabilities.
            It is designed to be able to be attached to any ChatBot API.
            It can be used with any VRM model and is very customizable.
            You can even run Amica on your own computer without an internet connection, or on your phone.
          `)}
          </p>
        </div>
        <div className="my-4">
          <div className="my-8 font-bold text-secondary typography-20">
            {t("Setup")}
          </div>
          <p>{t('amica_setup', `
            Click on the top left of the screen to open settings.
            You can change the voice, language, and attach to different backends or in-browser models.
            Read the full documentation.
          `)}
          <a href="https://github.com/semperai/amica/tree/master/docs" target="_blank" className="text-secondary">{t("here")}</a>
          </p>
        </div>

        <div className="my-8 flex space-x-4">
          <button
            onClick={() => {
              updateConfig("show_introduction", "false");
              setOpened(false);
            }}
            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            {t("dont_show_again", "Don't show again")}
          </button>
          <button
            onClick={() => {
              setOpened(false);
            }}
            className="ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {t("Close")}
          </button>
        </div>
      </div>
    </div>
  );
};
