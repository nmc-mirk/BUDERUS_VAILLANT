// const stages = [
//   {
//     select: ['first__slide__item-one', 'first__slide__item-two'],
//     stage: ['first__slide__stage__one', 'first__slide__stage__two', 'first__slide__stage__three', 'first__slide__stage__four', 'first__slide__stage__five']
//   },
//   {
//     select: ['second__slide__item-one', 'second__slide__item-two'],
//     stage: ['second__slide__stage__one', 'second__slide__stage__two', 'second__slide__stage__three', 'second__slide__stage__four', 'second__slide__stage__five']
//   },
//   {
//     select: ['third__slide__item-one', 'third__slide__item-two'],
//     stage: ['third__slide__stage__one', 'third__slide__stage__two', 'third__slide__stage__three', 'third__slide__stage__four', 'third__slide__stage__five']
//   },
// ];

// stages.map((slide, i) => {
//   window['kits__select__' + i] = document.querySelector(`#${slide.select.map(item => item)}`);
//   window['kits__proress__' + i] = document.querySelector(`#${slide.stage.map(item => item)}`);
// })

// kits__select__one.addEventListener('change', ()=>{
//   if (kits__select__one.value !== 'Выберите котел') {
//     kits__proress__stage__one.classList.add('kits__stage--active');
//     kits__proress__stage__two.classList.add('kits__stage--active');
//   }
// });

// kits__select__two.addEventListener('change', ()=>{
//   if(kits__select__two.value !== 'Выберите бойлер') {
//     kits__proress__stage__three.classList.add('kits__stage--active');
//     kits__proress__stage__four.classList.add('kits__stage--active');
//     kits__proress__stage__five.classList.add('kits__stage--active');
//   }
// });


