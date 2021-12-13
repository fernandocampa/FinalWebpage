      function OldMacVerse(animal, sound) 
      // Assumes: animal is the name of an animal, sound is the sound it makes
      // Results: displays a verse of the song "Old MacDonald had a Farm" in outputDiv
      {
       document.getElementById('outputDiv').innerHTML =
       '<p>Old MacDonald had a farm, E-I-E-I-O.<br>' + 
       'And on that farm he had a ' + animal + ', E-I-E-I-O.<br>' + 
       'With a ' + sound + '-' + sound + ' here, and a ' + sound + '-' + sound + 
        ' there,<br>' + ' here a ' + sound + ', there a ' + sound + 
        ', everywhere a ' + sound + '-' + sound + '.<br>' + 
       'Old MacDonald had a farm, E-I-E-I-O.</p>';
       }