/**
 * ============================================================
 *  MURTHWAITE GAMING — TFT ADVISOR
 *  data.js — Edit this file when patches drop
 *
 *  Sources: MetaTFT (comp tier + screenshots), tactics.tools
 *           (units/items), TFT Academy (comp guides)
 *
 *  PATCH CHECKLIST:
 *  1. Update PATCH_VERSION
 *  2. Update comp tiers + BIS items
 *  3. Add/remove units if roster changes
 *  Save + relaunch. Done.
 * ============================================================
 */

const PATCH_VERSION = "17.1";
const SET_NAME      = "Space Gods";

// ── SHOP ODDS ─────────────────────────────────────────────────────────────────
const SHOP_ODDS = {
  1:  [100,0,0,0,0],  2:[100,0,0,0,0],   3:[75,25,0,0,0],
  4:  [55,30,15,0,0], 5:[45,33,20,2,0],  6:[30,40,25,5,0],
  7:  [19,30,40,10,1],8:[17,20,32,24,7], 9:[10,15,25,30,20],
  10: [5,10,20,35,30],
};

// ── CHAMPIONS ─────────────────────────────────────────────────────────────────
// All 60 confirmed Set 17 units from tactics.tools
// img: lowercase filename key for CommunityDragon portrait CDN
const CHAMPIONS = [
  // ── 1-COST ──
  { n:"Aatrox",       c:1, t:["NOVA","Bastion"],               img:"tft17_aatrox",
    ab:{ nm:"Stellar Slash", mn:"30/90", desc:"Heal, then deal physical damage to target. N.O.V.A. Strike: Cleave all enemies, knock up and deal bonus physical damage.", dmg:"161/242/362" }},
  { n:"Briar",        c:1, t:["Anima","Primordian","Rogue"],    img:"tft17_briar",
    ab:{ nm:"Fish Frenzy", mn:"0/40", desc:"Passive: Gain Attack Speed per % missing Health. Active: Deal physical damage, increased 50% vs tanks.", dmg:"130/195/295" }},
  { n:"Caitlyn",      c:1, t:["NOVA","Fateweaver"],             img:"tft17_caitlyn",
    ab:{ nm:"Aim For The Head", mn:"passive", desc:"Passive: 15% chance to fire empowered Headshot. N.O.V.A. Strike: Mark all enemies; first to drop below 50% HP gets Headshot.", dmg:"190/285/555" }},
  { n:"Cho'Gath",     c:1, t:["DarkStar","Brawler"],            img:"tft17_chogath",
    ab:{ nm:"Accretion", mn:"30/70", desc:"Deal magic damage to lowest HP enemy in range and permanently gain max Health. Kills grant double the Health.", dmg:"262/384/588" }},
  { n:"Ezreal",       c:1, t:["Timebreaker","Sniper"],          img:"tft17_ezreal",
    ab:{ nm:"Temporal Shot", mn:"0/30", desc:"Fire a blast at target dealing physical damage. Every 8 takedowns gain a drone that deals bonus damage on cast.", dmg:"165/250/380" }},
  { n:"Leona",        c:1, t:["Arbiter","Vanguard"],            img:"tft17_leona",
    ab:{ nm:"Shield of Daybreak", mn:"40/100", desc:"Gain a Shield for 4 seconds. Bash target dealing magic damage and stunning them.", dmg:"226/339/509" }},
  { n:"Lissandra",    c:1, t:["DarkStar","Shepherd","Replicator"], img:"tft17_lissandra",
    ab:{ nm:"Dark Matter", mn:"0/30", desc:"Hurl a shard at target dealing magic damage. On hit it explodes dealing bonus magic damage to nearby enemies.", dmg:"250/375/600" }},
  { n:"Nasus",        c:1, t:["SpaceGroove","Vanguard"],        img:"tft17_nasus",
    ab:{ nm:"Groovin' Susan", mn:"60/120", desc:"Transform for 6 seconds gaining bonus max Health and entering The Groove, dealing magic damage to adjacent enemies each second.", dmg:"44/70/115" }},
  { n:"Poppy",        c:1, t:["Meeple","Bastion"],              img:"tft17_poppy",
    ab:{ nm:"Huddle Up!", mn:"30/100", desc:"Gain a Shield for 4 seconds. Nearby allies gain Armor and MR. Meep Bonus: Shield nearest allies.", dmg:"400/475/575 Shield" }},
  { n:"Rek'Sai",      c:1, t:["Primordian","Brawler"],          img:"tft17_reksai",
    ab:{ nm:"Upheaval", mn:"40/100", desc:"Heal self, then knock up adjacent enemies and deal magic damage.", dmg:"80/120/180" }},
  { n:"Talon",        c:1, t:["Stargazer","Rogue"],             img:"tft17_talon",
    ab:{ nm:"Diviner's Judgment", mn:"0/30", desc:"Stab target causing them to bleed physical damage over 18 seconds. Then leap to highest HP enemy within 3 hexes.", dmg:"520/780/1225" }},
  { n:"Teemo",        c:1, t:["SpaceGroove","Shepherd"],        img:"tft17_teemo",
    ab:{ nm:"Double Time", mn:"0/50", desc:"Passive: Attacks deal bonus magic damage plus stacking poison. While enemy has 5+ stacks, Teemo enters The Groove. Active: Gain 150% AS for 3 attacks.", dmg:"30/45/100" }},
  { n:"Twisted Fate", c:1, t:["Stargazer","Fateweaver"],        img:"tft17_twistedfate",
    ab:{ nm:"Fate's Gambit", mn:"0/50", desc:"Draw a lucky card 1-9 and throw it at target. Higher card = more magic damage. Overkill bounces to nearest enemy.", dmg:"190-380/285-570/430-860" }},
  { n:"Veigar",       c:1, t:["Meeple","Replicator"],           img:"tft17_veigar",
    ab:{ nm:"Meepteor Shower", mn:"10/50", desc:"Call down a Meepteor on target dealing magic damage. Meep Bonus: 2 extra mini Meepteors on nearby targets.", dmg:"310/465/700" }},
  // ── 2-COST ──
  { n:"Akali",        c:2, t:["NOVA","Marauder"],               img:"tft17_akali",
    ab:{ nm:"Star Strike", mn:"0/30", desc:"Reposition next to target then throw 5 piercing kunai dealing physical damage. N.O.V.A. Strike: Slice all enemies applying Wound and bleed.", dmg:"38/56/89 per kunai" }},
  { n:"Bel'Veth",     c:2, t:["Primordian","Challenger","Marauder"],       img:"tft17_belveth",
    ab:{ nm:"Tidal Slashes", mn:"0/50", desc:"Unleash a flurry of 12 slashes at target over 2 seconds dealing physical damage each. Slash count scales with Attack Speed.", dmg:"23/35/52 per slash" }},
  { n:"Gnar",         c:2, t:["Meeple","Sniper"],               img:"tft17_gnar",
    ab:{ nm:"Slingshot Maneuver", mn:"0/5", desc:"Passive: Every 5th attack launches a returning boomerang dealing physical damage. Meep Bonus: Meeps attack alongside Gnar.", dmg:"245/370/570" }},
  { n:"Gragas",       c:2, t:["Psionic","Brawler"],             img:"tft17_gragas",
    ab:{ nm:"Chemical Rage", mn:"30/80", desc:"Heal over 2 seconds, then deal magic damage to target and adjacent enemies. Apply 30% Chill for 2 seconds.", dmg:"200/300/450" }},
  { n:"Gwen",         c:2, t:["SpaceGroove","Rogue"],           img:"tft17_gwen",
    ab:{ nm:"Snip Snip!", mn:"0/50", desc:"Snip 4 times dealing magic damage, increased on the final snip. Dashes to highest HP enemy after each cast.", dmg:"115/175/265 per snip" }},
  { n:"Jax",          c:2, t:["Stargazer","Bastion"],           img:"tft17_jax",
    ab:{ nm:"Relentless Assault", mn:"0/60", desc:"Passive: Every 3rd attack deals bonus magic damage. Active: Gain a Dodge Shield absorbing damage equal to 120% of Armor.", dmg:"85/130/195" }},
  { n:"Jinx",         c:2, t:["Anima","Challenger"],            img:"tft17_jinx",
    ab:{ nm:"Switcheroo!", mn:"0/50", desc:"Switch between Fishbones (rocket) and Pow-Pow (rapid fire). Rockets deal AoE magic damage; Pow-Pow attacks grant stacking AS.", dmg:"170/255/385 rocket" }},
  { n:"Meepsie",      c:2, t:["Meeple","Shepherd","Voyager"],   img:"tft17_ivernminion",
    ab:{ nm:"Meep Mob", mn:"0/40", desc:"Summon a Meep Mob that charges the nearest enemy dealing magic damage and slowing them.", dmg:"180/270/410" }},
  { n:"Milio",        c:2, t:["Timebreaker","Fateweaver"],      img:"tft17_milio",
    ab:{ nm:"Ultra Mega Fire Kick", mn:"40/80", desc:"Kick a cozy fireball at target knocking them back and dealing magic damage to all enemies it passes through.", dmg:"225/340/510" }},
  { n:"Mordekaiser",  c:2, t:["DarkStar","Conduit","Vanguard"], img:"tft17_mordekaiser",
    ab:{ nm:"Realm of Death", mn:"50/100", desc:"Banish current target to a 1v1 realm for 3 seconds. On return deal magic damage to nearby enemies.", dmg:"100/150/225" }},
  { n:"Pantheon",     c:2, t:["Timebreaker","Brawler","Replicator"],         img:"tft17_pantheon",
    ab:{ nm:"Comet of Legend", mn:"60/120", desc:"Leap to the highest HP enemy and slam down dealing magic damage to nearby enemies and stunning them.", dmg:"200/300/455" }},
  { n:"Pyke",         c:2, t:["Psionic","Voyager"],             img:"tft17_pyke",
    ab:{ nm:"Death from Below", mn:"0/65", desc:"Dash to the lowest HP enemy. If below 15% HP, execute them for gold. Otherwise deal physical damage and stun.", dmg:"250/375/565" }},
  { n:"Zoe",          c:2, t:["Arbiter","Conduit"],             img:"tft17_zoe",
    ab:{ nm:"Sleepy Trouble Bubble", mn:"10/60", desc:"Toss a bubble at the target putting them to Sleep. When they wake, deal magic damage. Bubble also steals a random item.", dmg:"275/415/625" }},
  // ── 3-COST ──
  { n:"Aurora",       c:3, t:["Anima","Voyager"],               img:"tft17_aurora",
    ab:{ nm:"Between Worlds", mn:"0/55", desc:"Leap to the farthest enemy and deal magic damage in an area. Leave a spirit realm zone that empowers allies' attacks.", dmg:"250/375/565" }},
  { n:"Diana",        c:3, t:["Arbiter","Challenger"],          img:"tft17_diana",
    ab:{ nm:"Pale Cascade", mn:"0/40", desc:"Summon 3 orbiting spheres that explode on contact dealing magic damage. Gain a shield while spheres are active.", dmg:"175/265/400 per orb" }},
  { n:"Fizz",         c:3, t:["Meeple","Rogue"],                img:"tft17_fizz",
    ab:{ nm:"Chum the Waters", mn:"0/50", desc:"Toss a fish toward enemies, pulling the farthest target back and dealing magic damage. Meep Bonus: Fish deal bonus damage.", dmg:"350/525/790" }},
  { n:"Illaoi",       c:3, t:["Anima","Vanguard","Shepherd"],   img:"tft17_illaoi",
    ab:{ nm:"Tentacle Smash", mn:"40/100", desc:"Slam down tentacles dealing magic damage to nearby enemies and summoning a Tentacle that continues attacking.", dmg:"200/300/450" }},
  { n:"Kai'Sa",       c:3, t:["DarkStar","Rogue"],              img:"tft17_kaisa",
    ab:{ nm:"Icathian Rain", mn:"0/60", desc:"Launch 6 missiles at nearby enemies dealing physical damage each. Every 10 attacks, launch a bonus volley.", dmg:"80/120/180 per missile" }},
  { n:"Lulu",         c:3, t:["Stargazer","Replicator"],        img:"tft17_lulu",
    ab:{ nm:"Whimsy", mn:"30/70", desc:"Polymorph the current target into a critter for 2 seconds. Buff the lowest HP ally with bonus Health and Attack Speed.", dmg:"Polymorph + 300/450/675 HP buff" }},
  { n:"Maokai",       c:3, t:["NOVA","Brawler"],                img:"tft17_maokai",
    ab:{ nm:"Sapling Toss", mn:"40/100", desc:"Hurl a sapling at target that chases the nearest enemy, rooting and dealing magic damage on contact. N.O.V.A. Strike: Toss 2 extra saplings.", dmg:"300/450/680" }},
  { n:"Miss Fortune", c:3, t:["GunGoddess","ChooseTrait"], img:"tft17_missfortune",
    ab:{ nm:"Make It Rain / Bullet Time / Double Up", mn:"varies", desc:"Choose Conduit/Challenger/Replicator mode. Each grants a unique ability matching the trait.", dmg:"varies by mode" }},
  { n:"Morgana",      c:5, t:["DarkLady"],           img:"tft17_morgana",
    ab:{ nm:"Soul Shackles", mn:"50/100", desc:"Bind nearby enemies dealing magic damage per second and stunning them if they stay in range. Allies take 5% less ability damage.", dmg:"150/225/340 per sec" }},
  { n:"Nami",         c:4, t:["SpaceGroove","Replicator"],      img:"tft17_nami",
    ab:{ nm:"Tidal Wave", mn:"60/120", desc:"Launch a tidal wave that knocks up and deals magic damage to enemies in a line. Empowers nearby allies' next attack.", dmg:"250/375/565" }},
  { n:"Ornn",         c:3, t:["SpaceGroove","Bastion"],         img:"tft17_ornn",
    ab:{ nm:"Volcanic Rupture", mn:"50/100", desc:"Slam the ground sending out a fissure that deals magic damage and slows. Upgrades one item on the lowest HP ally.", dmg:"250/375/565" }},
  { n:"Rhaast",       c:3, t:["Redeemer"],           img:"tft17_rhaast",
    ab:{ nm:"The Darkin Blade", mn:"0/55", desc:"Sweep scythe dealing physical damage to all enemies in an arc. Heal for a portion of damage dealt.", dmg:"200/300/450" }},
  { n:"Riven",        c:4, t:["Timebreaker","Rogue"],        img:"tft17_riven",
    ab:{ nm:"Blade of the Exile", mn:"0/50", desc:"Dash forward and slash dealing physical damage. Final slash knocks up enemies. Empower with stacking AD.", dmg:"150/225/340 per slash" }},
  { n:"Samira",       c:3, t:["SpaceGroove","Sniper"],          img:"tft17_samira",
    ab:{ nm:"Inferno Trigger", mn:"0/70", desc:"Spin dealing physical damage to all nearby enemies. Gain Style stacks per hit boosting damage. Enter The Groove at max Style.", dmg:"65/97/145 per hit" }},
  { n:"Urgot",        c:3, t:["Mecha","Brawler","Marauder"],    img:"tft17_urgot",
    ab:{ nm:"Purge", mn:"30/80", desc:"Engage shotgun knees dealing physical damage to 2 nearby enemies. Transform into Mecha form granting bonus Health.", dmg:"100/150/225 per hit" }},
  { n:"Viktor",       c:3, t:["Psionic","Conduit"],             img:"tft17_viktor",
    ab:{ nm:"Psionic Storm", mn:"50/110", desc:"Launch a storm that deals magic damage per second to enemies in a large area. Tracks the most clustered enemies.", dmg:"175/265/400 per sec" }},
  // ── 4-COST ──
  { n:"Aurelion Sol", c:4, t:["Mecha","Conduit"],               img:"tft17_aurelionsol",
    ab:{ nm:"The Skies Descend", mn:"60/120", desc:"Call down a beam of starfire dealing magic damage to all enemies in a line. Mecha form increases beam width.", dmg:"400/600/900" }},
  { n:"Corki",        c:4, t:["Meeple","Fateweaver"],           img:"tft17_corki",
    ab:{ nm:"Special Delivery", mn:"0/60", desc:"Fly toward target dropping bombs that deal physical damage in an area. Meep Bonus: Extra bombs on landing.", dmg:"300/450/680" }},
  { n:"Fiora",        c:5, t:["DivineDuelist","Anima","Marauder"],               img:"tft17_fiora",
    ab:{ nm:"Grand Challenge", mn:"0/50", desc:"Dash to target and strike their vital dealing true damage. N.O.V.A. Strike: Mark all enemies' vitals simultaneously.", dmg:"350/525/790 true" }},
  { n:"Karma",        c:4, t:["DarkStar","Voyager"],            img:"tft17_karma",
    ab:{ nm:"Singularity", mn:"60/120", desc:"Create a Singularity that pulls in nearby enemies dealing magic damage. Splits into smaller singularities on expire.", dmg:"300/450/680" }},
  { n:"Kindred",      c:4, t:["NOVA","Challenger"],             img:"tft17_kindred",
    ab:{ nm:"Dance of Arrows", mn:"0/50", desc:"Leap and fire arrows at 3 enemies dealing physical damage. Mark targets; collect marks for stacking damage. N.O.V.A. Strike: Fire at all enemies.", dmg:"200/300/450" }},
  { n:"LeBlanc",      c:4, t:["Arbiter","Shepherd"],            img:"tft17_leblanc",
    ab:{ nm:"Sigil of Malice", mn:"0/55", desc:"Launch an orb dealing magic damage, then teleport to target's location creating a clone that bursts for bonus damage.", dmg:"250/375/565" }},
  { n:"Master Yi",    c:4, t:["Psionic","Marauder"],            img:"tft17_masteryi",
    ab:{ nm:"Wuju Style", mn:"0/60", desc:"Enter Psi-State gaining massive Attack Speed and dealing bonus true damage on each attack for 4 seconds.", dmg:"50/75/115 true per attack" }},
  { n:"The Mighty Mech",c:4,t:["Mecha","Voyager"],               img:"tft17_galio",
    ab:{ nm:"Colossal Smash", mn:"40/100", desc:"Absorb Mecha allies to Transform. In Mecha form, smash the ground dealing magic damage in a huge area and taunting enemies.", dmg:"450/675/1015" }},
  { n:"Rammus",       c:4, t:["Meeple","Bastion"],             img:"tft17_rammus",
    ab:{ nm:"Powerball", mn:"50/100", desc:"Roll into the furthest enemy dealing magic damage and stunning nearby enemies on impact. Voyager stacks amplify damage.", dmg:"300/450/680" }},
  { n:"Tahm Kench",   c:4, t:["Oracle","Brawler"],            img:"tft17_tahmkench",
    ab:{ nm:"Devour", mn:"40/100", desc:"Devour the lowest HP nearby ally for 2 seconds shielding them. Spit them out dealing magic damage to nearby enemies.", dmg:"350/525/790" }},
  // ── 5-COST ──
  { n:"Bard",         c:5, t:["Meeple","Conduit"],             img:"tft17_bard",
    ab:{ nm:"Tempered Fate", mn:"50/100", desc:"Put all enemies in stasis for 2.5 seconds. On release deal magic damage. While in stasis abduct one enemy to your bench.", dmg:"400/600/900" }},
  { n:"Blitzcrank",   c:5, t:["PartyAnimal","SpaceGroove","Vanguard"],        img:"tft17_blitzcrank",
    ab:{ nm:"Rocket Grab", mn:"40/90", desc:"Hook the furthest enemy dealing magic damage and pulling them in. Nearby enemies are knocked back on arrival.", dmg:"350/525/790" }},
  { n:"Graves",       c:5, t:["FactoryNew"],                 img:"tft17_graves",
    ab:{ nm:"Factory New", mn:"0/65", desc:"Fire a bullet that splits on first hit dealing physical damage. After participating in combat, choose a permanent upgrade.", dmg:"400/600/900" }},
  { n:"Jhin",         c:5, t:["DarkStar","Eradicator","Sniper"],             img:"tft17_jhin",
    ab:{ nm:"Curtain Call", mn:"0/70", desc:"Fire 4 shots at the lowest HP enemies dealing physical damage. 4th shot is guaranteed crit dealing massive damage.", dmg:"200/300/450 per shot" }},
  { n:"Nunu & Willump",c:4,t:["Stargazer","Vanguard"],              img:"tft17_nunu",
    ab:{ nm:"Consume", mn:"50/110", desc:"Eat the current target healing for a massive amount. If target dies deal magic damage to nearby enemies. Meep Bonus: Massive additional healing.", dmg:"600/900/1350" }},
  { n:"Shen",         c:5, t:["Bulwark","Bastion"],             img:"tft17_shen",
    ab:{ nm:"Stand United", mn:"0/70", desc:"Enter Spirit Realm becoming untargetable and placing a shield on the lowest HP ally. On return, deal magic damage to adjacent enemies.", dmg:"300/450/680" }},
  { n:"Sona",         c:5, t:["Commander","Psionic","Shepherd"],            img:"tft17_sona",
    ab:{ nm:"Command Mod", mn:"40/80", desc:"Apply a Command Mod to the ally with the highest AP granting a powerful buff that lasts 2 player combats.", dmg:"varies by mod" }},
  { n:"Vex",          c:5, t:["Doomer"],         img:"tft17_vex",
    ab:{ nm:"Personal Space", mn:"50/100", desc:"Send out a wall of fear dealing magic damage and fearing all hit enemies. Dark Star: Create a Black Hole on feared targets.", dmg:"400/600/900" }},
  { n:"Xayah",        c:4, t:["Stargazer","Sniper"],           img:"tft17_xayah",
    ab:{ nm:"Clean Cuts", mn:"0/65", desc:"Passive: Attacks send out feathers. Active: Recall all feathers through enemies dealing physical damage per feather.", dmg:"100/150/225 per feather" }},
  { n:"Zed",          c:5, t:["GalaxyHunter"],                  img:"tft17_zed",
    ab:{ nm:"Living Shadow", mn:"0/55", desc:"Spawn a clone of Zed that copies all attacks. While a clone lives Zed gains 40% bonus AD. Clones spawn clones on death.", dmg:"200/300/450 per hit" }},
];

// ── ITEMS ─────────────────────────────────────────────────────────────────────
// Confirmed Set 17 items from tactics.tools — MetaTFT S-tier items first
const ITEMS = [
  // S-TIER (MetaTFT)
  { name:"Rageblade",           file:"item_rageblade.png",    tier:"S" },
  { name:"Sunfire Cape",        file:"item_sunfire-cape.png",          tier:"S" },
  { name:"Jeweled Gauntlet",    file:"item_jeweled-gauntlet.png",      tier:"S" },
  { name:"Gargoyle Stoneplate", file:"item_gargoyle-stoneplate.png",   tier:"S" },
  { name:"Spirit Visage",       file:"item_spiritvisage.png",         tier:"S" },
  { name:"Giant Slayer",        file:"item_giant-slayer.png",          tier:"S" },
  // A-TIER (MetaTFT)
  { name:"Warmog's Armor",      file:"item_warmogs-armor.png",          tier:"A" },
  { name:"Infinity Edge",       file:"item_infinity-edge.png",         tier:"A" },
  { name:"Thief's Gloves",      file:"item_thieves-gloves.png",         tier:"A" },
  { name:"Shojin",              file:"item_spear-of-shojin2.png",       tier:"A" },
  { name:"Hand of Justice",     file:"item_hand-of-justice.png",       tier:"A" },
  { name:"Bloodthirster",       file:"item_bloodthirster.png",         tier:"A" },
  { name:"Striker's Flail",     file:"item_guardbreaker.png",        tier:"A" },
  { name:"Adaptive Helm",       file:"item_adaptive-helm.png",         tier:"A" },
  { name:"Dragon's Claw",       file:"item_dragons-claw.png",          tier:"A" },
  { name:"Protector's Vow",     file:"item_fimbulwinter.png",        tier:"A" },
  { name:"Void Staff",          file:"item_krakensfury.png",            tier:"A" },
  // B-TIER (MetaTFT)
  { name:"Steadfast Heart",     file:"item_steadfast-hammer.png",       tier:"B" },
  { name:"Bramble Vest",        file:"item_bramble-vest.png",          tier:"B" },
  { name:"Sterak's Gage",       file:"item_steraks-gage.png",          tier:"B" },
  { name:"Hextech Gunblade",    file:"item_hextech-gunblade.png",      tier:"B" },
  { name:"Titan's Resolve",     file:"item_titans-resolve.png",        tier:"B" },
  { name:"Nashor's Tooth",      file:"item_nashors-tooth.png",         tier:"B" },
  { name:"Edge of Night",       file:"item_edge-of-night.png",      tier:"B" },
  { name:"Rabadon's",           file:"item_rabadons-deathcap.png",     tier:"B" },
  { name:"Deathblade",          file:"item_deathblade.png",           tier:"B" },
  { name:"Blue Buff",           file:"item_blue-buff.png",             tier:"B" },
  { name:"Archangel's",         file:"item_archangels-staff.png",       tier:"B" },
  { name:"Last Whisper",        file:"item_last-whisper.png",          tier:"B" },
  { name:"Crownguard",          file:"item_crownguard.png",            tier:"B" },
  { name:"Morellonomicon",      file:"item_morellonomicon.png",        tier:"B" },
  { name:"Evenshroud",          file:"item_evenshroud.png",            tier:"B" },
  { name:"Kraken's Fury",       file:"item_krakensfury.png",     tier:"B" },
  { name:"Red Buff",            file:"item_red-buff.png",              tier:"B" },
  { name:"Quicksilver",         file:"item_quicksilver.png",           tier:"B" },
  { name:"Ionic Spark",         file:"item_ionic-spark.png",           tier:"B" },
];

// ── AUGMENTS ──────────────────────────────────────────────────────────────────
// Loaded at runtime from Riot Data Dragon.
// Each entry: { id, name, icon }  — 191 augments across all TFT sets.
const DDRAGON_VER  = '13.24.1';
const DDRAGON_BASE = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VER}`;

let AUGMENTS = [];

const AUGMENTS_READY = fetch(`${DDRAGON_BASE}/data/en_US/tft-augments.json`)
  .then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  })
  .then(json => {
    AUGMENTS = Object.values(json.data).map(a => ({
      id:   a.id,
      name: a.name,
      icon: `${DDRAGON_BASE}/img/tft-augment/${a.image.full}`,
    }));
    console.log(`[TFT Advisor] Loaded ${AUGMENTS.length} augments from Data Dragon ${DDRAGON_VER}`);
  })
  .catch(err => console.warn('[TFT Advisor] Failed to load augments from Data Dragon:', err));

// ── TRAIT BREAKPOINTS ─────────────────────────────────────────────────────────
const TRAIT_BREAKPOINTS = {
  Meeple:      [3,5,7,10],
  NOVA:        [3,5,7],
  Mecha:       [3,6],
  Conduit:     [2,3,4],
  Vanguard:    [2,4,6,8],
  Bastion:     [2,4,6,8],
  DarkStar:    [2,4,6,9],
  Challenger:  [2,4,6],
  Sniper:      [2,4,6],
  Replicator:  [2,4],
  Fateweaver:  [2,4,6],
  SpaceGroove: [1,3,5,7,10],
  Anima:       [2,4,6],
  Rogue:       [2,4],
  Brawler:     [2,4,6],
  Marauder:    [2,4,6],
  Shepherd:    [3,5,7],
  Voyager:     [2,3,4,5,6],
  Primordian:  [2,3,4],
  Psionic:     [2,4,6],
  Arbiter:     [2,4,6],
  Timebreaker: [2,3,4],
  Stargazer:   [3,5,7],
};

// ── LEVEL TIPS ────────────────────────────────────────────────────────────────
const LEVEL_TIPS = {
  "1-1":"Econ — hold gold",
  "2-1":"Level to 4 if spare gold",
  "2-3":"Level to 5 if win-streaking",
  "3-1":"Level to 5, start shaping comp",
  "3-2":"Level to 6 if win-streaking",
  "3-5":"Level to 7 — prep for 4-costs",
  "4-1":"⚔ Level to 8 NOW — Fast 8 window",
  "4-2":"Level to 8 if you haven't",
  "5-1":"Push to 9",
  "5-2":"Roll for 5-cost carries",
};

// ── COMPS ─────────────────────────────────────────────────────────────────────
// Source: MetaTFT screenshots (Patch 17.1) + TFT Academy guides
// ⬆ UPDATE TIER + BIS EACH PATCH ⬆

const COMPS = {

  // ── S-TIER ──────────────────────────────────────────────────────────────────

  novaKindred: {
    name:"N.O.V.A. Kindred", tier:"S", style:"Fast 8 — Level to 8 on 4-1",
    core:["Kindred","Maokai","Shen","Akali"],
    support:["Tahm Kench","Graves","Bel'Veth","Aatrox","Caitlyn"],
    goal:{NOVA:5},
    carries:[
      { n:"Kindred", role:"Primary carry",
        bis:["Rageblade","Giant Slayer","Kraken's Fury"], holder:"Caitlyn",
        note:"Rageblade stacks + mark synergy. Keep backline." },
      { n:"Graves", role:"Secondary carry",
        bis:["Rageblade","Giant Slayer","Last Whisper"], holder:"Caitlyn",
        note:"5-cost N.O.V.A. Sniper. Item immediately on hit." },
    ],
    placeholders:{ "Kindred":{sub:"Caitlyn",why:"N.O.V.A.+Fateweaver hold"}, "Graves":{sub:"Aatrox",why:"N.O.V.A.+Bastion hold"} },
    goodAugs:["N.O.V.A. Heart","N.O.V.A. Crest","N.O.V.A. Emblem","Challenger Heart","Rageblade Augment","Giant Slayer Augment"],
    okAugs:["Last Whisper Augment","Bloodthirster Augment"],
    endComp:[
      {n:"Aatrox",role:"tank",items:[],row:0},{n:"Maokai",role:"tank",items:["Gargoyle Stoneplate","Sunfire Cape"],row:0},
      {n:"Shen",role:"tank",items:["Warmog's Armor"],row:0},{n:"Tahm Kench",role:"tank",items:[],row:0},
      {n:"Kindred",role:"carry",items:["Rageblade","Giant Slayer","Kraken's Fury"],row:1},
      {n:"Graves",role:"carry",items:["Rageblade","Giant Slayer","Last Whisper"],row:1},
      {n:"Akali",role:"support",items:[],row:1},{n:"Bel'Veth",role:"support",items:[],row:1},{n:"Caitlyn",role:"support",items:[],row:1},
    ],
  },

  voyagerRammus: {
    name:"Voyager Rammus", tier:"S", style:"Fast 9 — Level to 9 on 5-1",
    core:["Rammus","Vex","Bard","Blitzcrank"],
    support:["Shen","Meepsie","Karma","Mordekaiser","Mighty Mech"],
    goal:{Voyager:4},
    carries:[
      { n:"Rammus", role:"Tank carry",
        bis:["Sunfire Cape","Gargoyle Stoneplate","Bramble Vest"], holder:"Mordekaiser",
        note:"Voyager stacks turn Rammus into a damage sponge that punches back." },
      { n:"Vex", role:"AP carry",
        bis:["Jeweled Gauntlet","Rabadon's","Void Staff"], holder:"Mordekaiser",
        note:"5-cost Dark Star Replicator. Dark Star execute is game-winning." },
    ],
    placeholders:{ "Rammus":{sub:"Mordekaiser",why:"Tank hold"}, "Vex":{sub:"Karma",why:"DarkStar+Voyager AP hold"} },
    goodAugs:["Voyager Heart","Voyager Crest","Meeple Heart","Dark Star Heart","Jeweled Gauntlet Augment"],
    okAugs:["Gargoyle Augment","Sunfire Augment"],
    endComp:[
      {n:"Blitzcrank",role:"tank",items:[],row:0},{n:"Shen",role:"tank",items:["Warmog's Armor","Gargoyle Stoneplate"],row:0},
      {n:"Mighty Mech",role:"tank",items:[],row:0},{n:"Mordekaiser",role:"support",items:[],row:0},
      {n:"Rammus",role:"carry",items:["Sunfire Cape","Gargoyle Stoneplate","Bramble Vest"],row:1},
      {n:"Vex",role:"carry",items:["Jeweled Gauntlet","Rabadon's","Void Staff"],row:1},
      {n:"Bard",role:"support",items:[],row:1},{n:"Meepsie",role:"support",items:[],row:1},{n:"Karma",role:"support",items:[],row:1},
    ],
  },

  conduitMF: {
    name:"Conduit Miss Fortune", tier:"S", style:"Lvl 7 slow roll — 3★ MF + Viktor",
    core:["Miss Fortune","Viktor","Ornn"],
    support:["Maokai","Gragas","Aatrox","Rhaast","Zoe"],
    goal:{Conduit:3},
    carries:[
      { n:"Miss Fortune", role:"Primary flex carry",
        bis:["Rageblade","Giant Slayer","Infinity Edge"], holder:"Aatrox",
        note:"Conduit Mode. Rageblade stacks with her AS scaling." },
      { n:"Viktor", role:"AP secondary carry",
        bis:["Jeweled Gauntlet","Void Staff","Shojin"], holder:"Zoe",
        note:"Psionic Storm. Let them clump then cast." },
    ],
    placeholders:{ "Miss Fortune":{sub:"Aatrox",why:"AD item hold"}, "Viktor":{sub:"Zoe",why:"AP item hold"} },
    goodAugs:["Conduit Heart","Conduit Crest","Conduit Emblem","Rageblade Augment","IE Augment"],
    okAugs:["Shojin Augment","Warmog's Augment"],
    endComp:[
      {n:"Aatrox",role:"tank",items:[],row:0},{n:"Maokai",role:"tank",items:[],row:0},
      {n:"Ornn",role:"carry",items:["Sunfire Cape","Gargoyle Stoneplate","Warmog's Armor"],row:0},{n:"Gragas",role:"tank",items:[],row:0},
      {n:"Miss Fortune",role:"carry",items:["Rageblade","Giant Slayer","Infinity Edge"],row:1},
      {n:"Viktor",role:"carry",items:["Jeweled Gauntlet","Void Staff","Shojin"],row:1},
      {n:"Zoe",role:"support",items:[],row:1},{n:"Rhaast",role:"tank",items:[],row:1},
    ],
  },

  novaMasterYi: {
    name:"N.O.V.A. Master Yi", tier:"S", style:"Fast 8 — Level to 8 on 4-1",
    core:["Master Yi","Kindred","Fiora","Maokai"],
    support:["Shen","Urgot","Akali","Aatrox","Caitlyn"],
    goal:{NOVA:5},
    carries:[
      { n:"Master Yi", role:"Primary melee carry",
        bis:["Rageblade","Giant Slayer","Hand of Justice"], holder:"Akali",
        note:"Psi-State grants massive AS. Position middle row." },
      { n:"Kindred", role:"Ranged carry",
        bis:["Rageblade","Giant Slayer","Kraken's Fury"], holder:"Caitlyn",
        note:"Mark stacking + N.O.V.A. surge. Keep backline." },
    ],
    placeholders:{ "Master Yi":{sub:"Akali",why:"N.O.V.A.+Marauder hold"}, "Kindred":{sub:"Caitlyn",why:"N.O.V.A. ranged hold"} },
    goodAugs:["N.O.V.A. Heart","N.O.V.A. Emblem","Challenger Heart","Rageblade Augment","Giant Slayer Augment"],
    okAugs:["Bloodthirster Augment","IE Augment"],
    endComp:[
      {n:"Aatrox",role:"tank",items:[],row:0},{n:"Maokai",role:"tank",items:["Gargoyle Stoneplate","Sunfire Cape"],row:0},
      {n:"Shen",role:"tank",items:[],row:0},{n:"Urgot",role:"tank",items:[],row:0},
      {n:"Master Yi",role:"carry",items:["Rageblade","Giant Slayer","Hand of Justice"],row:1},
      {n:"Fiora",role:"carry",items:["Infinity Edge","Last Whisper","Bloodthirster"],row:1},
      {n:"Kindred",role:"carry",items:["Rageblade","Giant Slayer","Kraken's Fury"],row:1},
      {n:"Akali",role:"support",items:[],row:1},{n:"Caitlyn",role:"support",items:[],row:1},
    ],
  },

  meepleCorki: {
    name:"Meeple Corki", tier:"S", style:"Fast 8 — Level to 8 on 4-1/4-2",
    core:["Corki","Bard","Nunu"],
    support:["Poppy","Veigar","Gnar","Meepsie","Fizz","Rammus","Riven"],
    goal:{Meeple:7},
    carries:[
      { n:"Corki", role:"Primary AD carry",
        bis:["Rageblade","Nashor's Tooth","Jeweled Gauntlet"], holder:"Gnar",
        note:"Rageblade stacks with Meeple meep empowerment." },
      { n:"Bard", role:"Economy + AP utility",
        bis:["Shojin","Blue Buff","Morellonomicon"], holder:"Veigar",
        note:"UFO abducts enemies — free units each fight." },
    ],
    placeholders:{ "Corki":{sub:"Gnar",why:"Meeple+Sniper hold"}, "Bard":{sub:"Veigar",why:"Meeple AP hold"} },
    goodAugs:["Meeple Heart","Meeple Crest","Meeple Emblem","Rageblade Augment","Giant Slayer Augment"],
    okAugs:["Shojin Augment","Sunfire Augment"],
    endComp:[
      {n:"Poppy",role:"tank",items:[],row:0},{n:"Nunu",role:"tank",items:["Sunfire Cape","Gargoyle Stoneplate","Warmog's Armor"],row:0},
      {n:"Meepsie",role:"support",items:[],row:0},{n:"Veigar",role:"support",items:[],row:0},
      {n:"Corki",role:"carry",items:["Rageblade","Nashor's Tooth","Jeweled Gauntlet"],row:1},
      {n:"Fizz",role:"support",items:[],row:1},{n:"Gnar",role:"support",items:[],row:1},
      {n:"Rammus",role:"carry",items:["Sunfire Cape","Gargoyle Stoneplate"],row:1},
      {n:"Bard",role:"carry",items:["Shojin","Blue Buff","Morellonomicon"],row:1},
    ],
  },

  vanguardLeBlanc: {
    name:"Vanguard LeBlanc", tier:"S", style:"Standard — Level 8",
    core:["LeBlanc","Nunu","Karma","Leona"],
    support:["Illaoi","Meepsie","Mordekaiser","Zoe","Blitzcrank"],
    goal:{Vanguard:4},
    carries:[
      { n:"LeBlanc", role:"Primary AP carry",
        bis:["Jeweled Gauntlet","Void Staff","Shojin"], holder:"Mordekaiser",
        note:"Clone burst on cast. Arbiter trait gives tankiness." },
      { n:"Karma", role:"Secondary AP carry",
        bis:["Rabadon's","Jeweled Gauntlet","Spirit Visage"], holder:"Zoe",
        note:"Singularity splits damage between clustered enemies." },
    ],
    placeholders:{ "LeBlanc":{sub:"Mordekaiser",why:"AP hold"}, "Karma":{sub:"Zoe",why:"AP hold"} },
    goodAugs:["Vanguard Heart","Vanguard Emblem","Arbiter Heart","Jeweled Lotus","Rabadon's Augment"],
    okAugs:["Shojin Augment","Morello Augment"],
    endComp:[
      {n:"Leona",role:"tank",items:[],row:0},{n:"Nunu",role:"tank",items:["Warmog's Armor","Gargoyle Stoneplate"],row:0},
      {n:"Mordekaiser",role:"tank",items:[],row:0},{n:"Illaoi",role:"tank",items:[],row:0},
      {n:"Karma",role:"carry",items:["Rabadon's","Jeweled Gauntlet","Spirit Visage"],row:1},
      {n:"LeBlanc",role:"carry",items:["Jeweled Gauntlet","Void Staff","Shojin"],row:1},
      {n:"Zoe",role:"support",items:[],row:1},{n:"Meepsie",role:"support",items:[],row:1},{n:"Blitzcrank",role:"tank",items:[],row:1},
    ],
  },

  shepherdLeBlanc: {
    name:"Shepherd LeBlanc", tier:"S", style:"Fast 8 — Level to 8 on 4-1",
    core:["LeBlanc","Sona","Illaoi","Meepsie"],
    support:["Mighty Mech","Leona","Lissandra","Teemo","Blitzcrank"],
    goal:{Shepherd:5},
    carries:[
      { n:"LeBlanc", role:"Primary AP carry",
        bis:["Jeweled Gauntlet","Void Staff","Shojin"], holder:"Mordekaiser",
        note:"Shepherd buffs summons. Clone synergises perfectly." },
      { n:"Sona", role:"Utility + secondary carry",
        bis:["Shojin","Blue Buff","Spirit Visage"], holder:"Lissandra",
        note:"Command Mods persist 2 combats — choose carefully." },
    ],
    placeholders:{ "LeBlanc":{sub:"Mordekaiser",why:"AP hold"}, "Sona":{sub:"Lissandra",why:"Shepherd AP hold"} },
    goodAugs:["Shepherd Heart","Shepherd Emblem","Arbiter Heart","Psionic Heart"],
    okAugs:["Morello Augment","Blue Buff Augment"],
    endComp:[
      {n:"Leona",role:"tank",items:[],row:0},{n:"Mighty Mech",role:"tank",items:["Gargoyle Stoneplate","Warmog's Armor"],row:0},
      {n:"Illaoi",role:"tank",items:[],row:0},{n:"Blitzcrank",role:"tank",items:[],row:0},
      {n:"LeBlanc",role:"carry",items:["Jeweled Gauntlet","Void Staff","Shojin"],row:1},
      {n:"Sona",role:"carry",items:["Shojin","Blue Buff","Spirit Visage"],row:1},
      {n:"Meepsie",role:"support",items:[],row:1},{n:"Lissandra",role:"support",items:[],row:1},{n:"Teemo",role:"support",items:[],row:1},
    ],
  },

  rogueKaisa: {
    name:"Rogue Kai'Sa", tier:"S", style:"Lvl 7 slow roll — 3★ Kai'Sa + Fizz",
    core:["Kai'Sa","Fizz","Ornn","Rhaast"],
    support:["Karma","Rammus","Meepsie","Talon","Gwen"],
    goal:{Rogue:4},
    carries:[
      { n:"Kai'Sa", role:"Primary AD/AP hybrid carry",
        bis:["Rageblade","Giant Slayer","Infinity Edge"], holder:"Talon",
        note:"Rogue jumps to backline. Rageblade stacks = insane DPS." },
      { n:"Fizz", role:"Secondary AP carry",
        bis:["Jeweled Gauntlet","Void Staff","Shojin"], holder:"Gwen",
        note:"Meeple+Rogue. Meeps buff ability significantly." },
    ],
    placeholders:{ "Kai'Sa":{sub:"Talon",why:"Rogue hold"}, "Fizz":{sub:"Gwen",why:"Rogue AP hold"} },
    goodAugs:["Rogue Heart","Rogue Emblem","Meeple Heart","Dark Star Heart","Rageblade Augment"],
    okAugs:["IE Augment","Shojin Augment"],
    endComp:[
      {n:"Ornn",role:"tank",items:["Sunfire Cape","Gargoyle Stoneplate"],row:0},{n:"Rhaast",role:"tank",items:[],row:0},
      {n:"Rammus",role:"carry",items:["Sunfire Cape","Gargoyle Stoneplate"],row:0},{n:"Meepsie",role:"support",items:[],row:0},
      {n:"Kai'Sa",role:"carry",items:["Rageblade","Giant Slayer","Infinity Edge"],row:1},
      {n:"Fizz",role:"carry",items:["Jeweled Gauntlet","Void Staff","Shojin"],row:1},
      {n:"Karma",role:"support",items:[],row:1},{n:"Talon",role:"support",items:[],row:1},
    ],
  },

  // ── A-TIER ──────────────────────────────────────────────────────────────────

  voyagerIllaoi: {
    name:"Voyager Illaoi", tier:"A", style:"Lvl 7 slow roll — 3★ Illaoi",
    core:["Illaoi","Aurora","Fiora","Viktor"],
    support:["Mighty Mech","Karma","Mordekaiser","Pyke"],
    goal:{Voyager:4,Anima:3},
    carries:[
      { n:"Illaoi", role:"Primary tank carry",
        bis:["Sunfire Cape","Gargoyle Stoneplate","Warmog's Armor"], holder:"Mighty Mech",
        note:"3-star Illaoi is unstoppable with Voyager stacks and tentacles." },
      { n:"Viktor", role:"AP secondary carry",
        bis:["Jeweled Gauntlet","Void Staff","Shojin"], holder:"Mordekaiser",
        note:"Psionic Storm tracks clustered enemies." },
    ],
    placeholders:{ "Illaoi":{sub:"Mighty Mech",why:"Tank hold"}, "Viktor":{sub:"Mordekaiser",why:"AP hold"} },
    goodAugs:["Voyager Heart","Anima Heart","Vanguard Heart"],
    okAugs:["Sunfire Augment","Gargoyle Augment"],
    endComp:[
      {n:"Illaoi",role:"carry",items:["Sunfire Cape","Gargoyle Stoneplate","Warmog's Armor"],row:0},
      {n:"Aurora",role:"support",items:[],row:0},{n:"Mighty Mech",role:"tank",items:[],row:0},
      {n:"Mordekaiser",role:"support",items:[],row:0},
      {n:"Fiora",role:"carry",items:["Infinity Edge","Last Whisper"],row:1},
      {n:"Viktor",role:"carry",items:["Jeweled Gauntlet","Void Staff","Shojin"],row:1},
      {n:"Karma",role:"support",items:[],row:1},{n:"Pyke",role:"support",items:[],row:1},
    ],
  },

  oracleTahmKench: {
    name:"Oracle Tahm Kench", tier:"A", style:"Fast 9 — Level to 9",
    core:["Tahm Kench","Graves","Vex","Flora"],
    support:["Morgana","Shen","Maokai","Akali","Aatrox"],
    goal:{Brawler:4,NOVA:3},
    carries:[
      { n:"Tahm Kench", role:"Tank carry",
        bis:["Sunfire Cape","Warmog's Armor","Gargoyle Stoneplate"], holder:"Maokai",
        note:"Oracle trait gives team scaling. Devour protects key allies." },
      { n:"Graves", role:"Ranged carry",
        bis:["Rageblade","Giant Slayer","Last Whisper"], holder:"Aatrox",
        note:"Factory New upgrades on each combat — snowballs hard." },
    ],
    placeholders:{ "Tahm Kench":{sub:"Maokai",why:"Tank hold"}, "Graves":{sub:"Aatrox",why:"N.O.V.A. hold"} },
    goodAugs:["Brawler Heart","N.O.V.A. Heart","Challenger Heart"],
    okAugs:["Rageblade Augment","Giant Slayer Augment"],
    endComp:[
      {n:"Tahm Kench",role:"carry",items:["Sunfire Cape","Warmog's Armor","Gargoyle Stoneplate"],row:0},
      {n:"Morgana",role:"support",items:[],row:0},{n:"Shen",role:"tank",items:[],row:0},
      {n:"Maokai",role:"tank",items:[],row:0},
      {n:"Graves",role:"carry",items:["Rageblade","Giant Slayer","Last Whisper"],row:1},
      {n:"Vex",role:"carry",items:["Jeweled Gauntlet","Rabadon's"],row:1},
      {n:"Fiora",role:"support",items:[],row:1},{n:"Akali",role:"support",items:[],row:1},{n:"Aatrox",role:"support",items:[],row:1},
    ],
  },

  marauderMasterYi: {
    name:"Marauder Master Yi", tier:"A", style:"Fast 9 — Level to 9",
    core:["Master Yi","Fiora","Sona","Graves"],
    support:["Blitzcrank","Shen","Vex","Nunu","Rammus"],
    goal:{Marauder:4,Psionic:2},
    carries:[
      { n:"Master Yi", role:"Primary melee carry",
        bis:["Rageblade","Last Whisper","Hand of Justice"], holder:"Fiora",
        note:"Psi-State + Marauder AD stacking makes Yi a monster." },
      { n:"Graves", role:"Ranged carry",
        bis:["Rageblade","Giant Slayer","Kraken's Fury"], holder:"Blitzcrank",
        note:"Factory New upgrades stack each combat." },
    ],
    placeholders:{ "Master Yi":{sub:"Fiora",why:"Marauder hold"}, "Graves":{sub:"Blitzcrank",why:"Ranged hold"} },
    goodAugs:["Marauder Heart","Psionic Heart","N.O.V.A. Heart"],
    okAugs:["Rageblade Augment","IE Augment"],
    endComp:[
      {n:"Blitzcrank",role:"tank",items:[],row:0},{n:"Shen",role:"tank",items:["Warmog's Armor"],row:0},
      {n:"Nunu",role:"tank",items:[],row:0},{n:"Rammus",role:"support",items:[],row:0},
      {n:"Master Yi",role:"carry",items:["Rageblade","Last Whisper","Hand of Justice"],row:1},
      {n:"Fiora",role:"carry",items:["Infinity Edge","Bloodthirster"],row:1},
      {n:"Sona",role:"support",items:[],row:1},{n:"Graves",role:"carry",items:["Rageblade","Giant Slayer","Kraken's Fury"],row:1},
      {n:"Vex",role:"support",items:[],row:1},
    ],
  },

  timebreakerEzreal: {
    name:"Timebreaker Ezreal", tier:"A", style:"Lvl 5 slow roll — 3★ Ezreal",
    core:["Ezreal","Riven","Cho'Gath","Pantheon"],
    support:["Jhin","Tahm Kench","Xayah","Maokai","Milio"],
    goal:{Timebreaker:4,Bastion:2},
    carries:[
      { n:"Ezreal", role:"Primary carry",
        bis:["Rageblade","Jeweled Gauntlet","Shojin"], holder:"Caitlyn",
        note:"Drone stacks on every takedown. Get him to 3-star ASAP." },
      { n:"Riven", role:"Secondary melee carry",
        bis:["Infinity Edge","Last Whisper","Bloodthirster"], holder:"Talon",
        note:"Stargazer+Challenger. Crit empowers her final slash knock-up." },
    ],
    placeholders:{ "Ezreal":{sub:"Caitlyn",why:"Timebreaker hold"}, "Riven":{sub:"Talon",why:"Rogue hold"} },
    goodAugs:["Timebreaker Heart","Bastion Heart","Challenger Heart"],
    okAugs:["Rageblade Augment","Shojin Augment"],
    endComp:[
      {n:"Cho'Gath",role:"tank",items:["Warmog's Armor","Bramble Vest"],row:0},
      {n:"Pantheon",role:"tank",items:["Gargoyle Stoneplate"],row:0},
      {n:"Tahm Kench",role:"tank",items:[],row:0},{n:"Maokai",role:"tank",items:[],row:0},
      {n:"Ezreal",role:"carry",items:["Rageblade","Jeweled Gauntlet","Shojin"],row:1},
      {n:"Riven",role:"carry",items:["Infinity Edge","Last Whisper","Bloodthirster"],row:1},
      {n:"Jhin",role:"carry",items:[],row:1},{n:"Xayah",role:"support",items:[],row:1},{n:"Milio",role:"support",items:[],row:1},
    ],
  },

  arbiterDiana: {
    name:"Arbiter Diana", tier:"A", style:"Lvl 7 slow roll — 3★ Diana",
    core:["Diana","Illaoi","Aurora","LeBlanc"],
    support:["Bia & Bayin","Meepsie","Jinx","Leona"],
    goal:{Arbiter:3,Challenger:3},
    carries:[
      { n:"Diana", role:"Primary AP carry",
        bis:["Jeweled Gauntlet","Void Staff","Rabadon's"], holder:"Leona",
        note:"3-star Diana with orbs can one-shot entire boards." },
      { n:"LeBlanc", role:"Secondary AP carry",
        bis:["Jeweled Gauntlet","Shojin","Void Staff"], holder:"Mordekaiser",
        note:"Arbiter trait gives surprising tankiness." },
    ],
    placeholders:{ "Diana":{sub:"Leona",why:"Arbiter hold"}, "LeBlanc":{sub:"Mordekaiser",why:"AP hold"} },
    goodAugs:["Arbiter Heart","Challenger Heart","Rogue Heart"],
    okAugs:["Jeweled Gauntlet Augment","Void Staff Augment"],
    endComp:[
      {n:"Leona",role:"tank",items:[],row:0},{n:"Illaoi",role:"tank",items:["Sunfire Cape","Gargoyle Stoneplate"],row:0},
      {n:"Bia & Bayin",role:"support",items:[],row:0},{n:"Meepsie",role:"support",items:[],row:0},
      {n:"Diana",role:"carry",items:["Jeweled Gauntlet","Void Staff","Rabadon's"],row:1},
      {n:"Aurora",role:"carry",items:[],row:1},{n:"LeBlanc",role:"carry",items:["Jeweled Gauntlet","Shojin","Void Staff"],row:1},
      {n:"Jinx",role:"support",items:[],row:1},
    ],
  },

  mechaAurelionSol: {
    name:"Mecha Aurelion Sol", tier:"A", style:"Fast 8 — Level to 8 on 4-1",
    core:["A.Sol","Mighty Mech","Urgot","Tahm Kench"],
    support:["Bard","Blitzcrank","Graves","Morgana","Shen"],
    goal:{Mecha:3},
    carries:[
      { n:"A.Sol", role:"Primary AP carry",
        bis:["Rabadon's","Giant Slayer","Jeweled Gauntlet"], holder:"Viktor",
        note:"Deathbeam pierces the whole board. Never Shojin on Mecha." },
      { n:"Mighty Mech", role:"Frontline anchor",
        bis:["Sterak's Gage","Gargoyle Stoneplate","Titan's Resolve"], holder:"Urgot",
        note:"2 board slots when transformed. Position row 2 col 3-4." },
    ],
    placeholders:{ "A.Sol":{sub:"Viktor",why:"AP hold"}, "Mighty Mech":{sub:"Urgot",why:"Mecha frontline"} },
    goodAugs:["Mecha Heart","Conduit Heart","Rabadon's Augment","Giant Slayer Augment"],
    okAugs:["Brawler Heart","Gargoyle Augment"],
    endComp:[
      {n:"Urgot",role:"tank",items:["Gargoyle Stoneplate","Bramble Vest"],row:0},
      {n:"Mighty Mech",role:"carry",items:["Sterak's Gage","Gargoyle Stoneplate","Titan's Resolve"],row:0},
      {n:"Tahm Kench",role:"tank",items:[],row:0},{n:"Shen",role:"tank",items:[],row:0},
      {n:"A.Sol",role:"carry",items:["Rabadon's","Giant Slayer","Jeweled Gauntlet"],row:1},
      {n:"Bard",role:"support",items:[],row:1},{n:"Blitzcrank",role:"tank",items:[],row:1},
      {n:"Graves",role:"carry",items:[],row:1},{n:"Morgana",role:"support",items:[],row:1},
    ],
  },

  mechaMightyMech: {
    name:"Mecha The Mighty Mech", tier:"A", style:"Fast 8 — Level to 8 on 4-1",
    core:["Mighty Mech","A.Sol","Master Yi","Urgot"],
    support:["Morgana","Sona","Tahm Kench","Viktor","Pyke"],
    goal:{Mecha:3},
    carries:[
      { n:"A.Sol", role:"Primary AP carry",
        bis:["Jeweled Gauntlet","Rabadon's","Giant Slayer"], holder:"Viktor",
        note:"Deathbeam. Never Shojin — Mecha form doesn't auto." },
      { n:"Master Yi", role:"Psionic melee carry",
        bis:["Rageblade","Last Whisper","Hand of Justice"], holder:"Urgot",
        note:"Psionic Mecha flex. Psi-State + Mecha AS buff." },
    ],
    placeholders:{ "A.Sol":{sub:"Viktor",why:"AP hold"}, "Mighty Mech":{sub:"Urgot",why:"Tank hold"} },
    goodAugs:["Mecha Heart","Psionic Heart","Giant Slayer Augment","Rabadon's Augment"],
    okAugs:["Brawler Heart","Gargoyle Augment"],
    endComp:[
      {n:"Urgot",role:"tank",items:["Gargoyle Stoneplate","Bramble Vest"],row:0},
      {n:"Mighty Mech",role:"carry",items:["Sterak's Gage","Gargoyle Stoneplate","Titan's Resolve"],row:0},
      {n:"Tahm Kench",role:"tank",items:[],row:0},{n:"Morgana",role:"support",items:[],row:0},
      {n:"A.Sol",role:"carry",items:["Jeweled Gauntlet","Rabadon's","Giant Slayer"],row:1},
      {n:"Master Yi",role:"carry",items:["Rageblade","Last Whisper","Hand of Justice"],row:1},
      {n:"Sona",role:"support",items:[],row:1},{n:"Viktor",role:"support",items:[],row:1},{n:"Pyke",role:"support",items:[],row:1},
    ],
  },

  spaceGrooveNami: {
    name:"Space Groove Nami", tier:"A", style:"Standard — Level 8",
    core:["Nami","Ornn","Blitzcrank","Samira"],
    support:["Morgana","Shen","Gwen","Nasus","Teemo"],
    goal:{SpaceGroove:7},
    carries:[
      { n:"Samira", role:"Primary AD carry",
        bis:["Infinity Edge","Last Whisper","Bloodthirster"], holder:"Nasus",
        note:"Space Groove buff doubles her damage after 3s." },
      { n:"Nami", role:"AP utility carry",
        bis:["Shojin","Morellonomicon","Spirit Visage"], holder:"Teemo",
        note:"Tidal Wave CC chains with Groove buff timing." },
    ],
    placeholders:{ "Samira":{sub:"Nasus",why:"SpaceGroove+Vanguard hold"}, "Nami":{sub:"Teemo",why:"SpaceGroove hold"} },
    goodAugs:["Space Groove Heart","Space Groove Emblem","Sniper Heart","IE Augment"],
    okAugs:["Bloodthirster Augment","Morello Augment"],
    endComp:[
      {n:"Nasus",role:"tank",items:[],row:0},{n:"Ornn",role:"tank",items:["Sunfire Cape","Gargoyle Stoneplate"],row:0},
      {n:"Blitzcrank",role:"tank",items:[],row:0},{n:"Morgana",role:"support",items:[],row:0},
      {n:"Samira",role:"carry",items:["Infinity Edge","Last Whisper","Bloodthirster"],row:1},
      {n:"Nami",role:"carry",items:["Shojin","Morellonomicon","Spirit Visage"],row:1},
      {n:"Shen",role:"tank",items:[],row:1},{n:"Gwen",role:"support",items:[],row:1},{n:"Teemo",role:"support",items:[],row:1},
    ],
  },

  novaRammus: {
    name:"N.O.V.A. Rammus", tier:"A", style:"Fast 8 — Level to 8 on 4-1",
    core:["Rammus","Kindred","Fiora","Maokai"],
    support:["Shen","Ornn","Akali","Aatrox","Caitlyn"],
    goal:{NOVA:5,Voyager:3},
    carries:[
      { n:"Rammus", role:"Tank carry",
        bis:["Sunfire Cape","Gargoyle Stoneplate","Bramble Vest"], holder:"Mordekaiser",
        note:"Voyager + N.O.V.A. buffs turn Rammus into a punching sponge." },
      { n:"Kindred", role:"Ranged carry",
        bis:["Rageblade","Giant Slayer","Kraken's Fury"], holder:"Caitlyn",
        note:"Rageblade core same as N.O.V.A. Kindred." },
    ],
    placeholders:{ "Rammus":{sub:"Mordekaiser",why:"Tank hold"}, "Kindred":{sub:"Caitlyn",why:"N.O.V.A. hold"} },
    goodAugs:["N.O.V.A. Heart","Voyager Heart","Challenger Heart","Rageblade Augment"],
    okAugs:["Giant Slayer Augment","Gargoyle Augment"],
    endComp:[
      {n:"Aatrox",role:"tank",items:[],row:0},{n:"Maokai",role:"tank",items:["Gargoyle Stoneplate","Sunfire Cape"],row:0},
      {n:"Shen",role:"tank",items:[],row:0},{n:"Ornn",role:"tank",items:[],row:0},
      {n:"Rammus",role:"carry",items:["Sunfire Cape","Gargoyle Stoneplate","Bramble Vest"],row:1},
      {n:"Kindred",role:"carry",items:["Rageblade","Giant Slayer","Kraken's Fury"],row:1},
      {n:"Fiora",role:"carry",items:["Infinity Edge","Last Whisper"],row:1},
      {n:"Akali",role:"support",items:[],row:1},{n:"Caitlyn",role:"support",items:[],row:1},
    ],
  },

  brawlerMaokai: {
    name:"Brawler Maokai", tier:"A", style:"Lvl 7 slow roll — 3★ Maokai",
    core:["Maokai","Rhaast","Riven","Lulu"],
    support:["Jax","Pantheon","Aatrox","Talon"],
    goal:{Brawler:4,NOVA:3},
    carries:[
      { n:"Maokai", role:"Primary tank carry",
        bis:["Sunfire Cape","Gargoyle Stoneplate","Warmog's Armor"], holder:"Aatrox",
        note:"3-star Maokai with sapling spam. N.O.V.A. Strike hits all enemies." },
      { n:"Riven", role:"Secondary melee carry",
        bis:["Infinity Edge","Last Whisper","Bloodthirster"], holder:"Talon",
        note:"Stargazer+Challenger crit synergy." },
    ],
    placeholders:{ "Maokai":{sub:"Aatrox",why:"N.O.V.A. hold"}, "Riven":{sub:"Talon",why:"Rogue hold"} },
    goodAugs:["Brawler Heart","N.O.V.A. Heart","Challenger Heart"],
    okAugs:["Sunfire Augment","Gargoyle Augment"],
    endComp:[
      {n:"Maokai",role:"carry",items:["Sunfire Cape","Gargoyle Stoneplate","Warmog's Armor"],row:0},
      {n:"Rhaast",role:"tank",items:[],row:0},{n:"Jax",role:"tank",items:[],row:0},{n:"Pantheon",role:"tank",items:[],row:0},
      {n:"Riven",role:"carry",items:["Infinity Edge","Last Whisper","Bloodthirster"],row:1},
      {n:"Lulu",role:"support",items:[],row:1},{n:"Aatrox",role:"tank",items:[],row:1},{n:"Talon",role:"support",items:[],row:1},
    ],
  },

};
