import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"'),
  inputAmount: document.querySelector('input[name="amount"]'),
  inputStep: document.querySelector('input[name="step"]'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const amount = Number(refs.inputAmount.value);
  let step = Number(refs.inputStep.value);
  let delay = Number(refs.inputDelay.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(amount, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
      });
    delay += step;
  }
  e.currentTarget.reset();
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
