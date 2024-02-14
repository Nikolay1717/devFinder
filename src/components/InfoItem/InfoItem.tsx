import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean,
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || 'N/A';
  let currentHref = '';

  if (text && isLink) {
    currentHref = text.startsWith('http') ? text : `https://${text}`;
  }

  let addlStyle= '';
  if (!text) {
    addlStyle = `${styles.empty}`;
  }

  return (
    <div className={`${styles.infoItem} ${addlStyle}`}>
      {icon}
      <div>
        {text && isLink ? (
          <a 
            href={currentHref} 
            target='_blank' 
            rel='noreferrer' 
            className={styles.link}
          >
            {currentText}
          </a>
        ) : currentText}
      </div>
    </div>
  )
};
