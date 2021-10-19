$(() => {

  let RR = 0

  $('#roll').click(function () {
    Math.floor(Math.random() * 6) + 1;
  })

  let RR = 0

  switch (RR) {
    case 1:
      $('#DD').html('<img src="../Images/dé n°1.png" alt="Dé">');
      break;
    case 2:
      $('#DD').html('<img src="../Images/dé n°2.png" alt="Dé">');
      break;
    case 3:
      $('#DD').html('<img src="../Images/dé n°3.png" alt="Dé">');
      break;
    case 4:
      $('#DD').html('<img src="../Images/dé n°4.png" alt="Dé">');
      break;
    case 5:
      $('#DD').html('<img src="../Images/dé n°5.png" alt="Dé">');
      break;
    case 6:
      $('#DD').html('<img src="../Images/dé n°6.png" alt="Dé">');
      break;
      default:
        $('#DD').html('<img src="../Images/dé n°1.png" alt="Dé">');
  }


})