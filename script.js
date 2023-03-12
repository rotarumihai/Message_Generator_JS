


const codeLanguageArray = ['JavaScript', 'Python', 'Go', 'Java', 'Kotlin', 'PHP', 'C#', 'Swift', 'R', 'Ruby', 'C++', 'Martlab', 'TypeScript', 'Scala', 'SQL', 'HTML', 'CSS', 'NoSQL', 'Rust', 'Perl'];
const markArray = ['A+','A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
const characteristicArray = ['excellent!', 'are good', 'are satisfactory', 'need improvement', 'are unsatisfactory'];
const whatToDoArray = ['Go to work!', 'You should continue learning.', 'Coding is not for you!'];

const yourFutureInCoding = () => {
    let i = Math.floor(Math.random() * 20);
    let codeLanguage = codeLanguageArray[i];
    console.log(`You will learn ${codeLanguage}!`);

    i = Math.floor(Math.random() * 13);
    let mark = markArray[i];
    console.log(`Your mark will be ${mark}.`)

    if (mark === 'A+' || mark === 'A' || mark === 'A-') {
        let characteristic = characteristicArray[0].toUpperCase();
        console.log(`Your codind skills: ${characteristic}!`)
        console.log(whatToDoArray[0]);
    }

    if (mark === 'B+' || mark === 'B' || mark === 'B-') {
        let characteristic = characteristicArray[1].toUpperCase();
        console.log(`Your codind skills: ${characteristic}!`)
        console.log(whatToDoArray[1]);
    }

    if (mark === 'C+' || mark === 'C' || mark === 'C-') {
        let characteristic = characteristicArray[2].toUpperCase();
        console.log(`Your codind skills: ${characteristic}!`)
        console.log(whatToDoArray[1]);

    }

    if (mark === 'D+' || mark === 'D' || mark === 'D-') {
        let characteristic = characteristicArray[3].toUpperCase();
        console.log(`Your codind skills: ${characteristic}!`)
        console.log(whatToDoArray[1]);
    }

    if (mark === 'F') {
        let characteristic = characteristicArray[4].toUpperCase();
        console.log(`Your codind skills: ${characteristic}!`)
        console.log(whatToDoArray[2]);
    }

    return 'Bye, bye:)'

}


let showIt = yourFutureInCoding();
console.log(showIt);




