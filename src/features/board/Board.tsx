import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { build } from './boardSlice';
import './board.css';

type board = boolean[][];

const Board = () => {
  const state = useAppSelector(state => state.board);
  const dispatch = useAppDispatch();

  function createRandBoard(bombs: number, size: number):board {
    var randBoard: board = [];
    for (var i = 0; i < size; i++) {
      randBoard.push([]);
      for (var j = 0; j < size; j++) {
        randBoard[i].push(false);
      }
    }
    while (bombs > 0) {
      var x = Math.floor(Math.random() * size);
      var y = Math.floor(Math.random() * size);
      randBoard[y][x] ? bombs += 1 : randBoard[y][x] = true;
      bombs -= 1;
    }

    return randBoard;
  }

  function renderBoard(board: board):JSX.Element[][] {
    return board.map(row => {
      return row.map(box => {
        return box ? <div className='bomb'></div> : <div className='box'></div>
      });
    });
  }

  useEffect(() => {
    dispatch(build(createRandBoard(10, 10)));
  }, [dispatch])

  return (
    <>
      <div className='board'>
        {state && renderBoard(state.board)}
      </div>
    </>
  )
}

export default Board;
