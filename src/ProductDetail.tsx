import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { productsData } from './data/products';
import { ChevronLeft } from 'lucide-react';

// --- IMAGE IMPORTS ---


// GB INSPECTION SYSTEMS
const gb0Compression = new URL('./product/GB/download.jpg', import.meta.url).href;
const gbAngleCompression = new URL('./product/GB/5016.png', import.meta.url).href;
const gbHighTemp = new URL('./product/GB/UT-GB-High-Temp-Probes-244.jpg', import.meta.url).href;
const gbCustomMade = new URL('./product/GB/edf-with-caption.png', import.meta.url).href;
const gbLimbotofd = new URL('./product/GB/tofd-group-double-w446.png', import.meta.url).href;
const gbTula = new URL('./product/GB/TULA-probe-01.jpg', import.meta.url).href;
const gbIntegralTofd = new URL('./product/GB/Integral-TOFD-copy.png', import.meta.url).href;


// VALLEN SYSTEME
const spotWaveImage = new URL('./product/VALLEN SYSTEME/spotWave.png', import.meta.url).href;
const dataAcquisitionImage = new URL('./product/VALLEN SYSTEME/Data-Aquisition-Set-A_xV1.jpg', import.meta.url).href;
const softwareImage = new URL('./product/VALLEN SYSTEME/SW-AE-Feature-Analysis.png', import.meta.url).href;
const atexImage = new URL('./product/VALLEN SYSTEME/ATEX-Sensors.jpg', import.meta.url).href;
const sensorsImage = new URL('./product/VALLEN SYSTEME/VS900-M-Beitrag-300x270.png', import.meta.url).href;
const accessoriesImage = new URL('./product/VALLEN SYSTEME/Acessories-ohne-Trommel.png', import.meta.url).href;

// BALTEAU NDT
const llxSeriesImage = new URL('./product/BALTOSPOT/LLX225DA-MainSquare__FitMaxWzIwMDAsMjAwMF0.png', import.meta.url).href;
const ceramSeriesImage = new URL('./product/BALTOSPOT/Ceram35P-1.png', import.meta.url).href;
const gfSeriesImage = new URL('./product/BALTOSPOT/GFC205.png', import.meta.url).href;
const crawlerSeriesImage = new URL('./product/BALTOSPOT/GFC300C-web.png', import.meta.url).href;
const xldSeriesImage = new URL('./product/BALTOSPOT/XLD160-2.png', import.meta.url).href;
const xsdSeriesImage = new URL('./product/BALTOSPOT/XSD160-1.png', import.meta.url).href;
const xmdSeriesImage = new URL('./product/BALTOSPOT/XMD225-1.png', import.meta.url).href;
const AIS = new URL('./product/BALTOSPOT/AIS.png', import.meta.url).href;
const tubesImage = new URL('./product/BALTOSPOT/TSC200.png', import.meta.url).href;
const flatPanelImage = new URL('./product/BALTOSPOT/NDT-1012MA-7-e1697207004215.png', import.meta.url).href;
const softwareSuiteImage = new URL('./product/BALTOSPOT/IPS012.png', import.meta.url).href;
const phantomImage = new URL('./product/BALTOSPOT/Mire.png', import.meta.url).href;
const standsImage = new URL('./product/BALTOSPOT/Support-on-wheels.png', import.meta.url).href;
const fixed = new URL('./product/BALTOSPOT/Ring-Lead-Screen.png', import.meta.url).href;
// BALTEAU Category Icons
const baltospotIcon = new URL('./product/BALTOSPOT/icon-baltospot-colors.png', import.meta.url).href;
const baltographIcon = new URL('./product/BALTOSPOT/icon-baltograph-colors.png', import.meta.url).href;
const baltomaticIcon = new URL('./product/BALTOSPOT/icon-baltomatic-colors.png', import.meta.url).href;
const baltoscopeIcon = new URL('./product/BALTOSPOT/icon-baltoscope-colors.png', import.meta.url).href;
const accessoriesIconBalteau = new URL('./product/BALTOSPOT/icon-accessories-colors.png', import.meta.url).href;

// JOHNSON & ALLEN
const mpiImage = new URL('./product/JOHNSON & ALLEN/J.jpg', import.meta.url).href;
const dpiImage = new URL('./product/JOHNSON & ALLEN/dpi-equipment-574693e9808e9.jpg', import.meta.url).href;
const bespokeLineImage = new URL('./product/JOHNSON & ALLEN/image003.jpg', import.meta.url).href;

// ROHMANN
const inspectionIcon = new URL('./product/Rohmann/Inspection.jpg', import.meta.url).href;
const elorailImage = new URL('./product/Rohmann/WPG340-400x267.jpg', import.meta.url).href;
const eloboltImage = new URL('./product/Rohmann/elobolt-400x257.jpg', import.meta.url).href;
const eloscanImage = new URL('./product/Rohmann/EloScan_3-400x362.jpg', import.meta.url).href;
const elotestHstImage = new URL('./product/Rohmann/Elotest_HST-400x491.jpg', import.meta.url).href;
const elotestIs3Image = new URL('./product/Rohmann/ElotestM3-400x267.jpg', import.meta.url).href;
const elotestM6Image = new URL('./product/Rohmann/Rohmann-ELOTEST-M6-Montage-quer.jpg', import.meta.url).href;
const elotestM3Image = new URL('./product/Rohmann/ElotestM3-400x267 (1).jpg', import.meta.url).href;
const elotestM2v3Image = new URL('./product/Rohmann/M2V31-400x267.jpg', import.meta.url).href;
const elotestB300Image = new URL('./product/Rohmann/B300_compressed-400x477.png', import.meta.url).href;
const flexitestImage = new URL('./product/Rohmann/Flexitest_Front-600x400-1-400x267.jpg', import.meta.url).href;

// Rohmann Accessories
const emdcImage = new URL('./product/Rohmann/emdc.jpg', import.meta.url).href;
const rohmannSensorsImage = new URL('./product/Rohmann/sensors-500x383.jpg', import.meta.url).href;
const rotorsImage = new URL('./product/Rohmann/Rotoren1_LA1.jpg', import.meta.url).href;
const rotorEc15Image = new URL('./product/Rohmann/EC15.jpg', import.meta.url).href;
const referenceStandardsImage = new URL('./product/Rohmann/referance_standards.jpg', import.meta.url).href;

// --- ECHO ULTRASONIC IMPORTS ---
// Category Icons
const highTempCategoryIcon = new URL('./product/echo/high-temperature-industrial-ultrasonic-couplant-450x288-1.png', import.meta.url).href;
const ambientCategoryIcon = new URL('./product/echo/Ambient-Temperature-Range-Industrial-Ultrasonic-Couplants-450x469-1.png', import.meta.url).href;
const specialtyCategoryIcon = new URL('./product/echo/speciality-application-industrial-ultrasonic-couplant-300x150-1.png', import.meta.url).href;

// Category 1: High Temp Products
const versaSonicImg = new URL('./product/echo/high-temperature-industrial-ultrasonic-couplant-VersaSonic-400x400.webp', import.meta.url).href;
const hiTempcoImg = new URL('./product/echo/new-HiTempco-plus-high-temperature-ultrasonic-couplant-400x400.webp', import.meta.url).href;
const echoThermImg = new URL('./product/echo/ultrasonic-couplant-water-based-SuperSonix-1000x1000.webp', import.meta.url).href;
const echoThermExtremeImg = new URL('./product/echo/EchoTherm-Extreme-High-Temperature-Couplant-1000x1000.webp', import.meta.url).href;
const echoThermDiscsImg = new URL('./product/echo/Discs-980x714.png', import.meta.url).href;

// Category 2: Intermediate & Low Temp Products
const superSonixImg = new URL('./product/echo/ultrasonic-couplant-water-based-SuperSonix-1000x1000.webp', import.meta.url).href;
const echoPureImg = new URL('./product/echo/Phased-Array-UT-Inspection-ultrasonic-couplant-EchoPure-1000x1000.webp', import.meta.url).href;
const signalImg = new URL('./product/echo/Signal_Gallon_nobkgd-980x980.webp', import.meta.url).href;
const ultraSonixImg = new URL('./product/echo/UltraSoniX_1-gallon-980x1033.png', import.meta.url).href;
const sonixImg = new URL('./product/echo/ambient-industrial-ultrasonic-couplant-SoniX-1000x1000.webp', import.meta.url).href;
const spotWeldImg = new URL('./product/echo/echo-spot-weld-ultrasonic-couplant-1000x1000.webp', import.meta.url).href;
const glycerinImg = new URL('./product/echo/glycerin-and-propylene-glycol-industrial-ultrasonic-couplant-1000x1000.webp', import.meta.url).href;

// Category 3: Specialty Products
const shearWaveImg = new URL('./product/echo/Shear-Wave-industrial-ultrasonic-couplant-Echo-1000x1000.webp', import.meta.url).href;
const echo8zhImg = new URL('./product/echo/long-lasting-industrial-ultrasonic-couplant-Echo-8-ZH-v3-1000x1000.webp', import.meta.url).href;
const echoZplusImg = new URL('./product/echo/high-acoustic-impedance-ultrasonic-couplant-Echo-Zplus-1000x1000.webp', import.meta.url).href;
const foreverWedgeImg = new URL('./product/echo/non-drying-industrail-ultrasonic-couplant-Forever-Wedge-1000x1000.webp', import.meta.url).href;

// WÖHLER - Category Icons
const wohlerMeasuringIcon = new URL('./product/WOHLER/5500.jpg', import.meta.url).href;

// WÖHLER - Measuring Instruments Products
const a550Img = new URL('./product/WOHLER/5500.jpg', import.meta.url).href;
const ti410Img = new URL('./product/WOHLER/6808_2.jpg', import.meta.url).href;
const a550IndImg = new URL('./product/WOHLER/8229_1_1.jpg', import.meta.url).href;
const a450Img = new URL('./product/WOHLER/4500_6.jpg', import.meta.url).href;
const rp72Img = new URL('./product/WOHLER/9150_1.jpg', import.meta.url).href;
const dp600Img = new URL('./product/WOHLER/dp_600_procut.webp', import.meta.url).href;
const gs220Img = new URL('./product/WOHLER/6606_1.jpg', import.meta.url).href;
const dp700Img = new URL('./product/WOHLER/dp700_produkt.webp', import.meta.url).href;
const gs300Img = new URL('./product/WOHLER/gs300.jpg', import.meta.url).href;
const m603Img = new URL('./product/WOHLER/m603.jpg', import.meta.url).href;
const sc660Img = new URL('./product/WOHLER/8836.jpg', import.meta.url).href;
const dc410Img = new URL('./product/WOHLER/dc410_flow.jpg', import.meta.url).href;
const cm220Img = new URL('./product/WOHLER/6613_1.jpg', import.meta.url).href;
const cdl210Img = new URL('./product/WOHLER/6648_mit-software.jpg', import.meta.url).href;
const fa430Img = new URL('./product/WOHLER/p_103.jpg', import.meta.url).href;
const iq300Img = new URL('./product/WOHLER/p_193_iq-300_2.jpg', import.meta.url).href;
const dt310Img = new URL('./product/WOHLER/6622_1.jpg', import.meta.url).href;
const rf220Img = new URL('./product/WOHLER/6615_1.jpg', import.meta.url).href;
const hbf420Img = new URL('./product/WOHLER/8440_1.jpg', import.meta.url).href;
const hf300Img = new URL('./product/WOHLER/7180.jpg', import.meta.url).href;
// WÖHLER - Temperature & Refrigeration Additions
const hf550Img = new URL('./product/WOHLER/hf-550.jpg', import.meta.url).href;
const ir310Img = new URL('./product/WOHLER/1388.jpg', import.meta.url).href;
const rl200Img = new URL('./product/WOHLER/11361_3.webp', import.meta.url).href;
const mr400Img = new URL('./product/WOHLER/mr_400_1.jpg', import.meta.url).href;
const rs400Img = new URL('./product/WOHLER/waage_1.jpg', import.meta.url).href;
const rl300Img = new URL('./product/WOHLER/3832_7.jpg', import.meta.url).href;
const rec400Img = new URL('./product/WOHLER/rec400_p-211.jpg', import.meta.url).href;
const vp400Img = new URL('./product/WOHLER/vp_400_p-212.jpg', import.meta.url).href;
// WÖHLER - Inspection Systems
const wohlerInspectionIcon = new URL('./product/WOHLER/vis-260.jpg', import.meta.url).href;
const l200Img = new URL('./product/WOHLER/7430_1.jpg', import.meta.url).href;
const vis700Img = new URL('./product/WOHLER/7000_1_3.jpg', import.meta.url).href;
const vis500Img = new URL('./product/WOHLER/p_18810.jpg', import.meta.url).href;
const vis750Img = new URL('./product/WOHLER/vis_-750_inspektionskamera.jpg', import.meta.url).href;
const vis260Img = new URL('./product/WOHLER/vis-260.webp', import.meta.url).href;
const vis360Img = new URL('./product/WOHLER/vis-360.webp', import.meta.url).href;

const ve320Img = new URL('./product/WOHLER/6935_1.jpg', import.meta.url).href;
const ve500Img = new URL('./product/WOHLER/download.svg', import.meta.url).href;
const ve400Img = new URL('./product/WOHLER/6930_60.webp', import.meta.url).href;
const glassMirrorImg = new URL('./product/WOHLER/p_22_spiegel.webp', import.meta.url).href;

const cleaningIcon = new URL('./product/WOHLER/3332_1.jpg', import.meta.url).href;
const viperLImg = new URL('./product/WOHLER/9412_1.jpg', import.meta.url).href;
const viperMImg = new URL('./product/WOHLER/handkehrhaspel.jpg', import.meta.url).href;
const viperSImg = new URL('./product/WOHLER/gruppenartikel_p16.webp', import.meta.url).href;
const viperXlImg = new URL('./product/WOHLER/3332_1 (1).jpg', import.meta.url).href;
const rotaryViperHdImg = new URL('./product/WOHLER/7437_1.jpg', import.meta.url).href;
const rotaryViperVentImg = new URL('./product/WOHLER/4866_1_1.jpg', import.meta.url).href;
const snapSweepSoftImg = new URL('./product/WOHLER/p_15220_snap_sweep_soft.jpg', import.meta.url).href;
const snapSweepRegularImg = new URL('./product/WOHLER/snapsweep_1.jpg', import.meta.url).href;
const airCleaningImg = new URL('./product/WOHLER/7570_1.jpg', import.meta.url).href;
const dustCollectorImg = new URL('./product/WOHLER/6190_1.jpg', import.meta.url).href;
const threadedBrushImg = new URL('./product/WOHLER/17915_1.jpg', import.meta.url).href;
const starsImg = new URL('./product/WOHLER/3709_1.jpg', import.meta.url).href;
const boilerBrushesImg = new URL('./product/WOHLER/1592_1.jpg', import.meta.url).href;
const rm200Img = new URL('./product/WOHLER/p_174_1.jpg', import.meta.url).href;
const rm300Img = new URL('./product/WOHLER/p_175.jpg', import.meta.url).href;
const rm400Img = new URL('./product/WOHLER/p_173.jpg', import.meta.url).href;
const pu100Img = new URL('./product/WOHLER/p_178.jpg', import.meta.url).href;

//mitcorp
const mitcorpXSeriesIcon = new URL('./product/MITCORP/X3000-photo_departed.png', import.meta.url).href;
const mitcorpPrSeriesIcon = new URL('./product/MITCORP/PRSL300T_00.jpg', import.meta.url).href;
const mitcorpX3000Img = new URL('./product/MITCORP/X3000-photo_departed.png', import.meta.url).href;
const mitcorpX750Img = new URL('./product/MITCORP/X750-01.jpg.webp', import.meta.url).href;
const mitcorpX2000Img = new URL('./product/MITCORP/X2000-HD-Featured-Image-1000x773.jpg', import.meta.url).href;
const mitcorpX600PlusImg = new URL('./product/MITCORP/X600_4W_02-1-150x150.jpg', import.meta.url).href;
const mitcorpX600HdImg = new URL('./product/MITCORP/X600_主圖合成.jpg', import.meta.url).href;
const mitcorpPrsl300tImg = new URL('./product/MITCORP/PRSL300T_00.jpg', import.meta.url).href;
const mitcorpPrm2830Img = new URL('./product/MITCORP/X600-2830-e1767321155172.jpg', import.meta.url).href;
const mitcorpPs10hdImg = new URL('./product/MITCORP/PS10HD_00.jpg', import.meta.url).href;

// JIREH
const jirehManualIcon = new URL('./product/jireh/JIREH-Manual-Scanner-STIX-Flange1.jpg', import.meta.url).href;
const jirehCrawlerIcon = new URL('./product/jireh/BaseCrawler-Card.width-500.jpg', import.meta.url).href;
const jirehCircitImg = new URL('./product/jireh/DJG001-Card.width-500.png', import.meta.url).href;
const jirehStixImg = new URL('./product/jireh/BGG002-Card.width-500.png', import.meta.url).href;
const jirehRotixImg = new URL('./product/jireh/CEG048-Card.width-500.png', import.meta.url).href;
const jirehMicrobeImg = new URL('./product/jireh/BTG018-Card_vCwn0tT.width-500.png', import.meta.url).href;
const jirehOdiImg = new URL('./product/jireh/ODI-Card.width-500.png', import.meta.url).href;
const jirehNavicImg = new URL('./product/jireh/BaseCrawler-Card.width-500.jpg', import.meta.url).href;
const jirehSkootImg = new URL('./product/jireh/DNG001-Card.width-500.png', import.meta.url).href;
const jirehMotixImg = new URL('./product/jireh/MOTIX-Plastic-3-Card.width-500.png', import.meta.url).href;
const jirehTeraxImg = new URL('./product/jireh/ENG002-Card.width-500.png', import.meta.url).href;
const jirehTrogloImg = new URL('./product/jireh/EPG002-Troglo-Tri.width-1000.jpg', import.meta.url).href;

const durrComputedRadiographyImg = new URL('./product/durr-ndt/computed_radiography.jpg', import.meta.url).href;
const durrDirectDigitalRadiographyImg = new URL('./product/durr-ndt/direct_digital_radiography.jpg', import.meta.url).href;
const durrNdtSoftwareImg = new URL('./product/durr-ndt/ndt-software.jpg', import.meta.url).href;
const durrConventionalRadiographyImg = new URL('./product/durr-ndt/conventional_radiography.jpg', import.meta.url).href;
const durrHdCr35Img = new URL('./product/durr-ndt/hd-cr-35-ndt-computed-radiography-scanner-1.jpg', import.meta.url).href;
const durrCr35Img = new URL('./product/durr-ndt/cr-35-ndt-computed-radiography-scanner-1.jpg', import.meta.url).href;
const durrCrPhantomImg = new URL('./product/durr-ndt/cr_phantom-hl.jpg', import.meta.url).href;
const durrImagingPlatesImg = new URL('./product/durr-ndt/imaging_plates-hl.jpg', import.meta.url).href;
const durrDdr7Img = new URL('./product/durr-ndt/d-dr-7-ndt-cmos-xrayl-detector-1.jpg', import.meta.url).href;
const durrDdr1024Img = new URL('./product/durr-ndt/d-dr-1024-ndt-flat-panel-detector-1.jpg', import.meta.url).href;
const durrDdr1025bImg = new URL('./product/durr-ndt/d-dr-ndt-bendable-xray-detector-1.jpg', import.meta.url).href;
const durrDdr2329Img = new URL('./product/durr-ndt/d-dr-2329-ndt-flat-panel-detector-1.jpg', import.meta.url).href;
const durrDdr2430Img = new URL('./product/durr-ndt/d-dr-2430-ndt-flat-panel-detector-1.jpg', import.meta.url).href;
const durrDdr3643Img = new URL('./product/durr-ndt/d-dr-3643-ndt-flat-panel-detector-1.jpg', import.meta.url).href;
const durrDrc2430heImg = new URL('./product/durr-ndt/drc-he-flat-panel-detector-hl.jpg', import.meta.url).href;
const durrDrp2020Img = new URL('./product/durr-ndt/drp_flat_panel-hl.jpg', import.meta.url).href;
const durrDtctXImg = new URL('./product/durr-ndt/ndt-imaging-software-d-tect-x-hl.jpg', import.meta.url).href;
const durrInstandtPacsImg = new URL('./product/durr-ndt/ndt-pacs-software-instandt-1.jpg', import.meta.url).href;
const durrDriveNdtImg = new URL('./product/durr-ndt/drive-ndt-management-software-hl.jpg', import.meta.url).href;
const durrXr24Img = new URL('./product/durr-ndt/xr24_automatic_film_processor-hl.jpg', import.meta.url).href;
const durrChemicalsImg = new URL('./product/durr-ndt/ndt_x-ray_chemicals-hl.jpg', import.meta.url).href;

// SPECTRO
const spectroXrp3000Img = new URL('./product/spectro/AccuMAX-_Radiometer-Photometer_Kit-ndt.webp', import.meta.url).href;
const spectroXrp3000aImg = new URL('./product/spectro/XRP-3000A_web_a6d0521f-f570-4f0f-a4ad-0fc53f3545b6.webp', import.meta.url).href;
const spectroXr1000Img = new URL('./product/spectro/XR-1000_copy_12def2c5-5967-4fa8-9fc4-c16d750d781a.webp', import.meta.url).href;
const spectroXp2000Img = new URL('./product/spectro/XP-2000_web.webp', import.meta.url).href;
const spectroXp2000aImg = new URL('./product/spectro/XP-2000A.webp', import.meta.url).href;
const spectroXp4000Img = new URL('./product/spectro/ACCUPRO-Copy.webp', import.meta.url).href;
const spectroXs555LImg = new URL('./product/spectro/XRP-3000AccuMAX_DigitalRadiometerwithXS-555LUltravioletLightCalibrationToolwithXrayFilmViewer_81f3e207-0a46-4052-b72b-bafe7eeb048f_copy.webp', import.meta.url).href;
const spectroXds1000Img = new URL('./product/spectro/XDSD-1000usa_copy_copy.jpg', import.meta.url).href;
const spectroXs254Img = new URL('./product/spectro/XS-254_usa_copy_copy.webp', import.meta.url).href;
const spectroXrb100Img = new URL('./product/spectro/XRB-100_copy.webp', import.meta.url).href;
const spectroXs300Img = new URL('./product/spectro/XS-300usa_copy_copy.jpg', import.meta.url).href;
const spectroXs365Img = new URL('./product/spectro/XS-365usa_copy_copy.webp', import.meta.url).href;
const spectroXs450Img = new URL('./product/spectro/XS-450_USA_copy_copy.jpg', import.meta.url).href;
const spectroXs555IImg = new URL('./product/spectro/XS-555_I_USA_copy_copy.jpg', import.meta.url).href;
const spectroXds1000aImg = new URL('./product/spectro/XDS-1000A_copy_2.webp', import.meta.url).href;
const spectroXp3000EliteImg = new URL('./product/spectro/new_xp-3000.webp', import.meta.url).href;
const spectroXp3000aEliteImg = new URL('./product/spectro/XP-3000A_final.webp', import.meta.url).href;

// NDT Supplies Icon
const spectroNdtSuppliesIcon = new URL('./product/spectro/UV-365_uVision_365_Series_MPI_Testing_bolt_for_NDT_copy_for_web.webp', import.meta.url).href;

// NDT Supplies Products
const edg13sblcImg = new URL('./product/spectro/EDG-13SBLC_copy_2_12ac10be-220b-4186-a7c8-d2ff95e11afe_copy.avif', import.meta.url).href;
const edg13hcImg = new URL('./product/spectro/EDG-13HC_w_cert_copy_824bce6c-4dfc-41c9-b985-683bac7a56a0.avif', import.meta.url).href;
const edg13tImg = new URL('./product/spectro/EDG-13T_copy_copy.avif', import.meta.url).href;
const uv365msblcImg = new URL('./product/spectro/UV-MSBLC_copy.avif', import.meta.url).href;
const uv365mhcImg = new URL('./product/spectro/uVision-UV-365MHC_copy (1).avif', import.meta.url).href;
const ml3500cImg = new URL('./product/spectro/ML-3500C_copy.webp', import.meta.url).href;
const ml3500sImg = new URL('./product/spectro/ML-3500S_copy.webp', import.meta.url).href;
const ml3500flImg = new URL('./product/spectro/ML-3500FL_copy.webp', import.meta.url).href;
const uv365hcrImg = new URL('./product/spectro/UV-365HCR_copy.webp', import.meta.url).href;
const pm16bImg = new URL('./product/spectro/PM_16B_web.webp', import.meta.url).href;
const uv365zsblcImg = new URL('./product/spectro/UV-365ZSBLC-Handheld_copy_3.webp', import.meta.url).href;
const uv365zhcImg = new URL('./product/spectro/UV-365ZSBLC-Handheld_copy_3 (1).webp', import.meta.url).href;
const tri365sblcImg = new URL('./product/spectro/TRI-365SBLC-20_web.webp', import.meta.url).href;
const tri365hcImg = new URL('./product/spectro/Tritan365SeriesUltraviolet_UV-A_BlacklightLEDInspection-Lamp.webp', import.meta.url).href;
const tri365mdbImg = new URL('./product/spectro/TRI-365SBLC-20_web (1).webp', import.meta.url).href;
const tri365mhbImg = new URL('./product/spectro/TRI-365SBLC-20_web (2).webp', import.meta.url).href;
const uv365sblcImg = new URL('./product/spectro/uVision-UV-365-Deluxe_copy.webp', import.meta.url).href;
const uv365hcImg = new URL('./product/spectro/uVision-UV-365-Deluxe_copy (1).webp', import.meta.url).href;
const xrp3000aImg = new URL('./product/spectro/XRP-3000A_web_a6d0521f-f570-4f0f-a4ad-0fc53f3545b6 (1).webp', import.meta.url).href;
const xrp3000Img = new URL('./product/spectro/AccuMAX-_Radiometer-Photometer_Kit-ndt (1).webp', import.meta.url).href;
const uv365mehImg = new URL('./product/spectro/UV-365ES_4ba061ed-614b-4d37-9f5d-e4abac016c28.webp', import.meta.url).href;
const pm8bImg = new URL('./product/spectro/PM-8B_8.webp', import.meta.url).href;
const uv365zehImg = new URL('./product/spectro/UV-365ZSBLC-Angled_copy_bcbfa545-224d-4d97-91fe-61061cad1cbf.webp', import.meta.url).href;
const edg4wImg = new URL('./product/spectro/EDG-4W_copy_web.webp', import.meta.url).href;
const tri365dbImg = new URL('./product/spectro/TRI-365SBLC-20_web (3).webp', import.meta.url).href;
const tri365hbImg = new URL('./product/spectro/TRI-365SBLC-20_web (4).webp', import.meta.url).href;
const xx15bfImg = new URL('./product/spectro/XX-15BFSpectrolineNDTXSeriesBenchLamp15WattBLBBlackLightBulbTubewithFilterAssemblyforLabandLifeScienceForensicInvestigationandNDTNonDestructiveTesting_copy.webp', import.meta.url).href;
const xp3000Img = new URL('./product/spectro/new_xp-3000 (1).webp', import.meta.url).href;
const uv365esImg = new URL('./product/spectro/uV-365ESuVision365handheldcopy.webp', import.meta.url).href;
const uv365ehImg = new URL('./product/spectro/UV-365ES_4ba061ed-614b-4d37-9f5d-e4abac016c28 (1).webp', import.meta.url).href;
const xr1000Img = new URL('./product/spectro/XR-1000_copy_12def2c5-5967-4fa8-9fc4-c16d750d781a (1).webp', import.meta.url).href;
const xp4000Img = new URL('./product/spectro/ACCUPRO-Copy (1).webp', import.meta.url).href;
const ek3000Img = new URL('./product/spectro/ek3000_copy_2c9bc323-3b44-4250-b9bf-447fcf3d6299.webp', import.meta.url).href;
const xp2000aImg = new URL('./product/spectro/XP-2000A (1).webp', import.meta.url).href;
const xp2000Img = new URL('./product/spectro/XP-2000_web (1).webp', import.meta.url).href;

// Additional NDT Supplies Products
const cla100zImg = new URL('./product/spectro/CLA-100.webp', import.meta.url).href;
const cla150Img = new URL('./product/spectro/CLA-150.webp', import.meta.url).href;
const cla100Img = new URL('./product/spectro/CLA-100 (1).webp', import.meta.url).href;
const bleLed100Img = new URL('./product/spectro/VividReplacementUV-ALEDReplacementBulbForSB-100P_FC-100SeriesLamps.webp', import.meta.url).href;
const bleLed150Img = new URL('./product/spectro/VividReplacementUV-ALED-Replacement_copy.webp', import.meta.url).href;
const xx40Img = new URL('./product/spectro/XX-40_XSeriesLongWaveUltravioletUV-A365NMNonDestructiveTestingNDTFluorescentInspectionBenchTubeOverheadLamp_copy.webp', import.meta.url).href;
const opx365Img = new URL('./product/spectro/OPX-365copy_e2cf94cb-c428-4beb-9386-c93e932f16ba.webp', import.meta.url).href;
const xs555LImg = new URL('./product/spectro/XS-555L_copy_copy_copy.webp', import.meta.url).href;
const spnClr365HcImg = new URL('./product/spectro/Clarity-365-LED-365nm-UV-Flashlight-Kit-with-Lithium-Ion-Battery_copy.webp', import.meta.url).href;
const spnVin365Img = new URL('./product/spectro/SPN-VIN365_copy.webp', import.meta.url).href;
const spnClr365ScImg = new URL('./product/spectro/Clarity-365-LED-365nm-UV-Flashlight-Kit-with-Lithium-Ion-Battery_copy_copy.jpg', import.meta.url).href;
const eex1000Img = new URL('./product/spectro/EEX-1000_e99f6ec1-4da7-42c4-8a79-037f50e58e08.webp', import.meta.url).href;
const xx15aImg = new URL('./product/spectro/XX-15AXSeriesLongWaveUltravioletUV-A365NMNonDestructiveTestingNDTFluorescentInspectionBenchTubeOverheadLamp.webp', import.meta.url).href;
const x15gImg = new URL('./product/spectro/X-15GXSeriesLongWaveUltravioletUV-A365NMNonDestructiveTestingNDTFluorescentInspectionBenchTubeOverheadLamp.webp', import.meta.url).href;
const olx365bflImg = new URL('./product/spectro/OLX-365NBOpti-luxLongWaveUltravioletUV-A365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled_copy.webp', import.meta.url).href;
const olx365bImg = new URL('./product/spectro/OLX-365NBOpti-luxLongWaveUltravioletUV-A365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled_copy (1).webp', import.meta.url).href;
const spnClrBhaImg = new URL('./product/spectro/SPN-CLR-BA_body_copy.webp', import.meta.url).href;
const spnClrBaImg = new URL('./product/spectro/SPN-CLR-BA_body_copy (1).webp', import.meta.url).href;
const yk1Img = new URL('./product/spectro/YK-1ACMagneticYokeForMagneticParticleInspectionMPIandMagneticParticleTestingMPT_copy.webp', import.meta.url).href;
const olx365flImg = new URL('./product/spectro/OLX-365FLOpti-luxLongWaveUltravioletUV-A365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled.webp', import.meta.url).href;
const olx365Img = new URL('./product/spectro/OLX-365copy.webp', import.meta.url).href;
const idx550Img = new URL('./product/spectro/IDX-550_copy_web.webp', import.meta.url).href;
const idx500Img = new URL('./product/spectro/IDX-500_web.webp', import.meta.url).href;
const opx450Img = new URL('./product/spectro/OptiMax450RechargeableLED450nmBlueLightFlashlight.webp', import.meta.url).href;
const idx400Img = new URL('./product/spectro/IDX-400Nano365SeriesLongWaveUltravioletUV365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled.webp', import.meta.url).href;
const idx350Img = new URL('./product/spectro/IDX-350_copy_web.webp', import.meta.url).href;
const idx300Img = new URL('./product/spectro/IDX-300Nano365SeriesLongWaveUltravioletUV365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled.webp', import.meta.url).href;
const idx200Img = new URL('./product/spectro/IDX-200Nano365SeriesLongWaveUltravioletUV365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled.webp', import.meta.url).href;
const spectroAerospaceImg = new URL('./product/spectro/iStock_61324026_LARGE_Green.webp', import.meta.url).href;
const aeroUv365msblcImg = new URL('./product/spectro/uVision-UV-365-Deluxe_copy (2).webp', import.meta.url).href;
const aeroUv365mhcImg = new URL('./product/spectro/uVision-UV-365-Deluxe_copy (3).webp', import.meta.url).href;
const aeroUv365hcrImg = new URL('./product/spectro/UV-365HCR_copy (1).webp', import.meta.url).href;
const aeroUv365zsblcImg = new URL('./product/spectro/UV-365ZSBLC-Handheld_copy_3 (2).webp', import.meta.url).href;
const aeroUv365zhcImg = new URL('./product/spectro/UV-365ZSBLC-Handheld_copy_3 (3).webp', import.meta.url).href;
const aeroTri365sblcImg = new URL('./product/spectro/TRI-365SBLC-20_web (5).webp', import.meta.url).href;
const aeroTri365mhbImg = new URL('./product/spectro/TRI-365SBLC-20_web (6).webp', import.meta.url).href;
const aeroTri365mdbImg = new URL('./product/spectro/TRI-365SBLC-20_web (7).webp', import.meta.url).href;
const aeroTri365hcImg = new URL('./product/spectro/Tritan365SeriesUltraviolet_UV-A_BlacklightLEDInspection-Lamp (1).webp', import.meta.url).href;
const aeroUv365sblcImg = new URL('./product/spectro/uVision-UV-365-Deluxe_copy (5).webp', import.meta.url).href;
const aeroUv365hcImg = new URL('./product/spectro/uVision-UV-365-Deluxe_copy (6).webp', import.meta.url).href;
const aeroUv365mehImg = new URL('./product/spectro/UV-365ES_4ba061ed-614b-4d37-9f5d-e4abac016c28 (2).webp', import.meta.url).href;
const aeroXrp3000Img = new URL('./product/spectro/AccuMAX-_Radiometer-Photometer_Kit-ndt (2).webp', import.meta.url).href;
const aeroXrp3000aImg = new URL('./product/spectro/XRP-3000A_web_a6d0521f-f570-4f0f-a4ad-0fc53f3545b6 (2).webp', import.meta.url).href;
const aeroUv365zehImg = new URL('./product/spectro/UV-365ZSBLC-Angled_copy_bcbfa545-224d-4d97-91fe-61061cad1cbf (1).webp', import.meta.url).href;
const aeroTri365hbImg = new URL('./product/spectro/TRI-365SBLC-20_web (8).webp', import.meta.url).href;
const aeroTri365dbImg = new URL('./product/spectro/TRI-365SBLC-20_web (9).webp', import.meta.url).href;
const aeroXp3000aImg = new URL('./product/spectro/XP-3000A_final (1).webp', import.meta.url).href;
const aeroXp3000Img = new URL('./product/spectro/new_xp-3000 (2).webp', import.meta.url).href;
const aeroUv365ehImg = new URL('./product/spectro/UV-365ES_4ba061ed-614b-4d37-9f5d-e4abac016c28 (3).webp', import.meta.url).href;
const aeroUv365esImg = new URL('./product/spectro/uV-365ESuVision365handheldcopy (1).webp', import.meta.url).href;
const aeroXr1000Img = new URL('./product/spectro/XR-1000_copy_12def2c5-5967-4fa8-9fc4-c16d750d781a (2).webp', import.meta.url).href;
const aeroXp4000Img = new URL('./product/spectro/ACCUPRO-Copy (2).webp', import.meta.url).href;
const aeroEk3000Img = new URL('./product/spectro/ek3000_copy_2c9bc323-3b44-4250-b9bf-447fcf3d6299 (1).webp', import.meta.url).href;
const aeroXp2000Img = new URL('./product/spectro/XP-2000_web (2).webp', import.meta.url).href;
const aeroXp2000aImg = new URL('./product/spectro/XP-2000A (2).webp', import.meta.url).href;
const aeroSpnClr365HcImg = new URL('./product/spectro/Clarity-365-LED-365nm-UV-Flashlight-Kit-with-Lithium-Ion-Battery_copy (1).webp', import.meta.url).href;
const aeroSpnClr365ScImg = new URL('./product/spectro/Clarity-365-LED-365nm-UV-Flashlight-Kit-with-Lithium-Ion-Battery_copy_copy (1).jpg', import.meta.url).href;
const aeroEex1000Img = new URL('./product/spectro/EEX-1000_e99f6ec1-4da7-42c4-8a79-037f50e58e08 (1).webp', import.meta.url).href;
const aeroSpnClrBaImg = new URL('./product/spectro/SPN-CLR-BA_body_copy (2).webp', import.meta.url).href;
const aeroSpnClrBhaImg = new URL('./product/spectro/SPN-CLR-BA_body_copy (3).webp', import.meta.url).href;
const aeroIdx550Img = new URL('./product/spectro/IDX-550_copy_web (1).webp', import.meta.url).href;
const aeroIdx400Img = new URL('./product/spectro/IDX-400Nano365SeriesLongWaveUltravioletUV365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled (1).webp', import.meta.url).href;
const aeroIdx350Img = new URL('./product/spectro/IDX-350_copy_web (1).webp', import.meta.url).href;
const aeroIdx300Img = new URL('./product/spectro/IDX-300Nano365SeriesLongWaveUltravioletUV365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled (1).webp', import.meta.url).href;
const aeroRpSm01Img = new URL('./product/spectro/RP-SM-01_copy.webp', import.meta.url).href;
const aeroIdx200Img = new URL('./product/spectro/IDX-200Nano365SeriesLongWaveUltravioletUV365NMNonDestructiveTestingNDTFluorescentInspectionFlashlightTorchAngled (1).webp', import.meta.url).href;

// 3E NDT
const e3NdtProductImg = new URL('./product/E3 NDT/Film Digitizers/FS50B_Digitizer_thumb.png', import.meta.url).href;
const e3NdtExt1036Img = new URL('./product/E3 NDT/DR Panels/EXT1036BW.png', import.meta.url).href;
const e3NdtXpressScanImg = new URL('./product/E3 NDT/Digital Radiography Systems/XpressScanGW.png', import.meta.url).href;
const e3NdtPicture5Img = new URL('./product/E3 NDT/Pipeline Crawlers/Picture5.png', import.meta.url).href;

// DOLPHITECH
const dolphitechDolphicam2Img = new URL('./product/Dolphi/DT301Y-550x400_c.jpg', import.meta.url).href;
const dolphitechDolphicam2MilitaryImg = new URL('./product/Dolphi/DT301Y-550x400_c (1).jpg', import.meta.url).href;
const dolphitechDolphicam2PlusImg = new URL('./product/Dolphi/product_7-550x400_c.jpg', import.meta.url).href;
const dolphitechDolphicam2PlusMilitaryImg = new URL('./product/Dolphi/product1_1-550x400_c.jpg', import.meta.url).href;
const dolphicamInABoxImg = new URL('./product/Dolphi/DIAB-image-550x400_c.jpg', import.meta.url).href;
const dolphitechMxttuImg = new URL('./product/Dolphi/mxttu_image.jpg', import.meta.url).href;
const dolphitechTrmImg = new URL('./product/Dolphi/trm_0_7_mhz.jpg', import.meta.url).href;
const dolphitechDelayLinesImg = new URL('./product/Dolphi/delay_lines_image.jpg', import.meta.url).href;
const dolphitechDelayLine8Img = new URL('./product/Dolphi/product_2-1.jpg', import.meta.url).href;
const dolphitechDelayLineFlatImg = new URL('./product/Dolphi/product_3.jpg', import.meta.url).href;
const dolphitechDelayLineCurvedImg = new URL('./product/Dolphi/product_4.jpg', import.meta.url).href;
const dolphitechRapidMapperImg = new URL('./product/Dolphi/product_19-550x400_c.jpg', import.meta.url).href;
const dolphitechOdiEncoderImg = new URL('./product/Dolphi/CKG009-A-e1736439972216-550x400_c.jpg', import.meta.url).href;
const dolphitechCable15cmImg = new URL('./product/Dolphi/USB-C-BB-Host-15cm-feature-image-550x400_c-FINAL-550x400_c.jpg', import.meta.url).href;
const dolphitechCable30cmImg = new URL('./product/Dolphi/USB-C-BB-Host-30cm-feature-image-550x400_c-1-550x400_c.jpg', import.meta.url).href;
const dolphitechCable60cmImg = new URL('./product/Dolphi/USB-C-BB-Host-60cm-feature-image-550x400_c.jpg', import.meta.url).href;
const dolphitechStitchingPadImg = new URL('./product/Dolphi/Stitching-Pad-Sideview-feature-image-size-550x400_c.jpg', import.meta.url).href;
const dolphitechCfrpSampleImg = new URL('./product/Dolphi/CFRP-double-image-2.png', import.meta.url).href;

// DANATRONICS
const echoFdImg = new URL('./product/Danatronics/echo_fd_flaw_detector.jpg', import.meta.url).href;
const echoProImg = new URL('./product/Danatronics/echo_pro_header_welded_pipe.jpg', import.meta.url).href;
const echo9Img = new URL('./product/Danatronics/echo_9_ultrasonic_corrosion_thickness_gage.jpg', import.meta.url).href;
const echo8CorrosionImg = new URL('./product/Danatronics/echo_8_corrosion_and_precision_thickness_gage.jpg', import.meta.url).href;
const ehc09MonochromeImg = new URL('./product/Danatronics/ehc09_monochrome_thickness_gage.jpg', import.meta.url).href;
const ehc03Img = new URL('./product/Danatronics/ehc03_header.jpg', import.meta.url).href;
const echo7Img = new URL('./product/Danatronics/echo_7_header.jpg', import.meta.url).href;
const echo8PrecisionImg = new URL('./product/Danatronics/echo_8_corrosion_and_precision_thickness_gage (1).jpg', import.meta.url).href;
const upg07MonochromeImg = new URL('./product/Danatronics/upg07_monochrome_precision_thickness_gages.jpg', import.meta.url).href;
const mtg99Img = new URL('./product/Danatronics/mtg99_header.jpg', import.meta.url).href;
const dualElementTransducersImg = new URL('./product/Danatronics/dual_element_transducers.jpg', import.meta.url).href;
const singleElementTransducersImg = new URL('./product/Danatronics/single_element_transducers.jpg', import.meta.url).href;


//Ekoscan
const UNIVERSAL_ARRAYS = new URL('./product/Ekoscan/1_UNIVERSAL-ARRAYS-300x300.png', import.meta.url).href;
const WELD_ARRAYS = new URL('./product/Ekoscan/EK31-32-1-300x300.jpeg', import.meta.url).href;
const CORROSION_ARRAYS = new URL('./product/Ekoscan/3_CORROSION-ARRAYS-300x300.png', import.meta.url).href;
const SMALL_FOOTPRINT_ARRAYS = new URL('./product/Ekoscan/4_SMALL-FOOTPRINT-ARAYS-300x300.png', import.meta.url).href;
const HARD_FACE_ARRAYS = new URL('./product/Ekoscan/5_HARD-FACE-ARRAYS-300x300.jpg', import.meta.url).href;
const PAUT_WEDGES = new URL('./product/Ekoscan/6_PAUT-WEDGES-300x300.png', import.meta.url).href;



//fuji
const UT8000 = new URL('./product/Proceq/UT8000_gallery_image_02.119ee3c2.avif', import.meta.url).href;
const Equotip = new URL('./product/Proceq/550 Leeb_gallery_image_03.9866d940.avif', import.meta.url).href;
const Equotip_Live = new URL('./product/Proceq/01-EQLive-LeebD-iPhone-iso@2x.d165a004.png', import.meta.url).href;
const Equotip_Piccolo_2 = new URL('./product/Proceq/01-Equotip-Piccolo-iso@2x.f2a95a66.png', import.meta.url).href;
const Equotip_550 = new URL('./product/Proceq/01-Equotip550-iso@2x.8b4935b0.png', import.meta.url).href;
const Equotip_Live_UCI = new URL('./product/Proceq/04_EQLive_UCI.43560a18.avif', import.meta.url).href
const Equotip_550_Portable_Rockwell = new URL('./product/Proceq/550 Rockwell_gallery_image_01.ddf08840.avif', import.meta.url).href;
const Equotip_550_UCI_MOTO_03__MOTO_08 = new URL('./product/Proceq/550-uci-moto-gallery-image-01@2x.0f2de10a.avif', import.meta.url).href;


export default function ProductDetail() {
  const { productId } = useParams();
  const [balteauCategory, setBalteauCategory] = React.useState<'BALTOSPOT' | 'BALTOGRAPH' | 'BALTOMATIC' | 'BALTOSCOPE' | 'ACCESSORIES' | null>(null);
  const [balteauEntered, setBalteauEntered] = React.useState(false);
  const [rohmannCategory, setRohmannCategory] = React.useState<'INSPECTION' | 'ACCESSORIES' | null>(null);
  const [echoCategory, setEchoCategory] = React.useState<'HIGH_TEMP' | 'INTERMEDIATE' | 'SPECIALTY' | null>(null);
  const [echoEntered, setEchoEntered] = React.useState(false);
  const [durrCategory, setDurrCategory] = React.useState<'COMPUTED_RADIOGRAPHY' | 'DIRECT_DIGITAL_RADIOGRAPHY' | 'NDT_SOFTWARE' | 'CONVENTIONAL_RADIOGRAPHY' | null>(null);
  const [durrEntered, setDurrEntered] = React.useState(false);
  const [spectroCategory, setSpectroCategory] = React.useState<'RADIOMETERS' | 'NDT_SUPPLIES' | 'AEROSPACE' | null>(null);
  const [spectroEntered, setSpectroEntered] = React.useState(false);
  const [jirehCategory, setJirehCategory] = React.useState<'MANUAL' | 'AUTOMATED' | null>(null);
  const [jirehEntered, setJirehEntered] = React.useState(false);
  const [mitcorpCategory, setMitcorpCategory] = React.useState<'X_SERIES' | 'PR_SERIES' | null>(null);
  const [danatronicsCategory, setDanatronicsCategory] = React.useState<'FLAW_DETECTORS' | 'CORROSION_THICKNESS_GAGE' | 'PRECISION_THICKNESS_GAGE' | 'HALL_EFFECT_GAGE' | 'TRANSDUCERS' | null>(null);
  const [dolphitechCategory, setDolphitechCategory] = React.useState<'MAUT_CORE_UNITS' | 'MAUT_TRANSDUCERS' | 'ACCESSORIES' | 'SCANNING_TOOLS' | null>(null);
  const [wohlerMainCat, setWohlerMainCat] = React.useState<string | null>(null);
  const [wohlerSubCat, setWohlerSubCat] = React.useState<string | null>(null);
  const [EkoscanCategory, setEkoscanCategory] = React.useState<string | null>(null);
  const [proceqCategory, setProceqCategory] = React.useState<'Flaw Detectors' | 'Portable Hardness Tester' | null>(null);
  // const [proceqCategory, setProceqCategory] = React.useState<'Flaw Detectors' | 'Portable Hardness Tester' | null>(null);



  const location = useLocation();
  const product = productsData.find(p => p.id === productId);

  React.useEffect(() => {
    const slug = decodeURIComponent(location.hash?.replace('#', '') || '');
    if (!product || !slug) return;

    const resetStates = () => {
      setBalteauCategory(null);
      setRohmannCategory(null);
      setEchoCategory(null);
      setDurrCategory(null);
      setSpectroCategory(null);
      setJirehCategory(null);
      setMitcorpCategory(null);
      setDanatronicsCategory(null);
      setDolphitechCategory(null);
      setWohlerMainCat(null);
      setWohlerSubCat(null);
      setEkoscanCategory(null);
      setProceqCategory(null);

    };

    resetStates();

    switch (product.id) {
      case 'spectro':
        if (slug === 'radiometers') {
          setSpectroCategory('RADIOMETERS');
          setSpectroEntered(true);
        } else if (slug === 'aerospace') {
          setSpectroCategory('AEROSPACE');
          setSpectroEntered(true);
        } else if (slug === 'ndt-supplies') {
          setSpectroCategory('NDT_SUPPLIES');
          setSpectroEntered(true);
        }
        break;
      case 'Ekoscan':
        if (slug === 'universal-arrays') setEkoscanCategory('UNIVERSAL_ARRAYS');
        else if (slug === 'weld-arrays') setEkoscanCategory('WELD_ARRAYS');
        else if (slug === 'corrosion-arrays') setEkoscanCategory('CORROSION_ARRAYS');
        else if (slug === 'small-footprint-arrays') setEkoscanCategory('SMALL_FOOTPRINT_ARRAYS');
        else if (slug === 'hard-face-arrays') setEkoscanCategory('HARD_FACE_ARRAYS');
        else if (slug === 'paut-wedges') setEkoscanCategory('PAUT_WEDGES');
        else setEkoscanCategory(null);
        break;

      case 'proceq':
        if (slug === 'flaw-detectors') setProceqCategory('Flaw Detectors');
        else if (slug === 'portable-hardness-tester') setProceqCategory('Portable Hardness Tester');
        else setProceqCategory(null);
        break;

      case 'jireh':
        if (slug === 'manual-weld-corrosion-scanning') {
          setJirehCategory('MANUAL');
          setJirehEntered(true);
        } else if (slug === 'automated-crawlers') {
          setJirehCategory('AUTOMATED');
          setJirehEntered(true);
        }
        break;

      case 'durr-ndt':
        if (slug === 'computed-radiography') {
          setDurrCategory('COMPUTED_RADIOGRAPHY');
          setDurrEntered(true);
        } else if (slug === 'direct-digital-radiography') {
          setDurrCategory('DIRECT_DIGITAL_RADIOGRAPHY');
          setDurrEntered(true);
        } else if (slug === 'ndt-software') {
          setDurrCategory('NDT_SOFTWARE');
          setDurrEntered(true);
        } else if (slug === 'conventional-radiography') {
          setDurrCategory('CONVENTIONAL_RADIOGRAPHY');
          setDurrEntered(true);
        }
        break;
      case 'balteau':
        if (slug === 'baltospot') setBalteauCategory('BALTOSPOT');
        if (slug === 'baltograph') setBalteauCategory('BALTOGRAPH');
        if (slug === 'baltomatic') setBalteauCategory('BALTOMATIC');
        if (slug === 'baltoscope') setBalteauCategory('BALTOSCOPE');
        if (slug === 'accessories') setBalteauCategory('ACCESSORIES');
        if (slug) setBalteauEntered(true);
        break;
      case 'rohmann':
        if (slug === 'inspection-systems') setRohmannCategory('INSPECTION');
        if (slug === 'accessories') setRohmannCategory('ACCESSORIES');
        break;
      case 'mitcorp':
        if (slug === 'x-series-industrial-videoscopes') setMitcorpCategory('X_SERIES');
        if (slug === 'pr-series-pipe-inspection-videoscopes') setMitcorpCategory('PR_SERIES');
        break;
      case 'danatronics':
        if (slug === 'flaw-detectors') setDanatronicsCategory('FLAW_DETECTORS');
        if (slug === 'corrosion-thickness-gage') setDanatronicsCategory('CORROSION_THICKNESS_GAGE');
        if (slug === 'precision-thickness-gage') setDanatronicsCategory('PRECISION_THICKNESS_GAGE');
        if (slug === 'hall-effect-gage') setDanatronicsCategory('HALL_EFFECT_GAGE');
        if (slug === 'transducers') setDanatronicsCategory('TRANSDUCERS');
        break;
      case 'dolphitech':
        if (slug === 'maut-core-units') setDolphitechCategory('MAUT_CORE_UNITS');
        if (slug === 'maut-transducers') setDolphitechCategory('MAUT_TRANSDUCERS');
        if (slug === 'accessories') setDolphitechCategory('ACCESSORIES');
        if (slug === 'scanning-tools') setDolphitechCategory('SCANNING_TOOLS');
        break;
      case '3e-ndt':
        // No subcategory logic for 3E NDT, show all products
        break;
      case 'wohler':
        if (slug === 'measuring-instruments') {
          setWohlerMainCat('MEASURING');
          setWohlerSubCat('FLUE_GAS');
        }
        if (slug === 'inspection-systems') {
          setWohlerMainCat('INSPECTION');
          setWohlerSubCat('INSPECTION_CAMERAS');
        }
        if (slug === 'cleaning-tools') {
          setWohlerMainCat('CLEANING');
          setWohlerSubCat('VIPERS');
        }
        break;
      case 'echo':
        if (slug === 'high-temperature') setEchoCategory('HIGH_TEMP');
        if (slug === 'intermediate-low-temp') setEchoCategory('INTERMEDIATE');
        if (slug === 'specialty-application') setEchoCategory('SPECIALTY');
        if (slug) setEchoEntered(true);
        break;
      default:
        break;
    }
  }, [location.hash, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="ml-4 text-blue-500 underline">Go Home</Link>
      </div>
    );
  }


  // Reusable Card Component
  const ProductCard = ({ title, desc, img, link, note }: { title: string, desc: string, img?: string, link: string, note?: string }) => (

    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 transition-all hover:shadow-lg flex flex-col">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-3xl mb-4 bg-white">
        {img ? (
          <img src={img} alt={title} className="h-56 w-full object-contain transition-transform group-hover:scale-105" />
        ) : (
          <div className="h-56 w-full flex items-center justify-center bg-slate-200 text-slate-400 font-bold uppercase text-xs rounded-3xl text-center px-4">
            {note || "No Image Available"}
          </div>
        )}
      </a>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#003349] mb-3">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow whitespace-pre-line">{desc}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#0f6fff] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110 w-fit">
          Read More
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-black mb-8 transition-colors font-bold uppercase text-sm tracking-widest">
          <ChevronLeft size={20} /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <img src={product.logo} alt={product.name} className={`${product.id === 'spectro' || product.id === 'vallen-systeme' ? 'h-32 md:h-40' : product.id === 'fuji' ? 'h-40 md:h-48' : 'h-80 md:h-96'} object-contain mb-8`} />
          <h1 className="text-5xl font-black mb-6 text-[#003349] tracking-tighter">{product.name}</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 whitespace-pre-line">
            {product.description}
          </p>

          <hr className="border-slate-200 my-8" />

          {/* --- ROHMANN --- */}
          {product.id === 'rohmann' && (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
                <div onClick={() => setRohmannCategory('INSPECTION')} className={`cursor-pointer group rounded-3xl border-2 transition-all duration-300 ${rohmannCategory === 'INSPECTION' ? 'border-[#0f6fff] bg-blue-50' : 'border-transparent bg-slate-100'} ${rohmannCategory ? 'p-2' : 'p-6'}`}>
                  <div className={`transition-all duration-500 h-14 mb-2 ${rohmannCategory ? 'h-14 mb-2' : 'h-44 mb-4'}`}><img src={inspectionIcon} alt="INSPECTION SYSTEM" className="w-full h-full object-contain" /></div>
                  <div className="text-center"><h2 className={`font-bold text-[#003349] transition-all duration-500 uppercase ${rohmannCategory ? 'text-[10px]' : 'text-xl'}`}>INSPECTION SYSTEM</h2></div>
                </div>
                <div onClick={() => setRohmannCategory('ACCESSORIES')} className={`cursor-pointer group rounded-3xl border-2 transition-all duration-300 ${rohmannCategory === 'ACCESSORIES' ? 'border-[#0f6fff] bg-blue-50' : 'border-transparent bg-slate-100'} ${rohmannCategory ? 'p-2' : 'p-6'}`}>
                  <div className={`transition-all duration-500 flex items-center justify-center bg-slate-200 rounded-2xl text-slate-400 font-bold uppercase ${rohmannCategory ? 'h-14 mb-2' : 'h-44 mb-4'}`}>Accessories Icon</div>
                  <div className="text-center"><h2 className={`font-bold text-[#003349] transition-all duration-500 uppercase ${rohmannCategory ? 'text-[10px]' : 'text-xl'}`}>ACCESSORIES</h2></div>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rohmannCategory === 'INSPECTION' && (
                  <>
                    <ProductCard title="Elowheel" img={inspectionIcon} link="https://ndt-rohmann.com/portfolio-items/elowheel/" desc="Aircraft Wheel Inspection System optimized for surface, cracks, conductivity, and bore hole inspection." />
                    <ProductCard title="Elorail" img={elorailImage} link="https://ndt-rohmann.com/portfolio-items/elorail/" desc="Ultra-lightweight carbon fiber railroad rail inspection trolley for detecting head checks and squats." />
                    <ProductCard title="Elobolt" img={eloboltImage} link="https://ndt-rohmann.com/portfolio-items/elobolt/" desc="Universal Bolt Tester for 5-20mm diameter bolts with variable speed 1-200 RPM." />
                    <ProductCard title="Eloscan" img={eloscanImage} link="https://ndt-rohmann.com/portfolio-items/eloscan/" desc="Semi-automatic eddy-current scanning system for complex aircraft engine geometries." />
                    <ProductCard title="ELOTEST HST" img={elotestHstImage} link="https://ndt-rohmann.com/portfolio-items/elotest-hst/" desc="Modular heavy plate hard spot tester trolley for harsh environments." />
                    <ProductCard title="ELOTEST IS3" img={elotestIs3Image} link="https://ndt-rohmann.com/portfolio-items/elotest-is3/" desc="Single channel test instrument (IP54) for automated tasks." />
                    <ProductCard title="ELOTEST M6" img={elotestM6Image} link="https://ndt-rohmann.com/portfolio-items/elotest-m6/" desc="Innovative handheld tester with 7 inch touchscreen." />
                    <ProductCard title="ELOTEST M3" img={elotestM3Image} link="https://ndt-rohmann.com/portfolio-items/elotest-m3/" desc="Powerful tester with high-definition LCD evaluation." />
                    <ProductCard title="ELOTEST M2V3" img={elotestM2v3Image} link="https://ndt-rohmann.com/portfolio-items/elotest-m2v3/" desc="Universal one-hand instrument for surface/conductivity." />
                    <ProductCard title="ELOTEST B300" img={elotestB300Image} link="https://ndt-rohmann.com/portfolio-items/elotest-b300/" desc="Successor to B1, powerful instrument compatible with ScanAlyzer." />
                    <ProductCard title="ELOTEST PL650" img={flexitestImage} link="https://ndt-rohmann.com/portfolio-items/elotest-pl650-with-flexitest/" desc="3-axis eddy current testing machine for series components." />
                  </>
                )}
                {rohmannCategory === 'ACCESSORIES' && (
                  <>
                    <ProductCard title="EMDC" img={emdcImage} link="https://ndt-rohmann.com/portfolio-items/emdc/" desc="Electromechanically distance compensation for non-circular parts." />
                    <ProductCard title="Sensors" img={rohmannSensorsImage} link="https://ndt-rohmann.com/wp-content/uploads/2019/04/Sensor-catalog_eng.pdf" desc="Wide range of probes manufactured to national standards." />
                    <ProductCard title="Hand-held rotors" img={rotorsImage} link="https://ndt-rohmann.com/portfolio-items/hand-held-rotors-and-rotating-probes/" desc="Dynamic testing for defects in surfaces and holes." />
                    <ProductCard title="Rotor EC15" img={rotorEc15Image} link="https://ndt-rohmann.com/portfolio-items/rotor-ec15/" desc="Contactless in-line testing of wires and tubes." />
                    <ProductCard title="Reference standards" img={referenceStandardsImage} link="https://ndt-rohmann.com/portfolio-items/reference-standards/" desc="Custom failed-point standards for calibration." />
                  </>
                )}
              </div>
            </>
          )}

          {/* --- JIREH --- */}
          {product.id === 'jireh' && (
            <>
              <div className="grid gap-4 mb-10 transition-all duration-500 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {([
                  { id: 'MANUAL', name: 'MANUAL WELD AND CORROSION SCANNING SYSTEMS', icon: jirehManualIcon },
                  { id: 'AUTOMATED', name: 'AUTOMATED CRAWLERS', icon: jirehCrawlerIcon }
                ] as const).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setJirehCategory(cat.id); setJirehEntered(true); }}
                    className={`group rounded-2xl border-2 transition-all duration-300 ${jirehEntered ? 'p-3' : 'p-6'} ${jirehCategory === cat.id ? 'border-[#0f6fff] bg-blue-50 shadow-sm' : 'border-slate-100 bg-slate-50 hover:bg-slate-100'
                      }`}
                  >
                    <div className={`transition-all duration-500 flex items-center justify-center ${jirehEntered ? 'h-20 mb-3' : 'h-40 mb-4'}`}>
                      <img src={cat.icon} alt={cat.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className={`text-center font-black uppercase transition-all duration-500 ${jirehEntered ? 'text-[10px]' : 'text-sm'}`}>
                      {cat.name}
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {jirehCategory === 'MANUAL' && (
                  <>
                    <ProductCard title="CIRCIT" img={jirehCircitImg} link="https://www.jireh.com/products/category/circ-it/" desc="The CIRC‑IT scanner is a low‑profile manual scanner designed for encoded ultrasonic inspection of very small diameter pipes and tubing. Can scan pipes as small as 21.4 mm diameter with only 11 mm clearance. The scanner provides precise probe positioning around the circumference of pipes and tubes and is commonly used for phased array and TOFD weld inspections. Its compact design allows it to operate in extremely tight spaces where conventional scanners cannot fit." />
                    <ProductCard title="STIX" img={jirehStixImg} link="https://www.jireh.com/products/category/stix/" desc="The STIX is a versatile magnetic manual scanner used for weld inspection and corrosion mapping on ferrous surfaces. It is capable of both circumferential and longitudinal scanning of pipes, vessels, and flat plates. The scanner supports multiple probe configurations including phased array and TOFD probes, making it ideal for advanced ultrasonic inspection applications." />
                    <ProductCard title="ROTIX" img={jirehRotixImg} link="https://www.jireh.com/products/category/rotix/" desc="The ROTIX is a modular chain style manual scanner designed for encoded ultrasonic inspection around pipes and tubes. It allows probe movement circumferentially around welds and supports phased array and conventional UT probes. Its adjustable chain system enables easy installation on a wide range of pipe diameters." />
                    <ProductCard title="MICROBE" img={jirehMicrobeImg} link="https://www.jireh.com/products/category/microbe/" desc="The MICROBE scanner is a compact handheld scanner designed for simple and efficient ultrasonic inspection. Its lightweight and portable design allows inspectors to perform quick weld or corrosion inspections in tight or difficult‑to‑access areas. The MICROBE scanner is ideal for small‑scale inspections where mobility and ease of use are critical." />
                    <ProductCard title="ODI" img={jirehOdiImg} link="https://www.jireh.com/products/category/odi/" desc="The ODI (On-Demand Inspection) scanner is a modular, hand-operated ultrasonic scanner designed for quick and precise inspection of welds and corrosion on pipes, vessels, and flat surfaces. It is compact, portable, and ideal for field inspections where flexibility and accuracy are required. The scanner supports both phased array and conventional ultrasonic probes, providing reliable data collection in hard-to-reach areas." />
                  </>
                )}

                {jirehCategory === 'AUTOMATED' && (
                  <>
                    <ProductCard title="NAVIC" img={jirehNavicImg} link="https://www.jireh.com/products/category/navic/" desc="The NAVIC is an automated magnetic crawler specifically designed for nozzle and branch connection inspection on vessels and tanks. Its compact crawler base allows it to maneuver in tight nozzle areas while maintaining stable probe movement for high-resolution ultrasonic inspections." />
                    <ProductCard title="SKOOT" img={jirehSkootImg} link="https://www.jireh.com/products/category/skoot/" desc="The SKOOT is a compact, magnetic crawler for weld and corrosion inspection on limited-access ferrous surfaces. Its low profile and magnetic wheels allow scanning on vertical, horizontal, and inverted surfaces. Ideal for circumferential weld scans on pipes, flat surface inspections, and longitudinal pipe runs." />
                    <ProductCard title="MOTIX" img={jirehMotixImg} link="https://www.jireh.com/products/category/motix/" desc="The MOTIX is a motorized inspection system capable of various configurations on non-ferrous surfaces such as GRP, HDPE, plastic, stainless steel and more. The quick-release chain system allows the MOTIX to attach to pipes up to 42 inches in diameter." />
                    <ProductCard title="TERAX" img={jirehTeraxImg} link="https://www.jireh.com/products/category/terax/" desc="TERAX crawlers navigate ferrous surfaces or internal pipes using magnetic or rubber-track adhesion. Its powerful motors allow the TERAX to be steered vertically, allowing precise and controlled movements. Handles on the device provide an easy grab point for convenient handling and transport." />
                    <ProductCard title="TROGLO" img={jirehTrogloImg} link="https://www.jireh.com/products/troglo-large-crawler/" desc="TROGLO is a rugged, waterproof crawler for underground, sewer, and pipeline inspections. Steerable with cameras, LED lights, and integrated sonde for mapping, it handles small to large pipes and submersible conditions." />
                  </>
                )}
              </div>
            </>
          )}

          {/* --- DURR NDT --- */}
          {product.id === 'durr-ndt' && (
            <>
              <div className="grid gap-4 mb-10 transition-all duration-500 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {([
                  { id: 'COMPUTED_RADIOGRAPHY', name: 'Computed Radiography', icon: durrComputedRadiographyImg },
                  { id: 'DIRECT_DIGITAL_RADIOGRAPHY', name: 'Direct Digital Radiography', icon: durrDirectDigitalRadiographyImg },
                  { id: 'NDT_SOFTWARE', name: 'NDT Software', icon: durrNdtSoftwareImg },
                  { id: 'CONVENTIONAL_RADIOGRAPHY', name: 'Conventional Radiography', icon: durrConventionalRadiographyImg }
                ] as const).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setDurrCategory(cat.id); setDurrEntered(true); }}
                    className={`group rounded-2xl border-2 transition-all duration-300 ${durrEntered ? 'p-3' : 'p-6'} ${durrCategory === cat.id ? 'border-[#0f6fff] bg-blue-50 shadow-sm' : 'border-slate-100 bg-slate-50 hover:bg-slate-100'
                      }`}
                  >
                    <div className={`transition-all duration-500 flex items-center justify-center ${durrEntered ? 'h-16 mb-2' : 'h-40 mb-4'}`}>
                      <img src={cat.icon} alt={cat.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className={`text-center font-black uppercase transition-all duration-500 ${durrEntered ? 'text-[10px]' : 'text-sm'}`}>
                      {cat.name}
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {durrCategory === 'COMPUTED_RADIOGRAPHY' && (
                  <>
                    <ProductCard title="HD-CR 35 NDT" img={durrHdCr35Img} link="https://www.duerr-ndt.com/products/computed-radiography/hd-cr-35-ndt.html" desc="Portable high resolution CR scanner for all NDT radiography applications - weld inspection, profile images and aerospace." />
                    <ProductCard title="CR 35 NDT" img={durrCr35Img} link="https://www.duerr-ndt.com/products/computed-radiography/cr-35-ndt.html" desc="Portable digital X-ray Computed Radiography scanner for general purposes." />
                    <ProductCard title="CR Phantom" img={durrCrPhantomImg} link="https://www.duerr-ndt.com/products/computed-radiography/cr-phantom.html" desc="Test specimen for easy qualification of Computed Radiography systems according to the latest standards (ISO 16371-1, ASTM E 2445)." />
                    <ProductCard title="Imaging Plates" img={durrImagingPlatesImg} link="https://www.duerr-ndt.com/products/computed-radiography/imaging-plates.html" desc="Phosphor imaging plates designed for NDT use, available in different resolutions and formats up to 35 cm width." />
                  </>
                )}

                {durrCategory === 'DIRECT_DIGITAL_RADIOGRAPHY' && (
                  <>
                    <ProductCard title="D-DR 7 NDT" img={durrDdr7Img} link="https://www.duerr-ndt.com/products/direct-digital-radiography/dr-7-ndt-cmos-x-ray-detector.html" desc="CMOS X-ray detector for ultra-high resolution X-ray inspection and testing – meets aerospace standards!" />
                    <ProductCard title="D-DR 1024 NDT" img={durrDdr1024Img} link="https://www.duerr-ndt.com/products/direct-digital-radiography/ddr-1024-ndt-flat-panel-detector.html" desc="Compact and high-resolution digital detector array designed for portability and harsh industrial conditions." />
                    <ProductCard title="D-DR 1025B / 1043B NDT" img={durrDdr1025bImg} link="https://www.duerr-ndt.com/products/direct-digital-radiography/ddr-1025b-bendable-detector.html" desc="Flexible X-ray detectors ideal for circumferential weld seams on pipes with diameters of 15 cm and above." />
                    <ProductCard title="D-DR 2329 NDT" img={durrDdr2329Img} link="https://www.duerr-ndt.com/products/direct-digital-radiography/ddr-2329-ndt-flat-panel-detector.html" desc="Medium-size high-resolution digital detector array built for portability and universal X-ray use." />
                    <ProductCard title="D-DR 2430 NDT" img={durrDdr2430Img} link="https://www.duerr-ndt.com/products/direct-digital-radiography/ddr-2430-ndt-flat-panel-detector.html" desc="Medium-size high-resolution detector array designed for portability and use with gamma sources." />
                    <ProductCard title="D-DR 3643 NDT" img={durrDdr3643Img} link="https://www.duerr-ndt.com/products/direct-digital-radiography/ddr-3643-ndt-flat-panel-detector.html" desc="Large-size flat panel detector array for profile images and large object inspection." />
                    <ProductCard title="DRC 2430HE NDT" img={durrDrc2430heImg} link="https://www.duerr-ndt.com/products/direct-digital-radiography/drc-2430he-ndt-flat-panel-detector.html" desc="High-resolution detector array developed for high energies in stationary and mobile applications." />
                    <ProductCard title="DRP 2020 / 4040 NDT" img={durrDrp2020Img} link="https://www.duerr-ndt.com/products/direct-digital-radiography/drp-2020-4040-ndt-flat-panel-detector.html" desc="Fast low-dose flat panel detectors for nondestructive testing imaging." />
                  </>
                )}

                {durrCategory === 'NDT_SOFTWARE' && (
                  <>
                    <ProductCard title="D-Tect X" img={durrDtctXImg} link="https://www.duerr-ndt.com/products/ndt-software/d-tect-xray-inspection-software.html" desc="Optimal and time-saving NDT inspection workflow software for CR scanners and digital detectors." />
                    <ProductCard title="INSTANDT - PACS" img={durrInstandtPacsImg} link="https://www.duerr-ndt.com/products/ndt-software/instandt-pacs.html" desc="Powerful PACS fully integrated into D-Tect X for secure image data management." />
                    <ProductCard title="DRIVE NDT Management Software" img={durrDriveNdtImg} link="https://www.duerr-ndt.com/products/ndt-software/drive-ndt-management-software.html" desc="Cloud-based management software for NDT workflows, reports, staff, customers, and devices." />
                  </>
                )}

                {durrCategory === 'CONVENTIONAL_RADIOGRAPHY' && (
                  <>
                    <ProductCard title="XR 24 NDT" img={durrXr24Img} link="https://www.duerr-ndt.com/products/conventional-radiography/xr-24-ndt-xray-film-processor.html" desc="Portable automatic X-ray film processor with daylight option for high-level film processing." />
                    <ProductCard title="Green NDT X-ray Chemicals" img={durrChemicalsImg} link="https://www.duerr-ndt.com/products/conventional-radiography/ndt-x-ray-chemicals.html" desc="Odorless, non-toxic X-ray film chemicals for industrial film processing." />
                  </>
                )}
              </div>
            </>
          )}

          {/* --- SPECTRO --- */}
          {product.id === 'spectro' && (
            <>
              <div className="grid gap-4 mb-8 transition-all duration-500 grid-cols-1 md:grid-cols-2">
                {([
                  { id: 'RADIOMETERS', name: 'RADIOMETERS', icon: spectroXrp3000Img, desc: 'Precision you can see, accuracy you can measure. Ensure compliance and optimize performance with our industry-leading radiometers and photometers designed for accurate measurement of UV-A, visible light, and LED sources. These calibrated instruments provide the verification data required by quality systems and industry specifications. Perfect for NDT laboratories, aerospace inspection facilities, and manufacturing quality control departments, our radiometers and photometers help maintain compliance with ASTM E3022, Nadcap, RRES 90061, and other critical industry specifications. Regular verification of your inspection lighting is essential for maintaining process integrity. Our measurement instruments provide the documentation trail needed for audits while ensuring your inspection equipment operates at peak performance.' },
                  { id: 'NDT_SUPPLIES', name: 'NDT SUPPLIES', icon: spectroNdtSuppliesIcon, desc: 'NDT plays a crucial role in everyday life. We are proud to manufacture the highest quality medium and high-intensity compliant lamps and products for use in liquid penetrant and magnetic particle NDT.' },
                  { id: 'AEROSPACE', name: 'AEROSPACE', icon: spectroAerospaceImg, desc: 'Spectro-UV® lamps are engineered to meet ASTM E3022, Rolls-Royce RRES 90061, and ISO 3059 standards, while our UV meters are calibrated to ISO/IEC 17025 and NIST traceable, providing reliable support for NADCAP-accredited suppliers.' }
                ] as const).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setSpectroCategory(cat.id); setSpectroEntered(true); }}
                    className={`group rounded-2xl border-2 transition-all duration-300 ${spectroEntered ? 'p-3' : 'p-6'} ${spectroCategory === cat.id ? 'border-[#0f6fff] bg-blue-50 shadow-sm' : 'border-slate-100 bg-slate-50 hover:bg-slate-100'
                      }`}
                  >
                    <div className={`transition-all duration-500 flex items-center justify-center ${spectroEntered ? 'h-16 mb-3' : 'h-32 mb-4'}`}>
                      {cat.icon ? (
                        <img src={cat.icon} alt={cat.name} className="max-w-full max-h-full object-contain" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-200 text-slate-500 text-center px-4 text-xs uppercase font-bold">
                          No photo available
                        </div>
                      )}
                    </div>
                    <div className={`text-center font-black uppercase transition-all duration-500 ${spectroEntered ? 'text-[10px]' : 'text-sm'}`}>
                      {cat.name}
                    </div>
                  </button>
                ))}
              </div>

              {spectroCategory && (
                <div className="mb-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600 leading-relaxed whitespace-pre-line">
                  {spectroCategory === 'RADIOMETERS' ? 'Precision you can see, accuracy you can measure.\n\nEnsure compliance and optimize performance with our industry-leading radiometers and photometers designed for accurate measurement of UV-A, visible light, and LED sources. These calibrated instruments provide the verification data required by quality systems and industry specifications.\n\nPerfect for NDT laboratories, aerospace inspection facilities, and manufacturing quality control departments, our radiometers and photometers help maintain compliance with ASTM E3022, Nadcap, RRES 90061, and other critical industry specifications.\n\nRegular verification of your inspection lighting is essential for maintaining process integrity. Our measurement instruments provide the documentation trail needed for audits while ensuring your inspection equipment operates at peak performance.' : spectroCategory === 'NDT_SUPPLIES' ? 'NDT plays a crucial role in everyday life. We are proud to manufacture the highest quality medium and high-intensity compliant lamps and products for use in liquid penetrant and magnetic particle NDT.' : 'Spectro-UV® lamps are engineered to meet ASTM E3022, Rolls-Royce RRES 90061, and ISO 3059 standards, while our UV meters are calibrated to ISO/IEC 17025 and NIST traceable, providing reliable support for NADCAP-accredited suppliers.'}
                </div>
              )}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {spectroCategory === 'RADIOMETERS' && (
                  <>
                    <ProductCard title="XRP-3000" img={spectroXrp3000Img} link="https://www.spectro-uv.com/products/xrp-3000-accumax%E2%84%A2-digital-radiometer-kit" desc="AccuMAX™ Radiometer / Photometer Kit" />
                    <ProductCard title="XRP-3000A" img={spectroXrp3000aImg} link="https://www.spectro-uv.com/products/xrp-3000a-accumax-radiometer" desc="AccuMAX™ XRP-3000A Radiometer/Photometer" />
                    <ProductCard title="XR-1000" img={spectroXr1000Img} link="https://www.spectro-uv.com/products/xr-1000-accumax-readoutunit" desc="AccuMAX Radiometer/ Photometer. ***READOUT UNIT ONLY***" />
                    <ProductCard title="XP-2000" img={spectroXp2000Img} link="https://www.spectro-uv.com/products/xp-2000-accupro-radiometer" desc="AccuPRO™ Dual Sensor Radiometer / Photometer" />
                    <ProductCard title="XP-2000A" img={spectroXp2000aImg} link="https://www.spectro-uv.com/products/accupro-dual-sensor-radiometer-photometer-also-available-in-foreign-voltages-xp-2000a" desc="AccuPRO™ Dual Sensor Radiometer / Photometer" />
                    <ProductCard title="XP-4000" img={spectroXp4000Img} link="https://www.spectro-uv.com/products/xp-4000-accupro-radiometer" desc="AccuPRO™ Plus 3 in 1 Sensor Radiometer Photometer" />
                    <ProductCard title="XS-555/L" img={spectroXs555LImg} link="https://www.spectro-uv.com/products/xs-555-l-accumax-sensor" desc="AccuMAX™ Luminance Sensor Detector" />
                    <ProductCard title="XDS-1000" img={spectroXds1000Img} link="https://www.spectro-uv.com/products/xds-1000-accumax%E2%84%A2-dual-sensor-detector" desc="AccuMAX™ Dual Sensor Detector" />
                    <ProductCard title="XS-254" img={spectroXs254Img} link="https://www.spectro-uv.com/products/xs-254-accumax%E2%84%A2sensor-detector-254-nm-to-555-nm-wavelength-available" desc="AccuMAX™ Sensor Detector" />
                    <ProductCard title="XRB-100" img={spectroXrb100Img} link="https://www.spectro-uv.com/products/xrb-100-accumax%E2%84%A2-rubber-boot" desc="AccuMAX™ Rubber Boot" />
                    <ProductCard title="XS-300" img={spectroXs300Img} link="https://www.spectro-uv.com/products/xs-300-accumax%E2%84%A2-sensor-detector-254-nm-to-555-nm-wavelength-available-1" desc="AccuMAX™ Sensor Detector" />
                    <ProductCard title="XS-365" img={spectroXs365Img} link="https://www.spectro-uv.com/products/xs-365-accumax%E2%84%A2-sensor-detector-254-nm-to-555-nm-wavelength-available-2" desc="AccuMAX™ Sensor Detector" />
                    <ProductCard title="XS-450" img={spectroXs450Img} link="https://www.spectro-uv.com/products/xs-450-accumax%E2%84%A2sensor-detector-254-nm" desc="AccuMAX™ Sensor Detector" />
                    <ProductCard title="XS-555/I" img={spectroXs555IImg} link="https://www.spectro-uv.com/products/xs-555-i-accumax%E2%84%A2-luminance-sensor-detector-254-nm-to-555-nm-wavelength-available" desc="AccuMAX™ Sensor Detector" />
                    <ProductCard title="XDS-1000A" img={spectroXds1000aImg} link="https://www.spectro-uv.com/products/xds-1000a-accumax%E2%84%A2-dual-sensor-detector-astm" desc="AccuMAX™ Dual Sensor Detector" />
                    <ProductCard title="XP-3000" img={spectroXp3000EliteImg} link="https://www.spectro-uv.com/products/accuelite%E2%84%A2-xp-3000-radiometer-photometer-copy" desc="AccuELITE™ XP-3000" />
                    <ProductCard title="XP-3000A" img={spectroXp3000aEliteImg} link="https://www.spectro-uv.com/products/accuelite%E2%84%A2-xp-3000-radiometer-photometer-copy-1" desc="AccuELITE™ XP-3000A Radiometer/Photometer" />
                  </>
                )}

                {spectroCategory === 'NDT_SUPPLIES' && (
                  <>
                    <ProductCard title="EDG-13SBLC" img={edg13sblcImg} link="https://www.spectro-uv.com/products/edg-13sblc-edge13-series-floodlamp" desc="EDGE™ 13 LED Overhead Lamp" />
                    <ProductCard title="EDG-13HC" img={edg13hcImg} link="https://www.spectro-uv.com/products/edg-13hc-edge-13-flood-lamp" desc="EDGE™ 13 LED Overhead Lamp" />
                    <ProductCard title="EDG-13T" img={edg13tImg} link="https://www.spectro-uv.com/products/edg-13t-edge-13-flood-lamp" desc="EDGE™ 13 LED Overhead Lamp" />
                    <ProductCard title="UV-365MSBLC" img={uv365msblcImg} link="https://www.spectro-uv.com/products/uv-365msblc-uvision365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="UV-365MHC" img={uv365mhcImg} link="https://www.spectro-uv.com/products/uv-365mhc-uvision365-lamp" desc="uVision™ Deluxe Series Blacklight Lamp Kit" />
                    <ProductCard title="ML-3500C" img={ml3500cImg} link="https://www.spectro-uv.com/products/ml-3500c-maxima%E2%84%A2-ultra-high-intensity-uv-a-lamp-with-filter-and-spot-reflector-for-paint-curing" desc="MAXIMA™ Ultra High Intensity UV-A Blacklight Lamp" />
                    <ProductCard title="ML-3500S" img={ml3500sImg} link="https://www.spectro-uv.com/products/ml-3500s-maxima%E2%84%A2-ultra-high-intensity-uv-a-lamp-with-filter-and-spot-reflector" desc="MAXIMA™ Ultra High Intensity Blacklight Lamp" />
                    <ProductCard title="ML-3500FL" img={ml3500flImg} link="https://www.spectro-uv.com/products/ml-3500fl-maxima%E2%84%A2-ultra-high-intensity-uv-a-lamp-with-anodized-reflector" desc="MAXIMA™ Ultra High Intensity Blacklight Lamp" />
                    <ProductCard title="UV-365HCR" img={uv365hcrImg} link="https://www.spectro-uv.com/products/uv-365hcr-uvision365-lamp" desc="uVision™ Blacklight Lamp Kit with UV-A Pass Filters and Cord Reel" />
                    <ProductCard title="PM-16B" img={pm16bImg} link="https://www.spectro-uv.com/products/pm-16b-powermax-floodlamp" desc="PowerMAX UV-A LED Panel Flood Lamp" />
                    <ProductCard title="UV-365ZSBLC" img={uv365zsblcImg} link="https://www.spectro-uv.com/products/uv-365zsblc-uvision365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="UV-365ZHC" img={uv365zhcImg} link="https://www.spectro-uv.com/products/uv-365zhc-uvision-365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="TRI-365SBLC" img={tri365sblcImg} link="https://www.spectro-uv.com/products/tritan-%E2%84%A2-365-series-ultraviolet-uv-a-blacklight" desc="Tritan™ Ultraviolet Blacklight LED Inspection Lamp" />
                    <ProductCard title="TRI-365HC" img={tri365hcImg} link="https://www.spectro-uv.com/products/tri-365hc-tritan365-lamp" desc="Tritan™ Blacklight LED Inspection Lamp" />
                    <ProductCard title="TRI-365MDB" img={tri365mdbImg} link="https://www.spectro-uv.com/products/tri-365mdb-tritan-365-lamp" desc="Tritan™ Blacklight LED Inspection Lamp" />
                    <ProductCard title="TRI-365MHB" img={tri365mhbImg} link="https://www.spectro-uv.com/products/tri-365mhb-tritan-365-lamp" desc="Tritan™ Blacklight LED Inspection Lamp" />
                    <ProductCard title="UV-365SBLC" img={uv365sblcImg} link="https://www.spectro-uv.com/products/uv-365sblc-uvision-365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="UV-365HC" img={uv365hcImg} link="https://www.spectro-uv.com/products/uv-365hc-uvision365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="XRP-3000A" img={xrp3000aImg} link="https://www.spectro-uv.com/products/xrp-3000a-accumax-radiometer" desc="AccuMAX™ XRP-3000A Radiometer/Photometer" />
                    <ProductCard title="XRP-3000" img={xrp3000Img} link="https://www.spectro-uv.com/products/xrp-3000-accumax%E2%84%A2-digital-radiometer-kit" desc="AccuMAX™ Radiometer / Photometer Kit" />
                    <ProductCard title="UV-365MEH" img={uv365mehImg} link="https://www.spectro-uv.com/products/uv-365meh-uvision-365-lamp" desc="uVision™ Blacklight Lamp Kit with Battery Pack" />
                    <ProductCard title="PM-8B" img={pm8bImg} link="https://www.spectro-uv.com/products/pm-8b-powermax%E2%84%A2365-365nm-uv-a-led-panel-flood-lamp-also-available-in-foreign-voltages" desc="PowerMAX UV-A LED Panel Flood Lamp" />
                    <ProductCard title="UV-365ZEH" img={uv365zehImg} link="https://www.spectro-uv.com/products/uv-365zeh-uvision365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="EDG-4W" img={edg4wImg} link="https://www.spectro-uv.com/products/edg-4w-edge-series-lamp" desc="EDGE™ 4 LED UV-A Panel Wash Station Flood Lamp with AC Cord" />
                    <ProductCard title="TRI-365DB" img={tri365dbImg} link="https://www.spectro-uv.com/products/tri-365db-tritan-365-lamp" desc="Tritan™ LED Inspection Lamp" />
                    <ProductCard title="TRI-365HB" img={tri365hbImg} link="https://www.spectro-uv.com/products/tri-365hb-tritan-365-lamp" desc="Tritan™ Blacklight LED Inspection Lamp" />
                    <ProductCard title="XX-15BF" img={xx15bfImg} link="https://www.spectro-uv.com/products/xx-15bf-x-series-bench-lamp" desc="X-Series 15 Watt Bench Lamp" />
                    <ProductCard title="XP-3000" img={xp3000Img} link="https://www.spectro-uv.com/products/accuelite%E2%84%A2-xp-3000-radiometer-photometer-copy" desc="AccuELITE™ XP-3000 Radiometer/Photometer" />
                    <ProductCard title="UV-365ES" img={uv365esImg} link="https://www.spectro-uv.com/products/uv-365es-uvision-365-lamp" desc="uVision™ 365 Series UV-A Inspection Lamp" />
                    <ProductCard title="UV-365EH" img={uv365ehImg} link="https://www.spectro-uv.com/products/uv-365eh-uvision-365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="XR-1000" img={xr1000Img} link="https://www.spectro-uv.com/products/xr-1000-accumax-readoutunit" desc="AccuMAX Radiometer/ Photometer ***READOUT UNIT ONLY***" />
                    <ProductCard title="XP-4000" img={xp4000Img} link="https://www.spectro-uv.com/products/xp-4000-accupro-radiometer" desc="AccuPRO™ Plus 3 in 1 Sensor Radiometer Photometer" />
                    <ProductCard title="EK-3000" img={ek3000Img} link="https://www.spectro-uv.com/products/ek-3000-eagleeye-headlamp" desc="EagleEye™ II Dual Beam UV-A Headlamp Inspection Kit" />
                    <ProductCard title="XP-2000A" img={xp2000aImg} link="https://www.spectro-uv.com/products/accupro-dual-sensor-radiometer-photometer-also-available-in-foreign-voltages-xp-2000a" desc="AccuPRO™ Dual Sensor Radiometer / Photometer" />
                    <ProductCard title="XP-2000" img={xp2000Img} link="https://www.spectro-uv.com/products/xp-2000-accupro-radiometer" desc="AccuPRO™ Dual Sensor Radiometer / Photometer" />
                    <ProductCard title="CLA-100Z" img={cla100zImg} link="https://www.spectro-uv.com/products/cla-100z-classic-lamp" desc="Classic Series Dual Beam LED" />
                    <ProductCard title="CLA-150" img={cla150Img} link="https://www.spectro-uv.com/products/cla-150-classic-lamp" desc="Classic Series Ultraviolet Blacklight LED" />
                    <ProductCard title="CLA-100" img={cla100Img} link="https://www.spectro-uv.com/products/cla-100-classic-lamp" desc="Classic Series Dual Beam LED Blacklight" />
                    <ProductCard title="BLE-LED-100" img={bleLed100Img} link="https://www.spectro-uv.com/products/ble-led-100-vivid-led-replacement-bulb" desc="VIVID™ UV-A Replacement Bulb" />
                    <ProductCard title="BLE-LED-150" img={bleLed150Img} link="https://www.spectro-uv.com/products/ble-led-150-vivid-led-replacement-bulb" desc="VIVID™ UV-A Replacement Bulb" />
                    <ProductCard title="XX-40" img={xx40Img} link="https://www.spectro-uv.com/products/xx-40-x-series-bench-lamp" desc="X-Series 40 Watt Bench Lamp" />
                    <ProductCard title="OPX-365" img={opx365Img} link="https://www.spectro-uv.com/products/opx-365-optimax-flashlight-kit" desc="OPTIMAX™ 365 UV-A Flashlight Kit" />
                    <ProductCard title="XS-555/L" img={xs555LImg} link="https://www.spectro-uv.com/products/xs-555-l-accumax-sensor" desc="AccuMAX™ Luminance Sensor Detector" />
                    <ProductCard title="SPN-CLR365-HC" img={spnClr365HcImg} link="https://www.spectro-uv.com/products/spn-clr365-hc-clarity-flashlight" desc="CLARITY™ UV-A Flashlight Kit" />
                    <ProductCard title="SPN-VIN365" img={spnVin365Img} link="https://www.spectro-uv.com/products/spn-vin365-vintage-365-handheld-uv-lamp" desc="Vintage™ 365 Handheld UV Lamp" />
                    <ProductCard title="SPN-CLR365-SC" img={spnClr365ScImg} link="https://www.spectro-uv.com/products/spn-clr365-sc-clarity-flashlight" desc="CLARITY™ UV-A Flashlight Kit" />
                    <ProductCard title="EEX-1000" img={eex1000Img} link="https://www.spectro-uv.com/products/eex-1000-eagleeye-headlamp" desc="EagleEye™ UV-A Blacklight LED Headlamp" />
                    <ProductCard title="XX-15A" img={xx15aImg} link="https://www.spectro-uv.com/products/xx-15a-x-series-bench-lamp" desc="X-Series 15 Watt Bench Lamp" />
                    <ProductCard title="X-15G" img={x15gImg} link="https://www.spectro-uv.com/products/x-15g-x-series-bench-lamp" desc="X-Series UV Lamps" />
                    <ProductCard title="OLX-365BFL" img={olx365bflImg} link="https://www.spectro-uv.com/products/olx-365bfl-optilux-flashlight-kit-with-pass-filter" desc="OPTI-LUX™ UV-A Flashlight Kit" />
                    <ProductCard title="OLX-365B" img={olx365bImg} link="https://www.spectro-uv.com/products/olx-365b-optilux-flashlight-kit-with-pass-filter" desc="OPTI-LUX™ UV-A Flashlight Kit" />
                    <ProductCard title="SPN-CLR-BHA" img={spnClrBhaImg} link="https://www.spectro-uv.com/products/spn-clr-bha-clarity-flashlight" desc="CLARITY™ UV-A Flashlight Kit" />
                    <ProductCard title="SPN-CLR-BA" img={spnClrBaImg} link="https://www.spectro-uv.com/products/spn-clr-ba-clarity-flashlight" desc="CLARITY™ UV-A Flashlight Kit" />
                    <ProductCard title="YK-1" img={yk1Img} link="https://www.spectro-uv.com/products/yk-1-ac-magnetic-yoke" desc="Magnetic Particle Inspection AC Yoke" />
                    <ProductCard title="OLX-365FL" img={olx365flImg} link="https://www.spectro-uv.com/products/olx-365fl-optilux-flashlight-kit" desc="OPTI-LUX™ Blacklight Flashlight Kit" />
                    <ProductCard title="OLX-365" img={olx365Img} link="https://www.spectro-uv.com/products/olx-365-optilux-flashlight-kit" desc="OPTI-LUX™ UV-A Inspection Flashlight Kit" />
                    <ProductCard title="IDX-550" img={idx550Img} link="https://www.spectro-uv.com/products/idx-550-led-uv-a-flashlight" desc="Nano 365 IDX-550 UV Flashlight" />
                    <ProductCard title="IDX-500" img={idx500Img} link="https://www.spectro-uv.com/products/idx-500-led-uv-a-flashlight" desc="Nano 365 IDX-500 UV Flashlight Kit" />
                    <ProductCard title="OPX-450" img={opx450Img} link="https://www.spectro-uv.com/products/opx-450-optimax-blue-light-flashlight" desc="OPTIMAX™ Rechargeable Blue Light Flashlight" />
                    <ProductCard title="IDX-400" img={idx400Img} link="https://www.spectro-uv.com/products/idx-400-led-uv-a-flashlight" desc="Nano 365 IDX-400 UV-A Flashlight Kit" />
                    <ProductCard title="IDX-350" img={idx350Img} link="https://www.spectro-uv.com/products/nano-365-series-dual-beam-led-flashlight-kit-rechargeable-copy" desc="Nano Series IDX-350 UV-A Flashlight" />
                    <ProductCard title="IDX-300" img={idx300Img} link="https://www.spectro-uv.com/products/idx-300-dual-beam-led-flashlight" desc="Nano 365 IDX-300 Flashlight Kit" />
                    <ProductCard title="IDX-200" img={idx200Img} link="https://www.spectro-uv.com/products/idx-200-led-uv-a-flashlight" desc="Nano 365 IDX-200 UV-A Flashlight Kit" />
                  </>
                )}

                {spectroCategory === 'AEROSPACE' && (
                  <>
                    <ProductCard title="UV-365MSBLC" img={aeroUv365msblcImg} link="https://www.spectro-uv.com/products/uv-365msblc-uvision365-lamp" desc={'uVision™ Blacklight Lamp Kit\nUV-A Intensity Range: 4500µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="UV-365MHC" img={aeroUv365mhcImg} link="https://www.spectro-uv.com/products/uv-365mhc-uvision365-lamp" desc={'uVision™ Deluxe Series Blacklight Lamp Kit\nUV-A Intensity Range: 6000µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="UV-365HCR" img={aeroUv365hcrImg} link="https://www.spectro-uv.com/products/uv-365hcr-uvision365-lamp" desc={'uVision™ Blacklight Lamp Kit with UV-A Pass Filters and Cord Reel\nUV-A Intensity Range: 6000µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="UV-365ZSBLC" img={aeroUv365zsblcImg} link="https://www.spectro-uv.com/products/uv-365zsblc-uvision365-lamp" desc={'uVision™ Blacklight Lamp Kit\nUV-A Intensity Range: 4500µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="UV-365ZHC" img={aeroUv365zhcImg} link="https://www.spectro-uv.com/products/uv-365zhc-uvision-365-lamp" desc={'uVision™ Blacklight Lamp Kit\nUV-A Intensity Range: 8000µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="TRI-365SBLC" img={aeroTri365sblcImg} link="https://www.spectro-uv.com/products/tritan-%E2%84%A2-365-series-ultraviolet-uv-a-blacklight" desc={'Tritan™ Ultraviolet Blacklight LED Inspection Lamp\nUV-A Intensity Range: 4500µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="TRI-365MHB" img={aeroTri365mhbImg} link="https://www.spectro-uv.com/products/tri-365mhb-tritan-365-lamp" desc={'Tritan™ Blacklight LED Inspection Lamp\nUV-A Intensity Range: 9000µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="TRI-365MDB" img={aeroTri365mdbImg} link="https://www.spectro-uv.com/products/tri-365mdb-tritan-365-lamp" desc={'Tritan™ Blacklight LED Inspection Lamp\nUV-A Intensity Range: 4750µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="TRI-365HC" img={aeroTri365hcImg} link="https://www.spectro-uv.com/products/tri-365hc-tritan365-lamp" desc={'Tritan™ Blacklight LED Inspection Lamp\nUV-A Intensity Range: 7000µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="UV-365SBLC" img={aeroUv365sblcImg} link="https://www.spectro-uv.com/products/uv-365sblc-uvision-365-lamp" desc={'uVision™ Blacklight Lamp Kit\nUV-A Intensity Range: 4500µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="UV-365HC" img={aeroUv365hcImg} link="https://www.spectro-uv.com/products/uv-365hc-uvision365-lamp" desc={'uVision™ Blacklight Lamp Kit\nUV-A Intensity Range: 6000µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="UV-365MEH" img={aeroUv365mehImg} link="https://www.spectro-uv.com/products/uv-365meh-uvision-365-lamp" desc={'uVision™ Blacklight Lamp Kit with Battery Pack\nUV-A Intensity Range: 7000µW/cm2 at 15"(38cm)'} />
                    <ProductCard title="XRP-3000" img={aeroXrp3000Img} link="https://www.spectro-uv.com/products/xrp-3000-accumax%E2%84%A2-digital-radiometer-kit" desc="AccuMAX™ Radiometer / Photometer Kit" />
                    <ProductCard title="XRP-3000A" img={aeroXrp3000aImg} link="https://www.spectro-uv.com/products/xrp-3000a-accumax-radiometer" desc="AccuMAX™ XRP-3000A Radiometer/Photometer" />
                    <ProductCard title="UV-365ZEH" img={aeroUv365zehImg} link="https://www.spectro-uv.com/products/uv-365zeh-uvision365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="TRI-365HB" img={aeroTri365hbImg} link="https://www.spectro-uv.com/products/tri-365hb-tritan-365-lamp" desc="Tritan™ Blacklight LED Inspection Lamp" />
                    <ProductCard title="TRI-365DB" img={aeroTri365dbImg} link="https://www.spectro-uv.com/products/tri-365db-tritan-365-lamp" desc="Tritan™ LED Inspection Lamp" />
                    <ProductCard title="XP-3000A" img={aeroXp3000aImg} link="https://www.spectro-uv.com/products/accuelite%E2%84%A2-xp-3000-radiometer-photometer-copy-1" desc="AccuELITE™ XP-3000A Radiometer/Photometer" />
                    <ProductCard title="XP-3000" img={aeroXp3000Img} link="https://www.spectro-uv.com/products/accuelite%E2%84%A2-xp-3000-radiometer-photometer-copy" desc="AccuELITE™ XP-3000 Radiometer/Photometer" />
                    <ProductCard title="UV-365EH" img={aeroUv365ehImg} link="https://www.spectro-uv.com/products/uv-365eh-uvision-365-lamp" desc="uVision™ Blacklight Lamp Kit" />
                    <ProductCard title="UV-365ES" img={aeroUv365esImg} link="https://www.spectro-uv.com/products/uv-365es-uvision-365-lamp" desc="uVision™ 365 Series UV-A Inspection Lamp" />
                    <ProductCard title="XR-1000" img={aeroXr1000Img} link="https://www.spectro-uv.com/products/xr-1000-accumax-readoutunit" desc="AccuMAX Radiometer/ Photometer ***READOUT UNIT ONLY***" />
                    <ProductCard title="XP-4000" img={aeroXp4000Img} link="https://www.spectro-uv.com/products/xp-4000-accupro-radiometer" desc="AccuPRO™ Plus 3 in 1 Sensor Radiometer Photometer" />
                    <ProductCard title="EK-3000" img={aeroEk3000Img} link="https://www.spectro-uv.com/products/ek-3000-eagleeye-headlamp" desc="EagleEye™ II Dual Beam UV-A Headlamp Inspection Kit" />
                    <ProductCard title="XP-2000" img={aeroXp2000Img} link="https://www.spectro-uv.com/products/xp-2000-accupro-radiometer" desc="AccuPRO™ Dual Sensor Radiometer / Photometer" />
                    <ProductCard title="XP-2000A" img={aeroXp2000aImg} link="https://www.spectro-uv.com/products/accupro-dual-sensor-radiometer-photometer-also-available-in-foreign-voltages-xp-2000a" desc="AccuPRO™ Dual Sensor Radiometer / Photometer" />
                    <ProductCard title="SPN-CLR365-HC" img={aeroSpnClr365HcImg} link="https://www.spectro-uv.com/products/spn-clr365-hc-clarity-flashlight" desc="CLARITY™ UV-A Flashlight Kit" />
                    <ProductCard title="SPN-CLR365-SC" img={aeroSpnClr365ScImg} link="https://www.spectro-uv.com/products/spn-clr365-sc-clarity-flashlight" desc="CLARITY™ UV-A Flashlight Kit" />
                    <ProductCard title="EEX-1000" img={aeroEex1000Img} link="https://www.spectro-uv.com/products/eex-1000-eagleeye-headlamp" desc="EagleEye™ UV-A Blacklight LED Headlamp" />
                    <ProductCard title="SPN-CLR-BA" img={aeroSpnClrBaImg} link="https://www.spectro-uv.com/collections/aerospace?page=2" desc="CLARITY™ UV-A Flashlight Kit" />
                    <ProductCard title="SPN-CLR-BHA" img={aeroSpnClrBhaImg} link="https://www.spectro-uv.com/products/spn-clr-bha-clarity-flashlight" desc="CLARITY™ UV-A Flashlight Kit" />
                    <ProductCard title="IDX-550" img={aeroIdx550Img} link="https://www.spectro-uv.com/products/idx-550-led-uv-a-flashlight" desc="Nano 365 IDX-550 UV Flashlight" />
                    <ProductCard title="IDX-400" img={aeroIdx400Img} link="https://www.spectro-uv.com/products/idx-400-led-uv-a-flashlight" desc="Nano 365 IDX-400 UV-A Flashlight Kit" />
                    <ProductCard title="IDX-350" img={aeroIdx350Img} link="https://www.spectro-uv.com/products/nano-365-series-dual-beam-led-flashlight-kit-rechargeable-copy" desc="Nano Series IDX-350 UV-A Flashlight" />
                    <ProductCard title="IDX-300" img={aeroIdx300Img} link="https://www.spectro-uv.com/products/idx-300-dual-beam-led-flashlight" desc="Nano 365 IDX-300 Flashlight Kit" />
                    <ProductCard title="RP-SM-01" img={aeroRpSm01Img} link="https://www.spectro-uv.com/products/rp-sm-01-clarity%E2%84%A2-365-spray-can-mount" desc="CLARITY™ 365 Spray Can Mount" />
                    <ProductCard title="IDX-200" img={aeroIdx200Img} link="https://www.spectro-uv.com/products/idx-200-led-uv-a-flashlight" desc="Nano 365 IDX-200 UV-A Flashlight Kit" />
                  </>
                )}
              </div>
            </>
          )}

          {/* --- GB INSPECTION --- */}
          {product.id === 'gb-inspection' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProductCard title="0° Compression" img={gb0Compression} link="https://www.gbinspection.com/products/probes/0-compression/" desc="Single or twin crystal options for general purpose ultrasonic testing." />
              <ProductCard title="Angle Compression" img={gbAngleCompression} link="https://www.gbinspection.com/products/probes/angle-compression/" desc="Transducers for flaw detection through to application specific inspections." />
              <ProductCard title="High Temp Probes" img={gbHighTemp} link="https://www.gbinspection.com/products/probes/high-temperature/" desc="Sensors for measuring wall thickness on rough ID/OD surfaces." />
              <ProductCard title="Custom Transducers" img={gbCustomMade} link="https://www.gbinspection.com/products/probes/custom-made-probes/" desc="Bespoke manufactured sensors for unique applications." />
              <ProductCard title="LIMBOTOFD" img={gbLimbotofd} link="https://www.gbinspection.com/product/limbotofd/" desc="Composite Compression Wave with integral cable RG178 2M." />
              <ProductCard title="TULA™ (HTHA)" img={gbTula} link="https://www.gbinspection.com/products/probes/tofd/tula/" desc="Innovative product designed for HTHA inspection." />
              <ProductCard title="Integral-TOFD" img={gbIntegralTofd} link="https://www.gbinspection.com/product/integral-tofd/" desc="Patent-pending technology for faster and more reliable setup." />
            </div>
          )}

          {/* --- DANATRONICS --- */}
          {product.id === 'danatronics' && (
            <>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { id: 'flaw-detectors', name: 'Flaw Detectors' },
                  { id: 'corrosion-thickness-gage', name: 'Corrosion Thickness Gage' },
                  { id: 'precision-thickness-gage', name: 'Precision Thickness Gage' },
                  { id: 'hall-effect-gage', name: 'Hall Effect Gage' },
                  { id: 'transducers', name: 'Transducers' },
                ].map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/product/danatronics#${cat.id}`}
                    className={`px-6 py-3 rounded-full border-2 transition-all ${danatronicsCategory === cat.id.toUpperCase().replace(/-/g, '_')
                      ? 'bg-[#003349] text-white border-[#003349]'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#003349] hover:text-[#003349]'
                      }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {danatronicsCategory === 'FLAW_DETECTORS' && (
                  <>
                    <ProductCard title="ECHO FD" img={echoFdImg} link="https://www.danatronics.com/echofd" desc="ECHO FD is our portable ultrasonic flaw detector in the same field proven case as our popular ECHO series. Our ECHO FD represents a breakthrough in terms of cost, size and ease of use for your everyday flaw detector. ECHO FD can even toggle from a flaw detector, corrosion or precision thickness gage making it the smallest and most affordable unit in the world to offer such a vast application set. Our new hand-held ultrasonic flaw detector is packed with many useful and practical features." />
                    <ProductCard title="ECHO PRO" img={echoProImg} link="https://www.danatronics.com/echopro" desc="ECHO PRO is a compact, portable ultrasonic flaw detector designed for fast, accurate inspections and ease of use. Built of over 70 years of ultrasonic expertise, it features intuitive touch-screen operation, a powerful 600-volt pulser, long battery life and essential inspection tools such as dual gates, DAC, AWS and a built-in datalogger with Excel export. The ECHO PRO delivers advanced performance in a simple, user-friendly design for demanding inspection applications." />
                  </>
                )}

                {danatronicsCategory === 'CORROSION_THICKNESS_GAGE' && (
                  <>
                    <ProductCard title="ECHO 9" img={echo9Img} link="https://www.danatronics.com/echo9" desc="Danatronics ECHO-9 Color series comes in 4 models ranging from our ECHO-9C to the fully loaded ECHO-9DLCW that includes Echo to Echo, B-Scan, more than 100k reading datalogger and a live Waveform (A-Scan)." />
                    <ProductCard title="ECHO 8" img={echo8CorrosionImg} link="https://www.danatronics.com/echo8" desc="Danatronics ECHO 8 series of hand held corrosion and precision ultrasonic thickness gage with 3.5&quot; color display comes in 4 models ranging from our ECHO-8 to the fully loaded ECHO-8DLW that includes default setups for a wide variety of transducers as well as custom stored setups, all with 1 micron resolution, 'unlimited' reading datalogger via an up to 32Gb micro SD card memory and a live Waveform (A-Scan)." />
                    <ProductCard title="EHC-09 Monochrome" img={ehc09MonochromeImg} link="https://www.danatronics.com/ehc09monochrome" desc="Danatronics EHC-09 Monochrome series comes in 6 models ranging from our EHC-09A to the fully loaded EHC-09DLCW that includes Echo to Echo, B-Scan, a 100k reading datalogger and a live Waveform (A-Scan)." />
                    <ProductCard title="EHC-03" img={ehc03Img} link="https://www.danatronics.com/ehc03" desc="The EHC-03 represents a quality, ultrasonic thickness gage designed to provide years of unprecedented measurements all at an entry level price." />
                  </>
                )}

                {danatronicsCategory === 'PRECISION_THICKNESS_GAGE' && (
                  <>
                    <ProductCard title="Echo 7" img={echo7Img} link="https://www.danatronics.com/echo7" desc="Danatronics™ ECHO-7 series of hand held precision ultrasonic thickness gage with 3.5&quot; color display comes in 4 models ranging from our ECHO-7 to the fully loaded ECHO-7DLW that includes default setups for a wide variety of transducers as well as custom stored setups, all with 1 micron resolution, 'unlimited' reading datalogger via an up to 32Gb micro SD card memory and a live Waveform (A-Scan). So you if are measuring thin coil steel." />
                    <ProductCard title="ECHO 8" img={echo8PrecisionImg} link="https://www.danatronics.com/index.php?link=echo8" desc="Danatronics™ ECHO 8 series of hand held corrosion and precision ultrasonic thickness gage with 3.5&quot; color display comes in 4 models ranging from our ECHO-8 to the fully loaded ECHO-8DLW that includes default setups for a wide variety of transducers as well as custom stored setups, all with 1 micron resolution, 'unlimited' reading datalogger via an up to 32Gb micro SD card memory and a live Waveform (A-Scan)." />
                    <ProductCard title="UPG-07 Monochrome" img={upg07MonochromeImg} link="https://www.danatronics.com/upg07monochrome" desc="Danatronics™ UPG-07 Monochrome series comes in 5 models ranging from our UPG-07B to the fully loaded UPG-07DLW that includes B-Scan, a 100k reading datalogger and a live Waveform (A-Scan)." />
                  </>
                )}

                {danatronicsCategory === 'HALL_EFFECT_GAGE' && (
                  <>
                    <ProductCard title="MTG-99" img={mtg99Img} link="https://www.danatronics.com/index.php?link=product&id=7" desc="The MTG-99 series of hall effect thickness gages is designed for use on non-ferrous materials up to 1&quot; with access to both sides." />
                  </>
                )}

                {danatronicsCategory === 'TRANSDUCERS' && (
                  <>
                    <ProductCard title="Dual Element Transducers" img={dualElementTransducersImg} link="https://www.danatronics.com/dualelementtransducers" desc="Danatronics™ offers a wide variety of dual transducers from .5-10 Mhz including high temperature options." />
                    <ProductCard title="Single Element Transducers" img={singleElementTransducersImg} link="https://www.danatronics.com/singleelementt ransducers" desc="Danatronics™ offers a wide variety of single element transducers from .5-10 Mhz, including contact, composite, delay line and angle beam transducers." />
                  </>
                )}
              </div>
            </>
          )}

          {/* --- DOLPHITECH --- */}
          {product.id === 'dolphitech' && (
            <>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { id: 'maut-core-units', name: 'MAUT Core Units' },
                  { id: 'maut-transducers', name: 'MAUT Transducers (TRMs)' },
                  { id: 'accessories', name: 'Accessories' },
                  { id: 'scanning-tools', name: 'Scanning Tools' },
                ].map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/product/dolphitech#${cat.id}`}
                    className={`px-6 py-3 rounded-full border-2 transition-all ${dolphitechCategory === cat.id.toUpperCase().replace(/-/g, '_')
                      ? 'bg-[#003349] text-white border-[#003349]'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#003349] hover:text-[#003349]'
                      }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {dolphitechCategory === 'MAUT_CORE_UNITS' && (
                  <>
                    <ProductCard title="Dolphicam2" img={dolphitechDolphicam2Img} link="https://dolphitech.com/products/maut-ultrasonics/dolphicam2/" desc="Portable, rugged NDT system with an intuitive interface, offering advanced ultrasonic flaw detection and live C-Scan technology for detailed inspections." />
                    <ProductCard title="Dolphicam2 military spec" img={dolphitechDolphicam2MilitaryImg} link="https://dolphitech.com/products/maut-ultrasonics/dolphicam2-military-spec-2/" desc="Portable, rugged NDT system designed for the defense market, offering secure, wireless ultrasonic flaw detection with rapid setup and advanced imaging capabilities." />
                    <ProductCard title="Dolphicam2+" img={dolphitechDolphicam2PlusImg} link="https://dolphitech.com/products/maut-ultrasonics/dolphicam2-plus/" desc="Portable, rugged NDT system featuring the largest screen (14′′) on the market, offering intuitive ultrasonic flaw detection with advanced imaging capabilities and rapid setup." />
                    <ProductCard title="Dolphicam2+ Military Spec" img={dolphitechDolphicam2PlusMilitaryImg} link="https://dolphitech.com/products/maut-ultrasonics/dolphicam2-plus-military-spec/" desc="Portable, rugged NDT system designed for the defense market, featuring the largest screen (14′′) on the market, secure wireless connections, and rapid setup for advanced ultrasonic flaw detection." />
                    <ProductCard title="Dolphicam in a box" img={dolphicamInABoxImg} link="https://dolphitech.com/products/maut-ultrasonics/dolphicam-in-a-box/" desc="A small pelican case contains everything for the DIAB." />
                  </>
                )}

                {dolphitechCategory === 'MAUT_TRANSDUCERS' && (
                  <>
                    <ProductCard title="MxTTU" img={dolphitechMxttuImg} link="https://dolphitech.com/products/matrix-array-transducers/mxttu/" desc="MxTTU™ makes the assessment of complex materials from multiple-bond layers to honeycomb or foam cores far simpler." />
                    <ProductCard title="TRM 0.7 MHz" img={dolphitechTrmImg} link="https://dolphitech.com/products/matrix-array-transducers/trm-0-7mhz/" desc="The 0.7MHz transducer module (TRM) is currently our lowest frequency available." />
                    <ProductCard title="TRM 1.5 MHz" img={dolphitechTrmImg} link="https://dolphitech.com/products/matrix-array-transducers/trm-1-5-mhz/" desc="The 1.5MHz transducer module (TRM) is towards the lower end of our frequency range." />
                    <ProductCard title="TRM 2.5 MHz" img={dolphitechTrmImg} link="https://dolphitech.com/products/matrix-array-transducers/trm-2-5-mhz/" desc="The 2.5MHz transducer module (TRM) is well-suited to thicker section and lower grade composite material inspection." />
                    <ProductCard title="TRM 3.5 MHz" img={dolphitechTrmImg} link="https://dolphitech.com/products/matrix-array-transducers/trm-3-5-mhz/" desc="The 3.5MHz transducer module (TRM) is an excellent choice for CFRP applications." />
                    <ProductCard title="TRM 5 MHz" img={dolphitechTrmImg} link="https://dolphitech.com/products/matrix-array-transducers/trm-5-mhz/" desc="The 5MHz transducer module (TRM) sits at the middle of our range and is a fantastic all-rounder." />
                    <ProductCard title="TRM 8 MHz" img={dolphitechTrmImg} link="https://dolphitech.com/products/matrix-array-transducers/trm-8-mhz/" desc="The 8MHz transducer module (TRM) is a great choice for a wide range of metallic applications." />
                    <ProductCard title="TRM 10 MHz" img={dolphitechTrmImg} link="https://dolphitech.com/products/matrix-array-transducers/trm-10-mhz/" desc="The 10 MHz transducer module (TRM) is our highest frequency model and provides great sensitivity for inspections of thinner components." />
                  </>
                )}

                {dolphitechCategory === 'ACCESSORIES' && (
                  <>
                    <ProductCard title="Delay line aqualene 320 12mm" img={dolphitechDelayLinesImg} link="https://dolphitech.com/products/accessories/delay-line-aqualene-320-12mm/" desc="Detachable delay line. Bracket included." />
                    <ProductCard title="Delay Line rexolite 12mm" img={dolphitechDelayLinesImg} link="https://dolphitech.com/products/accessories/delay-line-rexolite-12mm/" desc="Detachable delay line. Bracket included." />
                    <ProductCard title="Delay line aqualene 320 8mm" img={dolphitechDelayLine8Img} link="https://dolphitech.com/products/accessories/delay-line-aqualene-320-8mm/" desc="Detachable delay line. Bracket included." />
                    <ProductCard title="Delay line rexolite 8mm" img={dolphitechDelayLine8Img} link="https://dolphitech.com/products/accessories/delay-line-rexolite-8mm/" desc="Detachable delay line. Bracket included." />
                    <ProductCard title="Delay line rexolite Flat" img={dolphitechDelayLineFlatImg} link="https://dolphitech.com/products/accessories/delay-line-rexolite-flat/" desc="Hard-wearing, delay line for flat applications. The bracket is included." />
                    <ProductCard title="Delay line rexolite curved-irrigated" img={dolphitechDelayLineCurvedImg} link="https://dolphitech.com/products/accessories/delay-line-rexolite-curved-irrigated/" desc="This Rexolite delay line is easily grinded/sanded to fit the application." />
                    <ProductCard title="2-meter USB-C Cable" img={dolphitechCable15cmImg} link="https://dolphitech.com/products/accessories/2-metre-usb-c-cable/" desc="2-meter USB-C cable from Transducer Module (TRM) to Black Box (BB)." />
                    <ProductCard title="5-meter USB-C Cable" img={dolphitechCable15cmImg} link="https://dolphitech.com/products/accessories/5-metre-usb-c-cable/" desc="5-meter USB-C cable from Transducer Module (TRM) to Black Box (BB)." />
                    <ProductCard title="15cm USB-C to USB-B cable" img={dolphitechCable15cmImg} link="https://dolphitech.com/products/accessories/15cm-usb-c-to-usb-b-cable/" desc="15cm USB-C to USB-B cable from BlackBox (BB) to dolphicam2 Panasonic ToughPad FZ-G1." />
                    <ProductCard title="30cm USB-C to USB-B cable" img={dolphitechCable30cmImg} link="https://dolphitech.com/products/accessories/30cm-usb-c-to-usb-b-cable/" desc="30cm USB-C to USB-B cable from BlackBox (BB) to dolphicam2 Panasonic ToughBook FZ-G2." />
                    <ProductCard title="60cm USB-C to USB-B cable" img={dolphitechCable60cmImg} link="https://dolphitech.com/products/accessories/60cm-usb-c-to-usb-b-cable/" desc="USB-C to USB-B cable from BlackBox (BB) to dolphicam2+ Tablet (DT-Research or Getac Rugged Tablet)." />
                    <ProductCard title="Stitching Pad" img={dolphitechStitchingPadImg} link="https://dolphitech.com/products/accessories/stitching-pad/" desc="25 x 25 cm (10x10 inches) elastic pad with holes for pen-marking grid for manual stitching in dolphicam2 software." />
                    <ProductCard title="CFRP Sample" img={dolphitechCfrpSampleImg} link="https://dolphitech.com/products/accessories/cfrp-sample/" desc="20 x 30cm (8 x 12 inches) CFRP sample with 25-50mm (1-2 inches) impact damage. Damage has delamination in at several fiber layers." />
                  </>
                )}

                {dolphitechCategory === 'SCANNING_TOOLS' && (
                  <>
                    <ProductCard title="Rapid mapper" img={dolphitechRapidMapperImg} link="https://dolphitech.com/products/scanning-tools/rapid-mapper/" desc="For quick data collection the Rapid Mapper is a two-axis encoded scanner, which provides the option of encoded freehand scanning over a surface." />
                    <ProductCard title="ODI Encoder" img={dolphitechOdiEncoderImg} link="https://dolphitech.com/products/scanning-tools/odi-encoder/" desc="For quick, single axis encoded data collection. The ODI encoder offers speed and efficiency. Easy to mount to MAUT TRM's, encoder configuration comes pre-installed on the dolphicam2 range." />
                  </>
                )}
              </div>
            </>
          )}

          {/* --- proceq --- */}
          {product.id === 'proceq' && (
            <>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { id: 'flaw-detectors', name: 'Flaw Detectors' },
                  { id: 'portable-hardness-tester', name: 'Portable Hardness Tester' }
                ].map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/product/proceq#${cat.id}`}
                    className={`px-6 py-3 rounded-full border-2 transition-all ${proceqCategory === cat.name
                      ? 'bg-[#003349] text-white border-[#003349]'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#003349] hover:text-[#003349]'
                      }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {proceqCategory === 'Flaw Detectors' && (
                  <>
                    <ProductCard title="UT8000" img={UT8000} link="https://www.screeningeagle.com/en/products/proceq-flaw-detector-ut8000" desc="Portable ultrasound flaw detector for different types of material and components. Delivering fully traceable inspection data and rapid report creation." />
                  </>
                )}

                {proceqCategory === 'Portable Hardness Tester' && (
                  <>
                    <ProductCard title="Equotip 550 Leeb" img={Equotip} link="https://www.screeningeagle.com/en/products/equotip-550-leeb" desc="Versatile Leeb hardness tester for on-site testing of heavy, large or installed parts. Rugged touchscreen designed to provide exceptional user experience and best possible measuring and analysis. Enhanced software features and analysis functions." />
                    <ProductCard title="Equotip Live Leeb D" img={Equotip_Live} link="https://www.screeningeagle.com/en/products/equotip-live-leeb-d" desc="The world's first full IoT portable wireless hardness testing solution with real-time data sharing, cloud backup and intuitive user interface. The ultra portable Equotip Live Leeb D impact device is perfect for use in confined spaces." />
                    <ProductCard title="Equotip Piccolo 2 - Bambino 2" img={Equotip_Piccolo_2} link="https://www.screeningeagle.com/en/products/equotip-piccolo-2-bambino-2" desc="The entry model of the Leeb D/DL probe with an integrated display is designed for quick and reliable on-site material hardness testing. Its compact metal housing ensures durability." />
                    <ProductCard title="Equotip 550 UCI" img={Equotip_550} link="https://www.screeningeagle.com/en/products/equotip-550-uci" desc="Flexible UCI hardness tester for fine-grained material with any shape and heat-treated surfaces. The patented adjustable test load enables a wide range of applications. Rugged touchscreen with enhanced software features and analysis functions." />
                    <ProductCard title="Equotip Live UCI" img={Equotip_Live_UCI} link="https://www.screeningeagle.com/en/products/equotip-live-uci" desc="Equotip Live UCI creates new opportunities for collaboration in portable hardness testing. The Equotip iOS app allows you to conduct measurements at a remote location and provide instant access of your results to your team." />
                    <ProductCard title="Equotip 550 Portable Rockwell" img={Equotip_550_Portable_Rockwell} link="https://www.screeningeagle.com/en/products/equotip-550-portable-rockwell" desc="Portable Rockwell hardness tester for scratch-sensitive, polished and thin parts. It features excellent sensitivity through small penetration of a few micrometers. Rugged touchscreen with enhanced software features and analysis functions." />
                    <ProductCard title="Equotip 550 UCI MOTO-03 and UCI MOTO-08" img={Equotip_550_UCI_MOTO_03__MOTO_08} link="https://www.screeningeagle.com/en/products/equotip-uci-moto-probes" desc="The new UCI MOTO probes offer Extremely low indentation depths down to 3 μm, supporting test forces HV0.3 and HV0.8. This ensures accurate hardness measurement of delicate, functional coatings and hardened surfaces with results comparable to bench-top Vickers testers. Automatic force application minimizes operator influence, while programmable penetration time (1-99 seconds) simulates bench-top testing conditions for various materials." />
                  </>
                )}
              </div>
            </>
          )}


          {/* --- FUJI FILM --- */}
          {product.id === 'fuji' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProductCard
                title="XD-50"
                link="https://www.fujifilm.com/us/en/business/industrial/ndt"
                note="FUJIFILM XD-50 NDT Film"
                desc="Fuji XD-50 is for non-destructive materials testing with ultrafine grain and high contrast. This ASTM class 1 film has outstanding sharpness and fine detail and is particularly suitable for low-density materials. XD-50 is equivalent to D4 films and is available in all standard sizes, including NIF sheets and LP rolls."
              />
              <ProductCard
                title="XD-80"
                link="https://www.fujifilm.com/us/en/business/industrial/ndt"
                note="FUJIFILM XD-80 NDT Film"
                desc="Fuji XD-80 is for non-destructive materials testing with extremely fine grain and high contrast. This ASTM class 1 film is especially suitable for detecting the smallest faults. XD-80 is equivalent to D5 films and is available in all standard sizes, including NIF sheets and LP rolls."
              />
              <ProductCard
                title="XD-100"
                link="https://www.fujifilm.com/us/en/business/industrial/ndt"
                note="FUJIFILM XD-100 NDT Film"
                desc="Fuji XD-100 is for non-destructive materials testing with fine grain and high contrast. This ASTM class 2 film is especially suitable for test objects of medium to high density. XD-100 is equivalent to D7 films and is available in all standard sizes, including NIF sheets and LP rolls."
              />
            </div>
          )}



          {/* --- 3E NDT --- */}
          {product.id === '3e-ndt' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProductCard title="2905 HD LASER FILM DIGITIZER" img={e3NdtProductImg} link="https://www.3endt.com/client/product-details/137" desc="The 2905 film digitizer is designed to deliver the highest possible image quality combined with extremely fast reading. In as little as 7 seconds a 14 X 17 inch film can be digitized at 2k resolution. The 2905 film digitizer in combination with XVu software will provide a powerful stand-alone system, delivering full compliant DICONDE images. The 2905 film digitizer in combination with XVu software will provide a powerful stand-alone system, delivering full compliant DICONDE images." />
              <ProductCard title="Xpress Flex DR Panel" img={e3NdtExt1036Img} link="https://www.3endt.com/client/product-details/847" desc="Until today, Industrial Radiographic Testing(RT) for the pipeline and tank is generally performed by conventional X-ray film or flexible imaging plate(Computed Radiography-CR) due to its curved shooting surface. However, lots of relevant personnel have been expressing inconvenience about the long imaging time and inconvenient imaging processing procedure." />
              <ProductCard title="Xpress Scan" img={e3NdtXpressScanImg} link="https://www.3endt.com/client/products/114" desc="X press Scan digital radiography system provides: lower inspection costs by eliminating consumables (X-ray film and film processing chemicals), film processing equipment, film storage facilities;" />
              <ProductCard title="Pipeline Crawlers" img={e3NdtPicture5Img} link="https://www.3endt.com/client/products/55" desc="The systems are battery operated and travel at about 12m per minute.The system uses an electronic locating device or a small gamma source for location and positioning purposes, giving an accuracy of movement of 5mm, ideal for positioning the x-ray tube or gamma source to inspect a welded joint." />
            </div>
          )}

          {/* --- VALLEN SYSTEME --- */}
          {product.id === 'vallen-systeme' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProductCard title="Waveline" img={spotWaveImage} link="https://www.vallen.de/products/data-acquisiton-units/waveline-products/" desc="spotWave is a trademark of Vallen Systeme and the type designation of a single channel AE measurement system that can be operated by a mobile device or a PC. spotWave 201 has a USB interface for communication and power supply. Measurement data is stored in the host device in a *.pridb and *.tradb file. The spotWave is available in three input ranges: 94 dBAE, 100 dBAE and 134 dBAE." />
              <ProductCard title="Multi-Channel Systems" img={dataAcquisitionImage} link="https://www.vallen.de/products/data-acquisiton-units/multi-channel-systems/" desc="allen AMSY-6 is our fully digital multi-channel AE measurement system. It consists of parallel measurement channels and the system front-end software which runs on an external PC. A measurement channel consists of an AE sensor, preamplifier and one channel of an ASIP-2 (dual channel acoustic signal processor)" />
              <ProductCard title="Software" img={softwareImage} link="https://www.vallen.de/products/software/" desc="Vallen Systeme provides the Vallen AE-Suite Software for data acquisition and data analysis tasks. VisualAE, VisualTR and VisualClass are the data analysis tools of the Vallen AE-Suite Software" />
              <ProductCard title="AE Sensors &amp; Preamplifiers" img={sensorsImage} link="https://www.vallen.de/sensors/broad-band-sensors/" desc="The sensor represents the first component in an AE measurement chain and therefore is of particular importance. A subsequent measurement system can only process signals picked up by the AE sensor. Anything that the AE sensor does not pick up is lost for analysis. The preamplifier, either integrated or added externally, maintains the signal to noise ratio and enables the transmission of the sensor output over long cable distances." />
              <ProductCard title="ATEX" img={atexImage} link="https://www.vallen.de/products/atex-products/" desc="The Vallen ISAFE3 intrinsically safe acoustic emission equipment is designed and certified for permanent monitoring tasks in hazardous environments with a potential risk of ignition or explosion. The application focus is clearly put on the petrochemical as well as the oil and gas transportation industry and employed for detection of active corrosion and fatigue crack in various test objects." />
              <ProductCard title="Accessories" img={accessoriesImage} link="https://www.vallen.de/products/accessories/" desc="Our accessories help you carry out your AE tests or measurements conveniently and reliably by, e.g. using our magnet holders for sensors, or cables according to our specifications. PC or laptop required for operation of an AMSY-6 chassis are also part of our accessories. Hence, Vallen Systeme can act as your sole source supplier for complete AE measurement systems." />
            </div>
          )}

          {/* --- BALTEAU NDT --- */}
          {product.id === 'balteau' && (
            <>
              {/* Category Selection: Shrinks layout and icons when balteauCategory is set */}
              <div className={`grid gap-4 mb-12 transition-all duration-500 ${balteauCategory ? 'grid-cols-5 md:grid-cols-5' : 'grid-cols-2 md:grid-cols-5'
                }`}>
                {[
                  { id: 'BALTOSPOT', name: 'BALTOSPOT', icon: baltospotIcon },
                  { id: 'BALTOGRAPH', name: 'BALTOGRAPH', icon: baltographIcon },
                  { id: 'BALTOMATIC', name: 'BALTOMATIC', icon: baltomaticIcon },
                  { id: 'BALTOSCOPE', name: 'BALTOSCOPE', icon: baltoscopeIcon },
                  { id: 'ACCESSORIES', name: 'ACCESSORIES', icon: accessoriesIconBalteau }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setBalteauCategory(cat.id as any); setBalteauEntered(true); }}
                    className={`group rounded-2xl border-2 transition-all duration-300 ${balteauCategory === cat.id
                      ? 'border-[#0f6fff] bg-blue-50 shadow-sm'
                      : 'border-slate-100 bg-slate-50 hover:bg-slate-100'
                      } ${balteauEntered ? 'p-3' : 'p-6'}`}
                  >
                    <div className={`transition-all duration-500 flex items-center justify-center ${balteauEntered ? 'h-20 mb-3' : 'h-40 mb-4'
                      }`}>
                      <img
                        src={cat.icon}
                        alt={cat.name}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className={`block text-center font-black transition-all duration-500 leading-tight ${balteauEntered ? 'text-[10px]' : 'text-sm'
                      }`}>
                      {cat.name}</span>
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {balteauCategory === 'BALTOSPOT' && (
                  <>
                    <ProductCard
                      title="LLX Series"
                      img={llxSeriesImage}
                      link="https://www.balteau-ndt.com/baltospot/?serie=10-llx-series"
                      desc="The LLX series is an air cooled, high frequency constant potential generator. It is dedicated to high precision applications like aerospace where specific requirements and speed of inspection are needed."
                    />
                    <ProductCard
                      title="CERAM Series"
                      img={ceramSeriesImage}
                      link="https://www.balteau-ndt.com/baltospot/?serie=30-ceram-series"
                      desc="Made of 3 different generators based on a ceramic insert with a 100% duty cycle. Specifically designed to be operated in difficult environments with a constant output."
                    />
                    <ProductCard
                      title="GF Series"
                      img={gfSeriesImage}
                      link="https://www.balteau-ndt.com/baltospot/?serie=35-gf-series"
                      desc="Derivates from the Crawler technology and is providing a reliable and cost effective solution for price sensitive markets."
                    />
                    <ProductCard
                      title="Crawler Units"
                      img={crawlerSeriesImage}
                      link="https://www.balteau-ndt.com/baltospot/?serie=40-crawler-series"
                      desc="Complete assembly including mechanical carrier, generator, chopper and accessories for Pipe inspections."
                    />
                  </>
                )}

                {balteauCategory === 'BALTOGRAPH' && (
                  <>
                    <ProductCard
                      title="XLD Series"
                      img={xldSeriesImage}
                      link="https://www.balteau-ndt.com/baltograph/?serie=10-xld-series"
                      desc="Constant potential generator specially designed for real time applications with extremely high dose stability."
                    />
                    <ProductCard
                      title="XSD Series"
                      img={xsdSeriesImage}
                      link="https://www.balteau-ndt.com/baltograph/?serie=20-xsd-series"
                      desc="19’’ racks built around a sealed, solid stage voltage multiplier. Monopolar or bipolar (100kV to 450kV) up to 4.5 kW."
                    />
                    <ProductCard
                      title="Mobile equipment"
                      img={xmdSeriesImage}
                      link="https://www.balteau-ndt.com/baltograph/?serie=40-xmd-series"
                      desc="Robust mobile version of the Baltograph range. Includes a custom trolley and closed circuit water cooling unit."
                    />
                    <ProductCard
                      title="Tubes"
                      img={tubesImage}
                      link="https://www.balteau-ndt.com/baltograph/?serie=30-tubes"
                      desc="High-quality X-ray Tube heads designed for integration with Balteau NDT stationary generators."
                    />
                  </>
                )}

                {balteauCategory === 'BALTOMATIC' && (
                  <ProductCard
                    title="AIS Series"
                    img={AIS}
                    link="http://balteau-ndt.com/baltomatic/?serie=ais-series"
                    desc="Systems range composed of standard and customised designs to perform inspections in manual, semi or automatic mode."
                  />
                )}

                {balteauCategory === 'BALTOSCOPE' && (
                  <>
                    <ProductCard
                      title="Flat Panel"
                      img={flatPanelImage}
                      link="https://www.balteau-ndt.com/baltoscope/?serie=10-flat-panel"
                      desc="Direct conversion support to display radiographic images instead of using traditional film, reducing exposure time."
                    />
                    <ProductCard
                      title="Software Suite"
                      img={softwareSuiteImage}
                      link="https://www.balteau-ndt.com/baltoscope/?serie=20-software-suite&product=ips012"
                      desc="Independent software driving hardware such as X-Ray generators and detectors for intelligent NDT solutions."
                    />
                    <ProductCard
                      title="Digitizer"
                      link="https://www.balteau-ndt.com/baltoscope/?serie=30-digitizer"
                      desc="High definition scanning of films to improve service quality and extend inspection capabilities."
                      note="No image available"
                    />
                    <ProductCard
                      title="Phantom"
                      img={phantomImage}
                      link="https://www.balteau-ndt.com/baltoscope/?serie=40-phantom"
                      desc="Hardware device used for testing relevant quality parameters of DR (Digital Radiography) systems."
                    />
                  </>
                )}

                {balteauCategory === 'ACCESSORIES' && (
                  <>
                    <ProductCard
                      title="Stands"
                      img={standsImage}
                      link="https://www.balteau-ndt.com/accessories/?serie=10-stands"
                      desc="A range of different stands suitable for all Balteau NDT generators, tubes, and accessories."
                    />
                    <ProductCard
                      title="Other Accessories"
                      img={fixed}
                      link="https://www.balteau-ndt.com/accessories/?serie=20-others"
                      desc="Includes safety devices, film viewers, films, IQIs, and other essential NDT tools."
                    />
                  </>
                )}
              </div>
            </>
          )}

          {/* --- JOHNSON & ALLEN --- */}
          {product.id === 'johnson-allen' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProductCard title="MPI Equipment" img={mpiImage} link="https://johnsonandallen.co.uk" desc="Full range of Magnetic Particle Inspection systems." />
              <ProductCard title="DPI Equipment" img={dpiImage} link="https://johnsonandallen.co.uk" desc="Dye Penetrant Inspection tools and lines." />
              <ProductCard title="Bespoke NDT Lines" img={bespokeLineImage} link="https://johnsonandallen.co.uk" desc="Custom engineered inspection solutions." />
            </div>
          )}

          {/* --- ECHO ULTRASONICS --- */}
          {product.id === 'echo' && (
            <>
              {/* Category Selection: Dynamic layout that shrinks when a category is selected */}
              <div className={`grid gap-4 mb-10 transition-all duration-500 ${echoCategory ? 'grid-cols-3 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'
                }`}>
                {[
                  { id: 'HIGH_TEMP', label: 'High Temperature', icon: highTempCategoryIcon },
                  { id: 'INTERMEDIATE', label: 'Intermediate & Low Temp', icon: ambientCategoryIcon },
                  { id: 'SPECIALTY', label: 'Specialty Application', icon: specialtyCategoryIcon }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setEchoCategory(cat.id as any); setEchoEntered(true); }}
                    className={`group rounded-2xl border-2 transition-all duration-300 ${echoCategory === cat.id
                      ? 'border-[#0f6fff] bg-blue-50 shadow-sm'
                      : 'border-slate-100 bg-slate-50 hover:bg-slate-100'
                      } ${echoEntered ? 'p-3' : 'p-6'}`}
                  >
                    <div className={`transition-all duration-500 flex items-center justify-center ${echoEntered ? 'h-16 mb-3' : 'h-44 mb-4'
                      }`}>
                      <img
                        src={cat.icon}
                        alt={cat.label}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h2 className={`font-bold text-[#003349] transition-all duration-500 uppercase leading-tight ${echoCategory ? 'text-[10px]' : 'text-sm'
                        }`}>
                        {cat.label}
                      </h2>
                    </div>
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* CATEGORY 1: HIGH TEMP */}
                {echoCategory === 'HIGH_TEMP' && (
                  <>
                    <ProductCard title="VersaSonic" img={versaSonicImg} link="https://www.echoultrasonics.com/product/versasonic/" desc="Instantaneous ultrasonic response without plastic powders." />
                    <ProductCard title="HiTempco+" img={hiTempcoImg} link="https://www.echoultrasonics.com/product/hitempco/" desc="Extended high-temp couplant that leaves no residue." />
                    <ProductCard title="EchoTherm" img={echoThermImg} link="https://www.echoultrasonics.com/product/echotherm/" desc="High viscosity paste for thickness gauging." />
                    <ProductCard title="EchoTherm Extreme" img={echoThermExtremeImg} link="https://www.echoultrasonics.com/product/echotherm-extreme/" desc="Flash point above 1300°F with zero residue." />
                    <ProductCard title="EchoTherm Discs" img={echoThermDiscsImg} link="https://www.echoultrasonics.com/product/echotherm-discs/" desc="Solid couplant for extreme environments." />
                  </>
                )}

                {/* CATEGORY 2: INTERMEDIATE & LOW TEMP */}
                {echoCategory === 'INTERMEDIATE' && (
                  <>
                    <ProductCard title="SuperSoniX" img={superSonixImg} link="https://www.echoultrasonics.com/product/supersonix/" desc={`Enhanced-performance UT gel ideal for vertical/overhead inspections.\n\nRange: 10° to 220°F (-23° to 104°C)`} />
                    <ProductCard title="EchoPure" img={echoPureImg} link="https://www.echoultrasonics.com/product/echopure/" desc={`Choice for Phased Array and cold weather. Won't freeze down to -60°F (-51°C).`} />
                    <ProductCard title="Signal™" img={signalImg} link="https://www.echoultrasonics.com/product/signal-high-acoustic-impedance-couplant/" desc="High acoustic impedance for better signal with less noise." />
                    <ProductCard title="UltraSoniX™" img={ultraSonixImg} link="https://www.echoultrasonics.com/product/ultrasonix/" desc="High-performance spreading couplant. Free of formaldehyde and glycol ethers." />
                    <ProductCard title="SoniX™" img={sonixImg} link="https://www.echoultrasonics.com/product/sonix/" desc="Strong film strength with ferrous corrosion inhibition. Salt-stable." />
                    <ProductCard title="Echo Spot Weld™" img={spotWeldImg} link="https://www.echoultrasonics.com/product/echo-spot-weld/" desc="Optimized for high-frequency array spot weld inspections." />
                    <ProductCard title="Glycerin Couplant" img={glycerinImg} link="https://www.echoultrasonics.com/product/glycerin-couplant/" desc="General purpose couplant for rough surfaces." />
                  </>
                )}

                {/* CATEGORY 3: SPECIALTY */}
                {echoCategory === 'SPECIALTY' && (
                  <>
                    <ProductCard title="Echo Shear Wave Couplant™" img={shearWaveImg} link="https://www.echoultrasonics.com/product/echo-shear-wave/" desc="Supports coupling of shear waves and guided waves at ambient temperatures." />
                    <ProductCard title="Echo 8 ZH™" img={echo8zhImg} link="https://www.echoultrasonics.com/product/echo-8-zh/" desc="Intended for elevated temperature, surface roughness, or long coupling time frames." />
                    <ProductCard title="Echo Z+™" img={echoZplusImg} link="https://www.echoultrasonics.com/product/echo-z/" desc="Ideal for very rough, pitted, or corroded surfaces. Increases signal transmission." />
                    <ProductCard title="Forever Wedge Couplant™" img={foreverWedgeImg} link="https://www.echoultrasonics.com/product/forever-wedge/" desc="Won’t dry, run, or dissolve. Reliable long-term coupling of wedges to transducers." />
                  </>
                )}
              </div>
            </>
          )}

          {product.id === 'mitcorp' && (
            <>
              <div className="grid gap-4 mb-10 transition-all duration-500 grid-cols-1 md:grid-cols-2">
                {([{
                  id: 'X_SERIES', name: 'X-SERIES INDUSTRIAL VIDEOSCOPES', icon: mitcorpXSeriesIcon
                },
                { id: 'PR_SERIES', name: 'PR-SERIES PIPE INSPECTION VIDEOSCOPES', icon: mitcorpPrSeriesIcon }
                ] as const).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setMitcorpCategory(cat.id)}
                    className={`group rounded-2xl border-2 transition-all duration-300 ${mitcorpCategory ? 'p-1' : 'p-6'} ${mitcorpCategory === cat.id ? 'border-[#0f6fff] bg-blue-50 shadow-sm' : 'border-slate-100 bg-slate-50 hover:bg-slate-100'
                      }`}
                  >
                    <div className={`${mitcorpCategory ? 'h-20 mb-1' : 'h-44 mb-4'} flex items-center justify-center`}>
                      <img src={cat.icon} alt={cat.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className={`text-center font-black uppercase ${mitcorpCategory ? 'text-[8px]' : 'text-sm'}`}>{cat.name}</div>
                  </button>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {mitcorpCategory === 'X_SERIES' && (
                  <>
                    <ProductCard title="X3000" img={mitcorpX3000Img} link="https://www.mitcorp.com.tw/product/x3000-3d-measurement-industrial-videoscope/" desc="The World’s First Dual-view 3D Measurement Videoscope." />
                    <ProductCard title="X750" img={mitcorpX750Img} link="https://www.mitcorp.com.tw/product/x750-hd-industrial-videoscope/" desc="Great mobility. Outstanding flexibility. Stunning results. Our new X750!" />
                    <ProductCard title="X2000" img={mitcorpX2000Img} link="https://www.mitcorp.com.tw/product/x2000-hd-videoscope/" desc="Best inspection partner in transportation, power generation, or security–the X2000 videoscope!" />
                    <ProductCard title="X600 PLUS" img={mitcorpX600PlusImg} link="https://www.mitcorp.com.tw/product/x600plus-hd-videoscope/" desc="“PLUS” is better! The enhanced version of ‘X600’~" />
                    <ProductCard title="X600 HD" img={mitcorpX600HdImg} link="https://www.mitcorp.com.tw/product/x600-hd-videoscope/" desc="The X600 is Compact, Lightweight, and Versatile!" />
                  </>
                )}

                {mitcorpCategory === 'PR_SERIES' && (
                  <>
                    <ProductCard title="PRSL300T" img={mitcorpPrsl300tImg} link="https://www.mitcorp.com.tw/product/prsl-300t-videoscope/" desc="Ideal for drain pipe inspections and ventilation ducts." />
                    <ProductCard title="PRM2830" img={mitcorpPrm2830Img} link="https://www.mitcorp.com.tw/product/prm2830-pipe-inspection-videoscope/" desc="5″ full touch monitor /28 mm rugged camera/HD high resolution image/Super light LED/ Light weight & compact / Flexible tube for passing 90 degrees conners." />
                    <ProductCard title="PS10HD" img={mitcorpPs10hdImg} link="https://www.mitcorp.com.tw/product/ps10hd-pipe-inspection-videoscope/" desc="Compact, lightweight solution for your household pipe inspection jobs" />
                  </>
                )}
              </div>
            </>
          )}

          {/* --- Ekoscan --- */}
          {product.id === 'Ekoscan' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProductCard title="UNIVERSAL ARRAYS" img={UNIVERSAL_ARRAYS} link="https://ekoscan-ndt.com/products/ultrasonic-probes/phased-array-probes/universal-arrays/" desc=": Universal arrays are general-purpose phased array probes designed for a wide range of inspection applications including welds, pipes, and structural components. 
                            
                            Available Models 
                            • EK10 / EK11 / EK12
                            • EK13

                            Key Features
                            ⦁	Suitable for multiple applications 
                            ⦁	Compatible with various wedges 
                            ⦁	Ideal for manual and automated inspection 
                            ⦁	Good balance between resolution and penetration

                            Applications
                            ⦁	General weld inspection 
                            ⦁	Forgings and castings 
                            ⦁	Structural inspection
                            " />
              <ProductCard title="WELD ARRAYS" img={WELD_ARRAYS} link="https://ekoscan-ndt.com/products/ultrasonic-probes/phased-array-probes/weld-arrays/" desc="Weld arrays are specifically designed for weld inspection, offering optimized beam characteristics for defect detection and sizing.
                            
                            Available Models 
                            • EK17 DMA
                            • EK27 DLA
                            • EK27 DMA
                            • EK28 DLA
                            • EK31 / EK32
                            • EKPIPE

                            Key Features
                            ⦁	Optimized for weld geometry 
                            ⦁	Available in Dual Linear Array (DLA) and Dual Matrix Array (DMA) 
                            ⦁	High sensitivity for crack detection 
                            ⦁	Suitable for thick and dissimilar weld materials

                            Applications
                            ⦁	Pipeline weld inspection 
                            ⦁	Pressure vessel welds 
                            ⦁	Structural weld evaluation
                            " />
              <ProductCard title="CORROSION ARRAYS" img={CORROSION_ARRAYS} link="https://ekoscan-ndt.com/products/ultrasonic-probes/phased-array-probes/corrosion-arrays/" desc="Corrosion arrays are designed for corrosion mapping and thickness measurement, providing high coverage and accurate C-scan imaging.

                            Available Models
                            • EK280 DLA
                            • HY LA

                            Key Features
                            ⦁	Dual linear array configuration 
                            ⦁	High scanning speed 
                            ⦁	Improved near-surface resolution 
                            ⦁	Accurate wall thickness measurement 

                            Applications
                            ⦁	Corrosion/erosion mapping 
                            ⦁	Tank floor inspection 
                            ⦁	Pipeline integrity assessment" />
              <ProductCard title="SMALL FOOTPRINT ARRAYS" img={SMALL_FOOTPRINT_ARRAYS} link="https://ekoscan-ndt.com/products/ultrasonic-probes/phased-array-probes/small-footprint-arrays/" desc="Small footprint arrays are compact probes designed for restricted access areas where standard probes cannot fit.

                            Available Model
                            • EKFX

                            Key Features
                            ⦁	Compact design for tight spaces 
                            ⦁	Suitable for small diameter pipes 
                            ⦁	Maintains high resolution despite size 
                            ⦁	Easy integration with scanners 

                            Applications
                            ⦁	Nozzle inspection 
                            ⦁	Small pipe welds 
                            ⦁	Limited access components
                            " />

              <ProductCard title="HARD FACE ARRAYS" img={HARD_FACE_ARRAYS} link="https://ekoscan-ndt.com/products/ultrasonic-probes/phased-array-probes/hard-face-arrays/" desc="Hard faced arrays are designed for harsh environments, featuring reinforced wear surfaces for extended durability.
                            Available Models 
                            • EK10 SAPPHIRE
                            • EK11SAPPHIRE 
                            • EK12 SAPPHIRE
                            Key Features
                            ⦁	Wear-resistant front face 
                            ⦁	Extended probe life 
                            ⦁	Suitable for rough surfaces 
                            ⦁	Stable coupling performance 
                            Applications
                            ⦁	Heavy industrial environments 
                            ⦁	High-temperature or abrasive surfaces 
                            ⦁	Long-duration scanning operations" />

              <ProductCard title="PAUT WEDGES" img={PAUT_WEDGES} link="https://ekoscan-ndt.com/products/ultrasonic-probes/phased-array-probes/paut-wedges/" desc="EKOSCAN provides a range of wedges specifically designed for phased array probes to ensure correct beam entry and optimal inspection performance. 
                            Key Features 
                            Precision-machined angles
                            Low signal attenuation
                            Optimized for shear wave generation
                            Compatible with encoded scanning systems
                            " />

            </div>
          )}



          {/* --- WÖHLER --- */}
          {product.id === 'wohler' && (
            <>
              {/* Main Category Selection */}
              <div className={`grid gap-4 mb-6 transition-all duration-500 ${wohlerMainCat ? 'grid-cols-4' : 'grid-cols-1 md:grid-cols-4'}`}>
                <button
                  onClick={() => { setWohlerMainCat('MEASURING'); setWohlerSubCat('FLUE_GAS'); }}
                  className={`group rounded-2xl border-2 transition-all duration-300 ${wohlerMainCat === 'MEASURING' ? 'border-[#0f6fff] bg-blue-50 shadow-sm p-2' : 'border-slate-100 bg-slate-50 p-6'
                    }`}
                >
                  <div className={`transition-all duration-500 flex items-center justify-center ${wohlerMainCat ? 'h-10 mb-1' : 'h-36 mb-4'}`}>
                    <img src={wohlerMeasuringIcon} alt="Measuring Instruments" className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className={`block text-center font-black uppercase transition-all ${wohlerMainCat ? 'text-[8px]' : 'text-sm'}`}>
                    Measuring Instruments
                  </span>
                </button>
                <button
                  onClick={() => { setWohlerMainCat('INSPECTION'); setWohlerSubCat('INSPECTION_CAMERAS'); }}
                  className={`group rounded-2xl border-2 transition-all duration-300 ${wohlerMainCat === 'INSPECTION' ? 'border-[#0f6fff] bg-blue-50 shadow-sm p-2' : 'border-slate-100 bg-slate-50 p-6'
                    }`}
                >
                  <div className={`transition-all duration-500 flex items-center justify-center ${wohlerMainCat ? 'h-10 mb-1' : 'h-36 mb-4'}`}>
                    <img src={wohlerInspectionIcon} alt="Inspection Systems" className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className={`block text-center font-black uppercase transition-all ${wohlerMainCat ? 'text-[8px]' : 'text-sm'}`}>
                    Inspection Systems
                  </span>
                </button>
                <button
                  onClick={() => { setWohlerMainCat('CLEANING'); setWohlerSubCat('VIPERS'); }}
                  className={`group rounded-2xl border-2 transition-all duration-300 ${wohlerMainCat === 'CLEANING' ? 'border-[#0f6fff] bg-blue-50 shadow-sm p-2' : 'border-slate-100 bg-slate-50 p-6'
                    }`}
                >
                  <div className={`transition-all duration-500 flex items-center justify-center ${wohlerMainCat ? 'h-10 mb-1' : 'h-36 mb-4'}`}>
                    <img src={cleaningIcon} alt="Cleaning Tools" className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className={`block text-center font-black uppercase transition-all ${wohlerMainCat ? 'text-[8px]' : 'text-sm'}`}>
                    Cleaning Tools
                  </span>
                </button>
              </div>

              {/* Sub-Category Navigation (Only shows when Main Cat is selected) */}
              {wohlerMainCat === 'MEASURING' && (
                <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-4">
                  {[
                    { id: 'FLUE_GAS', name: 'Flue Gas Analyser' },
                    { id: 'SOOT', name: 'Soot / Particulates' },
                    { id: 'PRESSURE', name: 'Pressure / Leakage' },
                    { id: 'VENTILATION', name: 'Ventilation / Air Quality' },
                    { id: 'TEMPERATURE', name: 'Temperature / Humidity' },
                    { id: 'REFRIGERATION', name: 'Refrigeration' }
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setWohlerSubCat(sub.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${wohlerSubCat === sub.id ? 'bg-[#0f6fff] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}

              {wohlerMainCat === 'INSPECTION' && (
                <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-4">
                  {[
                    { id: 'INSPECTION_CAMERAS', name: 'Inspection Cameras' },
                    { id: 'ENDOSCOPES', name: 'Endoscopes / Borescopes' },
                    { id: 'GLASS_MIRROR', name: 'Wöhler Glass Mirror' }
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setWohlerSubCat(sub.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${wohlerSubCat === sub.id ? 'bg-[#0f6fff] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}

              {wohlerMainCat === 'CLEANING' && (
                <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-4">
                  {[
                    { id: 'VIPERS', name: 'Vipers / Rotary Vipers / Rods' },
                    { id: 'AIR_PRESSURE', name: 'Air Pressure' },
                    { id: 'STARS_BRUSHES', name: 'Stars / Brushes' },
                    { id: 'DRAIN_CLEANING', name: 'Drain Cleaning Machines' }
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setWohlerSubCat(sub.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${wohlerSubCat === sub.id ? 'bg-[#0f6fff] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}

              {/* Product Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {wohlerSubCat === 'FLUE_GAS' && (
                  <>
                    <ProductCard title="Wöhler A 550 Flue Gas Analyser" img={a550Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/flue-gas-analyser/a-550-flue-gas-analyser.html" desc="As robust as cast iron, but as easy to operate as a smartphone." />
                    <ProductCard title="Wöhler TI 410 Dew point indication" img={ti410Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/flue-gas-analyser/ti-410-dew-point-indication.html" desc="For inspection of burner appliances for flue-gas spillage." />
                    <ProductCard title="Wöhler A 550 Industrial" img={a550IndImg} link="https://www.woehler-international.com/shop/products/measuring-instruments/flue-gas-analyser/a-550-industrial.html" desc="Efficiency, Emission, Supply Air, CO Ambient and Wood Moisture Testing." />
                    <ProductCard title="Wöhler A 450 Flue Gas Analyser" img={a450Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/flue-gas-analyser/a-450-flue-gas-analyser.html" desc="Reasonably priced flue gas analyser with user friendly touchscreen." />
                  </>
                )}

                {wohlerSubCat === 'SOOT' && (
                  <ProductCard title="Wöhler RP 72 Soot test pump" img={rp72Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/soot-particulates/rp-72-soot-test-pump.html" desc="For measuring the soot level manually." />
                )}

                {wohlerSubCat === 'PRESSURE' && (
                  <>
                    <ProductCard title="Wöhler DP 600 Leakage Tester" img={dp600Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/pressure-leakage/dp-600-leakage-tester.html" desc="Checks the tightness of exhaust ducts and chimneys automatically." />
                    <ProductCard title="Wöhler GS 220 Gas Sniffer" img={gs220Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/pressure-leakage/gs-220-gas-sniffer.html" desc="Leakage detection of gas lines carrying combustible gases." />
                    <ProductCard title="Wöhler DP 700 Leakage Tester" img={dp700Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/pressure-leakage/dp-700-leakage-tester.html" desc="Detects leakages in air ducts and components during production." />
                    <ProductCard title="Wöhler GS 300 Gas Leak Detector" img={gs300Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/pressure-leakage/gs-300-gas-leak-detector.html" desc="Helps to locate the gas leak at connection points easily." />
                    <ProductCard title="Wöhler M 603 Leakage Tester" img={m603Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/pressure-leakage/m-603-leakage-tester.html" desc="DVGW-certified measurement for utilities and high-standard clients." />
                    <ProductCard title="Wöhler SC 660 Smart Connect" img={sc660Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/pressure-leakage/sc-660-smart-connect.html" desc="Manages pressure measurements up to 60 bar with Bluetooth connection." />
                  </>
                )}

                {wohlerSubCat === 'VENTILATION' && (
                  <>
                    <ProductCard title="Wöhler DC 410 FLOW" img={dc410Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/ventilation-air-quality/dc-410-flow-pressure-differential-flow-meter.html" desc="Differential flow meter for pressure, air flow, and humidity." />
                    <ProductCard title="Wöhler CM 220 CO-Meter" img={cm220Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/ventilation-air-quality/cm-220-co-meter.html" desc="Measurement of CO concentration in the ambient air." />
                    <ProductCard title="Wöhler CDL 210 CO2 Data Logger" img={cdl210Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/ventilation-air-quality/cdl-series.html" desc="Continuous monitoring of carbon dioxide concentration." />
                    <ProductCard title="Wöhler FA 430 Fan Anemometer" img={fa430Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/ventilation-air-quality/fa-430-fan-anemometer.html" desc="Reliably determine air velocity and temperature at diffusers." />
                    <ProductCard title="Wöhler IQ 300 CO2 Meter" img={iq300Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/ventilation-air-quality/iq-300-co2-meter.html" desc="Monitoring air quality in classrooms and waiting rooms." />
                  </>
                )}

                {wohlerSubCat === 'TEMPERATURE' && (
                  <>
                    <ProductCard title="Wöhler DT 310" img={dt310Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/dt-310-differential-temperature-meter.html" desc="Simple measurement of differential temperature." />
                    <ProductCard title="Wöhler RF 220 Hygrotemp" img={rf220Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/rf-220-hygrotemp.html" desc="Measures relative humidity and air temperature." />
                    <ProductCard title="Wöhler HBF 420 Moisture Meter" img={hbf420Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/hbf-420-moisture-meter.html" desc="Assess moisture content of building materials." />
                    <ProductCard title="Wöhler HF 300 Wood moisture meter" img={hf300Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/hf-300-wood-moisture-meter.html" desc="Easy determination of wood moisture up to 5mm depth." />
                    <ProductCard title="Wöhler HF 550 Wood Moisture" img={hf550Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/hf-550-wood-moisture-meter.html" desc="TÜV tested instrument for measuring moisture of firewood logs and bulk materials." />
                    <ProductCard title="Wöhler IR Temp 310" img={ir310Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/ir-310-infrared-thermometer.html" desc="Contactless temperature measurement for wall surfaces and inaccessible places." />
                  </>
                )}
                {/* REFRIGERATION */}
                {wohlerSubCat === 'REFRIGERATION' && (
                  <>
                    <ProductCard title="Wöhler RL 200 Leak Detector" img={rl200Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/refrigeration/rl-200-refrigerant-leak-detector.html" desc="Sensitivity of 3g/a for reliable detection of even the smallest refrigerant leaks." />
                    <ProductCard title="Wöhler MR 400 Manifold" img={mr400Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/refrigeration/mr-400-refrigerant-manifold.html" desc="Versatile manifold for precise work on refrigeration systems and heat pumps." />
                    <ProductCard title="Wöhler RS 400 Refrigerant Scale" img={rs400Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/refrigeration/rs-400-refrigerant-scale.html" desc="Precise weight measurements for content quantities in pressure vessels." />
                    <ProductCard title="Wöhler RL 300 Leak Detector" img={rl300Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/refrigeration/rl-300-refrigerant-leak-detector.html" desc="Meets rigorous DIN EN 14624-2020 standards for exceptional sensitivity." />
                    <ProductCard title="Wöhler REC 400 Recovery Machine" img={rec400Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/refrigeration/rec-400-recovery-machine.html" desc="Reliable helper for extracting class A1, A2 and A2L refrigerants." />
                    <ProductCard title="Wöhler VP 400 Vacuum pump" img={vp400Img} link="https://www.woehler-international.com/shop/products/measuring-instruments/temperature-humidity/refrigeration/vp-400-vacuum-pump.html" desc="Powerful two-stage vacuum pump for standard refrigeration and heat pumps." />
                  </>
                )}

                {wohlerSubCat === 'INSPECTION_CAMERAS' && (
                  <>
                    <ProductCard title="Wöhler L 200 Locator" img={l200Img} link="https://www.woehler-international.com/shop/products/inspection-systems/inspection-cameras/l-200-locator.html" desc="The Wöhler L 200 Locator makes it possible to locate the Wöhler VIS Video Inspection Camera heads VIS 200 / 250 / 300 / 350 / 400 / 700 wirelessly within a pipeline. Damaged or soiled sections of pipe are displayed and precisely located on a graphic display, making pipe and sewer inspection quick and efficient." />
                    <ProductCard title="Wöhler VIS 700 HD-Video Inspection System" img={vis700Img} link="https://www.woehler-international.com/shop/products/inspection-systems/inspection-cameras/vis-700-video-inspection.html" desc="The Wöhler VIS 700 inspection camera offers precisely what professionals have been waiting for: Razor sharp images in HD quality, a focus function for focusing precisely on the object requiring attention, and practical control of the pan&tilt camera head by means of a joystick. Ideal conditions for the inspection of waste water pipes, flue gas and ventilation lines as well as NDT applications." />
                    <ProductCard title="Wöhler VIS 500 Inspection camera" img={vis500Img} link="https://www.woehler-international.com/shop/products/inspection-systems/inspection-cameras/vis-500-inspection-camera.html" desc="To get a clear view, rely on an inspection camera from the specialist: The Wöhler VIS 500 inspection camera offers the tried and tested case system with brand new technology - and this allows you to proceed even more purposefully during your operations. Thanks to the exchangeable camera heads, you are perfectly equipped for all operations." />
                    <ProductCard title="Wöhler VIS 750 HD inspection camera" img={vis750Img} link="https://www.woehler-international.com/shop/products/inspection-systems/inspection-cameras/vis-750-hd-inspection-camera.html" desc="With the Wöhler VIS 750 HD Inspection Camera, no pipe is too long and no corner too dark. You can easily spot even the tiniest leaks, the toughest blockages, and annoying root ingrowth. The easy-to-use design lets you get things done fast and effectively, because we understand that your time is super valuable. The Wöhler VIS 750 HD Inspection Camera stands out with its clever features, making it one-of-a-kind." />
                    <ProductCard title="Wöhler VIS 260 Inspection Camera" img={vis260Img} link="https://www.woehler-international.com/shop/products/inspection-systems/inspection-cameras/vis-260-inspection-camera.html" desc="With the new Wöhler VIS 260 Inspection Camera, inspecting small pipes is a breeze. The robust case system and slim 26 mm mini camera head can handle even multiple 90° bends and ensure quick start-up and reliable results – ideal for anyone who values clear solutions in everyday life." />
                    <ProductCard title="Wöhler VIS 360 Inspection camera" img={vis360Img} link="https://www.woehler-international.com/shop/products/inspection-systems/inspection-cameras/vis-360-inspektion-camera.html" desc="With the new Wöhler VIS 360 Inspection Camera, damage detection is easier and clearer than ever before – and you have everything under control. The 360° pan and 180° tilt camera head offers you a comprehensive all-round view – for fast, precise diagnoses and flawless results. Focus on your skills, because the Wöhler VIS 360 is your reliable partner for getting started in professional pipe inspection." />
                  </>
                )}

                {wohlerSubCat === 'ENDOSCOPES' && (
                  <>
                    <ProductCard title="Wöhler VE 320 Video-Endoscope" img={ve320Img} link="https://www.woehler-international.com/shop/products/inspection-systems/endoscopes-borescopes/ve-320-video-endoscope.html" desc="For inspection of inaccessible cavities (e.g. of roof insulations, exhaust pipes, sinks, fireplaces) with 5.5 mm, 8.5 mm, or 25 mm diameter probes and fire dampers." />
                    <ProductCard title="Wöhler VE 500 HD video endoscope" img={ve500Img} link="https://www.woehler-international.com/shop/products/inspection-systems/endoscopes-borescopes/ve-500-hd-video-endoscope.html" desc="The Wöhler VE 500 HD video endoscope is the perfect instrument for inspecting inaccessible cavities through even the smallest openings from Ø 6 mm. With a wide range of probes up to 10 m in length, it is suitable for many applications. The large screen with split screen mode makes it possible to see everything at a glance. The stand and the thread for magnetic mounting ensure that your hands are free in every area of application." />
                    <ProductCard title="Wöhler VE 400 HD-Videoscope" img={ve400Img} link="https://www.woehler-international.com/shop/products/inspection-systems/endoscopes-borescopes/ve-400-hd-videoskop.html" desc="The Wöhler VE 400 HD video endoscope is ideally suited for HD inspection of inaccessible cavities through smallest openings from Ø 6 mm (e.g. tile cross). Further areas of application are e.g. pre-wall installations, fireplaces, combustion chambers, connecting pieces, sinks or drain pipes, as the camera head is waterproof (protection class IP 67). With its Ø 5.5 mm, the endoscope is also suitable for inspecting inspection openings and fire dampers." />
                  </>
                )}

                {wohlerSubCat === 'GLASS_MIRROR' && (
                  <>
                    <ProductCard title="Wöhler Glass Mirror" img={glassMirrorImg} link="https://www.woehler-international.com/shop/products/inspection-systems/mirrors-dew-plates-smoke/glass-mirror.html" desc="Inspection of objects hard to reach\nInspection of chimneys\nBuilding inspection" />
                  </>
                )}

                {wohlerSubCat === 'VIPERS' && (
                  <>
                    <ProductCard title="Wöhler Viper L" img={viperLImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/vipers-rotary-vipers-rods/viper-l.html" desc="For sweeping chimneys, ventilation systems or pipes" />
                    <ProductCard title="Wöhler Viper M" img={viperMImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/vipers-rotary-vipers-rods/viper-m.html" desc="Perfect tool for cleaning flue gas systems, chimneys of up to 250 mm Ø as well as ducts and pipework" />
                    <ProductCard title="Wöhler Viper S" img={viperSImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/vipers-rotary-vipers-rods/viper-s.html" desc="Perfect tool to clean flue gas systems, chimneys as well as ducts and pipeworks" />
                    <ProductCard title="Wöhler Viper XL / XXL" img={viperXlImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/vipers-rotary-vipers-rods/viper-xl-xxl.html" desc="For sweeping large chimneys, ventilation systems or pipes" />
                    <ProductCard title="Wöhler Rotary Viper Heavy-Duty" img={rotaryViperHdImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/vipers-rotary-vipers-rods/rotary-viper-heavy-duty.html" desc="For chimney sweeping purposes." />
                    <ProductCard title="Wöhler Rotary Viper Vent" img={rotaryViperVentImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/vipers-rotary-vipers-rods/rotary-viper-vent.html" desc="Effective cleaning of dryer vents, duct and piping." />
                    <ProductCard title="Wöhler Snap & Sweep ® Soft" img={snapSweepSoftImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/vipers-rotary-vipers-rods/snap-sweep-r-soft.html" desc="With Wöhler Snap & Sweep you can clean ventilation systems quickly and thoroughly without the help of a second person. Various cleaning attachments are available for the cleaning system, which are attached to the rod with a click. This way you are optimally equipped for the situation on site. The rodes are robust but flexible and therefore perfectly suited for working in the ventilation pipe." />
                    <ProductCard title="Wöhler Snap & Sweep ® Regular" img={snapSweepRegularImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/vipers-rotary-vipers-rods/snap-sweep-r-regular.html" desc="With Wöhler Snap & Sweep quick and thorough sweeping is a simple one man show. Different cleaning tools can be connected to the sweeping rods with snap-in quick connectors. The perfect preparation for every on-site sweeping situation. The rods can be rotated by a cordless screwdriver or drill, so that even persistent soot will be easily removed." />
                  </>
                )}

                {wohlerSubCat === 'AIR_PRESSURE' && (
                  <>
                    <ProductCard title="Wöhler Compressed Air Cleaning" img={airCleaningImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/air-pressure/compressed-air-cleaning-1.html" desc="Appropriate for small, round ventilation pipes up to 125 mm Ø. The ideal instrument for cleaning ventilation pipes" />
                    <ProductCard title="Wöhler SF 300 Dust Collector" img={dustCollectorImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/air-pressure/sf-300-dust-collector.html" desc="For simple and effective cleaning of ventilation lines up to 300 mm Ø. The Dust Collector creates strong negative pressure to extract dirt and dust particles directly during the cleaning process." />
                  </>
                )}

                {wohlerSubCat === 'STARS_BRUSHES' && (
                  <>
                    <ProductCard title="Threaded Brush" img={threadedBrushImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/stars-brushes/threaded-brush.html" desc="Threaded brushes are available in different materials and sizes. Please check the downloads below for further information." />
                    <ProductCard title="Stars" img={starsImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/stars-brushes/stars.html" desc="Stars are available in different materials and sizes. Please check the download section below for further information." />
                    <ProductCard title="Boiler Brushes" img={boilerBrushesImg} link="https://www.woehler-international.com/shop/products/cleaning-tools/stars-brushes/boiler-brushes.html" desc="Boiler brushes are available in different materials and sizes. Please check the download section below for further information." />
                  </>
                )}

                {wohlerSubCat === 'DRAIN_CLEANING' && (
                  <>
                    <ProductCard title="Wöhler RM 200 Drain Cleaning Machine" img={rm200Img} link="https://www.woehler-international.com/shop/products/cleaning-tools/drain-cleaning-machines/rm-200-drain-cleaning-machine-1.html" desc="Small but powerful: The Wöhler RM 200 drain cleaning machine easily clears blockages in indoor pipes from Ø 40 to 100 mm. The smallest and lightest machine in the Wöhler pipe cleaning range can be carried anywhere by the plumber. The cleaning cables of Ø 16 mm each are clicked together as required, providing a working length of up to 40 m. The machine can also be used for the cleaning of pipes with a diameter of up to 100 mm" />
                    <ProductCard title="Wöhler RM 300 Drain Cleaning Machine" img={rm300Img} link="https://www.woehler-international.com/shop/products/cleaning-tools/drain-cleaning-machines/rm-300-drain-cleaning-machine-1.html" desc="Suitable for any application: The compact Wöhler RM 300 drain cleaning machine has a power output of 570 W. It easily removes blockages in both indoor and outdoor pipes. This means it easily clears blockages in both inner and outer pipes from Ø 40 to 150 mm. Three different cable diameters (8 mm, 16 mm and 22 mm) ensure that the optimum size can be selected for each pipe. The appropriate drill attachment can then be simply clicked into place. High-performance for all applications." />
                    <ProductCard title="Wöhler RM 400 Drain Cleaning Machine" img={rm400Img} link="https://www.woehler-international.com/shop/products/cleaning-tools/drain-cleaning-machines/rm-400-drain-cleaning-machine.html" desc="Working cleanly thanks to built-in cable: With the Wöhler RM 400 drain cleaning machine, transport, set-up and drain cleaning can be carried out cleanly and quickly. The machine including cable reel is pulled on wheels like a trolley. The plumber pulls the cleaning cable out of the reel on site and pushes it back in after cleaning. During cleaning, the auto-feed assists the insertion of the cable into the pipe. Different drilling attachments can be clicked on very easily with a snap lock. The convenient solution for indoor and outdoor use." />
                    <ProductCard title="Wöhler PU 100 Pipe Cleaning Pump" img={pu100Img} link="https://www.woehler-international.com/shop/products/cleaning-tools/drain-cleaning-machines/pu-100-pipe-cleaning-pump-1.html" desc="The little helper for a quick solution: Light blockages in pipes can be solved without effort with the Wöhler PU 100 pipe cleaning pump. Three easy-to-change adapters for different drains and an adjustable handle ensure flexible application options and easy handling. The inexpensive solution for light blockages." />
                  </>
                )}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
