describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should scroll to bottom', async () => {
    await element(by.id('scroll')).scrollTo('bottom')
  });

})