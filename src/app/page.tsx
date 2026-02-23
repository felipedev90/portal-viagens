import Link from "next/link";
import { Map } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Explore o mundo com a gente</h1>
        <p className={styles.subtitle}>
          Descubra destinos incríveis, planeje sua próxima aventura e transforme
          sonhos em viagens inesquecíveis.
        </p>
        <Link href="/destinos" className={styles.cta}>
          <Map size={28} />
          Ver destinos
        </Link>
      </div>
    </section>
  );
}
