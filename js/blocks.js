"use strict";

const blockCategories = {
    // Легкая броня
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
            largeBlocks.lightArmorInvertedCorner2x1x1Base,
            largeBlocks.lightArmorInvertedCorner2x1x1Tip,
            largeBlocks.halfSlopeCornerInvertedLightArmor,
            largeBlocks.halfSlopeInvertedLightArmor,
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
        ], // end lightArmor--large

        small: [
            smallBlocks.lightArmorBlock,
            smallBlocks.lightArmorSlope,
            smallBlocks.lightArmorCorner,
            smallBlocks.lightArmorInvertedCorner,
            smallBlocks.lightArmorCornerSquareBlock,
            smallBlocks.lightArmorCornerSquareInvertedBlock,
            smallBlocks.roundArmorSlope,
            smallBlocks.roundArmorCorner,
            smallBlocks.roundArmorInvertedCorner,
            smallBlocks.lightArmorSlope2x1x1Base,
            smallBlocks.lightArmorSlope2x1x1Tip,
            smallBlocks.halfLightArmorBlock,
            smallBlocks.halfSlopeLightArmorBlock,
            smallBlocks.halfSlopeCornerLightArmor,
            smallBlocks.lightArmorHalfCornerBlock,
            smallBlocks.lightArmorHalfSlopedCorner,
            smallBlocks.lightArmorCorner2x1x1Base,
            smallBlocks.lightArmorCorner2x1x1Tip,
            smallBlocks.lightArmorInvertedCorner2x1x1Base,
            smallBlocks.lightArmorInvertedCorner2x1x1Tip,
            smallBlocks.halfSlopeCornerInvertedLightArmor,
            smallBlocks.halfSlopeInvertedLightArmor,
            smallBlocks.slopedCornerLightArmorTip,
            smallBlocks.lightArmorSlopedCornerBase,
            smallBlocks.lightArmorSlopedCorner,
            smallBlocks.lightArmorHalfSlopedCornerBase,
            smallBlocks.lightArmorPanel,
            smallBlocks.lightArmorPanelSlope,
            smallBlocks.lightArmorPanelSide,
            smallBlocks.lightArmorPanel2x1SlopeBase,
            smallBlocks.lightArmorPanel2x1SlopeTip,
            smallBlocks.lightArmorPanel2x1BaseRight,
            smallBlocks.lightArmorPanel2x1TipRight,
            smallBlocks.lightArmorPanel2x1BaseLeft,
            smallBlocks.lightArmorPanel2x1TipLeft,
            smallBlocks.lightArmorPanelHalfSlope,
            smallBlocks.lightArmorHalfPanel2x1BaseRight,
            smallBlocks.lightArmorHalfPanel2x1TipRight,
            smallBlocks.lightArmorHalfPanel2x1BaseLeft,
            smallBlocks.lightArmorHalfPanel2x1TipLeft,
            smallBlocks.lightArmorHalfPanel,
            smallBlocks.lightArmorQuarterPanel,
        ], // end lightArmor--small
    }, // end lightArmor

    // Тяжелая броня
    heavyArmor: {
        large: [
            largeBlocks.heavyArmorBlock,
            largeBlocks.heavyArmorSlope,
            largeBlocks.heavyArmorCorner,
            largeBlocks.heavyArmorInvertedCorner,
            largeBlocks.heavyArmorCornerSquareBlock,
            largeBlocks.heavyArmorCornerSquareInvertedBlock,
            largeBlocks.heavyRoundArmorSlope,
            largeBlocks.heavyRoundArmorCorner,
            largeBlocks.heavyRoundArmorInvertedCorner,
            largeBlocks.heavyArmorSlope2x1x1Base,
            largeBlocks.heavyArmorSlope2x1x1Tip,
            largeBlocks.halfHeavyArmorBlock,
            largeBlocks.halfSlopeHeavyArmorBlock,
            largeBlocks.halfSlopeCornerHeavyArmor,
            largeBlocks.heavyArmorHalfCornerBlock,
            largeBlocks.heavyArmorHalfSlopedCorner,
            largeBlocks.heavyArmorCorner2x1x1Base,
            largeBlocks.heavyArmorCorner2x1x1Tip,
            largeBlocks.heavyArmorInvertedCorner2x1x1Base,
            largeBlocks.heavyArmorInvertedCorner2x1x1Tip,
            largeBlocks.halfSlopeCornerInvertedHeavyArmor,
            largeBlocks.halfSlopeInvertedHeavyArmor,
            largeBlocks.slopedCornerHeavyArmorTip,
            largeBlocks.heavyArmorSlopedCornerBase,
            largeBlocks.heavyArmorSlopedCorner,
            largeBlocks.heavyArmorHalfSlopedCornerBase,
            largeBlocks.heavyArmorPanel,
            largeBlocks.heavyArmorPanelSlope,
            largeBlocks.heavyArmorPanelSide,
            largeBlocks.heavyArmorPanel2x1SlopeBase,
            largeBlocks.heavyArmorPanel2x1SlopeTip,
            largeBlocks.heavyArmorPanel2x1BaseRight,
            largeBlocks.heavyArmorPanel2x1TipRight,
            largeBlocks.heavyArmorPanel2x1BaseLeft,
            largeBlocks.heavyArmorPanel2x1TipLeft,
            largeBlocks.heavyArmorPanelHalfSlope,
            largeBlocks.heavyArmorHalfPanel2x1BaseRight,
            largeBlocks.heavyArmorHalfPanel2x1TipRight,
            largeBlocks.heavyArmorHalfPanel2x1BaseLeft,
            largeBlocks.heavyArmorHalfPanel2x1TipLeft,
            largeBlocks.heavyArmorHalfPanel,
            largeBlocks.heavyArmorQuarterPanel,
        ], // end heavyArmor--large

        small: [
            smallBlocks.heavyArmorBlock,
            smallBlocks.heavyArmorSlope,
            smallBlocks.heavyArmorCorner,
            smallBlocks.heavyArmorInvertedCorner,
            smallBlocks.heavyArmorCornerSquareBlock,
            smallBlocks.heavyArmorCornerSquareInvertedBlock,
            smallBlocks.heavyRoundArmorSlope,
            smallBlocks.heavyRoundArmorCorner,
            smallBlocks.heavyRoundArmorInvertedCorner,
            smallBlocks.heavyArmorSlope2x1x1Base,
            smallBlocks.heavyArmorSlope2x1x1Tip,
            smallBlocks.halfHeavyArmorBlock,
            smallBlocks.halfSlopeHeavyArmorBlock,
            smallBlocks.halfSlopeCornerHeavyArmor,
            smallBlocks.heavyArmorHalfCornerBlock,
            smallBlocks.heavyArmorHalfSlopedCorner,
            smallBlocks.heavyArmorCorner2x1x1Base,
            smallBlocks.heavyArmorCorner2x1x1Tip,
            smallBlocks.heavyArmorInvertedCorner2x1x1Base,
            smallBlocks.heavyArmorInvertedCorner2x1x1Tip,
            smallBlocks.halfSlopeCornerInvertedHeavyArmor,
            smallBlocks.halfSlopeInvertedHeavyArmor,
            smallBlocks.slopedCornerHeavyArmorTip,
            smallBlocks.heavyArmorSlopedCornerBase,
            smallBlocks.heavyArmorSlopedCorner,
            smallBlocks.heavyArmorHalfSlopedCornerBase,
            smallBlocks.heavyArmorPanel,
            smallBlocks.heavyArmorPanelSlope,
            smallBlocks.heavyArmorPanelSide,
            smallBlocks.heavyArmorPanel2x1SlopeBase,
            smallBlocks.heavyArmorPanel2x1SlopeTip,
            smallBlocks.heavyArmorPanel2x1BaseRight,
            smallBlocks.heavyArmorPanel2x1TipRight,
            smallBlocks.heavyArmorPanel2x1BaseLeft,
            smallBlocks.heavyArmorPanel2x1TipLeft,
            smallBlocks.heavyArmorPanelHalfSlope,
            smallBlocks.heavyArmorHalfPanel2x1BaseRight,
            smallBlocks.heavyArmorHalfPanel2x1TipRight,
            smallBlocks.heavyArmorHalfPanel2x1BaseLeft,
            smallBlocks.heavyArmorHalfPanel2x1TipLeft,
            smallBlocks.heavyArmorHalfPanel,
            smallBlocks.heavyArmorQuarterPanel,
        ], // end heavyArmor--small
    }, // end heavyArmor

    // Шасси
    landingGear: {
        large: [
            largeBlocks.landingGear,
            largeBlocks.magneticPlate,
            largeBlocks.largeMagneticPlate,
        ], // end landingGear--large
        small: [
            smallBlocks.landingGear,
            smallBlocks.magneticPlate,
            smallBlocks.largeMagneticPlate,
        ], // end landingGear--small
    },// end landingGear

    // Кокпиты
    cockpits: {
        large: [
            largeBlocks.cockpit,
            largeBlocks.industrialCockpit,
            largeBlocks.controlSeat,
            largeBlocks.controlStation,
            largeBlocks.flightSeat,
            largeBlocks.passengerSeat,
        ], // end cockpits--large
        small: [
            smallBlocks.cockpit,
            smallBlocks.fighterCockpit,
            smallBlocks.industrialCockpit,
            smallBlocks.controlSeat,
            smallBlocks.roverCockpit,
            smallBlocks.buggyCockpit,
            smallBlocks.passengerSeat,
        ], // end cockpits--small
    }, // end cockpits

    // Источники энергии
    energySources: {
        large: [
            largeBlocks.battery,
            largeBlocks.smallReactor,
            largeBlocks.largeReactor,
            largeBlocks.hydrogenEngine,
            largeBlocks.windTurbine,
            largeBlocks.solarPanel,
        ], // end energySources--large
        small: [
            smallBlocks.battery,
            smallBlocks.smallBattery,
            smallBlocks.smallReactor,
            smallBlocks.largeReactor,
            smallBlocks.hydrogenEngine,
            smallBlocks.solarPanel,
        ], // end energySources--small
    }, // end energySources
    
    // Производство
    production: {
        large: [
            largeBlocks.survivalKit,
            largeBlocks.basicRefinery,
            largeBlocks.refinery,
            largeBlocks.industrialRefinery,
            largeBlocks.basicAssembler,
            largeBlocks.assembler,
            largeBlocks.industrialAssembler,
            largeBlocks.speedModule,
            largeBlocks.yieldModule,
            largeBlocks.powerEfficiencyModule,
            largeBlocks.airVent,
            largeBlocks.o2H2Generator,
            largeBlocks.hydrogenTank,
            largeBlocks.smallHydrogenTank,
            largeBlocks.industrialHydrogenTank,
            largeBlocks.oxygenFarm,
            largeBlocks.oxygenTank,
        ], // end production--large
        small: [
            smallBlocks.survivalKit,
            smallBlocks.airVent,
            smallBlocks.o2H2Generator,
            smallBlocks.hydrogenTank,
            smallBlocks.smallHydrogenTank,
            smallBlocks.oxygenTank,
        ], // end production--small
    }, // end production

    // Грузовые блоки
    cargoBlocks: {
        large: [
            largeBlocks.smallCargoContainer,
            largeBlocks.largeCargoContainer,
            largeBlocks.largeIndustrialCargoContainer,
            largeBlocks.conveyorJunction,
            largeBlocks.conveyorTube,
            largeBlocks.curvedConveyorTube,
            largeBlocks.conveyorSorter,
            largeBlocks.industrialConveyorSorter,
            largeBlocks.conveyorPipeJunction,
            largeBlocks.conveyorPipe,
            largeBlocks.conveyorPipeCurved,
            largeBlocks.conveyorPipeCross,
            largeBlocks.conveyorPipeFlanged,
            largeBlocks.conveyorPipeEnd,
            largeBlocks.collector,
        ], // end cargoBlocks--large
        small: [
            smallBlocks.smallCargoContainer,
            smallBlocks.mediumCargoContainer,
            smallBlocks.largeCargoContainer,
            smallBlocks.smallConveyor,
            smallBlocks.smallConveyorTube,
            smallBlocks.smallCurvedConveyorTube,
            smallBlocks.smallConveyorSorter,
            smallBlocks.conveyorJunction,
            smallBlocks.conveyorTube,
            smallBlocks.conveyorFrame,
            smallBlocks.curvedConveyorTube,
            smallBlocks.conveyorSorterMedium,
            smallBlocks.collector,
            smallBlocks.ejector,
        ], // end cargoBlocks--small
    }, // end cargoBlocks

    // Соединители
    connectors: {
        large: [
            largeBlocks.connector,
            largeBlocks.piston,
            largeBlocks.topPistonPart,
            largeBlocks.rotor,
            largeBlocks.rotorPart,
            largeBlocks.advancedRotor,
            largeBlocks.advancedRotorPart,
            largeBlocks.hinge,
            largeBlocks.hingePart,
            largeBlocks.mergeBlock,
        ], // end connectors--large
        small: [
            smallBlocks.connector,
            smallBlocks.piston,
            smallBlocks.topPistonPart,
            smallBlocks.rotor,
            smallBlocks.rotorPart,
            smallBlocks.advancedRotor,
            smallBlocks.advancedRotorPart,
            smallBlocks.hinge3x3,
            smallBlocks.hingePart3x3,
            smallBlocks.hinge,
            smallBlocks.hingePart,
            smallBlocks.mergeBlock,
            smallBlocks.smallMergeBlock,
        ], // end connectors--small
    }, // end connectors

    // Блоки-инструменты
    toolBlocks: {
        large: [
            largeBlocks.drill,
            largeBlocks.grinder,
            largeBlocks.welder,
        ],
        small: [
            smallBlocks.drill,
            smallBlocks.grinder,
            smallBlocks.welder,
        ],
    }, // end toolBlocks

    // Ускорители
    thrusters: {
        large: [
            largeBlocks.atmosphericThruster,
            largeBlocks.largeAtmosphericThruster,
            largeBlocks.sciFiAtmosphericThruster,
            largeBlocks.sciFiLargeAtmosphericThruster,
            largeBlocks.hydrogenThruster,
            largeBlocks.largeHydrogenThruster,
            largeBlocks.industrialHydrogenThruster,
            largeBlocks.industrialLargeHydrogenThruster,
            largeBlocks.ionThruster,
            largeBlocks.largeIonThruster,
            largeBlocks.sciFiIonThruster,
            largeBlocks.sciFiLargeIonThruster,
            largeBlocks.jumpDrive,
        ],
        small: [
            smallBlocks.atmosphericThruster,
            smallBlocks.largeAtmosphericThruster,
            smallBlocks.SciFiAtmosphericThruster,
            smallBlocks.SciFiLargeAtmosphericThruster,
            smallBlocks.hydrogenThruster,
            smallBlocks.largeHydrogenThruster,
            smallBlocks.industrialHydrogenThruster,
            smallBlocks.industrialLargeHydrogenThruster,
            smallBlocks.ionThruster,
            smallBlocks.largeIonThruster,
            smallBlocks.SciFiIonThruster,
            smallBlocks.SciFiLargeIonThruster,
        ],
    }, // end thrusters

    // Колеса // wheels
    wheels: {
        large: [
            largeBlocks.wheel1x1,
            largeBlocks.wheel3x3,
            largeBlocks.wheel5x5,
            largeBlocks.wheelSuspension1x1Left,
            largeBlocks.wheelSuspension3x3Left,
            largeBlocks.wheelSuspension5x5Left,
            largeBlocks.wheelSuspension1x1Right,
            largeBlocks.wheelSuspension3x3Right,
            largeBlocks.wheelSuspension5x5Right,
            largeBlocks.offroadWheel1x1,
            largeBlocks.offroadWheel3x3,
            largeBlocks.offroadWheel5x5,
            largeBlocks.offroadwheelSuspension1x1Left,
            largeBlocks.offroadwheelSuspension3x3Left,
            largeBlocks.offroadwheelSuspension5x5Left,
            largeBlocks.offroadwheelSuspension1x1Right,
            largeBlocks.offroadwheelSuspension3x3Right,
            largeBlocks.offroadwheelSuspension5x5Right,
            largeBlocks.exhaustPipe,
        ],
        small: [
            smallBlocks.wheel1x1,
            smallBlocks.wheel3x3,
            smallBlocks.wheel5x5,
            smallBlocks.wheelSuspension1x1Left,
            smallBlocks.wheelSuspension3x3Left,
            smallBlocks.wheelSuspension5x5Left,
            smallBlocks.wheelSuspension1x1Right,
            smallBlocks.wheelSuspension3x3Right,
            smallBlocks.wheelSuspension5x5Right,
            smallBlocks.offroadWheel1x1,
            smallBlocks.offroadWheel3x3,
            smallBlocks.offroadWheel5x5,
            smallBlocks.offroadwheelSuspension1x1Left,
            smallBlocks.offroadwheelSuspension3x3Left,
            smallBlocks.offroadwheelSuspension5x5Left,
            smallBlocks.offroadwheelSuspension1x1Right,
            smallBlocks.offroadwheelSuspension3x3Right,
            smallBlocks.offroadwheelSuspension5x5Right,
            smallBlocks.exhaustPipe,
        ],
    }, // end wheels

    // control // Управление
    control: {
        large: [
            largeBlocks.remoteControl,
            largeBlocks.camera,
            largeBlocks.gyroscope,
            largeBlocks.buttonPanel,
            largeBlocks.controlPanel,
            largeBlocks.sciFiFourButtonPanel,
            largeBlocks.sciFiOneButtonTerminal,
            largeBlocks.sciFiControlPanel,
            largeBlocks.verticalButtonPanel,
        ],
        small: [
            smallBlocks.remoteControl,
            smallBlocks.camera,
            smallBlocks.gyroscope,
            smallBlocks.buttonPanel,
            smallBlocks.controlPanel,
        ],
    },
    // end control

    // Электроника // electronics
    electronics: {
        large: [
            largeBlocks.oreDetector,
            largeBlocks.beacon,
            largeBlocks.antenna,
            largeBlocks.laserAntenna,
            largeBlocks.antennaDish,
            largeBlocks.projector,
            largeBlocks.programmableBlock,
            largeBlocks.sensor,
            largeBlocks.timerBlock,
            largeBlocks.soundBlock,
        ],
        small: [
            smallBlocks.oreDetector,
            smallBlocks.beacon,
            smallBlocks.antenna,
            smallBlocks.LaserAntenna,
            smallBlocks.projector,
            smallBlocks.programmableBlock,
            smallBlocks.sensor,
            smallBlocks.timerBlock,
            smallBlocks.soundBlock,
        ],
    },
    // end electronics

    // Вооружение // weapon
    weapon: {
        large: [
            largeBlocks.gatlingTurret,
            largeBlocks.missileTurret,
            largeBlocks.interiorTurret,
            largeBlocks.rocketLauncher,
            largeBlocks.warhead,
            largeBlocks.decoy,
            largeBlocks.embrasure,
            largeBlocks.targetDummy,
        ],
        small: [
            smallBlocks.gatlingTurret,
            smallBlocks.missileTurret,
            smallBlocks.rocketLauncher,
            smallBlocks.reloadableRocketLauncher,
            smallBlocks.gatlingGun,
            smallBlocks.warhead,
            smallBlocks.decoy,
        ],
    },
    // end weapon

    // Дисплеи // display
    display: {
        large:[
            largeBlocks.textPanel,
            largeBlocks.LCDPanel,
            largeBlocks.wideLCDPanel,
            largeBlocks.transparentLCD,
            largeBlocks.cornerLCDTop,
            largeBlocks.cornerLCDBottom,
            largeBlocks.cornerLCDFlatTop,
            largeBlocks.cornerLCDFlatBottom,
            largeBlocks.sciFiLCDPanel3x3,
            largeBlocks.sciFiLCDPanel5x3,
            largeBlocks.sciFiLCDPanel5x5,
        ],
        small:[
            smallBlocks.textPanel,
            smallBlocks.LCDPanel,
            smallBlocks.wideLCDPanel,
            smallBlocks.transparentLCD,
            smallBlocks.cornerLCDTop,
            smallBlocks.cornerLCDBottom,
            smallBlocks.cornerLCDFlatTop,
            smallBlocks.cornerLCDFlatBottom,
        ],
    },
    // end display

    // Двери // doors
    doors: {
        large: [
            largeBlocks.door,
            largeBlocks.slidingDoor,
            largeBlocks.offsetDoor,
            largeBlocks.gate,
            largeBlocks.airtightHangarDoor,
            largeBlocks.blastDoors,
            largeBlocks.blastDoorCorner,
            largeBlocks.blastDoorCornerInverted,
            largeBlocks.blastDoorEdge,
        ],
        small: [
            smallBlocks.door,
            smallBlocks.sciFiSlidingDoor,
            smallBlocks.blastDoors,
            smallBlocks.blastDoorCorner,
            smallBlocks.blastDoorCornerInverted,
            smallBlocks.blastDoorEdge,
        ],
    },
    // end doors
    // Окна // windows
    windows: {
        large: [
            largeBlocks.window1x1Flat,
            largeBlocks.window1x1FlatInv,
            largeBlocks.window1x1Slope,
            largeBlocks.window1x1Face,
            largeBlocks.window1x1FaceInv,
            largeBlocks.window1x1Side,
            largeBlocks.window1x1SideInv,
            largeBlocks.window1x2Flat,
            largeBlocks.window1x2FlatInv,
            largeBlocks.window1x2Slope,
            largeBlocks.window1x2Face,
            largeBlocks.window1x2FaceInv,
            largeBlocks.window1x2SideLeft,
            largeBlocks.window1x2SideLeftInv,
            largeBlocks.window1x2SideRight,
            largeBlocks.window1x2SideRightInv,
            largeBlocks.window2x3Flat,
            largeBlocks.window2x3FlatInv,
            largeBlocks.window3x3Flat,
            largeBlocks.window3x3FlatInv,
            largeBlocks.verticalWindow,
            largeBlocks.diagonalWindow,
            largeBlocks.windowWall,
            largeBlocks.windowWallLeft,
            largeBlocks.windowWallRight,
            largeBlocks.viewport1,
            largeBlocks.viewport2,
            largeBlocks.halfWindow,
            largeBlocks.halfWindowInv,
            largeBlocks.halfWindowCorner,
            largeBlocks.halfWindowCornerInv,
        ],
        small: [
            smallBlocks.window1x1Flat,
            smallBlocks.window1x1FlatInv,
            smallBlocks.window1x1Slope,
            smallBlocks.window1x1Face,
            smallBlocks.window1x1FaceInv,
            smallBlocks.window1x1Side,
            smallBlocks.window1x1SideInv,
            smallBlocks.window1x2Flat,
            smallBlocks.window1x2FlatInv,
            smallBlocks.window1x2Slope,
            smallBlocks.window1x2Face,
            smallBlocks.window1x2FaceInv,
            smallBlocks.window1x2SideLeft,
            smallBlocks.window1x2SideLeftInv,
            smallBlocks.window1x2SideRight,
            smallBlocks.window1x2SideRightInv,
            smallBlocks.window2x3Flat,
            smallBlocks.window2x3FlatInv,
            smallBlocks.window3x3Flat,
            smallBlocks.window3x3FlatInv,
            smallBlocks.barredWindow,
            smallBlocks.barredWindowSlope,
            smallBlocks.barredWindowSide,
            smallBlocks.barredWindowFace,
        ],
    },
    // end windows
    // Освещение // lighting
    lighting: {
        large: [
            largeBlocks.spotlight,
            largeBlocks.interiorLight,
            largeBlocks.cornerLight,
            largeBlocks.cornerLightDouble,
            largeBlocks.rotatingLight,
            largeBlocks.neonTubes1,
            largeBlocks.neonTubes2,
            largeBlocks.neonTubesCorner,
            largeBlocks.neonTubesUp,
            largeBlocks.neonTubesDown,
            largeBlocks.neonTubesEnd1,
            largeBlocks.neonTubesEnd2,
            largeBlocks.neonTubesDown2,
            largeBlocks.neonTubesUShape,
        ],
        small: [
            smallBlocks.spotlight,
            smallBlocks.offsetLight,
            smallBlocks.offsetSpotlight,
            smallBlocks.interiorLight,
            smallBlocks.cornerLight,
            smallBlocks.cornerLightDouble,
            smallBlocks.rotatingLight,
        ],
    },
    // end lighting

    // Лестницы // stairs
    stairs: {
        large: [
            largeBlocks.ladder,
            largeBlocks.stairs,
            largeBlocks.ramp,
            largeBlocks.gratedStairs,
            largeBlocks.gratedHalfStairs,
            largeBlocks.gratedHalfStairsMirrored,
        ],
        small: [
            smallBlocks.ladder,
        ],
    },
    // end stairs

    // Мостики // catwalk
    catwalk: {
        large: [
            largeBlocks.steelCatwalk,
            largeBlocks.steelCatwalkTwoSides,
            largeBlocks.steelCatwalkCorner,
            largeBlocks.steelCatwalkPlate,
            largeBlocks.gratedCatwalk,
            largeBlocks.gratedCatwalkStraight,
            largeBlocks.gratedCatwalkCorner,
            largeBlocks.gratedCatwalkWall,
            largeBlocks.gratedCatwalkEnd,
            largeBlocks.gratedCatwalkHalfRight,
            largeBlocks.gratedCatwalkHalfLeft,
        ],
        small: [],
    },
    // end catwalk

    // Перегородки // partitions
    partitions: {
        large: [
            largeBlocks.coverWalls,
            largeBlocks.halfCoverWalls,
            largeBlocks.fireCover,
            largeBlocks.fireCoverCorner,
            largeBlocks.railingStraight,
            largeBlocks.railingDouble,
            largeBlocks.railingDiagonal,
            largeBlocks.railingCorner,
            largeBlocks.railingHalfRight,
            largeBlocks.railingHalfLeft,
        ],
        small: [],
    },
    // end partitions

    // Коридоры // passage
    passage: {
        large:[
            largeBlocks.passage,
            largeBlocks.passage2,
            largeBlocks.passage2Side,
            largeBlocks.passage3,
            largeBlocks.passage3Light,
            largeBlocks.passage3Wall,
            largeBlocks.passage3Cross,
            largeBlocks.passage3Frame,
            largeBlocks.passage3Corner,
            largeBlocks.passage3TJunction,
            largeBlocks.passage3Windowed,
        ],
        small:[],
    },
    // end passage

    // Социальные // social
    social: {
        large: [
            largeBlocks.cryoChamber,
            largeBlocks.medicalRoom,
            largeBlocks.safeZone,
            largeBlocks.jukebox,
            largeBlocks.consoleBlock,
            largeBlocks.store,
            largeBlocks.contracts,
            largeBlocks.atm,
            largeBlocks.vendingMachine,
            largeBlocks.dispenser,
        ],
        small: [
            smallBlocks.cryoChamber,
        ],
    },
    // end social

    // Гравитационные блоки // gravityBlocks
    gravityBlocks: {
        large: [
            largeBlocks.parachuteHatch,
            largeBlocks.artificialMass,
            largeBlocks.gravityGenerator,
            largeBlocks.sphericalGravityGenerator,
            largeBlocks.spaceBall,
        ],
        small: [
            smallBlocks.parachuteHatch,
            smallBlocks.artificialMass,
            smallBlocks.spaceBall,
        ],
    },
    // end gravityBlocks
};