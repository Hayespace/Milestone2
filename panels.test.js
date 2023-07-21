const { removeActiveClasses } = require('./script'); 

describe('removeActiveClasses', () => {
 
  document.body.innerHTML = `
    <div class="panel active"></div>
    <div class="panel"></div>
    <div class="panel active"></div>
    <div class="panel"></div>
  `;

  test('should remove "active" class from all panels', () => {
   
    removeActiveClasses();

  
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
      expect(panel.classList.contains('active')).toBe(false);
    });
  });
});