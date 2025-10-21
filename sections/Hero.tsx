// sections/Hero.tsx
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Welcome to SmartLens Photography</h1>
      <p>
        We capture your best moments and bring your story to life through stunning visuals and professional livestreams.
      </p>
      <button>Explore Our Work</button>
    </section>
  );
}
