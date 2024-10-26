
        const main = document.getElementById('main');
        const text = document.getElementById('text');
        const backgroundImage = document.getElementById('backgroundImage');


        main.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5; 
            const y = (e.clientY / window.innerHeight) - 0.5; 
            
            gsap.to(backgroundImage, {
                rotationY: x * 15,
                rotationX: -y * 15,
                transformPerspective: 500,
                duration: 0.3
            });

            gsap.to(text, {
                rotationY: x * 15,
                rotationX: -y * 15,
                transformPerspective: 500,
                duration: 0.3
            });
        });

   
        main.addEventListener('mouseleave', () => {
            gsap.to(backgroundImage, { rotationY: 0, rotationX: 0, duration: 0.3 });
            gsap.to(text, { rotationY: 0, rotationX: 0, duration: 0.3 });
        });
