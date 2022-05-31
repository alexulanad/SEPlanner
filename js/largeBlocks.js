"use strict";

const largeBlocks = {
    // Легкая броня // Light Armor
    lightArmorBlock: {
        title: {
            ru: "Блок легкой брони",
            en: "Light Armor Block",
        },
        weight: 500,
        integrity: 2500,
        img: "lightArmorBlock.png",
    },
    lightArmorSlope: {
        title: {
            ru: "Скат легкой брони",
            en: "Light Armor Slope",
        },
        weight: 260,
        integrity: 1300,
        img: "lightArmorSlope.png",
    },
    lightArmorCorner: {
        title: {
            ru: "Угол легкой брони",
            en: "Light Armor Corner",
        },
        weight: 80,
        integrity: 400,
        img: "lightArmorCorner.png",
    },
    lightArmorInvertedCorner: {
        title: {
            ru: "Обратный угол легкой брони",
            en: "Light Armor Inv. Corner",
        },
        weight: 420,
        integrity: 2100,
        img: "lightArmorInvertedCorner.png",
    },
    lightArmorCornerSquareBlock: {
        title: {
            ru: "Прямоугольный угловой блок легкой брони",
            en: "Light Armor Corner Square Block",
        },
        weight: 140,
        integrity: 700,
        img: "lightArmorCornerSquareBlock.png",
    },
    lightArmorCornerSquareInvertedBlock: {
        title: {
            ru: "Обратный прямоугольный угловой блок легкой брони",
            en: "Light Armor Corner Square Inv. Block",
        },
        weight: 380,
        integrity: 1900,
        img: "lightArmorCornerSquareInvertedBlock.png",
    },
    roundArmorSlope: {
        title: {
            ru: "Круглая легкая броня",
            en: "Round Armor Slope",
        },
        weight: 260,
        integrity: 1300,
        img: "roundArmorSlope.png",
    },
    roundArmorCorner: {
        title: {
            ru: "Круглый угол легкой брони",
            en: "Round Armor Corner",
        },
        weight: 80,
        integrity: 400,
        img: "roundArmorCorner.png",
    },
    roundArmorInvertedCorner: {
        title: {
            ru: "Круглый обратный угол легкой брони",
            en: "Round Armor Inv. Corner",
        },
        weight: 420,
        integrity: 2100,
        img: "roundArmorInvertedCorner.png",
    },
    lightArmorSlope2x1x1Base: {
        title: {
            ru: "Скат 2х1 основа легкой брони",
            en: "Light Armor Slope 2x1x1 Base",
        },
        weight: 380,
        integrity: 1900,
        img: "lightArmorSlope2x1x1Base.png",
    },
    lightArmorSlope2x1x1Tip: {
        title: {
            ru: "Скат 2х1 вершина легкой брони",
            en: "Light Armor Slope 2x1x1 Tip",
        },
        weight: 140,
        integrity: 700,
        img: "lightArmorSlope2x1x1Tip.png",
    },
    halfLightArmorBlock: {
        title: {
            ru: "Полублок легкой брони",
            en: "Half Light Armor Block",
        },
        weight: 240,
        integrity: 1200,
        img: "halfLightArmorBlock.png",
    },
    halfSlopeLightArmorBlock: {
        title: {
            ru: "Угловой полублок легкой брони",
            en: "Half Slope Light Armor Block",
        },
        weight: 140,
        integrity: 700,
        img: "halfSlopeLightArmorBlock.png",
    },
    halfSlopeCornerLightArmor: {
        title: {
            ru: "Угловой наклонный полублок легкой брони",
            en: "Half Slope Corner Light Armor",
        },
        weight: 60,
        integrity: 300,
        img: "halfSlopeCornerLightArmor.png",
    },
    lightArmorHalfCornerBlock: {
        title: {
            ru: "Угловой полублок легк. брони",
            en: "Light Armor Half Corner Block",
        },
        weight: 120,
        integrity: 600,
        img: "lightArmorHalfCornerBlock.png",
    },
    lightArmorHalfSlopedCorner: {
        title: {
            ru: "Угловой полублок легк. брони",
            en: "Light Armor Half Sloped Corner",
        },
        weight: 220,
        integrity: 1100,
        img: "lightArmorHalfSlopedCorner.png",
    },
    lightArmorCorner2x1x1Base: {
        title: {
            ru: "Угол 2х1 основа легкой брони",
            en: "Light Armor Corner 2x1x1 Base",
        },
        weight: 200,
        integrity: 1000,
        img: "lightArmorCorner2x1x1Base.png",
    },
    lightArmorCorner2x1x1Tip: {
        title: {
            ru: "Угол 2х1 вершина легкой брони",
            en: "Light Armor Corner 2x1x1 Tip",
        },
        weight: 80,
        integrity: 400,
        img: "lightArmorCorner2x1x1Tip.png",
    },
    lightArmorInvertedCorner2x1x1Base: {
        title: {
            ru: "Обратный угол 2х1 основа легкой брони",
            en: "Light Armor Inv. Corner 2x1x1 Base",
        },
        weight: 440,
        integrity: 2200,
        img: "lightArmorInvertedCorner2x1x1Base.png",
    },
    lightArmorInvertedCorner2x1x1Tip: {
        title: {
            ru: "Обратный угол 2х1 вершина легкой брони",
            en: "Light Armor Inv. Corner 2x1x1 Tip",
        },
        weight: 320,
        integrity: 1600,
        img: "lightArmorInvertedCorner2x1x1Tip.png",
    },
    halfSlopeCornerInvertedLightArmor: {
        title: {
            ru: "Обратный угловой наклонный полублок легкой брони",
            en: "Half Slope Corner Inv. Light Armor",
        },
        weight: 460,
        integrity: 2300,
        img: "halfSlopeCornerInvertedLightArmor.png",
    },
    halfSlopeInvertedLightArmor: {
        title: {
            ru: "Обратный наклонный полублок легкой брони",
            en: "Half Slope Inv. Light Armor",
        },
        weight: 440,
        integrity: 2200,
        img: "halfSlopeInvertedLightArmor.png",
    },
    slopedCornerLightArmorTip: {
        title: {
            ru: "Вершина угловой наклонной легкой брони",
            en: "Sloped Corner Light Armor Tip",
        },
        weight: 100,
        integrity: 500,
        img: "slopedCornerLightArmorTip.png",
    },
    lightArmorSlopedCornerBase: {
        title: {
            ru: "Основа угловой наклонной легкой брони",
            en: "Light Armor Sloped Corner Base",
        },
        weight: 400,
        integrity: 2000,
        img: "lightArmorSlopedCornerBase.png",
    },
    lightArmorSlopedCorner: {
        title: {
            ru: "Угловая наклонная легкая броня",
            en: "Light Armor Sloped Corner",
        },
        weight: 260,
        integrity: 1300,
        img: "lightArmorSlopedCorner.png",
    },
    lightArmorHalfSlopedCornerBase: {
        title: {
            ru: "Полублок основы угловой наклонной легкой брони",
            en: "Light Armor Half Sloped Corner Base",
        },
        weight: 220,
        integrity: 1100,
        img: "lightArmorHalfSlopedCornerBase.png",
    },
    lightArmorPanel: {
        title: {
            ru: "Панель легкой обшивки",
            en: "Light Armor Panel",
        },
        weight: 100,
        integrity: 500,
        img: "lightArmorPanel.png",
    },
    lightArmorPanelSlope: {
        title: {
            ru: "Панель легкой обшивки (скат)",
            en: "Light Armor Panel Slope",
        },
        weight: 120,
        integrity: 600,
        img: "lightArmorPanelSlope.png",
    },
    lightArmorPanelSide: {
        title: {
            ru: "Панель легкой обшивки (бок)",
            en: "Light Armor Panel Side",
        },
        weight: 60,
        integrity: 300,
        img: "lightArmorPanelSide.png",
    },
    lightArmorPanel2x1SlopeBase: {
        title: {
            ru: "Панель легкой обшивки 2х1 (основа, скат)",
            en: "Light Armor Panel 2x1 Slope Base",
        },
        weight: 100,
        integrity: 500,
        img: "lightArmorPanel2x1SlopeBase.png",
    },
    lightArmorPanel2x1SlopeTip: {
        title: {
            ru: "Панель легкой обшивки 2х1 (вершина, скат)",
            en: "Light Armor Panel 2x1 Slope Tip",
        },
        weight: 100,
        integrity: 500,
        img: "lightArmorPanel2x1SlopeTip.png",
    },
    lightArmorPanel2x1BaseRight: {
        title: {
            ru: "Панель легкой обшивки 2х1 (основа, правая)",
            en: "Light Armor Panel 2x1 Base Right",
        },
        weight: 100,
        integrity: 500,
        img: "lightArmorPanel2x1BaseRight.png",
    },
    lightArmorPanel2x1TipRight: {
        title: {
            ru: "Панель легкой обшивки 2х1 (вершина, правая)",
            en: "Light Armor Panel 2x1 Tip Right",
        },
        weight: 60,
        integrity: 300,
        img: "lightArmorPanel2x1TipRight.png",
    },
    lightArmorPanel2x1BaseLeft: {
        title: {
            ru: "Панель легкой обшивки 2х1 (основа, левая)",
            en: "Light Armor Panel 2x1 Base Left",
        },
        weight: 100,
        integrity: 500,
        img: "lightArmorPanel2x1BaseLeft.png",
    },
    lightArmorPanel2x1TipLeft: {
        title: {
            ru: "Панель легкой обшивки 2х1 (вершина, левая)",
            en: "Light Armor Panel 2x1 Tip Left",
        },
        weight: 60,
        integrity: 300,
        img: "lightArmorPanel2x1TipLeft.png",
    },
    lightArmorPanelHalfSlope: {
        title: {
            ru: "Панель легкой обшивки (полускат)",
            en: "Light Armor Panel Half Slope",
        },
        weight: 80,
        integrity: 400,
        img: "lightArmorPanelHalfSlope.png",
    },
    lightArmorHalfPanel2x1BaseRight: {
        title: {
            ru: "Полупанель легкой обшивки 2х1 (основа, правая)",
            en: "Light Armor Half Panel 2x1 Base Right",
        },
        weight: 60,
        integrity: 300,
        img: "lightArmorHalfPanel2x1BaseRight.png",
    },
    lightArmorHalfPanel2x1TipRight: {
        title: {
            ru: "Полупанель легкой обшивки 2х1 (вершина, правая)",
            en: "Light Armor Half Panel 2x1 Tip Right",
        },
        weight: 60,
        integrity: 300,
        img: "lightArmorHalfPanel2x1TipRight.png",
    },
    lightArmorHalfPanel2x1BaseLeft: {
        title: {
            ru: "Полупанель легкой обшивки 2х1 (основа, левая)",
            en: "Light Armor Half Panel 2x1 Base Left",
        },
        weight: 60,
        integrity: 300,
        img: "lightArmorHalfPanel2x1BaseLeft.png",
    },
    lightArmorHalfPanel2x1TipLeft: {
        title: {
            ru: "Полупанель легкой обшивки 2х1 (вершина, левая)",
            en: "Light Armor Half Panel 2x1 Tip Left",
        },
        weight: 60,
        integrity: 300,
        img: "lightArmorHalfPanel2x1TipLeft.png",
    },
    lightArmorHalfPanel: {
        title: {
            ru: "Полупанель легкой обшивки",
            en: "Light Armor Half Panel",
        },
        weight: 60,
        integrity: 300,
        img: "lightArmorHalfPanel.png",
    },
    lightArmorQuarterPanel: {
        title: {
            ru: "Четверть панель легкой обшивки",
            en: "Light Armor Quarter Panel",
        },
        weight: 40,
        integrity: 200,
        img: "lightArmorQuarterPanel.png",
    }, // End lightArmor

    // Тяжелая броня // Heavy Armor
    heavyArmorBlock: {
        title: {
            ru: "Блок тяжелой брони",
            en: "Heavy Armor Block",
        },
        weight: 3300,
        integrity: 16500,
        img: "heavyArmorBlock.png",
    },
    heavyArmorSlope: {
        title: {
            ru: "Скат тяжелой брони",
            en: "Heavy Armor Slope",
        },
        weight: 1650,
        integrity: 8250,
        img: "heavyArmorSlope.png",
    },

    heavyArmorCorner: {
        title: {
            ru: "Угол тяжелой брони",
            en: "Heavy Armor Corner",
        },
        weight: 560,
        integrity: 2800,
        img: "heavyArmorCorner.png",
    },
    heavyArmorInvertedCorner: {
        title: {
            ru: "Обратный угол тяжелой брони",
            en: "Heavy Armor Inv. Corner",
        },
        weight: 2800,
        integrity: 14000,
        img: "heavyArmorInvertedCorner.png",
    },
    heavyArmorCornerSquareBlock: {
        title: {
            ru: "Прямоугольный угловой блок тяжелой брони",
            en: "Heavy Armor Corner Square Block",
        },
        weight: 890,
        integrity: 4450,
        img: "heavyArmorCornerSquareBlock.png",
    },
    heavyArmorCornerSquareInvertedBlock: {
        title: {
            ru: "Обратный прямоугольный угловой блок тяжелой брони",
            en: "Heavy Armor Corner Square Inv. Block",
        },
        weight: 2480,
        integrity: 12400,
        img: "heavyArmorCornerSquareInvertedBlock.png",
    },
    heavyRoundArmorSlope: {
        title: {
            ru: "Круглая тяжелая броня",
            en: "Heavy Round Armor Slope",
        },
        weight: 2900,
        integrity: 14500,
        img: "heavyRoundArmorSlope.png",
    },
    heavyRoundArmorCorner: {
        title: {
            ru: "Круглый угол тяжелой брони",
            en: "Heavy Round Armor Corner",
        },
        weight: 2740,
        integrity: 13700,
        img: "heavyRoundArmorCorner.png",
    },
    heavyRoundArmorInvertedCorner: {
        title: {
            ru: "Круглый обратный угол тяжелой брони",
            en: "Heavy Round Armor Inv. Corner",
        },
        weight: 3100,
        integrity: 15500,
        img: "heavyRoundArmorInvertedCorner.png",
    },
    heavyArmorSlope2x1x1Base: {
        title: {
            ru: "Скат 2х1 основа тяжелой брони",
            en: "Heavy Armor Slope 2x1x1 Base",
        },
        weight: 2510,
        integrity: 12550,
        img: "heavyArmorSlope2x1x1Base.png",
    },
    heavyArmorSlope2x1x1Tip: {
        title: {
            ru: "Скат 2х1 вершина тяжелой брони",
            en: "Heavy Armor Slope 2x1x1 Tip",
        },
        weight: 736,
        integrity: 3680,
        img: "heavyArmorSlope2x1x1Tip.png",
    },
    halfHeavyArmorBlock: {
        title: {
            ru: "Полублок тяжелой брони",
            en: "Half Heavy Armor Block",
        },
        weight: 1650,
        integrity: 8250,
        img: "halfHeavyArmorBlock.png",
    },
    halfSlopeHeavyArmorBlock: {
        title: {
            ru: "Угловой полублок тяжелой брони",
            en: "Half Slope Heavy Armor Block",
        },
        weight: 990,
        integrity: 4950,
        img: "halfSlopeHeavyArmorBlock.png",
    },
    halfSlopeCornerHeavyArmor: {
        title: {
            ru: "Угловой наклонный полублок тяжелой брони",
            en: "Half Slope Corner Heavy Armor",
        },
        weight: 264,
        integrity: 1320,
        img: "halfSlopeCornerHeavyArmor.png",
    },
    heavyArmorHalfCornerBlock: {
        title: {
            ru: "Угловой полублок тяж. брони",
            en: "Heavy Armor Half Corner Block",
        },
        weight: 772,
        integrity: 3860,
        img: "heavyArmorHalfCornerBlock.png",
    },
    heavyArmorHalfSlopedCorner: {
        title: {
            ru: "Угловой полублок тяж. брони",
            en: "Heavy Armor Half Sloped Corner",
        },
        weight: 930,
        integrity: 4650,
        img: "heavyArmorHalfSlopedCorner.png",
    },
    heavyArmorCorner2x1x1Base: {
        title: {
            ru: "Угол 2х1 основа тяжелой брони",
            en: "Heavy Armor Corner 2x1x1 Base",
        },
        weight: 1190,
        integrity: 5950,
        img: "heavyArmorCorner2x1x1Base.png",
    },
    heavyArmorCorner2x1x1Tip: {
        title: {
            ru: "Угол 2х1 вершина тяжелой брони",
            en: "Heavy Armor Corner 2x1x1 Tip",
        },
        weight: 416,
        integrity: 2080,
        img: "heavyArmorCorner2x1x1Tip.png",
    },
    heavyArmorInvertedCorner2x1x1Base: {
        title: {
            ru: "Обратный угол 2х1 основа тяжелой брони",
            en: "Heavy Armor Inv. Corner 2x1x1 Base",
        },
        weight: 2930,
        integrity: 14650,
        img: "heavyArmorInvertedCorner2x1x1Base.png",
    },
    heavyArmorInvertedCorner2x1x1Tip: {
        title: {
            ru: "Обратный угол 2х1 вершина тяжелой брони",
            en: "Heavy Armor Inv. Corner 2x1x1 Tip",
        },
        weight: 2030,
        integrity: 10150,
        img: "heavyArmorInvertedCorner2x1x1Tip.png",
    },
    halfSlopeCornerInvertedHeavyArmor: {
        title: {
            ru: "Обратный угловой наклонный полублок тяжелой брони",
            en: "Half Slope Corner Inv. Heavy Armor",
        },
        weight: 3050,
        integrity: 15250,
        img: "halfSlopeCornerInvertedHeavyArmor.png",
    },
    halfSlopeInvertedHeavyArmor: {
        title: {
            ru: "Обратный наклонный полублок тяжелой брони",
            en: "Half Slope Inv. Heavy Armor",
        },
        weight: 2930,
        integrity: 14650,
        img: "halfSlopeInvertedHeavyArmor.png",
    },
    slopedCornerHeavyArmorTip: {
        title: {
            ru: "Вершина угловой наклонной тяжелой брони",
            en: "Sloped Corner Heavy Armor Tip",
        },
        weight: 496,
        integrity: 2480,
        img: "slopedCornerHeavyArmorTip.png",
    },
    heavyArmorSlopedCornerBase: {
        title: {
            ru: "Основа угловой наклонной тяжелой брони",
            en: "Heavy Armor Sloped Corner Base",
        },
        weight: 2780,
        integrity: 2780,
        img: "heavyArmorSlopedCornerBase.png",
    },
    heavyArmorSlopedCorner: {
        title: {
            ru: "Угловая наклонная тяжелая броня",
            en: "Heavy Armor Sloped Corner",
        },
        weight: 1650,
        integrity: 8250,
        img: "heavyArmorSlopedCorner.png",
    },
    heavyArmorHalfSlopedCornerBase: {
        title: {
            ru: "Полублок основы угловой наклонной тяжелой брони",
            en: "Heavy Armor Half Sloped Corner Base",
        },
        weight: 990,
        integrity: 4950,
        img: "heavyArmorHalfSlopedCornerBase.png",
    },
    heavyArmorPanel: {
        title: {
            ru: "Панель тяжелой обшивки",
            en: "Heavy Armor Panel",
        },
        weight: 330,
        integrity: 1650,
        img: "heavyArmorPanel.png",
    },
    heavyArmorPanelSlope: {
        title: {
            ru: "Панель тяжелой обшивки (скат)",
            en: "Heavy Armor Panel Slope",
        },
        weight: 462,
        integrity: 2310,
        img: "heavyArmorPanelSlope.png",
    },
    heavyArmorPanelSide: {
        title: {
            ru: "Панель тяжелой обшивки (бок)",
            en: "Heavy Armor Panel Side",
        },
        weight: 178,
        integrity: 890,
        img: "heavyArmorPanelSide.png",
    },
    heavyArmorPanel2x1SlopeBase: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (основа, скат)",
            en: "Heavy Armor Panel 2x1 Slope Base",
        },
        weight: 396,
        integrity: 1980,
        img: "heavyArmorPanel2x1SlopeBase.png",
    },
    heavyArmorPanel2x1SlopeTip: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (вершина, скат)",
            en: "Heavy Armor Panel 2x1 Slope Tip",
        },
        weight: 396,
        integrity: 1980,
        img: "heavyArmorPanel2x1SlopeTip.png",
    },
    heavyArmorPanel2x1BaseRight: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (основа, правая)",
            en: "Heavy Armor Panel 2x1 Base Right",
        },
        weight: 264,
        integrity: 1320,
        img: "heavyArmorPanel2x1BaseRight.png",
    },
    heavyArmorPanel2x1TipRight: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (вершина, правая)",
            en: "Heavy Armor Panel 2x1 Tip Right",
        },
        weight: 132,
        integrity: 660,
        img: "heavyArmorPanel2x1TipRight.png",
    },
    heavyArmorPanel2x1BaseLeft: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (основа, левая)",
            en: "Heavy Armor Panel 2x1 Base Left",
        },
        weight: 264,
        integrity: 1320,
        img: "heavyArmorPanel2x1BaseLeft.png",
    },
    heavyArmorPanel2x1TipLeft: {
        title: {
            ru: "Панель  тяжелой обшивки 2х1 (вершина, левая)",
            en: "Heavy Armor Panel 2x1 Tip Left",
        },
        weight: 132,
        integrity: 660,
        img: "heavyArmorPanel2x1TipLeft.png",
    },
    heavyArmorPanelHalfSlope: {
        title: {
            ru: "Панель  тяжелой обшивки (полускат)",
            en: "Heavy Armor Panel Half Slope",
        },
        weight: 198,
        integrity: 990,
        img: "heavyArmorPanelHalfSlope.png",
    },
    heavyArmorHalfPanel2x1BaseRight: {
        title: {
            ru: "Полупанель  тяжелой обшивки 2х1 (основа, правая)",
            en: "Heavy Armor Half Panel 2x1 Base Right",
        },
        weight: 198,
        integrity: 990,
        img: "heavyArmorHalfPanel2x1BaseRight.png",
    },
    heavyArmorHalfPanel2x1TipRight: {
        title: {
            ru: "Полупанель  тяжелой обшивки 2х1 (вершина, правая)",
            en: "Heavy Armor Half Panel 2x1 Tip Right",
        },
        weight: 198,
        integrity: 990,
        img: "heavyArmorHalfPanel2x1TipRight.png",
    },
    heavyArmorHalfPanel2x1BaseLeft: {
        title: {
            ru: "Полупанель  тяжелой обшивки 2х1 (основа, левая)",
            en: "Heavy Armor Half Panel 2x1 Base Left",
        },
        weight: 198,
        integrity: 990,
        img: "heavyArmorHalfPanel2x1BaseLeft.png",
    },
    heavyArmorHalfPanel2x1TipLeft: {
        title: {
            ru: "Полупанель  тяжелой обшивки 2х1 (вершина, левая)",
            en: "Heavy Armor Half Panel 2x1 Tip Left",
        },
        weight: 198,
        integrity: 990,
        img: "heavyArmorHalfPanel2x1TipLeft.png",
    },
    heavyArmorHalfPanel: {
        title: {
            ru: "Полупанель тяжелой обшивки",
            en: "Heavy Armor Half Panel",
        },
        weight: 178,
        integrity: 890,
        img: "heavyArmorHalfPanel.png",
    },
    heavyArmorQuarterPanel: {
        title: {
            ru: "Четверть панель тяжелой обшивки",
            en: "Heavy Armor Quarter Panel",
        },
        weight: 112,
        integrity: 560,
        img: "heavyArmorQuarterPanel.png",
    }, // End heavyArmor

    // Шасси // Landing Gear
    landingGear: {
        title: {
            ru: "Посадочные шасси",
            en: "Landing Gear",
        },
        weight: 3304,
        integrity: 15840,
        img: "landingGear.png",
    },
    magneticPlate: {
        title: {
            ru: "Магнитная пластина",
            en: "Magnetic Plate",
        },
        weight: 348,
        integrity: 1630,
        img: "magneticPlate.png",
    },
    largeMagneticPlate: {
        title: {
            ru: "Большая магнитная пластина",
            en: "Large Magnetic Plate",
        },
        weight: 9960,
        integrity: 47600,
        img: "largeMagneticPlate.png",
    }, // end landingGear

    // Кокпиты // Cockpits
    cockpit: {
        title: {
            ru: "Кокпит",
            en: "Cockpit",
        },
        weight: 1768,
        integrity: 7380,
        img: "cockpit.png",
    },
    industrialCockpit: {
        title: {
            ru: "Промышленный кокпит",
            en: "Industrial Cockpit",
        },
        weight: 2110,
        integrity: 8490,
        img: "industrialCockpit.png",
    },
    controlSeat: {
        title: {
            ru: "Кресло пилота",
            en: "Control Seat",
        },
        weight: 446,
        integrity: 1560,
        img: "controlSeat.png",
    },
    controlStation: {
        title: {
            ru: "Станция управления",
            en: "Control Station",
        },
        weight: 368,
        integrity: 1130,
        img: "controlStation.png",
    },
    flightSeat: {
        title: {
            ru: "Кресло пилота",
            en: "Flight Seat",
        },
        weight: 320,
        integrity: 1100,
        img: "flightSeat.png",
    },
    passengerSeat: {
        title: {
            ru: "Пассажирское кресло",
            en: "Passenger Seat",
        },
        weight: 220,
        integrity: 900,
        img: "passengerSeat.png",
    }, // end cockpit

    // Источники энергии // EnergySources
    battery: {
        title: {
            ru: "Батарея",
            en: "Battery",
        },
        weight: 3845,
        integrity: 12925,
        img: "battery.png",
    },
    smallReactor: {
        title: {
            ru: "Малый реактор",
            en: "Small Reactor",
        },
        weight: 4793,
        integrity: 12065,
        img: "smallReactor.png",
    },
    largeReactor: {
        title: {
            ru: "Большой реактор",
            en: "Large Reactor",
        },
        weight: 73800,
        integrity: 147075,
        img: "largeReactor.png",
    },
    hydrogenEngine: {
        title: {
            ru: "Водородный генератор",
            en: "Hydrogen Engine",
        },
        weight: 3253.8,
        integrity: 13654,
        img: "hydrogenEngine.png",
    },
    windTurbine: {
        title: {
            ru: "Ветрогенератор",
            en: "Wind Turbine",
        },
        weight: 616.4,
        integrity: 1882,
        img: "windTurbine.png",
    },
    solarPanel: {
        title: {
            ru: "Солнечная батарея",
            en: "Solar Panel",
        },
        weight: 516.8,
        integrity: 1276,
        img: "solarPanel.png",
    }, // end energySources

    // Производство // Production
    survivalKit: {
        title: {
            ru: "Комплект для выживания",
            en: "Survival Kit",
        },
        weight: 1171,
        integrity: 3440,
        img: "survivalKit.png",
    },
    basicRefinery: {
        title: {
            ru: "Базовый очиститель",
            en: "Basic Refinery",
        },
        weight: 2802,
        integrity: 13010,
        img: "basicRefinery.png",
    },
    refinery: {
        title: {
            ru: "Очистительный завод",
            en: "Refinery",
        },
        weight: 25330,
        integrity: 123660,
        img: "refinery.png",
    },
    industrialRefinery: {
        title: {
            ru: "Промышленный очиститель",
            en: "Industrial Refinery",
        },
        weight: 25330,
        integrity: 123660,
        img: "industrialRefinery.png",
    },
    basicAssembler: {
        title: {
            ru: "Базовый сборщик",
            en: "Basic Assembler",
        },
        weight: 2208,
        integrity: 9700,
        img: "basicAssembler.png",
    },
    assembler: {
        title: {
            ru: "Сборщик",
            en: "Assembler",
        },
        weight: 4092,
        integrity: 17710,
        img: "assembler.png",
    },
    industrialAssembler: {
        title: {
            ru: "Промышленный сборщик",
            en: "Industrial Assembler",
        },
        weight: 4092,
        integrity: 17710,
        img: "industrialAssembler.png",
    },
    speedModule: {
        title: {
            ru: "Модуль продуктивности",
            en: "Speed Module",
        },
        weight: 2508,
        integrity: 11720,
        img: "speedModule.png",
    },
    yieldModule: {
        title: {
            ru: "Модуль выработки",
            en: "Yield Module",
        },
        weight: 2856,
        integrity: 11985,
        img: "yieldModule.png",
    },
    powerEfficiencyModule: {
        title: {
            ru: "Модуль энергоэффективности",
            en: "Power Efficiency Module",
        },
        weight: 2996,
        integrity: 12660,
        img: "powerEfficiencyModule.png",
    },
    airVent: {
        title: {
            ru: "Вентиляция",
            en: "Air Vent",
        },
        weight: 1301,
        integrity: 5505,
        img: "airVent.png",
    },
    o2H2Generator: {
        title: {
            ru: "Генератор O2/H2",
            en: "O2/H2 Generator",
        },
        weight: 2587,
        integrity: 12435,
        img: "o2H2Generator.png",
    },
    hydrogenTank: {
        title: {
            ru: "Водородный бак",
            en: "Hydrogen Tank",
        },
        weight: 8161.6,
        integrity: 34908,
        img: "hydrogenTank.png",
    },
    smallHydrogenTank: {
        title: {
            ru: "Малый водородный бак",
            en: "Small Hydrogen Tank",
        },
        weight: 3161.6,
        integrity: 12508,
        img: "smallHydrogenTank.png",
    },
    industrialHydrogenTank: {
        title: {
            ru: "Промышленный водородный бак",
            en: "Industrial Hydrogen Tank",
        },
        weight: 8161.6,
        integrity: 34908,
        img: "industrialHydrogenTank.png",
    },
    oxygenFarm: {
        title: {
            ru: "Кислородная ферма",
            en: "Oxygen Farm",
        },
        weight: 3004,
        integrity: 11970,
        img: "oxygenFarm.png",
    },
    oxygenTank: {
        title: {
            ru: "Кислородный бак",
            en: "Oxygen Tank",
        },
        weight: 3161.6,
        integrity: 12508,
        img: "oxygenTank.png",
    },
    // end production

    // Грузовые блоки // cargoBlocks
    smallCargoContainer: {
        title: {
            ru: "Малый контейнер",
            en: "Small Cargo Container",
        },
        weight: 648.4,
        integrity: 2387,
        img: "smallCargoContainer.png",
    },
    largeCargoContainer: {
        title: {
            ru: "Большой контейнер",
            en: "Large Cargo Container",
        },
        weight: 2593.6,
        integrity: 10233,
        img: "largeCargoContainer.png",
    },
    largeIndustrialCargoContainer: {
        title: {
            ru: "Большой промышленный контейнер",
            en: "Large Industrial Cargo Container",
        },
        weight: 2593.6,
        integrity: 10233,
        img: "largeIndustrialCargoContainer.png",
    },
    conveyorJunction: {
        title: {
            ru: "Конвейер",
            en: "Conveyor Junction",
        },
        weight: 524,
        integrity: 1740,
        img: "conveyorJunction.png",
    },
    conveyorTube: {
        title: {
            ru: "Конвейерная труба",
            en: "Conveyor Tube",
        },
        weight: 394,
        integrity: 1230,
        img: "conveyorTube.png",
    },
    curvedConveyorTube: {
        title: {
            ru: "Изогнутая конвейерная труба",
            en: "Curved Conveyor Tube",
        },
        weight: 394,
        integrity: 1230,
        img: "curvedConveyorTube.png",
    },
    conveyorSorter: {
        title: {
            ru: "Сортировщик",
            en: "Conveyor Sorter",
        },
        weight: 1362,
        integrity: 5200,
        img: "conveyorSorter.png",
    },
    industrialConveyorSorter: {
        title: {
            ru: "Промышленный сортировщик",
            en: "Industrial Conveyor Sorter",
        },
        weight: 1362,
        integrity: 5200,
        img: "industrialConveyorSorter.png",
    },
    conveyorPipeJunction: {
        title: {
            ru: "Конвейерная труба (пересечение)",
            en: "Conveyor Pipe Junction",
        },
        weight: 524,
        integrity: 1740,
        img: "conveyorPipeJunction.png",
    },
    conveyorPipe: {
        title: {
            ru: "Конвейерная труба",
            en: "Conveyor Pipe",
        },
        weight: 394,
        integrity: 1230,
        img: "conveyorPipe.png",
    },
    conveyorPipeCurved: {
        title: {
            ru: "Конвейерная труба (изогнутая)",
            en: "Conveyor Pipe Curved",
        },
        weight: 394,
        integrity: 1230,
        img: "conveyorPipeCurved.png",
    },
    conveyorPipeCross: {
        title: {
            ru: "Конвейерная труба (крест)",
            en: "Conveyor Pipe Cross",
        },
        weight: 422,
        integrity: 1350,
        img: "conveyorPipeCross.png",
    },
    conveyorPipeFlanged: {
        title: {
            ru: "Конвейерная труба (с фланцем)",
            en: "Conveyor Pipe Flanged",
        },
        weight: 394,
        integrity: 1230,
        img: "conveyorPipeFlanged.png",
    },
    conveyorPipeEnd: {
        title: {
            ru: "Конвейерная труба (конец)",
            en: "Conveyor Pipe End",
        },
        weight: 394,
        integrity: 1230,
        img: "conveyorPipeEnd.png",
    },
    collector: {
        title: {
            ru: "Коллектор",
            en: "Collector",
        },
        weight: 1574,
        integrity: 6530,
        img: "collector.png",
    },
    // end cargoBlocks

    // Соединители // connectors
    connector: {
        title: {
            ru: "Коннектор",
            en: "Connector",
        },
        weight: 3564,
        integrity: 16720,
        img: "connector.png",
    },
    piston: {
        title: {
            ru: "Поршень",
            en: "Piston",
        },
        weight: 576.4,
        integrity: 2202,
        img: "piston.png",
    },
    topPistonPart: {
        title: {
            ru: "Головка поршня",
            en: "Top Piston Part",
        },
        weight: 400,
        integrity: 1480,
        img: "topPistonPart.png",
    },
    rotor: {
        title: {
            ru: "Ротор",
            en: "Rotor",
        },
        weight: 576.4,
        integrity: 2202,
        img: "rotor.png",
    },
    rotorPart: {
        title: {
            ru: "Часть ротора",
            en: "Rotor Part",
        },
        weight: 750,
        integrity: 3360,
        img: "rotorPart.png",
    },
    advancedRotor: {
        title: {
            ru: "Улучшенный ротор",
            en: "Advanced Rotor",
        },
        weight: 576.4,
        integrity: 2202,
        img: "advancedRotor.png",
    },
    advancedRotorPart: {
        title: {
            ru: "Улучшенная часть ротора",
            en: "Advanced Rotor Part",
        },
        weight: 850,
        integrity: 3600,
        img: "advancedRotorPart.png",
    },
    hinge: {
        title: {
            ru: "Шарнир",
            en: "Hinge",
        },
        weight: 596.4,
        integrity: 2302,
        img: "hinge.png",
    },
    hingePart: {
        title: {
            ru: "Шарнирная деталь",
            en: "Hinge Part",
        },
        weight: 404,
        integrity: 1680,
        img: "hingePart.png",
    },
    mergeBlock: {
        title: {
            ru: "Соединитель",
            en: "Merge Block",
        },
        weight: 558.4,
        integrity: 2092,
        img: "mergeBlock.png",
    },
    // end connectors

    // Блоки-инструменты // toolBlocks
    drill: {
        title: {
            ru: "Бур",
            en: "Drill",
        },
        weight: 6741,
        integrity: 32125,
        img: "drill.png",
    },
    grinder: {
        title: {
            ru: "Резак",
            en: "Grinder",
        },
        weight: 761.4,
        integrity: 3122,
        img: "grinder.png",
    },
    welder: {
        title: {
            ru: "Сварщик",
            en: "Welder",
        },
        weight: 713.4,
        integrity: 3042,
        img: "welder.png",
    },
    // end toolBlocks

    // Ускорители // thrusters
    atmosphericThruster: {
        title: {
            ru: "Атмосферный ускоритель",
            en: "Atmospheric Thruster",
        },
        weight: 4000,
        integrity: 10180,
        img: "atmosphericThruster.png",
    },
    largeAtmosphericThruster: {
        title: {
            ru: "Большой атмосферный ускоритель",
            en: "Large Atmospheric Thruster",
        },
        weight: 32970,
        integrity: 73000,
        img: "largeAtmosphericThruster.png",
    },
    sciFiAtmosphericThruster: {
        title: {
            ru: "Атмосферный НФ-ускоритель",
            en: "Sci-Fi Atmospheric Thruster",
        },
        weight: 4000,
        integrity: 10180,
        img: "sciFiAtmosphericThruster.png",
    },
    sciFiLargeAtmosphericThruster: {
        title: {
            ru: "Большой атмосферный НФ-ускоритель",
            en: "Sci-Fi Large Atmospheric Thruster",
        },
        weight: 32970,
        integrity: 73000,
        img: "sciFiLargeAtmosphericThruster.png",
    },
    hydrogenThruster: {
        title: {
            ru: "Водородный ускоритель",
            en: "Hydrogen Thruster",
        },
        weight: 1420,
        integrity: 5980,
        img: "hydrogenThruster.png",
    },
    largeHydrogenThruster: {
        title: {
            ru: "Большой водородный ускоритель",
            en: "Large Hydrogen Thruster",
        },
        weight: 6940,
        integrity: 30300,
        img: "largeHydrogenThruster.png",
    },
    industrialHydrogenThruster: {
        title: {
            ru: "Промышленный водородный ускоритель",
            en: "Industrial Hydrogen Thruster",
        },
        weight: 1420,
        integrity: 5980,
        img: "industrialHydrogenThruster.png",
    },
    industrialLargeHydrogenThruster: {
        title: {
            ru: "Промышленный большой водородный ускоритель",
            en: "Industrial Large Hydrogen Thruster",
        },
        weight: 6940,
        integrity: 30300,
        img: "industrialLargeHydrogenThruster.png",
    },
    ionThruster: {
        title: {
            ru: "Ионный ускоритель",
            en: "Ion Thruster",
        },
        weight: 4380,
        integrity: 7180,
        img: "ionThruster.png",
    },
    largeIonThruster: {
        title: {
            ru: "Большой ионный ускоритель",
            en: "Large Ion Thruster",
        },
        weight: 43200,
        integrity: 49200,
        img: "largeIonThruster.png",
    },
    sciFiIonThruster: {
        title: {
            ru: "Ионный НФ-ускоритель",
            en: "Sci-Fi Ion Thruster",
        },
        weight: 4380,
        integrity: 7180,
        img: "sciFiIonThruster.png",
    },
    sciFiLargeIonThruster: {
        title: {
            ru: "Большой ионный НФ-ускоритель",
            en: "Sci-Fi Large Ion Thruster",
        },
        weight: 43200,
        integrity: 49200,
        img: "sciFiLargeIonThruster.png",
    },
    jumpDrive: {
        title: {
            ru: "Прыжковый двигатель",
            en: "Jump Drive",
        },
        weight: 35980,
        integrity: 30080,
        img: "jumpDrive.png",
    },
    // end thrusters

    // Колеса // wheels
    wheel1x1: {
        title: {
            ru: "Колесо 1х1",
            en: "Wheel 1x1",
        },
        weight: 420,
        integrity: 1640,
        img: "wheel1x1.png",
    },
    wheel3x3: {
        title: {
            ru: "Колесо 3х3",
            en: "Wheel 3x3",
        },
        weight: 590,
        integrity: 2310,
        img: "wheel3x3.png",
    },
    wheel5x5: {
        title: {
            ru: "Колесо 5х5",
            en: "Wheel 5x5",
        },
        weight: 760,
        integrity: 2980,
        img: "wheel5x5.png",
    },
    wheelSuspension1x1Left: {
        title: {
            ru: "Колесо с подвеской 1х1 левое",
            en: "Wheel Suspension 1x1 Left",
        },
        weight: 962,
        integrity: 3730,
        img: "wheelSuspension1x1Left.png",
    },
    wheelSuspension3x3Left: {
        title: {
            ru: "Колесо с подвеской 3х3 левое",
            en: "Wheel Suspension 3x3 Left",
        },
        weight: 962,
        integrity: 3730,
        img: "wheelSuspension3x3Left.png",
    },
    wheelSuspension5x5Left: {
        title: {
            ru: "Колесо с подвеской 5х5 левое",
            en: "Wheel Suspension 5x5 Left",
        },
        weight: 2820,
        integrity: 10650,
        img: "wheelSuspension5x5Left.png",
    },
    wheelSuspension1x1Right: {
        title: {
            ru: "Колесо с подвеской 1х1 правое",
            en: "Wheel Suspension 1x1 Right",
        },
        weight: 962,
        integrity: 3730,
        img: "wheelSuspension1x1Right.png",
    },
    wheelSuspension3x3Right: {
        title: {
            ru: "Колесо с подвеской 3х3 правое",
            en: "Wheel Suspension 3x3 Right",
        },
        weight: 962,
        integrity: 3730,
        img: "wheelSuspension3x3Right.png",
    },
    wheelSuspension5x5Right: {
        title: {
            ru: "Колесо с подвеской 5х5 правое",
            en: "Wheel Suspension 5x5 Right",
        },
        weight: 2820,
        integrity: 10650,
        img: "wheelSuspension5x5Right.png",
    },
    offroadWheel1x1: {
        title: {
            ru: "Колесо внедорожника 1х1",
            en: "Offroad Wheel 1x1",
        },
        weight: 420,
        integrity: 1640,
        img: "offroadWheel1x1.png",
    },
    offroadWheel3x3: {
        title: {
            ru: "Колесо внедорожника 3х3",
            en: "Offroad Wheel 3x3",
        },
        weight: 590,
        integrity: 2310,
        img: "offroadWheel3x3.png",
    },
    offroadWheel5x5: {
        title: {
            ru: "Колесо внедорожника 5х5",
            en: "Offroad Wheel 5x5",
        },
        weight: 760,
        integrity: 2980,
        img: "offroadWheel5x5.png",
    },
    offroadwheelSuspension1x1Left: {
        title: {
            ru: "Подвеска колеса внедорожника 1х1 (левая)",
            en: "Offroad Wheel Suspension 1x1 Left",
        },
        weight: 962,
        integrity: 3730,
        img: "offroadwheelSuspension1x1Left.png",
    },
    offroadwheelSuspension3x3Left: {
        title: {
            ru: "Подвеска колеса внедорожника 3х3 (левая)",
            en: "Offroad Wheel Suspension 3x3 Left",
        },
        weight: 962,
        integrity: 3730,
        img: "offroadwheelSuspension3x3Left.png",
    },
    offroadwheelSuspension5x5Left: {
        title: {
            ru: "Подвеска колеса внедорожника 5х5 (левая)",
            en: "Offroad Wheel Suspension 5x5 Left",
        },
        weight: 2820,
        integrity: 10650,
        img: "offroadwheelSuspension5x5Left.png",
    },
    offroadwheelSuspension1x1Right: {
        title: {
            ru: "Подвеска колеса внедорожника 1х1 (правая)",
            en: "Offroad Wheel Suspension 1x1 Right",
        },
        weight: 962,
        integrity: 3730,
        img: "offroadwheelSuspension1x1Right.png",
    },
    offroadwheelSuspension3x3Right: {
        title: {
            ru: "Подвеска колеса внедорожника 3х3 (правая)",
            en: "Offroad Wheel Suspension 3x3 Right",
        },
        weight: 962,
        integrity: 3730,
        img: "offroadwheelSuspension3x3Right.png",
    },
    offroadwheelSuspension5x5Right: {
        title: {
            ru: "Подвеска колеса внедорожника 5х5 (правая)",
            en: "Offroad Wheel Suspension 5x5 Right",
        },
        weight: 2820,
        integrity: 10650,
        img: "offroadwheelSuspension5x5Right.png",
    },
    exhaustPipe: {
        title: {
            ru: "Выхлопная труба",
            en: "Exhaust Pipe",
        },
        weight: 526,
        integrity: 2080,
        img: "exhaustPipe.png",
    },
    // end wheels

    // control // Управление
    remoteControl: {
        title: {
            ru: "Дистанционное управление",
            en: "Remote Control",
        },
        weight: 137,
        integrity: 505,
        img: "remoteControl.png",
    },
    camera: {
        title: {
            ru: "Камера",
            en: "Camera",
        },
        weight: 0,
        integrity: 203,
        img: "camera.png",
    },
    gyroscope: {
        title: {
            ru: "Гироскоп",
            en: "Gyroscope",
        },
        weight: 12820,
        integrity: 63105,
        img: "gyroscope.png",
    },
    buttonPanel: {
        title: {
            ru: "Кнопочная панель",
            en: "Button Panel",
        },
        weight: 194,
        integrity: 770,
        img: "buttonPanel.png",
    },
    sciFiFourButtonPanel: {
        title: {
            ru: "Четырехкнопочная НФ-панель",
            en: "Sci-Fi Four-Button Panel",
        },
        weight: 234,
        integrity: 795,
        img: "sciFiFourButtonPanel.png",
    },
    sciFiOneButtonTerminal: {
        title: {
            ru: "Однокнопочная НФ-панель",
            en: "Sci-Fi One-Button Terminal",
        },
        weight: 127.8,
        integrity: 399,
        img: "sciFiOneButtonTerminal.png",
    },
    controlPanel: {
        title: {
            ru: "Панель управления",
            en: "Control Panel",
        },
        weight: 0,
        integrity: 135,
        img: "controlPanel.png",
    },
    sciFiControlPanel: {
        title: {
            ru: "НФ-панель управления",
            en: "Sci-Fi Control Panel",
        },
        weight: 70.4,
        integrity: 172,
        img: "sciFiControlPanel.png",
    },
    verticalButtonPanel: {
        title: {
            ru: "Вертикальная кнопочная панель",
            en: "Vertical Button Panel",
        },
        weight: 96,
        integrity: 380,
        img: "verticalButtonPanel.png",
    },
    // end control

    // Электроника // electronics
    oreDetector: {
        title: {
            ru: "Детектор руды",
            en: "Ore Detector",
        },
        weight: 1545,
        integrity: 6505,
        img: "oreDetector.png",
    },
    beacon: {
        title: {
            ru: "Маяк",
            en: "Beacon",
        },
        weight: 2662,
        integrity: 10710,
        img: "beacon.png",
    },
    antenna: {
        title: {
            ru: "Антенна",
            en: "Antenna",
        },
        weight: 3401.6,
        integrity: 12808,
        img: "antenna.png",
    },
    laserAntenna: {
        title: {
            ru: "Лазерная антенна",
            en: "Laser Antenna",
        },
        weight: 3584,
        integrity: 8050,
        img: "laserAntenna.png",
    },
    antennaDish: {
        title: {
            ru: "Тарелка антенны",
            en: "Antenna Dish",
        },
        weight: 2961.6,
        integrity: 11608,
        img: "antennaDish.png",
    },
    projector: {
        title: {
            ru: "Проектор",
            en: "Projector",
        },
        weight: 526.4,
        integrity: 2382,
        img: "projector.png",
    },
    programmableBlock: {
        title: {
            ru: "Программируемый блок",
            en: "Programmable Block",
        },
        weight: 534.4,
        integrity: 2387,
        img: "programmableBlock.png",
    },
    sensor: {
        title: {
            ru: "Сенсор",
            en: "Sensor",
        },
        weight: 0,
        integrity: 515,
        img: "sensor.png",
    },
    timerBlock: {
        title: {
            ru: "Таймер",
            en: "Timer Block",
        },
        weight: 259,
        integrity: 995,
        img: "timerBlock.png",
    },
    soundBlock: {
        title: {
            ru: "Динамик",
            en: "Sound Block",
        },
        weight: 0,
        integrity: 243,
        img: "soundBlock.png",
    },
    // end electronics

    // Вооружение // weapon
    gatlingTurret: {
        title: {
            ru: "Турель Гатлинга",
            en: "Gatling Turret",
        },
        weight: 948,
        integrity: 3770,
        img: "gatlingTurret.png",
    },
    missileTurret: {
        title: {
            ru: "Ракетная турель",
            en: "Missile Turret",
        },
        weight: 1286.4,
        integrity: 4362,
        img: "missileTurret.png",
    },
    interiorTurret: {
        title: {
            ru: "Внутренняя турель",
            en: "Interior Turret",
        },
        weight: 311,
        integrity: 1190,
        img: "interiorTurret.png",
    },
    rocketLauncher: {
        title: {
            ru: "Ракетница",
            en: "Rocket Launcher",
        },
        weight: 1713.8,
        integrity: 6384,
        img: "rocketLauncher.png",
    },
    warhead: {
        title: {
            ru: "Боеголовка",
            en: "Warhead",
        },
        weight: 700.4,
        integrity: 2932,
        img: "warhead.png",
    },
    decoy: {
        title: {
            ru: "Приманка",
            en: "Decoy",
        },
        weight: 740,
        integrity: 3445,
        img: "decoy.png",
    },
    embrasure: {
        title: {
            ru: "Амбразура",
            en: "Embrasure",
        },
        weight: 820,
        integrity: 3900,
        img: "embrasure.png",
    },
    targetDummy: {
        title: {
            ru: "Манекен для стрельбы",
            en: "Target Dummy",
        },
        weight: 396.8,
        integrity: 1739,
        img: "targetDummy.png",
    },
    // end weapon
};