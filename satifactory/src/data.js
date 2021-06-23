export const nodes = [
    {
        type: 'Iron Ore',
        amounts: {
            impure: 0,
            normal: 0,
            pure: 0 
        }
    },
    {
        type: 'Limestone',
        amounts: {
            impure: 0,
            normal: 0,
            pure: 0 
        }
    },
    {
        type: 'Copper Ore',
        amounts: {
            impure: 0,
            normal: 0,
            pure: 0 
        }
    },
]

export const smelters = [
    {
        type: 'Iron',
        amount: 0,
        input: 'iron ore',
        output: 'iron ingot'
    },
    {
        type: 'Copper',
        amount: 0,
        input: 'coper ore',
        output: 'copper ingot'
    },
]

export const constructors = [
    {
        type: 'Iron Plate',
        amount: 0,
        input: {ironIngot: 30},
        output: {ironIngot: 20}
    },
    {
        type: 'Iron Rod',
        amount: 0,
        input: {ironIngot:15},
        output: {ironIngot: 15}
    },
    {
        type: 'Screw',
        amount: 0,
        input: {ironRod: 10},
        output: {screw: 40}
    },
    {
        type: 'Copper Sheet',
        amount: 0,
        input: {coperIngot: 20},
        output: {copperIngot: 10}
    },
    {
        type: 'Wire',
        amount: 0,
        input: {coperIngot: 15},
        output: {copperIngot: 30}
    },
    {
        type: 'Cable',
        amount: 0,
        input: {wire: 60},
        output: {cable: 30}
    },
    {
        type: 'Concrete',
        amount: 0,
        input: {coperIngot: 30},
        output: {copperIngot: 20}
    },
]