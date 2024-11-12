import { useState } from 'react';
import styles from './LanguageSwitcher.module.css';
import Icon from '@/helpers/Icon';

interface LanguageSwitcherProps {
  handleLanguageChange: (language: string) => void;
  locale: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  handleLanguageChange,
  locale,
}) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const oppositeLanguage = locale === 'ru' ? 'en' : 'ru';

  const handleIconClick = () => setIsButtonVisible(!isButtonVisible);

  return (
    <div className={styles.language}>
      <div onClick={handleIconClick} className={styles.icon}>
        <Icon name="icon-lang" width={60} height={24} />
        <button
          className={`${styles.button} ${
            isButtonVisible ? styles.buttonActive : ''
          }`}
          onClick={() => handleLanguageChange(oppositeLanguage)}
          type="button"
        >
          {oppositeLanguage.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
