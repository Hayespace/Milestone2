const { removeActiveClasses } = require('./script');

describe("removeActiveClasses", () => {
    test("should remove 'active' class from all panels", () => {
       
        removeActiveClasses();

        global.panels.forEach(panel => {
            expect(panel.classList.remove).toHaveBeenCalledWith('active');
        });
    });
});