module.exports = {
    '@tags':['google'],
    '@disabled':true,
    'Google advanced search : Elon muks '(browser) {

        const mainQuery = 'Elon Musk';

         const page = browser.page.googleSearchAdvancedSearch();


        page
            .navigate()
            .setQuery(mainQuery )
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search()


            .assert.urlContains('as_q=Elon+Musk',' Params: Query is elon Musk')
            .assert.urlContains('lr=lang_it',' Params: Language is italian')
            .assert.urlContains('as_qdr',' Params: Time period is last month')
            

            const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
            const resultsPageLanguagSelector = '.KTBKoe';
            // const resultsPageLastUpdateSelector = '.hdtb-mn-hd .KTBKoe p';

            browser.assert.visible(resultsPageQuerySelector,'UI: Elon Musk is set in the query input')
            browser.assert.containsText(resultsPageLanguagSelector,'Recherche dans les pages en Italien', 'UI: Language is set to italian')
            // browser.assert.containsText(resultsPageLastUpdateSelector,'Moins d\'un mois','UI: Language is set to past month')
            browser.saveScreenshot('tests_output/google.png')

    }
}