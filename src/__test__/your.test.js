import { evolve } from '../yourCode'

describe('Evolve', () => {
    it('should evolve cell in empty board to dead', () => {
        const emptyWorld = (x, y)=> false;
        const newWorld = evolve(emptyWorld);
        expect(newWorld(0, 0)).toBe(false);
    });
    it('should evolve cell with 3 live neighbours to live', () => {
        expect(evolve((x, y)=> x===1 )(0, 0)).toBe(true);
        // expect(evolve((x, y)=> y===1 )(0, 0)).toBe(true);
    });
    it('should evolve living cell with two neighbours to live', () => {
        expect(evolve((x, y)=> x===0)(0, 0)).toBe(true);
    });
    it('should evolve lonely cell to dead', () => {
        expect(evolve((x, y)=> x===0 && y===0)(0, 0)).toBe(false);
    });
    it('should evolve dead cell with two neighbours to dead', () => {
        expect(evolve((x, y)=> x===0 && y!==0)(0, 0)).toBe(false);
    });
})
