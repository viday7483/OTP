 (function(){
    const form = document.querySelector("#msg")
    
    form.addEventListener('submit',function(e){
        e.preventDefault()

        const message = document.querySelector('#message')
        const feedback = document.querySelector('.feedback')
        const messageContent = document.querySelector('.msg-content')

        if(message.value ===''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            },4000)
        } else{
            messageContent.textContent=message.value
            message.value = ''
        }
    })

})()