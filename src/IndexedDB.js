const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const request = indexedDB.open("CarsDatabase", 1);

request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
};

request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("cars", { KeyPath: "id"});
    store.createIndex("cars_colour", ["colour"], { unique: false});
    store.createIndex("colour_and_make", ["colour", "make"],{
        unique: false,
    });
}

request.onsuccess = function() {
    const db = request.result;
    const transaction = db.transaction("cars", "readwrite");

    const store = transaction.objectStore("cars");
    const colourIndex = store.index("cars_colour");
    const makeModelIndex = store.index("colour_and_make");

    store.put({ id: 1, colour: "Red", make: "Toyota"});
    store.put({ id: 2, colour: "Red", make: "Kia"});
    store.put({ id: 3, colour: "Blue", make: "Honda"});
    store.put({ id: 4, colour: "Silver", make: "Subaru"});

    const idQuery = store.get(4);
    const colorQuery = colourIndex.getAll(["Red"]);
    const colourMakeQuery = makeModelIndex.get(["Blue", "Honda"]);

    idQuery.onsucess = function () {
        console.log('idQuery', idQuery.result);
    };

    colourMakeQuery.onsucess = function () {
        console.log('colourQuery', colourQuery.result);
    };

    colourMakeQuery.onsuccess = function () {
        console.log('colourMakeQuery', colourMakeQuery.result);
    };

    transaction.oncomplete = funcion (); {
        db.close();
    };
}