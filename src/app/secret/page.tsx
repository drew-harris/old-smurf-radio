import Player from "@/components/client/Player";

export default function SecretPage() {
  return (
    <div>
      <div className={`pb-7 text-2xl`}>
        Drews secret (high quality) audio stream!!!!!
      </div>
      <Player streamUrl="https://files.drewh.net/api/public/dl/SWG8YoWf/v4form_w_silence.mp3"></Player>
    </div>
  );
}
