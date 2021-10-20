$(() => {

  $( "#new" ).click(function() {
    $('#global1').empty();
    $('#global2').empty();
    $('#round1').empty();
    $('#round2').empty();
})

  var round1 = 0;

  var round2 = 0;

  var global1 = 0;

  var global2 = 0;

  var player1 = true;

  $('#hold').click(function() {

    if (player1) {
      global1 += round1
      $('#global1').text(global1)
  
      $('#round1').text(0)
      round1 = 0
    } else {
      global2 += round2 
      $('#global2').text(global2)
  
      $('#round2').text(0)
      round2 = 0
    }
    player1 = !player1

    if (global1 >= 100) {
      alert('VICTOIRE DU JOUEUR 1')
    } else if (global2 >= 100){
      alert('VICTOIRE DU JOUEUR 2')
    }
  })

  $('#roll').click(function() {

    let roll = Math.floor(Math.random() * 6) + 1;

    if (player1) {
      switch (roll) {
        case 1:
          $('#DD').html('<img src="../Images/dé n°1.png" alt="Dé">');
          round1 = 0
          player1 = !player1
          break;
        case 2:
          $('#DD').html('<img src="../Images/dé n°2.png" alt="Dé">');
          round1 += 2
          break;
        case 3:
          $('#DD').html('<img src="../Images/dé n°3.png" alt="Dé">');
          round1 += 3
          break;
        case 4:
          $('#DD').html('<img src="../Images/dé n°4.png" alt="Dé">');
          round1 += 4
          break;
        case 5:
         $('#DD').html('<img src="../Images/dé n°5.png" alt="Dé">');
         round1 += 5
          break;
        case 6:
          $('#DD').html('<img src="../Images/dé n°6.png" alt="Dé">');
          round1 += 6
          break;
        default:
          $('#DD').html('<img src="../Images/dé n°1.png" alt="Dé">');
      }
    $('#round1').text(round1)

    } else {
      switch (roll) {
        case 1:
          $('#DD').html('<img src="../Images/dé n°1.png" alt="Dé">');
          player1 = !player1
          round2 = 0
          break;
        case 2:
          $('#DD').html('<img src="../Images/dé n°2.png" alt="Dé">');
          round2 += 2
          break;
        case 3:
          $('#DD').html('<img src="../Images/dé n°3.png" alt="Dé">');
          round2 += 3
          break;
        case 4:
          $('#DD').html('<img src="../Images/dé n°4.png" alt="Dé">');
          round2 += 4
          break;
        case 5:
         $('#DD').html('<img src="../Images/dé n°5.png" alt="Dé">');
         round2 += 5
          break;
        case 6:
          $('#DD').html('<img src="../Images/dé n°6.png" alt="Dé">');
          round2 += 6
          break;
        default:
          $('#DD').html('<img src="../Images/dé n°1.png" alt="Dé">');
      }
    $('#round2').text(round2)
    }
  })
})