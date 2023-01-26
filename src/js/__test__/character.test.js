import Character from '../character.js';
import Bowman from '../bowman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('Invalid name -> too short', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid name -> too long', () => {
    expect(
        () => new Character('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid character type', () => {
    expect(
        () => new Character('Bowy', 'FakeBowman', 100, 100),
    ).toThrow('Invalid character type');
});

test('Bowman', () => {
    const bowman = new Bowman('Bowy');
    expect(bowman.name).toEqual('Bowy');
    expect(bowman.type).toEqual('Bowman');
    expect(bowman.health).toEqual(100);
    expect(bowman.level).toEqual(1);
    expect(bowman.attack).toEqual(25);
    expect(bowman.defence).toEqual(25);
});

test('Daemon', () => {
    const daemon = new Daemon('Daemy');
    expect(daemon.name).toEqual('Daemy');
    expect(daemon.type).toEqual('Daemon');
    expect(daemon.health).toEqual(100);
    expect(daemon.level).toEqual(1);
    expect(daemon.attack).toEqual(10);
    expect(daemon.defence).toEqual(40);
});

test('Magician', () => {
    const magician = new Magician('Magy');
    expect(magician.name).toEqual('Magy');
    expect(magician.type).toEqual('Magician');
    expect(magician.health).toEqual(100);
    expect(magician.level).toEqual(1);
    expect(magician.attack).toEqual(10);
    expect(magician.defence).toEqual(40);
});

test('Swordsman', () => {
    const swordsman = new Swordsman('Swordy');
    expect(swordsman.name).toEqual('Swordy');
    expect(swordsman.type).toEqual('Swordsman');
    expect(swordsman.health).toEqual(100);
    expect(swordsman.level).toEqual(1);
    expect(swordsman.attack).toEqual(40);
    expect(swordsman.defence).toEqual(10);
});

test('Undead', () => {
    const undead = new Undead('Undy');
    expect(undead.name).toEqual('Undy');
    expect(undead.type).toEqual('Undead');
    expect(undead.health).toEqual(100);
    expect(undead.level).toEqual(1);
    expect(undead.attack).toEqual(25);
    expect(undead.defence).toEqual(25);
});

test('Zombie', () => {
    const zombie = new Zombie('Zomy');
    expect(zombie.name).toEqual('Zomy');
    expect(zombie.type).toEqual('Zombie');
    expect(zombie.health).toEqual(100);
    expect(zombie.level).toEqual(1);
    expect(zombie.attack).toEqual(40);
    expect(zombie.defence).toEqual(10);
});
