import React, { useState } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { isChampionsPokemon, baseTypeArray, PokemonTypeEfficacy, parseTypeEfficacy, CHAMPIONS_NAMES } from '../../lib/PokemonService'
import PokemonType from '../../components/PokemonTypes/PokemonTypes'

// All held items available in Pokémon Champions (April 2026 launch)
const ITEMS = [
  'Black Belt', 'Black Glasses', 'Bright Powder', 'Charcoal', 'Choice Scarf',
  'Dragon Fang', 'Fairy Feather', 'Focus Band', 'Focus Sash', 'Hard Stone',
  "King's Rock", 'Leftovers', 'Light Ball', 'Magnet', 'Mental Herb', 'Metal Coat',
  'Miracle Seed', 'Mystic Water', 'Never-Melt Ice', 'Poison Barb', 'Quick Claw',
  'Scope Lens', 'Sharp Beak', 'Shell Bell', 'Silk Scarf', 'Silver Powder',
  'Soft Sand', 'Spell Tag', 'Twisted Spoon', 'White Herb',
]

// Mega Stones — each Pokémon can only hold their own stone
const MEGA_STONES: Record<string, string[]> = {
  venusaur: ['Venusaurite'],
  charizard: ['Charizardite X', 'Charizardite Y'],
  blastoise: ['Blastoisinite'],
  beedrill: ['Beedrillite'],
  pidgeot: ['Pidgeotite'],
  alakazam: ['Alakazite'],
  slowbro: ['Slowbronite'],
  gengar: ['Gengarite'],
  kangaskhan: ['Kangaskhanite'],
  pinsir: ['Pinsirite'],
  gyarados: ['Gyaradosite'],
  aerodactyl: ['Aerodactylite'],
  ampharos: ['Ampharosite'],
  steelix: ['Steelixite'],
  scizor: ['Scizorite'],
  heracross: ['Heracronite'],
  houndoom: ['Houndoominite'],
  tyranitar: ['Tyranitarite'],
  sableye: ['Sablenite'],
  aggron: ['Aggronite'],
  medicham: ['Medichamite'],
  manectric: ['Manectite'],
  sharpedo: ['Sharpedonite'],
  camerupt: ['Cameruptite'],
  altaria: ['Altarianite'],
  gardevoir: ['Gardevoirite'],
  banette: ['Banettite'],
  absol: ['Absolite'],
  glalie: ['Glalitite'],
  garchomp: ['Garchompite'],
  lucario: ['Lucarionite'],
  abomasnow: ['Abomasite'],
  gallade: ['Galladite'],
  audino: ['Audinite'],
  lopunny: ['Lopunnite'],
  dragonite: ['Dragonitite'],
}

// All moves available in Pokémon Champions (April 2026 launch)
const MOVES: { name: string; type: string; category: 'Physical' | 'Special' | 'Status' }[] = [
  { name: 'Accelerock', type: 'Rock', category: 'Physical' },
  { name: 'Acid Armor', type: 'Poison', category: 'Status' },
  { name: 'Acid Spray', type: 'Poison', category: 'Special' },
  { name: 'Acrobatics', type: 'Flying', category: 'Physical' },
  { name: 'Acupressure', type: 'Normal', category: 'Status' },
  { name: 'Aerial Ace', type: 'Flying', category: 'Physical' },
  { name: 'After You', type: 'Normal', category: 'Status' },
  { name: 'Agility', type: 'Psychic', category: 'Status' },
  { name: 'Air Cutter', type: 'Flying', category: 'Special' },
  { name: 'Air Slash', type: 'Flying', category: 'Special' },
  { name: 'Alluring Voice', type: 'Fairy', category: 'Special' },
  { name: 'Ally Switch', type: 'Psychic', category: 'Status' },
  { name: 'Amnesia', type: 'Psychic', category: 'Status' },
  { name: 'Ancient Power', type: 'Rock', category: 'Special' },
  { name: 'Apple Acid', type: 'Grass', category: 'Special' },
  { name: 'Aqua Cutter', type: 'Water', category: 'Physical' },
  { name: 'Aqua Jet', type: 'Water', category: 'Physical' },
  { name: 'Aqua Ring', type: 'Water', category: 'Status' },
  { name: 'Aqua Step', type: 'Water', category: 'Physical' },
  { name: 'Aqua Tail', type: 'Water', category: 'Physical' },
  { name: 'Armor Cannon', type: 'Fire', category: 'Special' },
  { name: 'Aromatic Mist', type: 'Fairy', category: 'Status' },
  { name: 'Assurance', type: 'Dark', category: 'Physical' },
  { name: 'Attract', type: 'Normal', category: 'Status' },
  { name: 'Aura Sphere', type: 'Fighting', category: 'Special' },
  { name: 'Aura Wheel', type: 'Electric', category: 'Physical' },
  { name: 'Aurora Veil', type: 'Ice', category: 'Status' },
  { name: 'Avalanche', type: 'Ice', category: 'Physical' },
  { name: 'Axe Kick', type: 'Fighting', category: 'Physical' },
  { name: 'Baby-Doll Eyes', type: 'Fairy', category: 'Status' },
  { name: 'Baneful Bunker', type: 'Poison', category: 'Status' },
  { name: 'Baton Pass', type: 'Normal', category: 'Status' },
  { name: 'Beak Blast', type: 'Flying', category: 'Physical' },
  { name: 'Beat Up', type: 'Dark', category: 'Physical' },
  { name: 'Belch', type: 'Poison', category: 'Special' },
  { name: 'Belly Drum', type: 'Normal', category: 'Status' },
  { name: 'Bind', type: 'Normal', category: 'Physical' },
  { name: 'Bite', type: 'Dark', category: 'Physical' },
  { name: 'Bitter Blade', type: 'Fire', category: 'Physical' },
  { name: 'Bitter Malice', type: 'Ghost', category: 'Special' },
  { name: 'Blast Burn', type: 'Fire', category: 'Special' },
  { name: 'Blaze Kick', type: 'Fire', category: 'Physical' },
  { name: 'Blizzard', type: 'Ice', category: 'Special' },
  { name: 'Block', type: 'Normal', category: 'Status' },
  { name: 'Blood Moon', type: 'Normal', category: 'Special' },
  { name: 'Body Press', type: 'Fighting', category: 'Physical' },
  { name: 'Body Slam', type: 'Normal', category: 'Physical' },
  { name: 'Bone Rush', type: 'Ground', category: 'Physical' },
  { name: 'Boomburst', type: 'Normal', category: 'Special' },
  { name: 'Bounce', type: 'Flying', category: 'Physical' },
  { name: 'Brave Bird', type: 'Flying', category: 'Physical' },
  { name: 'Breaking Swipe', type: 'Dragon', category: 'Physical' },
  { name: 'Brick Break', type: 'Fighting', category: 'Physical' },
  { name: 'Brutal Swing', type: 'Dark', category: 'Physical' },
  { name: 'Bug Bite', type: 'Bug', category: 'Physical' },
  { name: 'Bug Buzz', type: 'Bug', category: 'Special' },
  { name: 'Bulk Up', type: 'Fighting', category: 'Status' },
  { name: 'Bulldoze', type: 'Ground', category: 'Physical' },
  { name: 'Bullet Punch', type: 'Steel', category: 'Physical' },
  { name: 'Bullet Seed', type: 'Grass', category: 'Physical' },
  { name: 'Burn Up', type: 'Fire', category: 'Special' },
  { name: 'Burning Jealousy', type: 'Fire', category: 'Special' },
  { name: 'Calm Mind', type: 'Psychic', category: 'Status' },
  { name: 'Ceaseless Edge', type: 'Dark', category: 'Physical' },
  { name: 'Charge', type: 'Electric', category: 'Status' },
  { name: 'Charge Beam', type: 'Electric', category: 'Special' },
  { name: 'Charm', type: 'Fairy', category: 'Status' },
  { name: 'Chilling Water', type: 'Water', category: 'Special' },
  { name: 'Chilly Reception', type: 'Ice', category: 'Status' },
  { name: 'Circle Throw', type: 'Fighting', category: 'Physical' },
  { name: 'Clanging Scales', type: 'Dragon', category: 'Special' },
  { name: 'Clangorous Soul', type: 'Dragon', category: 'Status' },
  { name: 'Clear Smog', type: 'Poison', category: 'Special' },
  { name: 'Close Combat', type: 'Fighting', category: 'Physical' },
  { name: 'Coaching', type: 'Fighting', category: 'Status' },
  { name: 'Coil', type: 'Poison', category: 'Status' },
  { name: 'Comeuppance', type: 'Dark', category: 'Physical' },
  { name: 'Confuse Ray', type: 'Ghost', category: 'Status' },
  { name: 'Copycat', type: 'Normal', category: 'Status' },
  { name: 'Corrosive Gas', type: 'Poison', category: 'Status' },
  { name: 'Cosmic Power', type: 'Psychic', category: 'Status' },
  { name: 'Cotton Guard', type: 'Grass', category: 'Status' },
  { name: 'Cotton Spore', type: 'Grass', category: 'Status' },
  { name: 'Counter', type: 'Fighting', category: 'Physical' },
  { name: 'Covet', type: 'Normal', category: 'Physical' },
  { name: 'Crabhammer', type: 'Water', category: 'Physical' },
  { name: 'Cross Chop', type: 'Fighting', category: 'Physical' },
  { name: 'Cross Poison', type: 'Poison', category: 'Physical' },
  { name: 'Crunch', type: 'Dark', category: 'Physical' },
  { name: 'Crush Claw', type: 'Normal', category: 'Physical' },
  { name: 'Curse', type: 'Ghost', category: 'Status' },
  { name: 'Dark Pulse', type: 'Dark', category: 'Special' },
  { name: 'Darkest Lariat', type: 'Dark', category: 'Physical' },
  { name: 'Dazzling Gleam', type: 'Fairy', category: 'Special' },
  { name: 'Decorate', type: 'Fairy', category: 'Status' },
  { name: 'Defog', type: 'Flying', category: 'Status' },
  { name: 'Destiny Bond', type: 'Ghost', category: 'Status' },
  { name: 'Detect', type: 'Fighting', category: 'Status' },
  { name: 'Dig', type: 'Ground', category: 'Physical' },
  { name: 'Dire Claw', type: 'Poison', category: 'Physical' },
  { name: 'Disable', type: 'Normal', category: 'Status' },
  { name: 'Discharge', type: 'Electric', category: 'Special' },
  { name: 'Dive', type: 'Water', category: 'Physical' },
  { name: 'Double Hit', type: 'Normal', category: 'Physical' },
  { name: 'Double Shock', type: 'Electric', category: 'Physical' },
  { name: 'Double Team', type: 'Normal', category: 'Status' },
  { name: 'Double-Edge', type: 'Normal', category: 'Physical' },
  { name: 'Draco Meteor', type: 'Dragon', category: 'Special' },
  { name: 'Dragon Cheer', type: 'Dragon', category: 'Status' },
  { name: 'Dragon Claw', type: 'Dragon', category: 'Physical' },
  { name: 'Dragon Dance', type: 'Dragon', category: 'Status' },
  { name: 'Dragon Darts', type: 'Dragon', category: 'Physical' },
  { name: 'Dragon Pulse', type: 'Dragon', category: 'Special' },
  { name: 'Dragon Rush', type: 'Dragon', category: 'Physical' },
  { name: 'Dragon Tail', type: 'Dragon', category: 'Physical' },
  { name: 'Drain Punch', type: 'Fighting', category: 'Physical' },
  { name: 'Draining Kiss', type: 'Fairy', category: 'Special' },
  { name: 'Drill Peck', type: 'Flying', category: 'Physical' },
  { name: 'Drill Run', type: 'Ground', category: 'Physical' },
  { name: 'Dual Wingbeat', type: 'Flying', category: 'Physical' },
  { name: 'Dynamic Punch', type: 'Fighting', category: 'Physical' },
  { name: 'Earth Power', type: 'Ground', category: 'Special' },
  { name: 'Earthquake', type: 'Ground', category: 'Physical' },
  { name: 'Eerie Impulse', type: 'Electric', category: 'Status' },
  { name: 'Eerie Spell', type: 'Psychic', category: 'Special' },
  { name: 'Electric Terrain', type: 'Electric', category: 'Status' },
  { name: 'Electrify', type: 'Electric', category: 'Status' },
  { name: 'Electro Ball', type: 'Electric', category: 'Special' },
  { name: 'Electroweb', type: 'Electric', category: 'Special' },
  { name: 'Encore', type: 'Normal', category: 'Status' },
  { name: 'Endeavor', type: 'Normal', category: 'Physical' },
  { name: 'Endure', type: 'Normal', category: 'Status' },
  { name: 'Energy Ball', type: 'Grass', category: 'Special' },
  { name: 'Entrainment', type: 'Normal', category: 'Status' },
  { name: 'Eruption', type: 'Fire', category: 'Special' },
  { name: 'Expanding Force', type: 'Psychic', category: 'Special' },
  { name: 'Explosion', type: 'Normal', category: 'Physical' },
  { name: 'Extrasensory', type: 'Psychic', category: 'Special' },
  { name: 'Extreme Speed', type: 'Normal', category: 'Physical' },
  { name: 'Facade', type: 'Normal', category: 'Physical' },
  { name: 'Fairy Lock', type: 'Fairy', category: 'Status' },
  { name: 'Fake Out', type: 'Normal', category: 'Physical' },
  { name: 'Fake Tears', type: 'Dark', category: 'Status' },
  { name: 'Feather Dance', type: 'Flying', category: 'Status' },
  { name: 'Feint', type: 'Normal', category: 'Physical' },
  { name: 'Fell Stinger', type: 'Bug', category: 'Physical' },
  { name: 'Fickle Beam', type: 'Dragon', category: 'Special' },
  { name: 'Fiery Dance', type: 'Fire', category: 'Special' },
  { name: 'Final Gambit', type: 'Fighting', category: 'Special' },
  { name: 'Fire Blast', type: 'Fire', category: 'Special' },
  { name: 'Fire Fang', type: 'Fire', category: 'Physical' },
  { name: 'Fire Lash', type: 'Fire', category: 'Physical' },
  { name: 'Fire Punch', type: 'Fire', category: 'Physical' },
  { name: 'Fire Spin', type: 'Fire', category: 'Special' },
  { name: 'First Impression', type: 'Bug', category: 'Physical' },
  { name: 'Fissure', type: 'Ground', category: 'Physical' },
  { name: 'Flail', type: 'Normal', category: 'Physical' },
  { name: 'Flame Charge', type: 'Fire', category: 'Physical' },
  { name: 'Flamethrower', type: 'Fire', category: 'Special' },
  { name: 'Flare Blitz', type: 'Fire', category: 'Physical' },
  { name: 'Flash Cannon', type: 'Steel', category: 'Special' },
  { name: 'Flatter', type: 'Dark', category: 'Status' },
  { name: 'Fling', type: 'Dark', category: 'Physical' },
  { name: 'Flip Turn', type: 'Water', category: 'Physical' },
  { name: 'Flower Trick', type: 'Grass', category: 'Physical' },
  { name: 'Fly', type: 'Flying', category: 'Physical' },
  { name: 'Flying Press', type: 'Fighting', category: 'Physical' },
  { name: 'Focus Blast', type: 'Fighting', category: 'Special' },
  { name: 'Focus Energy', type: 'Normal', category: 'Status' },
  { name: 'Focus Punch', type: 'Fighting', category: 'Physical' },
  { name: 'Follow Me', type: 'Normal', category: 'Status' },
  { name: "Forest's Curse", type: 'Grass', category: 'Status' },
  { name: 'Foul Play', type: 'Dark', category: 'Physical' },
  { name: 'Freeze-Dry', type: 'Ice', category: 'Special' },
  { name: 'Frenzy Plant', type: 'Grass', category: 'Special' },
  { name: 'Frost Breath', type: 'Ice', category: 'Special' },
  { name: 'Future Sight', type: 'Psychic', category: 'Special' },
  { name: 'Gastro Acid', type: 'Poison', category: 'Status' },
  { name: 'Giga Drain', type: 'Grass', category: 'Special' },
  { name: 'Giga Impact', type: 'Normal', category: 'Physical' },
  { name: 'Gigaton Hammer', type: 'Steel', category: 'Physical' },
  { name: 'Glare', type: 'Normal', category: 'Status' },
  { name: 'Grass Knot', type: 'Grass', category: 'Special' },
  { name: 'Grassy Glide', type: 'Grass', category: 'Physical' },
  { name: 'Grassy Terrain', type: 'Grass', category: 'Status' },
  { name: 'Grav Apple', type: 'Grass', category: 'Physical' },
  { name: 'Gravity', type: 'Psychic', category: 'Status' },
  { name: 'Growth', type: 'Normal', category: 'Status' },
  { name: 'Guard Split', type: 'Psychic', category: 'Status' },
  { name: 'Guard Swap', type: 'Psychic', category: 'Status' },
  { name: 'Guillotine', type: 'Normal', category: 'Physical' },
  { name: 'Gunk Shot', type: 'Poison', category: 'Physical' },
  { name: 'Gyro Ball', type: 'Steel', category: 'Physical' },
  { name: 'Hammer Arm', type: 'Fighting', category: 'Physical' },
  { name: 'Hard Press', type: 'Steel', category: 'Physical' },
  { name: 'Haze', type: 'Ice', category: 'Status' },
  { name: 'Head Smash', type: 'Rock', category: 'Physical' },
  { name: 'Headlong Rush', type: 'Ground', category: 'Physical' },
  { name: 'Heal Bell', type: 'Normal', category: 'Status' },
  { name: 'Heal Pulse', type: 'Psychic', category: 'Status' },
  { name: 'Healing Wish', type: 'Psychic', category: 'Status' },
  { name: 'Heat Crash', type: 'Fire', category: 'Physical' },
  { name: 'Heat Wave', type: 'Fire', category: 'Special' },
  { name: 'Heavy Slam', type: 'Steel', category: 'Physical' },
  { name: 'Helping Hand', type: 'Normal', category: 'Status' },
  { name: 'Hex', type: 'Ghost', category: 'Special' },
  { name: 'High Horsepower', type: 'Ground', category: 'Physical' },
  { name: 'High Jump Kick', type: 'Fighting', category: 'Physical' },
  { name: 'Horn Drill', type: 'Normal', category: 'Physical' },
  { name: 'Horn Leech', type: 'Grass', category: 'Physical' },
  { name: 'Howl', type: 'Normal', category: 'Status' },
  { name: 'Hurricane', type: 'Flying', category: 'Special' },
  { name: 'Hydro Cannon', type: 'Water', category: 'Special' },
  { name: 'Hydro Pump', type: 'Water', category: 'Special' },
  { name: 'Hyper Beam', type: 'Normal', category: 'Special' },
  { name: 'Hyper Voice', type: 'Normal', category: 'Special' },
  { name: 'Hypnosis', type: 'Psychic', category: 'Status' },
  { name: 'Ice Beam', type: 'Ice', category: 'Special' },
  { name: 'Ice Fang', type: 'Ice', category: 'Physical' },
  { name: 'Ice Hammer', type: 'Ice', category: 'Physical' },
  { name: 'Ice Punch', type: 'Ice', category: 'Physical' },
  { name: 'Ice Shard', type: 'Ice', category: 'Physical' },
  { name: 'Ice Spinner', type: 'Ice', category: 'Physical' },
  { name: 'Icicle Crash', type: 'Ice', category: 'Physical' },
  { name: 'Icicle Spear', type: 'Ice', category: 'Physical' },
  { name: 'Icy Wind', type: 'Ice', category: 'Special' },
  { name: 'Imprison', type: 'Psychic', category: 'Status' },
  { name: 'Infernal Parade', type: 'Ghost', category: 'Special' },
  { name: 'Inferno', type: 'Fire', category: 'Special' },
  { name: 'Infestation', type: 'Bug', category: 'Special' },
  { name: 'Ingrain', type: 'Grass', category: 'Status' },
  { name: 'Instruct', type: 'Psychic', category: 'Status' },
  { name: 'Iron Defense', type: 'Steel', category: 'Status' },
  { name: 'Iron Head', type: 'Steel', category: 'Physical' },
  { name: 'Iron Tail', type: 'Steel', category: 'Physical' },
  { name: 'Ivy Cudgel', type: 'Grass', category: 'Physical' },
  { name: 'Jet Punch', type: 'Water', category: 'Physical' },
  { name: "King's Shield", type: 'Steel', category: 'Status' },
  { name: 'Knock Off', type: 'Dark', category: 'Physical' },
  { name: 'Kowtow Cleave', type: 'Dark', category: 'Physical' },
  { name: 'Lash Out', type: 'Dark', category: 'Physical' },
  { name: 'Last Resort', type: 'Normal', category: 'Physical' },
  { name: 'Last Respects', type: 'Ghost', category: 'Physical' },
  { name: 'Lava Plume', type: 'Fire', category: 'Special' },
  { name: 'Leaf Blade', type: 'Grass', category: 'Physical' },
  { name: 'Leaf Storm', type: 'Grass', category: 'Special' },
  { name: 'Leech Life', type: 'Bug', category: 'Physical' },
  { name: 'Leech Seed', type: 'Grass', category: 'Status' },
  { name: 'Life Dew', type: 'Water', category: 'Status' },
  { name: 'Light Screen', type: 'Psychic', category: 'Status' },
  { name: 'Light of Ruin', type: 'Fairy', category: 'Special' },
  { name: 'Liquidation', type: 'Water', category: 'Physical' },
  { name: 'Lock-On', type: 'Normal', category: 'Status' },
  { name: 'Low Kick', type: 'Fighting', category: 'Physical' },
  { name: 'Low Sweep', type: 'Fighting', category: 'Physical' },
  { name: 'Lumina Crash', type: 'Psychic', category: 'Special' },
  { name: 'Lunge', type: 'Bug', category: 'Physical' },
  { name: 'Mach Punch', type: 'Fighting', category: 'Physical' },
  { name: 'Magic Powder', type: 'Psychic', category: 'Status' },
  { name: 'Magic Room', type: 'Psychic', category: 'Status' },
  { name: 'Magnet Rise', type: 'Electric', category: 'Status' },
  { name: 'Magnetic Flux', type: 'Electric', category: 'Status' },
  { name: 'Matcha Gotcha', type: 'Grass', category: 'Special' },
  { name: 'Mean Look', type: 'Normal', category: 'Status' },
  { name: 'Mega Kick', type: 'Normal', category: 'Physical' },
  { name: 'Megahorn', type: 'Bug', category: 'Physical' },
  { name: 'Memento', type: 'Dark', category: 'Status' },
  { name: 'Metal Burst', type: 'Steel', category: 'Physical' },
  { name: 'Metal Sound', type: 'Steel', category: 'Status' },
  { name: 'Meteor Beam', type: 'Rock', category: 'Special' },
  { name: 'Meteor Mash', type: 'Steel', category: 'Physical' },
  { name: 'Milk Drink', type: 'Normal', category: 'Status' },
  { name: 'Minimize', type: 'Normal', category: 'Status' },
  { name: 'Mirror Coat', type: 'Psychic', category: 'Special' },
  { name: 'Misty Explosion', type: 'Fairy', category: 'Special' },
  { name: 'Misty Terrain', type: 'Fairy', category: 'Status' },
  { name: 'Moonblast', type: 'Fairy', category: 'Special' },
  { name: 'Moonlight', type: 'Fairy', category: 'Status' },
  { name: 'Morning Sun', type: 'Normal', category: 'Status' },
  { name: 'Mortal Spin', type: 'Poison', category: 'Physical' },
  { name: 'Mountain Gale', type: 'Ice', category: 'Physical' },
  { name: 'Mud Shot', type: 'Ground', category: 'Special' },
  { name: 'Mud-Slap', type: 'Ground', category: 'Special' },
  { name: 'Muddy Water', type: 'Water', category: 'Special' },
  { name: 'Mystical Fire', type: 'Fire', category: 'Special' },
  { name: 'Nasty Plot', type: 'Dark', category: 'Status' },
  { name: 'Night Daze', type: 'Dark', category: 'Special' },
  { name: 'Night Shade', type: 'Ghost', category: 'Special' },
  { name: 'Night Slash', type: 'Dark', category: 'Physical' },
  { name: 'Noble Roar', type: 'Normal', category: 'Status' },
  { name: 'Nuzzle', type: 'Electric', category: 'Physical' },
  { name: 'Outrage', type: 'Dragon', category: 'Physical' },
  { name: 'Overheat', type: 'Fire', category: 'Special' },
  { name: 'Pain Split', type: 'Normal', category: 'Status' },
  { name: 'Parabolic Charge', type: 'Electric', category: 'Special' },
  { name: 'Parting Shot', type: 'Dark', category: 'Status' },
  { name: 'Payback', type: 'Dark', category: 'Physical' },
  { name: 'Perish Song', type: 'Normal', category: 'Status' },
  { name: 'Petal Blizzard', type: 'Grass', category: 'Physical' },
  { name: 'Petal Dance', type: 'Grass', category: 'Special' },
  { name: 'Phantom Force', type: 'Ghost', category: 'Physical' },
  { name: 'Pin Missile', type: 'Bug', category: 'Physical' },
  { name: 'Play Rough', type: 'Fairy', category: 'Physical' },
  { name: 'Pluck', type: 'Flying', category: 'Physical' },
  { name: 'Poison Fang', type: 'Poison', category: 'Physical' },
  { name: 'Poison Jab', type: 'Poison', category: 'Physical' },
  { name: 'Poison Powder', type: 'Poison', category: 'Status' },
  { name: 'Pollen Puff', type: 'Bug', category: 'Special' },
  { name: 'Poltergeist', type: 'Ghost', category: 'Physical' },
  { name: 'Population Bomb', type: 'Normal', category: 'Physical' },
  { name: 'Pounce', type: 'Bug', category: 'Physical' },
  { name: 'Power Gem', type: 'Rock', category: 'Special' },
  { name: 'Power Shift', type: 'Normal', category: 'Status' },
  { name: 'Power Split', type: 'Psychic', category: 'Status' },
  { name: 'Power Swap', type: 'Psychic', category: 'Status' },
  { name: 'Power Trick', type: 'Psychic', category: 'Status' },
  { name: 'Power Trip', type: 'Dark', category: 'Physical' },
  { name: 'Power Whip', type: 'Grass', category: 'Physical' },
  { name: 'Protect', type: 'Normal', category: 'Status' },
  { name: 'Psych Up', type: 'Normal', category: 'Status' },
  { name: 'Psychic', type: 'Psychic', category: 'Special' },
  { name: 'Psychic Fangs', type: 'Psychic', category: 'Physical' },
  { name: 'Psychic Noise', type: 'Psychic', category: 'Special' },
  { name: 'Psychic Terrain', type: 'Psychic', category: 'Status' },
  { name: 'Psycho Cut', type: 'Psychic', category: 'Physical' },
  { name: 'Psyshield Bash', type: 'Psychic', category: 'Physical' },
  { name: 'Psyshock', type: 'Psychic', category: 'Special' },
  { name: 'Quash', type: 'Dark', category: 'Status' },
  { name: 'Quick Attack', type: 'Normal', category: 'Physical' },
  { name: 'Quick Guard', type: 'Fighting', category: 'Status' },
  { name: 'Quiver Dance', type: 'Bug', category: 'Status' },
  { name: 'Rage Powder', type: 'Bug', category: 'Status' },
  { name: 'Raging Bull', type: 'Normal', category: 'Physical' },
  { name: 'Raging Fury', type: 'Fire', category: 'Physical' },
  { name: 'Rain Dance', type: 'Water', category: 'Status' },
  { name: 'Rapid Spin', type: 'Normal', category: 'Physical' },
  { name: 'Razor Shell', type: 'Water', category: 'Physical' },
  { name: 'Recover', type: 'Normal', category: 'Status' },
  { name: 'Recycle', type: 'Normal', category: 'Status' },
  { name: 'Reflect', type: 'Psychic', category: 'Status' },
  { name: 'Reflect Type', type: 'Normal', category: 'Status' },
  { name: 'Rest', type: 'Psychic', category: 'Status' },
  { name: 'Reversal', type: 'Fighting', category: 'Physical' },
  { name: 'Revival Blessing', type: 'Normal', category: 'Status' },
  { name: 'Rising Voltage', type: 'Electric', category: 'Special' },
  { name: 'Roar', type: 'Normal', category: 'Status' },
  { name: 'Rock Blast', type: 'Rock', category: 'Physical' },
  { name: 'Rock Polish', type: 'Rock', category: 'Status' },
  { name: 'Rock Slide', type: 'Rock', category: 'Physical' },
  { name: 'Rock Tomb', type: 'Rock', category: 'Physical' },
  { name: 'Rock Wrecker', type: 'Rock', category: 'Physical' },
  { name: 'Role Play', type: 'Psychic', category: 'Status' },
  { name: 'Roost', type: 'Flying', category: 'Status' },
  { name: 'Round', type: 'Normal', category: 'Special' },
  { name: 'Sacred Sword', type: 'Fighting', category: 'Physical' },
  { name: 'Safeguard', type: 'Normal', category: 'Status' },
  { name: 'Salt Cure', type: 'Rock', category: 'Physical' },
  { name: 'Sand Tomb', type: 'Ground', category: 'Physical' },
  { name: 'Sandstorm', type: 'Rock', category: 'Status' },
  { name: 'Scald', type: 'Water', category: 'Special' },
  { name: 'Scale Shot', type: 'Dragon', category: 'Physical' },
  { name: 'Scary Face', type: 'Normal', category: 'Status' },
  { name: 'Scorching Sands', type: 'Ground', category: 'Special' },
  { name: 'Screech', type: 'Normal', category: 'Status' },
  { name: 'Seed Bomb', type: 'Grass', category: 'Physical' },
  { name: 'Seismic Toss', type: 'Fighting', category: 'Physical' },
  { name: 'Self-Destruct', type: 'Normal', category: 'Physical' },
  { name: 'Shadow Ball', type: 'Ghost', category: 'Special' },
  { name: 'Shadow Claw', type: 'Ghost', category: 'Physical' },
  { name: 'Shadow Punch', type: 'Ghost', category: 'Physical' },
  { name: 'Shadow Sneak', type: 'Ghost', category: 'Physical' },
  { name: 'Shed Tail', type: 'Normal', category: 'Status' },
  { name: 'Sheer Cold', type: 'Ice', category: 'Special' },
  { name: 'Shell Side Arm', type: 'Poison', category: 'Special' },
  { name: 'Shell Smash', type: 'Normal', category: 'Status' },
  { name: 'Shelter', type: 'Steel', category: 'Status' },
  { name: 'Simple Beam', type: 'Normal', category: 'Status' },
  { name: 'Sing', type: 'Normal', category: 'Status' },
  { name: 'Slack Off', type: 'Normal', category: 'Status' },
  { name: 'Sleep Powder', type: 'Grass', category: 'Status' },
  { name: 'Sleep Talk', type: 'Normal', category: 'Status' },
  { name: 'Snarl', type: 'Dark', category: 'Special' },
  { name: 'Snatch', type: 'Dark', category: 'Status' },
  { name: 'Solar Beam', type: 'Grass', category: 'Special' },
  { name: 'Solar Blade', type: 'Grass', category: 'Physical' },
  { name: 'Spikes', type: 'Ground', category: 'Status' },
  { name: 'Spirit Shackle', type: 'Ghost', category: 'Physical' },
  { name: 'Stealth Rock', type: 'Rock', category: 'Status' },
  { name: 'Sticky Web', type: 'Bug', category: 'Status' },
  { name: 'Stone Edge', type: 'Rock', category: 'Physical' },
  { name: 'Stored Power', type: 'Psychic', category: 'Special' },
  { name: 'Strange Steam', type: 'Fairy', category: 'Special' },
  { name: 'Sucker Punch', type: 'Dark', category: 'Physical' },
  { name: 'Sunny Day', type: 'Fire', category: 'Status' },
  { name: 'Superpower', type: 'Fighting', category: 'Physical' },
  { name: 'Surf', type: 'Water', category: 'Special' },
  { name: 'Swagger', type: 'Normal', category: 'Status' },
  { name: 'Swords Dance', type: 'Normal', category: 'Status' },
  { name: 'Synthesis', type: 'Grass', category: 'Status' },
  { name: 'Tailwind', type: 'Flying', category: 'Status' },
  { name: 'Thunder', type: 'Electric', category: 'Special' },
  { name: 'Thunder Fang', type: 'Electric', category: 'Physical' },
  { name: 'Thunder Punch', type: 'Electric', category: 'Physical' },
  { name: 'Thunder Wave', type: 'Electric', category: 'Status' },
  { name: 'Thunderbolt', type: 'Electric', category: 'Special' },
  { name: 'Tickle', type: 'Normal', category: 'Status' },
  { name: 'Torment', type: 'Dark', category: 'Status' },
  { name: 'Toxic', type: 'Poison', category: 'Status' },
  { name: 'Toxic Spikes', type: 'Poison', category: 'Status' },
  { name: 'Trailblaze', type: 'Grass', category: 'Physical' },
  { name: 'Trick', type: 'Psychic', category: 'Status' },
  { name: 'Trick Room', type: 'Psychic', category: 'Status' },
  { name: 'Triple Axel', type: 'Ice', category: 'Physical' },
  { name: 'U-turn', type: 'Bug', category: 'Physical' },
  { name: 'Volt Switch', type: 'Electric', category: 'Special' },
  { name: 'Water Pulse', type: 'Water', category: 'Special' },
  { name: 'Water Shuriken', type: 'Water', category: 'Physical' },
  { name: 'Wave Crash', type: 'Water', category: 'Physical' },
  { name: 'Wicked Blow', type: 'Dark', category: 'Physical' },
  { name: 'Wild Charge', type: 'Electric', category: 'Physical' },
  { name: 'Will-O-Wisp', type: 'Fire', category: 'Status' },
  { name: 'Wood Hammer', type: 'Grass', category: 'Physical' },
  { name: 'Wring Out', type: 'Normal', category: 'Special' },
  { name: 'X-Scissor', type: 'Bug', category: 'Physical' },
  { name: 'Yawn', type: 'Normal', category: 'Status' },
  { name: 'Zen Headbutt', type: 'Psychic', category: 'Physical' },
]

// Map PokéAPI move name (lowercase-hyphenated) → Champions move display name
const MOVE_POKEAPI_MAP = new Map<string, string>(
  MOVES.map((m) => [m.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''), m.name])
)

const capitalizeName = (name: string) =>
  name.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('-')

interface ChampionPokemon {
  id: number
  name: string
  types: string[]
  speed: number
  learnableMoveIndices: number[]
}

interface TeamSlot {
  pokemon: ChampionPokemon | null
  item: string
  moves: [string, string, string, string]
}

function emptySlot(): TeamSlot {
  return { pokemon: null, item: '', moves: ['', '', '', ''] }
}

function computeWeaknesses(team: TeamSlot[], typeEfficacy: PokemonTypeEfficacy[]) {
  return baseTypeArray.map(({ Name }) => {
    const attackType = Name.toLowerCase()
    let immune = 0, resistant = 0, weak = 0

    team.forEach((slot) => {
      if (!slot.pokemon) return
      let factor = 1
      slot.pokemon.types.forEach((t) => {
        const eff = typeEfficacy.find((e) => e.attackingType === attackType && e.defendingType === t.toLowerCase())
        if (eff) factor *= eff.damageFactor
      })
      if (factor === 0) immune++
      else if (factor < 1) resistant++
      else if (factor > 1) weak++
    })

    return { type: Name, immune, resistant, weak }
  })
}

const CATEGORY_COLORS = { Physical: '#c1440e', Special: '#4060c8', Status: '#888' }

export default function ChampionsTeamBuilder({
  champions,
  typeEfficacy,
}: {
  champions: ChampionPokemon[]
  typeEfficacy: PokemonTypeEfficacy[]
}) {
  const [team, setTeam] = useState<TeamSlot[]>([emptySlot(), emptySlot(), emptySlot(), emptySlot(), emptySlot(), emptySlot()])
  const [searches, setSearches] = useState(['', '', '', '', '', ''])
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const filledSlots = team.filter((s) => s.pokemon !== null)
  const weaknesses = computeWeaknesses(team, typeEfficacy)

  function selectPokemon(idx: number, pokemon: ChampionPokemon) {
    setTeam((t) => t.map((s, i) => (i === idx ? { ...s, pokemon } : s)))
    setSearches((s) => s.map((v, i) => (i === idx ? '' : v)))
    setOpenIdx(null)
  }

  function clearSlot(idx: number) {
    setTeam((t) => t.map((s, i) => (i === idx ? emptySlot() : s)))
  }

  function setItem(idx: number, item: string) {
    setTeam((t) => t.map((s, i) => (i === idx ? { ...s, item } : s)))
  }

  function setMove(slotIdx: number, moveIdx: number, move: string) {
    setTeam((t) =>
      t.map((s, i) => {
        if (i !== slotIdx) return s
        const moves = [...s.moves] as [string, string, string, string]
        moves[moveIdx] = move
        return { ...s, moves }
      })
    )
  }

  return (
    <div style={{ margin: '1rem', maxWidth: 1100 }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 className="pokemon-title" style={{ margin: '0 0 0.25rem' }}>Champions Team Builder</h2>
        <p style={{ opacity: 0.65, fontSize: '0.9rem', margin: 0 }}>
          Build a team of up to 6 from the Champions roster. Analyse weaknesses and compare speeds.
        </p>
      </div>

      {/* Team Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {team.map((slot, idx) => {
          const filtered =
            searches[idx].length >= 1
              ? champions.filter((p) => p.name.includes(searches[idx].toLowerCase())).slice(0, 8)
              : []

          return (
            <div key={idx} className="ctb-card" style={{ position: 'relative' }}>
              {!slot.pokemon ? (
                /* Empty slot — search */
                <div style={{ position: 'relative' }}>
                  <input
                    placeholder={`Slot ${idx + 1} — search Pokémon…`}
                    value={searches[idx]}
                    onChange={(e) => {
                      setSearches((s) => s.map((v, i) => (i === idx ? e.target.value : v)))
                      setOpenIdx(idx)
                    }}
                    onFocus={() => setOpenIdx(idx)}
                    onBlur={() => setTimeout(() => setOpenIdx((prev) => (prev === idx ? null : prev)), 150)}
                    className="ctb-input"
                  />
                  {openIdx === idx && filtered.length > 0 && (
                    <div className="ctb-dropdown">
                      {filtered.map((p) => (
                        <div
                          key={p.id}
                          onMouseDown={() => selectPokemon(idx, p)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.35rem 0.6rem',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                            fontSize: '0.88rem',
                          }}
                          className="pokemon-dropdown-item"
                        >
                          <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                            width={32}
                            height={32}
                            loading="lazy"
                          />
                          <span style={{ opacity: 0.5, marginRight: 2 }}>#{p.id}</span> {capitalizeName(p.name)}
                          {p.types.map((t) => (
                            <span key={t} className={`pokemonType pokemonType${t}`} style={{ fontSize: '0.65rem' }}>{t}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Filled slot */
                <div>
                  {/* Header row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${slot.pokemon.id}.png`}
                      width={56}
                      height={56}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                        <span style={{ opacity: 0.5, fontSize: '0.8rem', marginRight: 4 }}>#{slot.pokemon.id}</span>
                        {capitalizeName(slot.pokemon.name)}
                      </div>
                      <div style={{ marginTop: 2 }}>
                        {slot.pokemon.types.map((t) => (
                          <span key={t} className={`pokemonType pokemonType${t}`} style={{ marginRight: 3, fontSize: '0.75rem' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ fontSize: '0.78rem', marginTop: 4, opacity: 0.7 }}>
                        Speed <strong style={{ opacity: 1 }}>{slot.pokemon.speed}</strong>
                      </div>
                    </div>
                    <button
                      onClick={() => clearSlot(idx)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5, fontSize: '1.1rem', padding: '0.2rem 0.4rem' }}
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Item */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <label style={{ fontSize: '0.7rem', opacity: 0.55, display: 'block', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Item</label>
                    <select
                      value={slot.item}
                      onChange={(e) => setItem(idx, e.target.value)}
                      className="ctb-select"
                      style={{ padding: '0.3rem 0.5rem', fontSize: '0.85rem' }}
                    >
                      <option value="">— No Item —</option>
                      {(MEGA_STONES[slot.pokemon.name] ?? []).length > 0 && (
                        <optgroup label="Mega Stone">
                          {(MEGA_STONES[slot.pokemon.name] ?? []).map((stone) => (
                            <option key={stone} value={stone}>{stone}</option>
                          ))}
                        </optgroup>
                      )}
                      <optgroup label="Items">
                        {ITEMS.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Moves */}
                  <div>
                    <label style={{ fontSize: '0.7rem', opacity: 0.55, display: 'block', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Moves</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
                      {slot.moves.map((move, mIdx) => {
                        const moveData = MOVES.find((m) => m.name === move)
                        const learnableMoveData = slot.pokemon.learnableMoveIndices
                          .map((idx) => MOVES[idx])
                          .filter((m): m is typeof MOVES[0] => m !== undefined)
                        return (
                          <div key={mIdx} style={{ position: 'relative' }}>
                            {moveData && (
                              <span
                                style={{
                                  position: 'absolute',
                                  left: 6,
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  fontSize: '0.6rem',
                                  fontWeight: 'bold',
                                  color: CATEGORY_COLORS[moveData.category],
                                  pointerEvents: 'none',
                                  zIndex: 1,
                                }}
                              >
                                {moveData.category[0]}
                              </span>
                            )}
                            <select
                              value={move}
                              onChange={(e) => setMove(idx, mIdx, e.target.value)}
                              className="ctb-select"
                              style={{ padding: moveData ? '0.3rem 0.3rem 0.3rem 1.1rem' : '0.3rem 0.3rem', fontSize: '0.75rem' }}
                            >
                              <option value="">— Move {mIdx + 1} —</option>
                              {learnableMoveData.map((m) => (
                                <option key={m.name} value={m.name}>{m.name}</option>
                              ))}
                            </select>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Weakness Analysis */}
      {filledSlots.length > 0 && (
        <div className="ctb-analysis">
          <h4 style={{ margin: '0 0 1rem', fontSize: '0.95rem', opacity: 0.9 }}>
            Team Weakness Analysis <span style={{ opacity: 0.5, fontWeight: 'normal' }}>({filledSlots.length} Pokémon)</span>
          </h4>

          {/* Speed comparison */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.7rem', opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Speed</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {filledSlots
                .slice()
                .sort((a, b) => (b.pokemon?.speed ?? 0) - (a.pokemon?.speed ?? 0))
                .map((s) => (
                  <div
                    key={s.pokemon!.id}
                    className="ctb-speed-pill"
                    style={{ textTransform: 'capitalize' }}
                  >
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${s.pokemon!.id}.png`} width={24} height={24} />
                    {capitalizeName(s.pokemon!.name)}
                    <strong style={{ color: '#3b82f6' }}>{s.pokemon!.speed}</strong>
                  </div>
                ))}
            </div>
          </div>

          {/* Weaknesses */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.7rem', opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Weak against
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {weaknesses
                .filter((w) => w.weak > 0)
                .sort((a, b) => b.weak - a.weak)
                .map(({ type, weak }) => (
                  <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span className={`pokemonType pokemonType${type}`}>{type}</span>
                    {weak > 1 && (
                      <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#fc5050', background: 'rgba(252,80,80,0.15)', borderRadius: 8, padding: '0 5px' }}>
                        {weak}
                      </span>
                    )}
                  </div>
                ))}
              {weaknesses.every((w) => w.weak === 0) && <span style={{ opacity: 0.4, fontSize: '0.85rem' }}>None</span>}
            </div>
          </div>

          {/* Resistances */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.7rem', opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Resists
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {weaknesses
                .filter((w) => w.resistant > 0)
                .sort((a, b) => b.resistant - a.resistant)
                .map(({ type, resistant }) => (
                  <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span className={`pokemonType pokemonType${type}`}>{type}</span>
                    {resistant > 1 && (
                      <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#3b82f6', background: 'rgba(59,130,246,0.15)', borderRadius: 8, padding: '0 5px' }}>
                        {resistant}
                      </span>
                    )}
                  </div>
                ))}
              {weaknesses.every((w) => w.resistant === 0) && <span style={{ opacity: 0.4, fontSize: '0.85rem' }}>None</span>}
            </div>
          </div>

          {/* Immunities */}
          {weaknesses.some((w) => w.immune > 0) && (
            <div>
              <div style={{ fontSize: '0.7rem', opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Immune to
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {weaknesses
                  .filter((w) => w.immune > 0)
                  .map(({ type }) => (
                    <span key={type} className={`pokemonType pokemonType${type}`}>{type}</span>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://beta.pokeapi.co/graphql/v1beta' }),
    cache: new InMemoryCache(),
  })

  const championNameList = Array.from(CHAMPIONS_NAMES)

  const result = await client.query({
    query: gql`
      query championsTeamBuilder($names: [String!]!) {
        pokemon_v2_pokemon(where: { name: { _in: $names } }) {
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              pokemon_v2_typenames(where: { language_id: { _eq: 9 } }) {
                name
              }
            }
          }
          pokemon_v2_pokemonstats(where: { stat_id: { _eq: 6 } }) {
            base_stat
          }
          pokemon_v2_pokemonmoves {
            pokemon_v2_move {
              name
            }
          }
        }
        pokemon_v2_typeefficacy {
          damage_factor
          damage_type_id
          id
          pokemon_v2_type { name }
          pokemonV2TypeByTargetTypeId { name }
        }
      }
    `,
    variables: { names: championNameList },
  })

  const champions: ChampionPokemon[] = (result.data as any).pokemon_v2_pokemon
    .filter((p) => isChampionsPokemon(p.name) && !p.name.includes('mega'))
    .map((p) => {
      const uniqueMoveKeys = new Set<string>(p.pokemon_v2_pokemonmoves.map((m) => m.pokemon_v2_move.name))
      const learnableMoveIndices = Array.from(uniqueMoveKeys)
        .map((key) => MOVE_POKEAPI_MAP.get(key))
        .filter((n): n is string => n !== undefined)
        .map((name) => MOVES.findIndex((m) => m.name === name))
        .filter((i) => i !== -1)
        .sort((a, b) => a - b)
      return {
        id: p.id,
        name: p.name,
        types: p.pokemon_v2_pokemontypes.map((t) => t.pokemon_v2_type.pokemon_v2_typenames[0]?.name ?? ''),
        speed: p.pokemon_v2_pokemonstats[0]?.base_stat ?? 0,
        learnableMoveIndices,
      }
    })
    .sort((a, b) => a.id - b.id)

  return {
    props: {
      champions,
      typeEfficacy: parseTypeEfficacy((result.data as any).pokemon_v2_typeefficacy),
    },
    revalidate: 86400,
  }
}
