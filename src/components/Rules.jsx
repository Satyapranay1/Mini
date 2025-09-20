const Rules = () => {
    return (
        <div className="max-w-[800px] mx-auto bg-[#fbf1f1] p-5 mt-10 rounded-[10px]">
            <h2 className="text-2xl font-semibold">How to play dice game</h2>
            <div className="mt-6 space-y-2">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                    After clicking the dice, if the selected number equals the dice number,
                    you will get the same point as the dice
                    </p>
                <p>If you guess wrong, 2 points will be deducted</p>
            </div>
        </div>
    )
}
export default Rules;