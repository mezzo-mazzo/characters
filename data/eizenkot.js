define({
  bmp: {
    file: [{
        "file(0-69)": "sprite/eizenkot_0.png", // eizenkot: firen "sprite/firen_0.png"
        w: 159,
        h: 159,
        row: 10,
        col: 7
      }, {
        "file(70-139)": "sprite/eizenkot_1.png", // eizenkot: firen "sprite/firen_1.png"
        w: 159,
        h: 159,
        row: 10,
        col: 7
      }, {
        "file(140-209)": "sprite/eizenkot_2.png", // eizenkot: firen "sprite/firen_2.png"
        w: 159,
        h: 159,
        row: 10,
        col: 7
      }],
    name: "Eizenkot", // eizenkot: firen "Firen"
    head: "sprite/eizenkot_f.png", // eizenkot: firen "sprite/firen_f.png"
    small: "sprite/eizenkot_s.png", // eizenkot: firen "sprite/firen_s.png"
    walking_frame_rate: 3,
    walking_speed: 10,
    walking_speedz: 5,
    running_frame_rate: 3,
    running_speed: 19.2,
    running_speedz: 3.16,
    heavy_walking_speed: 7.4,
    heavy_walking_speedz: 3.7,
    heavy_running_speed: 12.4,
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      bpoint: {
        x: 82,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 48, // eizenkot: firen 58
        y: 90, // eizenkot: firen 110
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 42,
        y: 36,
        w: 86,
        h: 124
      }
    },
    "1": {
      name: "standing",
      pic: 1,
      state: 0,
      wait: 6,
      next: 2,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      bpoint: {
        x: 82,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 49, // eizenkot: firen 58
        y: 91, // eizenkot: firen 108
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 42,
        y: 36,
        w: 86,
        h: 124
      }
    },
    "2": {
      name: "standing",
      pic: 2,
      state: 0,
      wait: 5,
      next: 3,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      bpoint: {
        x: 82,
        y: 68
      },
      wpoint: {
        kind: 1,
        x: 50, // eizenkot: firen 54
        y: 92, // eizenkot: firen 108
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 42,
        y: 36,
        w: 86,
        h: 124
      }
    },
    "3": {
      name: "standing",
      pic: 3,
      state: 0,
      wait: 5,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      bpoint: {
        x: 82,
        y: 68
      },
      wpoint: {
        kind: 1,
        x: 49, // eizenkot: firen 54
        y: 91, // eizenkot: firen 108
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 42,
        y: 36,
        w: 86,
        h: 124
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
      centerx: 78,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      bpoint: {
        x: 82,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 63, // eizenkot: firen 64
        y: 82, // eizenkot: firen 108
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 1,
        x: 80,
        y: 32,
        w: 50,
        h: 130,
        catchingact: [120, 120],
        caughtact: [130, 130]
      },
      bdy: {
        kind: 0,
        x: 56,
        y: 30,
        w: 54,
        h: 130
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      bpoint: {
        x: 82,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 62, // eizenkot: firen 58
        y: 88, // eizenkot: firen 110
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 1,
        x: 80,
        y: 32,
        w: 50,
        h: 130,
        catchingact: [120, 120],
        caughtact: [130, 130]
      },
      bdy: {
        kind: 0,
        x: 56,
        y: 30,
        w: 54,
        h: 130
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      bpoint: {
        x: 82,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 56,
        y: 87, // eizenkot: firen 110
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 1,
        x: 80,
        y: 32,
        w: 50,
        h: 130,
        catchingact: [120, 120],
        caughtact: [130, 130]
      },
      bdy: {
        kind: 0,
        x: 56,
        y: 30,
        w: 54,
        h: 130
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
      centerx: 78,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      bpoint: {
        x: 82,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 52,
        y: 85, // eizenkot: firen 112
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 1,
        x: 80,
        y: 32,
        w: 50,
        h: 130,
        catchingact: [120, 120],
        caughtact: [130, 130]
      },
      bdy: {
        kind: 0,
        x: 56,
        y: 30,
        w: 54,
        h: 130
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
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/003",
      bpoint: {
        x: 88,
        y: 76
      },
      wpoint: {
        kind: 1,
        x: 106, // eizenkot: firen 120
        y: 81, // eizenkot: firen 80
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 38,
        w: 76,
        h: 120
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
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 98,
        y: 76
      },
      wpoint: {
        kind: 1,
        x: 92, // eizenkot: firen 84
        y: 86, // eizenkot: firen 100
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 38,
        w: 76,
        h: 120
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
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/004",
      bpoint: {
        x: 92,
        y: 78
      },
      wpoint: {
        kind: 1,
        x: 58, // eizenkot: firen 38
        y: 75, // eizenkot: firen 96
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 38,
        w: 76,
        h: 120
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
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 80,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 79, // eizenkot: firen 78
        y: 9, // eizenkot: firen 40
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58,
        y: 30,
        w: 56,
        h: 128
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
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 80,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 81, // eizenkot: firen 78
        y: 9, // eizenkot: firen 40
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58,
        y: 30,
        w: 56,
        h: 128
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
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 80,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 83, // eizenkot: firen 78
        y: 9, // eizenkot: firen 40
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58,
        y: 30,
        w: 56,
        h: 128
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 80,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 87, // eizenkot: firen 78
        y: 9, // eizenkot: firen 40
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58,
        y: 30,
        w: 56,
        h: 128
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
      centerx: 60,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/003",
      bpoint: {
        x: 72,
        y: 72
      },
      wpoint: {
        kind: 1,
        x: 73, // eizenkot: firen 70
        y: 9, // eizenkot: firen 42
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58,
        y: 30,
        w: 56,
        h: 128
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
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bpoint: {
        x: 84,
        y: 72
      },
      wpoint: {
        kind: 1,
        x: 83, // eizenkot: firen 82
        y: 9, // eizenkot: firen 42
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58,
        y: 30,
        w: 56,
        h: 128
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
      centerx: 66,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/004",
      bpoint: {
        x: 74,
        y: 72
      },
      wpoint: {
        kind: 1,
        x: 71, // eizenkot: firen 72
        y: 9, // eizenkot: firen 42
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 58,
        y: 30,
        w: 56,
        h: 128
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
      centerx: 58,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/009",
      bpoint: {
        x: 68,
        y: 72
      },
      wpoint: {
        kind: 1,
        x: 67, // eizenkot: firen 66
        y: 9, // eizenkot: firen 44
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 10,
        y: 30,
        w: 90,
        h: 130
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
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 38,
        y: 72, // eizenkot: firen 96
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 36,
        y: 22,
        w: 66,
        h: 138
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
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 117, // eizenkot: firen 82
        y: 63, // eizenkot: firen 32
        weaponact: 32,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 48,
        y: 26,
        w: 66,
        h: 132
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
      centerx: 58,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 120, // eizenkot: firen 132
        y: 102, // eizenkot: firen 100
        weaponact: 23,
        attacking: 1,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 22,
        w: 72,
        h: 136
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
      centerx: 46,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 116, // eizenkot: firen 128
        y: 110, // eizenkot: firen 108
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 36,
          y: 18,
          w: 72,
          h: 132
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
        x: 90,
        y: 84,
        weaponact: 33,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 42,
        y: 22,
        w: 60,
        h: 138
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
      centerx: 62,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 70, // eizenkot: firen 86
        y: 83, // eizenkot: firen 80
        weaponact: 32,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 34,
        y: 22,
        w: 64,
        h: 136
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
      centerx: 60,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 121, // eizenkot: firen 130
        y: 97, // eizenkot: firen 100
        weaponact: 24,
        attacking: 1,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 36,
        y: 20,
        w: 72,
        h: 142
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
        x: 33, // eizenkot: firen 80
        y: 84, // eizenkot: firen 100
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 22,
        w: 68,
        h: 136
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
      centerx: 80,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 38, // eizenkot: firen 44
        y: 62, // eizenkot: firen 70
        weaponact: 33,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 14,
        w: 64,
        h: 116
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
      centerx: 70,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 112, // eizenkot: firen 94
        y: 67, // eizenkot: firen 18
        weaponact: 32,
        attacking: 2,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 52,
          y: 14,
          w: 52,
          h: 78
        }, {
          kind: 0,
          x: 26,
          y: 80,
          w: 48,
          h: 60
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
      centerx: 58,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 132,
        y: 90,
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
      centerx: 60,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 112,
        y: 100,
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
      pic: 84,
      state: 3,
      wait: 1,
      next: 36,
      dvx: 12,
      dvy: 0,
      dvz: 0,
      centerx: 62,
      centery: 160,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 88, // eizenkot: firen 80
        y: 68, // eizenkot: firen 84
        weaponact: 32,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 42,
        y: 30,
        w: 62,
        h: 130
      }
    },
    "36": {
      name: "run_weapon_atck",
      pic: 85,
      state: 3,
      wait: 2,
      next: 37,
      dvx: 8,
      dvy: 0,
      dvz: 0,
      centerx: 54,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 120, // eizenkot: firen 130
        y: 99, // eizenkot: firen 100
        weaponact: 24,
        attacking: 3,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 46,
        y: 30,
        w: 68,
        h: 130
      }
    },
    "37": {
      name: "run_weapon_atck",
      pic: 86,
      state: 3,
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
        x: 36, // eizenkot: firen 76
        y: 85, // eizenkot: firen 100
        weaponact: 24,
        attacking: 3,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 38,
        y: 34,
        w: 68,
        h: 128
      }
    },
    "40": {
      name: "dash_weapon_atck",
      pic: 90,
      state: 3,
      wait: 1,
      next: 41,
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
        x: 34, // eizenkot: firen 46
        y: 58, // eizenkot: firen 70
        weaponact: 33,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 20,
        w: 70,
        h: 104
      }
    },
    "41": {
      name: "dash_weapon_atck",
      pic: 91,
      state: 3,
      wait: 1,
      next: 42,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 62,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 112, // eizenkot: firen 94
        y: 67, // eizenkot: firen 18
        weaponact: 32,
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
      pic: 92,
      state: 3,
      wait: 1,
      next: 43,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 52,
      centery: 160,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 128,
        y: 92,
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
      pic: 93,
      state: 3,
      wait: 8,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 50,
      centery: 162,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 112,
        y: 104,
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
        x: 34, // eizenkot: firen 24
        y: 70, // eizenkot: firen 96
        weaponact: 35,
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
      centerx: 86,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 121, // eizenkot: firen 80
        y: 33, // eizenkot: firen 30
        weaponact: 32,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 48,
        y: 44,
        w: 64,
        h: 114
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
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 218,
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
        x: 65, // eizenkot: firen 66
        y: 11, // eizenkot: firen 50
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 56,
        y: 38,
        w: 60,
        h: 124
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
        x: 186,
        y: 74,
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
          x: 38,
          y: 112,
          w: 60,
          h: 48
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
      centerx: 82,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 36, // eizenkot: firen 26
        y: 56, // eizenkot: firen 92
        weaponact: 34,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 30,
        y: 18,
        w: 58,
        h: 108
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
      centerx: 86,
      centery: 160,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/008",
      wpoint: {
        kind: 1,
        x: 105, // eizenkot: firen 90
        y: 47, // eizenkot: firen 24
        weaponact: 33,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 70,
          y: 20,
          w: 72,
          h: 46
        }, {
          kind: 0,
          x: 30,
          y: 36,
          w: 60,
          h: 86
        }]
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
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 133, // eizenkot: firen 150
        y: 138, // eizenkot: firen 130
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 32,
        dvy: 16,
        dvz: 6
      },
      bdy: [{
          kind: 0,
          x: 44,
          y: 30,
          w: 76,
          h: 76
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
      pic: 132,
      state: 17,
      wait: 3,
      next: 56,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 999,
      hit_j: 0,
      sound: "1/042",
      wpoint: {
        kind: 1,
        x: 114, // eizenkot: firen 126
        y: 46, // eizenkot: firen 44
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 30,
        y: 24,
        w: 74,
        h: 134
      }
    },
    "56": {
      name: "weapon_drink",
      pic: 133,
      state: 17,
      wait: 3,
      next: 57,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 999,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 112, // eizenkot: firen 124
        y: 44, // eizenkot: firen 42
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 32,
        y: 40,
        w: 72,
        h: 118
      }
    },
    "57": {
      name: "weapon_drink",
      pic: 134,
      state: 17,
      wait: 3,
      next: 58,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 999,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 110, // eizenkot: firen 120
        y: 42, // eizenkot: firen 40
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 34,
        y: 34,
        w: 64,
        h: 126
      }
    },
    "58": {
      name: "weapon_drink",
      pic: 133,
      state: 17,
      wait: 3,
      next: 55,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 999,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 112, // eizenkot: firen 124
        y: 44, // eizenkot: firen 42
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 32,
        y: 26,
        w: 72,
        h: 130
      }
    },
    "60": {
      name: "punch",
      pic: 10,
      state: 3,
      wait: 2,
      next: 61,
      dvx: 2,
      dvy: 0,
      dvz: 0,
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 2,
        x: 42,
        y: 114,
        w: 74,
        h: 48,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "61": {
      name: "punch",
      pic: 11,
      state: 3,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      itr: {
        kind: 0,
        x: 66,
        y: 66,
        w: 84,
        h: 32,
        dvx: 4,
        bdefend: 16,
        injury: 20
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 22,
        w: 70,
        h: 138
      }
    },
    "65": {
      name: "punch",
      pic: 12,
      state: 3,
      wait: 2,
      next: 66,
      dvx: 2,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 2,
        x: 32,
        y: 118,
        w: 70,
        h: 42,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "66": {
      name: "punch",
      pic: 13,
      state: 3,
      wait: 3,
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
      itr: {
        kind: 0,
        x: 84,
        y: 8,
        w: 66,
        h: 104,
        dvx: 4,
        bdefend: 16,
        injury: 20
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 24,
        w: 74,
        h: 138
      }
    },
    "70": {
      name: "super_punch",
      pic: 17,
      state: 3,
      wait: 2,
      next: 71,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      bdy: {
        kind: 0,
        x: 44,
        y: 28,
        w: 60,
        h: 130
      }
    },
    "71": {
      name: "super_punch",
      pic: 18,
      state: 3,
      wait: 2,
      next: 72,
      dvx: 8,
      dvy: 0,
      dvz: 0,
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 58,
        y: 74,
        w: 90,
        h: 54,
        dvy: -4,
        fall: 1,
        injury: 10
      },
      bdy: {
        kind: 0,
        x: 40,
        y: 24,
        w: 52,
        h: 130
      }
    },
    "72": {
      name: "super_punch",
      pic: 19,
      state: 3,
      wait: 2,
      next: 73,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 28,
        y: 34,
        w: 68,
        h: 124
      }
    },
    "73": {
      name: "super_punch",
      pic: 29,
      state: 3,
      wait: 2,
      next: 74,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 62,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 40,
        y: 32,
        w: 58,
        h: 126
      }
    },
    "74": {
      name: "super_punch",
      pic: 39,
      state: 3,
      wait: 2,
      next: 75,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 48,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 46,
        y: 56,
        w: 120,
        h: 58,
        dvx: 30,
        dvy: -12,
        fall: 70,
        arest: 15,
        bdefend: 60,
        injury: 45
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 34,
        w: 72,
        h: 122
      }
    },
    "75": {
      name: "super_punch",
      pic: 49,
      state: 3,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 56,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 34,
        y: 28,
        w: 70,
        h: 128
      }
    },
    "80": {
      name: "jump_attack",
      pic: 14,
      state: 3,
      wait: 2,
      next: 81,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 150,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      bdy: {
        kind: 0,
        x: 30,
        y: 20,
        w: 78,
        h: 126
      }
    },
    "81": {
      name: "jump_attack",
      pic: 15,
      state: 3,
      wait: 3,
      next: 82,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 66,
      centery: 152,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 60,
        y: 88,
        w: 84,
        h: 54,
        dvx: 14,
        fall: 70,
        arest: 15,
        bdefend: 30,
        injury: 35
      },
      bdy: {
        kind: 0,
        x: 42,
        y: 28,
        w: 66,
        h: 114
      }
    },
    "82": {
      name: "jump_attack",
      pic: 16,
      state: 3,
      wait: 5,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 148,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 56,
        y: 72,
        w: 88,
        h: 44,
        dvx: 14,
        fall: 70,
        arest: 15,
        bdefend: 30,
        injury: 35
      },
      bdy: {
        kind: 0,
        x: 34,
        y: 26,
        w: 78,
        h: 116
      }
    },
    "85": {
      name: "run_attack",
      pic: 102,
      state: 3,
      wait: 1,
      next: 86,
      dvx: 12,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: [{
          kind: 0,
          x: 38,
          y: 48,
          w: 70,
          h: 108
        }, {
          kind: 0,
          x: 20,
          y: 72,
          w: 54,
          h: 30
        }]
    },
    "86": {
      name: "run_attack",
      pic: 103,
      state: 3,
      wait: 1,
      next: 87,
      dvx: 8,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      bdy: [{
          kind: 0,
          x: 16,
          y: 102,
          w: 76,
          h: 54
        }, {
          kind: 0,
          x: 18,
          y: 16,
          w: 70,
          h: 94
        }]
    },
    "87": {
      name: "run_attack",
      pic: 104,
      state: 3,
      wait: 2,
      next: 88,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 56,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 58,
        y: 44,
        w: 94,
        h: 74,
        dvx: 20,
        fall: 70,
        arest: 15,
        bdefend: 16,
        injury: 50
      },
      bdy: [{
          kind: 0,
          x: 20,
          y: 118,
          w: 82,
          h: 48
        }, {
          kind: 0,
          x: 46,
          y: 38,
          w: 64,
          h: 74
        }]
    },
    "88": {
      name: "run_attack",
      pic: 105,
      state: 3,
      wait: 4,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 56,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 58,
        y: 44,
        w: 94,
        h: 74,
        dvx: 20,
        fall: 70,
        arest: 15,
        bdefend: 16,
        injury: 50
      },
      bdy: [{
          kind: 0,
          x: 62,
          y: 54,
          w: 66,
          h: 56
        }, {
          kind: 0,
          x: 14,
          y: 110,
          w: 96,
          h: 52
        }]
    },
    "90": {
      name: "dash_attack",
      pic: 106,
      state: 15,
      wait: 3,
      next: 91,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: [{
          kind: 0,
          x: 48,
          y: 36,
          w: 50,
          h: 110
        }, {
          kind: 0,
          x: 26,
          y: 72,
          w: 104,
          h: 36
        }, {
          kind: 0,
          x: 62,
          y: 18,
          w: 50,
          h: 58
        }]
    },
    "91": {
      name: "dash_attack",
      pic: 107,
      state: 15,
      wait: 1,
      next: 92,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 62,
      centery: 156,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      itr: {
        kind: 0,
        x: 54,
        y: 76,
        w: 106,
        h: 46,
        dvx: 24,
        fall: 70,
        arest: 20,
        bdefend: 60,
        injury: 70
      },
      bdy: [{
          kind: 0,
          x: 44,
          y: 80,
          w: 66,
          h: 52
        }, {
          kind: 0,
          x: 48,
          y: 12,
          w: 60,
          h: 68
        }]
    },
    "92": {
      name: "dash_attack",
      pic: 108,
      state: 15,
      wait: 3,
      next: 216,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 66,
      centery: 154,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      itr: {
        kind: 0,
        x: 54,
        y: 76,
        w: 106,
        h: 46,
        dvx: 24,
        fall: 70,
        arest: 20,
        bdefend: 60,
        injury: 70
      },
      bdy: [{
          kind: 0,
          x: 46,
          y: 76,
          w: 56,
          h: 50
        }, {
          kind: 0,
          x: 44,
          y: 72,
          w: 100,
          h: 36
        }, {
          kind: 0,
          x: 48,
          y: 12,
          w: 60,
          h: 68
        }]
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
        x: 42,
        y: 54,
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
      centerx: 80,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/017",
      wpoint: {
        kind: 1,
        x: 42, // eizenkot: firen 56
        y: 82, // eizenkot: firen 84
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
        x: 68, // eizenkot: firen 60
        y: 148,
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
      pic: 58,
      state: 6,
      wait: 2,
      next: 103,
      dvx: 18,
      dvy: 0,
      dvz: 0,
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 76,
        y: 150,
        weaponact: 22,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 7,
        x: 72,
        y: 108,
        w: 26,
        h: 50,
        vrest: 1
      }
    },
    "103": {
      name: "rowing",
      pic: 59,
      state: 6,
      wait: 2,
      next: 104,
      dvx: 18,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 86,
        y: 94,
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 7,
        x: 72,
        y: 108,
        w: 26,
        h: 50,
        vrest: 1
      }
    },
    "104": {
      name: "rowing",
      pic: 69,
      state: 6,
      wait: 2,
      next: 105,
      dvx: 18,
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
        y: 122,
        weaponact: 25,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 7,
        x: 72,
        y: 108,
        w: 26,
        h: 50,
        vrest: 1
      }
    },
    "105": {
      name: "rowing",
      pic: 58,
      state: 6,
      wait: 2,
      next: 219,
      dvx: 18,
      dvy: 0,
      dvz: 0,
      centerx: 76,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 70,
        y: 148,
        weaponact: 22,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 7,
        x: 72,
        y: 108,
        w: 26,
        h: 50,
        vrest: 1
      }
    },
    "106": {
      name: "rowing",
      pic: 59,
      state: 6,
      wait: 2,
      next: 219,
      dvx: 18,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 88,
        y: 96,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 7,
        x: 586,
        y: 396,
        w: 2,
        h: 2,
        vrest: 1
      }
    },
    "107": {
      name: "rowing",
      pic: 69,
      state: 6,
      wait: 2,
      next: 219,
      dvx: 18,
      dvy: 0,
      dvz: 0,
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 40,
        y: 118,
        weaponact: 25,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 7,
        x: 72,
        y: 108,
        w: 26,
        h: 50,
        vrest: 1
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
      sound: "1/017",
      wpoint: {
        kind: 1,
        x: 83, // eizenkot: firen 74
        y: 84, // eizenkot: firen 68
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
      wpoint: {
        kind: 1,
        x: 21, // eizenkot: firen 34
        y: 72, // eizenkot: firen 80
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      wpoint: {
        kind: 1,
        x: 82, // eizenkot: firen 62
        y: 80, // eizenkot: firen 90
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 40,
        y: 38,
        w: 76,
        h: 120
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      hit_Fa: 235,
      hit_Fj: 255,
      hit_Uj: 285,
      hit_Dj: 267,
      wpoint: {
        kind: 1,
        x: 80, // eizenkot: firen 60
        y: 82, // eizenkot: firen 90
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 32,
        y: 38,
        w: 84,
        h: 120
      }
    },
    "112": {
      name: "broken_defend",
      pic: 46,
      state: 8,
      wait: 1,
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
        x: 74, // eizenkot: firen 12
        y: 106, // eizenkot: firen 84
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: -18,
        y: 32,
        w: 170,
        h: 130,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 10,
        y: 34,
        w: 128,
        h: 130
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
        x: 46, // eizenkot: firen 24
        y: 114, // eizenkot: firen 108
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: -18,
        y: 32,
        w: 170,
        h: 130,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 10,
        y: 34,
        w: 128,
        h: 130
      }
    },
    "114": {
      name: "broken_defend",
      pic: 48,
      state: 8,
      wait: 3,
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
        x: 80, // eizenkot: firen 58
        y: 86, // eizenkot: firen 100
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: -18,
        y: 32,
        w: 170,
        h: 130,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 10,
        y: 34,
        w: 128,
        h: 130
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
      centerx: 92,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/009",
      wpoint: {
        kind: 1,
        x: 86, // eizenkot: firen 68
        y: 149, // eizenkot: firen 138
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 48,
          y: 86,
          w: 66,
          h: 74
        }, {
          kind: 0,
          x: 64,
          y: 48,
          w: 56,
          h: 56
        }]
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
      centerx: 92,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/009",
      wpoint: {
        kind: 1,
        x: 86, // eizenkot: firen 84
        y: 149, // eizenkot: firen 158
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 48,
          y: 86,
          w: 66,
          h: 74
        }, {
          kind: 0,
          x: 72,
          y: 52,
          w: 52,
          h: 50
        }]
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
      centerx: 92,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 86, // eizenkot: firen 84
        y: 149, // eizenkot: firen 140
        weaponact: 10,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 48,
          y: 86,
          w: 66,
          h: 74
        }, {
          kind: 0,
          x: 68,
          y: 38,
          w: 52,
          h: 74
        }]
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
        x: 134,
        y: 78,
        vaction: 131,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451,
        decrease: 7
      },
      wpoint: {
        kind: 1,
        x: 107, // eizenkot: firen 110
        y: 69, // eizenkot: firen 78
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 38,
        y: 30,
        w: 56,
        h: 130
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
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 1,
        x: 122,
        y: 78,
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
        x: 94, // eizenkot: firen 116
        y: 82, // eizenkot: firen 84
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 38,
        y: 30,
        w: 56,
        h: 130
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
        x: 122,
        y: 78,
        vaction: 130,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451,
        decrease: 7
      },
      wpoint: {
        kind: 1,
        x: 107, // eizenkot: firen 112
        y: 69, // eizenkot: firen 80
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 38,
        y: 30,
        w: 56,
        h: 130
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
      centerx: 62,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/014",
      cpoint: {
        kind: 1,
        x: 116,
        y: 76,
        injury: 15,
        vaction: 132,
        throwvz: -842150451,
        hurtable: 1,
        throwinjury: -842150451,
        decrease: 3
      },
      wpoint: {
        kind: 1,
        x: 93, // eizenkot: firen 112
        y: 72, // eizenkot: firen 80
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 38,
        y: 30,
        w: 56,
        h: 130
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
        y: 78,
        fronthurtact: 132,
        backhurtact: 131
      },
      wpoint: {
        kind: 1,
        x: 56,
        y: 108,
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 28,
        w: 56,
        h: 132
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
        x: 86,
        y: 78,
        fronthurtact: 132,
        backhurtact: 132
      },
      wpoint: {
        kind: 1,
        x: 50, // eizenkot: firen 66
        y: 98, // eizenkot: firen 106
        weaponact: 30,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 28,
        w: 56,
        h: 132
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
        y: 78,
        fronthurtact: 131,
        backhurtact: 131
      },
      wpoint: {
        kind: 1,
        x: 88, // eizenkot: firen 64
        y: 72, // eizenkot: firen 98
        weaponact: 31,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 28,
        w: 56,
        h: 132
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
        x: 66,
        y: 72
      },
      wpoint: {
        kind: 1,
        x: 58,
        y: 80,
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      cpoint: {
        kind: 2,
        x: 74,
        y: 56
      },
      wpoint: {
        kind: 1,
        x: 58,
        y: 82,
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
        x: 62,
        y: 44
      },
      wpoint: {
        kind: 1,
        x: 62,
        y: 88,
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
        x: 54,
        y: 92
      },
      wpoint: {
        kind: 1,
        x: 70,
        y: 80,
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
        x: 66,
        y: 136
      },
      wpoint: {
        kind: 1,
        x: 66,
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
        x: 68,
        y: 108
      },
      wpoint: {
        kind: 1,
        x: 78,
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
        y: 72
      },
      wpoint: {
        kind: 1,
        x: 56,
        y: 96,
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
        y: 76
      },
      wpoint: {
        kind: 1,
        x: 62,
        y: 76,
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
        x: 88,
        y: 80
      },
      wpoint: {
        kind: 1,
        x: 98,
        y: 100,
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
        x: 92,
        y: 102
      },
      wpoint: {
        kind: 1,
        x: 106,
        y: 138,
        weaponact: 24,
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
        x: 90,
        y: 132
      },
      wpoint: {
        kind: 1,
        x: 104,
        y: 148,
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
        y: 110
      },
      wpoint: {
        kind: 1,
        x: 80,
        y: 144,
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
        x: 60,
        y: 84,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 4,
        x: 42,
        y: 28,
        w: 58,
        h: 88,
        dvx: 4,
        fall: 70,
        vrest: 20,
        bdefend: 10,
        injury: 30
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 50,
        w: 42,
        h: 40
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
        x: 58,
        y: 80,
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
        x: 44,
        y: 40,
        w: 48,
        h: 46
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
        x: 60,
        y: 92,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 4,
        x: 26,
        y: 36,
        w: 92,
        h: 52,
        dvx: 4,
        fall: 70,
        vrest: 20,
        bdefend: 10,
        injury: 30
      },
      bdy: {
        kind: 0,
        x: 54,
        y: 44,
        w: 40,
        h: 36
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
        x: 58,
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
        x: 44,
        y: 60,
        w: 54,
        h: 42
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
        x: 72,
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
        x: 74,
        y: 138,
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
        x: 58,
        y: 90,
        weaponact: 34,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 4,
        x: 44,
        y: 24,
        w: 72,
        h: 100,
        dvx: 4,
        fall: 70,
        vrest: 20,
        bdefend: 10,
        injury: 30
      },
      bdy: {
        kind: 0,
        x: 62,
        y: 48,
        w: 50,
        h: 46
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
        x: 66,
        y: 74,
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
        x: 56,
        y: 54,
        w: 48,
        h: 52
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
        x: 100,
        y: 102,
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 4,
        x: 28,
        y: 58,
        w: 116,
        h: 46,
        dvx: 4,
        fall: 70,
        vrest: 20,
        bdefend: 10,
        injury: 30
      },
      bdy: {
        kind: 0,
        x: 60,
        y: 62,
        w: 48,
        h: 42
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
        x: 110,
        y: 140,
        weaponact: 24,
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
        x: 60,
        y: 78,
        w: 46,
        h: 42
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
        x: 114,
        y: 148,
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
        x: 80,
        y: 144,
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
        x: 20,
        y: 18,
        w: 110,
        h: 136
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
        x: 16,
        y: 12,
        w: 134,
        h: 146,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 12,
        w: 134,
        h: 146
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
        x: 16,
        y: 12,
        w: 134,
        h: 146
      }
    },
    "203": {
      name: "fire",
      pic: 37,
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
        x: 44,
        y: 70,
        w: 52,
        h: 38,
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
        x: 44,
        y: 70,
        w: 52,
        h: 38
      }
    },
    "204": {
      name: "fire",
      pic: 38,
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
        x: 44,
        y: 70,
        w: 52,
        h: 38,
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
        x: 44,
        y: 70,
        w: 52,
        h: 38
      }
    },
    "205": {
      name: "fire",
      pic: 67,
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
        x: 44,
        y: 70,
        w: 52,
        h: 38,
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
        x: 44,
        y: 70,
        w: 52,
        h: 38
      }
    },
    "206": {
      name: "fire",
      pic: 68,
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
        x: 44,
        y: 70,
        w: 52,
        h: 38,
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
        x: 44,
        y: 70,
        w: 52,
        h: 38
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
        x: 40, // eizenkot: firen 84
        y: 122, // eizenkot: firen 128
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 86, // eizenkot: firen 38
        y: 126, // eizenkot: firen 118
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 44,
        y: 48,
        w: 70,
        h: 116
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
      centerx: 84,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/017",
      wpoint: {
        kind: 1,
        x: 86, // eizenkot: firen 34
        y: 128, // eizenkot: firen 118
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 52,
        w: 68,
        h: 112
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
        x: 80,
        y: 48
      },
      wpoint: {
        kind: 1,
        x: 66, // eizenkot: firen 46
        y: 72, // eizenkot: firen 74
        weaponact: 35,
        attacking: 0,
        cover: 0,
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
        x: 104,
        y: 54
      },
      wpoint: {
        kind: 1,
        x: 72, // eizenkot: firen 64
        y: 72, // eizenkot: firen 74
        weaponact: 21,
        attacking: 0,
        cover: 0,
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
        x: 58,
        y: 48
      },
      wpoint: {
        kind: 1,
        x: 60, // eizenkot: firen 32
        y: 80, // eizenkot: firen 84
        weaponact: 22,
        attacking: 0,
        cover: 0,
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/012",
      bpoint: {
        x: 86,
        y: 96
      },
      wpoint: {
        kind: 1,
        x: 86, // eizenkot: firen 36
        y: 126, // eizenkot: firen 118
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 52,
        w: 62,
        h: 108
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
        x: 104,
        y: 60
      },
      wpoint: {
        kind: 1,
        x: 70, // eizenkot: firen 50
        y: 72, // eizenkot: firen 88
        weaponact: 25,
        attacking: 0,
        cover: 0,
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
        x: 58,
        y: 54
      },
      wpoint: {
        kind: 1,
        x: 58, // eizenkot: firen 20
        y: 78, // eizenkot: firen 74
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 36,
        y: 26,
        w: 58,
        h: 102
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
        x: 78,
        y: 70
      },
      wpoint: {
        kind: 1,
        x: 82, // eizenkot: firen 30
        y: 86, // eizenkot: firen 98
        weaponact: 20,
        attacking: 0,
        cover: 0,
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/012",
      wpoint: {
        kind: 1,
        x: 86, // eizenkot: firen 40
        y: 126, // eizenkot: firen 120
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 72,
        w: 58,
        h: 88
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
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 88, // eizenkot: firen 52
        y: 106, // eizenkot: firen 104
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 50,
        y: 34,
        w: 58,
        h: 122
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
      centerx: 70,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 88, // eizenkot: firen 74
        y: 101, // eizenkot: firen 100
        weaponact: 22,
        attacking: 0,
        cover: 0,
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
        x: 84, // eizenkot: firen 78
        y: 78, // eizenkot: firen 108
        weaponact: 20,
        attacking: 0,
        cover: 0,
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
        x: 88, // eizenkot: firen 80
        y: 80, // eizenkot: firen 112
        weaponact: 21,
        attacking: 0,
        cover: 0,
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
      centerx: 96,
      centery: 150,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 48, // eizenkot: firen 56
        y: 108, // eizenkot: firen 106
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: [{
          kind: 0,
          x: 64,
          y: 36,
          w: 56,
          h: 120
        }, {
          kind: 0,
          x: 104,
          y: 76,
          w: 40,
          h: 38
        }]
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
      centery: 150,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 54, // eizenkot: firen 56
        y: 108, // eizenkot: firen 98
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 48,
        y: 36,
        w: 70,
        h: 126
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
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 88, // eizenkot: firen 50
        y: 106,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: 12,
        y: 24,
        w: 170,
        h: 136,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 54,
        y: 44,
        w: 84,
        h: 116
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 90,
        y: 104,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: 12,
        y: 24,
        w: 170,
        h: 136,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 56,
        y: 48,
        w: 78,
        h: 114
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
        x: 88, // eizenkot: firen 68
        y: 101, // eizenkot: firen 106
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: 12,
        y: 24,
        w: 170,
        h: 136,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 56,
        y: 46,
        w: 74,
        h: 116
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 88,
        y: 104,
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 6,
        x: 12,
        y: 24,
        w: 170,
        h: 136,
        vrest: 1
      },
      bdy: {
        kind: 0,
        x: 58,
        y: 52,
        w: 74,
        h: 106
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
        x: 70,
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
        x: 64,
        y: 148,
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
        x: 56,
        y: 18,
        vaction: 135,
        throwvz: -842150451,
        throwinjury: -842150451,
        dircontrol: 1
      },
      wpoint: {
        kind: 1,
        x: 54, // eizenkot: firen 40
        y: 15, // eizenkot: firen 52
        weaponact: 31,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 36,
        y: 30,
        w: 72,
        h: 130
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
      centerx: 88,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/007",
      cpoint: {
        kind: 1,
        x: 144,
        y: 106,
        vaction: 181,
        throwvx: 26,
        throwvy: -14,
        throwvz: 6,
        throwinjury: 30
      },
      wpoint: {
        kind: 1,
        x: 78, // eizenkot: firen 62
        y: 87, // eizenkot: firen 102
        weaponact: 25,
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
      centerx: 88,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 78, // eizenkot: firen 62
        y: 87, // eizenkot: firen 102
        weaponact: 25,
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
      name: "ball1",
      pic: 140,
      state: 3,
      wait: 1,
      next: 236,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 88,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 75,
      sound: "1/067",
      wpoint: {
        kind: 1,
        x: 79, // eizenkot: firen 72
        y: 86, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "236": {
      name: "ball1",
      pic: 141,
      state: 3,
      wait: 1,
      next: 237,
      dvx: 2,
      dvy: 0,
      dvz: 0,
      centerx: 88,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 90, // eizenkot: firen 78
        y: 108, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "237": {
      name: "ball1",
      pic: 145,
      state: 3,
      wait: 1,
      next: 238,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 62,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 79, // eizenkot: firen 52
        y: 90, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "238": {
      name: "ball1",
      pic: 142,
      state: 3,
      wait: 1,
      next: 239,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 66,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 136,
        y: 88,
        action: 0,
        dvx: 0,
        dvy: 0,
        oid: 218, // eizenkot: firen_ball 210 -> eizenkot_ball 218
        facing: 0
      },
      wpoint: {
        kind: 1,
        x: 18, // eizenkot: firen 34
        y: 46, // eizenkot: firen 92
        weaponact: 29,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "239": {
      name: "ball1",
      pic: 143,
      state: 3,
      wait: 1,
      next: 240,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 20, // eizenkot: firen 36
        y: 68, // eizenkot: firen 90
        weaponact: 29,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "240": {
      name: "ball1",
      pic: 144,
      state: 3,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 158,
      hit_a: 241,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 54, // eizenkot: firen 40
        y: 81, // eizenkot: firen 92
        weaponact: 29,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "241": {
      name: "ball2",
      pic: 146,
      state: 3,
      wait: 1,
      next: 242,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 75,
      sound: "1/067",
      wpoint: {
        kind: 1,
        x: 54, // eizenkot: firen 42
        y: 81, // eizenkot: firen 88
        weaponact: 29,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "242": {
      name: "ball2",
      pic: 147,
      state: 3,
      wait: 1,
      next: 243,
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
        x: 54, // eizenkot: firen 44
        y: 81, // eizenkot: firen 92
        weaponact: 29,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "243": {
      name: "ball2",
      pic: 148,
      state: 3,
      wait: 1,
      next: 244,
      dvx: 2,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 77, // eizenkot: firen 52
        y: 97, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "244": {
      name: "ball2",
      pic: 149,
      state: 3,
      wait: 1,
      next: 245,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 118,
        y: 88,
        action: 0,
        dvx: 0,
        dvy: 0,
        oid: 218, // eizenkot: firen_ball 210 -> eizenkot_ball 218
        facing: 0
      },
      wpoint: {
        kind: 1,
        x: 99, // eizenkot: firen 48
        y: 79, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "245": {
      name: "ball2",
      pic: 159,
      state: 3,
      wait: 1,
      next: 246,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 99, // eizenkot: firen 48
        y: 79, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "246": {
      name: "ball2",
      pic: 158,
      state: 3,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 158,
      hit_a: 247,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 54, // eizenkot: firen 40
        y: 81, // eizenkot: firen 92
        weaponact: 29,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "247": {
      name: "ball3",
      pic: 157,
      state: 3,
      wait: 1,
      next: 248,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 60,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 75,
      sound: "1/067",
      wpoint: {
        kind: 1,
        x: 52,
        y: 88,
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "248": {
      name: "ball3",
      pic: 156,
      state: 3,
      wait: 1,
      next: 249,
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
        x: 97, // eizenkot: firen 62
        y: 82, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "249": {
      name: "ball3",
      pic: 155,
      state: 3,
      wait: 1,
      next: 250,
      dvx: 2,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 83, // eizenkot: firen 64
        y: 100, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "250": {
      name: "ball3",
      pic: 154,
      state: 3,
      wait: 1,
      next: 251,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      opoint: {
        kind: 1,
        x: 142,
        y: 86,
        action: 0,
        dvx: 0,
        dvy: 0,
        oid: 218, // eizenkot: firen_ball 210 -> eizenkot_ball 218
        facing: 0
      },
      wpoint: {
        kind: 1,
        x: 88, // eizenkot: firen 56
        y: 74, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "251": {
      name: "ball3",
      pic: 153,
      state: 3,
      wait: 1,
      next: 252,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 103, // eizenkot: firen 54
        y: 79, // eizenkot: firen 92
        weaponact: 30,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "252": {
      name: "ball3",
      pic: 152,
      state: 3,
      wait: 2,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 58, // eizenkot: firen 40
        y: 81, // eizenkot: firen 92
        weaponact: 29,
        attacking: 0,
        cover: 1,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 52,
        y: 24,
        w: 54,
        h: 136
      }
    },
    "255": {
      name: "burn_run",
      pic: 163,
      state: 19,
      wait: 2,
      next: 256,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 75,
      sound: "1/003",
      wpoint: {
        kind: 1,
        x: 100, // eizenkot: firen 118
        y: 81, // eizenkot: firen 78
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 34,
        y: 30,
        w: 82,
        h: 124
      }
    },
    "256": {
      name: "burn_run",
      pic: 164,
      state: 19,
      wait: 2,
      next: 257,
      dvx: 20,
      dvy: 0,
      dvz: 0,
      centerx: 72,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/070",
      wpoint: {
        kind: 1,
        x: 82, // eizenkot: firen 84
        y: 86, // eizenkot: firen 98
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 60,
        y: 32,
        w: 62,
        h: 124
      }
    },
    "257": {
      name: "burn_run",
      pic: 165,
      state: 19,
      wait: 2,
      next: 261,
      dvx: 20,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 218,
      hit_j: 218,
      mp: -10,
      sound: "1/004",
      opoint: {
        kind: 1,
        x: 36,
        y: 162,
        action: 50,
        dvx: 0,
        dvy: 0,
        oid: 219, // eizenkot: firen_flame 211 -> eizenkot_flame 219
        facing: 1
      },
      wpoint: {
        kind: 1,
        x: 50, // eizenkot: firen 36
        y: 75, // eizenkot: firen 98
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 40,
        y: 22,
        w: 98,
        h: 140,
        dvx: 20,
        dvy: -20,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 45,
        effect: 2
      },
      bdy: {
        kind: 0,
        x: 36,
        y: 28,
        w: 86,
        h: 130
      }
    },
    "258": {
      name: "burn_run",
      pic: 160,
      state: 19,
      wait: 2,
      next: 259,
      dvx: 20,
      dvy: 0,
      dvz: 0,
      centerx: 64,
      centery: 158,
      hit_a: 0,
      hit_d: 218,
      hit_j: 218,
      mp: -10,
      sound: "1/003",
      opoint: {
        kind: 1,
        x: 36,
        y: 162,
        action: 50,
        dvx: 0,
        dvy: 0,
        oid: 219, // eizenkot: firen_flame 211 -> eizenkot_flame 219
        facing: 1
      },
      wpoint: {
        kind: 1,
        x: 100, // eizenkot: firen 118
        y: 81, // eizenkot: firen 76
        weaponact: 35,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 40,
        y: 22,
        w: 98,
        h: 140,
        dvx: 20,
        dvy: -20,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 45,
        effect: 2
      },
      bdy: {
        kind: 0,
        x: 24,
        y: 20,
        w: 102,
        h: 140
      }
    },
    "259": {
      name: "burn_run",
      pic: 161,
      state: 19,
      wait: 2,
      next: 260,
      dvx: 20,
      dvy: 0,
      dvz: 0,
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 218,
      hit_j: 218,
      mp: -10,
      sound: "1/070",
      opoint: {
        kind: 1,
        x: 36,
        y: 162,
        action: 50,
        dvx: 0,
        dvy: 0,
        oid: 219, // eizenkot: firen_flame 211 -> eizenkot_flame 219
        facing: 1
      },
      wpoint: {
        kind: 1,
        x: 105, // eizenkot: firen 108
        y: 76, // eizenkot: firen 96
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 40,
        y: 22,
        w: 98,
        h: 140,
        dvx: 20,
        dvy: -20,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 45,
        effect: 2
      },
      bdy: {
        kind: 0,
        x: 38,
        y: 24,
        w: 100,
        h: 136
      }
    },
    "260": {
      name: "burn_run",
      pic: 162,
      state: 19,
      wait: 2,
      next: 261,
      dvx: 20,
      dvy: 0,
      dvz: 0,
      centerx: 66,
      centery: 158,
      hit_a: 0,
      hit_d: 218,
      hit_j: 218,
      mp: -10,
      sound: "1/004",
      opoint: {
        kind: 1,
        x: 36,
        y: 162,
        action: 50,
        dvx: 0,
        dvy: 0,
        oid: 219, // eizenkot: firen_flame 211 -> eizenkot_flame 219
        facing: 1
      },
      wpoint: {
        kind: 1,
        x: 52, // eizenkot: firen 40
        y: 75, // eizenkot: firen 96
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 40,
        y: 22,
        w: 98,
        h: 140,
        dvx: 20,
        dvy: -20,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 45,
        effect: 2
      },
      bdy: {
        kind: 0,
        x: 32,
        y: 22,
        w: 94,
        h: 138
      }
    },
    "261": {
      name: "burn_run",
      pic: 161,
      state: 19,
      wait: 2,
      next: 258,
      dvx: 20,
      dvy: 0,
      dvz: 0,
      centerx: 74,
      centery: 158,
      hit_a: 0,
      hit_d: 218,
      hit_j: 218,
      mp: -10,
      sound: "1/071",
      opoint: {
        kind: 1,
        x: 36,
        y: 162,
        action: 50,
        dvx: 0,
        dvy: 0,
        oid: 219, // eizenkot: firen_flame 211 -> eizenkot_flame 219
        facing: 1
      },
      wpoint: {
        kind: 1,
        x: 105, // eizenkot: firen 108
        y: 76, // eizenkot: firen 92
        weaponact: 22,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      itr: {
        kind: 0,
        x: 40,
        y: 22,
        w: 98,
        h: 140,
        dvx: 20,
        dvy: -20,
        fall: 70,
        vrest: 10,
        bdefend: 16,
        injury: 45,
        effect: 2
      },
      bdy: {
        kind: 0,
        x: 40,
        y: 24,
        w: 94,
        h: 136
      }
    },
    "267": {
      name: "flame",
      pic: 170,
      state: 3,
      wait: 2,
      next: 268,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 68,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 150,
      wpoint: {
        kind: 1,
        x: 104, // eizenkot: firen 98
        y: 81, // eizenkot: firen 98
        weaponact: 21,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 32,
        y: 30,
        w: 74,
        h: 130
      }
    },
    "268": {
      name: "flame",
      pic: 171,
      state: 3,
      wait: 1,
      next: 269,
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
        x: 93, // eizenkot: firen 90
        y: 86, // eizenkot: firen 78
        weaponact: 20,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 28,
        w: 92,
        h: 132
      }
    },
    "269": {
      name: "flame",
      pic: 172,
      state: 3,
      wait: 1,
      next: 270,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 46,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/070",
      wpoint: {
        kind: 1,
        x: 46, // eizenkot: firen 38
        y: 76, // eizenkot: firen 112
        weaponact: 23,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 4,
        y: 30,
        w: 94,
        h: 128
      }
    },
    "270": {
      name: "flame",
      pic: 173,
      state: 3,
      wait: 1,
      next: 271,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 45, // eizenkot: firen 30
        y: 76, // eizenkot: firen 114
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 36,
        w: 94,
        h: 130
      }
    },
    "271": {
      name: "flame",
      pic: 174,
      state: 3,
      wait: 1,
      next: 272,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/071",
      opoint: {
        kind: 1,
        x: 84,
        y: 82,
        action: 0,
        dvx: 0,
        dvy: 0,
        oid: 219, // eizenkot: firen_flame 211 -> eizenkot_flame 219
        facing: 0
      },
      wpoint: {
        kind: 1,
        x: 44, // eizenkot: firen 28
        y: 75, // eizenkot: firen 114
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 30,
        w: 84,
        h: 128
      }
    },
    "272": {
      name: "flame",
      pic: 173,
      state: 3,
      wait: 1,
      next: 273,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 158,
      hit_a: 0,
      hit_d: 283,
      hit_j: 283,
      mp: -8,
      wpoint: {
        kind: 1,
        x: 45, // eizenkot: firen 30
        y: 76, // eizenkot: firen 114
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 32,
        w: 90,
        h: 128
      }
    },
    "273": {
      name: "flame",
      pic: 174,
      state: 3,
      wait: 1,
      next: 274,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 158,
      hit_a: 0,
      hit_d: 283,
      hit_j: 283,
      mp: -8,
      wpoint: {
        kind: 1,
        x: 44, // eizenkot: firen 28
        y: 75, // eizenkot: firen 114
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 32,
        w: 94,
        h: 130
      }
    },
    "274": {
      name: "flame",
      pic: 173,
      state: 3,
      wait: 1,
      next: 275,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 158,
      hit_a: 0,
      hit_d: 283,
      hit_j: 283,
      mp: -8,
      opoint: {
        kind: 1,
        x: 84,
        y: 82,
        action: 0,
        dvx: 0,
        dvy: 0,
        oid: 219, // eizenkot: firen_flame 211 -> eizenkot_flame 219
        facing: 0
      },
      wpoint: {
        kind: 1,
        x: 45, // eizenkot: firen 30
        y: 76, // eizenkot: firen 114
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 12,
        y: 36,
        w: 94,
        h: 126
      }
    },
    "275": {
      name: "flame",
      pic: 174,
      state: 3,
      wait: 1,
      next: 270,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 44,
      centery: 158,
      hit_a: 0,
      hit_d: 283,
      hit_j: 283,
      mp: -8,
      wpoint: {
        kind: 1,
        x: 44, // eizenkot: firen 28
        y: 75, // eizenkot: firen 114
        weaponact: 25,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 14,
        y: 36,
        w: 86,
        h: 126
      }
    },
    "283": {
      name: "flame",
      pic: 172,
      state: 3,
      wait: 3,
      next: 999,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 46,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 46, // eizenkot: firen 44
        y: 76, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "285": {
      name: "explosion",
      pic: 175,
      state: 3,
      wait: 1,
      next: 286,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 86,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      mp: 4300,
      wpoint: {
        kind: 1,
        x: 82, // eizenkot: firen 44
        y: 81, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "286": {
      name: "explosion",
      pic: 176,
      state: 18,
      wait: 1,
      next: 287,
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
        x: 78, // eizenkot: firen 44
        y: 56, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "287": {
      name: "explosion",
      pic: 177,
      state: 18,
      wait: 1,
      next: 288,
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
        x: 80, // eizenkot: firen 44
        y: 56, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "288": {
      name: "explosion",
      pic: 178,
      state: 18,
      wait: 1,
      next: 289,
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
        x: 82, // eizenkot: firen 44
        y: 55, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "289": {
      name: "explosion",
      pic: 179,
      state: 18,
      wait: 1,
      next: 290,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 92,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/071",
      opoint: {
        kind: 1,
        x: 96,
        y: 162,
        action: 109,
        dvx: 0,
        dvy: 0,
        oid: 219, // eizenkot: firen_flame 211 -> eizenkot_flame 219
        facing: 1
      },
      wpoint: {
        kind: 1,
        x: 57, // eizenkot: firen 44
        y: 41, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "290": {
      name: "explosion",
      pic: 179,
      state: 18,
      wait: 16,
      next: 291,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 92,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      sound: "1/020",
      wpoint: {
        kind: 1,
        x: 57, // eizenkot: firen 44
        y: 41, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "291": {
      name: "explosion",
      pic: 189,
      state: 3,
      wait: 1,
      next: 292,
      dvx: 0,
      dvy: 0,
      dvz: 0,
      centerx: 92,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      wpoint: {
        kind: 1,
        x: 42, // eizenkot: firen 44
        y: 60, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "292": {
      name: "explosion",
      pic: 188,
      state: 3,
      wait: 1,
      next: 293,
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
        x: 41, // eizenkot: firen 44
        y: 71, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
      }
    },
    "293": {
      name: "explosion",
      pic: 175,
      state: 3,
      wait: 2,
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
        x: 82, // eizenkot: firen 44
        y: 81, // eizenkot: firen 114
        weaponact: 24,
        attacking: 0,
        cover: 0,
        dvx: 0,
        dvy: 0,
        dvz: 0
      },
      bdy: {
        kind: 0,
        x: 16,
        y: 38,
        w: 82,
        h: 120
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
      centerx: 78,
      centery: 158,
      hit_a: 0,
      hit_d: 0,
      hit_j: 0,
      bdy: {
        kind: 0,
        x: 42,
        y: 36,
        w: 86,
        h: 124
      }
    }
  }
});
