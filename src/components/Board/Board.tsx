import { useState } from "react"
import Piece from "../Piece/Piece"
import { Circle, RotateCw, X } from "react-feather"

const Board = () => {
  const [record, setRecord] = useState<number[]>([])
  // 1vs1の○×ゲームを作成する
  // 3x3のマスの配列 ticTacToeを作成 それぞれに<Piece />を配置する
  // それぞれの<Piece />にはクリックイベントを設定し、クリックされたらrecordにそのindexを追加する
  // recordの中に○×が3つ並んだら勝利とする
  const [ticTacToe, setTicTacToe] = useState<(0 | 1 | 2)[]>([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [user, setUser] = useState<1 | 2>(1)
  
  const initializer = () => {
    setRecord([])
    setTicTacToe([0, 0, 0, 0, 0, 0, 0, 0, 0])
    setUser(1)
  }

  const handleClick = (index: number) => {
    if (judge() !== 0) return null
    // 7個目に要素が追加された時、recordの1番目の要素を削除し、判定から除外する
    const newTicTacToe = ticTacToe.slice()
    if (record.length === 6) {
      // recordの1番目の要素を取得し、ticTacToeのindex番目を0に変更
      const firstRecord = record[0]
      newTicTacToe[firstRecord] = 0
      // recordの1番目の要素を削除
      const newRecord = record.slice(1)
      setRecord([...newRecord, index])
    } else {
      setRecord([...record, index])
    }
    // ticTacToeのindex番目をuserに変更
    newTicTacToe[index] = user
    setTicTacToe(newTicTacToe)
    // userを変更
    setUser(user === 1 ? 2 : 1)
  }

  // 勝利判定
  const judge = () => {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winPattern.length; i++) {
      const [a, b, c] = winPattern[i]
      if (ticTacToe[a] === ticTacToe[b] && ticTacToe[a] === ticTacToe[c]) {
        // ユーザーが指した記録は1 or 2であるため、judgeの返り値はtrue or falseで判定することができ、trueの時に1 or 2の判定ができる
        return ticTacToe[a]
      }
    }

    return 0
  }

  return (
    <div className="board p-3 grid grid-cols-3 grid-rows-5">
      <div className={"col-span-3 grid grid-cols-subgrid"}>
        <button className={"w-20 h-20 col-start-2 col-end-3 border-4 bg-stone-50 border-amber-200 hover:border-fuchsia-500 flex items-center justify-center"} onClick={initializer}>
          <RotateCw className={"w-8 h-8 stroke-amber-500"} />
        </button>
      </div>
      <div className="col-span-3 row-span-3 grid grid-cols-subgrid grid-rows-3 gap-y-0">
        {ticTacToe.map((status, index) => (
          <Piece key={index} index={index} status={status} isInFront={record.length === 6 && record[0] === index} handler={handleClick} user={user} />
        ))}
      </div>
      {judge() === 1 && 
        <h1 className="col-span-3 font-xl flex items-center justify-center text-stone-900">
          <Circle className={`w-12 h-fit stroke-indigo-500`} />の勝ち</h1>
        }
      {judge() === 2 && 
        <h1 className="col-span-3 font-xl flex items-center justify-center text-stone-900">
          <X className={`w-12 h-fit stroke-rose-500`} />の勝ち</h1>
      }

    </div>
  )
}

export default Board
