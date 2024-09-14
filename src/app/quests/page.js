import {Criterion, Phase, Quest, GetQuests} from "./questManager"

function ShowQuest() {
    let myObject = GetQuests()
    console.log(myObject)
    return(
        <>
        <h1>{myObject.name}</h1>
        <p>{myObject.description}</p>
        <p>{JSON.stringify(myObject.phases)}</p>
        <p>{JSON.stringify(myObject)}</p>
        </>
    )
}

export default function Page() {
return(
 <main>
 <h1> Hello!</h1>
    <ShowQuest />
 </main>
)
}