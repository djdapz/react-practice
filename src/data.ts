export interface PlayerI {
    position: "P"
        | "C"
        | "1B"
        | "2B"
        | "3B"
        | "SS"
        | "OF"
    name: string,
    projected: number,
    price: number
}

export const pitchers: PlayerI[] = [
    {

        position: "P",

        name: "Jose Quintana",
        projected: 15.53946,
        price: 7300
    },
    {
        position: "P",
        name: "Joe Musgrove", projected: 15.08712, price: 5800
    },
    {
        position: "P",
        name: "Billy Jogernson", projected: 1.08712, price: 500
    },
    {
        position: "P",
        name: "Nick Stevenson", projected: 4.20, price: 690
    },
    {
        position: "P",
        name: "Andy the Pitcher", projected: 4.20, price: 690
    },
]

export const catchers : PlayerI[] = [
    {

        position: "C",

        name: "Chance Sisco",
        projected: 8.73037,
        price: 4300
    }, {

        position: "C",

        name: "Chance the Catcher",
        projected: 2.73037,
        price: 2300
    }, {

        position: "C",

        name: "Charles Mittens",
        projected: 12.73037,
        price: 12300
    }, {

        position: "C",

        name: "Charlie Chops",
        projected: 8.73037,
        price: 9300
    },
];

export const players: PlayerI[] = [
    {

        position: "C",

        name: "Chance Sisco",
        projected: 8.73037,
        price: 4300
    },
    {
        position: "1B",
        name: "Matt Olson", projected: 9.72936, price: 4300
    },
    {

        position: "2B",

        name: "Jason Kipnis",
        projected: 9.39718,
        price: 3500
    },
    {
        position: "3B",
        name: "DJ LeMahieu", projected: 11.07167, price: 4800
    },
    {

        position: "SS",

        name: "Manny Machado",
        projected: 10.99596,
        price: 4400
    },
    {
        position: "OF",
        name: "Cody Bellinger", projected: 10.85941, price: 5400
    },
    {

        position: "OF",

        name: "Kris Bryant",
        projected: 10.83005,
        price: 4900
    },
    {
        position: "OF",
        name: "Hunter Renfroe", projected: 10.67716, price: 4400
    },
];


