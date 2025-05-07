import parkerHydraulicGearPump from './Parker Hydraulic Gear Pump';
import kpHydraulicGearPump from './KP Hydraulic Gear Pump';
import pto from './PTO';
import tentsukiHoist from './Tentsuki Hoist';
import SpecialHydraulicProducts from './Special Hydraulic Products';
import CustomMade from './Custom-made';
const productsMap = {
  'Parker Hydraulic Gear Pump': parkerHydraulicGearPump,
  'KP Hydraulic Gear Pump': kpHydraulicGearPump,
  PTO: pto,
  'Tentsuki Hoist': tentsukiHoist,
  'Special Hydraulic Products': SpecialHydraulicProducts,
  'Custom-made': CustomMade,
};

export default productsMap;
