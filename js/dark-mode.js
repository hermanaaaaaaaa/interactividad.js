const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');


function toggleTheme(){
        document.body.classList.toggle('dark'); 
        if (document.body.classList.contains('dark')){

        //toggleThemeBtn.innerText = 'Activar Light Mode';  
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'; 

    } else {
        //toggleThemeBtn.innerText = 'Activar Dark Mode';
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'; 
    

    };
}

toggleThemeBtn.addEventListener('click',function (){
    toggleTheme()
})


colorPicker.addEventListener('change', function() {
    document.body.style.color = colorPicker.value;
});

backgroundPicker.addEventListener('inout', function() {
    document.body.style.backgroundColor = backgroundPicker.value;
});
