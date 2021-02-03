import { driver, windowsAppDriverCapabilities } from 'selenium-appium'
import CalculatorPage from '../Pages/CalculatorPage'
import { calculatorAppId } from '../Setup'

jest.setTimeout(50000);

const capabilites = windowsAppDriverCapabilities(calculatorAppId)

beforeAll(() => {
  return driver.startWithCapabilities(capabilites);
});

afterAll(() => {
  return driver.quit();
});


xdescribe('Calulator Test', () => {
  
  beforeEach(async () => {
    await CalculatorPage.waitForPageLoaded();
    await CalculatorPage.clearButton.click();
  });

  test('Addition', async () => {
    expect(await CalculatorPage.plus('1', '7')).toBe('8');
  });

  test('Division', async () => {
    expect(await CalculatorPage.divid('88', '11')).toBe('8');
  });

  test('Multiplication', async () => {
    expect(await CalculatorPage.multiply('9', '9')).toBe('81');
  });

  test('Subtraction', async () => {
    expect(await CalculatorPage.minus('9', '1')).toBe('8');
  });
});