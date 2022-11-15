
import DatVeService from './DatVeService/DatVeService';
import PhimServices from './PhimService/PhimServices';
import QLNDService from './QLNDService/QLNDService';
import RapServices from './RapService/RapServices';


export const rapService = new RapServices();
export const phimService = new PhimServices();
export const datVeService = new DatVeService();

export const qLNDService = new QLNDService();