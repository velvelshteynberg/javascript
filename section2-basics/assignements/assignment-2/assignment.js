const task3Element = document.getElementById('task-3');

function alertMessage() {
    alert('Amazingness');
}

function theName(name) {
    alert(name);
}

alertMessage();
theName('Velvel');

task3Element.addEventListener('click', alertMessage )

function newFunction(param1, param2, param3) {
    const combined = `${param1} ${param2} ${param3} `;
    return combined;
}

const variable = newFunction('hello ', 'great ', 'day')
alert(variable);