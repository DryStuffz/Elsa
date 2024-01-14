const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;

//standardizes the dates to be consistent
function formatDate(d, m){
    if (d < 10){
        d = "0" + d.toString();
    }
    if (m < 10){
        m = "0" + m.toString();
    }
    return m.toString() + "-" + d.toString();
}

async function displayMessage(){
    const response = await fetch("letters.json");
    const letter = await response.json();
    var dailyMessage = letter[formatDate(day, month)];
    document.getElementById("message").innerHTML = dailyMessage;

}

displayMessage();


document.addEventListener('DOMContentLoaded', function () {
    var currentMonth = month -1;
    // Set the class on the body based on the current month
    document.body.className = getMonthClassName(currentMonth);

    // Set the SVG content based on the current month
    const svgContainer = document.getElementById('svgContainer');
    svgContainer.innerHTML = getMonthSVGContent(currentMonth);
});

function getMonthClassName(monthIndex) {
    // Array of month names
    const monthNames = [
        'january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december'
    ];

    // Get the month name for the given index
    const monthName = monthNames[monthIndex];

    // Return the class name
    return monthName.toLowerCase();
}

function getMonthSVGContent(monthIndex) {
    // Array of SVG content for each month
    const monthSVGContent = [
        '<svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><g fill="#e08828"><path d="M26.3 60.5c-.8 0-2.6.7-3.2.1c-.8-.8 0-4.6 0-4.6h-2.3s.8 3.8 0 4.6c-.6.5-2.4-.1-3.2-.1c-2 0-3.7 1.5-3.7 1.5h16c.1 0-1.5-1.5-3.6-1.5"></path><path d="M46.3 60.5c-.8 0-2.6.7-3.2.1c-.8-.8 0-4.6 0-4.6h-2.3s.8 3.8 0 4.6c-.6.5-2.4-.1-3.2-.1c-2 0-3.7 1.5-3.7 1.5h16c.1 0-1.5-1.5-3.6-1.5"></path></g><g fill="#3e4347"><path d="M10.4 27C-.4 33.7 1.7 43 3.3 41.9C20 29.7 24.2 18.5 10.4 27z"></path><path d="M53.6 27c-13.8-8.5-9.6 2.7 7.1 14.9c1.6 1.1 3.7-8.2-7.1-14.9"></path><path d="M48 17.5C48 8.9 40.8 2 32 2S16 8.9 16 17.5c0 11.6-4 15.5-4 23.2C12 51.3 21 60 32 60s20-8.7 20-19.3c0-7.7-4-11.6-4-23.2"></path></g><path d="M44 18.8c0-12.4-10.1-10-10.1-.7h-3.7C30.1 8.8 20 6.4 20 18.8c0 9.7-4 15.7-4 22.1C16 52.5 23.7 58 32 58s16-5.6 16-17.1c0-6.4-4-12.4-4-22.1" fill="#fff"></path><g fill="#3e4347"><path d="M41 17c0 1.7-.9 3-2 3s-2-1.3-2-3s.9-3 2-3s2 1.3 2 3"></path><path d="M27 17c0 1.7-.9 3-2 3s-2-1.3-2-3s.9-3 2-3s2 1.3 2 3"></path></g><path d="M28 22h8c0 2.5-1.8 4.6-4 4.6s-4-2-4-4.6" fill="#e08828"></path><path d="M37 22.3l-5 1.2l-5-1.2c0-3.2 2.2-5.7 5-5.7s5 2.6 5 5.7" fill="#f29a2e"></path><g fill="#3e4347"><path d="M33.7 17.8c.3.3.4.7.3.9c-.1.2-.5 0-.8-.3c-.3-.3-.4-.7-.3-.9c.2-.1.6 0 .8.3"></path><path d="M30.3 17.8c-.3.3-.4.7-.3.9c.1.2.5 0 .8-.3c.3-.3.4-.7.3-.9c-.2-.1-.6 0-.8.3"></path></g></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg class="ghost" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="127.433px" height="132.743px" viewBox="0 0 127.433 132.743" enable-background="new 0 0 127.433 132.743" xml:space="preserve"><path fill="#FFF6F4" d="M116.223,125.064c1.032-1.183,1.323-2.73,1.391-3.747V54.76c0,0-4.625-34.875-36.125-44.375s-66,6.625-72.125,44l-0.781,63.219c0.062,4.197,1.105,6.177,1.808,7.006c1.94,1.811,5.408,3.465,10.099-0.6c7.5-6.5,8.375-10,12.75-6.875s5.875,9.75,13.625,9.25s12.75-9,13.75-9.625s4.375-1.875,7,1.25s5.375,8.25,12.875,7.875s12.625-8.375,12.625-8.375s2.25-3.875,7.25,0.375s7.625,9.75,14.375,8.125C114.739,126.01,115.412,125.902,116.223,125.064z" /><circle fill="#013E51" cx="86.238" cy="57.885" r="6.667" /><circle fill="#013E51" cx="40.072" cy="57.885" r="6.667" /><path fill="#013E51" d="M71.916,62.782c0.05-1.108-0.809-2.046-1.917-2.095c-0.673-0.03-1.28,0.279-1.667,0.771c-0.758,0.766-2.483,2.235-4.696,2.358c-1.696,0.094-3.438-0.625-5.191-2.137c-0.003-0.003-0.007-0.006-0.011-0.009l0.002,0.005c-0.332-0.294-0.757-0.488-1.235-0.509c-1.108-0.049-2.046,0.809-2.095,1.917c-0.032,0.724,0.327,1.37,0.887,1.749c-0.001,0-0.002-0.001-0.003-0.001c2.221,1.871,4.536,2.88,6.912,2.986c0.333,0.014,0.67,0.012,1.007-0.01c3.163-0.191,5.572-1.942,6.888-3.166l0.452-0.453c0.021-0.019,0.04-0.041,0.06-0.061l0.034-0.034c-0.007,0.007-0.015,0.014-0.021,0.02C71.666,63.771,71.892,63.307,71.916,62.782z" /><circle fill="#FCEFED" stroke="#FEEBE6" stroke-miterlimit="10" cx="18.614" cy="99.426" r="3.292" /><circle fill="#FCEFED" stroke="#FEEBE6" stroke-miterlimit="10" cx="95.364" cy="28.676" r="3.291" /><circle fill="#FCEFED" stroke="#FEEBE6" stroke-miterlimit="10" cx="24.739" cy="93.551" r="2.667" /><circle fill="#FCEFED" stroke="#FEEBE6" stroke-miterlimit="10" cx="101.489" cy="33.051" r="2.666" /><circle fill="#FCEFED" stroke="#FEEBE6" stroke-miterlimit="10" cx="18.738" cy="87.717" r="2.833" /><path fill="#FCEFED" stroke="#FEEBE6" stroke-miterlimit="10" d="M116.279,55.814c-0.021-0.286-2.323-28.744-30.221-41.012c-7.806-3.433-15.777-5.173-23.691-5.173c-16.889,0-30.283,7.783-37.187,15.067c-9.229,9.736-13.84,26.712-14.191,30.259l-0.748,62.332c0.149,2.133,1.389,6.167,5.019,6.167c1.891,0,4.074-1.083,6.672-3.311c4.96-4.251,7.424-6.295,9.226-6.295c1.339,0,2.712,1.213,5.102,3.762c4.121,4.396,7.461,6.355,10.833,6.355c2.713,0,5.311-1.296,7.942-3.962c3.104-3.145,5.701-5.239,8.285-5.239c2.116,0,4.441,1.421,7.317,4.473c2.638,2.8,5.674,4.219,9.022,4.219c4.835,0,8.991-2.959,11.27-5.728l0.086-0.104c1.809-2.2,3.237-3.938,5.312-3.938c2.208,0,5.271,1.942,9.359,5.936c0.54,0.743,3.552,4.674,6.86,4.674c1.37,0,2.559-0.65,3.531-1.932l0.203-0.268L116.279,55.814z M114.281,121.405c-0.526,0.599-1.096,0.891-1.734,0.891c-2.053,0-4.51-2.82-5.283-3.907l-0.116-0.136c-4.638-4.541-7.975-6.566-10.82-6.566c-3.021,0-4.884,2.267-6.857,4.667l-0.086,0.104c-1.896,2.307-5.582,4.999-9.725,4.999c-2.775,0-5.322-1.208-7.567-3.59c-3.325-3.528-6.03-5.102-8.772-5.102c-3.278,0-6.251,2.332-9.708,5.835c-2.236,2.265-4.368,3.366-6.518,3.366c-2.772,0-5.664-1.765-9.374-5.723c-2.488-2.654-4.29-4.395-6.561-4.395c-2.515,0-5.045,2.077-10.527,6.777c-2.727,2.337-4.426,2.828-5.37,2.828c-2.662,0-3.017-4.225-3.021-4.225l0.745-62.163c0.332-3.321,4.767-19.625,13.647-28.995c3.893-4.106,10.387-8.632,18.602-11.504c-0.458,0.503-0.744,1.165-0.744,1.898c0,1.565,1.269,2.833,2.833,2.833c1.564,0,2.833-1.269,2.833-2.833c0-1.355-0.954-2.485-2.226-2.764c4.419-1.285,9.269-2.074,14.437-2.074c7.636,0,15.336,1.684,22.887,5.004c26.766,11.771,29.011,39.047,29.027,39.251V121.405z" /></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="red"/></svg>'
    ];

    // Get the SVG content for the given month index
    return monthSVGContent[monthIndex];
}
