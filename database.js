const books = [{
    ISBN : "1234book",
    title : "End Days to Come",
    publishDate : "20 August 2021",
    language : "en",
    numPage : 250,
    author : [1,2],
    publication : [1],
    category : ["Thriller", "Education", "Fiction"],
},
{
    ISBN : "123go",
    title : "Power og tongue",
    publishDate : "19 September 1919",
    language : "en",
    numPage : 309,
    author : [1],
    publication : [1],
    category : ["Thriller", "Education", "fiction"],
},
];

const author = [{
    id : 1,
    name : "Tanisha",
    books : ["12345book"],
    
},
    {
    id : 2,
    name : "David",
    books : ["12345book"],
    },
];

const publication = [{
    id : 1,
    name : "writex",
    books : ["12345book"],
},
];
module.exports = { books, author, publication};