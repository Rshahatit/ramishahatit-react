import wiki from '../assets/images/projects/wiki.png'
import zts from '../assets/images/projects/zts.png'
import hermes from '../assets/images/projects/hermes.png'
import encouragement from '../assets/images/projects/encouragement.png'

export default [
    {
        id: 1,
        title: "Wikiracer",
        icon: wiki,
        description: "A REST API to find the path to traverse from one Wikipedia page to another, using only links.",
        githubPath: "https://github.com/Rshahatit/wikiracer",
        year: 2020,
        techUsed: "Django, Docker, asyncio"
    },
    {
        id: 2,
        title: "Zoom Transcription Service",
        icon: zts,
        description: "A mac application to create meeting minutes after a virtual recorded meeting. Using Microsoft's congitive services api for facial recongition and speech to text.",
        githubPath: "https://github.com/Rshahatit/ZTS",
        demoPath: "http://ai.hackathon.com/",
        year: "2017",
        techUsed: "python, platypus",
        hackathon: "Global AI Hackathon SF 2017",
        award: "1st Place"
    },
    {
        id: 3,
        title: "Hermes",
        description: "An IoT platform for inventory on devices where devices send inventory data to our platform, which automatically places orders for re-stock on their behalf. This demo is based on an office setting with a 3D printer, refrigerator and a coffee machine.",
        githubPath: "https://github.com/andreaskari/Hermes",
        year: "2017",
        techUsed: "python, flask, React",
        hackathon: "Developer Week Hackathon 2017",
        award: "2nd Place for Best Use of Aspera Files API"
    },
    {
        id: 4,
        title: "Edge Text",
        description: "Processed speach on the edge using a raspberry pi, a mic, and a speech-to-text ai. Managed the edge node (pi) by creating a dockerized image and deploying it through ioFog.",
        demoPath: "https://www.linkedin.com/posts/edgeworx-inc_edgecomputingworld-hackathon-edgecomputing-activity-6610658906878410752-_Rar",
        year: "2019",
        techUsed: "python, docker, ioFog ",
        hackathon: "Edgeworx Hackathon",
        award: "2nd Place"
    },
    {
        id: 5,
        title: "Encouragement",
        icon: encouragement,
        description: "This is a basic Alexa skill to give you some encouragement whenever you need it. Just ask Alexa for a inspirational quote and she will give you motivation.",
        demoPath: "https://www.amazon.com/Rami-Shahatit-Encouragement/dp/B01N7CRXU4",
        year: "2016",
        techUsed: "nodejs, aws: lambda, alexa"
    },
    {
        id: 6,
        title: "FamilyRise",
        description: "Utilized Square’s E-commerce API to track customer’s recent transactions and map them to customer’s names, to notify cashier of this information for later visits",
        githubPath: "https://github.com/Rshahatit/FamilyRise",
        year: "2016",
        techUsed: "swift, JustInMind",
        hackathon: "Intuit's Small Business Hackathon 2016",
        award: "Best Integration of Postman's API"
    },
];
