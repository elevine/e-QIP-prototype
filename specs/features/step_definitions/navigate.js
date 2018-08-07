const { client } = require('nightwatch-cucumber')

module.exports.navigateToSection = (section) => {
  const selector = '.usa-sidenav-list a[aria-controls="/form/' + section + '"]'
  return client
    .assert.visible(selector)
    .click(selector)
    .pause(1000)
    // .saveScreenshot('./screenshots/' + section + filenum() + '-navigate-section.png')
}

module.exports.navigateToSubsection = (section, subsection) => {
  const selector = '.usa-sidenav-sub_list a[href="/form/' + section + '/' + subsection + '"]'
  return client
    .assert.visible(selector)
    .click(selector)
    .click(selector)
    .pause(1000)
    // .saveScreenshot('./screenshots/' + section + filenum() + '-navigate-subsection.png')
}
