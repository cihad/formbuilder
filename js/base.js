$(function(){

  // callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( ".noneVisible" ).removeClass( "noneVisible" );
      $( "#target .inputs" ).sortable( "refresh" );
    });
  };


  $( '#source li a' ).click(function() {
    $cloned = $( this ).closest('li').find('.control-group').clone().addClass('noneVisible new');

    $( '#target .inputs' ).append($cloned);

    $( this ).effect( "transfer", { to: '.noneVisible' }, 400, callback);
    
  });

  $( "#target .inputs" ).sortable({
    cursor: "move"
  });

  $("#target").delegate(".control-group", "click", function(e){
    $(this).popover({
      content: $(this).find('.form-elements').html(),
      trigger: 'manual',
      placement: 'left',
    })
    
    $(this).popover('toggle');
  });

})