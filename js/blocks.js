"use strict";

const largeBlocks = {
    lightArmorBlock: {
        nameRu: "Блок легкой брони",
        nameEn: "Light Armor Block",
        weight: 500,
        integrity: 2500,
        img: "lightArmorBlock.png",
    },
    lightArmorSlope: {
        nameRu: "Скат легкой брони",
        nameEn: "Light Armor Slope",
        weight: 260,
        integrity: 1300,
        img: "lightArmorSlope.png",
    },
    heavyArmorBlock: {
        nameRu: "Блок тяжелой брони",
        nameEn: "Heavy Armor Block",
        weight: 3300,
        integrity: 16500,
        img: "heavyArmorBlock.png",
    },
    heavyArmorSlope: {
        nameRu: "Скат тяжелой брони",
        nameEn: "Heavy Armor Slope",
        weight: 1650,
        integrity: 8250,
        img: "heavyArmorSlope.png",
    },
    landingGear: {
        nameRu: "Посадочные шасси",
        nameEn: "Landing Gear",
        weight: 3304,
        integrity: 15840,
        img: "landingGear.png",
    },
    magneticPlate: {
        nameRu: "Магнитная пластина",
        nameEn: "Magnetic Plate",
        weight: 348,
        integrity: 1630,
        img: "magneticPlate.png",
    },
    largeMagneticPlate: {
        nameRu: "Большая магнитная пластина",
        nameEn: "Large Magnetic Plate",
        weight: 9960,
        integrity: 47600,
        img: "largeMagneticPlate.png",
    },

};
const smallBlocks = {
    lightArmorBlock: {
        nameRu: "Блок легкой брони",
        nameEn: "Light Armor Block",
        weight: 20,
        integrity: 100,
        img: "lightArmorBlock.png",
    },
    lightArmorSlope: {
        nameRu: "Скат легкой брони",
        nameEn: "Light Armor Slope",
        weight: 20,
        integrity:100,
        img: "lightArmorSlope.png",
    },
    heavyArmorBlock: {
        nameRu: "Блок тяжелой брони",
        nameEn: "Heavy Armor Block",
        weight: 112,
        integrity: 560,
        img: "heavyArmorBlock.png",
    },
    heavyArmorSlope: {
        nameRu: "Скат тяжелой брони",
        nameEn: "Heavy Armor Slope",
        weight: 66,
        integrity: 330,
        img: "heavyArmorSlope.png",
    },
    landingGear: {
        nameRu: "Посадочные шасси",
        nameEn: "Landing Gear",
        weight: 104,
        integrity: 390,
        img: "landingGear.png",
    },
    magneticPlate: {
        nameRu: "Магнитная пластина",
        nameEn: "Magnetic Plate",
        weight: 72,
        integrity: 270,
        img: "magneticPlate.png",
    },
    largeMagneticPlate: {
        nameRu: "Большая магнитная пластина",
        nameEn: "Large Magnetic Plate",
        weight: 312,
        integrity: 1170,
        img: "largeMagneticPlateSmall.png",
    },
};

const BlockCategories = {
    lightArmor: {
        large: [largeBlocks.lightArmorBlock, largeBlocks.lightArmorSlope],
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