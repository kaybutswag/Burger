$( document ).ready(function() {
  $(".order-status").on("click", function(event) {
    var id = $(this).data("id");
    var newstat = $(this).data("newstat");
    console.log(newstat);

    var newOrderState= {
      devoured:!newstat
    };

    


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newOrderState
    }).then(
      function() {
        console.log("changed statuts");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#neworder").val().trim(),
      devoured:false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-order").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted order", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});