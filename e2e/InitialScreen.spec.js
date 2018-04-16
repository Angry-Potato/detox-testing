describe('InitialScreen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('default view', async () => {
    await waitFor(element(by.id('InitialScreen')))
      .toExist()
      .withTimeout(50000);
    await expect(element(by.id('InitialScreen'))).toExist();
    await expect(element(by.text('Shake your phone to open the developer menu.'))).toExist();
  });
});
