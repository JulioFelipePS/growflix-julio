const growcastVideos = movies.filter((item) => item.category === "growcast");
const webinarVideos = movies.filter((item) => item.category === "webinar");
const uxUiVideos = movies.filter((item) => item.category === "ux-ui");
const diversosVideos = movies.filter((item) => item.category === "geral");

console.log(growcastVideos)

const growcast = document.getElementById("growcast")
const webinar = document.getElementById("flutter")
const uxui = document.getElementById("UXUI")
const diversos = document.getElementById("diversos")

         
function writeCard(array,idElement){
    array.forEach(element => {
        idElement.innerHTML +=
        `<div class="col-3 ">
        <div class="video ">
          <img src=${element.img} class="img-fluid" alt="...">
          <div class="infos ">
            <p class="infoP px-5 py-3 text-white"><button type="button" class="arrowButton" data-bs-toggle="modal" data-bs-target="#exampleModal${element.id}">
            <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white"
            class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path
              d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
            </svg>
            </button>
               ${element.title} </p>
      
          </div>
        </div>
      </div>
      


<!-- Modal -->
<div class="modal fade bg-transparent modalTransparent pl-5 ml-5 " style="background-color: transparent;" id="exampleModal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-fullscreen modalTransparent   "style="background-color: transparent;" >
    <div class="modal-content" style="background-color: transparent;" >
      <div class="modal-header modalTransparent bg-transparent px-5 d-flex justify-content-end display-3  " style="background-color:transparent">
        <button type="button"  class=" text-white bg-transparent border-0    " data-bs-dismiss="modal" aria-label="Close">x</button>
      </div>
      <div class="modal-body p-0">
        <div class="ratio ratio-16x9">
          <iframe src=${element.link} title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
      
      `
    });
}

writeCard(growcastVideos,growcast)
writeCard(webinarVideos,webinar)
writeCard(uxUiVideos,uxui)
writeCard(diversosVideos,diversos)
