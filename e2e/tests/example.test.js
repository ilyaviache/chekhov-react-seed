const timeout = 5000

describe('/ (Example Page)', () => {
  let page
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage()
    await page.goto('http://localhost:3000')
  }, timeout)

  afterAll(async () => {
    await page.close()
  })

  it('it show click counter', async () => {
    await page.click('a[href="/example"]')

    const defaultCounter = await page.evaluate(() => (
      document.querySelector('#click-counter').textContent
    ))
    expect(defaultCounter).toEqual('0')

    await page.click('#counter')

    const newCounter = await page.evaluate(() => (
      document.querySelector('#click-counter').textContent
    ))
    expect(newCounter).toEqual('1')
  })
}, timeout)
