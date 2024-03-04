$(document).ready(function() {
    $('.add-to-cart').click(function() {
      var item = $(this).closest('.menu-item');
      var itemName = item.data('name');
      var itemPrice = parseFloat(item.data('price'));
  
      $('#cart ul').append('<li data-price="' + itemPrice + '">' + itemName + ' - $' + itemPrice +
        '<button class="remove-from-cart">Remove</button></li>');
  
      updateTotalPrice();
    });
  
    $('#cart').on('click', '.remove-from-cart', function() {
      var item = $(this).closest('li');
      var itemPrice = parseFloat(item.data('price'));
  
      item.remove();
  
      updateTotalPrice();
    });
  
    function updateTotalPrice() {
      var totalPrice = 0;
  
      $('#cart ul li').each(function() {
        totalPrice += parseFloat($(this).data('price'));
      });
  
      $('#total-price').text(totalPrice.toFixed(2));
    }
  });
  