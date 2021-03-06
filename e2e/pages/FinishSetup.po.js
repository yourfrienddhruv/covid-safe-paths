const buttonlabel = 'Finish Setup';
const screenText = 'All finished';
const screenshotText = 'Finish Setup Page';

class EnableLocation {
  async tapButton() {
    await element(by.label(buttonlabel)).tap();
  }

  async takeScreenshot() {
    await device.takeScreenshot(screenshotText);
  }

  async isOnScreen() {
    await expect(element(by.text(screenText))).toBeVisible();
  }
}

export default new EnableLocation();
