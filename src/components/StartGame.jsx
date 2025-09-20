const startGame = ({toggle}) => {
    return (
        <div className="max-w-[1180px] h-screen flex mx-auto items-center">
            <div>
                <img src="/images/dices.png" alt="Dice" />
            </div>
            <div className="ml-8">
                <h1 className="text-[96px] whitespace-nowrap font-bold">Dice Game</h1>
                <button onClick={toggle} className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"> Play Now</button>
            </div>
        </div>
    )
}

export default startGame