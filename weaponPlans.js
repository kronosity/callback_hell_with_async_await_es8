//basic example of async and await (ES8), 
//here's the library of 'events' 
// using 68 colums of nested callback hell! 

const buildingWeapon = () => {
    return new Promise((resolve, reject)=> {
        console.log(`
        
        
    ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    ||                                                          ||   
    ||                 SKYNET is [online]                       ||  
    ||                                                          ||  
    ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   


        ............commencing build sequence to construct super weapon...`)
setTimeout(()=>{
    console.log(`
    .......gathering schematics, evaluating plans...
    
    `) 
    setTimeout(()=>{
        console.log(`standby...`)
        setTimeout(()=>{
            console.log(`
            design plans complete...`)
            setTimeout(()=>{
                console.log(`
                ordering materials...`)
                setTimeout(()=>{
                    console.log(`
                    standby drone bot extractor...`)
                    setTimeout(()=>{
                        console.log(`
                        extracting uranium with drone bot #991e...`)
                        setTimeout(()=>{
                            console.log(`
                            [warning]..........rediverting electricity for enhanced consumption... `)
                            setTimeout(()=>{
                                console.log(`
                                [alert]......enriching uranium...standby....  `)
                                setTimeout(()=>{
                                    console.log(`
                                    uranium enrichment complete....`)
                                    setTimeout(()=>{
                                        console.log(`
                                        building titanium firing mechanism...`)
                                        setTimeout(()=>{
                                            console.log(`
                                            building launch pad...standby...`)
                                            setTimeout(()=>{
                                                console.log(`
                                                Clear to launch weapon into stratosphere... `)
                                                setTimeout(()=>{
                                                    console.log(`T minus...........................................5 `)
                                                    setTimeout(()=>{
                                                        console.log(`.............................................4 `) 
                                                        setTimeout(()=>{
                                                            console.log(`........................................3 `) 
                                                            setTimeout(()=>{
                                                                console.log(`...................................2 `) 
                                                                setTimeout(()=>{
                                                                    console.log(`..............................1 `)
                                                                    setTimeout(()=>{
                                                                        console.log(`we have lift off ^ ...standby`)
                                                                        setTimeout(()=>{
                                                                            console.log(`
                                                                            confirming orbital position... `)
                                                                            setTimeout(()=>{
                                                                                console.log(`     deploying self correcting orbital guidance system... 
                                                                                
                                                                                `)
                                                                                setTimeout(()=>{
                                                                                    console.log(`Weapon is now [online], deployed in orbit... 
                                                                                    
                                                                                    `)
                                                                                    setTimeout(()=>{
                                                                                        console.log(`standby... 
                                                                                        
                                                                                        `)
                                                                                        resolve('Nuclear powered Ion Cannon ')
                                                                                        }, 2000)
                                                                                    }, 2000)
                                                                            }, 1000)    
                                                                        }, 1000)    
                                                                    }, 1000)    
                                                                }, 1000)    
                                                            }, 1000)    
                                                        }, 1000)    
                                                    }, 1000)    
                                                }, 2000)
                                            }, 2000)
                                        }, 2000)
                                    }, 2000)
                                }, 2000)
                            }, 2000)
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)   
},2000)
})
}
module.exports = buildingWeapon;