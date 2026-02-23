import type { Destino } from "@/data/destinos";
import Image from "next/image";

export default function CardDestino({ destino }: { destino: Destino }) {
  return (
    <div>
      <div>
        <h3>{destino.nome}</h3>
      </div>
      <div>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}
