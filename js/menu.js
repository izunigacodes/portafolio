// Funcionalidad del menú hamburguesa
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Funcionalidad de los submenús en móvil
        const dropdownItems = document.querySelectorAll('.has-dropdown > a');
        
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdown = item.nextElementSibling;
                    item.classList.toggle('active');
                    dropdown.classList.toggle('active');
                    // Detener la propagación para que no active el event listener de cierre
                    e.stopPropagation();
                }
            });
        });
        
        // Cerrar menú al hacer clic en un enlace (en móvil) solo si no tiene submenú
        const allNavLinks = document.querySelectorAll('.nav-links a');
        
        allNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    // Si el enlace es de un ítem con submenú, no hacemos nada (ya se manejó arriba)
                    if (link.parentElement.classList.contains('has-dropdown')) {
                        return;
                    }
                    // Para los demás enlaces (sin submenú) cerramos el menú
                    navLinks.classList.remove('active');
                }
            });
        });
        
        // Botones de demostración
        document.getElementById('toggle-menu').addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        document.getElementById('change-theme').addEventListener('click', () => {
            document.body.style.background = document.body.style.background === 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' 
                ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' 
                : 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)';
        });
        
        document.getElementById('reset-demo').addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
            
            // Cerrar todos los submenús
            dropdownItems.forEach(item => {
                item.classList.remove('active');
                item.nextElementSibling.classList.remove('active');
            });
        });
        
        // Cerrar menú al redimensionar la ventana (si se cambia de móvil a escritorio)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                
                // Cerrar todos los submenús
                dropdownItems.forEach(item => {
                    item.classList.remove('active');
                    item.nextElementSibling.classList.remove('active');
                });
            }
        });