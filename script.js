$(document).ready(function() {
    // Tambahkan item ke keranjang
    $('.add-to-cart').click(function() {
      var item = $(this).closest('.menu-item');
      var itemName = item.data('name');
      var itemPrice = parseFloat(item.data('price'));
  
      // Tambahkan item ke keranjang
      $('#cart ul').append('<li data-price="' + itemPrice + '">' + itemName + ' - $' + itemPrice +
        '<button class="remove-from-cart">Remove</button></li>');
  
      // Hitung dan perbarui total harga
      updateTotalPrice();
    });
  
    // Hapus item dari keranjang
    $('#cart').on('click', '.remove-from-cart', function() {
      var item = $(this).closest('li');
      var itemPrice = parseFloat(item.data('price'));
  
      // Hapus item dari keranjang
      item.remove();
  
      // Hitung dan perbarui total harga
      updateTotalPrice();
    });
  
    function updateTotalPrice() {
      var totalPrice = 0;
  
      // Hitung total harga berdasarkan item di keranjang
      $('#cart ul li').each(function() {
        totalPrice += parseFloat($(this).data('price'));
      });
  
      // Perbarui total harga
      $('#total-price').text(totalPrice.toFixed(2));
    }
  });
  