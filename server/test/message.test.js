const chai =require('chai');
const chaiHttp =require('chai-http');
const app =require('../server');
const newMessage =require('../controllers/messages');

chai.should();
chai.use(chaiHttp);

const expect = chai.expect;

describe("Welcome to EPICMail API", () => {
  it("it should display a welcome message", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.body.should.be.an("object");
        res.body.should.property("message").which.is.a("string");
        done();
      });
  });
});

describe("POST /newMessage", () => {
  it("once it fails to create a new political party, it should error message with status code of 400", (done) => {
    const newOffice = {
      name: "",
      type: "K",
    };
    chai
      .request(app)
      .post("/api/messages")
      .send(newMessage)
      .end((err, res) => {
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("status");
        expect(res.body).to.have.property("error");
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("it should create a new Message and Status code of 201", (done) => {
    chai
      .request(app)
      .post("/api/messages")
      .send({
        id: messages.length + 1,
        createdOn: moment(Date.now()),
        subject: req.body.subject,
        msg: req.body.msg,
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        parentMessageId: req.body.parentMessageId,
        status: req.body.status
        
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res.body).to.be.an("object");
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property("status");
        expect(res.body).to.have.property("data");
        done();
      });
  });
});
describe("GET /messages", () => {
  it("it should fetch all Messages", (done) => {
    chai
      .request(app)
      .get("/api/Messages")
      .end((err, res) => {
        res.body.should.property("status").eql(200);
        res.body.should.property("data").that.is.an("array");
        done();
      });
  });
});

describe("GET /messages/<message-id>", () => {
  it("once it fails to fectch a specific messages, it should show error message with status code of 404", (done) => {
    const id = "fake_id";
    chai
      .request(app)
      .get(`/api/messages/${id}`)
      .end((err, res) => {
        res.body.should.property("status").eql(400);
        res.body.should.property("error").that.is.a("string");
        done();
      });

  });
  it("it should return a specific Message", (done) => {
    const id = 1;

    chai
      .request(app)
      .get("/api/messages")
      .end((err, res) => {
        expect(res.body).to.be.an("object");
        done();
      });
  });


});

