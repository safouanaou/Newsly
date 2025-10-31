
export default {

  name: "Header", 

    template: `
        <header>
          <div class="main-header container-fluid py-1 d-flex align-items-center">
            <h1 id="logo" class="ps-5">NEWSLY</h1>

            <nav class="navbar navbar-expand-lg w-100">
              <ul class="header-menu list-unstyled d-flex gap-5 fs-4 mx-auto">
                <li><a href="" class="menu-link">Articles</a></li>
                <li><a href="" class="menu-link">Contact</a></li>
                <li><a href="" class="menu-link">A propos</a></li>
              </ul>
              <a href="">
                <img id="search-icon" src="/assets/icons/magnifying-glass.svg" alt="search-icon" class="me-4">
              </a>
            </nav>
            

          </div>

          <div class="secondary-header container-fluid d-flex py-2 justify-content-between align-items-center">
            <div class="theme-taille-edit d-flex justify-content-center align-items-center">
              <!--theme edit-->
              <div class="theme-edit d-flex justify-content-center align-items-center me-5">
                <h2 class="fs-4">Theme</h2>

                <div class="dropdown ms-2">
                  <button
                    class="btn dropdown-toggle align-middle py-0 px-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="fs-5">Light</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Light</a></li>
                    <li><a class="dropdown-item" href="#">Dark</a></li>
                    <li><a class="dropdown-item" href="#">Rose</a></li>
                  </ul>
                </div>
              </div>
              <!--size edit-->
              <div class="size-edit d-flex justify-content-center align-items-center">
                <h2 class="fs-4">Taille</h2>



              <div>
                <button type="button" class="theme-button btn ms-2 py-0 px-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="fs-5">Moyenne</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-start">
                  <li><a class="dropdown-item" href="">Petite</a></li>
                  <li><a class="dropdown-item" href="">Moyenne</a></li>
                  <li><a class="dropdown-item" href="">Grande</a></li>

                </ul>
              </div>
                



              </div> 
          
            </div>
            
            <div class="coord-mouse d-flex justify-content-center align-items-center bg-light gap-3 px-3 fs-5">
              X: {{ mouseX }}, Y: {{ mouseY }}
            </div>
          </div>
        </header>
    `,

    data(){
      return {
        mouseY: '',
        mouseX: ''
      }

    },

    mounted(){
      window.addEventListener('mousemove', this.updateMouseCoords)
    },

    methods: {
      updateMouseCoords(e){
        this.mouseX = e.clientX
        this.mouseY = e.clientY
      },

    }
}

