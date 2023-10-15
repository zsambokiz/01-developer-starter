import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Zotya makes google maps application';
  greetUser(name);

  console.log(name);
});
