let myArray = ['John', 'Alice', 'Bob'];

const addFriendInput = document.getElementById('addFriend');
const addFriendButton = document.getElementById('addNew');
const outputTable = document.getElementById('output');

addFriendButton.addEventListener('click', () => {
    const newFriend = addFriendInput.value.trim();
    
    if (newFriend !== '' && /^[a-zA-Z]+$/.test(newFriend)) {
        if (!myArray.includes(newFriend)) {
            myArray.push(newFriend);
            buildPageContent();
            addFriendInput.value = '';
        } else {
            alert('Name already exists!');
        }
    } else {
        alert('Please enter a valid name (letters only).');
    }
});

function buildPageContent() {
    outputTable.innerHTML = '';
    myArray.forEach((person, index) => {
        const formattedName = person.charAt(0).toUpperCase() + person.slice(1).toLowerCase();
        createTableRow(index, formattedName);
    });
}

function createTableRow(index, name) {
    const tableRow = document.createElement('tr');
    
    const indexCell = document.createElement('td');
    indexCell.textContent = index + 1;
    // indexCell.style.backgroundColor = "#ddd";
    tableRow.appendChild(indexCell);
    
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    tableRow.appendChild(nameCell);
    
    const voteCell = document.createElement('td');
    voteCell.textContent = 0;
    voteCell.style.backgroundColor = "#ddd";
    voteCell.classList.add("pressed");
    tableRow.appendChild(voteCell);

    outputTable.appendChild(tableRow);

    tableRow.addEventListener('click', () => {
        let currentVotes = parseInt(voteCell.textContent);
        currentVotes++;
        voteCell.textContent = currentVotes;
    });
}

buildPageContent();

