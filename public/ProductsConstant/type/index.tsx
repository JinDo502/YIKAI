import parkerHydraulicGearPump from './Parker Hydraulic Gear Pump';
import kpHydraulicGearPump from './KP Hydraulic Gear Pump';

const productsMap = {
  'Parker Hydraulic Gear Pump': parkerHydraulicGearPump,
  'KP Hydraulic Gear Pump': kpHydraulicGearPump,
  PTO: kpHydraulicGearPump,
  'Tentsuki Hoist': kpHydraulicGearPump,
  'Special Hydraulic Products': kpHydraulicGearPump,
};

export default productsMap;
