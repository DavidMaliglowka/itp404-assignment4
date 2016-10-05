import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
  return $.ajax({
    url:'https://www.reddit.com/r/emberjs.json',
    type:'get',
    dataType:'json'
  }).then(function(json) {
    return json.data.children.map(function(eachPost){
      var cleanArrayOfThreads = {
        score: eachPost.data.score,
        title: eachPost.data.title,
        url: eachPost.data.url,
        comments: eachPost.data.num_comments,
        archived: eachPost.data.archived ? 'Archived': 'Not Archived'
      };
      console.log(cleanArrayOfThreads);
      return cleanArrayOfThreads;
    });

  })
  }
});
