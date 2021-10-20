$(() => {

  var round = 0;

  var global = 0;

  $('#roll').click(function() {

    let roll = Math.floor(Math.random() * 6) + 1;

    switch (roll) {
      case 1:
        $('#DD').html('<img src="../Images/dé n°1.png" alt="Dé">');
        round = 0
        break;
      case 2:
        $('#DD').html('<img src="../Images/dé n°2.png" alt="Dé">');
        round += 2
        break;
      case 3:
        $('#DD').html('<img src="../Images/dé n°3.png" alt="Dé">');
        round += 3
        break;
      case 4:
        $('#DD').html('<img src="../Images/dé n°4.png" alt="Dé">');
        round += 4
        break;
      case 5:
       $('#DD').html('<img src="../Images/dé n°5.png" alt="Dé">');
       round += 5
        break;
      case 6:
        $('#DD').html('<img src="../Images/dé n°6.png" alt="Dé">');
        round += 6
        break;
      default:
        $('#DD').html('<img src="../Images/dé n°1.png" alt="Dé">');
    }
  $('#round').text(round)
  })

  $('#hold').click(function() {
    global += round 
    $('#global').text(global)
    ù
    $('#round').text(0)
    round = 0
  })

})