import Link from "next/link";
import { TicketsPlane } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <TicketsPlane size={24} /> Portal de Viagens
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </div>
    </header>
  );
}
