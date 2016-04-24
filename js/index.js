

$(document).ready(init);

/*window.onload = function initialize() {
	init();
};*/

function init() {
    var label = document.getElementById('discrete');
    if (label) {
        label.addEventListener('click', helloWorld);
    }
    
    var btnChangeUl = document.getElementById('change-ul');
    if (btnChangeUl)
        btnChangeUl.addEventListener('click', changeUlAppearence);
    
    $('#change-ul-jquery').on('click', changeUlAppearenceWithjQuery);
    
    $('#btn-this').on('click', function() {
        $(this).parent().toggleClass('red');
    });
    
    setupjQueryEvents();    
};

function helloWorld() {
    alert('Mantenha o JavaScript discreto :)');
};

function changeUlAppearence() {
    var mutableUl = document.getElementById('ul-mutable');
    if (mutableUl) {
        if (mutableUl.className.match(/english/))
            mutableUl.className = mutableUl.className.replace('english', '');
        else
            mutableUl.className = mutableUl.className.trim().concat(' english');
    }
};

function changeUlAppearenceWithjQuery() {
    $('#ul-mutable-jquery').toggleClass('english');
};

function setupjQueryEvents() {
    $('#btn-remove-block').on('click', changeCodeVisibility);
    $('#btn-anim-block').on('click', slideCode);
    $("#btn-ajax").on('click', getMovieInfoByAjax);
    $('.close-modal').on('click', closeModal);
    $("#btn-ajax-json").on('click', getMovieToJSON);
};

function changeCodeVisibility() {
    var block = $('#remove-block');
    if (block.is(':hidden')) {
        block.show();
        $(this).text('Hide code');
    } else {
        block.hide();
        $(this).text('Show code');
    }
};

function slideCode() {
    var block = $('#anim-block');
    if (block.is(':hidden')) {
        block.slideDown();
        $(this).text('Slide up');
    } else {
        block.slideUp();
        $(this).text('Slide down');
    }
};

function getMovieInfoByAjax() {
    $.ajax({
        url: "https://blueberry-custard-87466.herokuapp.com/movies/2",
        crossDomain: true,
        success: successMovieInfo,
        error: function(xhr, status, error) {
            console.log("Error "+ error);
            console.log("Status "+ status);
        }
    });
};

function successMovieInfo(result) {
    $('.modal-content').remove();
    
    var div = $('<div class="modal-content">');
    div.html(result);
    var content = div.find('#main');
    div.html(content.find('h2'));
    div.append(content.find('#details'));
    
    $(div).appendTo('.modal-container');
    $('.modal').show();
    
    setTimeout(function() {// workaround to close the dialog
        $('.modal').fadeOut();
    }, 3000);
};

function closeModal() {
    console.log('passou no close');
    $(this).parent().parent().hide();
};

function getMovieToJSON() {
    $.ajax({
        url: "https://edx-ruby-rails-rodrigoadfaria-1.c9users.io/movies/3/to_json",
        crossDomain: true,
        success: successMovieJSON,
        error: function(xhr, status, error) {
            console.log("Error "+ error);
        }
    });    
};

function successMovieJSON(json) {
    var content = JSON.stringify(json);
    var properties = content.replaceAll('":', '" : ').split(',');
    $('#json-home').html('');
    for (p in properties)
        $('#json-home').append(properties[p]).append(', \n');
};

String.prototype.replaceAll = function(pattern, replacement) {
    var target = this;
    return target.replace(new RegExp(pattern, 'g'), replacement);
};