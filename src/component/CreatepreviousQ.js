export default function CreatepreviousQ (sentence) {
    return (
        <form>
            <div>
                <label>문장</label>
                <input type="text" placeholder={sentence} />
            </div>
            <div>
                <label>정답</label>
                <input type="text" placeholder="2" />
            </div>
            <div>
                <label>나 틀렸었나?</label>
                <input type="text" placeholder="ㅇㅇㅇ" />
            </div>
        </form>
    )
}