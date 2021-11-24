
import { filterByScore, 
  filterByYear, 
  filterByDirector, 
  filterByProducer, 
  filterBySearch, 
  order_az, 
  order_za, 
  compareStrings 
} from '../src/data.js';

/******** Filter by Score ********/
describe('filterByScore', () => {
  it('is a function filterByScore', () => {
    expect(typeof filterByScore).toBe('function');
  });
  it("Should return `Princess Mononoke`", () => {
    const testGhibli = [{ rt_score: "92", title: "Princess Mononoke" }, { rt_score: "91", title: "Whisper of the Heart" }];
    expect(filterByScore(`92`, testGhibli)).toEqual([
      { rt_score: "92", title: "Princess Mononoke" }
    ]);
  });
});

/******** Filter by Year ********/
describe('filterByYear', () => {
  it('is a function filterByYear', () => {
    expect(typeof filterByDirector).toBe('function');
  });
  it("Should return `My Neighbors the Yamadas`", () => {
    const testGhibli = [{ release_date: "1999", title: "My Neighbors the Yamadas" }, { release_date: "1997", title: "Princess Mononoke" }];
    expect(filterByYear(`1999`, testGhibli)).toEqual([
      { release_date: "1999", title: "My Neighbors the Yamadas" }
    ]);
  });
});

/******** Filter by Search ********/
describe('filterBySearch', () => {
  it('is a function filterBySearch', () => {
    expect(typeof filterBySearch).toBe('function');
  });

  it("Should return `Spirited Away`", () => {
    const testGhibli = [{ title: "When Marnie Was There" }, { title: "Spirited Away" }];
    expect(filterBySearch(`spirited`, testGhibli)).toEqual([
      { title: "Spirited Away" }
    ]);
  });
});

/******** Filter by Director ********/
describe('filterByDirector', () => {
  it('is a function filterByDirector', () => {
    expect(typeof filterByDirector).toBe('function');
  });
  it("Should return `Hiromasa Yonebayashi`", () => {
    const testGhibli = [{ director: "Hiromasa Yonebayashi", title: "When Marnie Was There" }, { director: "Hayao Miyazaki", title: "Ponyo on the Cliff by the Sea" }];
    expect(filterByDirector(`Hiromasa Yonebayashi`, testGhibli)).toEqual([
      { director: "Hiromasa Yonebayashi", title: "When Marnie Was There" }
    ]);
  });
});

/******** Filter by Producer ********/
describe('filterByProducer', () => {
  it('is a function filterByProducer', () => {
    expect(typeof filterByProducer).toBe('function');
  });
  it("Should return `Toshio Suzuki`", () => {
    const testGhibli = [{ producer: "Toshio Suzuki", title: "The Wind Rises" }, { producer: "Isao Takahata", title: "Castle in the Sky" }];
    expect(filterByProducer(`Toshio Suzuki`, testGhibli)).toEqual([
      { producer: "Toshio Suzuki", title: "The Wind Rises" },
    ]);
  });
});

/******** Filter by Alphabetic Az ********/
describe('Sort from ascending order', () => {
  it('is a function order_az', () => {
    expect(typeof order_az).toBe('function');
  });

  it('Should be sorted in ascending order', () => {
    const arrayToSort  = [{title:"Spirited Away"},{title: "My Neighbor Totoro"}];
    expect(order_az(arrayToSort)).toEqual([{title: "My Neighbor Totoro"},{title:"Spirited Away"}]);
  });
});

/******** Filter by Alphabetic Za ********/
describe('Sort descending order', () => {
  it('is a function order_za', () => {
    expect(typeof order_za).toBe('function');
  });

  it('Should be sorted in descending order', () => {
    const arrayToSort  = [{title:"Spirited Away"},{title: "Kiki's Delivery Service"}];
    expect(order_za(arrayToSort)).toEqual([{title: "Spirited Away"},{title:"Kiki's Delivery Service"}]);
  });
});

/******** Compare strings *********/
describe('compareStrings', () => {
  it('is a function', () => {
    expect(typeof compareStrings).toBe('function');
  });

  it('it should retun -1', () => {
    expect(compareStrings('a','b')).toBe(-1);
  });
  it('it should retun 1', () => {
    expect(compareStrings('b','a')).toBe(1);
  });
  it('it should retun 0', () => {
    expect(compareStrings('b','b')).toBe(0);
  });
});
