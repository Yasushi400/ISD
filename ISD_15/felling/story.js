$(document).on("textarea",".story",function(){
    var that = $(this);
    var inputW =$(that).val().offsetWidth;
    if ( inputW >= 50){
        $(that).css('width', inputW + 'px');
    }
});