import Player from "@/components/client/Player";

export default function SecretPage() {
  return (
    <div>
      <div className={`pb-7 text-2xl`}>Drews secret audio stream!!!!!</div>
      <Player streamUrl="https://files.drewh.net/api/public/dl/ZW2MFjHs/Schu.mp3"></Player>
    </div>
  );
}
