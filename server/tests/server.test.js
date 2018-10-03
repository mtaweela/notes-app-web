const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const { app } = require("./../server");
const { Todo } = require("./../models/todos");
const {todos, populateTodos, users, populateUsers} = require('./seed/seed');


beforeEach(populateUsers);
beforeEach(populateTodos);

describe("POST /todos", () => {
  it("should create a new todo", done => {
    var text = "test todo text";
    var title = 'new title';

    request(app)
      .post("/api/todos")
      .send({ text, title })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({ text })
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch(e => done(e));
      });
  });

  it(" should not create todo with invalid body data", done => {
    request(app)
      .post("/api/todos")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find()
          .then(todos => {
            expect(todos.length).toBe(2);
            done();
          })
          .catch(e => done(e));
      });
  });
});

describe("GET /todos", () => {
  it("should get all todos", done => {
    request(app)
      .get("/api/todos")
      .expect(200)
      .expect(res => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe("Get /todos/:id", () => {
  it("should return todo doc", done => {
    request(app)
      .get(`/api/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it("should return 404 if todo not found", done => {
    request(app)
      .get(`/api/todos/${new ObjectID().toHexString()}`)
      .expect(404)
      .end(done);
  });

  it("should return 404 if non object id", done => {
    request(app)
      .get(`/api/todos/123`)
      .expect(404)
      .end(done);
  });
});

describe("Delete /todos/:id", () => {
  it("should remove a todo", done => {
    var hexId = todos[1]._id.toHexString();

    request(app)
      .delete(`/api/todos/${hexId}`)
      .expect(200)
      .expect(res => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId)
          .then(todo => {
            expect().toBeFalsy();
            done();
          })
          .catch(err => done(err));
      });
  });

  it("should return 404 if todo not found", done => {
    request(app)
      .delete(`/api/todos/${new ObjectID().toHexString()}`)
      .expect(404)
      .end(done);
  });

  it("should return 404 if object id is not valid", done => {
    var hexId = todos[1]._id.toHexString();
    request(app)
      .delete(`/api/todos/123`)
      .expect(404)
      .end(done);
  });
});

describe("PUT /todos/:id", () => {
  it("should update the todo", done => {
    var hexId = todos[0]._id.toHexString();
    var text = "this should be the new text";

    request(app)
      .put(`/api/todos/${hexId}`)
      .send({
        completed: true,
        text
      })
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(true);
        expect(typeof res.body.todo.completedAt).toBe("number");
      })
      .end(done);
  });

  it("should clear completed at when todo is not completed", done => {
    var hexId = todos[1]._id.toHexString();
    var text = "this should be the new text!!";

    request(app)
      .put(`/api/todos/${hexId}`)
      .send({
        completed: false,
        text
      })
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.completedAt).toBeFalsy();
      })
      .end(done);
  });
});
