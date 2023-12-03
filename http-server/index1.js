const userForm = document.getElementById("user-form");
const userEntries = retrieveEntries();

function retrieveEntries() {
    let entries = localStorage.getItem("user-entries");
    entries = entries ? JSON.parse(entries) : [];
    return entries;
}

function displayEntries() {
    const entries = retrieveEntries();
    const tableEntries = entries.map(entry => {
        const { name, email, password, dob, acceptedTermsAndconditions } = entry;
        const cells = [name, email, password, dob, acceptedTermsAndconditions].map(value =>
            `<td class='border px-4 py-2'>${value}</td>`
        ).join("");

        return `<tr>${cells}</tr>`;
    }).join("\n");

    const table = `<table class="table-auto w-full">
        <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Password</th>
            <th class="px-4 py-2">DOB</th>
            <th class="px-4 py-2">Accepted Terms?</th>
        </tr>${tableEntries}</table>`;

    document.getElementById("user-entries").innerHTML = table;
}

function saveUserForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndconditions = document.getElementById("acceptTerms").checked;

    const entry = { name, email, password, dob, acceptedTermsAndconditions };
    userEntries.push(entry);
    
    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    displayEntries();
}

userForm.addEventListener("submit", saveUserForm);
displayEntries();