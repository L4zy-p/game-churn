interface Player{
    name: string
    loginTimes: number
    missionsCompleted: number
    itemsPurchased: number
    hoursPlayed: number
}

const calculateChurnScore = (player: Player) => {
    const score = (player.loginTimes * 0.3) + (player.missionsCompleted * 0.4) + (player.itemsPurchased * 0.2) + (player.hoursPlayed * 0.1)
    return score
}

const isChurn = (score: number) => {
    if(score < 3){
        return true
    }
    return false
}

const playerData = (player: Player[]) => {
    return player.forEach((player) => {
        const score = calculateChurnScore(player)
        console.log(`Player Name: ${player.name}`)
        console.log(`Login Times: ${player.loginTimes}`)
        console.log(`Missions Completed: ${player.missionsCompleted}`)
        console.log(`Items Purchased: ${player.itemsPurchased}`)
        console.log(`Hours Played: ${player.hoursPlayed}`)
        console.log(`Churn Score: ${score.toFixed(2)}`)
        console.log(`Is Churn: ${isChurn(score)}`)
        console.log("")
    })
}

const notificationChurn = (player: Player[]) => {
    return player.forEach((player) => {
        const score = calculateChurnScore(player)
        if(isChurn(score)){
            console.log(`Player Name: ${player.name}`)
            console.log(`Churn Score: ${score.toFixed(2)}`)
            console.log(`Is Churn: ${isChurn(score)}`)
            console.log("")
        }
    })
}

const main = () => {
    // ข้อมูลผู้เล่น
    const players: Player[] = [
        { name: "player1", loginTimes: 5, missionsCompleted: 2, itemsPurchased: 0, hoursPlayed: 3 },
        { name: "player2", loginTimes: 10, missionsCompleted: 8, itemsPurchased: 5, hoursPlayed: 15 }
    ]

    // ต้องรายงานพฤติกรรมของผู้เล่น
    playerData(players)
    // ต้องแจ้งเตือนผู้มีแนวโน้มจะเลิกเล่น
    notificationChurn(players)
}

main()