'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Portfolio animations
const projectDetails = {
  "Research Overview": `
    <div id="project-1" class="mt-6 space-y-2">
        <h3 class="project-detail-heading">Research Overview</h3>
        <p class="text-gray-600">Here's a quick summary of my main research projects. You can find more details for the projects on the Portfolio tab!</p><br>
        
        <div>
            <iframe 
            src="assets/Project Portfolio.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0" 
            width="100%" 
            height="100%"
            style="min-height: 60vh; border-radius: 0.5rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"  
            frameborder="0"
            class="rounded"
            >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="assets/Project Portfolio.pdf">Download PDF</a>.
            </iframe>
            
        </div>
    </div>
  `,
  
  "COVID 19 - Dragon Resuscitator": `
    <div id="project-2" class="mt-6 space-y-2">
      <h3 class="project-detail-heading">Theoretical & Applied Mechanics Group (TAMG)</h3>
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold text-gray-800">Dragon Resuscitator: Automated Respiratory Device</h2>
        <p class="text-gray-600">Lead Designer</p><br>
        
        
        <p>This is an incredible project where I got to work as the lead designer for medical equipment during the COVID-19 pandemic.</p><br>

        <h3 class="project-detail-subheading">Digital Engineering Process</h4>
        <p>The Dragon Resuscitator is a portable and inexpensive solution which can provide assistance to patients facing acute respiratory failure by automatically compressing a standard Ambu® bag.</p><br>
        <p>The underlying motivation behind this project was the shortage of ventilators during the peak of the pandemic.</p><br>
        
        <div class="project-figures">
            <figure>
                <img src="assets/images/resuscitator_a_animation.gif" alt="Revision A movement" width="40%">
                <figcaption><i>Configuration A</i></figcaption>
            </figure>
            <figure>
                <img src="assets/images/resuscitator_b_animation.gif" alt="Revision B movement" width="40%">
                <figcaption><i>Configuration B</i></figcaption>
            </figure>
        </div><br>

        <p>As this system was designed following the onset of the COVID lockdown, we had to limit physical prototyping iterations by validating all design functionality using digital CAD and CAE tools. Our team produced several configurations of potential designs and used tools to downselect to designs which were feasible for mass manufacturing and easy to assemble.</p><br>
        <div>
          <figure>
            <img src="assets/images/resuscitator_iterations.png" alt="Dragon Resuscitator iterations" width="100%" height="auto">
          </figure>
        </div><br>

        <h3 class="project-detail-subheading">ASME IMECE Challenge Poster</h4>
        <p>Below is a poster that was developed for a design challenge, documenting our iterative digital engineering process to create a functional prototype.</p><br>
        <div>
            <img src="assets/images/Dragon Resuscitator - IMECE Poster.jpg" alt="Dragon Resuscitator IMECE Poster" width="100%" height="auto">
        </div><br>
        
        <h3 class="project-detail-subheading">Product Commercial</h4>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AmDtVRKJGKI?si=fD2OuETk2918TZdf" title="Dragon Resuscitator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div><br>
        
      </div>
    </div>
  `,

  "Realtime 3D Print Monitoring": `
    <div id="project-2" class="mt-6 space-y-2">
      <h3 class="project-detail-heading">Theoretical & Applied Mechanics Group (TAMG)</h3>
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold text-gray-800">Realtime 3D Print Monitoring</h2>
        <p class="text-gray-600">Research Assistant</p><br>
        
        <p>I led this multi-year 3D printer monitoring project as a Research Assistant for TAMG. The project involved creating a hybrid realtime monitoring system using computer vision and acoustic emission to detect and correct defects during a traditional fused deposition modeling (FDM) 3D printing process.</p><br>

        <h3 class="project-detail-subheading">Computer Vision</h4>
        <p>The computer vision (CV) component of this project involved training a custom vision model capable of detecting specific classes of defects in a FDM printing process.</p><br>
        <p>A comprehensive image dataset of several nominal and defective parts was collected during the offline portion of the training process. A subset of these images was labeled and a custom CV model was trained to track these defects. Both TensorFlow and PyTorch architectures were implemented to achieve the desired realtime inference speed.</p><br>
        <div>
          <figure>
            <img src="assets/images/3DP_monitoring_fig.png" alt="Computer Vision Workflow" width="100%" height="auto">
            <figcaption class="fig-caption"><i>Vision Detection Workflow</i></figcaption>
          </figure>
        </div><br>
        <p>Once a defect is detected, the next step is to correct the fault by intercepting the G-code in the printer controller and adding corrective commands such as temperature or speed adjustments. This corrective workflow is uniquely defined for each defect classification.</p><br>
        <p>We found that this realtime CV approach improved the reliability of the FDM class of 3D printers and yielded higher quality parts.</p><br>

        <h3 class="project-detail-subheading">Acoustic Emission</h4>
        <p>The acoustic emission (AE) component of this project involved using very sensitive microphones placed in critical locations on the printer to add an additional data source to identify problems with the physical printer's health as opposed to the quality of the parts being produced.</p><br>
        <div>
          <figure>
            <img src="assets/images/3DP_acoustic_fig.png" alt="Acoustic Emission Monitoring Workflow" width="100%" height="auto">
            <figcaption class="fig-caption"><i>Acoustic Alarm Workflow</i></figcaption>
          </figure>
        </div><br>
        <p>Using a multivariate alarm trigger alarm system, AE data is collected in realtime simulatenously with the vision data, and when both systems indicate that a fault is present with a user-defined sensitivity parameter, a correction script is injected into the printing process.</p><br>
        <p>As part of this project, a detailed report was prepared detailing the acoustic emission workflow: </p><br>
        <div>
          <iframe 
            src="assets/images/3DP Monitoring Paper.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0" 
            width="100%" 
            height="100%"
            style="min-height: 56vh; border-radius: 0.5rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"  
            frameborder="0"
            class="rounded"
            >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="assets/images/3DP Monitoring Paper.pdf">Download PDF</a>.
            </iframe>
        </div>
      </div>
    </div>
  `,

  "STAR Scholars: FDM Printer Monitoring": `
    <div class="mt-6 space-y-2">
      <h3 class="project-detail-heading">Theoretical & Applied Mechanics Group (TAMG)</h3>
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold text-gray-800">FDM 3D Printer Monitoring</h2>
        <p class="text-gray-600">STAR Scholars Research Program</p><br>
        
        <p>This poster details a summer research project I did to develop a closed-loop monitoring system for FDM 3D printers. I used acoustic emission sensors to monitor the system and identify abnormal states such as material jams, part warping, etc.</p><br>
        <div>
            <img src="assets/images/Star Scholars Poster - Dhruv Shah.jpg" alt="Star Scholars Poster" width="100%" height="auto">
        </div><br>
      </div>
    </div>
  `,

  "NASA: Senior Design Capstone": `
    <div id="project-2" class="mt-6 space-y-2">
      <h3 class="project-detail-heading">NASA Marshall Spaceflight Center</h3>
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold text-gray-800">Centrifugal Nuclear Thermal Rocket</h2><br>
        
        <p>As part of my senior design capstone project, I have worked with a university team in collaboration with NASA's Marshall Spaceflight Center to design, manufacture, and test a prototype fuel element for a Centrifugal Nuclear Thermal Rocket (CNTR). The CNTR could enable round-trip interplanetary flight paths with a higher specific impulse than chemical rocket engines.</p><br>

        <h3 class="project-detail-subheading">CFE Prototype</h4>
        <p>I supported the design, manufacturing, and assembly phases of this project to create a physical prototype of a centrifugal fuel element (CFE) capable of validating the proposed concept and providing a comprehensive foundation for subsequent CNTR development.</p><br>
        
        <div class="project-figures">
            <figure>
                <img src="assets/images/full_cfe.png" alt="Complete assembly of CFE prototype">
                <figcaption><i>Complete assembly of CFE prototype</i></figcaption>
            </figure>
            <figure>
                <img src="assets/images/turbine_spin.gif" alt="Rotating turbine and stator subassembly">
                <figcaption><i>Rotating turbine and stator subassembly</i></figcaption>
            </figure>
        </div><br>

        <h3 class="project-detail-subheading">CNTR Project Poster</h4>
        <p>A component of our final senior design curriculum was to create a physical prototype and present our results to a panel of judges. We received 2nd place in a competition with other teams across the College of Engineering.</p><br>
        <div>
            <img src="assets/images/CNTR Poster.jpg" alt="CNTR Poster" width="100%" height="auto">
        </div><br>

        <h3 class="project-detail-subheading">Published Work</h4>
        <p>During the course of this project, we took the initiative to publish a paper to the 2023 Nuclear and Emerging Technologies for Space (NETS) conference, hosted by the American Nuclear Society. The paper provides an in-depth analysis of the parametric study of the CNTR. I helped model the pressure drop through the porous medium within a rotating centrifugal fuel element.</p><br>
        <div>
          <iframe 
            src="assets/images/Parametric Analysis of the Design Point for a Centrifugal Nuclear Thermal Rocket Fuel Element.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0" 
            width="100%" 
            height="100%"
            style="min-height: 56vh; border-radius: 0.5rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"  
            frameborder="0"
            class="rounded"
            >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="assets/images/Parametric Analysis of the Design Point for a Centrifugal Nuclear Thermal Rocket Fuel Element.pdf">Download PDF</a>.
            </iframe>
        </div>
        
      </div>
    </div>
  `,

  // Add more entries keyed by the project title...
};

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const overlay = document.getElementById('projectDetailOverlay');
    const content = document.getElementById('projectDetailContent');

    const title = item.querySelector('.project-title').textContent;
    content.innerHTML = projectDetails[title] || `<h2>${title}</h2><p>Project details coming soon...</p>`;

    overlay.classList.add('active');
  });
});

document.getElementById('backButton').addEventListener('click', () => {
  document.getElementById('projectDetailOverlay').classList.remove('active');
});
