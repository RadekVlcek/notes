import $ from 'jquery';

$(function(){


  function toggleSettings(){

    $('.settings').hide();

    $('button#settings-button').on('click', function(){

      $('.about').slideUp(230);

      $('.settings').slideToggle(230);

    });

  }

  function toggleAbout(){

    $('.about').hide();

    $('button#about-button').on('click', function(){

      $('.settings').slideUp(230);

      $('.about').slideToggle(230);

    });

  }

  function chooseNoteSize(){

    $('#note-size-settings li button#middle').addClass('active');

    $('#note-size-settings li button#small').on('click', function(){

      $('#note-size-settings li button#middle').removeClass('active');
      $('#note-size-settings li button#large').removeClass('active');
      $(this).addClass('active');

    });

    $('#note-size-settings li button#middle').on('click', function(){

      $('#note-size-settings li button#small').removeClass('active');
      $('#note-size-settings li button#large').removeClass('active');
      $(this).addClass('active');

    });

    $('#note-size-settings li button#large').on('click', function(){

      $('#note-size-settings li button#small').removeClass('active');
      $('#note-size-settings li button#middle').removeClass('active');
      $(this).addClass('active');

    });

  }

  toggleSettings();

  toggleAbout();

  chooseNoteSize();

});
