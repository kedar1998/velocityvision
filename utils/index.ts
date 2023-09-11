export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '3643e0b418msh5dbaa00336267eap15bbdajsnb4b3346cfc1a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    })

    const result = response.json()

    return result;
}