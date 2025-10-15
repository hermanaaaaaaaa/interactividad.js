const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const backgroundPicker = document.getElementById('background-picker');


function toggleTheme(){
        document.body.classList.toggle('dark-mode'); 
        if (document.body.classList.contains('dark-mode')){

        toggleThemeBtn.innerText = 'Activar Light Mode';  

    } else {
        toggleThemeBtn.innerText = 'Activar Dark Mode';
    

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
