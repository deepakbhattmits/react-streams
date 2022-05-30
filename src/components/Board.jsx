// /** @format */
import { useState/*, useEffect, useCallback*/ } from 'react';
import Cell from './Cell';
import CalComponent from './CalComponent';
const Board = ({ onClick, val, num }) => {

	const initData = {
		cells: Array.apply(null, { length: 9 }).map((x) => ''),
		symbl: 'X',
	};
	const [cells, setCells] = useState(initData.cells);

	const [symbl, setSymbl] = useState(initData.symbl);
	const clicked = (x) => {
		const newCellData = Array(...cells);
		if (!newCellData[x]) {
			newCellData[x] = symbl;
			setCells(newCellData);
			setSymbl(symbl === 'X' ? 'O' : 'X');
		}
	};
	const tttStates = [
		'111000000',
		'000111000',
		'000000111',
		'100100100',
		'010010010',
		'001001001',
		'100010001',
		'001010100',
	];
	const moveBitmap = (symbl) =>
		cells.map((x) => (x === symbl ? 1 : 0)).join('');
	const checkWinner =(symbl) => {
		for (let i of tttStates) {
			if (
				(parseInt(moveBitmap(symbl), 2) & parseInt(i, 2)) ===
				parseInt(i, 2)
			) {
				alert(`${symbl} won ! New Game ?`);
				newGame();
			}
		}
	};
	const newGame = () => {
		setCells(initData.cells);

		setSymbl(initData.symbl);
	};
	const vCells = [];
	for (let i = 0; i < 9; i++) {
		vCells.push(<Cell key={i} val={cells[i]} cellNum={i} onClick={clicked} />);
	}


		checkWinner(symbl === 'X' ? 'O' : 'X');

	return (
		<>
			<div className='Game'>
				<div className='Board'>{vCells}</div>
				<p>Next Move {symbl}</p>
				<button className='ui btn btn-primary' onClick={newGame}>New Game</button>
			</div>
			<CalComponent />
		</>
	);
};
export default Board;
