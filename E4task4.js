//Task 4    
function Device(name, wattage){
    this.name = name
    this.isPowered = false
    this.wattage = wattage * this.isPowered
    this.switch = function(){
        this.isPowered = !this.isPowered
        }
    this.getWattage = function(){
        console.log(`${name} now consumes ${wattage}W`)
        }
    }

function IPSUnit(name, wattage, charge){
    this.name = name
    this.wattage = wattage
    this.charge = charge
    }
    
IPSUnit.prototype = new Device()

function Computer(name, wattage, CPULoad, RAMLoad){
    this.name = name
    this.wattage = wattage
    this.CPULoad = CPULoad
    this.RAMLoad = RAMLoad
    this.RAMFlush = function(){
        this.RAMLoad = 0
        }
    }

Computer.prototype = new IPSUnit()

Object.create(IPSUnit, myUnit, 200, 90)
Object.create(Computer, myComp, 450, 10, 42)
myUnit.switch()
totalWattage = myUnit.wattage + myComp.wattage
console.log(totalWattage)
