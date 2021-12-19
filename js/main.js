$(function(){
    $('.btn').click(function(e){
        e.preventDefault();

        let title = $('#title').val();
        let author = $('#author').val();
        let secKey = $('#secKey').val();
        let date = $('#date').val();

        if(title == 0 || author == 0 || secKey == 0 || date == 0 ){
            $('.added-modal2').css('display','flex'),
            $('.added-modal2').fadeOut(3000);
        }else{
            $('.added-modal').css('display','flex'),
            $('.added-modal').fadeOut(3000);
            $("#end").append(
                '<tr class="row w-full"><td id="titlee" class="col-5 d-flex flex-wrap">'+ title +'</td><td id="authorr" class="col-2 d-flex flex-wrap">'+ author +'</td><td id="keyy" class="col-2 d-flex flex-wrap">'+ secKey +'</td><td id="datee" class="col-2 d-flex flex-wrap">'+ date +'</td><td id="delete" class="col-1 d-flex justify-content-end"><a href="#"><i class="fas fa-close"></i></a></td></tr>'
            );
        };

        $('.fa-close').click(function(){
            $(this).parent().parent().parent().remove()
        });
    });
    
    


});