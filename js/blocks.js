"use strict";

const largeBlocks = {
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
            en: "Light Armor Inverted Corner",
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
            en: "Light Armor Corner Square Inverted Block",
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
            en: "Round Armor Inverted Corner",
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
    lightArmorInventedCorner2x1x1Base: {
        title: {
            ru: "Обратный угол 2х1 основа легкой брони",
            en: "Light Armor Invented Corner 2x1x1 Base",
        },
        weight: 440,
        integrity: 2200,
        img: "lightArmorInventedCorner2x1x1Base.png",
    },
    lightArmorInventedCorner2x1x1Tip: {
        title: {
            ru: "Обратный угол 2х1 вершина легкой брони",
            en: "Light Armor Invented Corner 2x1x1 Tip",
        },
        weight: 320,
        integrity: 1600,
        img: "lightArmorInventedCorner2x1x1Tip.png",
    },
    halfSlopeCornerInventedLightArmor: {
        title: {
            ru: "Обратный угловой наклонный полублок легкой брони",
            en: "Half Slope Corner Invented Light Armor",
        },
        weight: 460,
        integrity: 2300,
        img: "halfSlopeCornerInventedLightArmor.png",
    },
    halfSlopeInventedLightArmor: {
        title: {
            ru: "Обратный наклонный полублок легкой брони",
            en: "Half Slope Invented Light Armor",
        },
        weight: 440,
        integrity: 2200,
        img: "halfSlopeInventedLightArmor.png",
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
    },





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
    },

};
const smallBlocks = {
    lightArmorBlock: {
        title: {
            ru: "Блок легкой брони",
            en: "Light Armor Block",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorBlock.png",
    },
    lightArmorSlope: {
        title: {
            ru: "Скат легкой брони",
            en: "Light Armor Slope",
        },
        weight: 20,
        integrity:100,
        img: "lightArmorSlope.png",
    },
    heavyArmorBlock: {
        title: {
            ru: "Блок тяжелой брони",
            en: "Heavy Armor Block",
        },
        weight: 112,
        integrity: 560,
        img: "heavyArmorBlock.png",
    },
    heavyArmorSlope: {
        title: {
            ru: "Скат тяжелой брони",
            en: "Heavy Armor Slope",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorSlope.png",
    },
    landingGear: {
        title: {
            ru: "Посадочные шасси",
            en: "Landing Gear",
        },
        weight: 104,
        integrity: 390,
        img: "landingGear.png",
    },
    magneticPlate: {
        title: {
            ru: "Магнитная пластина",
            en: "Magnetic Plate",
        },
        weight: 72,
        integrity: 270,
        img: "magneticPlate.png",
    },
    largeMagneticPlate: {
        title: {
            ru: "Большая магнитная пластина",
            en: "Large Magnetic Plate",
        },
        weight: 312,
        integrity: 1170,
        img: "largeMagneticPlateSmall.png",
    },
};

const BlockCategories = {
    lightArmor: {
        large: [
            largeBlocks.lightArmorBlock,
            largeBlocks.lightArmorSlope,
            largeBlocks.lightArmorCorner,
            largeBlocks.lightArmorInvertedCorner,
            largeBlocks.lightArmorCornerSquareBlock,
            largeBlocks.lightArmorCornerSquareInvertedBlock,
            largeBlocks.roundArmorSlope,
            largeBlocks.roundArmorCorner,
            largeBlocks.roundArmorInvertedCorner,
            largeBlocks.lightArmorSlope2x1x1Base,
            largeBlocks.lightArmorSlope2x1x1Tip,
            largeBlocks.halfLightArmorBlock,
            largeBlocks.halfSlopeLightArmorBlock,
            largeBlocks.halfSlopeCornerLightArmor,
            largeBlocks.lightArmorHalfCornerBlock,
            largeBlocks.lightArmorHalfSlopedCorner,
            largeBlocks.lightArmorCorner2x1x1Base,
            largeBlocks.lightArmorCorner2x1x1Tip,
            largeBlocks.lightArmorInventedCorner2x1x1Base,
            largeBlocks.lightArmorInventedCorner2x1x1Tip,
            largeBlocks.halfSlopeCornerInventedLightArmor,
            largeBlocks.halfSlopeInventedLightArmor,
            largeBlocks.slopedCornerLightArmorTip,
            largeBlocks.lightArmorSlopedCornerBase,
            largeBlocks.lightArmorSlopedCorner,
            largeBlocks.lightArmorHalfSlopedCornerBase,
            largeBlocks.lightArmorPanel,
            largeBlocks.lightArmorPanelSlope,
            largeBlocks.lightArmorPanelSide,
            largeBlocks.lightArmorPanel2x1SlopeBase,
            largeBlocks.lightArmorPanel2x1SlopeTip,
            largeBlocks.lightArmorPanel2x1BaseRight,
            largeBlocks.lightArmorPanel2x1TipRight,
            largeBlocks.lightArmorPanel2x1BaseLeft,
            largeBlocks.lightArmorPanel2x1TipLeft,
            largeBlocks.lightArmorPanelHalfSlope,
            largeBlocks.lightArmorHalfPanel2x1BaseRight,
            largeBlocks.lightArmorHalfPanel2x1TipRight,
            largeBlocks.lightArmorHalfPanel2x1BaseLeft,
            largeBlocks.lightArmorHalfPanel2x1TipLeft,
            largeBlocks.lightArmorHalfPanel,
            largeBlocks.lightArmorQuarterPanel,
        ],

        small: [smallBlocks.lightArmorBlock, smallBlocks.lightArmorSlope],
    },

    heavyArmor: {
        large: [largeBlocks.heavyArmorBlock, largeBlocks.heavyArmorSlope],
        small: [smallBlocks.heavyArmorBlock, smallBlocks.heavyArmorSlope],
    },
    landingGear: {
        large: [largeBlocks.landingGear, largeBlocks.magneticPlate, largeBlocks.largeMagneticPlate],
        small: [smallBlocks.landingGear, smallBlocks.magneticPlate, smallBlocks.largeMagneticPlate],
    },
};
const lightArmor = {
    large: [largeBlocks.lightArmorBlock, largeBlocks.lightArmorSlope],
    small: [smallBlocks.lightArmorBlock, smallBlocks.lightArmorSlope],
};

const heavyArmor = {
    large: [largeBlocks.heavyArmorBlock, largeBlocks.heavyArmorSlope],
    small: [smallBlocks.heavyArmorBlock, smallBlocks.heavyArmorSlope],
};

const landingGear = {
    large: [largeBlocks.landingGear, largeBlocks.magneticPlate, largeBlocks.largeMagneticPlate],
    small: [smallBlocks.landingGear, smallBlocks.magneticPlate, smallBlocks.largeMagneticPlate],
};

const cockpits = {
    large: [],
    small: [],
};

const energySources = {
    large: [],
    small: [],
};

const production = {
    large: [],
    small: [],
};

const cargoBlocks = {
    large: [],
    small: [],
};

const connectors = {
    large: [],
    small: [],
};

const toolBlocks = {
    large: [],
    small: [],
};

const thrusters = {
    large: [],
    small: [],
};

const wheels = {
    large: [],
    small: [],
};

const control = {
    large: [],
    small: [],
};

const electronics = {
    large: [],
    small: [],
};

const weapon = {
    large: [],
    small: [],
};

const display = {
    large: [],
    small: [],
};

const doors = {
    large: [],
    small: [],
};

const windows = {
    large: [],
    small: [],
};

const lighting = {
    large: [],
    small: [],
};

const stairs = {
    large: [],
    small: [],
};

const catwalk = {
    large: [],
    small: [],
};

const partitions = {
    large: [],
    small: [],
};

const passage = {
    large: [],
    small: [],
};

const social = {
    large: [],
    small: [],
};

const gravityBlocks = {
    large: [],
    small: [],
};

const buildingBlocks = {
    large: [],
    small: [],
};

const decorativeBlocks = {
    large: [],
    small: [],
};

const symbols = {
    large: [],
    small: [],
};