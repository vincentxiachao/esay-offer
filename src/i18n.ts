import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// 尝试安装 i18next-browser-languagedetector 包以解决找不到模块的问题
// 安装命令：npm install i18next-browser-languagedetector
// 或者使用 yarn：yarn add i18next-browser-languagedetector
// 以下是导入语句，确保安装后可正常使用
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh-cn.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      'zh-CN': {
        translation: zhTranslations,
      },
    },
    lng: 'zh-CN',
    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
