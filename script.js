let show = document.querySelector('.fa-eye-slash');
let input = document.querySelector('input')
let check = 0;

show.addEventListener('click',()=>{
    if(check == 0){
        input.type = 'text';
        check = 1;
        show.classList.add('fa-eye')
    }
    else{
        show.classList.remove('fa-eye')
        input.type = 'password'
        check = 0;
    }
})