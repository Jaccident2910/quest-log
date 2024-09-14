import { promises as fs } from 'fs';

// We need to define how quests are laid out:
/*
Quests consist of:
    Quest Name
    Quest Description
    Quest Phases:

Phases consist of:
    Phase criteria
    Phase rewards

Criteria consist of:
    Criterion as a string
    Boolean defining completion
*/

class Criterion {
    constructor(critString){
        this.critString = critString;
        this.complete = false
    }

    finish() {
        complete = true
    }

    reset() {
        complete = false
    }

}

class Phase {
    constructor(critArray, reward){
        this.critArray = critArray;
        this.reward = reward;
    }
}


class Quest {

    constructor(name, description){
        this.name = name;
        this.description = description;
        this.phases = []
    }
}

/* Generate example JSON

exampleCriterion = new Criterion("This is the first Criterion")
exampleCriterion2 = new Criterion("This is the second Criterion")

examplePhase = new Phase([exampleCriterion, exampleCriterion2], 1)

exampleQuest = new Quest("Example Quest", "This is an example of a quest")
exampleQuest.phases.push(examplePhase)

console.log(JSON.stringify(exampleQuest))

*/

export async function GetQuests(){
    const file = await fs.readFile(process.cwd() + '/src/app/quests/quests.json', 'utf8');
    //const file = await fs.readFile('/src/app/quests/questManager.js', 'utf8');
    let theObject = JSON.parse(file)
    console.log(theObject)
    let myQuest = new Quest(theObject.name, theObject.description)
    return myQuest
}



