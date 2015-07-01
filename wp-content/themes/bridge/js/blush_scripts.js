$j( ".pack-detail-toggle" ).click(function() {
      $j(this).siblings( ".package-details" ).fadeToggle( "fast", "linear" );
      $j(this).html(($j('.pack-detail-toggle').text() == 'Show Package Details') ? 'Hide Package Details' : 'Show Package Details');
});
