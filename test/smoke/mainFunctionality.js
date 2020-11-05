const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-022 Create button is clickable after 1-4 are field in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const create = $(sel.submitButton).isEnabled();
            browser.pause(1000);
            expect(create).toEqual(true);
        });
    });

    describe('Other patch', function () {
        it('TC-023 gender she is working', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.she, data.age, data.storyType);
            browser.pause(1000);
            const btn  = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
            browser.pause(1000);
        });

        it('TC-024 gender he is working', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.he, data.age, data.storyType);
            browser.pause(1000);
            const btn  = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
            browser.pause(1000);
        });
        it('TC-025 gender it is working', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.it, data.age, data.storyType);
            browser.pause(1000);
            const btn  = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
            browser.pause(1000);
        });
    });
});