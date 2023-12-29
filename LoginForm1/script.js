const modalBodyStep_1 = document.querySelector(".modal-body-step-1");
const modalBodyStep_2 = document.querySelector(".modal-body-step-2");
const modalBodyStep_3 = document.querySelector(".modal-body-step-3");

const titleEl = document.createElement("div");
titleEl.classList = "title";
titleEl.innerText = "Step 1";
modalBodyStep_1.appendChild(titleEl);
const descriptionEl = document.createElement("div");
descriptionEl.classList = "description";
descriptionEl.innerText = "Hello there, Let's play a game.";
modalBodyStep_1.appendChild(descriptionEl);
const formEl = document.createElement("form");
modalBodyStep_1.appendChild(formEl);
const inputTag_1 = document.createElement("input");
inputTag_1.type = "text";
inputTag_1.placeholder = "Name";
formEl.appendChild(inputTag_1);
const inputTag_2 = document.createElement("input");
inputTag_2.type = "email";
inputTag_2.placeholder = "Email";
formEl.appendChild(inputTag_2);
const textCenter = document.createElement("div");
textCenter.classList = "text-center";
formEl.appendChild(textCenter);
const buttonDiv = document.createElement("div");
buttonDiv.classList = "button";
buttonDiv.innerText = "Start";
textCenter.appendChild(buttonDiv);

const titleStep_2 = document.createElement("div");
titleStep_2.classList = "title";
titleStep_2.innerText = "Step 2";
modalBodyStep_2.appendChild(titleStep_2);
const descriptionStep_2 = document.createElement("div");
descriptionStep_2.classList = "description";
descriptionStep_2.innerText = "Would you rather";
modalBodyStep_2.appendChild(descriptionStep_2);
const formElStep_2 = document.createElement("form");
modalBodyStep_2.appendChild(formElStep_2);
const labelEl_1_Step_2 = document.createElement("label");
labelEl_1_Step_2.innerText = "Would you rather";
formElStep_2.appendChild(labelEl_1_Step_2);
const inputTag_1_Step2 = document.createElement("input");
inputTag_1_Step2.type = "radio";
inputTag_1_Step2.name = "radio";
labelEl_1_Step_2.appendChild(inputTag_1_Step2);
const labelEl_2_Step_2 = document.createElement("label");
labelEl_2_Step_2.innerText = "live 10 lives that last 100 years each?";
formElStep_2.appendChild(labelEl_2_Step_2);
const inputTag_2_Step2 = document.createElement("input");
inputTag_2_Step2.type = "radio";
inputTag_2_Step2.name = "radio";
inputTag_2_Step2.id = "radio2";
labelEl_2_Step_2.appendChild(inputTag_2_Step2);
const textCenterFadeIn = document.createElement("div");
textCenterFadeIn.classList = "text-center fade-in";
formElStep_2.appendChild(textCenterFadeIn);
const buttonElStep_2 = document.createElement("div");
buttonElStep_2.classList = "button";
buttonElStep_2.innerText = "Next";
textCenterFadeIn.appendChild(buttonElStep_2);

const titleElStep_3 = document.createElement("div");
titleElStep_3.classList = "title";
titleElStep_3.innerText = "Step 3";
modalBodyStep_3.appendChild(titleElStep_3);
const descriptionELStep_3 = document.createElement("div");
descriptionELStep_3.classList = "description";
descriptionELStep_3.innerText = "Check your email for the game results.";
modalBodyStep_3.appendChild(descriptionELStep_3);
const textCenterEl = document.createElement("div");
textCenterEl.classList = "text-center";
modalBodyStep_3.appendChild(textCenterEl);
const buttonElStep_3 = document.createElement("div");
buttonElStep_3.classList = "button";
buttonElStep_3.innerText = "Done !";
textCenterEl.appendChild(buttonElStep_3);

$(".button").click(function () {
  var btn = $(this),
    step = btn.parents(".modal-body"),
    stepIndex = step.index(),
    pag = $("modal-header span").eq(stepIndex);
  if (stepIndex === 0 || stepIndex === 1) {
    step1(step, pag);
  } else {
    step3(step, pag);
  }
});

const step1 = (step, pag) => {
  console.log("step1");
  step.addClass("animate-out");
  setTimeout(function () {
    step.removeClass("animate-out is-showing").next().addClass("animate-in");
    pag.removeClass("is-active").next().addClass("is-active");
  }, 600);
  setTimeout(function () {
    step.next().removeClass("animate-in").addClass("is-showing");
  }, 1200);
};
const step3 = (step, pag) => {
  step.parents(".modal-wrap").addClass("animate-up");
  setTimeout(function () {
    $(".rerun-button").css("display", "inline-block");
  }, 300);
};

$(".rerun-button").click(function () {
  $(".modal-wrap")
    .removeClass("animate-up")
    .find(".modal-body")
    .first()
    .addClass("is-showing")
    .siblings()
    .removeClass("is-showing");

  $(".modal-header span")
    .first()
    .addClass("is-active")
    .siblings()
    .removeClass("is-active");
  $(this).hide();
});
