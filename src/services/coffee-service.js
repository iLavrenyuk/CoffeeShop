export default class CoffeeService {
    _apiBase = 'http://localhost:3000/';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        
        if (!res.ok) {
            throw new Error(`Could not fetch` + 
            `, received ${res.status}`);
        }
        return await res.json();
    }
    async getBest() {
        return await this.getResourse('bestsellers');
    }
    async getCoffee() {
        return await this.getResourse('coffee');
    }
}