define({
  bmp: {
    file: [{
        "file(0-69)": "sprite/bengvir_0.png", // bengvir: rudolf "file(0-69)": "sprite/rudolf_0.png"
        w: 159,
        h: 159,
        row: 10,
        col: 7
      }, {
        "file(70-139)": "sprite/bengvir_1.png", // bengvir: rudolf "file(70-139)": "sprite/rudolf_1.png"
        w: 159,
        h: 159,
        row: 10,
        col: 7
      }, {
        "file(140-149)": "sprite/bengvir_2.png", // bengvir: rudolf "file(140-149)": "sprite/rudolf_2.png"
        w: 299,
        h: 175,
        row: 5,
        col: 2
      }, {
        "file(150-155)": "sprite/bengvir_3.png", // bengvir: rudolf "file(150-155)": "sprite/rudolf_3.png"
        w: 189,
        h: 129,
        row: 6,
        col: 1
      }, {
        "file(156-156)": "sprite/bengvir_4.png", // bengvir: own sheet (jump-sword launch pic 156), Rudolf has none
        w: 159,
        h: 159,
        row: 1,
        col: 1
      }],
    name: "Ben-Gvir", // bengvir: rudolf name: "Rudolf"
    head: "sprite/bengvir_f.png", // bengvir: rudolf head: "sprite/rudolf_f.png"
    small: "sprite/bengvir_s.png", // bengvir: rudolf small: "sprite/rudolf_s.png"
    walking_frame_rate: 3,
    walking_speed: 12,
    walking_speedz: 5,
    running_frame_rate: 3,
    running_speed: 19, // bengvir: rudolf running_speed: 26
    running_speedz: 3.2,
    heavy_walking_speed: 8.4,
    heavy_walking_speedz: 3.7,
    heavy_running_speed: 14,
    heavy_running_speedz: 2,
    jump_height: -32.599998,
    jump_distance: 20,
    jump_distancez: 7.5,
    dash_height: -20,
    dash_distance: 36,
    dash_distancez: 10,
    rowing_height: -4,
    rowing_distance: 10
  },
  frame: {
    "0": {
      name: "standing",
      pic: 0,
      state: 0,
      wait: 4,
      next: 1,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      bpoint: {
        x: 88,
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 105, // bengvir: rudolf x: 92
        y: 102, // bengvir: rudolf y: 98
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "1": {
      name: "standing",
      pic: 1,
      state: 0,
      wait: 4,
      next: 2,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      bpoint: {
        x: 90,
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 107, // bengvir: rudolf x: 94
        y: 103, // bengvir: rudolf y: 98
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "2": {
      name: "standing",
      pic: 2,
      state: 0,
      wait: 4,
      next: 3,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      bpoint: {
        x: 90,
        y: 77 // bengvir: rudolf y: 70
      },
      wpoint: {
        kind: 1,
        x: 107, // bengvir: rudolf x: 94
        y: 104, // bengvir: rudolf y: 96
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "3": {
      name: "standing",
      pic: 3,
      state: 0,
      wait: 4,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      bpoint: {
        x: 84,
        y: 77 // bengvir: rudolf y: 70
      },
      wpoint: {
        kind: 1,
        x: 101, // bengvir: rudolf x: 88
        y: 103, // bengvir: rudolf y: 94
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "5": {
      name: "walking",
      pic: 4,
      state: 1,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      bpoint: {
        x: 84,
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 98, // bengvir: rudolf x: 88
        y: 96, // bengvir: rudolf y: 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 1,
        x: 80,
        y: 42, // bengvir: rudolf y: 32
        w: 46, // bengvir: rudolf w: 50
        h: 120, // bengvir: rudolf h: 130
        catchingact: [120, 120],
        caughtact: [130, 130]
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 36, // bengvir: rudolf y: 26
        w: 63, // bengvir: rudolf w: 68
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "6": {
      name: "walking",
      pic: 5,
      state: 1,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      bpoint: {
        x: 82,
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 98, // bengvir: rudolf x: 86
        y: 97, // bengvir: rudolf y: 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 1,
        x: 80,
        y: 42, // bengvir: rudolf y: 32
        w: 46, // bengvir: rudolf w: 50
        h: 120, // bengvir: rudolf h: 130
        catchingact: [120, 120],
        caughtact: [130, 130]
      },
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 46
        y: 35, // bengvir: rudolf y: 24
        w: 61, // bengvir: rudolf w: 66
        h: 123 // bengvir: rudolf h: 134
      }
    },
    "7": {
      name: "walking",
      pic: 6,
      state: 1,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      bpoint: {
        x: 86,
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 108, // bengvir: rudolf x: 90
        y: 98, // bengvir: rudolf y: 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 1,
        x: 80,
        y: 42, // bengvir: rudolf y: 32
        w: 46, // bengvir: rudolf w: 50
        h: 120, // bengvir: rudolf h: 130
        catchingact: [120, 120],
        caughtact: [130, 130]
      },
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 48
        y: 33, // bengvir: rudolf y: 22
        w: 63, // bengvir: rudolf w: 68
        h: 123 // bengvir: rudolf h: 134
      }
    },
    "8": {
      name: "walking",
      pic: 7,
      state: 1,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 86,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      bpoint: {
        x: 90,
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 112, // bengvir: rudolf x: 94
        y: 92,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 1,
        x: 80,
        y: 42, // bengvir: rudolf y: 32
        w: 46, // bengvir: rudolf w: 50
        h: 120, // bengvir: rudolf h: 130
        catchingact: [120, 120],
        caughtact: [130, 130]
      },
      bdy: {
        kind: 0,
        x: 55, // bengvir: rudolf x: 52
        y: 35, // bengvir: rudolf y: 24
        w: 63, // bengvir: rudolf w: 68
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "9": {
      name: "running",
      pic: 20,
      state: 2,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/003",
      bpoint: {
        x: 106, // bengvir: rudolf x: 110
        y: 106 // bengvir: rudolf y: 102
      },
      wpoint: {
        kind: 1,
        x: 79, // bengvir: rudolf x: 92
        y: 98, // bengvir: rudolf y: 108
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 50
        y: 48, // bengvir: rudolf y: 38
        w: 70, // bengvir: rudolf w: 76
        h: 110 // bengvir: rudolf h: 120
      }
    },
    "10": {
      name: "running",
      pic: 21,
      state: 2,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 106, // bengvir: rudolf x: 110
        y: 110 // bengvir: rudolf y: 106
      },
      wpoint: {
        kind: 1,
        x: 90, // bengvir: rudolf x: 92
        y: 90, // bengvir: rudolf y: 110
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 50
        y: 48, // bengvir: rudolf y: 38
        w: 70, // bengvir: rudolf w: 76
        h: 110 // bengvir: rudolf h: 120
      }
    },
    "11": {
      name: "running",
      pic: 22,
      state: 2,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/004",
      bpoint: {
        x: 108, // bengvir: rudolf x: 112
        y: 112 // bengvir: rudolf y: 108
      },
      wpoint: {
        kind: 1,
        x: 97, // bengvir: rudolf x: 92
        y: 90, // bengvir: rudolf y: 112
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 50
        y: 48, // bengvir: rudolf y: 38
        w: 70, // bengvir: rudolf w: 76
        h: 110 // bengvir: rudolf h: 120
      }
    },
    "12": {
      name: "heavy_obj_walk",
      pic: 23,
      state: 1,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 84,
        y: 81 // bengvir: rudolf y: 74
      },
      wpoint: {
        kind: 1,
        x: 79, // bengvir: rudolf x: 80
        y: 25, // bengvir: rudolf y: 50
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 35, // bengvir: rudolf y: 24
        w: 70, // bengvir: rudolf w: 76
        h: 131 // bengvir: rudolf h: 142
      }
    },
    "13": {
      name: "heavy_obj_walk",
      pic: 24,
      state: 1,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 82,
        y: 81 // bengvir: rudolf y: 74
      },
      wpoint: {
        kind: 1,
        x: 77, // bengvir: rudolf x: 78
        y: 25, // bengvir: rudolf y: 50
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 37, // bengvir: rudolf y: 26
        w: 66, // bengvir: rudolf w: 72
        h: 127 // bengvir: rudolf h: 138
      }
    },
    "14": {
      name: "heavy_obj_walk",
      pic: 25,
      state: 1,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 86,
        y: 81 // bengvir: rudolf y: 74
      },
      wpoint: {
        kind: 1,
        x: 81, // bengvir: rudolf x: 82
        y: 25, // bengvir: rudolf y: 50
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 33, // bengvir: rudolf y: 22
        w: 70, // bengvir: rudolf w: 76
        h: 129 // bengvir: rudolf h: 140
      }
    },
    "15": {
      name: "heavy_obj_walk",
      pic: 26,
      state: 1,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 86,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 88,
        y: 81 // bengvir: rudolf y: 74
      },
      wpoint: {
        kind: 1,
        x: 83, // bengvir: rudolf x: 84
        y: 25, // bengvir: rudolf y: 50
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 48
        y: 33, // bengvir: rudolf y: 22
        w: 70, // bengvir: rudolf w: 76
        h: 132 // bengvir: rudolf h: 144
      }
    },
    "16": {
      name: "heavy_obj_run",
      pic: 125,
      state: 2,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/003",
      bpoint: {
        x: 76,
        y: 83 // bengvir: rudolf y: 76
      },
      wpoint: {
        kind: 1,
        x: 71, // bengvir: rudolf x: 72
        y: 25, // bengvir: rudolf y: 48
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 46, // bengvir: rudolf x: 44
        y: 31, // bengvir: rudolf y: 20
        w: 55, // bengvir: rudolf w: 60
        h: 125 // bengvir: rudolf h: 136
      }
    },
    "17": {
      name: "heavy_obj_run",
      pic: 126,
      state: 2,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 84,
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 79, // bengvir: rudolf x: 80
        y: 25, // bengvir: rudolf y: 46
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58, // bengvir: rudolf x: 56
        y: 31, // bengvir: rudolf y: 20
        w: 57, // bengvir: rudolf w: 62
        h: 125 // bengvir: rudolf h: 136
      }
    },
    "18": {
      name: "heavy_obj_run",
      pic: 127,
      state: 2,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/004",
      bpoint: {
        x: 86,
        y: 83 // bengvir: rudolf y: 76
      },
      wpoint: {
        kind: 1,
        x: 81, // bengvir: rudolf x: 82
        y: 25, // bengvir: rudolf y: 50
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 48
        y: 40, // bengvir: rudolf y: 30
        w: 68, // bengvir: rudolf w: 74
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "19": {
      name: "heavy_stop_run",
      pic: 128,
      state: 15,
      wait: 7,
      next: 999,
      dvx: 4,
      dvy: 0,
      dvz: 0,
      centerx: 66,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/009",
      bpoint: {
        x: 77, // bengvir: rudolf x: 78
        y: 92 // bengvir: rudolf y: 86
      },
      wpoint: {
        kind: 1,
        x: 84, // bengvir: rudolf x: 88
        y: 25, // bengvir: rudolf y: 60
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 38, // bengvir: rudolf x: 36
        y: 42, // bengvir: rudolf y: 32
        w: 70, // bengvir: rudolf w: 76
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "20": {
      name: "normal_weapon_atck",
      pic: 70,
      state: 3,
      wait: 1,
      next: 21,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 66,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 45, // bengvir: rudolf x: 42
        y: 47, // bengvir: rudolf y: 32
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 44, // bengvir: rudolf x: 42
        y: 38, // bengvir: rudolf y: 28
        w: 63, // bengvir: rudolf w: 68
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "21": {
      name: "normal_weapon_atck",
      pic: 71,
      state: 3,
      wait: 1,
      next: 22,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 66,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 75, // bengvir: rudolf x: 76
        y: 53, // bengvir: rudolf y: 38
        weaponact: 32,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 48
        y: 35, // bengvir: rudolf y: 24
        w: 52, // bengvir: rudolf w: 56
        h: 123 // bengvir: rudolf h: 134
      }
    },
    "22": {
      name: "normal_weapon_atck",
      pic: 72,
      state: 3,
      wait: 1,
      next: 23,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 48,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 80, // bengvir: rudolf x: 84
        y: 110, // bengvir: rudolf y: 104
        weaponact: 24,
        attacking: 1,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 17, // bengvir: rudolf x: 14
        y: 35, // bengvir: rudolf y: 24
        w: 74, // bengvir: rudolf w: 80
        h: 125 // bengvir: rudolf h: 136
      }
    },
    "23": {
      name: "normal_weapon_atck",
      pic: 73,
      state: 3,
      wait: 1,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 48,
      centery: 160,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 64, // bengvir: rudolf x: 66
        y: 123, // bengvir: rudolf y: 118
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 18,
          y: 24,
          w: 68,
          h: 138
        }, {
          kind: 0,
          x: 50,
          y: 122,
          w: 34,
          h: 36
        }]
    },
    "25": {
      name: "normal_weapon_atck",
      pic: 74,
      state: 3,
      wait: 1,
      next: 26,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 95, // bengvir: rudolf x: 98
        y: 88, // bengvir: rudolf y: 78
        weaponact: 33,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 27, // bengvir: rudolf y: 16
        w: 61, // bengvir: rudolf w: 66
        h: 132 // bengvir: rudolf h: 144
      }
    },
    "26": {
      name: "normal_weapon_atck",
      pic: 75,
      state: 3,
      wait: 1,
      next: 27,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 102, // bengvir: rudolf x: 106
        y: 93, // bengvir: rudolf y: 84
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50, // bengvir: rudolf x: 48
        y: 35, // bengvir: rudolf y: 24
        w: 50, // bengvir: rudolf w: 54
        h: 123 // bengvir: rudolf h: 134
      }
    },
    "27": {
      name: "normal_weapon_atck",
      pic: 76,
      state: 3,
      wait: 1,
      next: 28,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 48,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 90, // bengvir: rudolf x: 96
        y: 103, // bengvir: rudolf y: 96
        weaponact: 24,
        attacking: 1,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 20, // bengvir: rudolf x: 18
        y: 40, // bengvir: rudolf y: 30
        w: 59, // bengvir: rudolf w: 64
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "28": {
      name: "normal_weapon_atck",
      pic: 77,
      state: 3,
      wait: 1,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 36, // bengvir: rudolf x: 30
        y: 110, // bengvir: rudolf y: 104
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50, // bengvir: rudolf x: 48
        y: 46, // bengvir: rudolf y: 36
        w: 59, // bengvir: rudolf w: 64
        h: 110 // bengvir: rudolf h: 120
      }
    },
    "30": {
      name: "jump_weapon_atck",
      pic: 80,
      state: 3,
      wait: 1,
      next: 31,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 48,
      centery: 168,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 48,
        y: 47, // bengvir: rudolf y: 30
        weaponact: 30,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 33, // bengvir: rudolf x: 32
        y: 37, // bengvir: rudolf y: 26
        w: 52, // bengvir: rudolf w: 56
        h: 107 // bengvir: rudolf h: 116
      }
    },
    "31": {
      name: "jump_weapon_atck",
      pic: 81,
      state: 3,
      wait: 1,
      next: 32,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 70, // bengvir: rudolf x: 74
        y: 49, // bengvir: rudolf y: 32
        weaponact: 33,
        attacking: 2,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 46,
          y: 20,
          w: 46,
          h: 90
        }, {
          kind: 0,
          x: 26,
          y: 76,
          w: 48,
          h: 66
        }]
    },
    "32": {
      name: "jump_weapon_atck",
      pic: 82,
      state: 3,
      wait: 1,
      next: 33,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 40,
      centery: 172,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 98, // bengvir: rudolf x: 106
        y: 107, // bengvir: rudolf y: 98
        weaponact: 24,
        attacking: 2,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 22,
          y: 64,
          w: 66,
          h: 86
        }, {
          kind: 0,
          x: 58,
          y: 24,
          w: 52,
          h: 76
        }]
    },
    "33": {
      name: "jump_weapon_atck",
      pic: 83,
      state: 3,
      wait: 4,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 174,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 79, // bengvir: rudolf x: 84
        y: 117, // bengvir: rudolf y: 110
        weaponact: 25,
        attacking: 2,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 22,
          y: 64,
          w: 66,
          h: 86
        }, {
          kind: 0,
          x: 52,
          y: 18,
          w: 52,
          h: 74
        }]
    },
    "35": {
      name: "run_weapon_atck",
      pic: 71,
      state: 3,
      wait: 1,
      next: 36,
      dvx: 12,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 75, // bengvir: rudolf x: 74
        y: 53, // bengvir: rudolf y: 40
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 40, // bengvir: rudolf y: 30
        w: 57, // bengvir: rudolf w: 62
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "36": {
      name: "run_weapon_atck",
      pic: 72,
      state: 3,
      wait: 1,
      next: 37,
      dvx: 8,
      dvy: 0,
      dvz: 0,
      centerx: 52,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 80, // bengvir: rudolf x: 84
        y: 110, // bengvir: rudolf y: 104
        weaponact: 22,
        attacking: 3,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 32, // bengvir: rudolf x: 30
        y: 40, // bengvir: rudolf y: 30
        w: 53, // bengvir: rudolf w: 58
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "37": {
      name: "run_weapon_atck",
      pic: 73,
      state: 0,
      wait: 6,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 48,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 64, // bengvir: rudolf x: 72
        y: 123, // bengvir: rudolf y: 120
        weaponact: 24,
        attacking: 3,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 35, // bengvir: rudolf x: 34
        y: 44, // bengvir: rudolf y: 34
        w: 48, // bengvir: rudolf w: 52
        h: 112 // bengvir: rudolf h: 122
      }
    },
    "40": {
      name: "dash_weapon_atck",
      pic: 80,
      state: 3,
      wait: 1,
      next: 41,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 42,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 48, // bengvir: rudolf x: 50
        y: 47, // bengvir: rudolf y: 32
        weaponact: 30,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 31, // bengvir: rudolf x: 30
        y: 40, // bengvir: rudolf y: 30
        w: 50, // bengvir: rudolf w: 54
        h: 103 // bengvir: rudolf h: 112
      }
    },
    "41": {
      name: "dash_weapon_atck",
      pic: 81,
      state: 3,
      wait: 1,
      next: 42,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 40,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 70, // bengvir: rudolf x: 68
        y: 49, // bengvir: rudolf y: 28
        weaponact: 33,
        attacking: 4,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 16,
          y: 64,
          w: 66,
          h: 90
        }, {
          kind: 0,
          x: 46,
          y: 16,
          w: 68,
          h: 66
        }]
    },
    "42": {
      name: "dash_weapon_atck",
      pic: 82,
      state: 3,
      wait: 1,
      next: 43,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 36,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 98, // bengvir: rudolf x: 108
        y: 107, // bengvir: rudolf y: 96
        weaponact: 24,
        attacking: 4,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 16,
          y: 64,
          w: 66,
          h: 90
        }, {
          kind: 0,
          x: 54,
          y: 26,
          w: 60,
          h: 66
        }]
    },
    "43": {
      name: "dash_weapon_atck",
      pic: 83,
      state: 3,
      wait: 8,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 40,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 79, // bengvir: rudolf x: 84
        y: 117, // bengvir: rudolf y: 110
        weaponact: 25,
        attacking: 4,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 16,
          y: 64,
          w: 66,
          h: 90
        }, {
          kind: 0,
          x: 46,
          y: 26,
          w: 62,
          h: 74
        }]
    },
    "45": {
      name: "light_weapon_thw",
      pic: 94,
      state: 15,
      wait: 3,
      next: 46,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 71, // bengvir: rudolf x: 70
        y: 54, // bengvir: rudolf y: 40
        weaponact: 32,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 38,
          y: 30,
          w: 68,
          h: 130
        }, {
          kind: 0,
          x: 18,
          y: 72,
          w: 34,
          h: 36
        }]
    },
    "46": {
      name: "light_weapon_thw",
      pic: 95,
      state: 15,
      wait: 1,
      next: 47,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 104, // bengvir: rudolf x: 108
        y: 108, // bengvir: rudolf y: 102
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50, // bengvir: rudolf x: 48
        y: 53, // bengvir: rudolf y: 44
        w: 59, // bengvir: rudolf w: 64
        h: 105 // bengvir: rudolf h: 114
      }
    },
    "47": {
      name: "light_weapon_thw",
      pic: 96,
      state: 15,
      wait: 9,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 204,
        y: 120,
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 38,
        dvy: -8,
        dvz: 6
      },
      bdy: [{
          kind: 0,
          x: 20,
          y: 76,
          w: 108,
          h: 42
        }, {
          kind: 0,
          x: 52,
          y: 110,
          w: 64,
          h: 52
        }]
    },
    "50": {
      name: "heavy_weapon_thw",
      pic: 27,
      state: 15,
      wait: 4,
      next: 51,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 67, // bengvir: rudolf x: 50
        y: 25, // bengvir: rudolf y: 48
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 39, // bengvir: rudolf x: 36
        y: 38, // bengvir: rudolf y: 28
        w: 68, // bengvir: rudolf w: 74
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "51": {
      name: "heavy_weapon_thw",
      pic: 28,
      state: 15,
      wait: 7,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      wpoint: {
        kind: 1,
        x: 198,
        y: 84,
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 18,
        dvy: -8,
        dvz: 4
      },
      bdy: [{
          kind: 0,
          x: 16,
          y: 78,
          w: 122,
          h: 46
        }, {
          kind: 0,
          x: 42,
          y: 44,
          w: 78,
          h: 114
        }]
    },
    "52": {
      name: "sky_lgt_wp_thw",
      pic: 97,
      state: 15,
      wait: 3,
      next: 53,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 48,
      centery: 142,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 50,
        y: 37, // bengvir: rudolf y: 22
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 42,
        y: 33, // bengvir: rudolf y: 24
        w: 63, // bengvir: rudolf w: 68
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "53": {
      name: "sky_lgt_wp_thw",
      pic: 98,
      state: 15,
      wait: 1,
      next: 54,
      dvx: 0,
      dvy: -4,
      dvz: 0,
      centerx: 50,
      centery: 144,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 75, // bengvir: rudolf x: 78
        y: 39, // bengvir: rudolf y: 24
        weaponact: 34,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 40
        y: 24, // bengvir: rudolf y: 14
        w: 57, // bengvir: rudolf w: 62
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "54": {
      name: "sky_lgt_wp_thw",
      pic: 99,
      state: 15,
      wait: 9,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 56,
      centery: 142,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 136, // bengvir: rudolf x: 150
        y: 128, // bengvir: rudolf y: 130
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 32,
        dvy: 16,
        dvz: 6
      },
      bdy: [{
          kind: 0,
          x: 54,
          y: 44,
          w: 72,
          h: 68
        }, {
          kind: 0,
          x: 6,
          y: 74,
          w: 68,
          h: 52
        }]
    },
    "55": {
      name: "weapon_drink",
      pic: 105,
      state: 17,
      wait: 3,
      next: 56,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 999,
      hit_j: 0,
      sound: "1/042",
      wpoint: {
        kind: 1,
        x: 106, // bengvir: rudolf x: 120
        y: 60, // bengvir: rudolf y: 52
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 34, // bengvir: rudolf x: 30
        y: 35, // bengvir: rudolf y: 24
        w: 68, // bengvir: rudolf w: 74
        h: 123 // bengvir: rudolf h: 134
      }
    },
    "56": {
      name: "weapon_drink",
      pic: 106,
      state: 17,
      wait: 3,
      next: 57,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 999,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 104, // bengvir: rudolf x: 120
        y: 58, // bengvir: rudolf y: 50
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 36, // bengvir: rudolf x: 32
        y: 49, // bengvir: rudolf y: 40
        w: 66, // bengvir: rudolf w: 72
        h: 109 // bengvir: rudolf h: 118
      }
    },
    "57": {
      name: "weapon_drink",
      pic: 107,
      state: 17,
      wait: 3,
      next: 58,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 999,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 115, // bengvir: rudolf x: 120
        y: 61, // bengvir: rudolf y: 48
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 38, // bengvir: rudolf x: 34
        y: 44, // bengvir: rudolf y: 34
        w: 59, // bengvir: rudolf w: 64
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "58": {
      name: "weapon_drink",
      pic: 106,
      state: 17,
      wait: 3,
      next: 55,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 999,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 104, // bengvir: rudolf x: 120
        y: 58, // bengvir: rudolf y: 50
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 36, // bengvir: rudolf x: 32
        y: 37, // bengvir: rudolf y: 26
        w: 66, // bengvir: rudolf w: 72
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "59": {
      name: "punch",
      pic: 13,
      state: 3,
      wait: 4,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 48
        y: 37, // bengvir: rudolf y: 26
        w: 61, // bengvir: rudolf w: 66
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "60": {
      name: "punch",
      pic: 10,
      state: 3,
      wait: 3,
      next: 61,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 15,
      itr: {
        kind: 2,
        x: 45, // bengvir: rudolf x: 42
        y: 118, // bengvir: rudolf y: 114
        w: 68, // bengvir: rudolf w: 74
        h: 44, // bengvir: rudolf h: 48
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 46
        y: 40, // bengvir: rudolf y: 30
        w: 57, // bengvir: rudolf w: 62
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "61": {
      name: "punch",
      pic: 11,
      state: 3,
      wait: 2,
      next: 62,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      bdy: {
        kind: 0,
        x: 58, // bengvir: rudolf x: 56
        y: 38, // bengvir: rudolf y: 28
        w: 53, // bengvir: rudolf w: 58
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "62": {
      name: "punch",
      pic: 12,
      state: 3,
      wait: 1,
      next: 63,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 130, // bengvir: rudolf x: 150
        y: 95, // bengvir: rudolf y: 114
        action: 40,
        dvx: 35, // bengvir: rudolf dvx: 38
        dvy: -6,
        oid: 222, // bengvir: rudolf oid: 202
        facing: 0
      },
      bdy: {
        kind: 0,
        x: 54, // bengvir: rudolf x: 52
        y: 42, // bengvir: rudolf y: 32
        w: 55, // bengvir: rudolf w: 60
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "63": {
      name: "punch",
      pic: 13,
      state: 3,
      wait: 4,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 64,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 46
        y: 35, // bengvir: rudolf y: 24
        w: 59, // bengvir: rudolf w: 64
        h: 127 // bengvir: rudolf h: 138
      }
    },
    "64": {
      name: "punch",
      pic: 14,
      state: 3,
      wait: 2,
      next: 66,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 15,
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 48
        y: 35, // bengvir: rudolf y: 24
        w: 55, // bengvir: rudolf w: 60
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "65": {
      name: "punch",
      pic: 10,
      state: 3,
      wait: 3,
      next: 61,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 15,
      itr: {
        kind: 2,
        x: 45, // bengvir: rudolf x: 42
        y: 118, // bengvir: rudolf y: 114
        w: 68, // bengvir: rudolf w: 74
        h: 44, // bengvir: rudolf h: 48
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 46, // bengvir: rudolf y: 36
        w: 59, // bengvir: rudolf w: 64
        h: 110 // bengvir: rudolf h: 120
      }
    },
    "66": {
      name: "punch",
      pic: 15,
      state: 3,
      wait: 3,
      next: 67,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 130, // bengvir: rudolf x: 150
        y: 95, // bengvir: rudolf y: 114
        action: 40,
        dvx: 33, // bengvir: rudolf dvx: 36
        dvy: -4,
        oid: 222, // bengvir: rudolf oid: 202
        facing: 0
      },
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 48
        y: 40, // bengvir: rudolf y: 30
        w: 55, // bengvir: rudolf w: 60
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "67": {
      name: "punch",
      pic: 13,
      state: 3,
      wait: 1,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 68,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 58, // bengvir: rudolf x: 56
        y: 40, // bengvir: rudolf y: 30
        w: 50, // bengvir: rudolf w: 54
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "68": {
      name: "punch",
      pic: 14,
      state: 3,
      wait: 2,
      next: 69,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 15,
      bdy: {
        kind: 0,
        x: 56, // bengvir: rudolf x: 54
        y: 40, // bengvir: rudolf y: 30
        w: 59, // bengvir: rudolf w: 64
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "69": {
      name: "punch",
      pic: 12,
      state: 3,
      wait: 2,
      next: 59,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 130, // bengvir: rudolf x: 150
        y: 95, // bengvir: rudolf y: 114
        action: 40,
        dvx: 33, // bengvir: rudolf dvx: 34
        dvy: -2,
        oid: 222, // bengvir: rudolf oid: 202
        facing: 0
      },
      bdy: {
        kind: 0,
        x: 52, // bengvir: rudolf x: 50
        y: 37, // bengvir: rudolf y: 26
        w: 59, // bengvir: rudolf w: 64
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "70": {
      name: "super_punch",
      pic: 132,
      state: 3,
      wait: 1,
      next: 71,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 31, // bengvir: rudolf x: 28
        y: 38, // bengvir: rudolf y: 28
        w: 55, // bengvir: rudolf w: 60
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "71": {
      name: "super_punch",
      pic: 133,
      state: 3,
      wait: 2,
      next: 72,
      dvx: 8,
      dvy: 0,
      dvz: 0,
      centerx: 54,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/028",
      itr: {
        kind: 0,
        x: 87, // bengvir: rudolf x: 90
        y: 29, // bengvir: rudolf y: 18
        w: 66, // bengvir: rudolf w: 72
        h: 94, // bengvir: rudolf h: 102
        dvx: -6,
        dvy: -8,
        fall: 1,
        injury: 10,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 12, // bengvir: rudolf x: 8
        y: 42, // bengvir: rudolf y: 32
        w: 72, // bengvir: rudolf w: 78
        h: 112 // bengvir: rudolf h: 122
      }
    },
    "72": {
      name: "super_punch",
      pic: 134,
      state: 3,
      wait: 1,
      next: 73,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 4, // bengvir: rudolf x: -2
        y: 24, // bengvir: rudolf y: 12
        w: 140, // bengvir: rudolf w: 152
        h: 66, // bengvir: rudolf h: 72
        dvx: -6,
        dvy: -8,
        fall: 1,
        injury: 10,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 44, // bengvir: rudolf y: 34
        w: 52, // bengvir: rudolf w: 56
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "73": {
      name: "super_punch",
      pic: 135,
      state: 3,
      wait: 1,
      next: 74,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 90,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 55, // bengvir: rudolf x: 52
        y: 38, // bengvir: rudolf y: 28
        w: 57, // bengvir: rudolf w: 62
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "74": {
      name: "super_punch",
      pic: 136,
      state: 3,
      wait: 2,
      next: 75,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/029",
      itr: {
        kind: 0,
        x: 90, // bengvir: rudolf x: 92
        y: 37, // bengvir: rudolf y: 26
        w: 59, // bengvir: rudolf w: 64
        h: 118, // bengvir: rudolf h: 128
        dvx: 14,
        dvy: -8,
        fall: 70,
        bdefend: 60,
        injury: 65,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 29, // bengvir: rudolf x: 26
        y: 38, // bengvir: rudolf y: 28
        w: 53, // bengvir: rudolf w: 58
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "75": {
      name: "super_punch",
      pic: 137,
      state: 3,
      wait: 1,
      next: 76,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 76,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 6, // bengvir: rudolf x: 0
        y: 99, // bengvir: rudolf y: 94
        w: 114, // bengvir: rudolf w: 124
        h: 57, // bengvir: rudolf h: 62
        dvx: 14,
        dvy: -8,
        fall: 70,
        bdefend: 60,
        injury: 65,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 32, // bengvir: rudolf x: 28
        y: 29, // bengvir: rudolf y: 18
        w: 72, // bengvir: rudolf w: 78
        h: 129 // bengvir: rudolf h: 140
      }
    },
    "76": {
      name: "super_punch",
      pic: 138,
      state: 3,
      wait: 1,
      next: 77,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 88,
      centery: 152,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 48, // bengvir: rudolf x: 44
        y: 32, // bengvir: rudolf y: 22
        w: 72, // bengvir: rudolf w: 78
        h: 123 // bengvir: rudolf h: 134
      }
    },
    "77": {
      name: "super_punch",
      pic: 139,
      state: 3,
      wait: 2,
      next: 78,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 100,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 58, // bengvir: rudolf x: 54
        y: 36, // bengvir: rudolf y: 26
        w: 72, // bengvir: rudolf w: 78
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "78": {
      name: "super_punch",
      pic: 129,
      state: 3,
      wait: 2,
      next: 79,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 86,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 44, // bengvir: rudolf y: 34
        w: 85, // bengvir: rudolf w: 92
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "79": {
      name: "super_punch",
      pic: 119,
      state: 3,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/027",
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 40, // bengvir: rudolf y: 30
        w: 77, // bengvir: rudolf w: 84
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "80": {
      name: "jump_attack",
      pic: 67,
      state: 3,
      wait: 1,
      next: 81,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 36,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 25, // bengvir: rudolf x: 24
        y: 35, // bengvir: rudolf y: 24
        w: 55, // bengvir: rudolf w: 60
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "81": {
      name: "jump_attack",
      pic: 68,
      state: 3,
      wait: 1,
      next: 82,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 36,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/028",
      itr: {
        kind: 0,
        x: 53, // bengvir: rudolf x: 54
        y: 27, // bengvir: rudolf y: 16
        w: 98, // bengvir: rudolf w: 106
        h: 74, // bengvir: rudolf h: 80
        dvx: -4,
        dvy: -4,
        fall: 20,
        arest: 15,
        bdefend: 60,
        injury: 35,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 18, // bengvir: rudolf x: 16
        y: 40, // bengvir: rudolf y: 30
        w: 63, // bengvir: rudolf w: 68
        h: 110 // bengvir: rudolf h: 120
      }
    },
    "82": {
      name: "jump_attack",
      pic: 69,
      state: 3,
      wait: 1,
      next: 83,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 74,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 15, // bengvir: rudolf x: 10
        y: 16, // bengvir: rudolf y: 4
        w: 138, // bengvir: rudolf w: 150
        h: 40, // bengvir: rudolf h: 44
        dvx: -4,
        dvy: -4,
        fall: 20,
        arest: 15,
        bdefend: 60,
        injury: 35,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 52, // bengvir: rudolf x: 50
        y: 36, // bengvir: rudolf y: 26
        w: 59, // bengvir: rudolf w: 64
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "83": {
      name: "jump_attack",
      pic: 29,
      state: 3,
      wait: 1,
      next: 84,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 150,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 58, // bengvir: rudolf x: 56
        y: 19, // bengvir: rudolf y: 8
        w: 64, // bengvir: rudolf w: 70
        h: 129 // bengvir: rudolf h: 140
      }
    },
    "84": {
      name: "jump_attack",
      pic: 39,
      state: 3,
      wait: 1,
      next: 118,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 50,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/029",
      itr: {
        kind: 0,
        x: 81, // bengvir: rudolf x: 84
        y: 24, // bengvir: rudolf y: 12
        w: 68, // bengvir: rudolf w: 74
        h: 114, // bengvir: rudolf h: 124
        dvx: 2,
        fall: 60,
        arest: 15,
        bdefend: 60,
        injury: 35,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 22, // bengvir: rudolf x: 20
        y: 27, // bengvir: rudolf y: 16
        w: 63, // bengvir: rudolf w: 68
        h: 123 // bengvir: rudolf h: 134
      }
    },
    "85": {
      name: "run_attack",
      pic: 140,
      state: 3,
      wait: 1,
      next: 86,
      dvx: 24,
      dvy: 0,
      dvz: 0,
      centerx: 72,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 44, // bengvir: rudolf x: 42
        y: 76, // bengvir: rudolf y: 68
        w: 92, // bengvir: rudolf w: 100
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "86": {
      name: "run_attack",
      pic: 141,
      state: 3,
      wait: 1,
      next: 87,
      dvx: 24,
      dvy: 0,
      dvz: 0,
      centerx: 56,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/029",
      itr: {
        kind: 0,
        x: 108, // bengvir: rudolf x: 112
        y: 71, // bengvir: rudolf y: 62
        w: 121, // bengvir: rudolf w: 132
        h: 88, // bengvir: rudolf h: 96
        dvx: -8,
        dvy: -8,
        injury: 45,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 30, // bengvir: rudolf x: 28
        y: 74, // bengvir: rudolf y: 66
        w: 90, // bengvir: rudolf w: 98
        h: 94 // bengvir: rudolf h: 102
      }
    },
    "87": {
      name: "run_attack",
      pic: 142,
      state: 3,
      wait: 1,
      next: 88,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/028",
      itr: {
        kind: 0,
        x: 109, // bengvir: rudolf x: 112
        y: 71, // bengvir: rudolf y: 62
        w: 121, // bengvir: rudolf w: 132
        h: 88, // bengvir: rudolf h: 96
        dvx: -8,
        dvy: -8,
        injury: 45,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 76, // bengvir: rudolf y: 68
        w: 94, // bengvir: rudolf w: 102
        h: 88 // bengvir: rudolf h: 96
      }
    },
    "88": {
      name: "run_attack",
      pic: 143,
      state: 3,
      wait: 1,
      next: 89,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 88,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 31, // bengvir: rudolf x: 26
        y: 69, // bengvir: rudolf y: 60
        w: 149, // bengvir: rudolf w: 162
        h: 98, // bengvir: rudolf h: 106
        dvx: 20,
        dvy: -14,
        fall: 70,
        vrest: 15,
        bdefend: 60,
        injury: 35,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 57, // bengvir: rudolf x: 54
        y: 76, // bengvir: rudolf y: 68
        w: 90, // bengvir: rudolf w: 98
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "89": {
      name: "run_attack",
      pic: 144,
      state: 3,
      wait: 6,
      next: 78,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 96,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 67, // bengvir: rudolf x: 64
        y: 80, // bengvir: rudolf y: 72
        w: 83, // bengvir: rudolf w: 90
        h: 90 // bengvir: rudolf h: 98
      }
    },
    "90": {
      name: "dash_attack",
      pic: 145,
      state: 3,
      wait: 1,
      next: 91,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 72,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 44, // bengvir: rudolf x: 42
        y: 76, // bengvir: rudolf y: 68
        w: 92, // bengvir: rudolf w: 100
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "91": {
      name: "dash_attack",
      pic: 146,
      state: 3,
      wait: 1,
      next: 92,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/029",
      bdy: {
        kind: 0,
        x: 60, // bengvir: rudolf x: 58
        y: 65, // bengvir: rudolf y: 56
        w: 98, // bengvir: rudolf w: 106
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "92": {
      name: "dash_attack",
      pic: 147,
      state: 3,
      wait: 1,
      next: 93,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/028",
      itr: {
        kind: 0,
        x: 104, // bengvir: rudolf x: 106
        y: 58, // bengvir: rudolf y: 48
        w: 99, // bengvir: rudolf w: 108
        h: 101, // bengvir: rudolf h: 110
        dvx: 20,
        dvy: -14,
        fall: 70,
        vrest: 15,
        bdefend: 60,
        injury: 75,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 76, // bengvir: rudolf y: 68
        w: 94, // bengvir: rudolf w: 102
        h: 88 // bengvir: rudolf h: 96
      }
    },
    "93": {
      name: "dash_attack",
      pic: 148,
      state: 3,
      wait: 1,
      next: 94,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 88,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 105, // bengvir: rudolf x: 106
        y: 58, // bengvir: rudolf y: 48
        w: 99, // bengvir: rudolf w: 108
        h: 101, // bengvir: rudolf h: 110
        dvx: 20,
        dvy: -14,
        fall: 70,
        vrest: 15,
        bdefend: 60,
        injury: 75,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 57, // bengvir: rudolf x: 54
        y: 76, // bengvir: rudolf y: 68
        w: 90, // bengvir: rudolf w: 98
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "94": {
      name: "dash_attack",
      pic: 149,
      state: 3,
      wait: 6,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 170,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 65, // bengvir: rudolf x: 64
        y: 80, // bengvir: rudolf y: 72
        w: 83, // bengvir: rudolf w: 90
        h: 90 // bengvir: rudolf h: 98
      }
    },
    "95": {
      name: "dash_defend",
      pic: 111,
      state: 7,
      wait: 2,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 83, // bengvir: rudolf x: 42
        y: 126, // bengvir: rudolf y: 54
        weaponact: 30,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 28,
          y: 38,
          w: 56,
          h: 72
        }, {
          kind: 0,
          x: 56,
          y: 74,
          w: 48,
          h: 68
        }]
    },
    "100": {
      name: "rowing",
      pic: 66,
      state: 6,
      wait: 2,
      next: 101,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/017",
      wpoint: {
        kind: 1,
        x: 77, // bengvir: rudolf x: 72
        y: 117, // bengvir: rudolf y: 84
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "101": {
      name: "rowing",
      pic: 65,
      state: 6,
      wait: 6,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 66, // bengvir: rudolf x: 56
        y: 105, // bengvir: rudolf y: 138
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "102": {
      name: "rowing",
      pic: 16,
      state: 6,
      wait: 1,
      next: 103,
      dvx: 24,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fj: 274,
      sound: "1/030",
      wpoint: {
        kind: 1,
        x: 92, // bengvir: rudolf x: 88
        y: 87, // bengvir: rudolf y: 114
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "103": {
      name: "rowing",
      pic: 17,
      state: 6,
      wait: 1,
      next: 104,
      dvx: 24,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 160,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fj: 274,
      wpoint: {
        kind: 1,
        x: 75, // bengvir: rudolf x: 90
        y: 94, // bengvir: rudolf y: 114
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "104": {
      name: "rowing",
      pic: 37,
      state: 6,
      wait: 4,
      next: 105,
      dvx: 30,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fj: 274,
      wpoint: {
        kind: 1,
        x: 98,
        y: 114,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "105": {
      name: "rowing",
      pic: 37,
      state: 6,
      wait: 1,
      next: 106,
      dvx: 30,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fj: 274,
      wpoint: {
        kind: 1,
        x: 98,
        y: 112,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "106": {
      name: "rowing",
      pic: 18,
      state: 6,
      wait: 1,
      next: 219,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fj: 274,
      wpoint: {
        kind: 1,
        x: 108, // bengvir: rudolf x: 100
        y: 89, // bengvir: rudolf y: 114
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "107": {
      name: "rowing",
      pic: 19,
      state: 6,
      wait: 1,
      next: 219,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fj: 274,
      wpoint: {
        kind: 1,
        x: 92, // bengvir: rudolf x: 94
        y: 87, // bengvir: rudolf y: 114
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "108": {
      name: "rowing",
      pic: 117,
      state: 6,
      wait: 3,
      next: 109,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 90,
      centery: 124,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fj: 274,
      sound: "1/017",
      wpoint: {
        kind: 1,
        x: 72,
        y: 52, // bengvir: rudolf y: 72
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "109": {
      name: "rowing",
      pic: 118,
      state: 6,
      wait: 6,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fj: 274,
      wpoint: {
        kind: 1,
        x: 32, // bengvir: rudolf x: 34
        y: 87, // bengvir: rudolf y: 98
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "110": {
      name: "defend",
      pic: 56,
      state: 7,
      wait: 12,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 56,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 285,
      hit_Fj: 273,
      hit_Uj: 250,
      hit_Dj: 260,
      hit_ja: 295,
      wpoint: {
        kind: 1,
        x: 63, // bengvir: rudolf x: 78
        y: 98, // bengvir: rudolf y: 102
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 40
        y: 48, // bengvir: rudolf y: 38
        w: 70, // bengvir: rudolf w: 76
        h: 110 // bengvir: rudolf h: 120
      }
    },
    "111": {
      name: "defend",
      pic: 57,
      state: 7,
      wait: 0,
      next: 110,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 76, // bengvir: rudolf x: 86
        y: 108, // bengvir: rudolf y: 104
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 35, // bengvir: rudolf x: 32
        y: 48, // bengvir: rudolf y: 38
        w: 77, // bengvir: rudolf w: 84
        h: 110 // bengvir: rudolf h: 120
      }
    },
    "112": {
      name: "broken_defend",
      pic: 46,
      state: 8,
      wait: 2,
      next: 113,
      dvx: -4,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 89, // bengvir: rudolf x: 78
        y: 119, // bengvir: rudolf y: 102
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: -10, // bengvir: rudolf x: -18
        y: 42, // bengvir: rudolf y: 32
        w: 156, // bengvir: rudolf w: 170
        h: 120, // bengvir: rudolf h: 130
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 15, // bengvir: rudolf x: 10
        y: 44, // bengvir: rudolf y: 34
        w: 118, // bengvir: rudolf w: 128
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "113": {
      name: "broken_defend",
      pic: 47,
      state: 8,
      wait: 2,
      next: 114,
      dvx: -4,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 77, // bengvir: rudolf x: 80
        y: 85, // bengvir: rudolf y: 100
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: -10, // bengvir: rudolf x: -18
        y: 42, // bengvir: rudolf y: 32
        w: 156, // bengvir: rudolf w: 170
        h: 120, // bengvir: rudolf h: 130
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 15, // bengvir: rudolf x: 10
        y: 44, // bengvir: rudolf y: 34
        w: 118, // bengvir: rudolf w: 128
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "114": {
      name: "broken_defend",
      pic: 48,
      state: 8,
      wait: 2,
      next: 999,
      dvx: -4,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 90, // bengvir: rudolf x: 76
        y: 106, // bengvir: rudolf y: 102
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: -10, // bengvir: rudolf x: -18
        y: 42, // bengvir: rudolf y: 32
        w: 156, // bengvir: rudolf w: 170
        h: 120, // bengvir: rudolf h: 130
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 15, // bengvir: rudolf x: 10
        y: 44, // bengvir: rudolf y: 34
        w: 118, // bengvir: rudolf w: 128
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "115": {
      name: "picking_light",
      pic: 36,
      state: 15,
      wait: 4,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/009",
      wpoint: {
        kind: 1,
        x: 80,
        y: 150,
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 68, // bengvir: rudolf y: 60
        w: 61, // bengvir: rudolf w: 66
        h: 90 // bengvir: rudolf h: 98
      }
    },
    "116": {
      name: "picking_heavy",
      pic: 36,
      state: 15,
      wait: 2,
      next: 117,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/009",
      wpoint: {
        kind: 1,
        x: 80, // bengvir: rudolf x: 82
        y: 151, // bengvir: rudolf y: 158
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52, // bengvir: rudolf x: 50
        y: 62, // bengvir: rudolf y: 54
        w: 57, // bengvir: rudolf w: 62
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "117": {
      name: "picking_heavy",
      pic: 36,
      state: 15,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 80, // bengvir: rudolf x: 82
        y: 151, // bengvir: rudolf y: 150
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52, // bengvir: rudolf x: 50
        y: 68, // bengvir: rudolf y: 60
        w: 61, // bengvir: rudolf w: 66
        h: 88 // bengvir: rudolf h: 96
      }
    },
    "118": {
      name: "jump_attack",
      pic: 49,
      state: 3,
      wait: 1,
      next: 119,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 73, // bengvir: rudolf centerx: 80
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 21, // bengvir: rudolf x: 16
        y: 84, // bengvir: rudolf y: 78
        w: 123, // bengvir: rudolf w: 134
        h: 70, // bengvir: rudolf h: 76
        dvx: 2,
        fall: 60,
        arest: 15,
        bdefend: 60,
        injury: 35,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 27, // bengvir: rudolf y: 16
        w: 68, // bengvir: rudolf w: 74
        h: 125 // bengvir: rudolf h: 136
      }
    },
    "119": {
      name: "jump_attack",
      pic: 59,
      state: 3,
      wait: 12,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 86, // bengvir: rudolf centerx: 92
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 57, // bengvir: rudolf x: 54
        y: 27, // bengvir: rudolf y: 16
        w: 72, // bengvir: rudolf w: 78
        h: 131 // bengvir: rudolf h: 142
      }
    },
    "120": {
      name: "catching",
      pic: 51,
      state: 9,
      wait: 2,
      next: 121,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/015",
      cpoint: {
        kind: 1,
        x: 129, // bengvir: rudolf x: 134
        y: 84, // bengvir: rudolf y: 78
        vaction: 131,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451,
        decrease: 7
      },
      wpoint: {
        kind: 1,
        x: 79, // bengvir: rudolf x: 80
        y: 105, // bengvir: rudolf y: 98
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "121": {
      name: "catching",
      pic: 50,
      state: 9,
      wait: 0,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_ja: 235,
      cpoint: {
        kind: 1,
        x: 118, // bengvir: rudolf x: 122
        y: 84, // bengvir: rudolf y: 78
        vaction: 130,
        aaction: 122,
        taction: -232,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451,
        decrease: -7
      },
      wpoint: {
        kind: 1,
        x: 88, // bengvir: rudolf x: 90
        y: 105, // bengvir: rudolf y: 98
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "122": {
      name: "catching",
      pic: 51,
      state: 9,
      wait: 5,
      next: 123,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 76,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 1,
        x: 118, // bengvir: rudolf x: 122
        y: 84, // bengvir: rudolf y: 78
        vaction: 130,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451,
        decrease: 7
      },
      wpoint: {
        kind: 1,
        x: 79, // bengvir: rudolf x: 82
        y: 105, // bengvir: rudolf y: 98
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "123": {
      name: "catching",
      pic: 52,
      state: 9,
      wait: 3,
      next: 121,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/014",
      cpoint: {
        kind: 1,
        x: 113, // bengvir: rudolf x: 116
        y: 83, // bengvir: rudolf y: 76
        injury: 15,
        vaction: 132,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451,
        decrease: 3
      },
      wpoint: {
        kind: 1,
        x: 85, // bengvir: rudolf x: 86
        y: 103, // bengvir: rudolf y: 96
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "130": {
      name: "picked_caught",
      pic: 53,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 84,
        y: 84, // bengvir: rudolf y: 78
        fronthurtact: 132,
        backhurtact: 131
      },
      wpoint: {
        kind: 1,
        x: 77, // bengvir: rudolf x: 58
        y: 99, // bengvir: rudolf y: 110
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 54, // bengvir: rudolf x: 52
        y: 38, // bengvir: rudolf y: 28
        w: 52, // bengvir: rudolf w: 56
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "131": {
      name: "picked_caught",
      pic: 54,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 85, // bengvir: rudolf x: 86
        y: 84, // bengvir: rudolf y: 78
        fronthurtact: 132,
        backhurtact: 132
      },
      wpoint: {
        kind: 1,
        x: 81, // bengvir: rudolf x: 54
        y: 104,
        weaponact: 26,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 54, // bengvir: rudolf x: 52
        y: 38, // bengvir: rudolf y: 28
        w: 52, // bengvir: rudolf w: 56
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "132": {
      name: "picked_caught",
      pic: 55,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 82,
        y: 84, // bengvir: rudolf y: 78
        fronthurtact: 131,
        backhurtact: 131
      },
      wpoint: {
        kind: 1,
        x: 86, // bengvir: rudolf x: 44
        y: 85, // bengvir: rudolf y: 86
        weaponact: 26,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 54, // bengvir: rudolf x: 52
        y: 38, // bengvir: rudolf y: 28
        w: 52, // bengvir: rudolf w: 56
        h: 121 // bengvir: rudolf h: 132
      }
    },
    "133": {
      name: "picked_caught",
      pic: 30,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 67, // bengvir: rudolf x: 66
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 86,
        y: 88,
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "134": {
      name: "picked_caught",
      pic: 31,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 65, // bengvir: rudolf x: 64
        y: 77 // bengvir: rudolf y: 70
      },
      wpoint: {
        kind: 1,
        x: 82,
        y: 66,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "135": {
      name: "picked_caught",
      pic: 32,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 76,
        y: 73 // bengvir: rudolf y: 66
      },
      wpoint: {
        kind: 1,
        x: 64,
        y: 108,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "136": {
      name: "picked_caught",
      pic: 33,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 69, // bengvir: rudolf x: 68
        y: 94 // bengvir: rudolf y: 88
      },
      wpoint: {
        kind: 1,
        x: 72,
        y: 76,
        weaponact: 33,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "137": {
      name: "picked_caught",
      pic: 34,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 142,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 72,
        y: 136
      },
      wpoint: {
        kind: 1,
        x: 50,
        y: 150,
        weaponact: 32,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "138": {
      name: "picked_caught",
      pic: 35,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 69, // bengvir: rudolf x: 68
        y: 112 // bengvir: rudolf y: 108
      },
      wpoint: {
        kind: 1,
        x: 66,
        y: 138,
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "139": {
      name: "picked_caught",
      pic: 40,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 80,
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 46,
        y: 90,
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "140": {
      name: "picked_caught",
      pic: 41,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 72,
        y: 83 // bengvir: rudolf y: 76
      },
      wpoint: {
        kind: 1,
        x: 48,
        y: 84,
        weaponact: 20,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "141": {
      name: "picked_caught",
      pic: 42,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 87, // bengvir: rudolf x: 88
        y: 86 // bengvir: rudolf y: 80
      },
      wpoint: {
        kind: 1,
        x: 52,
        y: 82,
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "142": {
      name: "picked_caught",
      pic: 43,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 91, // bengvir: rudolf x: 92
        y: 106 // bengvir: rudolf y: 102
      },
      wpoint: {
        kind: 1,
        x: 50,
        y: 130,
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "143": {
      name: "picked_caught",
      pic: 44,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 148,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 89, // bengvir: rudolf x: 90
        y: 133 // bengvir: rudolf y: 132
      },
      wpoint: {
        kind: 1,
        x: 80,
        y: 152,
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "144": {
      name: "picked_caught",
      pic: 45,
      state: 10,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 84,
        y: 114 // bengvir: rudolf y: 110
      },
      wpoint: {
        kind: 1,
        x: 52,
        y: 116,
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "180": {
      name: "falling",
      pic: 30,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 88,
        y: 90,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 4,
        x: 45, // bengvir: rudolf x: 42
        y: 38, // bengvir: rudolf y: 28
        w: 53, // bengvir: rudolf w: 58
        h: 81, // bengvir: rudolf h: 88
        dvx: 4,
        fall: 70,
        vrest: 20,
        bdefend: 10,
        injury: 30
      },
      bdy: {
        kind: 0,
        x: 52, // bengvir: rudolf x: 50
        y: 59, // bengvir: rudolf y: 50
        w: 39, // bengvir: rudolf w: 42
        h: 37 // bengvir: rudolf h: 40
      }
    },
    "181": {
      name: "falling",
      pic: 31,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 80,
        y: 66,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: [{
          kind: 4,
          x: 30,
          y: 22,
          w: 84,
          h: 52,
          dvx: 4,
          fall: 70,
          vrest: 20,
          bdefend: 10,
          injury: 30
        }, {
          kind: 4,
          x: 70,
          y: 60,
          w: 54,
          h: 58,
          dvx: 4,
          fall: 70,
          vrest: 20,
          bdefend: 10,
          injury: 30
        }],
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 49, // bengvir: rudolf y: 40
        w: 44, // bengvir: rudolf w: 48
        h: 42 // bengvir: rudolf h: 46
      }
    },
    "182": {
      name: "falling",
      pic: 32,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 66,
        y: 106,
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 4,
        x: 30, // bengvir: rudolf x: 26
        y: 46, // bengvir: rudolf y: 36
        w: 85, // bengvir: rudolf w: 92
        h: 48, // bengvir: rudolf h: 52
        dvx: 4,
        fall: 70,
        vrest: 20,
        bdefend: 10,
        injury: 30
      },
      bdy: {
        kind: 0,
        x: 56, // bengvir: rudolf x: 54
        y: 53, // bengvir: rudolf y: 44
        w: 37, // bengvir: rudolf w: 40
        h: 33 // bengvir: rudolf h: 36
      }
    },
    "183": {
      name: "falling",
      pic: 33,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 80,
        y: 74,
        weaponact: 33,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: [{
          kind: 4,
          x: 64,
          y: 36,
          w: 66,
          h: 54,
          dvx: 4,
          fall: 70,
          vrest: 20,
          bdefend: 10,
          injury: 30
        }, {
          kind: 4,
          x: 20,
          y: 76,
          w: 76,
          h: 42,
          dvx: 4,
          fall: 70,
          vrest: 20,
          bdefend: 10,
          injury: 30
        }],
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 68, // bengvir: rudolf y: 60
        w: 50, // bengvir: rudolf w: 54
        h: 39 // bengvir: rudolf h: 42
      }
    },
    "184": {
      name: "falling",
      pic: 34,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 144,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 50,
        y: 148,
        weaponact: 32,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "185": {
      name: "falling",
      pic: 35,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 66,
        y: 142,
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "186": {
      name: "falling",
      pic: 40,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 46,
        y: 92,
        weaponact: 34,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 4,
        x: 47, // bengvir: rudolf x: 44
        y: 35, // bengvir: rudolf y: 24
        w: 66, // bengvir: rudolf w: 72
        h: 92, // bengvir: rudolf h: 100
        dvx: 4,
        fall: 70,
        vrest: 20,
        bdefend: 10,
        injury: 30
      },
      bdy: {
        kind: 0,
        x: 63, // bengvir: rudolf x: 62
        y: 57, // bengvir: rudolf y: 48
        w: 46, // bengvir: rudolf w: 50
        h: 42 // bengvir: rudolf h: 46
      }
    },
    "187": {
      name: "falling",
      pic: 41,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 50,
        y: 84,
        weaponact: 20,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: [{
          kind: 4,
          x: 66,
          y: 12,
          w: 52,
          h: 92,
          dvx: 4,
          fall: 70,
          vrest: 20,
          bdefend: 10,
          injury: 30
        }, {
          kind: 4,
          x: 52,
          y: 86,
          w: 42,
          h: 58,
          dvx: 4,
          fall: 70,
          vrest: 20,
          bdefend: 10,
          injury: 30
        }],
      bdy: {
        kind: 0,
        x: 58, // bengvir: rudolf x: 56
        y: 62, // bengvir: rudolf y: 54
        w: 44, // bengvir: rudolf w: 48
        h: 48 // bengvir: rudolf h: 52
      }
    },
    "188": {
      name: "falling",
      pic: 42,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 50,
        y: 76,
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 4,
        x: 32, // bengvir: rudolf x: 28
        y: 66, // bengvir: rudolf y: 58
        w: 107, // bengvir: rudolf w: 116
        h: 42, // bengvir: rudolf h: 46
        dvx: 4,
        fall: 70,
        vrest: 20,
        bdefend: 10,
        injury: 30
      },
      bdy: {
        kind: 0,
        x: 61, // bengvir: rudolf x: 60
        y: 70, // bengvir: rudolf y: 62
        w: 44, // bengvir: rudolf w: 48
        h: 39 // bengvir: rudolf h: 42
      }
    },
    "189": {
      name: "falling",
      pic: 43,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 52,
        y: 132,
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: [{
          kind: 4,
          x: 48,
          y: 54,
          w: 52,
          h: 56,
          dvx: 4,
          fall: 70,
          vrest: 20,
          bdefend: 10,
          injury: 30
        }, {
          kind: 4,
          x: 74,
          y: 90,
          w: 62,
          h: 56,
          dvx: 4,
          fall: 70,
          vrest: 20,
          bdefend: 10,
          injury: 30
        }],
      bdy: {
        kind: 0,
        x: 61, // bengvir: rudolf x: 60
        y: 84, // bengvir: rudolf y: 78
        w: 42, // bengvir: rudolf w: 46
        h: 39 // bengvir: rudolf h: 42
      }
    },
    "190": {
      name: "falling",
      pic: 44,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 150,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 82,
        y: 152,
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "191": {
      name: "falling",
      pic: 45,
      state: 12,
      wait: 3,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 52,
        y: 116,
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "200": {
      name: "ice",
      pic: 8,
      state: 15,
      wait: 2,
      next: 201,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 36,
        y: 90,
        weaponact: 20,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 25, // bengvir: rudolf x: 20
        y: 29, // bengvir: rudolf y: 18
        w: 101, // bengvir: rudolf w: 110
        h: 125 // bengvir: rudolf h: 136
      }
    },
    "201": {
      name: "ice",
      pic: 9,
      state: 13,
      wait: 90,
      next: 202,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 40,
        y: 110,
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 14,
        x: 21, // bengvir: rudolf x: 16
        y: 24, // bengvir: rudolf y: 12
        w: 123, // bengvir: rudolf w: 134
        h: 134, // bengvir: rudolf h: 146
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 21, // bengvir: rudolf x: 16
        y: 24, // bengvir: rudolf y: 12
        w: 123, // bengvir: rudolf w: 134
        h: 134 // bengvir: rudolf h: 146
      }
    },
    "202": {
      name: "ice",
      pic: 8,
      state: 15,
      wait: 1,
      next: 182,
      dvx: -8,
      dvy: -6,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 36,
        y: 88,
        weaponact: 20,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 21, // bengvir: rudolf x: 16
        y: 24, // bengvir: rudolf y: 12
        w: 123, // bengvir: rudolf w: 134
        h: 134 // bengvir: rudolf h: 146
      }
    },
    "203": {
      name: "fire",
      pic: 108,
      state: 18,
      wait: 1,
      next: 204,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 84,
        y: 92,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 77, // bengvir: rudolf y: 70
        w: 48, // bengvir: rudolf w: 52
        h: 35, // bengvir: rudolf h: 38
        dvx: -12,
        dvy: -12,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 30,
        effect: 20
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 77, // bengvir: rudolf y: 70
        w: 48, // bengvir: rudolf w: 52
        h: 35 // bengvir: rudolf h: 38
      }
    },
    "204": {
      name: "fire",
      pic: 109,
      state: 18,
      wait: 1,
      next: 203,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 84,
        y: 92,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 77, // bengvir: rudolf y: 70
        w: 48, // bengvir: rudolf w: 52
        h: 35, // bengvir: rudolf h: 38
        dvx: -12,
        dvy: -12,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 30,
        effect: 20
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 77, // bengvir: rudolf y: 70
        w: 48, // bengvir: rudolf w: 52
        h: 35 // bengvir: rudolf h: 38
      }
    },
    "205": {
      name: "fire",
      pic: 110,
      state: 18,
      wait: 1,
      next: 206,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 60,
        y: 66,
        weaponact: 20,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 77, // bengvir: rudolf y: 70
        w: 48, // bengvir: rudolf w: 52
        h: 35, // bengvir: rudolf h: 38
        dvx: -12,
        dvy: -12,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 30,
        effect: 20
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 77, // bengvir: rudolf y: 70
        w: 48, // bengvir: rudolf w: 52
        h: 35 // bengvir: rudolf h: 38
      }
    },
    "206": {
      name: "fire",
      pic: 111,
      state: 18,
      wait: 1,
      next: 205,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 60,
        y: 66,
        weaponact: 20,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 77, // bengvir: rudolf y: 70
        w: 48, // bengvir: rudolf w: 52
        h: 35, // bengvir: rudolf h: 38
        dvx: -12,
        dvy: -12,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 30,
        effect: 20
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 77, // bengvir: rudolf y: 70
        w: 48, // bengvir: rudolf w: 52
        h: 35 // bengvir: rudolf h: 38
      }
    },
    "207": {
      name: "tired",
      pic: 69,
      state: 15,
      wait: 2,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 51, // bengvir: rudolf x: 84
        y: 73, // bengvir: rudolf y: 128
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 88,
          y: 56,
          w: 44,
          h: 74
        }, {
          kind: 0,
          x: 56,
          y: 94,
          w: 56,
          h: 70
        }]
    },
    "210": {
      name: "jump",
      pic: 60,
      state: 4,
      wait: 1,
      next: 211,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 95, // bengvir: rudolf x: 96
        y: 137, // bengvir: rudolf y: 134
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 47, // bengvir: rudolf x: 44
        y: 64, // bengvir: rudolf y: 56
        w: 66, // bengvir: rudolf w: 72
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "211": {
      name: "jump",
      pic: 61,
      state: 4,
      wait: 1,
      next: 212,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 88,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/017",
      wpoint: {
        kind: 1,
        x: 99, // bengvir: rudolf x: 100
        y: 140, // bengvir: rudolf y: 138
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 57, // bengvir: rudolf x: 54
        y: 64, // bengvir: rudolf y: 56
        w: 63, // bengvir: rudolf w: 68
        h: 96 // bengvir: rudolf h: 104
      }
    },
    "212": {
      name: "jump",
      pic: 62,
      state: 4,
      wait: 1,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 91, // bengvir: rudolf x: 92
        y: 68 // bengvir: rudolf y: 60
      },
      wpoint: {
        kind: 1,
        x: 94, // bengvir: rudolf x: 96
        y: 89, // bengvir: rudolf y: 80
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 56,
          y: 6,
          w: 46,
          h: 130
        }, {
          kind: 0,
          x: 36,
          y: 58,
          w: 96,
          h: 34
        }]
    },
    "213": {
      name: "dash",
      pic: 63,
      state: 5,
      wait: 8,
      next: 216,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 106, // bengvir: rudolf x: 108
        y: 81 // bengvir: rudolf y: 74
      },
      wpoint: {
        kind: 1,
        x: 96, // bengvir: rudolf x: 98
        y: 96, // bengvir: rudolf y: 88
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 86,
          y: 10,
          w: 46,
          h: 66
        }, {
          kind: 0,
          x: 56,
          y: 58,
          w: 42,
          h: 66
        }, {
          kind: 0,
          x: 36,
          y: 96,
          w: 54,
          h: 42
        }]
    },
    "214": {
      name: "dash",
      pic: 64,
      state: 5,
      wait: 8,
      next: 217,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 65, // bengvir: rudolf x: 64
        y: 62 // bengvir: rudolf y: 54
      },
      wpoint: {
        kind: 1,
        x: 81, // bengvir: rudolf x: 82
        y: 81, // bengvir: rudolf y: 70
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 40,
          y: 10,
          w: 54,
          h: 76
        }, {
          kind: 0,
          x: 32,
          y: 74,
          w: 72,
          h: 44
        }]
    },
    "215": {
      name: "crouch",
      pic: 60,
      state: 15,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/012",
      wpoint: {
        kind: 1,
        x: 95, // bengvir: rudolf x: 98
        y: 137, // bengvir: rudolf y: 142
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 53, // bengvir: rudolf x: 50
        y: 64, // bengvir: rudolf y: 56
        w: 66, // bengvir: rudolf w: 72
        h: 94 // bengvir: rudolf h: 102
      }
    },
    "216": {
      name: "dash",
      pic: 112,
      state: 5,
      wait: 2,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 102, // bengvir: rudolf x: 104
        y: 79 // bengvir: rudolf y: 72
      },
      wpoint: {
        kind: 1,
        x: 99, // bengvir: rudolf x: 90
        y: 93, // bengvir: rudolf y: 80
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 70,
          y: 16,
          w: 54,
          h: 54
        }, {
          kind: 0,
          x: 32,
          y: 60,
          w: 78,
          h: 74
        }]
    },
    "217": {
      name: "dash",
      pic: 113,
      state: 5,
      wait: 2,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 60, // bengvir: rudolf x: 58
        y: 66 // bengvir: rudolf y: 58
      },
      wpoint: {
        kind: 1,
        x: 64, // bengvir: rudolf x: 72
        y: 78, // bengvir: rudolf y: 70
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 39, // bengvir: rudolf x: 36
        y: 37, // bengvir: rudolf y: 26
        w: 53, // bengvir: rudolf w: 58
        h: 94 // bengvir: rudolf h: 102
      }
    },
    "218": {
      name: "stop_running",
      pic: 114,
      state: 15,
      wait: 5,
      next: 999,
      dvx: 2,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/009",
      bpoint: {
        x: 85, // bengvir: rudolf x: 86
        y: 94 // bengvir: rudolf y: 88
      },
      wpoint: {
        kind: 1,
        x: 86, // bengvir: rudolf x: 88
        y: 110, // bengvir: rudolf y: 104
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 34,
          y: 50,
          w: 60,
          h: 110
        }, {
          kind: 0,
          x: 90,
          y: 94,
          w: 32,
          h: 64
        }]
    },
    "219": {
      name: "crouch2",
      pic: 60,
      state: 15,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/012",
      wpoint: {
        kind: 1,
        x: 95, // bengvir: rudolf x: 100
        y: 137, // bengvir: rudolf y: 146
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 54, // bengvir: rudolf x: 52
        y: 68, // bengvir: rudolf y: 60
        w: 61, // bengvir: rudolf w: 66
        h: 90 // bengvir: rudolf h: 98
      }
    },
    "220": {
      name: "injured",
      pic: 120,
      state: 11,
      wait: 2,
      next: 221,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 94,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 94,
        y: 103, // bengvir: rudolf y: 96
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 54, // bengvir: rudolf x: 50
        y: 44, // bengvir: rudolf y: 34
        w: 53, // bengvir: rudolf w: 58
        h: 112 // bengvir: rudolf h: 122
      }
    },
    "221": {
      name: "injured",
      pic: 121,
      state: 11,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 95, // bengvir: rudolf x: 96
        y: 105, // bengvir: rudolf y: 98
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 64,
          y: 32,
          w: 54,
          h: 126
        }, {
          kind: 0,
          x: 44,
          y: 74,
          w: 52,
          h: 84
        }]
    },
    "222": {
      name: "injured",
      pic: 123,
      state: 11,
      wait: 2,
      next: 223,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 81, // bengvir: rudolf x: 82
        y: 105, // bengvir: rudolf y: 98
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 22,
          y: 48,
          w: 78,
          h: 62
        }, {
          kind: 0,
          x: 50,
          y: 106,
          w: 80,
          h: 54
        }]
    },
    "223": {
      name: "injured",
      pic: 124,
      state: 11,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 83, // bengvir: rudolf x: 84
        y: 103, // bengvir: rudolf y: 96
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 24,
          y: 46,
          w: 80,
          h: 74
        }, {
          kind: 0,
          x: 54,
          y: 112,
          w: 72,
          h: 48
        }]
    },
    "224": {
      name: "injured",
      pic: 130,
      state: 11,
      wait: 2,
      next: 225,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92, // bengvir: rudolf x: 94
        y: 89, // bengvir: rudolf y: 80
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 53, // bengvir: rudolf x: 50
        y: 46, // bengvir: rudolf y: 36
        w: 57, // bengvir: rudolf w: 62
        h: 112 // bengvir: rudolf h: 122
      }
    },
    "225": {
      name: "injured",
      pic: 131,
      state: 11,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 88,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 98, // bengvir: rudolf x: 100
        y: 94, // bengvir: rudolf y: 86
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 51, // bengvir: rudolf x: 48
        y: 46, // bengvir: rudolf y: 36
        w: 64, // bengvir: rudolf w: 70
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "226": {
      name: "injured",
      pic: 120,
      state: 16,
      wait: 6,
      next: 227,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 86,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 94,
        y: 103, // bengvir: rudolf y: 92
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: 18, // bengvir: rudolf x: 12
        y: 35, // bengvir: rudolf y: 24
        w: 156, // bengvir: rudolf w: 170
        h: 125, // bengvir: rudolf h: 136
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 57, // bengvir: rudolf x: 54
        y: 53, // bengvir: rudolf y: 44
        w: 77, // bengvir: rudolf w: 84
        h: 107 // bengvir: rudolf h: 116
      }
    },
    "227": {
      name: "injured",
      pic: 122,
      state: 16,
      wait: 6,
      next: 228,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 95, // bengvir: rudolf x: 98
        y: 102, // bengvir: rudolf y: 94
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: 17, // bengvir: rudolf x: 12
        y: 35, // bengvir: rudolf y: 24
        w: 156, // bengvir: rudolf w: 170
        h: 125, // bengvir: rudolf h: 136
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 57, // bengvir: rudolf x: 56
        y: 57, // bengvir: rudolf y: 48
        w: 72, // bengvir: rudolf w: 78
        h: 105 // bengvir: rudolf h: 114
      }
    },
    "228": {
      name: "injured",
      pic: 121,
      state: 16,
      wait: 6,
      next: 229,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 95, // bengvir: rudolf x: 96
        y: 105, // bengvir: rudolf y: 94
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: 17, // bengvir: rudolf x: 12
        y: 35, // bengvir: rudolf y: 24
        w: 156, // bengvir: rudolf w: 170
        h: 125, // bengvir: rudolf h: 136
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 57, // bengvir: rudolf x: 56
        y: 55, // bengvir: rudolf y: 46
        w: 68, // bengvir: rudolf w: 74
        h: 107 // bengvir: rudolf h: 116
      }
    },
    "229": {
      name: "injured",
      pic: 122,
      state: 16,
      wait: 6,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 95, // bengvir: rudolf x: 98
        y: 102, // bengvir: rudolf y: 92
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: 17, // bengvir: rudolf x: 12
        y: 35, // bengvir: rudolf y: 24
        w: 156, // bengvir: rudolf w: 170
        h: 125, // bengvir: rudolf h: 136
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 59, // bengvir: rudolf x: 58
        y: 60, // bengvir: rudolf y: 52
        w: 68, // bengvir: rudolf w: 74
        h: 98 // bengvir: rudolf h: 106
      }
    },
    "230": {
      name: "lying",
      pic: 34,
      state: 14,
      wait: 30,
      next: 219,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 144,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 50,
        y: 148,
        weaponact: 32,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "231": {
      name: "lying",
      pic: 44,
      state: 14,
      wait: 30,
      next: 219,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 150,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 82,
        y: 150,
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      }
    },
    "232": {
      name: "throw_lying_man",
      pic: 27,
      state: 9,
      wait: 3,
      next: 233,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 1,
        x: 58, // bengvir: rudolf x: 56
        y: 29, // bengvir: rudolf y: 18
        vaction: 135,
        throwvz: -842150451,
        throwinjury: -842150451,
        dircontrol: 1
      },
      wpoint: {
        kind: 1,
        x: 84,
        y: 96,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 39, // bengvir: rudolf x: 36
        y: 40, // bengvir: rudolf y: 30
        w: 66, // bengvir: rudolf w: 72
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "233": {
      name: "throw_lying_man",
      pic: 28,
      state: 9,
      wait: 1,
      next: 234,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      cpoint: {
        kind: 1,
        x: 138, // bengvir: rudolf x: 144
        y: 110, // bengvir: rudolf y: 106
        vaction: 181,
        throwvx: 26,
        throwvy: -14,
        throwvz: 6,
        throwinjury: 30
      },
      wpoint: {
        kind: 1,
        x: 92,
        y: 104,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 20,
          y: 56,
          w: 122,
          h: 56
        }, {
          kind: 0,
          x: 38,
          y: 112,
          w: 60,
          h: 48
        }]
    },
    "234": {
      name: "throw_lying_man",
      pic: 28,
      state: 9,
      wait: 4,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 104,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 26,
          y: 60,
          w: 114,
          h: 56
        }, {
          kind: 0,
          x: 38,
          y: 112,
          w: 60,
          h: 48
        }]
    },
    "235": {
      name: "transform",
      pic: 90,
      state: 9,
      wait: 3,
      next: 236,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 150,
      sound: "1/063",
      cpoint: {
        kind: 1,
        x: 118, // bengvir: rudolf x: 122
        y: 84, // bengvir: rudolf y: 78
        vaction: 130,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451
      },
      wpoint: {
        kind: 1,
        x: 94,
        y: 98,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "236": {
      name: "transform",
      pic: 91,
      state: 9,
      wait: 3,
      next: 237,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 1,
        x: 118, // bengvir: rudolf x: 122
        y: 84, // bengvir: rudolf y: 78
        vaction: 130,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451
      },
      wpoint: {
        kind: 1,
        x: 94,
        y: 98,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "237": {
      name: "transform",
      pic: 92,
      state: 9,
      wait: 3,
      next: 238,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 1,
        x: 118, // bengvir: rudolf x: 122
        y: 84, // bengvir: rudolf y: 78
        vaction: 130,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451
      },
      wpoint: {
        kind: 1,
        x: 94,
        y: 98,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "238": {
      name: "transform",
      pic: 93,
      state: 9,
      wait: 3,
      next: 239,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/061",
      opoint: {
        kind: 1,
        x: 82,
        y: 140,
        action: 70,
        dvx: 0,
        dvy: 0,
        oid: 223, // bengvir: rudolf oid: 204
        facing: 0
      },
      cpoint: {
        kind: 1,
        x: 118, // bengvir: rudolf x: 122
        y: 84, // bengvir: rudolf y: 78
        vaction: 130,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451
      },
      wpoint: {
        kind: 1,
        x: 94,
        y: 98,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "239": {
      name: "transform",
      pic: 93,
      state: 9,
      wait: 1,
      next: 240,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 1,
        x: 139, // bengvir: rudolf x: 144
        y: 160,
        vaction: 181,
        throwvx: 16,
        throwvy: -6,
        throwinjury: -1
      },
      wpoint: {
        kind: 1,
        x: 94,
        y: 98,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "240": {
      name: "transform",
      pic: 93,
      state: 9,
      wait: 1,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 94,
        y: 98,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 41, // bengvir: rudolf x: 38
        y: 40, // bengvir: rudolf y: 30
        w: 52, // bengvir: rudolf w: 56
        h: 120 // bengvir: rudolf h: 130
      }
    },
    "245": {
      name: "transform_b",
      pic: 100,
      state: 9,
      wait: 1,
      next: 246,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "246": {
      name: "transform_b",
      pic: 101,
      state: 9,
      wait: 1,
      next: 247,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/063",
      opoint: {
        kind: 1,
        x: 82,
        y: 140,
        action: 70,
        dvx: 0,
        dvy: 0,
        oid: 223, // bengvir: rudolf oid: 204
        facing: 0
      },
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "247": {
      name: "transform_b",
      pic: 102,
      state: 9,
      wait: 1,
      next: 248,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/061",
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "248": {
      name: "transform_b",
      pic: 103,
      state: 9,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "250": {
      name: "disappear",
      pic: 85,
      state: 15,
      wait: 3,
      next: 251,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 350,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "251": {
      name: "disappear",
      pic: 84,
      state: 15,
      wait: 2,
      next: 252,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "252": {
      name: "disappear",
      pic: 85,
      state: 15,
      wait: 2,
      next: 253,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "253": {
      name: "disappear",
      pic: 84,
      state: 15,
      wait: 1,
      next: 254,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "254": {
      name: "disappear",
      pic: 85,
      state: 15,
      wait: 1,
      next: 255,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "255": {
      name: "disappear",
      pic: 84,
      state: 15,
      wait: 1,
      next: 256,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/061",
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "256": {
      name: "disappear",
      pic: 85,
      state: 15,
      wait: 1,
      next: 257,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 82,
        y: 140,
        action: 60,
        dvx: 0,
        dvy: 0,
        oid: 223, // bengvir: rudolf oid: 204
        facing: 0
      },
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "257": {
      name: "disappear",
      pic: 84,
      state: 15,
      wait: 1,
      next: 1280,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "260": {
      name: "+man",
      pic: 85,
      state: 15,
      wait: 3,
      next: 261,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 350,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "261": {
      name: "+man",
      pic: 84,
      state: 15,
      wait: 2,
      next: 262,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/062",
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "262": {
      name: "+man",
      pic: 85,
      state: 15,
      wait: 2,
      next: 263,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "263": {
      name: "+man",
      pic: 84,
      state: 15,
      wait: 1,
      next: 264,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "264": {
      name: "+man",
      pic: 78,
      state: 15,
      wait: 1,
      next: 265,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "265": {
      name: "+man",
      pic: 79,
      state: 15,
      wait: 1,
      next: 266,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "266": {
      name: "+man",
      pic: 88,
      state: 15,
      wait: 1,
      next: 267,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "267": {
      name: "+man",
      pic: 86,
      state: 15,
      wait: 2,
      next: 268,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "268": {
      name: "+man",
      pic: 89,
      state: 15,
      wait: 1,
      next: 269,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "269": {
      name: "+man",
      pic: 87,
      state: 15,
      wait: 1,
      next: 270,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "270": {
      name: "+man",
      pic: 88,
      state: 15,
      wait: 1,
      next: 271,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "271": {
      name: "+man",
      pic: 79,
      state: 15,
      wait: 1,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 80,
        y: 158,
        action: 0,
        dvx: 0,
        dvy: 0,
        oid: 5,
        facing: 20
      },
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "273": {
      name: "jump_sword",
      pic: 156, // bengvir: rudolf pic: 22
      state: 3,
      wait: 1,
      next: 274,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 62,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 120,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 33, // bengvir: rudolf x: 30
        y: 68, // bengvir: rudolf y: 60
        w: 96, // bengvir: rudolf w: 104
        h: 85 // bengvir: rudolf h: 92
      }
    },
    "274": {
      name: "jump_sword",
      pic: 150,
      state: 3,
      wait: 1,
      next: 275,
      dvx: 26,
      dvy: -14,
      dvz: 0,
      centerx: 80,
      centery: 136, // bengvir: rudolf centery: 118
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/017",
      wpoint: {
        kind: 1,
        x: 92,
        y: 74,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 46
        y: 22, // bengvir: rudolf y: 14
        w: 81, // bengvir: rudolf w: 88
        h: 105 // bengvir: rudolf h: 114
      }
    },
    "275": {
      name: "jump_sword",
      pic: 150,
      state: 3,
      wait: 2,
      next: 276,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 128, // bengvir: rudolf centery: 112
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 74,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 46
        y: 20, // bengvir: rudolf y: 12
        w: 79, // bengvir: rudolf w: 86
        h: 103 // bengvir: rudolf h: 112
      }
    },
    "276": {
      name: "jump_sword",
      pic: 151,
      state: 3,
      wait: 1,
      next: 277,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 128, // bengvir: rudolf centery: 114
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/028",
      wpoint: {
        kind: 1,
        x: 62,
        y: 74,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 75, // bengvir: rudolf x: 78
        y: 44, // bengvir: rudolf y: 38
        w: 101, // bengvir: rudolf w: 110
        h: 81, // bengvir: rudolf h: 88
        dvx: 4,
        fall: 60,
        vrest: 15,
        bdefend: 16,
        injury: 35,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 11, // bengvir: rudolf x: 8
        y: 15, // bengvir: rudolf y: 6
        w: 112, // bengvir: rudolf w: 122
        h: 103 // bengvir: rudolf h: 112
      }
    },
    "277": {
      name: "jump_sword",
      pic: 152,
      state: 3,
      wait: 1,
      next: 278,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 46,
      centery: 126, // bengvir: rudolf centery: 114
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 74,
        y: 82,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 64, // bengvir: rudolf x: 66
        y: 11, // bengvir: rudolf y: 2
        w: 90, // bengvir: rudolf w: 98
        h: 70, // bengvir: rudolf h: 76
        dvx: 4,
        fall: 60,
        vrest: 15,
        bdefend: 16,
        injury: 35,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 13, // bengvir: rudolf x: 10
        y: 24, // bengvir: rudolf y: 16
        w: 103, // bengvir: rudolf w: 112
        h: 98 // bengvir: rudolf h: 106
      }
    },
    "278": {
      name: "jump_sword",
      pic: 153,
      state: 3,
      wait: 1,
      next: 279,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 96,
      centery: 123, // bengvir: rudolf centery: 114
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 120,
        y: 84,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 39, // bengvir: rudolf x: 34
        y: 18, // bengvir: rudolf y: 10
        w: 99, // bengvir: rudolf w: 108
        h: 44, // bengvir: rudolf h: 48
        dvx: 4,
        fall: 60,
        vrest: 15,
        bdefend: 16,
        injury: 35,
        effect: 1
      },
      bdy: {
        kind: 0,
        x: 61, // bengvir: rudolf x: 58
        y: 22, // bengvir: rudolf y: 14
        w: 94, // bengvir: rudolf w: 102
        h: 103 // bengvir: rudolf h: 112
      }
    },
    "279": {
      name: "jump_sword",
      pic: 154,
      state: 3,
      wait: 1,
      next: 280,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 88,
      centery: 114, // bengvir: rudolf centery: 108
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 110,
        y: 82,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 55, // bengvir: rudolf x: 52
        y: 18, // bengvir: rudolf y: 10
        w: 92, // bengvir: rudolf w: 100
        h: 109 // bengvir: rudolf h: 118
      }
    },
    "280": {
      name: "jump_sword",
      pic: 155,
      state: 3,
      wait: 1,
      next: 281,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 66,
      centery: 107, // bengvir: rudolf centery: 104
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 88,
        y: 76,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 35, // bengvir: rudolf x: 32
        y: 23, // bengvir: rudolf y: 16
        w: 86, // bengvir: rudolf w: 94
        h: 103 // bengvir: rudolf h: 112
      }
    },
    "281": {
      name: "jump_sword",
      pic: 150,
      state: 3,
      wait: 7,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 108,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/027",
      wpoint: {
        kind: 1,
        x: 100,
        y: 82,
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 43, // bengvir: rudolf x: 40
        y: 20, // bengvir: rudolf y: 12
        w: 90, // bengvir: rudolf w: 98
        h: 105 // bengvir: rudolf h: 114
      }
    },
    "285": {
      name: "punch",
      pic: 38, // bengvir: rudolf pic: 10
      state: 3,
      wait: 3,
      next: 286,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 100,
      wpoint: {
        kind: 1,
        x: 92,
        y: 102,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 46
        y: 40, // bengvir: rudolf y: 30
        w: 57, // bengvir: rudolf w: 62
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "286": {
      name: "punch",
      pic: 58, // bengvir: rudolf pic: 11
      state: 3,
      wait: 1,
      next: 287,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      wpoint: {
        kind: 1,
        x: 92,
        y: 102,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58, // bengvir: rudolf x: 56
        y: 38, // bengvir: rudolf y: 28
        w: 53, // bengvir: rudolf w: 58
        h: 116 // bengvir: rudolf h: 126
      }
    },
    "287": {
      name: "punch",
      pic: 104, // bengvir: rudolf pic: 12
      state: 3,
      wait: 1,
      next: 288,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 102,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 54, // bengvir: rudolf x: 52
        y: 42, // bengvir: rudolf y: 32
        w: 55, // bengvir: rudolf w: 60
        h: 118 // bengvir: rudolf h: 128
      }
    },
    "288": {
      name: "punch",
      pic: 115, // bengvir: rudolf pic: 13
      state: 3,
      wait: 1,
      next: 289,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 126, // bengvir: rudolf x: 150
        y: 91, // bengvir: rudolf y: 114
        action: 40,
        dvx: 32, // bengvir: rudolf dvx: 34
        dvy: -6,
        oid: 222, // bengvir: rudolf oid: 202
        facing: 50
      },
      wpoint: {
        kind: 1,
        x: 92,
        y: 102,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 46
        y: 35, // bengvir: rudolf y: 24
        w: 59, // bengvir: rudolf w: 64
        h: 127 // bengvir: rudolf h: 138
      }
    },
    "289": {
      name: "punch",
      pic: 116, // bengvir: rudolf pic: 13
      state: 3,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 285,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 102,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 49, // bengvir: rudolf x: 46
        y: 35, // bengvir: rudolf y: 24
        w: 59, // bengvir: rudolf w: 64
        h: 127 // bengvir: rudolf h: 138
      }
    },
    "295": {
      name: "transform",
      pic: 103,
      state: 500,
      wait: 3,
      next: 296,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "296": {
      name: "transform",
      pic: 102,
      state: 9,
      wait: 2,
      next: 297,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/063",
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "297": {
      name: "transform",
      pic: 101,
      state: 9,
      wait: 1,
      next: 298,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/061",
      opoint: {
        kind: 1,
        x: 82,
        y: 140,
        action: 70,
        dvx: 0,
        dvy: 0,
        oid: 223, // bengvir: rudolf oid: 204
        facing: 0
      },
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "298": {
      name: "transform",
      pic: 100,
      state: 501,
      wait: 1,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 92,
        y: 98,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    },
    "399": {
      name: "dummy",
      pic: 0,
      state: 0,
      wait: 0,
      next: 0,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 45, // bengvir: rudolf x: 42
        y: 46, // bengvir: rudolf y: 36
        w: 79, // bengvir: rudolf w: 86
        h: 114 // bengvir: rudolf h: 124
      }
    }
  }
});
