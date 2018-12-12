const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

const schema = buildSchema(`
  type User {
    id : String!
    nickname : String!
    avatar : String!
  }
  type Post {
      id: String!
      user: User!
      caption : String!
      image : String!
  }
  type Query{
    user(id: String) : User!
    post(user_id: String, post_id: String) : Post!
    posts(user_id: String) : [Post]
  }
`);

const root = {
  user: function({ id }) {
    return users[id];
  },
  post: function({ user_id , post_id }) {
    return posts[user_id][post_id];
  },
  posts: function({ user_id }){
    return Object.values(posts[user_id]);
  }
};

const users = {
  a: {
    id: "a",
    nickname: "j0nathanb",
    avatar: "https://s3.amazonaws.com/j0nathanb-random/images/profile_pic2.jpg"
  },
};

const posts = {
  a: {
    a: {
      id: "a",
      user: users["a"],
      caption: "Wow",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/0.jpg"
    },
    b: {
      id: "b",
      user: users["a"],
      caption: "Neato",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/2.jpg"
    },
    c: {
      id: "c",
      user: users["a"],
      caption: "Amazing",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/3.jpg"
    },
    d: {
      id: "d",
      user: users["a"],
      caption: "Bodacious",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/4.jpg"
    },
    e: {
      id: "e",
      user: users["a"],
      caption: "Tubular",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/5.jpg"
    },
    f: {
      id: "f",
      user: users["a"],
      caption: "Radical",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/6.jpg"
    },
    g: {
      id: "g",
      user: users["a"],
      caption: "Incredible",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/7.jpg"
    },
    h: {
      id: "h",
      user: users["a"],
      caption: "Fantastic",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/8.jpg"
    },
    i: {
      id: "i",
      user: users["a"],
      caption: "Marvelous",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/9.jpg"
    },
    j: {
      id: "j",
      user: users["a"],
      caption: "Excellent",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/10.jpg"
    },
    k: {
      id: "k",
      user: users["a"],
      caption: "Terrific",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/11.jpg"
    },
    l: {
      id: "l",
      user: users["a"],
      caption: "Spiffy",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/12.jpg"
    },
    m: {
      id: "m",
      user: users["a"],
      caption: "On fleek",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/13.jpg"
    },
    n: {
      id: "n",
      user: users["a"],
      caption: "Fire",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/14.jpg"
    },
    o: {
      id: "o",
      user: users["a"],
      caption: "Lit",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/15.jpg"
    },
    p: {
      id: "p",
      user: users["a"],
      caption: "Cool",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/16.jpg"
    }, 
    q: {
      id: "q",
      user: users["a"],
      caption: "Amaze-balls",
      image: "https://s3.amazonaws.com/j0nathanb-random/images/1.jpg"
    }
  }
};

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
// set application port
app.listen(4000);