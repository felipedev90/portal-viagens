import type { Destino } from "@/data/destinos";
import Image from "next/image";
import styles from "./CardDestino.module.css";
import Link from "next/link";

export default function CardDestino({ destino }: { destino: Destino }) {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>{destino.nome}</h3>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={destino.imagem}
            alt={destino.nome}
            width={800}
            height={600}
            className={styles.img}
          />
        </div>
      </div>
    </Link>
  );
}
