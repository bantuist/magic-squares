import Grid from './Grid';
import * as defaults from '../data/fixtures';
import { triangularTotal } from '../helpers';

describe('Grid', () => {
  describe('when initializing', () => {
    const grid1 = new Grid(3);
    
    it('sets the correct defaults', () => {
      expect(grid1.activeElement).toEqual(defaults.activeElement);
      expect(grid1.cells).toEqual(defaults.cells);
      expect(grid1.gridSize).toEqual(defaults.gridSize);
      expect(grid1.solution).toEqual(defaults.solution);
      expect(grid1.total).toEqual(defaults.total);
      expect(grid1.totals).toEqual(expect.objectContaining({
        columns: {},
        rows: {},
        diagonals: {}
      }));
    });
  });

  describe('when setting a new grid', () => { 
    const grid2 = new Grid(3);
    const newGridSize = 5;
    const newCellCount = newGridSize * newGridSize;
    const newTotal = triangularTotal(newCellCount, newCellCount) / newGridSize;
    
    it('updates the correct `gridSize`', () => {
      expect(grid2.gridSize = newGridSize).toEqual(newGridSize);
    });

    it('updates the correct number of grid `cells`', () => {
      expect(Object.keys(grid2.setCells(newGridSize)))
        .toHaveLength(newCellCount);
    });

    it('updates the correct total', () => {
      expect(grid2.setTotal(newGridSize)).toEqual(65);
      expect(grid2.setTotal(newGridSize)).toEqual(newTotal);
    });

    xit('updates the correct solution', () => {

    });

  });

  describe('when updating a grid', () => {
    xit('updates the correct totals', () => {

    });

    xit('updates the correct totals', () => {

    });
  });
});
