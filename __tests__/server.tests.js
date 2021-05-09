'use strict';

require('@code-fellows/supergoose');

const Collection = require('../src/models/data-collection-class.js');
const disneyModel = require('../src/models/disneyCharacter');
const makeupModel = require('../src/models/makeup.js');
const character = new Collection(disneyModel);
const item = new Collection(makeupModel);

describe('Disney Characters Model', ()=> {
  it('can create() a new character', async ()=> {
      let obj = {name: 'snow white', 
                gender: 'female', 
                movies: ['Snow White and The Seven Dwarfs']
                };
      let newCharacter = await character.create(obj);
      expect((newCharacter.name)).toEqual(obj.name);
      expect((newCharacter.gender)).toEqual(obj.gender);
      expect(typeof(newCharacter.movies)).toEqual('object');

  });
  it('can get All Characters', async ()=> {
    let allCharacters = await character.get();
    console.log("all: ", allCharacters);
    expect(typeof(allCharacters)).toEqual('object');
  });

  it('can get one Character', async ()=> {
    let allCharacters = await character.get();

    let oneCharacter = await character.get(allCharacters[0].id);
    expect(allCharacters[0].name).toEqual(oneCharacter.name);
    expect(allCharacters[0].gender).toEqual(oneCharacter.gender);
  });
  it('can get update Character', async ()=> {
    let allCharacters = await character.get();

    let updateOne = await character.update(allCharacters[0].id ,{
                name: 'snow white princess', 
                gender: 'female', 
                movies: ['Snow White and The Seven Dwarfs']
                }
    );
    expect(updateOne.name).toEqual('snow white princess');
  });
});

describe('Makeup Model', ()=> {
  it('can create() a new makeup item', async ()=> {
      let obj = {name : 'Maybelline Fit Me Bronzer',
                 price: 3,
                 type : 'blush'
                };

      let newItem = await item.create(obj);
      expect((newItem.name)).toEqual(obj.name);
      expect((newItem.price)).toEqual(obj.price);
      expect((newItem.type)).toEqual(obj.type);

  });
  it('can get All Items', async ()=> {
    let allItems = await item.get();
    console.log("all: ", allItems);
    expect(typeof(allItems)).toEqual('object');
  });

  it('can get one Item', async ()=> {
    let allItems = await item.get();

    let oneItem = await item.get(allItems[0].id);
    expect(allItems[0].name).toEqual(oneItem.name);
    expect(allItems[0].price).toEqual(oneItem.price);
  });
  it('can get update Item', async ()=> {
    let allItems = await item.get();

    let updateOne = await item.update(allItems[0].id ,{
      name : 'Maybelline Fit Me Bronzer blusher',
      price: 3,
      type : 'blush'
    }
    );
    expect(updateOne.name).toEqual('Maybelline Fit Me Bronzer blusher');
  });
});
