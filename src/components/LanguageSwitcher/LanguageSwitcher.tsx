import styles from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  handleLanguageChange: (language: string) => void;
  locale: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  handleLanguageChange,
  locale,
}) => (
  <div className={styles.language}>
    <button
      className={`${locale === 'ru' ? styles.buttonActive : ''}`}
      onClick={() => handleLanguageChange('ru')}
      type="button"
    >
      RU
    </button>
    <button
      className={`${locale === 'en' ? styles.buttonActive : ''}`}
      onClick={() => handleLanguageChange('en')}
      type="button"
    >
      EN
    </button>
  </div>
);

export default LanguageSwitcher;
