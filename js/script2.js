function showDeveloperInfo(lastName, firstName, position = 'Developer') {
    alert(`Information about developer\nSurname: ${lastName}\nName: ${firstName}\nPosition: ${position}`);
}

function compareStrings() {
    result = confirm("Do you want to compare the length of your strings?")
    if (result ===  true) {
        let firstString = prompt("Enter the first string:");
        let secondString = prompt("Enter the second string:");

        if (firstString.length > secondString.length) {
            alert(`First string '${firstString}' is longer than second string '${secondString}'`)
        }
        else if (firstString.length < secondString.length) {
            alert(`Second string '${secondString}' is longer than first string '${firstString}'`)
        }
        else if (firstString.length == secondString.length) {
            alert(`First string '${firstString}' is the same length as the second string '${secondString}'`)
        }
        else {
            alert(`Incorrect data! Please enter again!`)
        }
        result = confirm("Do you want to repeat your entry?");
        if (result ===  true) {
            compareStrings()
        }
    }
}

function changeBackgroundColor() {
    document.body.style.background = 'blue';
    setTimeout(() => document.body.style.background = "", 30000);
}

function otherWebsite() {
    if (confirm(location.href+"\nDo you confirm the transition to another site?") == true)
    {
        location.href = "https://en.wikipedia.org/wiki/Software_development";
    }
}

function changeElementColor() {
    let elem = document.getElementById('last_added');
    elem.style.backgroundColor='purple';
    setTimeout(() => elem.style.backgroundColor = "", 3000);
}

function officesEmails() {
    let elements = document.querySelectorAll('.offices > div:last-child');
    for (let elem of elements) {
        alert(elem.innerHTML); 
        alert(elem.outerHTML);

    }
}

function storeTitle() {
    let text = document.body.firstChild;
    alert(text.data);
}

function reviewInfo() {
    let elements = document.querySelectorAll('.container_main > p');
    for (let elem of elements) {
        alert(elem.textContent); 
    }
}

function addReviews() {
    let reviewList = document.getElementById('reviewList');
    let newReview = document.createElement('p');
    newReview.className = 'user_info';
    newReview.innerHTML = 'Current Date | <span class="accent">Username</span>';
    const reviewText = document.createElement('p');
    reviewText.textContent = "Text about software";
    reviewList.append(newReview, reviewText);
    reviewList.prepend("Added new review! ");
    reviewList.after("+1 Review! ");
}

function removeReviews() {
    let reviewList = document.getElementById('reviewList');
    reviewList.lastElementChild.previousElementSibling.remove();
    reviewList.lastElementChild.remove();

}



