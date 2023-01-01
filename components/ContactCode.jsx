import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'sibusisonkosi0897@gmail.com',
    href: 'mailto:sibusisonkosi0897@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'Linkedin.com/in/sibusiso-nkosi-9a7018223',
    href: 'https://www.linkedin.com/in/sibusiso-nkosi-9a7018223/',
  },
  {
    social: 'GitHub',
    link: 'github.com/sbuDiction',
    href: 'https://github.com/sbuDiction',
  },
  // {
  //   social: 'Website',
  //   link: 'gkos.tech',
  //   href: 'https://gkos.tech',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        tag: <a>production</a>
      </p>
      <p className={styles.line}>
        <span>Sibusiso</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
