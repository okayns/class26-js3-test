// VERSION 1

/*
1.
Write a function that:
- Logs to the console numbers 1 to 100.
- However, if the number is a multiple of both 3 and 5 it should log "Jackpot!" instead of the number.
- If it doesn't pass the function should log "multiple of 3" if it's a multiple of only 3
- If it's a multiple of 5 it should log "This is a multiple of 5"
Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
Hint: the order of conditional statements is important!
*/

function logNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(`${i} Jackpot!`);
    } else if (i % 5 === 0) {
      console.log(`${i} This is a multiple of 5`);
    } else if (i % 3 === 0) {
      console.log(`${i} This is a multiple of 3`);
    } else {
      console.log(`${i}`);
    }
  }
}

logNumbers();

/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!") 
- Creates an empty <img> element and add it to the document.
- When the button is clicked, inserts an image URL into an <img> tag and remove the button
- Use the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/

function modifyUI(cb) {
  const btnElement = document.createElement('button');
  btnElement.textContent = 'Click Me!';
  document.body.appendChild(btnElement);
  const imgElement = document.createElement('img');
  document.body.appendChild(imgElement);
  imgElement.setAttribute(
    'src',
    'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4',
  );
  imgElement.style.display = 'block';
  imgElement.style.marginTop = '1rem';
  btnElement.addEventListener('click', () => {
    cb(imgElement);
  });
}

function removeImage(img) {
  img.remove();
}

modifyUI(removeImage);

/*
3.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following API: https://reqres.in/api/users
- Parses the response and then displays the "first_name" and "last_name" of the first 
  THREE users within the DOM
- Creates an <ul> for each user
- Makes use of async/await
*/

const url = 'https://reqres.in/api/users';

async function getData(cb) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`${response.status}`);
    } else {
      const data = await response.json();
      cb(data);
    }
  } catch (err) {
    console.error(err);
  }
}

function createUI(resp) {
  console.log(resp.data);
  for (let i = 0; i < 3; i++) {
    console.log(i);
    const ulElement = document.createElement('ul');
    document.body.appendChild(ulElement);
    ulElement.textContent = `${resp.data[i].first_name} ${resp.data[i].last_name}`;
  }
}

getData(createUI);
