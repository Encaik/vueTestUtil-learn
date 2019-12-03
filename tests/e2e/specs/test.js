module.exports = {
  "Demo test baidu": function(browser) {
    browser
      .url("https://www.baidu.com/")
      .waitForElementVisible("body")
      .assert.titleContains("百度一下，你就知道")
      .assert.visible("#kw")
      .setValue("#kw", "vue")
      .assert.visible("input[type=submit]")
      .click("input[type=submit]")
      .assert.containsText("#content_left", "Vue.js")
      .click(".opr-recommends-merge-mask")
      .assert.containsText("#content_left", "Bootstrap")
      .end();
  }
  // "@disabled": false,
  // "default e2e tests": browser => {
  //   browser
  //     .init()
  //     .waitForElementVisible("#app")
  //     .assert.elementPresent(".hello")
  //     .assert.containsText("h1", "Welcome to Your Vue.js App")
  //     .assert.elementCount("img", 1)
  //     .end();
  // }

  // "example e2e test using a custom command": browser => {
  //   browser
  //     .openHomepage()
  //     .assert.elementPresent(".hello")
  //     .end();
  // }
};
