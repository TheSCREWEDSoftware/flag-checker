function checkFlags() {
    const selectedCategory = document.getElementById('flagCategory').value;
    const selectedFlags = flags[selectedCategory];
    const inputFlag = parseInt(document.getElementById('flagInput').value);

    if (isNaN(inputFlag)) {
        alert('Please enter a valid number!');
        return;
    }

    const inputValueDisplay = document.getElementById('inputValueDisplay');
    inputValueDisplay.textContent = `Flags included for bitmask value: ${inputFlag}`;

    const flagsIncluded = selectedFlags.filter(flag => (inputFlag & flag.bit) !== 0);

    const flagList = document.getElementById('flagList');
    flagList.innerHTML = '';

    const combinedList = document.getElementById('combinedList');
    combinedList.innerHTML = '';

    if (flagsIncluded.length > 0) {
        flagsIncluded.forEach(flag => {
            const listItem = document.createElement('li');
            listItem.textContent = `${flag.bit} - ${flag.name}`;
            flagList.appendChild(listItem);
        });

        // Create the list of flags in the (flag1 | flag2 | flag3 | flag4) format
        const flagNames = flagsIncluded.map(flag => flag.bit);
        const addFlag = `|${flagNames.join('|')}`;
        const removeFlag = `&~(${flagNames.join('|')})`

        // Display the formatted flags
        const flagStringElement = document.createElement('li');
        flagStringElement.textContent = `\`${selectedCategory}\`=\`${selectedCategory}\`${addFlag}`;
        combinedList.appendChild(flagStringElement);
        const removeFlagString = document.createElement('li');
        removeFlagString.textContent = `\`${selectedCategory}\`=\`${selectedCategory}\`${removeFlag}`;
        combinedList.appendChild(removeFlagString);
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No flags found';
        flagList.appendChild(listItem);
    }
}
