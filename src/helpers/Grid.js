
export default class Grid {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.grid = {};
    this.totals = { rows: {}, columns: {}, diagonals: {} };
  }

  isEven = gridSize => gridSize % 2 === 0;
  isCenter = point => Math.ceil(this.gridSize / 2) === point;

  setGrid(gridSize) {
    const cell = { x: gridSize + 1, y: 0};
    
    for(let i = 0; i < gridSize * gridSize; i++) {
      cell.id = i;
      cell.value = 0;
      
      // Move to next row (x--) and reset column (y = 0) at the end of each row
      if (i % gridSize === 0) {
        cell.x--;
        cell.y = 0;
      }
      
      // Move to next column (y++)
      cell.y++;
      
      // Cell is center cell if gridSize is odd 
      // and both x and y coords are equal to half the gridSize
      if (!this.isEven(gridSize) 
        && this.isCenter(cell.x) 
        && this.isCenter(cell.y)
      ) {
        cell.diagonal = 'center';
      } else if (i % (gridSize + 1) === 0) {
        cell.diagonal = '1';
      } else if (i % (gridSize - 1) === 0) {
        cell.diagonal = '2';
      } else {
        cell.diagonal = 'non-diagonal';
      }

      this.grid = { 
        ...this.grid,
        [cell.id]: {
          ...cell
        }
      };
    }

    return this.grid;
  }

  updateGrid(id, value) {
    this.grid[id].value = value;
    return this.grid;
  }

  getTotals() {
    let { grid, gridSize } = this;
    let row, column;
    let rows, columns, diagonals;

    Object.keys(grid).forEach((key, i) => {
      let cell = grid[key];
      let { x, y, value } = cell;

      rows = rows ? rows : {};
      columns = columns ? columns : {};
      row = row ? row : 0;
      column = column ? column : 0;
      column = column ? column : 0;
      diagonals = diagonals ? diagonals : [ 0, 0 ];

      // Diagonal totals based on diagonal property
      // TODO: Switches/fall-throughs
      if (cell.diagonal === 'center') {
        diagonals[0] += cell.value;
        diagonals[1] += cell.value;
      }

      if (cell.diagonal === '1') {
        diagonals[1] += cell.value;
      } else if (cell.diagonal === '2') {
        diagonals[0] += cell.value;
      }

      // Column totals based on first row
      // Set initial column value if cell index is less than gridSize
      if (i < gridSize) {
        column = value;
        columns[y] = column;
      } else {
        columns[y] += value;
      }

      // Row totals based on grid division
      // Set initial row value if cell index is evenly divisible by the gridSize
      if (i % gridSize === 0) {
        row = value;
      } else {
        row += value;
      }

      rows[x] = row;
    });
    // console.log(rows, columns, diagonals);
    return { rows, columns, diagonals };
  }
}
  