module.exports = {
    url:'https://www.google.com/advanced_search?hl=en',
    elements:{
         mainQueryInput: 'input[name="as_q"]',
         languageDropdown:"#lr_button",
         lastUpdateDropdown:'#as_qdr_button',
         lastUpdateDropdownValue:'.goog-menuitem[value="m"]',
         submitButton: '.jfk-button[type="submit"]',
    },
    commands: [{
        setQuery(value){
            return this.setValue('@mainQueryInput', value);
        },
        selectFilter(selector, value){
            const page = this;
            page
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`)
            return this;
        },
        search(){
            return this.click('@submitButton')
        }
    }]
}