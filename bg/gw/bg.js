define({
  name: "The Great Wall",
  width: 4800,
  zboundary: [652, 954],
  shadow: "bg/gw/s.png",
  shadowsize: [74, 18],
  layer: [{
      pic: "bg/gw/sky.png",
      transparency: 0,
      width: 1600,
      x: 0,
      y: 256,
      tile: 1
    }, {
      pic: "bg/gw/hill1.png",
      transparency: 1,
      width: 2408,
      x: 0,
      y: 284
    }, {
      pic: "bg/gw/hill2.png",
      transparency: 1,
      width: 2408,
      x: 1600,
      y: 284
    }, {
      pic: "bg/gw/road1.png",
      transparency: 1,
      width: 4660,
      x: 0,
      y: 342
    }, {
      pic: "bg/gw/road2.png",
      transparency: 1,
      width: 4800,
      x: 470,
      y: 512,
      loop: 186
    }, {
      pic: "bg/gw/s.png",
      rect: 37770,
      x: 0,
      y: 648,
      width: 1588,
      height: 314,
      tile: 1
    }, {
      pic: "bg/gw/road3.png",
      transparency: 0,
      width: 5200,
      x: 0,
      y: 962,
      loop: 208
    }]
});
