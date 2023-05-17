const Player = ({ audioFile }) => {
  const audio = new Audio(audioFile);

  return (
    <div
      className="flex w-full gap-4 items-center justify-between shadow-lg border-[1px] p-2 rounded-lg h-[50px] mt-[30px] mb-[30px]"
      onClick={() =>
        audio.play().catch((error) => alert("Áudio não disponível"))
      }
    >
      <div className="flex gap-2 items-center">
        <img
          src="/assets/images/play-circle.svg"
          alt="play"
          style={{ stroke: "black" }}
        />
        <span className="flex font-['Roboto'] text-lg">Ouça o artigo</span>
      </div>
      <img src="/assets/images/player-download.svg" alt="play" />
    </div>
  );
};
export default Player;
