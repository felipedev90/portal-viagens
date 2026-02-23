import { destinos } from "@/data/destinos";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DestinoDetalhe({ params }: Props) {
  const { id } = await params;
  const destino = destinos.find((destino) => destino.id === Number(id));

  if (!destino) {
    return <p>Destino não encontrado...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <span className={styles.badge}>Destino em destaque</span>
          <Image
            src={destino.imagem}
            alt={destino.nome}
            width={800}
            height={600}
            className={styles.img}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{destino.nome}</h1>
          <p className={styles.description}>{destino.descricao}</p>

          <div className={styles.actions}>
            <Link href="/destinos">
              <button className={styles.buttonSecondary}>Voltar</button>
            </Link>
            <button className={styles.button}>Quero conhecer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
