import React from 'react'
import { CellState, CellValue } from '../../types'

import './Button.scss'

interface ButtonProps {
	row: number
	col: number
	state: CellState
	value: CellValue
	red?: boolean
	onClick(rowParam: number, colParam: number): (...args: any[]) => void
	onContext(rowParam: number, colParam: number): (...args: any[]) => void
}

const Button: React.FC<ButtonProps> = ({
	red,
	row,
	col,
	onClick,
	onContext,
	state,
	value,
}) => {
	const renderContent = (): React.ReactNode => {
		if (state === CellState.visible) {
			if (value === CellValue.bomb) {
				return (
					<span role='img' aria-label='bomb'>
						💣
					</span>
				)
			} else if (value === CellValue.none) {
				return null
			}
			return value
		} else if (state === CellState.flagged) {
			return (
				<span role='img' aria-label='flag'>
					🚩
				</span>
			)
		}
		return null
	}

	return (
		<div
			className={`Button ${
				state === CellState.visible ? 'visible' : ' '
			} value-${value} ${red ? 'red' : ''}`}
			onClick={onClick(row, col)}
			onContextMenu={onContext(row, col)}
		>
			{renderContent()}
		</div>
	)
}

export default Button
