import $ from 'jquery';

$(function(){

  function toggleSettings(){

    $('button#settings-button').on('click', function(){

      $('.about').slideUp(230);

      $('.categories').slideUp(230);

      $('.settings').slideToggle(230);

    });

  }

  function toggleAbout(){

    $('button#about-button').on('click', function(){

      $('.settings').slideUp(230);

      $('.categories').slideUp(230);

      $('.about').slideToggle(230);

    });

  }

  function toggleCategories(){

    $('button#categories-button').on('click', function(){

      $('.settings').slideUp(230);

      $('.about').slideUp(230);

      $('.categories').slideToggle(230);

    });

  }

  function chooseNoteSize(){

    $('.size-settings li button#middle').addClass('active');

    $('.size-settings li button#small').on('click', function(){

      $('.size-settings li button#middle').removeClass('active');
      $('.size-settings li button#large').removeClass('active');
      $(this).addClass('active');

    });

    $('.size-settings li button#middle').on('click', function(){

      $('.size-settings li button#small').removeClass('active');
      $('.size-settings li button#large').removeClass('active');
      $(this).addClass('active');

    });

    $('.size-settings li button#large').on('click', function(){

      $('.size-settings li button#small').removeClass('active');
      $('.size-settings li button#middle').removeClass('active');
      $(this).addClass('active');

    });

    $('.size-settings li button#normal').addClass('active');

    $('.size-settings li button#wide').on('click', function(){

      $('.size-settings li button#normal').removeClass('active');
      $(this).addClass('active');

    });

    $('.size-settings li button#normal').on('click', function(){

      $('.size-settings li button#wide').removeClass('active');
      $(this).addClass('active');

    });

  }

  $('#input-empty').on('focus', function(){

    $(this).css('border-color', '#e7e7e7');
    $(this).attr('placeholder', 'Take your note...');

  });

  $('#change-name-input').on('focus', function(){

    $(this).attr('placeholder', '');

  });

  $('#change-name-input').on('focusout', function(){

    $(this).attr('placeholder', 'type here');

  });

  toggleCategories();

  toggleSettings();

  toggleAbout();

  chooseNoteSize();

});
