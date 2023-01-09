
function startPage() {

    var currentDate = dayjs().format('MMMM D, YYYY');
    var currentTime = dayjs().format('HH');
    

    $('#currentDay').text(currentDate);
    


    $('button').on('click', function(event) {



        var textAreaInput = $(this).siblings('textarea').val()
        var textAreaId = $(this).parent().attr('id')

        localStorage.setItem(textAreaId, textAreaInput)




    });



    $('#9 textarea').val(localStorage.getItem('9'))
    $('#10 textarea').val(localStorage.getItem('10'))
    $('#11 textarea').val(localStorage.getItem('11'))
    $('#12 textarea').val(localStorage.getItem('12'))
    $('#13 textarea').val(localStorage.getItem('13'))
    $('#14 textarea').val(localStorage.getItem('14'))
    $('#15 textarea').val(localStorage.getItem('15'))
    $('#16 textarea').val(localStorage.getItem('16'))
    $('#17 textarea').val(localStorage.getItem('17'))

  



   var parsTime = Number.parseInt(currentTime)
    
    var idEl = ['9' , '10' , '11' , '12' , '13' , '14' , '15' , '16' , '17']

    
   

    for (let i = 0; i < idEl.length; i++) {


        var divId = $( '#' + idEl[i] ).attr('id')
        var parsId = Number.parseInt(divId) 



	        if ( parsId < parsTime ) {
	
	            $('#'+idEl[i]).children('textarea').addClass('past')
	    
	            console.log("past")
	        
	        
	        } else if ( parsId == parsTime ) {
	        
	           $('#'+idEl[i]).children('textarea').addClass('present')
	
	            console.log('present')
	        
	        
	        } else {
	        
	           $('#'+idEl[i]).children('textarea').addClass('future')
	
	            console.log('future')
	
	            
	        
	        }

            // console.log(divId)
            // console.log(parsId)
            // console.log(parsTime)
            // console.log(element)
            


    }







  };

  startPage()




