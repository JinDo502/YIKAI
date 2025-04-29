import parkerHydraulicGearPump from './Parker Hydraulic Gear Pump';
import kpHydraulicGearPump from './KP Hydraulic Gear Pump';
import pto from './PTO';

const productsMap = {
  'Parker Hydraulic Gear Pump': parkerHydraulicGearPump,
  'KP Hydraulic Gear Pump': kpHydraulicGearPump,
  PTO: pto,
  'Tentsuki Hoist': kpHydraulicGearPump,
  'Special Hydraulic Products': kpHydraulicGearPump,
};

export default productsMap;
