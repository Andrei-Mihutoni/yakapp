
export function get(callback) {
    const key = "5f96aff04b77c1637d147e14";
    const url = "https://carsdb-97db.restdb.io/rest/cards";

    fetch(url, {
        method: "get",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": key,
            "cache-control": "no-cache"
        }
    })
        .then(e => e.json())
        .then(data => callback(data));

}

