/**
 * @jest-environment jsdom
 */

const { removeActiveClasses } = require('./script');

describe('removeActiveClasses', () => {
  test('should remove "active" class from all panels', () => {
   
    document.body.innerHTML = `
      <div class="panel active"></div>
      <div class="panel"></div>
      <div class="panel active"></div>
      <div class="panel"></div>
    `;

    removeActiveClasses();


    const panels = document.querySelectorAll('.panel');

 
    panels.forEach(panel => {
      expect(panel.classList.contains('active')).toBe(false);
    });
  });
});