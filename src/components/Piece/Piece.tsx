import Cross from "./Cross"
import Circle from "./Circle"

interface PieceProps {
  index: number
  status: 0 | 1 | 2
  isInFront: boolean
  handler: (index: number, user: 1 | 2) => void
  user: 1 | 2
}

const Piece: React.FC<PieceProps> = ({ index, status, isInFront, handler, user }) => {
  return (
    <button onClick={status === 0 ? () => handler(index, user) : () => {}} className={`w-20 h-20 rounded-xl flex items-center justify-center bg-stone-950 border-4 border-amber-400 ${user === 1 ? "hover:border-indigo-500" : "hover:border-rose-500"}`}>
      {status === 1 ? <Circle isInFront={isInFront} /> : status === 2 ? <Cross isInFront={isInFront} /> : <></>}
    </button>
  );
}

export default Piece;
