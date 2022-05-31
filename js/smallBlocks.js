"use strict";

const smallBlocks = {
    // Легкая броня // Light Armor
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
    lightArmorCorner: {
        title: {
            ru: "Угол легкой брони",
            en: "Light Armor Corner",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorCorner.png",
    },
    lightArmorInvertedCorner: {
        title: {
            ru: "Обратный угол легкой брони",
            en: "Light Armor Inv. Corner",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorInvertedCorner.png",
    },
    lightArmorCornerSquareBlock: {
        title: {
            ru: "Прямоугольный угловой блок легкой брони",
            en: "Light Armor Corner Square Block",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorCornerSquareBlock.png",
    },
    lightArmorCornerSquareInvertedBlock: {
        title: {
            ru: "Обратный прямоугольный угловой блок легкой брони",
            en: "Light Armor Corner Square Inv. Block",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorCornerSquareInvertedBlock.png",
    },
    roundArmorSlope: {
        title: {
            ru: "Круглая легкая броня",
            en: "Round Armor Slope",
        },
        weight: 20,
        integrity: 100,
        img: "roundArmorSlope.png",
    },
    roundArmorCorner: {
        title: {
            ru: "Круглый угол легкой брони",
            en: "Round Armor Corner",
        },
        weight: 20,
        integrity: 100,
        img: "roundArmorCorner.png",
    },
    roundArmorInvertedCorner: {
        title: {
            ru: "Круглый обратный угол легкой брони",
            en: "Round Armor Inv. Corner",
        },
        weight: 20,
        integrity: 100,
        img: "roundArmorInvertedCorner.png",
    },
    lightArmorSlope2x1x1Base: {
        title: {
            ru: "Скат 2х1 основа легкой брони",
            en: "Light Armor Slope 2x1x1 Base",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorSlope2x1x1Base.png",
    },
    lightArmorSlope2x1x1Tip: {
        title: {
            ru: "Скат 2х1 вершина легкой брони",
            en: "Light Armor Slope 2x1x1 Tip",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorSlope2x1x1Tip.png",
    },
    halfLightArmorBlock: {
        title: {
            ru: "Полублок легкой брони",
            en: "Half Light Armor Block",
        },
        weight: 20,
        integrity: 100,
        img: "halfLightArmorBlock.png",
    },
    halfSlopeLightArmorBlock: {
        title: {
            ru: "Угловой полублок легкой брони",
            en: "Half Slope Light Armor Block",
        },
        weight: 20,
        integrity: 100,
        img: "halfSlopeLightArmorBlock.png",
    },
    halfSlopeCornerLightArmor: {
        title: {
            ru: "Угловой наклонный полублок легкой брони",
            en: "Half Slope Corner Light Armor",
        },
        weight: 20,
        integrity: 100,
        img: "halfSlopeCornerLightArmor.png",
    },
    lightArmorHalfCornerBlock: {
        title: {
            ru: "Угловой полублок легк. брони",
            en: "Light Armor Half Corner Block",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorHalfCornerBlock.png",
    },
    lightArmorHalfSlopedCorner: {
        title: {
            ru: "Угловой полублок легк. брони",
            en: "Light Armor Half Sloped Corner",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorHalfSlopedCorner.png",
    },
    lightArmorCorner2x1x1Base: {
        title: {
            ru: "Угол 2х1 основа легкой брони",
            en: "Light Armor Corner 2x1x1 Base",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorCorner2x1x1Base.png",
    },
    lightArmorCorner2x1x1Tip: {
        title: {
            ru: "Угол 2х1 вершина легкой брони",
            en: "Light Armor Corner 2x1x1 Tip",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorCorner2x1x1Tip.png",
    },
    lightArmorInvertedCorner2x1x1Base: {
        title: {
            ru: "Обратный угол 2х1 основа легкой брони",
            en: "Light Armor Inv. Corner 2x1x1 Base",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorInvertedCorner2x1x1Base.png",
    },
    lightArmorInvertedCorner2x1x1Tip: {
        title: {
            ru: "Обратный угол 2х1 вершина легкой брони",
            en: "Light Armor Inv. Corner 2x1x1 Tip",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorInvertedCorner2x1x1Tip.png",
    },
    halfSlopeCornerInvertedLightArmor: {
        title: {
            ru: "Обратный угловой наклонный полублок легкой брони",
            en: "Half Slope Corner Inv. Light Armor",
        },
        weight: 20,
        integrity: 100,
        img: "halfSlopeCornerInvertedLightArmor.png",
    },
    halfSlopeInvertedLightArmor: {
        title: {
            ru: "Обратный наклонный полублок легкой брони",
            en: "Half Slope Inv. Light Armor",
        },
        weight: 20,
        integrity: 100,
        img: "halfSlopeInvertedLightArmor.png",
    },
    slopedCornerLightArmorTip: {
        title: {
            ru: "Вершина угловой наклонной легкой брони",
            en: "Sloped Corner Light Armor Tip",
        },
        weight: 20,
        integrity: 100,
        img: "slopedCornerLightArmorTip.png",
    },
    lightArmorSlopedCornerBase: {
        title: {
            ru: "Основа угловой наклонной легкой брони",
            en: "Light Armor Sloped Corner Base",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorSlopedCornerBase.png",
    },
    lightArmorSlopedCorner: {
        title: {
            ru: "Угловая наклонная легкая броня",
            en: "Light Armor Sloped Corner",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorSlopedCorner.png",
    },
    lightArmorHalfSlopedCornerBase: {
        title: {
            ru: "Полублок основы угловой наклонной легкой брони",
            en: "Light Armor Half Sloped Corner Base",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorHalfSlopedCornerBase.png",
    },
    lightArmorPanel: {
        title: {
            ru: "Панель легкой обшивки",
            en: "Light Armor Panel",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanel.png",
    },
    lightArmorPanelSlope: {
        title: {
            ru: "Панель легкой обшивки (скат)",
            en: "Light Armor Panel Slope",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanelSlope.png",
    },
    lightArmorPanelSide: {
        title: {
            ru: "Панель легкой обшивки (бок)",
            en: "Light Armor Panel Side",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanelSide.png",
    },
    lightArmorPanel2x1SlopeBase: {
        title: {
            ru: "Панель легкой обшивки 2х1 (основа, скат)",
            en: "Light Armor Panel 2x1 Slope Base",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanel2x1SlopeBase.png",
    },
    lightArmorPanel2x1SlopeTip: {
        title: {
            ru: "Панель легкой обшивки 2х1 (вершина, скат)",
            en: "Light Armor Panel 2x1 Slope Tip",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanel2x1SlopeTip.png",
    },
    lightArmorPanel2x1BaseRight: {
        title: {
            ru: "Панель легкой обшивки 2х1 (основа, правая)",
            en: "Light Armor Panel 2x1 Base Right",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanel2x1BaseRight.png",
    },
    lightArmorPanel2x1TipRight: {
        title: {
            ru: "Панель легкой обшивки 2х1 (вершина, правая)",
            en: "Light Armor Panel 2x1 Tip Right",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanel2x1TipRight.png",
    },
    lightArmorPanel2x1BaseLeft: {
        title: {
            ru: "Панель легкой обшивки 2х1 (основа, левая)",
            en: "Light Armor Panel 2x1 Base Left",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanel2x1BaseLeft.png",
    },
    lightArmorPanel2x1TipLeft: {
        title: {
            ru: "Панель легкой обшивки 2х1 (вершина, левая)",
            en: "Light Armor Panel 2x1 Tip Left",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanel2x1TipLeft.png",
    },
    lightArmorPanelHalfSlope: {
        title: {
            ru: "Панель легкой обшивки (полускат)",
            en: "Light Armor Panel Half Slope",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorPanelHalfSlope.png",
    },
    lightArmorHalfPanel2x1BaseRight: {
        title: {
            ru: "Полупанель легкой обшивки 2х1 (основа, правая)",
            en: "Light Armor Half Panel 2x1 Base Right",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorHalfPanel2x1BaseRight.png",
    },
    lightArmorHalfPanel2x1TipRight: {
        title: {
            ru: "Полупанель легкой обшивки 2х1 (вершина, правая)",
            en: "Light Armor Half Panel 2x1 Tip Right",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorHalfPanel2x1TipRight.png",
    },
    lightArmorHalfPanel2x1BaseLeft: {
        title: {
            ru: "Полупанель легкой обшивки 2х1 (основа, левая)",
            en: "Light Armor Half Panel 2x1 Base Left",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorHalfPanel2x1BaseLeft.png",
    },
    lightArmorHalfPanel2x1TipLeft: {
        title: {
            ru: "Полупанель легкой обшивки 2х1 (вершина, левая)",
            en: "Light Armor Half Panel 2x1 Tip Left",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorHalfPanel2x1TipLeft.png",
    },
    lightArmorHalfPanel: {
        title: {
            ru: "Полупанель легкой обшивки",
            en: "Light Armor Half Panel",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorHalfPanel.png",
    },
    lightArmorQuarterPanel: {
        title: {
            ru: "Четверть панель легкой обшивки",
            en: "Light Armor Quarter Panel",
        },
        weight: 20,
        integrity: 100,
        img: "lightArmorQuarterPanel.png",
    }, // end lightArmor

    // Тяжелая броня // Heavy Armor
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
    heavyArmorCorner: {
        title: {
            ru: "Угол тяжелой брони",
            en: "Heavy Armor Corner",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorCorner.png",
    },
    heavyArmorInvertedCorner: {
        title: {
            ru: "Обратный угол тяжелой брони",
            en: "Heavy Armor Inv. Corner",
        },
        weight: 86,
        integrity: 430,
        img: "heavyArmorInvertedCorner.png",
    },
    heavyArmorCornerSquareBlock: {
        title: {
            ru: "Прямоугольный угловой блок тяжелой брони",
            en: "Heavy Armor Corner Square Block",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorCornerSquareBlock.png",
    },
    heavyArmorCornerSquareInvertedBlock: {
        title: {
            ru: "Обратный прямоугольный угловой блок тяжелой брони",
            en: "Heavy Armor Corner Square Inv. Block",
        },
        weight: 86,
        integrity: 430,
        img: "heavyArmorCornerSquareInvertedBlock.png",
    },
    heavyRoundArmorSlope: {
        title: {
            ru: "Круглая тяжелая броня",
            en: "Heavy Round Armor Slope",
        },
        weight: 86,
        integrity: 430,
        img: "heavyRoundArmorSlope.png",
    },
    heavyRoundArmorCorner: {
        title: {
            ru: "Круглый угол тяжелой брони",
            en: "Heavy Round Armor Corner",
        },
        weight: 86,
        integrity: 430,
        img: "heavyRoundArmorCorner.png",
    },
    heavyRoundArmorInvertedCorner: {
        title: {
            ru: "Круглый обратный угол тяжелой брони",
            en: "Heavy Round Armor Inv. Corner",
        },
        weight: 106,
        integrity: 530,
        img: "heavyRoundArmorInvertedCorner.png",
    },
    heavyArmorSlope2x1x1Base: {
        title: {
            ru: "Скат 2х1 основа тяжелой брони",
            en: "Heavy Armor Slope 2x1x1 Base",
        },
        weight: 86,
        integrity: 430,
        img: "heavyArmorSlope2x1x1Base.png",
    },
    heavyArmorSlope2x1x1Tip: {
        title: {
            ru: "Скат 2х1 вершина тяжелой брони",
            en: "Heavy Armor Slope 2x1x1 Tip",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorSlope2x1x1Tip.png",
    },
    halfHeavyArmorBlock: {
        title: {
            ru: "Полублок тяжелой брони",
            en: "Half Heavy Armor Block",
        },
        weight: 66,
        integrity: 330,
        img: "halfHeavyArmorBlock.png",
    },
    halfSlopeHeavyArmorBlock: {
        title: {
            ru: "Угловой полублок тяжелой брони",
            en: "Half Slope Heavy Armor Block",
        },
        weight: 46,
        integrity: 230,
        img: "halfSlopeHeavyArmorBlock.png",
    },
    halfSlopeCornerHeavyArmor: {
        title: {
            ru: "Угловой наклонный полублок тяжелой брони",
            en: "Half Slope Corner Heavy Armor",
        },
        weight: 46,
        integrity: 230,
        img: "halfSlopeCornerHeavyArmor.png",
    },
    heavyArmorHalfCornerBlock: {
        title: {
            ru: "Угловой полублок тяж. брони",
            en: "Heavy Armor Half Corner Block",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorHalfCornerBlock.png",
    },
    heavyArmorHalfSlopedCorner: {
        title: {
            ru: "Угловой полублок тяж. брони",
            en: "Heavy Armor Half Sloped Corner",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorHalfSlopedCorner.png",
    },
    heavyArmorCorner2x1x1Base: {
        title: {
            ru: "Угол 2х1 основа тяжелой брони",
            en: "Heavy Armor Corner 2x1x1 Base",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorCorner2x1x1Base.png",
    },
    heavyArmorCorner2x1x1Tip: {
        title: {
            ru: "Угол 2х1 вершина тяжелой брони",
            en: "Heavy Armor Corner 2x1x1 Tip",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorCorner2x1x1Tip.png",
    },
    heavyArmorInvertedCorner2x1x1Base: {
        title: {
            ru: "Обратный угол 2х1 основа тяжелой брони",
            en: "Heavy Armor Inv. Corner 2x1x1 Base",
        },
        weight: 106,
        integrity: 530,
        img: "heavyArmorInvertedCorner2x1x1Base.png",
    },
    heavyArmorInvertedCorner2x1x1Tip: {
        title: {
            ru: "Обратный угол 2х1 вершина тяжелой брони",
            en: "Heavy Armor Inv. Corner 2x1x1 Tip",
        },
        weight: 106,
        integrity: 530,
        img: "heavyArmorInvertedCorner2x1x1Tip.png",
    },
    halfSlopeCornerInvertedHeavyArmor: {
        title: {
            ru: "Обратный угловой наклонный полублок тяжелой брони",
            en: "Half Slope Corner Inv. Heavy Armor",
        },
        weight: 106,
        integrity: 530,
        img: "halfSlopeCornerInvertedHeavyArmor.png",
    },
    halfSlopeInvertedHeavyArmor: {
        title: {
            ru: "Обратный наклонный полублок тяжелой брони",
            en: "Half Slope Inv. Heavy Armor",
        },
        weight: 106,
        integrity: 530,
        img: "halfSlopeInvertedHeavyArmor.png",
    },
    slopedCornerHeavyArmorTip: {
        title: {
            ru: "Вершина угловой наклонной тяжелой брони",
            en: "Sloped Corner Heavy Armor Tip",
        },
        weight: 46,
        integrity: 230,
        img: "slopedCornerHeavyArmorTip.png",
    },
    heavyArmorSlopedCornerBase: {
        title: {
            ru: "Основа угловой наклонной тяжелой брони",
            en: "Heavy Armor Sloped Corner Base",
        },
        weight: 106,
        integrity: 530,
        img: "heavyArmorSlopedCornerBase.png",
    },
    heavyArmorSlopedCorner: {
        title: {
            ru: "Угловая наклонная тяжелая броня",
            en: "Heavy Armor Sloped Corner",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorSlopedCorner.png",
    },
    heavyArmorHalfSlopedCornerBase: {
        title: {
            ru: "Полублок основы угловой наклонной тяжелой брони",
            en: "Heavy Armor Half Sloped Corner Base",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorHalfSlopedCornerBase.png",
    },
    heavyArmorPanel: {
        title: {
            ru: "Панель тяжелой обшивки",
            en: "Heavy Armor Panel",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorPanel.png",
    },
    heavyArmorPanelSlope: {
        title: {
            ru: "Панель тяжелой обшивки (скат)",
            en: "Heavy Armor Panel Slope",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorPanelSlope.png",
    },
    heavyArmorPanelSide: {
        title: {
            ru: "Панель тяжелой обшивки (бок)",
            en: "Heavy Armor Panel Side",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorPanelSide.png",
    },
    heavyArmorPanel2x1SlopeBase: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (основа, скат)",
            en: "Heavy Armor Panel 2x1 Slope Base",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorPanel2x1SlopeBase.png",
    },
    heavyArmorPanel2x1SlopeTip: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (вершина, скат)",
            en: "Heavy Armor Panel 2x1 Slope Tip",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorPanel2x1SlopeTip.png",
    },
    heavyArmorPanel2x1BaseRight: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (основа, правая)",
            en: "Heavy Armor Panel 2x1 Base Right",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorPanel2x1BaseRight.png",
    },
    heavyArmorPanel2x1TipRight: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (вершина, правая)",
            en: "Heavy Armor Panel 2x1 Tip Right",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorPanel2x1TipRight.png",
    },
    heavyArmorPanel2x1BaseLeft: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (основа, левая)",
            en: "Heavy Armor Panel 2x1 Base Left",
        },
        weight: 66,
        integrity: 330,
        img: "heavyArmorPanel2x1BaseLeft.png",
    },
    heavyArmorPanel2x1TipLeft: {
        title: {
            ru: "Панель тяжелой обшивки 2х1 (вершина, левая)",
            en: "Heavy Armor Panel 2x1 Tip Left",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorPanel2x1TipLeft.png",
    },
    heavyArmorPanelHalfSlope: {
        title: {
            ru: "Панель тяжелой обшивки (полускат)",
            en: "Heavy Armor Panel Half Slope",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorPanelHalfSlope.png",
    },
    heavyArmorHalfPanel2x1BaseRight: {
        title: {
            ru: "Полупанель тяжелой обшивки 2х1 (основа, правая)",
            en: "Heavy Armor Half Panel 2x1 Base Right",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorHalfPanel2x1BaseRight.png",
    },
    heavyArmorHalfPanel2x1TipRight: {
        title: {
            ru: "Полупанель тяжелой обшивки 2х1 (вершина, правая)",
            en: "Heavy Armor Half Panel 2x1 Tip Right",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorHalfPanel2x1TipRight.png",
    },
    heavyArmorHalfPanel2x1BaseLeft: {
        title: {
            ru: "Полупанель тяжелой обшивки 2х1 (основа, левая)",
            en: "Heavy Armor Half Panel 2x1 Base Left",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorHalfPanel2x1BaseLeft.png",
    },
    heavyArmorHalfPanel2x1TipLeft: {
        title: {
            ru: "Полупанель  тяжелой обшивки 2х1 (вершина, левая)",
            en: "Heavy Armor Half Panel 2x1 Tip Left",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorHalfPanel2x1TipLeft.png",
    },
    heavyArmorHalfPanel: {
        title: {
            ru: "Полупанель тяжелой обшивки",
            en: "Heavy Armor Half Panel",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorHalfPanel.png",
    },
    heavyArmorQuarterPanel: {
        title: {
            ru: "Четверть панель тяжелой обшивки",
            en: "Heavy Armor Quarter Panel",
        },
        weight: 46,
        integrity: 230,
        img: "heavyArmorQuarterPanel.png",
    }, // end heavyArmor

    // Шасси // Landing Gear
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
    }, // end landingGear

    // Кокпиты // Cockpits
    cockpit: {
        title: {
            ru: "Кокпит",
            en: "Cockpit",
        },
        weight: 797,
        integrity: 3180,
        img: "cockpit.png",
    },
    fighterCockpit: {
        title: {
            ru: "Кокпит истребителя",
            en: "Fighter Cockpit",
        },
        weight: 1325,
        integrity: 5605,
        img: "fighterCockpit.png",
    },
    industrialCockpit: {
        title: {
            ru: "Промышленный кокпит",
            en: "Industrial Cockpit",
        },
        weight: 1460,
        integrity: 5780,
        img: "industrialCockpitSmall.png",
    },
    controlSeat: {
        title: {
            ru: "Кресло пилота",
            en: "Control Seat",
        },
        weight: 263,
        integrity: 965,
        img: "controlSeatSmall.png",
    },
    roverCockpit: {
        title: {
            ru: "Кабина вездехода",
            en: "Rover Cockpit",
        },
        weight: 374,
        integrity: 1320,
        img: "roverCockpit.png",
    },
    buggyCockpit: {
        title: {
            ru: "Кабина багги",
            en: "Buggy Cockpit",
        },
        weight: 374,
        integrity: 1320,
        img: "buggyCockpit.png",
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

    // Источники энергии // energySources
    battery: {
        title: {
            ru: "Батарея",
            en: "Battery",
        },
        weight: 1040.4,
        integrity: 3652,
        img: "battery.png",
    },
    smallBattery: {
        title: {
            ru: "Малая батарея",
            en: "Small Battery",
        },
        weight: 146.4,
        integrity: 562,
        img: "smallBattery.png",
    },
    smallReactor: {
        title: {
            ru: "Малый реактор",
            en: "Small Reactor",
        },
        weight: 278,
        integrity: 830,
        img: "smallReactor.png",
    },
    largeReactor: {
        title: {
            ru: "Большой реактор",
            en: "Large Reactor",
        },
        weight: 3901,
        integrity: 8845,
        img: "largeReactor.png",
    },
    hydrogenEngine: {
        title: {
            ru: "Водородный генератор",
            en: "Hydrogen Engine",
        },
        weight: 1005.2,
        integrity: 4141,
        img: "hydrogenEngineSmall.png",
    },
    solarPanel: {
        title: {
            ru: "Солнечная батарея",
            en: "Solar Panel",
        },
        weight: 143.2,
        integrity: 389,
        img: "solarPanel.png",
    },// end energySources

    // Производство // Production
    survivalKit: {
        title: {
            ru: "Комплект для выживания",
            en: "Survival Kit",
        },
        weight: 691,
        integrity: 1040,
        img: "survivalKitSmall.png",
    },
    airVent: {
        title: {
            ru: "Вентиляция",
            en: "Air Vent",
        },
        weight: 289,
        integrity: 1185,
        img: "airVent.png",
    },
    o2H2Generator: {
        title: {
            ru: "Генератор O2/H2",
            en: "O2/H2 Generator",
        },
        weight: 298.6,
        integrity: 1203,
        img: "o2H2GeneratorSmall.png",
    },
    hydrogenTank: {
        title: {
            ru: "Водородный бак",
            en: "Hydrogen Tank",
        },
        weight: 1580.8,
        integrity: 6254,
        img: "hydrogenTank.png",
    },
    smallHydrogenTank: {
        title: {
            ru: "Малый водородный бак",
            en: "Small Hydrogen Tank",
        },
        weight: 109.8,
        integrity: 454,
        img: "smallHydrogenTankSmall.png",
    },
    oxygenTank: {
        title: {
            ru: "Кислородный бак",
            en: "Oxygen Tank",
        },
        weight: 641.6,
        integrity: 2538,
        img: "oxygenTankSmall.png",
    },
    // end production

    // Грузовые блоки // cargoBlocks
    smallCargoContainer: {
        title: {
            ru: "Малый контейнер",
            en: "Small Cargo Container",
        },
        weight: 49.2,
        integrity: 121,
        img: "smallCargoContainer.png",
    },
    mediumCargoContainer: {
        title: {
            ru: "Средний контейнер",
            en: "Medium Cargo Container",
        },
        weight: 274.8,
        integrity: 919,
        img: "mediumCargoContainer.png",
    },
    largeCargoContainer: {
        title: {
            ru: "Большой контейнер",
            en: "Large Cargo Container",
        },
        weight: 626.2,
        integrity: 2206,
        img: "largeCargoContainer.png",
    },
    smallConveyor: {
        title: {
            ru: "Малый конвейер",
            en: "Small Conveyor",
        },
        weight: 68,
        integrity: 220,
        img: "smallConveyor.png",
    },
    smallConveyorTube: {
        title: {
            ru: "Малая конвейерная труба",
            en: "Small Conveyor Tube",
        },
        weight: 35,
        integrity: 85,
        img: "smallConveyorTube.png",
    },
    smallCurvedConveyorTube: {
        title: {
            ru: "Малая изогнутая конвейерная труба",
            en: "Small Curved Conveyor Tube",
        },
        weight: 35,
        integrity: 85,
        img: "smallCurvedConveyorTube.png",
    },
    smallConveyorSorter: {
        title: {
            ru: "Малый сортировщик",
            en: "Small Conveyor Sorter",
        },
        weight: 180,
        integrity: 595,
        img: "smallConveyorSorter.png",
    },
    conveyorJunction: {
        title: {
            ru: "Конвейер",
            en: "Conveyor Junction",
        },
        weight: 583,
        integrity: 2180,
        img: "conveyorJunction.png",
    },
    conveyorTube: {
        title: {
            ru: "Средняя конвейерная труба",
            en: "Medium Conveyor Tube",
        },
        weight: 374,
        integrity: 1140,
        img: "conveyorTube.png",
    },
    conveyorFrame: {
        title: {
            ru: "Рамка конвейера",
            en: "Conveyor Frame",
        },
        weight: 179,
        integrity: 590,
        img: "conveyorFrame.png",
    },
    curvedConveyorTube: {
        title: {
            ru: "Изогнутая конвейерная труба",
            en: "Curved Conveyor Tube",
        },
        weight: 365,
        integrity: 1095,
        img: "curvedConveyorTube.png",
    },
    conveyorSorterMedium: {
        title: {
            ru: "Сортировщик",
            en: "Conveyor Sorter",
        },
        weight: 180,
        integrity: 595,
        img: "conveyorSorterMedium.png",
    },
    collector: {
        title: {
            ru: "Коллектор",
            en: "Collector",
        },
        weight: 1237.6,
        integrity: 5068,
        img: "collector.png",
    },
    ejector: {
        title: {
            ru: "Извлекатель",
            en: "Ejector",
        },
        weight: 204.8,
        integrity: 894,
        img: "ejector.png",
    },
    // end cargoBlocks

    // Соединители // connectors
    connector: {
        title: {
            ru: "Коннектор",
            en: "Connector",
        },
        weight: 685.2,
        integrity: 2796,
        img: "connector.png",
    },
    piston: {
        title: {
            ru: "Поршень",
            en: "Piston",
        },
        weight: 306.2,
        integrity: 661,
        img: "piston.png",
    },
    topPistonPart: {
        title: {
            ru: "Головка поршня",
            en: "Top Piston Part",
        },
        weight: 130,
        integrity: 520,
        img: "topPistonPart.png",
    },
    rotor: {
        title: {
            ru: "Ротор",
            en: "Rotor",
        },
        weight: 432.2,
        integrity: 706,
        img: "rotor.png",
    },
    rotorPart: {
        title: {
            ru: "Часть ротора",
            en: "Rotor Part",
        },
        weight: 264,
        integrity: 1290,
        img: "rotorPart.png",
    },
    advancedRotor: {
        title: {
            ru: "Улучшенный ротор",
            en: "Advanced Rotor",
        },
        weight: 1018.2,
        integrity: 706,
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
    hinge3x3: {
        title: {
            ru: "Шарнир 3х3",
            en: "Hinge 3x3",
        },
        weight: 548.4,
        integrity: 1382,
        img: "hinge3x3.png",
    },
    hingePart3x3: {
        title: {
            ru: "Шарнирная деталь 3х3",
            en: "Hinge Part 3x3",
        },
        weight: 202,
        integrity: 840,
        img: "hingePart3x3.png",
    },
    hinge: {
        title: {
            ru: "Шарнир",
            en: "Hinge",
        },
        weight: 326.4,
        integrity: 862,
        img: "hingeSmall.png",
    },
    hingePart: {
        title: {
            ru: "Шарнирная деталь",
            en: "Hinge Part",
        },
        weight: 101,
        integrity: 420,
        img: "hingePartSmall.png",
    },
    mergeBlock: {
        title: {
            ru: "Соединитель",
            en: "Merge Block",
        },
        weight: 152.2,
        integrity: 621,
        img: "mergeBlock.png",
    },
    smallMergeBlock: {
        title: {
            ru: "Малый соединитель",
            en: "Small Merge Block",
        },
        weight: 92.2,
        integrity: 346,
        img: "smallMergeBlock.png",
    },
    // end connectors

    // Блоки-инструменты // toolBlocks
    drill: {
        title: {
            ru: "Бур",
            en: "Drill",
        },
        weight: 1004.2,
        integrity: 4381,
        img: "drill.png",
    },
    grinder: {
        title: {
            ru: "Резак",
            en: "Grinder",
        },
        weight: 488.4,
        integrity: 1932,
        img: "grinder.png",
    },
    welder: {
        title: {
            ru: "Сварщик",
            en: "Welder",
        },
        weight: 448.4,
        integrity: 1882,
        img: "welder.png",
    },
    // end toolBlocks

    // Ускорители // thrusters
    atmosphericThruster: {
        title: {
            ru: "Атмосферный ускоритель",
            en: "Atmospheric Thruster",
        },
        weight: 699,
        integrity: 1770,
        img: "atmosphericThruster.png",
    },
    largeAtmosphericThruster: {
        title: {
            ru: "Большой атмосферный ускоритель",
            en: "Large Atmospheric Thruster",
        },
        weight: 2948,
        integrity: 6980,
        img: "largeAtmosphericThruster.png",
    },
    SciFiAtmosphericThruster: {
        title: {
            ru: "Атмосферный НФ-ускоритель",
            en: "Sci-Fi Atmospheric Thruster",
        },
        weight: 699,
        integrity: 1770,
        img: "SciFiAtmosphericThrusterSmall.png",
    },
    SciFiLargeAtmosphericThruster: {
        title: {
            ru: "Большой атмосферный НФ-ускоритель",
            en: "Sci-Fi Large Atmospheric Thruster",
        },
        weight: 2948,
        integrity: 6980,
        img: "SciFiLargeAtmosphericThrusterSmall.png",
    },
    hydrogenThruster: {
        title: {
            ru: "Водородный ускоритель",
            en: "Hydrogen Thruster",
        },
        weight: 334,
        integrity: 1390,
        img: "hydrogenThruster.png",
    },
    largeHydrogenThruster: {
        title: {
            ru: "Большой водородный ускоритель",
            en: "Large Hydrogen Thruster",
        },
        weight: 1222,
        integrity: 5160,
        img: "largeHydrogenThruster.png",
    },
    industrialHydrogenThruster: {
        title: {
            ru: "Промышленный водородный ускоритель",
            en: "Industrial Hydrogen Thruster",
        },
        weight: 334,
        integrity: 1390,
        img: "industrialHydrogenThruster.png",
    },
    industrialLargeHydrogenThruster: {
        title: {
            ru: "Промышленный большой водородный ускоритель",
            en: "Industrial Large Hydrogen Thruster",
        },
        weight: 1222,
        integrity: 5160,
        img: "industrialLargeHydrogenThruster.png",
    },
    ionThruster: {
        title: {
            ru: "Ионный ускоритель",
            en: "Ion Thruster",
        },
        weight: 121,
        integrity: 350,
        img: "ionThruster.png",
    },
    largeIonThruster: {
        title: {
            ru: "Большой ионный ускоритель",
            en: "Large Ion Thruster",
        },
        weight: 721,
        integrity: 1220,
        img: "largeIonThruster.png",
    },
    SciFiIonThruster: {
        title: {
            ru: "Ионный НФ-ускоритель",
            en: "Sci-Fi Ion Thruster",
        },
        weight: 121,
        integrity: 350,
        img: "SciFiIonThrusterSmall.png",
    },
    SciFiLargeIonThruster: {
        title: {
            ru: "Большой ионный НФ-ускоритель",
            en: "Sci-Fi Large Ion Thruster",
        },
        weight: 721,
        integrity: 1220,
        img: "SciFiLargeIonThrusterSmall.png",
    },
    // end thrusters

    // Колеса // wheels
    wheel1x1: {
        title: {
            ru: "Колесо 1х1",
            en: "Wheel 1x1",
        },
        weight: 105,
        integrity: 410,
        img: "wheel1x1.png",
    },
    wheel3x3: {
        title: {
            ru: "Колесо 3х3",
            en: "Wheel 3x3",
        },
        weight: 205,
        integrity: 860,
        img: "wheel3x3.png",
    },
    wheel5x5: {
        title: {
            ru: "Колесо 5х5",
            en: "Wheel 5x5",
        },
        weight: 310,
        integrity: 1270,
        img: "wheel5x5.png",
    },
    wheelSuspension1x1Left: {
        title: {
            ru: "Колесо с подвеской 1х1 левое",
            en: "Wheel Suspension 1x1 Left",
        },
        weight: 353,
        integrity: 1080,
        img: "wheelSuspension1x1Left.png",
    },
    wheelSuspension3x3Left: {
        title: {
            ru: "Колесо с подвеской 3х3 левое",
            en: "Wheel Suspension 3x3 Left",
        },
        weight: 453,
        integrity: 1080,
        img: "wheelSuspension3x3Left.png",
    },
    wheelSuspension5x5Left: {
        title: {
            ru: "Колесо с подвеской 5х5 левое",
            en: "Wheel Suspension 5x5 Left",
        },
        weight: 790,
        integrity: 2100,
        img: "wheelSuspension5x5Left.png",
    },
    wheelSuspension1x1Right: {
        title: {
            ru: "Колесо с подвеской 1х1 правое",
            en: "Wheel Suspension 1x1 Right",
        },
        weight: 353,
        integrity: 1080,
        img: "wheelSuspension1x1Right.png",
    },
    wheelSuspension3x3Right: {
        title: {
            ru: "Колесо с подвеской 3х3 правое",
            en: "Wheel Suspension 3x3 Right",
        },
        weight: 453,
        integrity: 1080,
        img: "wheelSuspension3x3Right.png",
    },
    wheelSuspension5x5Right: {
        title: {
            ru: "Колесо с подвеской 5х5 правое",
            en: "Wheel Suspension 5x5 Right",
        },
        weight: 790,
        integrity: 2100,
        img: "wheelSuspension5x5Right.png",
    },
    offroadWheel1x1: {
        title: {
            ru: "Колесо внедорожника 1х1",
            en: "Offroad Wheel 1x1",
        },
        weight: 105,
        integrity: 410,
        img: "offroadWheel1x1.png",
    },
    offroadWheel3x3: {
        title: {
            ru: "Колесо внедорожника 3х3",
            en: "Offroad Wheel 3x3",
        },
        weight: 205,
        integrity: 860,
        img: "offroadWheel3x3.png",
    },
    offroadWheel5x5: {
        title: {
            ru: "Колесо внедорожника 5х5",
            en: "Offroad Wheel 5x5",
        },
        weight: 310,
        integrity: 1270,
        img: "offroadWheel5x5.png",
    },
    offroadwheelSuspension1x1Left: {
        title: {
            ru: "Подвеска колеса внедорожника 1х1 (левая)",
            en: "Offroad Wheel Suspension 1x1 Left",
        },
        weight: 353,
        integrity: 1080,
        img: "offroadwheelSuspension1x1Left.png",
    },
    offroadwheelSuspension3x3Left: {
        title: {
            ru: "Подвеска колеса внедорожника 3х3 (левая)",
            en: "Offroad Wheel Suspension 3x3 Left",
        },
        weight: 453,
        integrity: 1080,
        img: "offroadwheelSuspension3x3Left.png",
    },
    offroadwheelSuspension5x5Left: {
        title: {
            ru: "Подвеска колеса внедорожника 5х5 (левая)",
            en: "Offroad Wheel Suspension 5x5 Left",
        },
        weight: 790,
        integrity: 2100,
        img: "offroadwheelSuspension5x5Left.png",
    },
    offroadwheelSuspension1x1Right: {
        title: {
            ru: "Подвеска колеса внедорожника 1х1 (правая)",
            en: "Offroad Wheel Suspension 1x1 Right",
        },
        weight: 353,
        integrity: 1080,
        img: "offroadwheelSuspension1x1Right.png",
    },
    offroadwheelSuspension3x3Right: {
        title: {
            ru: "Подвеска колеса внедорожника 3х3 (правая)",
            en: "Offroad Wheel Suspension 3x3 Right",
        },
        weight: 453,
        integrity: 1080,
        img: "offroadwheelSuspension3x3Right.png",
    },
    offroadwheelSuspension5x5Right: {
        title: {
            ru: "Подвеска колеса внедорожника 5х5 (правая)",
            en: "Offroad Wheel Suspension 5x5 Right",
        },
        weight: 790,
        integrity: 2100,
        img: "offroadwheelSuspension5x5Right.png",
    },
    exhaustPipe: {
        title: {
            ru: "Выхлопная труба",
            en: "Exhaust Pipe",
        },
        weight: 104,
        integrity: 340,
        img: "exhaustPipeSmall.png",
    },
    // end wheels

    // control // Управление
    remoteControl: {
        title: {
            ru: "Дистанционное управление",
            en: "Remote Control",
        },
        weight: 38.2,
        integrity: 101,
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
        weight: 613.6,
        integrity: 2793,
        img: "gyroscope.png",
    },
    buttonPanel: {
        title: {
            ru: "Кнопочная панель",
            en: "Button Panel",
        },
        weight: 22.2,
        integrity: 91,
        img: "buttonPanelSmall.png",
    },
    controlPanel: {
        title: {
            ru: "Панель управления",
            en: "Control Panel",
        },
        weight: 0,
        integrity: 136,
        img: "controlPanel.png",
    },
    // end control

    // Электроника // electronics
    oreDetector: {
        title: {
            ru: "Детектор руды",
            en: "Ore Detector",
        },
        weight: 105.2,
        integrity: 405,
        img: "oreDetector.png",
    },
    beacon: {
        title: {
            ru: "Маяк",
            en: "Beacon",
        },
        weight: 84.2,
        integrity: 306,
        img: "beacon.png",
    },
    antenna: {
        title: {
            ru: "Антенна",
            en: "Antenna",
        },
        weight: 72.2,
        integrity: 236,
        img: "antenna.png",
    },
    LaserAntenna: {
        title: {
            ru: "Лазерная антенна",
            en: "Laser Antenna",
        },
        weight: 666,
        integrity: 1925,
        img: "LaserAntennaSmall.png",
    },
    projector: {
        title: {
            ru: "Проектор",
            en: "Projector",
        },
        weight: 130.4,
        integrity: 422,
        img: "projector.png",
    },
    programmableBlock: {
        title: {
            ru: "Программируемый блок",
            en: "Programmable Block",
        },
        weight: 138.4,
        integrity: 427,
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
        weight: 30.2,
        integrity: 121,
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
        weight: 592,
        integrity: 2310,
        img: "gatlingTurret.png",
    },
    missileTurret: {
        title: {
            ru: "Ракетная турель",
            en: "Missile Turret",
        },
        weight: 776.4,
        integrity: 2712,
        img: "missileTurret.png",
    },
    rocketLauncher: {
        title: {
            ru: "Ракетница",
            en: "Rocket Launcher",
        },
        weight: 226.2,
        integrity: 771,
        img: "rocketLauncherSmall.png",
    },
    reloadableRocketLauncher: {
        title: {
            ru: "Самозарядная ракетница",
            en: "Reloadable Rocket Launcher",
        },
        weight: 1058.4,
        integrity: 3962,
        img: "reloadableRocketLauncher.png",
    },
    gatlingGun: {
        title: {
            ru: "Пулимет Гатлинга",
            en: "Gatling Gun",
        },
        weight: 148.2,
        integrity: 621,
        img: "gatlingGun.png",
    },
    warhead: {
        title: {
            ru: "Боеголовка",
            en: "Warhead",
        },
        weight: 106.2,
        integrity: 486,
        img: "warhead.png",
    },
    decoy: {
        title: {
            ru: "Приманка",
            en: "Decoy",
        },
        weight: 64.2,
        integrity: 276,
        img: "decoy.png",
    },
    // end weapon

    // Дисплеи // display
    textPanel: {
        title: {
            ru: "Дисплей",
            en: "Text Panel",
        },
        weight: 74.8,
        integrity: 214,
        img: "textPanel.png",
    },
    LCDPanel: {
        title: {
            ru: "Дисплей 1х1",
            en: "LCD Panel",
        },
        weight: 89.8,
        integrity: 274,
        img: "LCDPanel.png",
    },
    wideLCDPanel: {
        title: {
            ru: "Дисплей 1х2",
            en: "Wide LCD Panel",
        },
        weight: 146.6,
        integrity: 413,
        img: "wideLCDPanel.png",
    },
    transparentLCD: {
        title: {
            ru: "Прозрачная ЖК-панель",
            en: "Transparent LCD",
        },
        weight: 71.8,
        integrity: 199,
        img: "transparentLCD.png",
    },
    cornerLCDTop: {
        title: {
            ru: "Угловой дисплей, верх",
            en: "Corner LCD Top",
        },
        weight: 32.4,
        integrity: 97,
        img: "cornerLCDTop.png",
    },
    cornerLCDBottom: {
        title: {
            ru: "Угловой дисплей, низ",
            en: "Corner LCD Bottom",
        },
        weight: 32.4,
        integrity: 97,
        img: "cornerLCDBottom.png",
    },
    cornerLCDFlatTop: {
        title: {
            ru: "Малый дисплей, верх",
            en: "Corner LCD Flat Top",
        },
        weight: 32.4,
        integrity: 97,
        img: "cornerLCDFlatTop.png",
    },
    cornerLCDFlatBottom: {
        title: {
            ru: "Малый дисплей, низ",
            en: "Corner LCD Flat Bottom",
        },
        weight: 32.4,
        integrity: 97,
        img: "cornerLCDFlatBottom.png",
    },
    // end display
};