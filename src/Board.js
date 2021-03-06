import Dice from './Dice';
import './Board.css';

function Board({name, color, History}) {
  const num = History[History.length - 1] || 1;
  const sum = History.reduce((a,b) => a+b, 0);
  return (
    <div className='board'>
      <h1>{name}</h1>
      <Dice color={color} num={num} />
      <h1>총점</h1>
      <h1>{sum}</h1>
      <h2>기록</h2>
      <h2>{History.join(', ')}</h2>
    </div>
  );
}

export default Board;