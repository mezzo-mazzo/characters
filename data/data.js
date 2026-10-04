/** serves the same as data.txt or (deep_chop.dat in earlier versions)
 */
/**
type:
character				id from 0~99
lightweapon				id from 100~149
heavyweapon				id from 150~199
specialattack			id from 200~299
baseball
miscell (Criminal, etc, broken_weapon)
drink (Milk and beer)
effects (blood,fire)	id from 300~349 (extended standard)
 */
//extended standard

define({

	object:
	[
		{id:30, name:'Bandit', type:'character', file:'data/bandit.js', pic:'sprite/bandit_f.png', hidden:true}, //original LF2 character, kept as reference
		{id: 1, name:'Deep', type:'character', file:'data/deep.js', pic:'sprite/deep_f.png', hidden:true}, //original LF2 character, kept as reference
		{id: 2, name:'John', type:'character', file:'data/john.js', pic:'sprite/john_f.png', hidden:true}, //original LF2 character, kept as reference
		{id: 4, name:'Henry', type:'character', file:'data/henry.js', pic:'sprite/henry_f.png', hidden:true}, //original LF2 character, kept as reference
		{id: 5, name:'Rudolf', type:'character', file:'data/rudolf.js', pic:'sprite/rudolf_f.png', AI: 4, hidden:true}, //replaced by Ben-Gvir, kept as reference
		{id: 6, name:'Louis', type:'character', file:'data/louis.js', pic:'sprite/louis_f.png', hidden:true}, //replaced by Liberman, kept as reference
		{id: 7, name:'Firen', type:'character', file:'data/firen.js', pic:'sprite/firen_f.png', hidden:true}, //replaced by Eizenkot, kept as reference
		{id: 8, name:'Freeze', type:'character', file:'data/freeze.js', pic:'sprite/freeze_f.png', hidden:true}, //original LF2 character, kept as reference
		{id: 9, name:'Dennis', type:'character', file:'data/dennis.js', pic:'sprite/dennis_f.png', hidden:true}, //replaced by Golan, kept as reference
		{id:10, name:'Woody', type:'character', file:'data/woody.js', pic:'sprite/woody_f.png', hidden:true}, //original LF2 character, kept as reference
		{id:11, name:'Davis', type:'character', file:'data/davis.js', pic:'sprite/davis_f.png', hidden:true}, //replaced by Lapid, kept as reference
		{id:12, name:'Liberman', type:'character', file:'data/liberman.js', pic:'sprite/liberman_f.png'},
		{id:13, name:'Lapid', type:'character', file:'data/lapid.js', pic:'sprite/lapid_f.png'},
		{id:14, name:'Eizenkot', type:'character', file:'data/eizenkot.js', pic:'sprite/eizenkot_f.png'},
		{id:15, name:'Golan', type:'character', file:'data/golan.js', pic:'sprite/golan_f.png'}, //Dennis's moveset (data/golan.js is a commented copy of dennis.js)
		{id:16, name:'Ben-Gvir', type:'character', file:'data/bengvir.js', pic:'sprite/bengvir_f.png', AI: 4}, //Rudolf's moveset; shoots a pistol instead of throwing shuriken

		{id:100, type:'lightweapon', file:'data/weapon0.js'}, //stick
		{id:101, type:'lightweapon', file:'data/weapon2.js'}, //hoe
		{id:150, type:'heavyweapon', file:'data/weapon1.js'}, //stone
		{id:151, type:'heavyweapon', file:'data/weapon3.js'}, //wooden_box

		{id:300, type:'effect', file:'data/effect0.js'}, //blast
		{id:301, type:'effect', file:'data/effect1.js'}, //blood

		{id:320, type:'broken', file:'data/broken.js'},

		{id:200, type:'specialattack', file:'data/john_ball.js'},
		{id:201, type:'specialattack', file:'data/henry_arrow1.js'},
		{id:202, type:'specialattack', file:'data/rudolf_weapon.js'},
		{id:203, type:'specialattack', file:'data/deep_ball.js'},
		{id:204, type:'specialattack', file:'data/henry_louis_rudolf_wind.js'},
		{id:205, type:'specialattack', file:'data/dennis_ball.js'},
		{id:206, type:'specialattack', file:'data/woody_ball.js'},
		{id:207, type:'specialattack', file:'data/davis_ball.js'},
		{id:208, type:'specialattack', file:'data/henry_arrow2.js'},
		{id:209, type:'specialattack', file:'data/freeze_ball.js'},
		{id:210, type:'specialattack', file:'data/firen_ball.js'},
		{id:211, type:'specialattack', file:'data/firen_flame.js'},
		{id:212, type:'specialattack', file:'data/freeze_column.js'},
		{id:213, type:'lightweapon', file:'data/weapon7.js'}, //ice_sword
		{id:214, type:'specialattack', file:'data/john_biscuit.js'},
		{id:215, type:'specialattack', file:'data/dennis_chase.js'},
		{id:220, type:'specialattack', file:'data/golan_ball.js'}, //Dennis's ball as Golan's own entry (packed with golan.js by name matching in util.organize_package)
		{id:221, type:'specialattack', file:'data/golan_chase.js'}, //Dennis's chase ball as Golan's own entry
		{id:216, type:'specialattack', file:'data/liberman_wind.js'}, //Louis's wind, its own entry so it gets packed with liberman.js (name matching in util.organize_package)
		{id:218, type:'specialattack', file:'data/eizenkot_ball.js'}, //Firen's fire ball as Eizenkot's own entry (packed with eizenkot.js by name matching in util.organize_package)
		{id:219, type:'specialattack', file:'data/eizenkot_flame.js'}, //Firen's flame/inferno as Eizenkot's own entry
		{id:222, type:'specialattack', file:'data/bengvir_bullet.js'}, //Rudolf's shuriken as Ben-Gvir's bullet (packed with bengvir.js by name matching in util.organize_package)
		{id:223, type:'specialattack', file:'data/bengvir_wind.js'}, //henry_louis_rudolf_wind.js (Rudolf's smoke) as Ben-Gvir's own entry
		{id:217, type:'specialattack', file:'data/lapid_ball.js'} //Davis's ball as Lapid's own entry (packed with lapid.js by name matching in util.organize_package)
	],

	//upcoming characters: only a portrait, shown grayed out in character selection.
	//not objects (no `file`, so the loader fetches nothing for them), never selectable or picked at random.
	preview:
	[
		{id:17, name:'Bennett', name_local:'בנט', pic:'sprite/bennett_f.png'},
		{id:18, name:'Deri', name_local:'דרעי', pic:'sprite/deri_f.png'},
		{id:19, name:'Smotrich', name_local:'סמוטריץ\'', pic:'sprite/smotrich_f.png'}
	],

	AI:
	[
		{id:1, file:'AI/Crusher.js', name:'CRUSHER 1.0'},
		{id:2, file:'AI/Challangar.js', name:'CHALLANGAR 1.0'},
		{id:3, file:'AI/dumbass.js', name:'dumbass'},
		{id:4, file:'AI/Ninja.js', name:'Ninja'},
	],

	background:
	[
		{id:4, name: 'HK Coliseum', file:'bg/hkc/bg.js', preview:'bg/hkc/back1.png'},
		{id:2, name: 'Lion Forest', file:'bg/lf/bg.js', preview:'bg/lf/forestt.png'},
		{id:3, name: 'Stanley Prison', file:'bg/sp/bg.js', preview:'bg/sp/wall.png'},
		{id:5, name: 'The Great Wall', file:'bg/gw/bg.js', preview:'bg/gw/hill1.png'},
		{id:6, name: "Queen's Island", file:'bg/qi/bg.js', preview:'bg/qi/qi1.png'},
		{id:7, name: 'Forbidden Tower', file:'bg/ft/bg.js', preview:'bg/ft/c1.png'},
		{id:1, name: 'CUHK', file:'bg/cuhk/bg.js', preview:'bg/cuhk/lib.png'},
		{id:0, name: 'Tai Hom Village', file:'bg/thv/bg.js', preview:'bg/thv/5.png'},
		{id:10,name: 'Template1', file:'bg/template/bg.js', preview:'bg/template/pic1.png'}
	],

	sound:
	[
		{id:1, file: 'sound/soundpack.js'}
	],

	UI: {file:'UI/UI.js'},

	properties: {file:'data/properties.js'},

	file_editing: {},

	config: ['id: 100~199 drop weapon'],

	icon: 'sprite/icon.png'
});
