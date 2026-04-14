const { app, BrowserWindow } = require('electron');
const path = require('path');
const https = require('https');
const http = require('http');
const fs = require('fs');

const ITEM_BASE  = 'https://ap.tft.tools/img/items_s14/';
const ART_BASE   = 'https://ap.tft.tools/img/new17/item/';
const TRAIT_BASE = 'https://ap.tft.tools/static/trait-icons/';
const CDN_BASE   = 'https://raw.communitydragon.org/latest/game/assets/maps/particles/tft/item_icons/standard/';

const ASSETS = [
  // ITEMS
  ['item_rageblade.png',          ITEM_BASE+'GuinsoosRageblade.png'],
  ['item_sunfire-cape.png',       ITEM_BASE+'RedBuff.png'],
  ['item_jeweled-gauntlet.png',   ITEM_BASE+'JeweledGauntlet.png'],
  ['item_gargoyle-stoneplate.png',ITEM_BASE+'GargoyleStoneplate.png'],
  ['item_spiritvisage.png',       ITEM_BASE+'Redemption.png'],
  ['item_giant-slayer.png',       ITEM_BASE+'MadredsBloodrazor.png'],
  ['item_warmogs-armor.png',      ITEM_BASE+'WarmogsArmor.png'],
  ['item_infinity-edge.png',      ITEM_BASE+'InfinityEdge.png'],
  ['item_thieves-gloves.png',     ITEM_BASE+'ThiefsGloves.png'],
  ['item_spear-of-shojin2.png',   ITEM_BASE+'SpearOfShojin.png'],
  ['item_hand-of-justice.png',    ITEM_BASE+'UnstableConcoction.png'],
  ['item_bloodthirster.png',      ITEM_BASE+'Bloodthirster.png'],
  ['item_guardbreaker.png',       ITEM_BASE+'PowerGauntlet.png'],
  ['item_adaptive-helm.png',      ITEM_BASE+'AdaptiveHelm.png'],
  ['item_dragons-claw.png',       ITEM_BASE+'DragonsClaw.png'],
  ['item_fimbulwinter.png',       ITEM_BASE+'FrozenHeart.png'],
  ['item_krakensfury.png',        ITEM_BASE+'RunaansHurricane.png'],
  ['item_steadfast-hammer.png',   ITEM_BASE+'NightHarvester.png'],
  ['item_bramble-vest.png',       ITEM_BASE+'BrambleVest.png'],
  ['item_steraks-gage.png',       ITEM_BASE+'SteraksGage.png'],
  ['item_hextech-gunblade.png',   ITEM_BASE+'HextechGunblade.png'],
  ['item_titans-resolve.png',     ITEM_BASE+'TitansResolve.png'],
  ['item_nashors-tooth.png',      ITEM_BASE+'Leviathan.png'],
  ['item_edge-of-night.png',      ITEM_BASE+'GuardianAngel.png'],
  ['item_rabadons-deathcap.png',  ITEM_BASE+'RabadonsDeathcap.png'],
  ['item_deathblade.png',         ITEM_BASE+'Deathblade.png'],
  ['item_blue-buff.png',          ITEM_BASE+'BlueBuff.png'],
  ['item_archangels-staff.png',   ITEM_BASE+'ArchangelsStaff.png'],
  ['item_last-whisper.png',       ITEM_BASE+'LastWhisper.png'],
  ['item_crownguard.png',         ITEM_BASE+'Crownguard.png'],
  ['item_morellonomicon.png',     ITEM_BASE+'Morellonomicon.png'],
  ['item_evenshroud.png',         ITEM_BASE+'SpectralGauntlet.png'],
  ['item_red-buff.png',           ITEM_BASE+'Artifact_RapidFirecannon.png'],
  ['item_quicksilver.png',        ITEM_BASE+'Quicksilver.png'],
  ['item_ionic-spark.png',        ITEM_BASE+'IonicSpark.png'],
  // ARTIFACTS — all 47 Set 17 artifacts
  // 21 confirmed from items_s14 (ap.tft.tools)
  ['art_blighting-jewel1.png',        ITEM_BASE+'Artifact_BlightingJewel.png'],
  ['art_cappa-juice.png',             ITEM_BASE+'Artifact_CappaJuice.png'],
  ['art_deathfire-grasp.png',         ITEM_BASE+'Artifact_DeathfireGrasp.png'],
  ['art_fishbones1.png',              ITEM_BASE+'Artifact_Fishbones.png'],
  ['art_flickerblade.png',            ITEM_BASE+'Artifact_Flickerblade.png'],
  ['art_gamblers-blade2.png',         ITEM_BASE+'Artifact_GamblersBlade.png'],
  ['art_horizon-focus1.png',          ITEM_BASE+'Artifact_HorizonFocus.png'],
  ['art_innervating-locket1.png',     ITEM_BASE+'Artifact_InnervatingLocket.png'],
  ['art_lich-bane1.png',              ITEM_BASE+'Artifact_LichBane.png'],
  ['art_ludens-tempest1.png',         ITEM_BASE+'Artifact_LudensTempest.png'],
  ['art_moguls-mail2.png',            ITEM_BASE+'Artifact_MogulsMail.png'],
  ['art_prowlers-claw1.png',          ITEM_BASE+'Artifact_ProwlersClaw.png'],
  ['art_rapid-firecannon1.png',       ITEM_BASE+'Artifact_RapidFirecannon.png'],
  ['art_seekers-armguard1.png',       ITEM_BASE+'Artifact_SeekersArmguard.png'],
  ['art_silvermere-dawn1.png',        ITEM_BASE+'Artifact_SilvermereDawn.png'],
  ['art_spectral-cutlass1.png',       ITEM_BASE+'Artifact_SpectralCutlass.png'],
  ['art_statikk-shiv.png',            ITEM_BASE+'Artifact_StatikkShiv.png'],
  ['art_talisman-of-ascension1.png',  ITEM_BASE+'Artifact_TalismanOfAscension.png'],
  ['art_unending-despair1.png',       ITEM_BASE+'Artifact_UnendingDespair.png'],
  ['art_wits-end1.png',               ITEM_BASE+'Artifact_WitsEnd.png'],
  ['art_snipers-focus.png',           ITEM_BASE+'Artifact_SnipersFocus.png'],
  // 26 new Set 17 exclusives — CommunityDragon /standard/ folder
  ['art_aegis-of-dawn.png',           ITEM_BASE+'Artifact_AegisOfDawn.png'],
  ['art_aegis-of-dusk.png',           ITEM_BASE+'Artifact_AegisOfDusk.png'],
  ['art_dawncore.png',                ITEM_BASE+'Artifact_Dawncore.png'],
  ['art_deaths-defiance.png',         ITEM_BASE+'Artifact_DeathsDefiance.png'],
  ['art_eternal-pact.png',            ITEM_BASE+'Artifact_EternalPact.png'],
  ['art_gold-collector.png',          ITEM_BASE+'Artifact_GoldCollector.png'],
  ['art_hellfire-hatchet.png',        ITEM_BASE+'Artifact_HellfireHatchet.png'],
  ['art_hullcrusher.png',             ITEM_BASE+'Artifact_Hullcrusher.png'],
  ['art_indomitable-gauntlet.png',    ITEM_BASE+'Artifact_IndomitableGauntlet.png'],
  ['art_infinity-force.png',          ITEM_BASE+'Artifact_InfinityForce.png'],
  ['art_lesser-mirrored-persona.png', ITEM_BASE+'Artifact_LesserMirroredPersona.png'],
  ['art_lightshield-crest1.png',      ITEM_BASE+'Artifact_LightshieldCrest.png'],
  ['art_manazane.png',                ITEM_BASE+'Artifact_Manazane.png'],
  ['art_mending-echoes.png',          ITEM_BASE+'Artifact_MendingEchoes.png'],
  ['art_mirrored-persona.png',        ITEM_BASE+'Artifact_MirroredPersona.png'],
  ['art_mittens1.png',                ITEM_BASE+'Artifact_Mittens.png'],
  ['art_shadow-puppet.png',           ITEM_BASE+'Artifact_ShadowPuppet.png'],
  ['art_suspicious-trench-coat1.png', ITEM_BASE+'Artifact_SuspiciousTrenchCoat.png'],
  ['art_the-darkin-aegis.png',        ITEM_BASE+'Artifact_TheDarkinAegis.png'],
  ['art_the-darkin-bow.png',          ITEM_BASE+'Artifact_TheDarkinBow.png'],
  ['art_the-darkin-scythe.png',       ITEM_BASE+'Artifact_TheDarkinScythe.png'],
  ['art_the-darkin-staff.png',        ITEM_BASE+'Artifact_TheDarkinStaff.png'],
  ['art_titanic-hydra.png',           ITEM_BASE+'Artifact_TitanicHydra.png'],
  ['art_tricksters-glass.png',        ITEM_BASE+'Artifact_TricksterGlass.png'],
  ['art_void-gauntlet.png',           ITEM_BASE+'Artifact_VoidGauntlet.png'],
  ['art_zhonyas-paradox.png',         ITEM_BASE+'Artifact_ZhonyasParadox.png'],
  // COMPONENT IMAGES (for recipe popup)
  ['comp_bfsword.png',       ITEM_BASE+'BFSword.png'],
  ['comp_chainvest.png',     ITEM_BASE+'ChainVest.png'],
  ['comp_giantsbelt.png',    ITEM_BASE+'GiantsBelt.png'],
  ['comp_nlr.png',           ITEM_BASE+'NeedlesslyLargeRod.png'],
  ['comp_negatron.png',      ITEM_BASE+'NegatronCloak.png'],
  ['comp_recurvebow.png',    ITEM_BASE+'RecurveBow.png'],
  ['comp_sparringgloves.png',ITEM_BASE+'SparringGloves.png'],
  ['comp_spatula.png',       ITEM_BASE+'Spatula.png'],
  ['comp_tear.png',          ITEM_BASE+'TearOfTheGoddess.png'],
  // EMBLEMS
  ['emb_nova.svg',         TRAIT_BASE+'new17_tft17_drx_w.svg'],
  ['emb_meeple.svg',       TRAIT_BASE+'new17_tft17_astronaut_w.svg'],
  ['emb_dark-star.svg',    TRAIT_BASE+'new17_tft17_darkstar_w.svg'],
  ['emb_anima.svg',        TRAIT_BASE+'new17_tft17_animasquad_w.svg'],
  ['emb_arbiter.svg',      TRAIT_BASE+'new17_tft17_admin_w.svg'],
  ['emb_space-groove.svg', TRAIT_BASE+'new17_tft17_spacegroove_w.svg'],
  ['emb_primordian.svg',   TRAIT_BASE+'new17_tft17_primordian_w.svg'],
  ['emb_stargazer.svg',    TRAIT_BASE+'new17_tft17_stargazer_w.svg'],
  ['emb_timebreaker.svg',  TRAIT_BASE+'new17_tft17_timebreaker_w.svg'],
  ['emb_mecha.svg',        TRAIT_BASE+'new17_tft17_mecha_w.svg'],
  ['emb_bastion.svg',      TRAIT_BASE+'new17_tft17_resisttank_w.svg'],
  ['emb_brawler.svg',      TRAIT_BASE+'new17_tft17_hptank_w.svg'],
  ['emb_challenger.svg',   TRAIT_BASE+'new17_tft17_challenger_w.svg'],
  ['emb_rogue.svg',        TRAIT_BASE+'new17_tft17_assassintrait_w.svg'],
  ['emb_vanguard.svg',     TRAIT_BASE+'new17_tft17_shieldtank_w.svg'],
  ['emb_marauder.svg',     TRAIT_BASE+'new17_tft17_marauder_w.svg'],
  ['emb_shepherd.svg',     TRAIT_BASE+'new17_tft17_summontrait_w.svg'],
  ['emb_voyager.svg',      TRAIT_BASE+'new17_tft17_voyager_w.svg'],
  ['emb_replicator.svg',   TRAIT_BASE+'new17_tft17_aptrait_w.svg'],
  ['emb_psionic.svg',      TRAIT_BASE+'new17_tft17_psionic_w.svg'],
  ['emb_fateweaver.svg',   TRAIT_BASE+'new17_tft17_fateweaver_w.svg'],
  ['emb_sniper.svg',       TRAIT_BASE+'new17_tft17_rangedtrait_w.svg'],
  ['emb_conduit.svg',      TRAIT_BASE+'new17_tft17_channeler_w.svg'],
];

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    // Skip if exists AND has content (>100 bytes)
    if (fs.existsSync(dest)) {
      const sz = fs.statSync(dest).size;
      if (sz > 100) return resolve(true);
      fs.unlinkSync(dest); // delete empty/failed files
    }
    const file = fs.createWriteStream(dest);
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(true); });
      } else {
        file.close(); fs.unlink(dest, () => {}); resolve(false);
      }
    }).on('error', () => {
      file.close(); fs.unlink(dest, () => {}); resolve(false);
    });
  });
}

async function downloadAssets() {
  const dir = path.join(__dirname, 'assets');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  const needed = ASSETS.filter(([n]) => !fs.existsSync(path.join(dir, n)));
  if (!needed.length) return;
  console.log(`Downloading ${needed.length} assets...`);
  for (let i = 0; i < needed.length; i += 8) {
    await Promise.all(needed.slice(i, i+8).map(([n, url]) =>
      downloadFile(url, path.join(dir, n))
    ));
  }
  console.log('Assets ready.');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1400, height: 900, minWidth: 1000, minHeight: 700,
    title: 'Murthwaite Gaming — TFT Advisor',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { nodeIntegration: false, contextIsolation: true },
    backgroundColor: '#080608',
    show: false,
  });
  win.loadFile('index.html');
  win.once('ready-to-show', () => win.show());
  win.setMenuBarVisibility(false);
}

app.whenReady().then(async () => {
  await downloadAssets();
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
