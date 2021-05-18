class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  makeTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <style>${this.getStyles()}</style>
    <section class="custom_element">
      <div class="card_inner">
        <!--Card's Front-face-->
        <div class="card_face card_face-front">
          <a
            href="https://mejiasasociados.cl/"
            target="_blank"
            class="img_container"
          >
            <img
              class="card_face-image"
              src="../perfect_score_mejiasasociados.png"
              alt="picture project"
            />
          </a>
          <div class="card_description">
            <a
              href="https://mejiasasociados.cl/"
              target="_blank"
              class="project_name"
              >Perfect Score Google Lighthouse</a
            >
            <div class="flip_container">
              <p class="watch_project">My first nice project!</p>
              <img
                class="arrow"
                src="../img/arrow-circle-right-solid.svg"
                alt="arrow icon"
              />
            </div>
          </div>
        </div>
        <!--Card's Back-face-->
        <div class="card_face card_face-back">
          <p class="card_caption">
            I needed one week to get done this project using
            <strong>HTML, CSS and a little bit of JavaScript</strong>. And I
            thought that I could make it better developing a
            <strong>contact form</strong> so I watched a bunch of videos on
            You-Tube and was able to create one
            <strong>from zero using PHP.</strong><br />
            I'm also proud of that logo made by myself
            <strong>using FIGMA!</strong>
            <em>
              I copied the design from a png image and re-made the image againg
              to use <strong>SVG format.</strong></em
            ><br />
            I did a research about loading web pages, performance and SEO to
            make this project outstanding!
          </p>
        </div>
      </div>
    </section>
    `;
    return template;
  }
  getStyles() {
    return `
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      :host {
        font-family: 'Montserrat', sans-serif;
      }
      * {
        padding: 0;
        margin: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
      }
      .custom_element {
        display: block;
        width: 450px;
        height: 350px;
        border-radius: 20px;
        margin: 0 auto;
        -webkit-perspective: 1000px;
                perspective: 1000px;
      }
      .custom_element .flipped {
        -webkit-transform: rotateY(180deg);
                transform: rotateY(180deg);
      }
      .custom_element .card_inner {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 20px;
        -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
        -webkit-transition: all 1.5s ease;
        transition: all 1.5s ease;
      }
      .custom_element .card_inner .card_face {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
        overflow: hidden;
        border-radius: 20px;
        -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      .custom_element .card_inner .card_face-front {
        background-color: #f4f4f4;
        position: relative;
      }

      .custom_element .card_inner .card_face-front .img_container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        width: 450px;
        height: 65%;
        background-color: #212121;
      }

      .custom_element .card_inner .card_face-front .img_container .card_face-image {
        width: 100%;
        height: auto;
      }

      .custom_element .card_inner .card_face-front .card_description {
        margin: 0 auto;
        width: 100%;
        height: 35%;
        padding-left: 25px;
        padding-right: 25px;
        border-radius: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
        -webkit-box-align: space-evenly;
            -ms-flex-align: space-evenly;
                align-items: space-evenly;
      }

      .custom_element .card_inner .card_face-front .card_description .project_name {
        font-size: 22px;
        font-weight: 300;
        -webkit-transition: 0.2s all ease-in-out;
        transition: 0.2s all ease-in-out;
        cursor: pointer;
        text-decoration: none;
      }

      .custom_element .card_inner .card_face-front .card_description .project_name:hover {
        text-decoration: underline;
      }

      .custom_element .card_inner .card_face-front .card_description .project_name:visited {
        color: #202020;
      }

      .custom_element .card_inner .card_face-front .card_description .project_name:active {
        color: #202020;
        -webkit-transform: scale(0.99);
                transform: scale(0.99);
      }

      .custom_element .card_inner .card_face-front .card_description .flip_container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
      }

      .custom_element .card_inner .card_face-front .card_description .flip_container .watch_project {
        font-size: 14px;
      }

      .custom_element .card_inner .card_face-front .card_description .flip_container img {
        width: 40px;
        height: 40px;
        cursor: pointer;
        -webkit-transition: 0.2s all ease-in-out;
        transition: 0.2s all ease-in-out;
      }

      .custom_element .card_inner .card_face-front .card_description .flip_container img:active {
        -webkit-transform: scale(0.9);
                transform: scale(0.9);
      }

      .custom_element .card_inner .card_face-back {
        -webkit-transform: rotateY(180deg);
                transform: rotateY(180deg);
        background-color: #fff;
      }

      .custom_element .card_inner .card_face-back .card_caption {
        width: 100%;
        height: auto;
        line-height: 25px;
        padding: 25px 20px 0 20px;
        font-size: 14px;
        cursor: pointer;
      }
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.makeTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    //render template
    this.render();

    //use here addEventListeners
  }
  disconectedCallback() {
    //use here removeEventListeners
  }
}

customElements.define("project-card", ProjectCard);
