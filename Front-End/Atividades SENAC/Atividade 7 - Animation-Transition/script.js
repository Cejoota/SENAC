function robomover() {
    
    const robo = document.getElementById('robotrom');
    
    robo.addEventListener('click', () => {
        robo.classList.remove('robo-js');
        
        void robo.offsetWidth;
        
        robo.classList.add('robo-js');
    });
}