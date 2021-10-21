cars = [

    {
        name: 'Audi 2020 Model',
        carImage: "2020-Audi-650x366",
        price: '16 million'
    },
    {
        name: 'Toyota-Highlander 2020',
        carImage: "2020-Toyota-Highlander-650x366",
        price: '20 million'
    },
    {
        name: 'Toyota-Avalon-TRD',
        carImage: "2020-Toyota-Avalon-TRD-650x366",
        price: '26 million'
    },
    {
        name: 'Bentley-Flying-Spur',
        carImage: "2020-Bentley-Flying-Spur-650x366",
        price: '17 million'
    },
    {
        name: 'Lexus RC-F 2020',
        carImage: "2020-Lexus-RC-F-650x366",
        price: '19 million'
    },
    {
        name: 'Lexus RC-F 2020',
        carImage: "2020-Lexus-RC-F-650x366",
        price: '16 million'
    },
    {
        name: 'Lexus RC-F 2020',
        carImage: "2020-Lexus-RC-F-650x366",
        price: '16 million'
    },
    {
        name: 'Land Rover Defender 2020',
        carImage: "2020-Land-Rover-Defender-650x366",
        price: '17 million'
    },
    {
        name: 'GMC Acardia AT4 2020',
        carImage: "2020-GMC-Acadia-AT4-650x366",
        price: '25 million'
    },
    {
        name: 'Nissan Sentra 2020',
        carImage: "2020-Nissan-Sentra-650x366",
        price: '10 million'
    },
    {
        name: 'Ford Escape 2020',
        carImage: "2020-Ford-Escape--650x366",
        price: '15 million'
    },
    {
        name: 'Hyundai Sonata 2020',
        carImage: "2020-Hyundai-Sonata-650x366",
        price: '19 million'
    }
]

for (let i = 0; i < cars.length; i++) {
    const e = cars[i];
    document.getElementById("cars-row").innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12 car-card">
            <div class="card">
                <img src="img/${e.carImage}.jpg" class="card-img-top img-fluid" alt="... ">
                <div class="card-body ">
                    <h5 class="card-title ">${e.name}</h5>
                    <p class="card-text ">&#8358;${e.price}</p>
                </div>
            </div>
        </div>
    `
}