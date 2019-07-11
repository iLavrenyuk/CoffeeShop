export default class CoffeeService {
    _apiBase = '../db.json';

    async getResourse() {
        const res = await fetch(`${this._apiBase}`)
        
        if (!res.ok) {
            throw new Error(`Could not fetch` + 
            `, received ${res.status}`);
        }
        return await res.json();
    }
}