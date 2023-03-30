export default function randomDegreeGenerator(noOfSlots,restrictedSlots){
    let slotDegree = 360/noOfSlots;
    console.log(restrictedSlots)
    let randomNumer = Math.floor(restrictedSlots.length*Math.random())
    let randomSelectedSlot = restrictedSlots[randomNumer];
    alert(randomSelectedSlot)


    return (randomSelectedSlot - 1)*slotDegree + slotDegree/2
}