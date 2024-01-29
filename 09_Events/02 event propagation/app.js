document.addEventListener('DOMContentLoaded', function() {
    const outer = document.getElementById('outer');
    const middle = document.getElementById('middle');
    const inner = document.getElementById('inner');
  
    // Capturing Phase
    outer.addEventListener('click', function(event) {
      console.log('Capturing Phase - Outer');
    }, true);
  
    middle.addEventListener('click', function(event) {
      console.log('Capturing Phase - Middle');
    }, true);
  
    inner.addEventListener('click', function(event) {
      console.log('Capturing Phase - Inner');
    }, true);
  
    // Bubbling Phase
    outer.addEventListener('click', function(event) {
      console.log('Bubbling Phase - Outer');
    });
  
    middle.addEventListener('click', function(event) {
      console.log('Bubbling Phase - Middle');
    });
  
    inner.addEventListener('click', function(event) {
      console.log('Bubbling Phase - Inner');
    });
  });
  