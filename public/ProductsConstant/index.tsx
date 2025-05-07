import parkerHydraulicGearPump from './Hydraulic Gear Pump/Parker';
import kpHydraulicGearPump from './Hydraulic Gear Pump/KP';
import pto from './PTO';
import tentsukiHoist from './Tentsuki Hoist';
import SpecialHydraulicProducts from './Accessory Part';
import CustomMade from './Custom-made';

const productsMap = {
  'Hydraulic Gear Pump': {
    name: 'Hydraulic Gear Pump',
    products: [],
    children: [
      { name: 'Parker', products: parkerHydraulicGearPump },
      { name: 'KP', products: kpHydraulicGearPump },
    ],
  },
  PTO: { name: 'PTO', products: pto, children: [] },
  'Tentsuki Hoist': { name: 'Tentsuki Hoist', products: tentsukiHoist, children: [] },
  'Accessory Part': { name: 'Accessory Part', products: SpecialHydraulicProducts, children: [] },
  'Custom-made': { name: 'Custom-made', products: CustomMade, children: [] },
};

export default productsMap;
