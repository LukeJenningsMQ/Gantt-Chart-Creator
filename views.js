
export const briefView = () => {

    const template = Handlebars.compile(`
    <ul class=brief>
    </ul>
    `);

    let target = document.getElementById("people");

    target.innerHTML = template();
}

export const addTaskView = () => {
  const template = Handlebars.compile(`
  <input type="text" id="TaskName" placeholder="Input Task Name.....">
  <input type="text" id="StartDate" placeholder="Date Task Starts" onfocus="(this.type='date')">
  <input type="text" id="EndDate" placeholder="Date Task Ends" onfocus="(this.type='date')">
  <button id="addSubmit" onclick="myFunction()">Submit Task</button>
    `);
  let target = document.getElementById("people");

  target.innerHTML = template();
}

export const removeTaskView = (data) => {
  const template = Handlebars.compile(`
  <select name="Choose Task" id="selectTask">
  <option value="" disabled selected hidden>Choose Task To Remove...</option>
  {{#each data}}
    <option value="{{y}}">{{y}}</option>
    {{/each}}
  </select>
  <button id="removeSubmit">Submit Task</button>
    `);
  let target = document.getElementById("people");

  target.innerHTML = template({data: data});
}

export const detailView = (id, people) => {

  const template = Handlebars.compile(`
  <ul class=detailed>
  {{#each people}}
    <li>
    <div class=detail id='detail{{index}}'>
    <h2>{{name}}</h2>
    <img src={{avatar}} alt="user avatar">
    <dl>
      <dt>Age</dt><dd>{{age}}</dd>
      <dt>Eye Colour</dt><dd>{{eyeColour}}</dd>
      <dt>Email</dt><dd>{{email}}</dd>
      <dt>Favourite Fruit</dt><dd>{{favouriteFruit}}</dd>
    </dl>
    </li>
  {{/each}}
  </ul>
  `);

  let target = document.getElementById(id);

  target.innerHTML = template({people: people});
}
