import { destinos } from "@/data/destinos";
import CardDestino from "@/components/CardDestino";

export default function Destinos() {
  return (
    <div>
      {destinos.map((destino) => (
        <CardDestino key={destino.id} destino={destino} />
      ))}
    </div>
  );
}
