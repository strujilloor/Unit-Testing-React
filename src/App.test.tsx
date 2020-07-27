import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Es lo unico que tenemos que hacer para configurar Emzyme dentro de nuestro testing, para cada archivo de test que vayas a crear
Enzyme.configure({ adapter: new Adapter() });