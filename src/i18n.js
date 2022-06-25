import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { DateTime } from 'luxon';

i18n
    // i18next-http-backend
    // loads translations from your server
    // https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
            // format: (value, format, lng) => { // legacy usage
            //   if (value instanceof Date) {
            //     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
            //   }
            //   return value;
            // }
        }
    });

// new usage
i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
    return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
});

export default i18n;
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-locize-backend';
// import { DateTime } from 'luxon';
// // import LastUsed from 'locize-lastused';
// // import { locizePlugin } from 'locize';

// const isProduction = process.env.NODE_ENV === 'production';

// const locizeOptions = {
//     projectId: '3abf90b8-ecc5-4a7f-ba9e-54dfa09ce9f4',
//     apiKey: '07fc776e-be4b-43b7-a297-8e597bcd41c1', // YOU should not expose your apps API key to production!!!
//     referenceLng: 'vi',
//     // version: process.env.REACT_APP_LOCIZE_VERSION
// };

// // if (!isProduction) {
// //     // locize-lastused
// //     // sets a timestamp of last access on every translation segment on locize
// //     // -> safely remove the ones not being touched for weeks/months
// //     // https://github.com/locize/locize-lastused
// //     i18n.use(LastUsed);
// // }

// i18n
//     // locize-editor
//     // InContext Editor of locize
//     // .use(locizePlugin)
//     // i18next-locize-backend
//     // loads translations from your project, saves new keys to it (saveMissing: true)
//     // https://github.com/locize/i18next-locize-backend
//     .use(Backend)
//     // detect user language
//     // learn more: https://github.com/i18next/i18next-browser-languageDetector
//     .use(LanguageDetector)
//     // pass the i18n instance to react-i18next.
//     .use(initReactI18next)
//     // init i18next
//     // for all options read: https://www.i18next.com/overview/configuration-options
//     .init({
//         debug: true,
//         fallbackLng: 'vi',
//         interpolation: {
//             escapeValue: false, // not needed for react as it escapes by default
//             // format: (value, format, lng) => { // legacy usage
//             //     if (value instanceof Date) {
//             //         return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
//             //     }
//             //     return value;
//             // }
//         },
//         backend: locizeOptions,
//         // locizeLastUsed: locizeOptions,
//         saveMissing: true,
//         // you should not use saveMissing in production
//     });

// // new usage
// i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
//     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
// });

// export default i18n;