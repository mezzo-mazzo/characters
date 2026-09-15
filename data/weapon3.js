define({
  bmp: {
    file: [{
        "file(0-99)": "sprite/weapon3.png",
        w: 117,
        h: 117,
        row: 10,
        col: 10
      }],
    weapon_hp: 400,
    weapon_drop_hurt: 180,
    weapon_hit_sound: "1/035",
    weapon_drop_sound: "1/037",
    weapon_broken_sound: "1/036"
  },
  frame: {
    "0": {
      name: "in_the_sky",
      pic: 0,
      state: 2000,
      wait: 3,
      next: 1,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      itr: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92,
        dvx: 10,
        dvy: -14,
        fall: 70,
        vrest: 17,
        bdefend: 30,
        injury: 60
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92
      }
    },
    "1": {
      name: "in_the_sky",
      pic: 1,
      state: 2000,
      wait: 2,
      next: 2,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      itr: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92,
        dvx: 10,
        dvy: -14,
        fall: 70,
        vrest: 17,
        bdefend: 30,
        injury: 60
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92
      }
    },
    "2": {
      name: "in_the_sky",
      pic: 2,
      state: 2000,
      wait: 3,
      next: 3,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      itr: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92,
        dvx: 10,
        dvy: -14,
        fall: 70,
        vrest: 17,
        bdefend: 30,
        injury: 60
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92
      }
    },
    "3": {
      name: "in_the_sky",
      pic: 3,
      state: 2000,
      wait: 2,
      next: 4,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      itr: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92,
        dvx: 10,
        dvy: -14,
        fall: 70,
        vrest: 17,
        bdefend: 30,
        injury: 60
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92
      }
    },
    "4": {
      name: "in_the_sky",
      pic: 4,
      state: 2000,
      wait: 3,
      next: 5,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      itr: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92,
        dvx: 10,
        dvy: -14,
        fall: 70,
        vrest: 17,
        bdefend: 30,
        injury: 60
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92
      }
    },
    "5": {
      name: "in_the_sky",
      pic: 5,
      state: 2000,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      itr: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92,
        dvx: 10,
        dvy: -14,
        fall: 70,
        vrest: 17,
        bdefend: 30,
        injury: 60
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92
      }
    },
    "10": {
      name: "on_hand",
      pic: 5,
      state: 2001,
      wait: 0,
      next: 0,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      wpoint: {
        kind: 2,
        x: 58,
        y: 112,
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "20": {
      name: "on_ground",
      pic: 5,
      state: 2004,
      wait: 0,
      next: 0,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 102,
      itr: {
        kind: 14,
        x: 42,
        y: 74,
        w: 32,
        h: 36,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 22,
        y: 20,
        w: 72,
        h: 100
      }
    },
    "21": {
      name: "just_on_ground",
      pic: 3,
      state: 2000,
      wait: 1,
      next: 999,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      itr: {
        kind: 0,
        x: 12,
        y: 18,
        w: 88,
        h: 92,
        dvx: 10,
        dvy: -14,
        fall: 70,
        vrest: 17,
        bdefend: 30,
        injury: 60
      }
    },
    "399": {
      name: "dummy",
      pic: 5,
      state: 0,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      centerx: 58,
      centery: 112,
      bdy: {
        kind: 0,
        x: 2,
        y: 38,
        w: 92,
        h: 30
      }
    }
  }
});
