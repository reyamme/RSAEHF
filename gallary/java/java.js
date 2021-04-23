$(document).ready(function() {
    $('#autoWidth').lightSlider({
        pager:false,
        prevHtml : '<i class="fa fa-arrow-circle-left"></i>',
        nextHtml : '<span class="custom-next-html"><i class="fa fa-arrow-circle-right"></i></span>',
        controls: true,
        auto:true,
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  

$("img").click(function(){
    $('.pp').hide();

});
});

    