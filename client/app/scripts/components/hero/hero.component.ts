import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'section.hero-image.search-filter-middle.height-500',
  templateUrl: './scripts/components/hero/hero.component.html'
})

export class HeroComponent implements OnInit {
  ngOnInit() {
    this.setInputsWidth();

    var select = $('select');
    if (select.length > 0 ){
      select.selectpicker();
    }
    var bootstrapSelect = $('.bootstrap-select');
    var dropDownMenu = $('.dropdown-menu');
    bootstrapSelect.on('shown.bs.dropdown', function () {
      dropDownMenu.removeClass('animation-fade-out');
      dropDownMenu.addClass('animation-fade-in');
    });
    bootstrapSelect.on('hide.bs.dropdown', function () {
      dropDownMenu.removeClass('animation-fade-in');
      dropDownMenu.addClass('animation-fade-out');
    });
    bootstrapSelect.on('hidden.bs.dropdown', function () {
      var _this = $(this);
      $(_this).addClass('open');
      setTimeout(function() {
        $(_this).removeClass('open');
      }, 100);
    });
  }

  setInputsWidth(){
    var $inputRow = $('.search-bar.horizontal .input-row');
    for( var i=0; i<$inputRow.length; i++ ){
      if( $inputRow.find( $('button[type="submit"]') ).length ){
        $inputRow.find('.form-group:last').css('width','initial');
      }
    }

    var searchBar =  $('.search-bar.horizontal .form-group');
    for( var a=0; a<searchBar.length; a++ ){
      if( searchBar.length <= ( 1 + 1 ) ){
        $('.main-search').addClass('inputs-1');
      }
      else if( searchBar.length <= ( 2 + 1 ) ){
        $('.main-search').addClass('inputs-2');
      }
      else if( searchBar.length <= ( 3 + 1 ) ){
        $('.main-search').addClass('inputs-3');
      }
      else if( searchBar.length <= ( 4 + 1 ) ){
        $('.main-search').addClass('inputs-4');
      }
      else if( searchBar.length <= ( 5 + 1 ) ){
        $('.main-search').addClass('inputs-5');
      }
      else {
        $('.main-search').addClass('inputs-4');
      }
      if( $('.search-bar.horizontal .form-group label').length > 0 ){
        $('.search-bar.horizontal .form-group:last-child button').css('margin-top', 25)
      }
    }
  }
}
