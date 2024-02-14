import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  
  const localTheme = localStorage.getItem('theme');
  const initDark = localTheme === 'dark';

  const [isDark, setDark] = useState(initDark);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;
  console.log(initDark);

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    console.log('render 2');
  }, [isDark])

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  )
};
