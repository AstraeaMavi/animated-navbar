document.addEventListener ('DOMContentLoaded', function(){
    const header = document.querySelector('header');
    const container = document.getElementById ('container');
    const menuButton = document.getElementById ('menu');
    const links = document.querySelectorAll('a[href^="#"]');


    //function to handle the scroll
    function handleScroll(){
        container.classList.remove('menuopen');
        header.classList.toggle('sticky', window.scrollY >=100);
    }

    //function to handle menu button click
    function handleMenuButtonClick(){
        header.classList.remove('sticky');
        container.classList.toggle('menuopen');}


        //function to handle anchor links click

        function handleAnchorLinkClick(event){
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement= document.querySelector(targetId);
            if(targetElement){
                targetElement.scrollIntoView({behavior: 'smooth'
            });
            }

        }
        //function to close the menu when click outside and show the sitcky menu

        function handleCloseOutside(event){
            if(!menuButton.contains(event.target)){
                //check if the click was outside the menu button
                container.classList.remove('menuopen');
                header.classList.add('sticky');
            }

        }

        window.addEventListener('scroll',handleScroll);
        menuButton.addEventListener('click', handleMenuButtonClick);
        links.forEach(link => link.addEventListener('click', handleAnchorLinkClick));

        //list of clicks anywhere in the document
        document.addEventListener('click', handleCloseOutside);
    })