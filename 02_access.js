describe ("Properties access", function() {
  let warrior, Character;

  beforeEach(function() {
    Character = function() {};
    Character.prototype.hp = 100;
    Character.prototype.armor = 10;

    warrior = new Character();
    warrior.damage = 42;
    warrior.armor = 50;
  });

  it ("object has access to its own property", function() {
    expect(warrior.damage).toBeDefined();
<<<<<<< HEAD
    expect(warrior.damage).toEqual(42);
=======
    expect(warrior.damage).toEqual(__);
>>>>>>> ad97fd6eafd983851f3ab5d806597195f74ae215
  });

  it ("object has access to property of its prototype", function() {
    expect(warrior.hp).toBeDefined();
<<<<<<< HEAD
    expect(warrior.hp).toEqual(100);
=======
    expect(warrior.hp).toEqual(__);
>>>>>>> ad97fd6eafd983851f3ab5d806597195f74ae215
  });

  it ("object's property mask prototype's property", function() {
    expect(warrior.armor).toBeDefined();
<<<<<<< HEAD
    expect(warrior.armor).toEqual(50);
  });

  it ("property not found is undefined", function() {
    expect(warrior.mp).toBeUndefined();    // defined or undefined
=======
    expect(warrior.armor).toEqual(__);
  });

  it ("property not found is undefined", function() {
    expect(warrior.mp).toBe__();    // defined or undefined
>>>>>>> ad97fd6eafd983851f3ab5d806597195f74ae215
  });

  it ("Prototype modification is propagated to objects", function() {
    expect(warrior.mp).toBeUndefined();
    Character.prototype.mp = 50;                 // add a property to Character prototype
    expect(warrior.mp).toBeDefined();
    expect(warrior.mp).toEqual(50);
  });

  it ("Deleting a property on an object can reveal prototype's property", function() {
    expect(warrior.armor).toEqual(50);
    delete warrior.armor;
    expect(warrior.armor).toEqual(10);
  });
});
