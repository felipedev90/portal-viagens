import { destinos } from "@/data/destinos";
import CardDestino from "@/components/CardDestino";
import styles from "./page.module.css";
import { MapPinned } from "lucide-react";

export default function Destinos() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <MapPinned size={28} />
        <h1>Explore nossos destinos!</h1>
      </div>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  );
}
