@echo off
echo Murthwaite Gaming - Downloading TFT Assets...
if not exist assets mkdir assets

set MOB=https://cdn.mobalytics.gg/assets/tft/images/game-items/set17
set SYN=https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set17

REM ── ITEMS ──
curl -s "%MOB%/guinsoos-rageblade.png?v=5" -o assets\item_guinsoos-rageblade.png
curl -s "%MOB%/sunfire-cape.png?v=5" -o assets\item_sunfire-cape.png
curl -s "%MOB%/jeweled-gauntlet.png?v=5" -o assets\item_jeweled-gauntlet.png
curl -s "%MOB%/gargoyle-stoneplate.png?v=5" -o assets\item_gargoyle-stoneplate.png
curl -s "%MOB%/spiritvisage.png?v=5" -o assets\item_spiritvisage.png
curl -s "%MOB%/giant-slayer.png?v=5" -o assets\item_giant-slayer.png
curl -s "%MOB%/warmogs-armor.png?v=5" -o assets\item_warmogs-armor.png
curl -s "%MOB%/infinity-edge.png?v=5" -o assets\item_infinity-edge.png
curl -s "%MOB%/thieves-gloves.png?v=5" -o assets\item_thieves-gloves.png
curl -s "%MOB%/spear-of-shojin2.png?v=5" -o assets\item_spear-of-shojin2.png
curl -s "%MOB%/hand-of-justice.png?v=5" -o assets\item_hand-of-justice.png
curl -s "%MOB%/bloodthirster.png?v=5" -o assets\item_bloodthirster.png
curl -s "%MOB%/guardbreaker.png?v=5" -o assets\item_guardbreaker.png
curl -s "%MOB%/adaptive-helm.png?v=5" -o assets\item_adaptive-helm.png
curl -s "%MOB%/dragons-claw.png?v=5" -o assets\item_dragons-claw.png
curl -s "%MOB%/fimbulwinter.png?v=5" -o assets\item_fimbulwinter.png
curl -s "%MOB%/krakensfury.png?v=5" -o assets\item_krakensfury.png
curl -s "%MOB%/steadfast-hammer.png?v=5" -o assets\item_steadfast-hammer.png
curl -s "%MOB%/bramble-vest.png?v=5" -o assets\item_bramble-vest.png
curl -s "%MOB%/sterak%27s-gage.png?v=5" -o assets\item_steraks-gage.png
curl -s "%MOB%/hextech-gunblade.png?v=5" -o assets\item_hextech-gunblade.png
curl -s "%MOB%/titans-resolve.png?v=5" -o assets\item_titans-resolve.png
curl -s "%MOB%/nashor%27s-tooth.png?v=5" -o assets\item_nashors-tooth.png
curl -s "%MOB%/edge-of-night.png?v=5" -o assets\item_edge-of-night.png
curl -s "%MOB%/rabadons-deathcap.png?v=5" -o assets\item_rabadons-deathcap.png
curl -s "%MOB%/deathblade.png?v=5" -o assets\item_deathblade.png
curl -s "%MOB%/blue-buff.png?v=5" -o assets\item_blue-buff.png
curl -s "%MOB%/archangels-staff.png?v=5" -o assets\item_archangels-staff.png
curl -s "%MOB%/last-whisper.png?v=5" -o assets\item_last-whisper.png
curl -s "%MOB%/crownguard.png?v=5" -o assets\item_crownguard.png
curl -s "%MOB%/morellonomicon.png?v=5" -o assets\item_morellonomicon.png
curl -s "%MOB%/evenshroud.png?v=5" -o assets\item_evenshroud.png
curl -s "%MOB%/red-buff.png?v=5" -o assets\item_red-buff.png
curl -s "%MOB%/quicksilver.png?v=5" -o assets\item_quicksilver.png
curl -s "%MOB%/ionic-spark.png?v=5" -o assets\item_ionic-spark.png

REM ── ARTIFACTS ──
curl -s "%MOB%/aegis-of-dawn.png?v=5" -o assets\art_aegis-of-dawn.png
curl -s "%MOB%/aegis-of-dusk.png?v=5" -o assets\art_aegis-of-dusk.png
curl -s "%MOB%/blighting-jewel1.png?v=5" -o assets\art_blighting-jewel1.png
curl -s "%MOB%/cappa-juice.png?v=5" -o assets\art_cappa-juice.png
curl -s "%MOB%/dawncore.png?v=5" -o assets\art_dawncore.png
curl -s "%MOB%/deathfire-grasp.png?v=5" -o assets\art_deathfire-grasp.png
curl -s "%MOB%/deaths-defiance.png?v=5" -o assets\art_deaths-defiance.png
curl -s "%MOB%/eternal-pact.png?v=5" -o assets\art_eternal-pact.png
curl -s "%MOB%/fishbones1.png?v=5" -o assets\art_fishbones1.png
curl -s "%MOB%/flickerblade.png?v=5" -o assets\art_flickerblade.png
curl -s "%MOB%/gamblers-blade2.png?v=5" -o assets\art_gamblers-blade2.png
curl -s "%MOB%/gold-collector.png?v=5" -o assets\art_gold-collector.png
curl -s "%MOB%/hellfire-hatchet.png?v=5" -o assets\art_hellfire-hatchet.png
curl -s "%MOB%/horizon-focus1.png?v=5" -o assets\art_horizon-focus1.png
curl -s "%MOB%/hullcrusher.png?v=5" -o assets\art_hullcrusher.png
curl -s "%MOB%/indomitable-gauntlet.png?v=5" -o assets\art_indomitable-gauntlet.png
curl -s "%MOB%/infinity-force.png?v=5" -o assets\art_infinity-force.png
curl -s "%MOB%/innervating-locket1.png?v=5" -o assets\art_innervating-locket1.png
curl -s "%MOB%/lesser-mirrored-persona.png?v=5" -o assets\art_lesser-mirrored-persona.png
curl -s "%MOB%/lich-bane1.png?v=5" -o assets\art_lich-bane1.png
curl -s "%MOB%/lightshield-crest1.png?v=5" -o assets\art_lightshield-crest1.png
curl -s "%MOB%/luden%27s-tempest1.png?v=5" -o assets\art_ludens-tempest1.png
curl -s "%MOB%/manazane.png?v=5" -o assets\art_manazane.png
curl -s "%MOB%/mending-echoes.png?v=5" -o assets\art_mending-echoes.png
curl -s "%MOB%/mirrored-persona.png?v=5" -o assets\art_mirrored-persona.png
curl -s "%MOB%/mittens1.png?v=5" -o assets\art_mittens1.png
curl -s "%MOB%/moguls-mail2.png?v=5" -o assets\art_moguls-mail2.png
curl -s "%MOB%/prowler%27s-claw1.png?v=5" -o assets\art_prowlers-claw1.png
curl -s "%MOB%/rapid-firecannon1.png?v=5" -o assets\art_rapid-firecannon1.png
curl -s "%MOB%/seeker%27s-armguard1.png?v=5" -o assets\art_seekers-armguard1.png
curl -s "%MOB%/shadow-puppet.png?v=5" -o assets\art_shadow-puppet.png
curl -s "%MOB%/silvermere-dawn1.png?v=5" -o assets\art_silvermere-dawn1.png
curl -s "%MOB%/snipers_focus.png?v=5" -o assets\art_snipers-focus.png
curl -s "%MOB%/spectral-cutlass1.png?v=5" -o assets\art_spectral-cutlass1.png
curl -s "%MOB%/statikk-shiv.png?v=5" -o assets\art_statikk-shiv.png
curl -s "%MOB%/suspicious-trench-coat1.png?v=5" -o assets\art_suspicious-trench-coat1.png
curl -s "%MOB%/talisman-of-ascension1.png?v=5" -o assets\art_talisman-of-ascension1.png
curl -s "%MOB%/the-darkin-aegis.png?v=5" -o assets\art_the-darkin-aegis.png
curl -s "%MOB%/the-darkin-bow.png?v=5" -o assets\art_the-darkin-bow.png
curl -s "%MOB%/the-darkin-scythe.png?v=5" -o assets\art_the-darkin-scythe.png
curl -s "%MOB%/the-darkin-staff.png?v=5" -o assets\art_the-darkin-staff.png
curl -s "%MOB%/titanic-hydra.png?v=5" -o assets\art_titanic-hydra.png
curl -s "%MOB%/tricksters-glass.png?v=5" -o assets\art_tricksters-glass.png
curl -s "%MOB%/unending-despair1.png?v=5" -o assets\art_unending-despair1.png
curl -s "%MOB%/void-gauntlet.png?v=5" -o assets\art_void-gauntlet.png
curl -s "%MOB%/wits-end1.png?v=5" -o assets\art_wits-end1.png
curl -s "%MOB%/zhonyas-paradox.png?v=5" -o assets\art_zhonyas-paradox.png

REM ── EMBLEMS (SVG) ──
curl -s "%SYN%/24-nova.svg?v=72" -o assets\emb_nova.svg
curl -s "%SYN%/24-meeple.svg?v=72" -o assets\emb_meeple.svg
curl -s "%SYN%/24-dark-star.svg?v=72" -o assets\emb_dark-star.svg
curl -s "%SYN%/24-anima.svg?v=72" -o assets\emb_anima.svg
curl -s "%SYN%/24-arbiter.svg?v=72" -o assets\emb_arbiter.svg
curl -s "%SYN%/24-space-groove.svg?v=72" -o assets\emb_space-groove.svg
curl -s "%SYN%/24-primordian.svg?v=72" -o assets\emb_primordian.svg
curl -s "%SYN%/24-stargazer.svg?v=72" -o assets\emb_stargazer.svg
curl -s "%SYN%/24-timebreaker.svg?v=72" -o assets\emb_timebreaker.svg
curl -s "%SYN%/24-mecha.svg?v=72" -o assets\emb_mecha.svg
curl -s "%SYN%/24-bastion.svg?v=72" -o assets\emb_bastion.svg
curl -s "%SYN%/24-brawler.svg?v=72" -o assets\emb_brawler.svg
curl -s "%SYN%/24-challenger.svg?v=72" -o assets\emb_challenger.svg
curl -s "%SYN%/24-rogue.svg?v=72" -o assets\emb_rogue.svg
curl -s "%SYN%/24-vanguard.svg?v=72" -o assets\emb_vanguard.svg
curl -s "%SYN%/24-marauder.svg?v=72" -o assets\emb_marauder.svg
curl -s "%SYN%/24-shepherd.svg?v=72" -o assets\emb_shepherd.svg
curl -s "%SYN%/24-voyager.svg?v=72" -o assets\emb_voyager.svg
curl -s "%SYN%/24-replicator.svg?v=72" -o assets\emb_replicator.svg
curl -s "%SYN%/24-psionic.svg?v=72" -o assets\emb_psionic.svg
curl -s "%SYN%/24-fateweaver.svg?v=72" -o assets\emb_fateweaver.svg
curl -s "%SYN%/24-sniper.svg?v=72" -o assets\emb_sniper.svg
curl -s "%SYN%/24-conduit.svg?v=72" -o assets\emb_conduit.svg

echo.
echo Done! All assets downloaded to the assets folder.
pause
