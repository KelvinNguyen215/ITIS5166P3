const { DateTime } = require("luxon");
const stories = [
{
    id: '1',
    title: 'My Life at Charlotte',
    content: 'I am a computer Science major at UNCC. I am a Senior. I hope to graduate this December with a BS at UNCC',
    author: 'Kelvin Nguyen',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)   
},
{
    id: '2',
    title: 'Learning NBAD',
    content: 'This is one of my favorite classes so far at UNCC. I feel like the content is applicable to the real world and the technologies are fun!',
    author: 'Kelvin Nguyen',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)

},
{
    id: '3',
    title: 'My Spring Break',
    content: 'This spring break I will be going home to visit my parents. I will also be completing any homework that is given to get ahead.',
    author: 'Kelvin Nguyen',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)

}
];

exports.find = () => stories;

exports.findbyID = id => stories.find(story=>story.id === id);


