import { Config } from 'selenium-appium'

xdescribe('Timeout example', () => {

    test("Timer testing", () => {
        Config.setWaitForPageTimeout(100);
        expect(Config.getWaitForPageTimeout()).toBe(100);

        Config.setWaitForTimeout(100);
        expect(Config.getWaitForTimeout()).toBe(100);
    });
});