const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {
/*
        it('TC-021 Create button is clickable after 1-4 are field in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue(data.name);
            const inputGender = $$(sel.gender)[data.gender.she].click();
            browser.pause(2000);
            const inputAge = $(sel.age).setValue(data.age);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[data.storyType].click();
            const create = $(sel.submitButton).isEnabled();
            browser.pause(1000);
            expect(create).toEqual(true);
        });
*/
        it('TC-022 Create button is clickable after 1-4 are field in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const create = $(sel.submitButton).isEnabled();
            browser.pause(1000);
            expect(create).toEqual(true);
        });
    });

    describe('Other patch', function () {
        it('TC-023 gender he is working', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.she, data.age, data.storyType);
            const btn  = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
            browser.pause(1000);
        });
    });
});