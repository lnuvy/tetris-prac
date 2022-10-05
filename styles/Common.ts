import { STAGE_HEIGHT, STAGE_WIDTH, TETROMINOS } from '@constant/Block'
import styled from '@emotion/styled'
import { CellProps, DisplayProps } from '@typing/FE'

export const StyledCell = styled.div<CellProps>`
  width: auto;
  background: rgba(${({ color }) => color}, 0.8);
  border: ${(props) => (props.type === 0 ? '0px solid;' : '4px solid;')};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`

export const StyledDisplay = styled.div<DisplayProps>`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #777;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${({ gameOver }) => (gameOver ? 'red;' : '#999;')};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 20px;
  width: 170px;
  border-radius: 10px;
  border: none;
  color: white;
  background: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`
