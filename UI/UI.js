//extended standard
/* The user interface of this package is plain HTML (knesset-fighter/index.html)
   styled by UI/UI.css, so no UI coordinates are needed here any more.

   What is left is the data of the in game HP/MP panel: it is drawn by the
   renderer into the game canvas, not by the browser. */
define({
	panel:
	{
		pic:'UI/panel.png',
		x: 10, y: 12,
		hpx: 114, hpy: 32, hpw: 250, hph: 20, mpx: 114, mpy: 72, mpw: 250, mph: 20,
		hp_light:'#FF8888', hp_bright: '#FF0000', hp_dark: '#6f081f', mp_bright: '#0000FF', mp_dark: '#1f086f',
		pane_width:396, pane_height:106,
		width:1588, height:256
	}
});
