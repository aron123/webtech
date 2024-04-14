/// <reference path="./types/index.d.ts" />

const users = [
    {
        id: 1,
        name: 'Tóth Géza',
        address: '3515 Miskolc',
        gender: 'male',
        dateofBirth: '1990-01-01',
        children: 2,
        homeOffice: true
    },
    {
        id: 2,
        name: 'Szabó Mária',
        address: '3520 Miskolc, Petőfi u. 11.',
        gender: 'female',
        dateofBirth: '1988-02-15',
        children: 3,
        homeOffice: false
    },
    {
        id: 3,
        name: 'Dr. Nagy Péter',
        address: '1515 Budapest, Kossuth L. u. 2.',
        gender: 'male',
        dateofBirth: '1977-07-21',
        children: 0,
        homeOffice: false
    },
    {
        id: 4,
        name: 'Horváth Béláné',
        address: '2222 Szeged, Fő u. 4.',
        gender: 'female',
        dateofBirth: '1966-01-01',
        children: 2,
        homeOffice: false
    },
];

const cars = [
    {
        id: 1,
        licensePlate: 'ABC-123',
        model: 'Trabant 601',
        operating: false
    }
];

function initialize() {
    $('#navbar').load('navbar.html');
    loadUserList();
}

function loadUserList() {
    $('#content').load('pages/user-list.html', () => {
        const table = $('#user-list');

        for (const user of users) {
            table.append(`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.address}</td>
                    <td>${user.gender == 'male' ? 'Férfi' : 'Nő'}</td>
                    <td>${user.dateofBirth}</td>
                    <td>${user.children}</td>
                    <td>${user.homeOffice ? 'Igen' : 'Nem'}</td>
                </tr>`
            );
        }
    });
}

function loadUserForm() {
    $('#content').load('pages/user-form.html');
}

function saveUser() {
    const name = $('#name').val();
    const address = $('#address').val();
    const gender = $('#male').prop('checked') ? 'male' : 'female';
    const dateOfBirth = $('#birthday').val();
    const children = $('#children').val();
    const homeOffice = $('#home-office').prop('checked');

    users.push({
        id: users.length + 1,
        name: name,
        address: address,
        gender: gender,
        dateofBirth: dateOfBirth,
        children: children,
        homeOffice: homeOffice
    });

    loadUserList();
}

initialize();