import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Full</h1>
          <h1>Stack</h1>
          <h1>Dev</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Sibusiso Nkosi</h1>
            <h6 className={styles.bio}>Software Developer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      JavaScript
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      Node.js
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Python
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Java
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      REST-APIs
                    </span>
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                      React.js
                    </span>
                    <span key='MLOps' className='MLOps'>
                      Flask
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Software-Design
                    </span>
                    <span key='Bots' className='Bots'>
                      Django
                    </span>
                    <span key='APIs' className='APIs'>
                      OOP
                    </span>
                    <span key='Bots' className='Bots'>
                      Spring Boot
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/sbu.JPG"
                width={300}
                height={290}
                alt="Sibusiso' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
