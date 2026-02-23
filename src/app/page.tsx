import Link from "next/link";
import { Map } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <picture className={styles.picture}>
        <source
          media="(max-width: 768px)"
          srcSet="/images/Viagem_header_1920.webp"
        />
        <img
          src="/images/Viagem_header_1920.webp"
          alt="Imagem de viagem"
          className={styles.image}
        />
      </picture>

      <div className={styles.overlay} />

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
