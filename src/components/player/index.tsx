const Player = ({ audioFile }) => {
  const audio = new Audio(audioFile);

  const handleMediaPlayer = () => {
    audio.play().catch((error) => alert("Áudio não disponível"));
  };

  return (
    <div
      className="flex w-full gap-4 items-center justify-between shadow-lg border-[1px] p-2 rounded-lg h-[50px] mt-[30px] mb-[30px]"
      onClick={handleMediaPlayer}
    >
      <div className="flex gap-2 items-center">
        <img
          src="/assets/images/play-circle.svg"
          alt="play"
          style={{ stroke: "black" }}
          width={35}
          height={35}
        />
        <span className="flex font-['Roboto'] text-lg">Ouça o artigo</span>
      </div>
      <img
        src="/assets/images/player-download.svg"
        alt="play"
        width={39}
        height={31}
      />
    </div>
  );
};
export default Player;
