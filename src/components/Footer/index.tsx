import styles from "./Footer.module.css";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p>© 2026 Portal Viagens</p>
          <p> - Todos os direitos reservados</p>
        </div>
        <div className={styles.developer}>
          <p>Desenvolvido por Felipe Augusto</p>
        </div>
        <div className={styles.social}>
          <p>Me siga nas redes sociais:</p>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/felipesilva90/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Linkedin size={28} />
            </a>
            |
            <a
              href="https://www.github.com/felipedev90"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
