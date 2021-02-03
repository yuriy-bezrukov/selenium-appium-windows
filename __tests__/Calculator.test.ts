import { driver, By2, windowsAppDriverCapabilities } from 'selenium-appium'
import { calculatorAppId } from '../Setup'

jest.setTimeout(50000);

const capabilites = windowsAppDriverCapabilities(calculatorAppId)

beforeAll(() => {
  return driver.startWithCapabilities(capabilites);
});

afterAll(() => {
  return driver.quit();
});

async function getCalculatorResultText() {
  const text = await By2.nativeAccessibilityId('CalculatorResults').getText();
  return text.replace('Display is', '').trim();
}

describe('Addition', () => {

  beforeEach(() => {
    return By2.nativeName('Clear').click();
  });

  test('Addition', async () => {
    await By2.nativeName('One').click();
    await By2.nativeName('Plus').click();
    await By2.nativeName('Seven').click();
    await By2.nativeName('Equals').click();
    expect(await getCalculatorResultText()).toBe('8');
  });

  xtest('Division', async () => {
    await By2.nativeAccessibilityId('num8Button').click();
    await By2.nativeAccessibilityId('num8Button').click();
    await By2.nativeAccessibilityId('divideButton').click();
    await By2.nativeAccessibilityId('num1Button').click();
    await By2.nativeAccessibilityId('num1Button').click();
    await By2.nativeAccessibilityId('equalButton').click();
    expect(await getCalculatorResultText()).toBe('8');
  });

  xtest('Multiplication', async () => {
    await By2.nativeXpath("//Button[@Name='Nine']").click();
    await By2.nativeXpath("//Button[@Name='Multiply by']").click();
    await By2.nativeXpath("//Button[@Name='Nine']").click();
    await By2.nativeXpath("//Button[@Name='Equals']").click();
    expect(await getCalculatorResultText()).toBe('81');
  });

  xtest('Subtraction', async () => {
    await By2.nativeXpath("//Button[@AutomationId=\"num9Button\"]").click();
    await By2.nativeXpath("//Button[@AutomationId=\"minusButton\"]").click();
    await By2.nativeXpath("//Button[@AutomationId=\"num1Button\"]").click();
    await By2.nativeXpath("//Button[@AutomationId=\"equalButton\"]").click();
    expect(await getCalculatorResultText()).toBe('8');
  });

});