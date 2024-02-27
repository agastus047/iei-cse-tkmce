const eventlist=[
    {
        id:0,
        name:'Codebytes - Romeo & Juliet',
        discription:' Hola peeps✨ Welcome to CODEBYTES, the thrilling coding competition brought to you by IEI CSE TKMCE as a part of THE WEEKEND SHOW. Get ready for an exhilarating coding experience that will challenge your skills, ignite your passion, and fuel your competitive spirit.',
        img:'/assets/event.png',
        link:'event1',
        date:'11/12/2023',
        isPaid:false,
        price:{
            ieiMember:0,
            nonieiMember:0
        },
        time:'10 to 10pm',
        venue:'Hackerrank',
        cordinator: {
            1: ["Abhinand", "8590813125"],
            2: ["Sangheeth", "8589011080"]
        },
        pref1:{
            desc:["Enter the size of the T-shirt "],
            option:{
                1:["2xl","xl","L","M","S"],
            }
        },
        pref2:{
            desc:["Enter why did you register for this event","Enter the feedback"],
        },
        referalId:true,
    },
    {
        id:1,
        name:'Event2',
        discription:'event1',
        img:'/assets/event.png',
        link:'event2'
    },
    {
        id:2,
        name:'Event3',
        discription:'event1',
        img:'/assets/event.png',
        link:'event3'
    },
    {
        id:3,
        name:'Event4',
        discription:'event1',
        img:'/assets/event.png',
        link:'event4'
    },
];

export default eventlist;