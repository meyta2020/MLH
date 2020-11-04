const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are field in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue(data.name);
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(data.age);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.submitButton).isEnabled();
            browser.pause(1000);
            expect(create).toEqual(true);
        });
    });
});